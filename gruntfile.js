(function() {
  'use strict';
  module.exports = function configGrunt(gruntConfig){
    gruntConfig.initConfig({
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
      copy: {
        copyhtml:{
        htmlcopy:{
          files: [{
            src:'src/*.html',
            dest: 'build/',
            expand: true
          }]
        }
      },

        copythejs:{
        files: [
          {
            cwd: 'src/js',
            src: ['**/*.js'],
            dest: 'build/',
            expand: true
          }
        ]
      },
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
  require('load-grunt-tasks')(gruntConfig);

  gruntConfig.registerTask('build',['clean', 'concat', 'babel', 'copy', 'sass']);
};
}());
