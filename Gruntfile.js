module.exports = function(grunt) {

    var jsFiles = [
        "js/lib/angular.min.js",
        "js/lib/angular-route.min.js",
        "js/*.js"
    ]

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": jsFiles,
                "dest": "public/angularJS.js"
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Task definitions
    grunt.registerTask('default', ['concat']);
};