# promised-traits #

Library that combines goodness of traits and superpowers of promises to allow
writing pretty linear code for doing asynchronous magic.

    var PromisedTrait = require('promised-traits').PromisedTrait
    ,   q = require('q')

    var TExample = PromisedTrait(
    { firstName: PromisedTrait.required
    , fullName: function fullName(lastName) {
        return this.firstName + ' ' + lastName
      }
    , greet: function greet(name) {
        return 'Hello ' + name
      }
    })

    var deferred = q.defer()
    ,   example = TExample.create(deferred.promise)

    var name = example.fullName('Bar')  // returns promise
    var message = example.greet(name)   // returns promise

    // Log message once promise is resolved.
    q.when(message, function(message) { console.log(message) })
    // Resolving the promise we used to create our object from.
    deferred.resolve({ firstName: 'Foo' })
    // > Hello Foo Bar

# Install #

    npm install promised-traits
