module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        'http-server': {

            'dev': {
                root: '/Users/przemyslawgaldys/Desktop/My/My-portfolio/',
                port: 3000,
                host: "localhost",
                ext: "html",
                openBrowser : true,

            }

        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    './src/style.css': './src/style.sass'
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
    grunt.loadNpmTasks('grunt-http-server');

    // Default task(s).
    grunt.registerTask('default', ["http-server", "sass", "browserSync", "watch"]);
};
