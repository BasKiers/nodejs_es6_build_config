module.exports = function (grunt) {
	grunt.initConfig({
		sync: {
			main: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**', '!**/*.js', 'node_modules/**'],
					dest: 'build/',
				}],
				updateAndDelete: true,
			}
		},
		'6to5': {
			options: {
				
			},
			build: {
				files: [{
					expand: true, 
					cwd: 'src/',
					src: ['**/**.js', '!node_modules/**'],
					dest: 'build/',
					filter: 'isFile',
				}],
			}		
		},
		watch: {
			files: ['src/**/*'],
			tasks: ['sync', '6to5']
		},
		nodemon: {
			build: {
				script: './build/bin/www',
				options: {
					delay: 1000,
				}
			}
		},
		concurrent: {
			filewatch: ['nodemon', 'watch'],
			options: {
				logConcurrentOutput: true,
			}
		}
	});

	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sync');
	grunt.loadNpmTasks('grunt-6to5');

	grunt.registerTask('default', ['sync', '6to5', 'concurrent']);
};
