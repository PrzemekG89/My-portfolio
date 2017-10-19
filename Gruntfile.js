module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'main.css': 'main.sass'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['style.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },

        browserSync: {
            bsFiles: {
                src: 'style.css'
            },
            options: {
                server: {
                    baseDir: "./"
                }
            }
        }

    });

    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    grunt.registerTask('default', ["sass", "imagemin"]);
};