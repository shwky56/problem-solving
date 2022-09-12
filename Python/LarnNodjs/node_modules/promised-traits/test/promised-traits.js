'use strict'

var Q = require('q'), when = Q.when, Promise = Q.Promise
,   Trait = require('light-traits').Trait
,   all = require('promised-utils').all
,   PromisedTrait = require('promised-traits').PromisedTrait

exports['test basic'] = function(assert, done) {
  var promisedTrait = PromisedTrait(
    { baz: 120
    , foo: function foo(baz) {
        return this.baz + baz
      }
    , _bar: null
    , get bar() {
        return this._bar
      }
    , set bar(value) {
        return this._bar = value
      }
    })

  assert.ok(promisedTrait instanceof Trait, 'promised trait is a normal trait')
  var promise = promisedTrait.create()

  assert.equal(promise.baz, 120, 'normal values does not change')
  var bar = promise.bar
  assert.ok(bar instanceof Promise, 'getters do return promises')
  var test1 = when
  ( bar
  , function(value) {
      assert.equal(value, promise._bar, 'getter promise resolved as expected')
    }
  , function() {
      assert.fail('getter promise rejected')
      done()
    }
  )

  var test2 = when
  ( promise.foo(17)
  , function(value) {
      assert.equal(value, 137, 'method promise resolved correctly')
    }
  , function() {
      assert('function promise rejected')
    }
  )
  
  when(all(test1, test2), done)
}

if (module == require.main) require('test').run(exports)
