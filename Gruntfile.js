module.exports = function(grunt) {
  // grunt.initConfig({
  //   pkg: grunt.file.readJSON('package.json'),

  // });

  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      uses_defaults: ['dir1/**/*.js', 'dir2/**/*.js'],
      with_overrides: {
        options: {
          curly: false,
          undef: true,
        },
        files: {
          src: ['dir3/**/*.js', 'dir4/**/*.js']
        },
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};
