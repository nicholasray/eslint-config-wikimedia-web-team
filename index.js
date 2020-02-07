// "no-restricted-properties" rules are not properly merged when just using "extends".
// Therefore we have to have this file which calls a custom merge function.
// The merge function calls Object.assign with special handling for configuration such as
// `no-restricted-properties` and `no-restricted-syntax` which are array based - ensuring the two
// values being merged are concatenated
const merge = require( 'eslint-config-wikimedia/language/merge.js' );

const rules = {
	"rules": {
		"no-restricted-properties": [
			"error",
			{
				"property": "done",
				"message": "The method `done` if used with Deferred objects is incompatible with ES6 Promises. Please use `then`."
			},
			{
				"property": "fail",
				"message": "The method `fail` if used with Deferred objects is incompatible with ES6 Promises. Please use `then`."
			},
			{
				"property": "always",
				"message": "The method `always` if used with Deferred objects is incompatible with ES6 Promises. Please use `then`."
			},
			{
				"object": "window",
				"property": "history",
				"message": "Please use mediawiki.router"
			},
			{
				"object": "window",
				"property": "location",
				"message": "Please use mediawiki.router"
			}
		],
		"valid-jsdoc": [
			"error",
			{
				"requireParamDescription": false,
				"requireReturnDescription": false,
				"requireReturn": false,
				"preferType": {
					"Boolean": "boolean",
					"Number": "number",
					"object": "Object",
					"String": "string"
				}
			}
		],
		"object-property-newline": "error",
		"no-use-before-define": "off",
		"no-underscore-dangle": "off"
	}
}

module.exports = Object.assign(
	rules,
	merge( rules, require( 'eslint-config-wikimedia/language/not-es5.js' ) )
);
