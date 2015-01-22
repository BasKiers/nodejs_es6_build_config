# nodejs_es6_build_config
Configuration files to set up a build environment for nodejs with a 6to5 transpiler and a nodemon service


# map structure
```
Gruntfile.js
package.json
node_modules
	- *module data*
src
	- package.json
	- node_modules
		- *module data*
build
```

# first time run:
- copy Gruntfile.js and the package.json from the same folder into the root of your project
- cd to the src folder and call 'npm install' to install the express server modules
- cd to the root of your project and call 'npm install' to install the grunt modules
- to start the server call 'grunt' the project should now compile and run automatically!
