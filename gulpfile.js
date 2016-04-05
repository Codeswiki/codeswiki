"use strict";
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
gulp.task('scripts', buildScript.bind(this, 'app.jsx'));