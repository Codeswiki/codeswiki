/*

Copyright (c) 2016 [Alex Patch]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

const gulp = require('gulp');
const browserify = require('browserify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const notify = require('gulp-notify');

function handleErrors() {
  notify.onError({
    title : 'Compile Error', 
    message : '<%= error.message %>'
  }).apply(this, arguments);
  this.emit('end'); //keeps gulp from hanging on this task
}

function buildScript(file) {
  const props = {
    entries : ['./client/' + file],
    debug : true,
    transform : [
      ['babelify', { presets: ['es2015', 'react'] }]
    ]
  };

  //watchify if watch set to true. otherwise browserify once
  const bundler = watchify(browserify(props));

  function rebundle(){
    const stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./build/'));
  }

  bundler.on('update', function() {
    const updateStart = Date.now();
    rebundle();
    console.log('Updated!', (Date.now() - updateStart) + 'ms');
  })

  // run it once the first time buildScript is called
  return rebundle();
}

// run 'scripts' task first, then watch for future changes
gulp.task('default', ['scripts']);
gulp.task('scripts', buildScript.bind(this, 'index.jsx'));