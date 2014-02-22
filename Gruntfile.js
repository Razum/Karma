module.exports = function(grunt) {

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
        watch: {
            //run unit tests with karma (server needs to be already running)
            karma: {
                files: ['public/test/**/*.js'],
                tasks: ['karma:unit:run'] //NOTE the :run flag
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', []);
    grunt.registerTask('test', ['karma:unit', 'watch']);

};