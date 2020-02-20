module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'src/style.css': 'src/style.sass'
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/style.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },

        browserSync: {
            bsFiles: {
                src: 'src/style.css'
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        }

    });

    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    grunt.registerTask('default', ["sass", "browserSync", "watch"]);
};
