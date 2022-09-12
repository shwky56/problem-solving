promised-fs
===========

Provides `defer/when` style [promise][promise] based filesystem API for
[node.js](http://nodejs.org/). This alternative API allows writing code
in a liniar fasion while still preserving asynchronous behavior.

# Example #

        var fs = require('promised-fs')
        ,   when = require('q').when

        var somePath = fs.workingDirectory().join('someFile.bla')
        var data = fs.read(somePath)
        var wroteTemp = fs.write('/some/path/temp.bla', data)

        when
        ( wroteTemp
        , function resovled() {
            doSomethingNow()
          }
        , function rejected(error) {
            doSomethingElseIfFailed(error)
          }
        )

# Install #

<pre class="console">
npm install promised-fs
</pre>

# Test #

<pre class="console">
npm test promised-fs
</pre>

[promises/b]:http://wiki.commonjs.org/wiki/Promises/B
[promise]:http://en.wikipedia.org/wiki/Futures_and_promises 
