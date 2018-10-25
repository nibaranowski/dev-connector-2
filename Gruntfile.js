module.exports = (grunt) => {
    grunt.initConfig({
        sass: {
            development: {
                options: {

                },
                files: {
                    'client/src/styles/css/Custom.css' : 'client/src/styles/css/Custom.scss'
                }
            },
            production: {
                options: {

                },
                files: {
                    'client/src/styles/css/Custom.css' : 'client/src/styles/css/Custom.scss'
                }
            }
        },
        watch {
            files: ['<%= sass.files %>'],
            tasks: ['sass']
        }
        });

        grunt.loadinNpmTasks('grunt-contrib-sass');
        grunt.loadingNpmTasks('grun-contrib-watch');

        grunt.registerTask('default', ['sass']);
        grunt.registerTask('gheroku:production', 'sass');
};
