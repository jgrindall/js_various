module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /*
        this checks that you don't have any missing or unused imports, like a compiler would
        it puts the clean (unused imports deleted) files in a folder called amdcheck which
        I tend to delete
        */
        amdcheck: {
            src: {
                files: [
                    {
                        expand: true,
                        cwd: 'public/',
                        strict:true,
                        src: ['**/*.js'],
                        dest: 'amdcheck/'
                    }
                ]
            }
        },


        // this checks that your code quality is good. Loads of options to choose from.
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                strict:true,
                freeze:true,
                immed:true,
                indent:4,
                latedef:true,
                newcap:true,
                nonbsp:true,
                undef:true,
                unused:true,
                maxdepth:5,
                globals: {
                    require:true,
                    define:true,
                    console:true,
                    _:true,
                    $:true
                 }
            },
            all: ['public/js/**/*.js']
        },

        // this makes a concatenated uglified version of ALL your scripts, in the 'build' folder for deployment.
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'public/',
                    out: 'public/build/main.js',
                    removeCombined: true,
                    include: ['main'],
                    findNestedDependencies: true,
                    optimize: "uglify",
                    paths: {
                        'base':  'js/'
                    }
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-amdcheck');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // by default do all three tasks
    grunt.registerTask('default', ['amdcheck:src', 'jshint', 'requirejs']);

};






