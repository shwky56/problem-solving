'use strict'

var Q = require('q'), defer = Q.defer, when = Q.when, isPromise = Q.isPromise
var Promised = require('promised-utils').Promised
var Trait = require('light-traits').Trait

function promisify(trait) {
  var pmap = {}
  var map = {}

  Object.getOwnPropertyNames(trait).forEach(function (key) {
    var method, getter, setter, property, descriptor
    property = trait[key]
    descriptor = {
      configurable: property.configurable,
      enumerable: property.enumerable
    }

    // Copying descriptor as a data value.
    pmap[key] = { value: descriptor, enumerable: true }
    // Copying property descriptor as a data value.
    map[key] = { value: property, enumerable: true }

    // If it is not a conflict property
    if (!property.conflict) {

      method = 'function' == typeof property.value ? property.value : null
      getter = 'function' == typeof property.get ? property.get : null
      setter = 'function' == typeof property.set ? property.set : null

      // if property is marked as required we promisify it's getter and setters.
      if (property.required) {
        if (getter) descriptor.get = Promised.sync(Getter(key))
        if (setter) descriptor.set = Promised.sync(Setter(key))
      } else {
        if (getter) descriptor.get = property.get = Promised.sync(getter)
        if (setter) descriptor.set = property.set = Promised.sync(setter)
        if (method) {
          descriptor.writable = property.writable
          descriptor.value = property.value = Promised(method)
        } else {
          descriptor.get = Promised.sync(Getter(key))
          descriptor.set = Promised.sync(Setter(key))
        }
      }
    }
  })

  return Object.create(Object.create(PromisedTrait.prototype, pmap), map);
}

function PromisedTrait() {
  return promisify(Trait.apply(null, arguments))
}
PromisedTrait.compose = function compose () {
  return promisify(Trait.compose.apply(Trait, arguments))
}
PromisedTrait.required = Trait.required
PromisedTrait.prototype = Object.freeze(Object.create(Trait.prototype,
{ create: { value: function create(proto) {
    proto = when(proto, Trait.prototype.create.bind(this))
    return Trait.prototype.create.call(Object.getPrototypeOf(this), proto)
  }}
}))
exports.PromisedTrait = Object.freeze(PromisedTrait)

var Getter = Object.freeze(function promisedGetter(key) {
  return function getter() { return this[key] }
})
Object.freeze(Getter.prototype)
var Setter = Object.freeze(function promisedSetter(key) {
  return function setter(value) { this[key] = value }
})
Object.freeze(Setter.prototype)
var Method = Object.freeze(function promisedMethod() {
  return this[key].apply(this, arguments)
})
Object.freeze(Method.prototype)
