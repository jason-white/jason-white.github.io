module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
              files: {
                       'css/style.css' : 'sass/style.scss'
                     }
            }
    },
    autoprefixer: {
      dist: {
              files: {
                      'css/style.css' : 'css/style.css'
                     }
            }
    },
    watch: {
             css: {
                    files: ['sass/*.scss'],
                    tasks: ['sass','autoprefixer']
                    }
           }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch','sass','autoprefixer']);
    }
