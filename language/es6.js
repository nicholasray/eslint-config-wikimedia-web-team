// "no-restricted-properties" rules are not properly merged when just using
// "extends". Therefore we have to have this file which calls a custom merge
// function. The merge function calls Object.assign with special handling for
// configuration such as `no-restricted-properties` and `no-restricted-syntax`
// which are array based - ensuring the two values being merged are concatenated
const merge = require( 'eslint-config-wikimedia/language/merge.js' );
const common = require('../common.json');
const mergedRules = merge( common, require( 'eslint-config-wikimedia/language/not-es6.js' ) );

module.exports = {
	extends: [
		"eslint-config-wikimedia/language/es6.json"
	],
	rules: mergedRules
}
