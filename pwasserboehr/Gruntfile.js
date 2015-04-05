module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
              files: {
                       'styles/style.css' : 'styles/style.scss'
                     }
            }
    },
    autoprefixer: {
      dist: {
              files: {
                      'styles/style.css' : 'styles/style.css'
                     }
            }
    },
    watch: {
             css: {
                    files: ['styles/*.scss'],
                    tasks: ['sass','autoprefixer']
                    }
           }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch','sass','autoprefixer']);
    }
