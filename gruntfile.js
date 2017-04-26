(function() {
  'use strict';
  module.exports = function(grunt){
    grunt.initConfig({
      clean: ['build/'],

      concat: {
        alljs: {
          options: {
            sourceMap: true
          },
          src: [ 'src/js/weekend.module.js', 'src/js/**/*.js' ],
          dest: 'build/js/app.js'
        }
      },

      babel: {
        all: {
          options: {
            presets: ['es2015'],
            sourceMap: true
          },
          files: {
            'build/js/app.js': 'build/js/app.js'
          }
        }
      },

      copyhtml:{
        htmlcopy:{
          files: [ {
            src:'src/*.html',
            dest: 'build/',
            expand: true
          }
        ]
      }
    },
    copythejs:{
      files: [
        {
          cwd: 'src/',
          src: ['**/*.js'],
          dest: 'build/',
          expand: true
        }
      ]
    },
    sass: {
      all: {
        files: {
          'build/style.csss':'src/sass/main.scss'
        }
      }
    },
    jshint: {
      appjs: {
        options: {
          jshintrc: '.jshintrc'
        },
        files: {
          src: ['src/**/*.js']
        }
      }
    }

  });
  grunt.registerTask('build',['jshint', '']);
};
}());
