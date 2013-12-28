module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jst: {
      compile: {
        options: {
            //trueでdefine falseで通常
          amd: true,
          templateSettings: {
            interpolate : /\{\{(.+?)\}\}/g
          },
          processName: function(filename) {
            return filename.replace(/(src\/templates\/|.html)/g, '');
          }
        },
        files: {
          'src/javascripts/templates/templates.js': [
            'src/templates/**/*.html'
          ]
        }
      }
    },

    watch: {
      scripts: {
        files: ['src/templates/**/*.html'],
        tasks: ['jst'],
        options: {
          spawn: false,
        },
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-watch');
}
