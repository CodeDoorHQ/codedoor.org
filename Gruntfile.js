/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');

	

//	Project configuration.
	grunt.initConfig({
		less: {
			options: {
				cleancss: true,
				compress: true
			},
			landing: {
				files: {
					'./landing.css': '_less/landing.less',
				}
			}
		}, 
				
		autoprefixer: {

		    options: {
		    	browsers: ['ie >= 6', 'firefox >= 4', 'chrome >= 20', 'safari >= 4', 'opera >= 15']
		    },

		    // prefix the specified file
		    landing: {
                files: {
                    './landing.css': './landing.css',
                }
		    },
		},
		
		/* CHANGE MODIFICATIONS WATCHERS */
		watch: {
			less: {
				files: ['_less/**/*.less'],
				tasks: ['less', 'autoprefixer']
			}
		},

	});

	grunt.registerTask('default', ['less', 'autoprefixer', 'watch']);
};
