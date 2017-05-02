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
          files: [{
            cwd:'src/',
            src:'*.html',
            dest: 'build/',
            expand: true
          }]
        },
        copythejs:{
          files: [{
              cwd: 'src/js',
              src: ['**/*.js'],
              dest: 'build/js',
              expand: true
            }]
        },
        copytheimg:{
          files: [{
              cwd:'src/img',
              src:['**/*.jpg'],
              dest: 'build/img',
              expand: true
            }]
        },
        copytheviews:{
          files:[{
            cwd:'src/views',
            src:'**/*.html',
            dest:'build/views',
            expand: true
          }]
        }
      },
      sass: {
        all: {
          files: {
            'build/style.css':'src/sass/main.scss'
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
      },
      watch: {
        css:{
          files: ['src/sass/*.scss'],
          tasks: ['sass']
        }
      },
        html:{
          files:['src/views/*.html','src/index.html'],
          tasks:['copy']
        },
        js:{
          files:['src/js/*.js'],
          tasks:['concat','babel']
        }


    });
    require('load-grunt-tasks')(gruntConfig);
    gruntConfig.loadNpmTasks('grunt-contrib-watch');
    gruntConfig.loadNpmTasks('grunt-contrib-copy');
    gruntConfig.loadNpmTasks('grunt-contrib-concat');
    gruntConfig.loadNpmTasks('grunt-contrib-clean');
    gruntConfig.loadNpmTasks('grunt-contrib-sass');




    gruntConfig.registerTask('build',['clean', 'concat', 'babel', 'copy', 'sass']);
  };
}());
