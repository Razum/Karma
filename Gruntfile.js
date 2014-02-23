module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'public/test/karma.conf.js',
                background: true,
                browsers: ['PhantomJS'],
                autoWatch: true
            }
        },
        coffee: {
            compile: {
                expand: true,
                cwd: "public/assets/coffee/",
                src: ['**/*.coffee'],
                dest: 'public/javascripts/',
                ext: '.js'
            }
        },
        watch: {
            //run unit tests with karma (server needs to be already running)
            karma: {
                files: ['public/test/**/*.js', 'public/test/**/*.coffee'],
                tasks: ['karma:unit:run']
            },
            scripts: {
                files: 'public/assets/coffee/App/**/*.coffee',
                tasks: ['coffee']
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "public/javascripts/",
                    optimize: "uglify",
                    name: "App/main",
                    mainConfigFile: "public/javascripts/App/main.js",
                    out: "public/javascripts/build.js"
                }
            }
        }


    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('default', []);
    grunt.registerTask('test', ['karma:unit', 'watch']);

};