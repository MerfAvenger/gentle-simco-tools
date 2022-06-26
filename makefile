build: typescript-build webpack-build

typescript-build:
	echo "Analysing typescript..."
	tsc
	echo "...Typescript analysis complete."

webpack-build:
	echo "Webpack compiling..."
	webpack --config webpack.config.js
	echo "...Webpack compilation complete."