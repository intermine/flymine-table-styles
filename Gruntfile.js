'use strict';

var grunt = require('grunt');

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-run');

var NO_SPAWN = {spawn: false};

grunt.initConfig({
  watch: { // Hwat! This task lays out the dependency graph.
    less: {
      files: ['less/**'],
      tasks: ['run:build'],
      options: NO_SPAWN
    }
  },
  run: {
    build: {
      cmd: './bin/build'
    },
    server: {
      cmd: './bin/dev-server',
      options: {
        wait: false
      }
    }
  }
});

grunt.registerTask('serve', ['run:build', 'run:server', 'watch']);

grunt.registerTask('default', ['run:build']);
