/*!
 * jQuery JavaScript Library v3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

;/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return J(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=J(a.top,0),a.left=J(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var y=parseFloat(m.marginTop,10),w=parseFloat(m.marginLeft,10);b.top-=h-y,b.bottom-=h-y,b.left-=c-w,b.right-=c-w,b.marginTop=y,b.marginLeft=w}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function y(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=J(o.clientWidth,window.innerWidth||0),r=J(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function w(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||w(o(e))}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=y(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!w(d)){var m=c(e.ownerDocument),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}i=i||0;var u='number'==typeof i;return s.left+=u?i:i.left||0,s.top+=u?i:i.top||0,s.right-=u?i:i.right||0,s.bottom-=u?i:i.bottom||0,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight),i={width:e.offsetWidth+n,height:e.offsetHeight+o};return i}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function D(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=C(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=D(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function H(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function B(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[H('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function K(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t,o){var n=C(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function G(e){return'end'===e?'start':'start'===e?'end':e}function V(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=me.indexOf(e),n=me.slice(o+1).concat(me.slice(0,o));return t?n.reverse():n}function z(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function _(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(C(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return z(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function X(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:_(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var Q=Math.min,Z=Math.round,$=Math.floor,J=Math.max,ee='undefined'!=typeof window&&'undefined'!=typeof document,te=['Edge','Trident','Firefox'],oe=0,ne=0;ne<te.length;ne+=1)if(ee&&0<=navigator.userAgent.indexOf(te[ne])){oe=1;break}var i=ee&&window.Promise,ie=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=ee&&!!(window.MSInputMethodContext&&document.documentMode),pe=ee&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],me=fe.slice(3),he={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ce=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return B.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ce.Utils=('undefined'==typeof window?global:window).PopperUtils,ce.placements=fe,ce.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:X,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=H('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=J(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=$,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!q(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,y=t(e.instance.popper),w=parseFloat(y['margin'+f],10),E=parseFloat(y['border'+f+'Width'],10),v=b-e.offsets.popper[m]-w-E;return v=J(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,Z(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case he.FLIP:p=[n,i];break;case he.CLOCKWISE:p=V(n);break;case he.COUNTERCLOCKWISE:p=V(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=$,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,y=-1!==['top','bottom'].indexOf(n),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),w&&(r=G(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,D(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!q(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=C(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=C(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h={left:$(i.left),top:Z(i.top),bottom:Z(i.bottom),right:$(i.right)},c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=H('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==g?-1:1;m[c]=d*y,m[g]=s*w,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),K(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ce});
//# sourceMappingURL=popper.min.js.map

;/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,h){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=o[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}e=e&&e.hasOwnProperty("default")?e.default:e,h=h&&h.hasOwnProperty("default")?h.default:h;var r,n,o,a,c,u,f,d,g,_,m,p,v,y,E,C,T,b,S,I,A,D,w,N,O,k,P,j,H,L,R,x,W,U,q,F,K,M,Q,B,V,Y,z,J,Z,G,$,X,tt,et,nt,it,rt,ot,st,at,lt,ct,ht,ut,ft,dt,gt,_t,mt,pt,vt,yt,Et,Ct,Tt,bt,St,It,At,Dt,wt,Nt,Ot,kt,Pt,jt,Ht,Lt,Rt,xt,Wt,Ut,qt,Ft,Kt,Mt,Qt,Bt,Vt,Yt,zt,Jt,Zt,Gt,$t,Xt,te,ee,ne,ie,re,oe,se,ae,le,ce,he,ue,fe,de,ge,_e,me,pe,ve,ye,Ee,Ce,Te,be,Se,Ie,Ae,De,we,Ne,Oe,ke,Pe,je,He,Le,Re,xe,We,Ue,qe,Fe,Ke,Me,Qe,Be,Ve,Ye,ze,Je,Ze,Ge,$e,Xe,tn,en,nn,rn,on,sn,an,ln,cn,hn,un,fn,dn,gn,_n,mn,pn,vn,yn,En,Cn,Tn,bn,Sn,In,An,Dn,wn,Nn,On,kn,Pn,jn,Hn,Ln,Rn,xn,Wn,Un,qn,Fn=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=e[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e),Kn=(n="alert",a="."+(o="bs.alert"),c=(r=e).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",g="show",_=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,o),this._element=null},t._getRootElement=function(t){var e=Fn.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=r(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(u.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(g),r(e).hasClass(d)){var t=Fn.getTransitionDurationFromElement(e);r(e).one(Fn.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(o);e||(e=new i(this),t.data(o,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',_._handleDismiss(new _)),r.fn[n]=_._jQueryInterface,r.fn[n].Constructor=_,r.fn[n].noConflict=function(){return r.fn[n]=c,_._jQueryInterface},_),Mn=(p="button",y="."+(v="bs.button"),E=".data-api",C=(m=e).fn[p],T="active",b="btn",I='[data-toggle^="button"]',A='[data-toggle="buttons"]',D="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+y+E,FOCUS_BLUR_DATA_API:(S="focus")+y+E+" blur"+y+E},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(A)[0];if(n){var i=this._element.querySelector(D);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(T))t=!1;else{var r=n.querySelector(w);r&&m(r).removeClass(T)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(T),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(T)),t&&m(this._element).toggleClass(T)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),n}(),m(document).on(O.CLICK_DATA_API,I,function(t){t.preventDefault();var e=t.target;m(e).hasClass(b)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,I,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(S,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=C,k._jQueryInterface},k),Qn=(j="carousel",L="."+(H="bs.carousel"),R=".data-api",x=(P=e).fn[j],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},q="next",F="prev",K="left",M="right",Q={SLIDE:"slide"+L,SLID:"slid"+L,KEYDOWN:"keydown"+L,MOUSEENTER:"mouseenter"+L,MOUSELEAVE:"mouseleave"+L,TOUCHEND:"touchend"+L,LOAD_DATA_API:"load"+L+R,CLICK_DATA_API:"click"+L+R},B="carousel",V="active",Y="slide",z="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",G="carousel-item-prev",$=".active",X=".active.carousel-item",tt=".carousel-item",et=".carousel-item-next, .carousel-item-prev",nt=".carousel-indicators",it="[data-slide], [data-slide-to]",rt='[data-ride="carousel"]',ot=function(){function o(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=this._element.querySelector(nt),this._addEventListeners()}var t=o.prototype;return t.next=function(){this._isSliding||this._slide(q)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(F)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(et)&&(Fn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(X);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?q:F;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(L),P.removeData(this._element,H),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},W,t),Fn.typeCheckConfig(j,t,U),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(tt)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===q,i=t===F,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===F?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(X)),r=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll($));P(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&P(n).addClass(V)}},t._slide=function(t,e){var n,i,r,o=this,s=this._element.querySelector(X),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(t===q?(n=J,i=Z,r=K):(n=z,i=G,r=M),l&&P(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(P(this._element).hasClass(Y)){P(l).addClass(i),Fn.reflow(l),P(s).addClass(n),P(l).addClass(n);var f=Fn.getTransitionDurationFromElement(s);P(s).one(Fn.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(V),P(s).removeClass(V+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return P(o._element).trigger(u)},0)}).emulateTransitionEnd(f)}else P(s).removeClass(V),P(l).addClass(V),this._isSliding=!1,P(this._element).trigger(u);h&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(H),e=l({},W,P(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new o(this,e),P(this).data(H,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},o._dataApiClickHandler=function(t){var e=Fn.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(B)){var i=l({},P(n).data(),P(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(P(n),i),r&&P(n).data(H).to(r),t.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return W}}]),o}(),P(document).on(Q.CLICK_DATA_API,it,ot._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(rt)),e=0,n=t.length;e<n;e++){var i=P(t[e]);ot._jQueryInterface.call(i,i.data())}}),P.fn[j]=ot._jQueryInterface,P.fn[j].Constructor=ot,P.fn[j].noConflict=function(){return P.fn[j]=x,ot._jQueryInterface},ot),Bn=(at="collapse",ct="."+(lt="bs.collapse"),ht=(st=e).fn[at],ut={toggle:!0,parent:""},ft={toggle:"boolean",parent:"(string|element)"},dt={SHOW:"show"+ct,SHOWN:"shown"+ct,HIDE:"hide"+ct,HIDDEN:"hidden"+ct,CLICK_DATA_API:"click"+ct+".data-api"},gt="show",_t="collapse",mt="collapsing",pt="collapsed",vt="width",yt="height",Et=".show, .collapsing",Ct='[data-toggle="collapse"]',Tt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(Ct)),i=0,r=n.length;i<r;i++){var o=n[i],s=Fn.getSelectorFromElement(o),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){st(this._element).hasClass(gt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!st(this._element).hasClass(gt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Et)).filter(function(t){return t.getAttribute("data-parent")===n._config.parent})).length&&(t=null),!(t&&(e=st(t).not(this._selector).data(lt))&&e._isTransitioning))){var i=st.Event(dt.SHOW);if(st(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(st(t).not(this._selector),"hide"),e||st(t).data(lt,null));var r=this._getDimension();st(this._element).removeClass(_t).addClass(mt),this._element.style[r]=0,this._triggerArray.length&&st(this._triggerArray).removeClass(pt).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){st(n._element).removeClass(mt).addClass(_t).addClass(gt),n._element.style[r]="",n.setTransitioning(!1),st(n._element).trigger(dt.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&st(this._element).hasClass(gt)){var e=st.Event(dt.HIDE);if(st(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Fn.reflow(this._element),st(this._element).addClass(mt).removeClass(_t).removeClass(gt);var i=this._triggerArray.length;if(0<i)for(var r=0;r<i;r++){var o=this._triggerArray[r],s=Fn.getSelectorFromElement(o);if(null!==s)st([].slice.call(document.querySelectorAll(s))).hasClass(gt)||st(o).addClass(pt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){t.setTransitioning(!1),st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){st.removeData(this._element,lt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},ut,t)).toggle=Boolean(t.toggle),Fn.typeCheckConfig(at,t,ft),t},t._getDimension=function(){return st(this._element).hasClass(vt)?vt:yt},t._getParent=function(){var n=this,t=null;Fn.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return st(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=st(t).hasClass(gt);e.length&&st(e).toggleClass(pt,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Fn.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=st(this),e=t.data(lt),n=l({},ut,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(lt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ut}}]),a}(),st(document).on(dt.CLICK_DATA_API,Ct,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=st(this),e=Fn.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));st(i).each(function(){var t=st(this),e=t.data(lt)?"toggle":n.data();Tt._jQueryInterface.call(t,e)})}),st.fn[at]=Tt._jQueryInterface,st.fn[at].Constructor=Tt,st.fn[at].noConflict=function(){return st.fn[at]=ht,Tt._jQueryInterface},Tt),Vn=(St="dropdown",At="."+(It="bs.dropdown"),Dt=".data-api",wt=(bt=e).fn[St],Nt=new RegExp("38|40|27"),Ot={HIDE:"hide"+At,HIDDEN:"hidden"+At,SHOW:"show"+At,SHOWN:"shown"+At,CLICK:"click"+At,CLICK_DATA_API:"click"+At+Dt,KEYDOWN_DATA_API:"keydown"+At+Dt,KEYUP_DATA_API:"keyup"+At+Dt},kt="disabled",Pt="show",jt="dropup",Ht="dropright",Lt="dropleft",Rt="dropdown-menu-right",xt="position-static",Wt='[data-toggle="dropdown"]',Ut=".dropdown form",qt=".dropdown-menu",Ft=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Mt="top-start",Qt="top-end",Bt="bottom-start",Vt="bottom-end",Yt="right-start",zt="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Zt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Gt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!bt(this._element).hasClass(kt)){var t=c._getParentFromElement(this._element),e=bt(this._menu).hasClass(Pt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=bt.Event(Ot.SHOW,n);if(bt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof h)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:Fn.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&bt(t).addClass(xt),this._popper=new h(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===bt(t).closest(Ft).length&&bt(document.body).children().on("mouseover",null,bt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),bt(this._menu).toggleClass(Pt),bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN,n))}}}},t.dispose=function(){bt.removeData(this._element,It),bt(this._element).off(At),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;bt(this._element).on(Ot.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,bt(this._element).data(),t),Fn.typeCheckConfig(St,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=bt(this._element.parentNode),e=Bt;return t.hasClass(jt)?(e=Mt,bt(this._menu).hasClass(Rt)&&(e=Qt)):t.hasClass(Ht)?e=Yt:t.hasClass(Lt)?e=zt:bt(this._menu).hasClass(Rt)&&(e=Vt),e},t._detectNavbar=function(){return 0<bt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},c._jQueryInterface=function(e){return this.each(function(){var t=bt(this).data(It);if(t||(t=new c(this,"object"==typeof e?e:null),bt(this).data(It,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Wt)),n=0,i=e.length;n<i;n++){var r=c._getParentFromElement(e[n]),o=bt(e[n]).data(It),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),o){var a=o._menu;if(bt(r).hasClass(Pt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&bt.contains(r,t.target))){var l=bt.Event(Ot.HIDE,s);bt(r).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&bt(document.body).children().off("mouseover",null,bt.noop),e[n].setAttribute("aria-expanded","false"),bt(a).removeClass(Pt),bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=Fn.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||bt(t.target).closest(qt).length)):Nt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!bt(this).hasClass(kt))){var e=c._getParentFromElement(this),n=bt(e).hasClass(Pt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var o=e.querySelector(Wt);bt(o).trigger("focus")}bt(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return Zt}}]),c}(),bt(document).on(Ot.KEYDOWN_DATA_API,Wt,Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API,qt,Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API+" "+Ot.KEYUP_DATA_API,Gt._clearMenus).on(Ot.CLICK_DATA_API,Wt,function(t){t.preventDefault(),t.stopPropagation(),Gt._jQueryInterface.call(bt(this),"toggle")}).on(Ot.CLICK_DATA_API,Ut,function(t){t.stopPropagation()}),bt.fn[St]=Gt._jQueryInterface,bt.fn[St].Constructor=Gt,bt.fn[St].noConflict=function(){return bt.fn[St]=wt,Gt._jQueryInterface},Gt),Yn=(Xt="modal",ee="."+(te="bs.modal"),ne=($t=e).fn[Xt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},re={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},oe={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-scrollbar-measure",ae="modal-backdrop",le="modal-open",ce="fade",he="show",ue=".modal-dialog",fe='[data-toggle="modal"]',de='[data-dismiss="modal"]',ge=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_e=".sticky-top",me=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(ue),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){$t(this._element).hasClass(ce)&&(this._isTransitioning=!0);var n=$t.Event(oe.SHOW,{relatedTarget:t});$t(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),$t(document.body).addClass(le),this._setEscapeEvent(),this._setResizeEvent(),$t(this._element).on(oe.CLICK_DISMISS,de,function(t){return e.hide(t)}),$t(this._dialog).on(oe.MOUSEDOWN_DISMISS,function(){$t(e._element).one(oe.MOUSEUP_DISMISS,function(t){$t(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=$t.Event(oe.HIDE);if($t(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=$t(this._element).hasClass(ce);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),$t(document).off(oe.FOCUSIN),$t(this._element).removeClass(he),$t(this._element).off(oe.CLICK_DISMISS),$t(this._dialog).off(oe.MOUSEDOWN_DISMISS),i){var r=Fn.getTransitionDurationFromElement(this._element);$t(this._element).one(Fn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){$t.removeData(this._element,te),$t(window,document,this._element,this._backdrop).off(ee),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),Fn.typeCheckConfig(Xt,t,re),t},t._showElement=function(t){var e=this,n=$t(this._element).hasClass(ce);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Fn.reflow(this._element),$t(this._element).addClass(he),this._config.focus&&this._enforceFocus();var i=$t.Event(oe.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,$t(e._element).trigger(i)};if(n){var o=Fn.getTransitionDurationFromElement(this._element);$t(this._dialog).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},t._enforceFocus=function(){var e=this;$t(document).off(oe.FOCUSIN).on(oe.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===$t(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?$t(this._element).on(oe.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||$t(this._element).off(oe.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?$t(window).on(oe.RESIZE,function(t){return e.handleUpdate(t)}):$t(window).off(oe.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){$t(document.body).removeClass(le),t._resetAdjustments(),t._resetScrollbar(),$t(t._element).trigger(oe.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&($t(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=$t(this._element).hasClass(ce)?ce:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ae,n&&this._backdrop.classList.add(n),$t(this._backdrop).appendTo(document.body),$t(this._element).on(oe.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Fn.reflow(this._backdrop),$t(this._backdrop).addClass(he),!t)return;if(!n)return void t();var i=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){$t(this._backdrop).removeClass(he);var r=function(){e._removeBackdrop(),t&&t()};if($t(this._element).hasClass(ce)){var o=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(ge)),e=[].slice.call(document.querySelectorAll(_e));$t(t).each(function(t,e){var n=e.style.paddingRight,i=$t(e).css("padding-right");$t(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),$t(e).each(function(t,e){var n=e.style.marginRight,i=$t(e).css("margin-right");$t(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=$t(document.body).css("padding-right");$t(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(ge));$t(t).each(function(t,e){var n=$t(e).data("padding-right");$t(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+_e));$t(e).each(function(t,e){var n=$t(e).data("margin-right");"undefined"!=typeof n&&$t(e).css("margin-right",n).removeData("margin-right")});var n=$t(document.body).data("padding-right");$t(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=se,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=$t(this).data(te),e=l({},ie,$t(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new r(this,e),$t(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ie}}]),r}(),$t(document).on(oe.CLICK_DATA_API,fe,function(t){var e,n=this,i=Fn.getSelectorFromElement(this);i&&(e=document.querySelector(i));var r=$t(e).data(te)?"toggle":l({},$t(e).data(),$t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=$t(e).one(oe.SHOW,function(t){t.isDefaultPrevented()||o.one(oe.HIDDEN,function(){$t(n).is(":visible")&&n.focus()})});me._jQueryInterface.call($t(e),r,this)}),$t.fn[Xt]=me._jQueryInterface,$t.fn[Xt].Constructor=me,$t.fn[Xt].noConflict=function(){return $t.fn[Xt]=ne,me._jQueryInterface},me),zn=(ve="tooltip",Ee="."+(ye="bs.tooltip"),Ce=(pe=e).fn[ve],Te="bs-tooltip",be=new RegExp("(^|\\s)"+Te+"\\S+","g"),Ae={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(Ie={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(Se={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},we="out",Ne={HIDE:"hide"+Ee,HIDDEN:"hidden"+Ee,SHOW:(De="show")+Ee,SHOWN:"shown"+Ee,INSERTED:"inserted"+Ee,CLICK:"click"+Ee,FOCUSIN:"focusin"+Ee,FOCUSOUT:"focusout"+Ee,MOUSEENTER:"mouseenter"+Ee,MOUSELEAVE:"mouseleave"+Ee},Oe="fade",ke="show",Pe=".tooltip-inner",je=".arrow",He="hover",Le="focus",Re="click",xe="manual",We=function(){function i(t,e){if("undefined"==typeof h)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=pe(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(pe(this.getTipElement()).hasClass(ke))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),pe.removeData(this.element,this.constructor.DATA_KEY),pe(this.element).off(this.constructor.EVENT_KEY),pe(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&pe(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===pe(this.element).css("display"))throw new Error("Please use show on visible elements");var t=pe.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){pe(this.element).trigger(t);var n=pe.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=Fn.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&pe(i).addClass(Oe);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:pe(document).find(this.config.container);pe(i).data(this.constructor.DATA_KEY,this),pe.contains(this.element.ownerDocument.documentElement,this.tip)||pe(i).appendTo(a),pe(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new h(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:je},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),pe(i).addClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().on("mouseover",null,pe.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,pe(e.element).trigger(e.constructor.Event.SHOWN),t===we&&e._leave(null,e)};if(pe(this.tip).hasClass(Oe)){var c=Fn.getTransitionDurationFromElement(this.tip);pe(this.tip).one(Fn.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=pe.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==De&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),pe(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(pe(this.element).trigger(i),!i.isDefaultPrevented()){if(pe(n).removeClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().off("mouseover",null,pe.noop),this._activeTrigger[Re]=!1,this._activeTrigger[Le]=!1,this._activeTrigger[He]=!1,pe(this.tip).hasClass(Oe)){var o=Fn.getTransitionDurationFromElement(n);pe(n).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){pe(this.getTipElement()).addClass(Te+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||pe(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(pe(t.querySelectorAll(Pe)),this.getTitle()),pe(t).removeClass(Oe+" "+ke)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?pe(e).parent().is(t)||t.empty().append(e):t.text(pe(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return Ie[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)pe(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==xe){var e=t===He?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===He?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;pe(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}pe(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Le:He]=!0),pe(e.getTipElement()).hasClass(ke)||e._hoverState===De?e._hoverState=De:(clearTimeout(e._timeout),e._hoverState=De,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===De&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Le:He]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=we,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===we&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=l({},this.constructor.Default,pe(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Fn.typeCheckConfig(ve,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=pe(this.getTipElement()),e=t.attr("class").match(be);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(pe(t).removeClass(Oe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=pe(this).data(ye),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),pe(this).data(ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ae}},{key:"NAME",get:function(){return ve}},{key:"DATA_KEY",get:function(){return ye}},{key:"Event",get:function(){return Ne}},{key:"EVENT_KEY",get:function(){return Ee}},{key:"DefaultType",get:function(){return Se}}]),i}(),pe.fn[ve]=We._jQueryInterface,pe.fn[ve].Constructor=We,pe.fn[ve].noConflict=function(){return pe.fn[ve]=Ce,We._jQueryInterface},We),Jn=(qe="popover",Ke="."+(Fe="bs.popover"),Me=(Ue=e).fn[qe],Qe="bs-popover",Be=new RegExp("(^|\\s)"+Qe+"\\S+","g"),Ve=l({},zn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ye=l({},zn.DefaultType,{content:"(string|element|function)"}),ze="fade",Ze=".popover-header",Ge=".popover-body",$e={HIDE:"hide"+Ke,HIDDEN:"hidden"+Ke,SHOW:(Je="show")+Ke,SHOWN:"shown"+Ke,INSERTED:"inserted"+Ke,CLICK:"click"+Ke,FOCUSIN:"focusin"+Ke,FOCUSOUT:"focusout"+Ke,MOUSEENTER:"mouseenter"+Ke,MOUSELEAVE:"mouseleave"+Ke},Xe=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){Ue(this.getTipElement()).addClass(Qe+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||Ue(this.config.template)[0],this.tip},r.setContent=function(){var t=Ue(this.getTipElement());this.setElementContent(t.find(Ze),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ge),e),t.removeClass(ze+" "+Je)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=Ue(this.getTipElement()),e=t.attr("class").match(Be);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=Ue(this).data(Fe),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),Ue(this).data(Fe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ve}},{key:"NAME",get:function(){return qe}},{key:"DATA_KEY",get:function(){return Fe}},{key:"Event",get:function(){return $e}},{key:"EVENT_KEY",get:function(){return Ke}},{key:"DefaultType",get:function(){return Ye}}]),i}(zn),Ue.fn[qe]=Xe._jQueryInterface,Ue.fn[qe].Constructor=Xe,Ue.fn[qe].noConflict=function(){return Ue.fn[qe]=Me,Xe._jQueryInterface},Xe),Zn=(en="scrollspy",rn="."+(nn="bs.scrollspy"),on=(tn=e).fn[en],sn={offset:10,method:"auto",target:""},an={offset:"number",method:"string",target:"(string|element)"},ln={ACTIVATE:"activate"+rn,SCROLL:"scroll"+rn,LOAD_DATA_API:"load"+rn+".data-api"},cn="dropdown-item",hn="active",un='[data-spy="scroll"]',fn=".active",dn=".nav, .list-group",gn=".nav-link",_n=".nav-item",mn=".list-group-item",pn=".dropdown",vn=".dropdown-item",yn=".dropdown-toggle",En="offset",Cn="position",Tn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+gn+","+this._config.target+" "+mn+","+this._config.target+" "+vn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,tn(this._scrollElement).on(ln.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?En:Cn,r="auto"===this._config.method?t:this._config.method,o=r===Cn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=Fn.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[tn(e)[r]().top+o,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){tn.removeData(this._element,nn),tn(this._scrollElement).off(rn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},sn,"object"==typeof t&&t?t:{})).target){var e=tn(t.target).attr("id");e||(e=Fn.getUID(en),tn(t.target).attr("id",e)),t.target="#"+e}return Fn.typeCheckConfig(en,t,an),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=tn([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(cn)?(n.closest(pn).find(yn).addClass(hn),n.addClass(hn)):(n.addClass(hn),n.parents(dn).prev(gn+", "+mn).addClass(hn),n.parents(dn).prev(_n).children(gn).addClass(hn)),tn(this._scrollElement).trigger(ln.ACTIVATE,{relatedTarget:e})},t._clear=function(){var t=[].slice.call(document.querySelectorAll(this._selector));tn(t).filter(fn).removeClass(hn)},n._jQueryInterface=function(e){return this.each(function(){var t=tn(this).data(nn);if(t||(t=new n(this,"object"==typeof e&&e),tn(this).data(nn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return sn}}]),n}(),tn(window).on(ln.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(un)),e=t.length;e--;){var n=tn(t[e]);Tn._jQueryInterface.call(n,n.data())}}),tn.fn[en]=Tn._jQueryInterface,tn.fn[en].Constructor=Tn,tn.fn[en].noConflict=function(){return tn.fn[en]=on,Tn._jQueryInterface},Tn),Gn=(In="."+(Sn="bs.tab"),An=(bn=e).fn.tab,Dn={HIDE:"hide"+In,HIDDEN:"hidden"+In,SHOW:"show"+In,SHOWN:"shown"+In,CLICK_DATA_API:"click"+In+".data-api"},wn="dropdown-menu",Nn="active",On="disabled",kn="fade",Pn="show",jn=".dropdown",Hn=".nav, .list-group",Ln=".active",Rn="> li > .active",xn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Wn=".dropdown-toggle",Un="> .dropdown-menu .active",qn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&bn(this._element).hasClass(Nn)||bn(this._element).hasClass(On))){var t,i,e=bn(this._element).closest(Hn)[0],r=Fn.getSelectorFromElement(this._element);if(e){var o="UL"===e.nodeName?Rn:Ln;i=(i=bn.makeArray(bn(e).find(o)))[i.length-1]}var s=bn.Event(Dn.HIDE,{relatedTarget:this._element}),a=bn.Event(Dn.SHOW,{relatedTarget:i});if(i&&bn(i).trigger(s),bn(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(t=document.querySelector(r)),this._activate(this._element,e);var l=function(){var t=bn.Event(Dn.HIDDEN,{relatedTarget:n._element}),e=bn.Event(Dn.SHOWN,{relatedTarget:i});bn(i).trigger(t),bn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){bn.removeData(this._element,Sn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?bn(e).find(Rn):bn(e).children(Ln))[0],o=n&&r&&bn(r).hasClass(kn),s=function(){return i._transitionComplete(t,r,n)};if(r&&o){var a=Fn.getTransitionDurationFromElement(r);bn(r).one(Fn.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){bn(e).removeClass(Pn+" "+Nn);var i=bn(e.parentNode).find(Un)[0];i&&bn(i).removeClass(Nn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(bn(t).addClass(Nn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Fn.reflow(t),bn(t).addClass(Pn),t.parentNode&&bn(t.parentNode).hasClass(wn)){var r=bn(t).closest(jn)[0];if(r){var o=[].slice.call(r.querySelectorAll(Wn));bn(o).addClass(Nn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=bn(this),e=t.data(Sn);if(e||(e=new i(this),t.data(Sn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),bn(document).on(Dn.CLICK_DATA_API,xn,function(t){t.preventDefault(),qn._jQueryInterface.call(bn(this),"show")}),bn.fn.tab=qn._jQueryInterface,bn.fn.tab.Constructor=qn,bn.fn.tab.noConflict=function(){return bn.fn.tab=An,qn._jQueryInterface},qn);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=Fn,t.Alert=Kn,t.Button=Mn,t.Carousel=Qn,t.Collapse=Bn,t.Dropdown=Vn,t.Modal=Yn,t.Popover=Jn,t.Scrollspy=Zn,t.Tab=Gn,t.Tooltip=zn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;! function () {
  Function && Function.prototype && Function.prototype.bind && (/MSIE ([6789]|10)/.test(navigator.userAgent) || (window.__twttr && window.__twttr.widgets && window.__twttr.widgets.loaded && window.twttr.widgets.load && window.twttr.widgets.load(), window.__twttr && window.__twttr.widgets && window.__twttr.widgets.init || ! function (t) {
    function e(n) {
      if (r[n]) return r[n].exports;
      var i = r[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }
    var n = window.__twttrll;
    window.__twttrll = function (r, o) {
      for (var s, a, u = 0, c = []; u < r.length; u++) a = r[u], i[a] && c.push.apply(c, i[a]), i[a] = 0;
      for (s in o) t[s] = o[s];
      for (n && n(r, o); c.length;) c.shift().call(null, null, e)
    };
    var r = {},
      i = {
        0: 0
      };
    return e.e = function (t, e) {}, e.e = function (t, n) {
      if (0 === i[t]) return n.call(null, null, e);
      if (void 0 !== i[t]) i[t].push(n);
      else {
        i[t] = [n];
        var r = document.getElementsByTagName("head")[0],
          o = document.createElement("script");
        o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.onerror = function () {
          var e = i[t];
          for (o.onerror = null, delete i[t]; e.length;) e.shift().call(null, new Error("failed to load chunk"))
        }, o.src = e.p + "js/" + ({
          1: "dm_button",
          2: "button",
          3: "grid",
          4: "moment",
          5: "periscope_on_air",
          6: "timeline",
          7: "tweet"
        } [t] || t) + "." + {
          1: "5471e4348eb302e5ab7804f6c1480496",
          2: "460b6e50c797f0f03177332228ca7d20",
          3: "ea663d84b16fa4ca45b5af4a0566fd48",
          4: "e936e524fc818cc39153fb732cd20fb4",
          5: "5176d933544066aabadd0cc57451a65b",
          6: "1f6e4f32ce8acbf62905aade7ca6bd9e",
          7: "a49ecd4611c2bffc713678c3bbdf276d"
        } [t] + ".js", r.appendChild(o)
      }
    }, e.m = t, e.c = r, e.p = "https://platform.twitter.com/", e(0)
  }([function (t, e, n) {
    var r, i = n(1),
      o = n(9),
      s = n(14),
      a = n(16),
      u = n(18),
      c = n(19),
      d = n(31),
      l = n(33),
      f = n(248),
      h = n(258),
      p = n(259),
      m = n(241),
      v = "_e";
    n(260), m.emitter.trigger(m.START), u.set("widgets.init", !0), a.set("init", !0), p(), r = new i, s.exposeReadyPromise(r.promise, a.base, v), a.set("widgets", f), a.set("widgets.load", l.load), a.set("events", d), h(function () {
      r.resolve(a.base), c.attachTo(o), l.loadPage()
    })
  }, function (t, e, n) {
    function r() {
      var t = this;
      this.promise = new i(function (e, n) {
        t.resolve = e, t.reject = n
      })
    }
    var i = n(2);
    t.exports = r
  }, function (t, e, n) {
    var r = n(3).Promise,
      i = n(7),
      o = n(8);
    t.exports = o.hasPromiseSupport() ? i.Promise : r
  }, function (t, e, n) {
    var r;
    (function (t) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
       * @version   2.3.0
       */
      (function () {
        "use strict";

        function i(t) {
          return "function" == typeof t || "object" == typeof t && null !== t
        }

        function o(t) {
          return "function" == typeof t
        }

        function s(t) {
          return "object" == typeof t && null !== t
        }

        function a(t) {
          V = t
        }

        function u(t) {
          K = t
        }

        function c() {
          var t = process.nextTick,
            e = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
          return Array.isArray(e) && "0" === e[1] && "10" === e[2] && (t = setImmediate),
            function () {
              t(p)
            }
        }

        function d() {
          return function () {
            W(p)
          }
        }

        function l() {
          var t = 0,
            e = new Z(p),
            n = document.createTextNode("");
          return e.observe(n, {
              characterData: !0
            }),
            function () {
              n.data = t = ++t % 2
            }
        }

        function f() {
          var t = new MessageChannel;
          return t.port1.onmessage = p,
            function () {
              t.port2.postMessage(0)
            }
        }

        function h() {
          return function () {
            setTimeout(p, 1)
          }
        }

        function p() {
          for (var t = 0; t < Q; t += 2) {
            var e = et[t],
              n = et[t + 1];
            e(n), et[t] = void 0, et[t + 1] = void 0
          }
          Q = 0
        }

        function m() {
          try {
            var t = n(5);
            return W = t.runOnLoop || t.runOnContext, d()
          } catch (t) {
            return h()
          }
        }

        function v() {}

        function g() {
          return new TypeError("You cannot resolve a promise with itself")
        }

        function w() {
          return new TypeError("A promises callback cannot return that same promise.")
        }

        function y(t) {
          try {
            return t.then
          } catch (t) {
            return ot.error = t, ot
          }
        }

        function b(t, e, n, r) {
          try {
            t.call(e, n, r)
          } catch (t) {
            return t
          }
        }

        function _(t, e, n) {
          K(function (t) {
            var r = !1,
              i = b(n, e, function (n) {
                r || (r = !0, e !== n ? A(t, n) : C(t, n))
              }, function (e) {
                r || (r = !0, I(t, e))
              }, "Settle: " + (t._label || " unknown promise"));
            !r && i && (r = !0, I(t, i))
          }, t)
        }

        function E(t, e) {
          e._state === rt ? C(t, e._result) : e._state === it ? I(t, e._result) : S(e, void 0, function (e) {
            A(t, e)
          }, function (e) {
            I(t, e)
          })
        }

        function x(t, e) {
          if (e.constructor === t.constructor) E(t, e);
          else {
            var n = y(e);
            n === ot ? I(t, ot.error) : void 0 === n ? C(t, e) : o(n) ? _(t, e, n) : C(t, e)
          }
        }

        function A(t, e) {
          t === e ? I(t, g()) : i(e) ? x(t, e) : C(t, e)
        }

        function T(t) {
          t._onerror && t._onerror(t._result), R(t)
        }

        function C(t, e) {
          t._state === nt && (t._result = e, t._state = rt, 0 !== t._subscribers.length && K(R, t))
        }

        function I(t, e) {
          t._state === nt && (t._state = it, t._result = e, K(T, t))
        }

        function S(t, e, n, r) {
          var i = t._subscribers,
            o = i.length;
          t._onerror = null, i[o] = e, i[o + rt] = n, i[o + it] = r, 0 === o && t._state && K(R, t)
        }

        function R(t) {
          var e = t._subscribers,
            n = t._state;
          if (0 !== e.length) {
            for (var r, i, o = t._result, s = 0; s < e.length; s += 3) r = e[s], i = e[s + n], r ? N(n, r, i, o) : i(o);
            t._subscribers.length = 0
          }
        }

        function P() {
          this.error = null
        }

        function j(t, e) {
          try {
            return t(e)
          } catch (t) {
            return st.error = t, st
          }
        }

        function N(t, e, n, r) {
          var i, s, a, u, c = o(n);
          if (c) {
            if (i = j(n, r), i === st ? (u = !0, s = i.error, i = null) : a = !0, e === i) return void I(e, w())
          } else i = r, a = !0;
          e._state !== nt || (c && a ? A(e, i) : u ? I(e, s) : t === rt ? C(e, i) : t === it && I(e, i))
        }

        function k(t, e) {
          try {
            e(function (e) {
              A(t, e)
            }, function (e) {
              I(t, e)
            })
          } catch (e) {
            I(t, e)
          }
        }

        function L(t, e) {
          var n = this;
          n._instanceConstructor = t, n.promise = new t(v), n._validateInput(e) ? (n._input = e, n.length = e.length, n._remaining = e.length, n._init(), 0 === n.length ? C(n.promise, n._result) : (n.length = n.length || 0, n._enumerate(), 0 === n._remaining && C(n.promise, n._result))) : I(n.promise, n._validationError())
        }

        function O(t) {
          return new at(this, t).promise
        }

        function D(t) {
          function e(t) {
            A(i, t)
          }

          function n(t) {
            I(i, t)
          }
          var r = this,
            i = new r(v);
          if (!$(t)) return I(i, new TypeError("You must pass an array to race.")), i;
          for (var o = t.length, s = 0; i._state === nt && s < o; s++) S(r.resolve(t[s]), void 0, e, n);
          return i
        }

        function z(t) {
          var e = this;
          if (t && "object" == typeof t && t.constructor === e) return t;
          var n = new e(v);
          return A(n, t), n
        }

        function B(t) {
          var e = this,
            n = new e(v);
          return I(n, t), n
        }

        function F() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }

        function U() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }

        function M(t) {
          this._id = ft++, this._state = void 0, this._result = void 0, this._subscribers = [], v !== t && (o(t) || F(), this instanceof M || U(), k(this, t))
        }

        function q() {
          var t;
          if ("undefined" != typeof global) t = global;
          else if ("undefined" != typeof self) t = self;
          else try {
            t = Function("return this")()
          } catch (t) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
          }
          var e = t.Promise;
          e && "[object Promise]" === Object.prototype.toString.call(e.resolve()) && !e.cast || (t.Promise = ht)
        }
        var H;
        H = Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        };
        var W, V, G, $ = H,
          Q = 0,
          K = ({}.toString, function (t, e) {
            et[Q] = t, et[Q + 1] = e, Q += 2, 2 === Q && (V ? V(p) : G())
          }),
          J = "undefined" != typeof window ? window : void 0,
          Y = J || {},
          Z = Y.MutationObserver || Y.WebKitMutationObserver,
          X = "undefined" != typeof process && "[object process]" === {}.toString.call(process),
          tt = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
          et = new Array(1e3);
        G = X ? c() : Z ? l() : tt ? f() : void 0 === J ? m() : h();
        var nt = void 0,
          rt = 1,
          it = 2,
          ot = new P,
          st = new P;
        L.prototype._validateInput = function (t) {
          return $(t)
        }, L.prototype._validationError = function () {
          return new Error("Array Methods must be provided an Array")
        }, L.prototype._init = function () {
          this._result = new Array(this.length)
        };
        var at = L;
        L.prototype._enumerate = function () {
          for (var t = this, e = t.length, n = t.promise, r = t._input, i = 0; n._state === nt && i < e; i++) t._eachEntry(r[i], i)
        }, L.prototype._eachEntry = function (t, e) {
          var n = this,
            r = n._instanceConstructor;
          s(t) ? t.constructor === r && t._state !== nt ? (t._onerror = null, n._settledAt(t._state, e, t._result)) : n._willSettleAt(r.resolve(t), e) : (n._remaining--, n._result[e] = t)
        }, L.prototype._settledAt = function (t, e, n) {
          var r = this,
            i = r.promise;
          i._state === nt && (r._remaining--, t === it ? I(i, n) : r._result[e] = n), 0 === r._remaining && C(i, r._result)
        }, L.prototype._willSettleAt = function (t, e) {
          var n = this;
          S(t, void 0, function (t) {
            n._settledAt(rt, e, t)
          }, function (t) {
            n._settledAt(it, e, t)
          })
        };
        var ut = O,
          ct = D,
          dt = z,
          lt = B,
          ft = 0,
          ht = M;
        M.all = ut, M.race = ct, M.resolve = dt, M.reject = lt, M._setScheduler = a, M._setAsap = u, M._asap = K, M.prototype = {
          constructor: M,
          then: function (t, e) {
            var n = this,
              r = n._state;
            if (r === rt && !t || r === it && !e) return this;
            var i = new this.constructor(v),
              o = n._result;
            if (r) {
              var s = arguments[r - 1];
              K(function () {
                N(r, i, s, o)
              })
            } else S(n, i, t, e);
            return i
          },
          catch: function (t) {
            return this.then(null, t)
          }
        };
        var pt = q,
          mt = {
            Promise: ht,
            polyfill: pt
          };
        n(6).amd ? (r = function () {
          return mt
        }.call(e, n, e, t), !(void 0 !== r && (t.exports = r))) : "undefined" != typeof t && t.exports && (t.exports = mt)
      }).call(this)
    }).call(e, n(4)(t))
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
  }, function (t, e) {}, function (t, e) {
    t.exports = function () {
      throw new Error("define cannot be used indirect")
    }
  }, function (t, e) {
    t.exports = window
  }, function (t, e, n) {
    function r(t) {
      return t = t || y, t.devicePixelRatio ? t.devicePixelRatio >= 1.5 : !!t.matchMedia && t.matchMedia("only screen and (min-resolution: 144dpi)").matches
    }

    function i(t) {
      return t = t || _, /(Trident|MSIE|Edge[\/ ]?\d)/.test(t)
    }

    function o(t) {
      return t = t || _, /MSIE 9/.test(t)
    }

    function s(t) {
      return t = t || _, /MSIE 10/.test(t)
    }

    function a(t) {
      return t = t || _, /(iPad|iPhone|iPod)/.test(t)
    }

    function u(t) {
      return t = t || _, /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t)
    }

    function c(t, e) {
      return t = t || y, e = e || _, t.postMessage && !(i(e) && t.opener)
    }

    function d(t, e, n) {
      return t = t || y, e = e || w, n = n || _, "ontouchstart" in t || /Opera Mini/.test(n) || e.msMaxTouchPoints > 0
    }

    function l() {
      var t = v.body.style;
      return void 0 !== t.transition || void 0 !== t.webkitTransition || void 0 !== t.mozTransition || void 0 !== t.oTransition || void 0 !== t.msTransition
    }

    function f() {
      return !!y.IntersectionObserver
    }

    function h() {
      return !!(y.Promise && y.Promise.resolve && y.Promise.reject && y.Promise.all && y.Promise.race && function () {
        var t;
        return new y.Promise(function (e) {
          t = e
        }), b.isType("function", t)
      }())
    }

    function p() {
      return y.performance && y.performance.getEntriesByType
    }

    function m() {
      try {
        return y.localStorage.setItem("local_storage_support_test", "true"), "undefined" != typeof y.localStorage
      } catch (t) {
        return g.devError("window.localStorage is not supported:", t), !1
      }
    }
    var v = n(9),
      g = n(10),
      w = n(13),
      y = n(7),
      b = n(12),
      _ = w.userAgent;
    t.exports = {
      retina: r,
      anyIE: i,
      ie9: o,
      ie10: s,
      ios: a,
      android: u,
      canPostMessage: c,
      touch: d,
      cssTransitions: l,
      hasPromiseSupport: h,
      hasIntersectionObserverSupport: f,
      hasPerformanceInformation: p,
      hasLocalStorageSupport: m
    }
  }, function (t, e) {
    t.exports = document
  }, function (t, e, n) {
    function r() {}

    function i() {}

    function o(t, e) {}

    function s() {
      d("error", h.toRealArray(arguments))
    }

    function a(t) {
      m && (p[t] = c())
    }

    function u(t) {
      var e;
      m && (p[t] ? (e = c(), i("_twitter", t, e - p[t])) : r("timeEnd() called before time() for id: ", t))
    }

    function c() {
      return f.performance && +f.performance.now() || +new Date
    }

    function d(t, e) {
      if (f.console && f.console[t]) switch (e.length) {
        case 1:
          f.console[t](e[0]);
          break;
        case 2:
          f.console[t](e[0], e[1]);
          break;
        case 3:
          f.console[t](e[0], e[1], e[2]);
          break;
        case 4:
          f.console[t](e[0], e[1], e[2], e[3]);
          break;
        case 5:
          f.console[t](e[0], e[1], e[2], e[3], e[4]);
          break;
        default:
          0 !== e.length && f.console.warn && f.console.warn("too many params passed to logger." + t)
      }
    }
    var l = n(11),
      f = n(7),
      h = n(12),
      p = {},
      m = h.contains(l.href, "tw_debug=true");
    t.exports = {
      devError: r,
      devInfo: i,
      devObject: o,
      publicError: s,
      time: a,
      timeEnd: u
    }
  }, function (t, e) {
    t.exports = location
  }, function (t, e, n) {
    function r(t) {
      return l(arguments).slice(1).forEach(function (e) {
        o(e, function (e, n) {
          t[e] = n
        })
      }), t
    }

    function i(t) {
      return o(t, function (e, n) {
        u(n) && (i(n), c(n) && delete t[e]), void 0 !== n && null !== n && "" !== n || delete t[e]
      }), t
    }

    function o(t, e) {
      var n;
      for (n in t) t.hasOwnProperty && !t.hasOwnProperty(n) || e(n, t[n]);
      return t
    }

    function s(t) {
      return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }

    function a(t, e) {
      return t == s(e)
    }

    function u(t) {
      return t === Object(t)
    }

    function c(t) {
      var e;
      if (!u(t)) return !1;
      if (Object.keys) return !Object.keys(t).length;
      for (e in t)
        if (t.hasOwnProperty(e)) return !1;
      return !0
    }

    function d(t, e) {
      h.setTimeout(function () {
        t.call(e || null)
      }, 0)
    }

    function l(t) {
      return t ? Array.prototype.slice.call(t) : []
    }

    function f(t, e) {
      return !(!t || !t.indexOf) && t.indexOf(e) > -1
    }
    var h = n(7);
    t.exports = {
      aug: r,
      async: d,
      compact: i,
      contains: f,
      forIn: o,
      isObject: u,
      isEmptyObject: c,
      toType: s,
      isType: a,
      toRealArray: l
    }
  }, function (t, e) {
    t.exports = navigator
  }, function (t, e, n) {
    function r(t, e, n) {
      e.ready = i(t.then, t), n && Array.isArray(e[n]) && (e[n].forEach(i(t.then, t)), delete e[n])
    }
    var i = n(15);
    t.exports = {
      exposeReadyPromise: r
    }
  }, function (t, e, n) {
    var r = n(12);
    t.exports = function (t, e) {
      var n = Array.prototype.slice.call(arguments, 2);
      return function () {
        var i = r.toRealArray(arguments);
        return t.apply(e, n.concat(i))
      }
    }
  }, function (t, e, n) {
    var r = n(17);
    t.exports = new r("twttr")
  }, function (t, e, n) {
    function r(t) {
      return a.isType("string", t) ? t.split(".") : a.isType("array", t) ? t : []
    }

    function i(t, e) {
      var n = r(e),
        i = n.slice(0, -1);
      return i.reduce(function (t, e, n) {
        if (t[e] = t[e] || {}, !a.isObject(t[e])) throw new Error(i.slice(0, n + 1).join(".") + " is already defined with a value.");
        return t[e]
      }, t)
    }

    function o(t, e) {
      e = e || s, e[t] = e[t] || {}, Object.defineProperty(this, "base", {
        value: e[t]
      }), Object.defineProperty(this, "name", {
        value: t
      })
    }
    var s = n(7),
      a = n(12);
    a.aug(o.prototype, {
      get: function (t) {
        var e = r(t);
        return e.reduce(function (t, e) {
          if (a.isObject(t)) return t[e]
        }, this.base)
      },
      set: function (t, e, n) {
        var o = r(t),
          s = i(this.base, t),
          a = o.slice(-1);
        return n && a in s ? s[a] : s[a] = e
      },
      init: function (t, e) {
        return this.set(t, e, !0)
      },
      unset: function (t) {
        var e = r(t),
          n = this.get(e.slice(0, -1));
        n && delete n[e.slice(-1)]
      },
      aug: function (t) {
        var e = this.get(t),
          n = a.toRealArray(arguments).slice(1);
        if (e = "undefined" != typeof e ? e : {}, n.unshift(e), !n.every(a.isObject)) throw new Error("Cannot augment non-object.");
        return this.set(t, a.aug.apply(null, n))
      },
      call: function (t) {
        var e = this.get(t),
          n = a.toRealArray(arguments).slice(1);
        if (!a.isType("function", e)) throw new Error("Function " + t + "does not exist.");
        return e.apply(null, n)
      },
      fullPath: function (t) {
        var e = r(t);
        return e.unshift(this.name), e.join(".")
      }
    }), t.exports = o
  }, function (t, e, n) {
    var r = n(17);
    t.exports = new r("__twttr")
  }, function (t, e, n) {
    function r(t) {
      var e = s.href,
        n = "original_referer=" + e;
      return [t, n].join(t.indexOf("?") == -1 ? "?" : "&")
    }

    function i(t) {
      var e, n;
      t.altKey || t.metaKey || t.shiftKey || (e = u.closest(function (t) {
        return "A" === t.tagName || "AREA" === t.tagName
      }, t.target), e && d.isIntentURL(e.href) && (n = r(e.href), n = n.replace(/^http[:]/, "https:"), n = n.replace(/^\/\//, "https://"), c.open(n, e), a.preventDefault(t)))
    }

    function o(t) {
      t.addEventListener("click", i, !1)
    }
    var s = n(11),
      a = n(20),
      u = n(22),
      c = n(24),
      d = n(25);
    t.exports = {
      attachTo: o
    }
  }, function (t, e, n) {
    function r(t) {
      var e = t.getAttribute("data-twitter-event-id");
      return e ? e : (t.setAttribute("data-twitter-event-id", ++g), g)
    }

    function i(t, e, n) {
      var r = 0,
        i = t && t.length || 0;
      for (r = 0; r < i; r++)
        if (t[r].call(e, n, e), n.ceaseImmediately) return !1
    }

    function o(t, e, n) {
      for (var r = n || t.target || t.srcElement, s = m.list(r).map(function (t) {
          return "." + t
        }), a = s.concat(r.tagName), u = 0, c = a.length; u < c; u++)
        if (i(e[a[u]], r, t) === !1) return;
      t.cease || r !== this && o.call(this, t, e, r.parentElement || r.parentNode)
    }

    function s(t, e, n, r) {
      function i(r) {
        o.call(t, r, n[e])
      }
      a(t, i, e, r), t.addEventListener(e, i, !1)
    }

    function a(t, e, n, r) {
      t.id && (w[t.id] = w[t.id] || [], w[t.id].push({
        el: t,
        listener: e,
        type: n,
        rootId: r
      }))
    }

    function u(t) {
      var e = w[t];
      e && (e.forEach(function (t) {
        t.el.removeEventListener(t.type, t.listener, !1), delete v[t.rootId]
      }), delete w[t])
    }

    function c(t, e, n, i) {
      var o = r(t);
      v[o] = v[o] || {}, v[o][e] || (v[o][e] = {}, s(t, e, v[o], o)), v[o][e][n] = v[o][e][n] || [], v[o][e][n].push(i)
    }

    function d(t, e, n) {
      var i = r(e),
        s = v[i] && v[i];
      o.call(e, {
        target: n
      }, s[t])
    }

    function l(t) {
      return h(t), f(t), !1
    }

    function f(t) {
      t && t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    function h(t) {
      t && (t.cease = !0) && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
    }

    function p(t) {
      t && (t.ceaseImmediately = !0, h(t), t.stopImmediatePropagation())
    }
    var m = n(21),
      v = {},
      g = -1,
      w = {};
    t.exports = {
      stop: l,
      stopPropagation: h,
      stopImmediatePropagation: p,
      preventDefault: f,
      delegate: c,
      simulate: d,
      removeDelegatesForWidget: u
    }
  }, function (t, e, n) {
    function r(t) {
      return new RegExp("\\b" + t + "\\b", "g")
    }

    function i(t, e) {
      return t.classList ? void t.classList.add(e) : void(r(e).test(t.className) || (t.className += " " + e))
    }

    function o(t, e) {
      return t.classList ? void t.classList.remove(e) : void(t.className = t.className.replace(r(e), " "))
    }

    function s(t, e, n) {
      return void 0 === n && t.classList && t.classList.toggle ? t.classList.toggle(e, n) : (n ? i(t, e) : o(t, e), n)
    }

    function a(t, e, n) {
      return t.classList && u(t, e) ? (o(t, e), void i(t, n)) : void(t.className = t.className.replace(r(e), n))
    }

    function u(t, e) {
      return t.classList ? t.classList.contains(e) : d.contains(c(t), e)
    }

    function c(t) {
      return d.toRealArray(t.classList ? t.classList : t.className.match(l))
    }
    var d = n(12),
      l = /\b([\w-_]+)\b/g;
    t.exports = {
      add: i,
      remove: o,
      replace: a,
      toggle: s,
      present: u,
      list: c
    }
  }, function (t, e, n) {
    function r(t) {
      return function (e) {
        return !!e.tagName && s(e, t)
      }
    }

    function i(t, e, n) {
      var s;
      if (e) return n = n || e && e.ownerDocument, s = o.isType("function", t) ? t : r(t), e === n ? s(e) ? e : void 0 : s(e) ? e : i(s, e.parentNode, n)
    }
    var o = n(12),
      s = n(23);
    t.exports = {
      closest: i
    }
  }, function (t, e, n) {
    function r(t, e) {
      if (s) return s.call(t, e)
    }
    var i = n(7),
      o = i.HTMLElement,
      s = o.prototype.matches || o.prototype.matchesSelector || o.prototype.webkitMatchesSelector || o.prototype.mozMatchesSelector || o.prototype.msMatchesSelector || o.prototype.oMatchesSelector;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      u.open(t, {}, e)
    }

    function i(t, e) {
      var n = d.decodeURL(e);
      switch (t) {
        case "favorite":
        case "like":
          return {
            tweet_id: n.tweet_id
          };
        case "follow":
          return {
            screen_name: n.screen_name,
            user_id: n.user_id
          };
        case "retweet":
          return {
            source_tweet_id: n.tweet_id
          };
        default:
          return {}
      }
    }

    function o(t, e, n) {
      var o = (a.intentType(t) || "").toLowerCase();
      a.isTwitterURL(t) && (r(t, n), e && c.trigger("click", {
        target: e,
        region: "intent",
        type: "click",
        data: {}
      }), e && l[o] && l[o].forEach(function (n) {
        c.trigger(n, {
          target: e,
          region: "intent",
          type: n,
          data: i(o, t)
        })
      }))
    }

    function s(t) {
      this.srcEl = [], this.element = t
    }
    var a = n(25),
      u = n(28),
      c = n(31),
      d = n(26),
      l = {
        favorite: ["favorite", "like"],
        follow: ["follow"],
        like: ["favorite", "like"],
        retweet: ["retweet"],
        tweet: ["tweet"]
      };
    s.open = o, t.exports = s
  }, function (t, e, n) {
    function r(t) {
      return "string" == typeof t && x.test(t) && RegExp.$1.length <= 20
    }

    function i(t) {
      if (r(t)) return RegExp.$1
    }

    function o(t, e) {
      var n = E.decodeURL(t);
      if (e = e || !1, n.screen_name = i(t), n.screen_name) return E.url("https://twitter.com/intent/" + (e ? "follow" : "user"), n)
    }

    function s(t) {
      return o(t, !0)
    }

    function a(t) {
      return "string" == typeof t && I.test(t)
    }

    function u(t, e) {
      if (e = void 0 === e || e, a(t)) return (e ? "#" : "") + RegExp.$1
    }

    function c(t) {
      return "string" == typeof t && A.test(t)
    }

    function d(t) {
      return c(t) && RegExp.$1
    }

    function l(t) {
      return T.test(t)
    }

    function f(t) {
      return C.test(t)
    }

    function h(t) {
      return S.test(t)
    }

    function p(t) {
      return L.test(t)
    }

    function m(t) {
      return O.test(t)
    }

    function v(t) {
      return P.test(t) && RegExp.$1
    }

    function g(t) {
      return R.test(t) && RegExp.$1
    }

    function w(t) {
      return S.test(t) && RegExp.$1
    }

    function y(t) {
      return j.test(t) && RegExp.$1
    }

    function b(t) {
      return !!N.test(t) && {
        ownerScreenName: RegExp.$1,
        slug: RegExp.$2
      }
    }

    function _(t) {
      return k.test(t) && RegExp.$1
    }
    var E = n(26),
      x = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,
      A = /(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
      T = /^http(s?):\/\/(\w+\.)*twitter\.com([:\/]|$)/i,
      C = /^http(s?):\/\/pbs\.twimg\.com\//,
      I = /^#?([^.,<>!\s\/#\-()'"]+)$/,
      S = /twitter\.com(?::\d{2,4})?\/intent\/(\w+)/,
      R = /^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i,
      P = /^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i,
      j = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/(?:likes|favorites)/i,
      N = /^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/lists\/([\w-]+)/i,
      k = /^https?:\/\/(?:www\.)?twitter\.com\/i\/live\/(\d+)/i,
      L = /^https?:\/\/syndication\.twitter\.com\/settings/i,
      O = /^https?:\/\/(localhost|platform)\.twitter\.com(?::\d+)?\/widgets\/widget_iframe\.(.+)/i;
    t.exports = {
      isHashTag: a,
      hashTag: u,
      isScreenName: r,
      screenName: i,
      isStatus: c,
      status: d,
      intentForProfileURL: o,
      intentForFollowURL: s,
      isTwitterURL: l,
      isTwimgURL: f,
      isIntentURL: h,
      isSettingsURL: p,
      isWidgetIframeURL: m,
      regexen: {
        profile: x
      },
      momentId: v,
      collectionId: g,
      intentType: w,
      likesScreenName: y,
      listScreenNameAndSlug: b,
      eventId: _
    }
  }, function (t, e, n) {
    function r(t) {
      return encodeURIComponent(t).replace(/\+/g, "%2B").replace(/'/g, "%27")
    }

    function i(t) {
      return decodeURIComponent(t)
    }

    function o(t) {
      var e = [];
      return d.forIn(t, function (t, n) {
        var i = r(t);
        d.isType("array", n) || (n = [n]), n.forEach(function (t) {
          c.hasValue(t) && e.push(i + "=" + r(t))
        })
      }), e.sort().join("&")
    }

    function s(t) {
      var e, n = {};
      return t ? (e = t.split("&"), e.forEach(function (t) {
        var e = t.split("="),
          r = i(e[0]),
          o = i(e[1]);
        if (2 == e.length) return d.isType("array", n[r]) ? void n[r].push(o) : r in n ? (n[r] = [n[r]], void n[r].push(o)) : void(n[r] = o)
      }), n) : {}
    }

    function a(t, e) {
      var n = o(e);
      return n.length > 0 ? d.contains(t, "?") ? t + "&" + o(e) : t + "?" + o(e) : t
    }

    function u(t) {
      var e = t && t.split("?");
      return 2 == e.length ? s(e[1]) : {}
    }
    var c = n(27),
      d = n(12);
    t.exports = {
      url: a,
      decodeURL: u,
      decode: s,
      encode: o,
      encodePart: r,
      decodePart: i
    }
  }, function (t, e, n) {
    function r(t) {
      return void 0 !== t && null !== t && "" !== t
    }

    function i(t) {
      return a(t) && t % 1 === 0
    }

    function o(t) {
      return "string" === m.toType(t)
    }

    function s(t) {
      return a(t) && !i(t)
    }

    function a(t) {
      return r(t) && !isNaN(t)
    }

    function u(t) {
      return r(t) && "array" == m.toType(t)
    }

    function c(t) {
      return m.contains(g, t)
    }

    function d(t) {
      return m.contains(v, t)
    }

    function l(t) {
      return !!r(t) && (!!d(t) || !c(t) && !!t)
    }

    function f(t) {
      if (a(t)) return t
    }

    function h(t) {
      if (s(t)) return t
    }

    function p(t) {
      if (i(t)) return parseInt(t, 10)
    }
    var m = n(12),
      v = [!0, 1, "1", "on", "ON", "true", "TRUE", "yes", "YES"],
      g = [!1, 0, "0", "off", "OFF", "false", "FALSE", "no", "NO"];
    t.exports = {
      hasValue: r,
      isInt: i,
      isFloat: s,
      isNumber: a,
      isString: o,
      isArray: u,
      isTruthValue: d,
      isFalseValue: c,
      asInt: p,
      asFloat: h,
      asNumber: f,
      asBoolean: l
    }
  }, function (t, e, n) {
    function r(t) {
      var e = [];
      return m.forIn(t, function (t, n) {
        e.push(t + "=" + n)
      }), e.join(",")
    }

    function i() {
      return v + p.generate()
    }

    function o(t, e) {
      function n(t) {
        return Math.round(t / 2)
      }
      return t > e ? {
        coordinate: 0,
        size: e
      } : {
        coordinate: n(e) - n(t),
        size: t
      }
    }

    function s(t, e, n) {
      var i, s;
      e = a.parse(e), n = n || {}, i = o(e.width, n.width || g), e.left = i.coordinate, e.width = i.size, s = o(e.height, n.height || w), e.top = s.coordinate, e.height = s.size, this.win = t, this.features = r(e)
    }
    var a, u = n(7),
      c = n(29),
      d = n(20),
      l = n(22),
      f = n(8),
      h = n(25),
      p = n(30),
      m = n(12),
      v = "intent_",
      g = u.screen.width,
      w = u.screen.height;
    a = (new c).defaults({
      width: 550,
      height: 520,
      personalbar: "0",
      toolbar: "0",
      location: "1",
      scrollbars: "1",
      resizable: "1"
    }), s.prototype.open = function (t, e) {
      var n = e && "click" == e.type && l.closest("a", e.target),
        r = e && (e.altKey || e.metaKey || e.shiftKey),
        o = n && (f.ios() || f.android());
      if (h.isTwitterURL(t)) return r || o ? this : (this.name = i(), this.popup = this.win.open(t, this.name, this.features), e && d.preventDefault(e), this)
    }, s.open = function (t, e, n) {
      var r = new s(u, e);
      return r.open(t, n)
    }, t.exports = s
  }, function (t, e, n) {
    function r(t) {
      return function (e) {
        return o.hasValue(e[t])
      }
    }

    function i() {
      this.assertions = [], this._defaults = {}
    }
    var o = n(27),
      s = n(12);
    i.prototype.assert = function (t, e) {
      return this.assertions.push({
        fn: t,
        msg: e || "assertion failed"
      }), this
    }, i.prototype.defaults = function (t) {
      return this._defaults = t || this._defaults, this
    }, i.prototype.require = function (t) {
      var e = this;
      return t = Array.isArray(t) ? t : s.toRealArray(arguments), t.forEach(function (t) {
        e.assert(r(t), "required: " + t)
      }), this
    }, i.prototype.parse = function (t) {
      var e, n;
      if (e = s.aug({}, this._defaults, t || {}), n = this.assertions.reduce(function (t, n) {
          return n.fn(e) || t.push(n.msg), t
        }, []), n.length > 0) throw new Error(n.join("\n"));
      return e
    }, t.exports = i
  }, function (t, e) {
    function n() {
      return i + String(+new Date) + Math.floor(1e5 * Math.random()) + o++
    }

    function r() {
      return i + String(s++)
    }
    var i = "i",
      o = 0,
      s = 0;
    t.exports = {
      generate: n,
      deterministic: r
    }
  }, function (t, e, n) {
    function r() {
      return i.get("events") || {}
    }
    var i = n(16),
      o = n(32),
      s = n(12);
    t.exports = s.aug(r(), o.Emitter)
  }, function (t, e, n) {
    function r() {
      return i.aug(function () {}, s)
    }
    var i = n(12),
      o = n(15),
      s = {
        bind: function (t, e) {
          return this._handlers = this._handlers || {}, this._handlers[t] = this._handlers[t] || [], this._handlers[t].push(e)
        },
        unbind: function (t, e) {
          var n;
          this._handlers && this._handlers[t] && (e ? (n = this._handlers[t].indexOf(e), n >= 0 && this._handlers[t].splice(n, 1)) : this._handlers[t] = [])
        },
        trigger: function (t, e) {
          var n = this._handlers && this._handlers[t];
          e = e || {}, e.type = t, n && n.forEach(function (t) {
            i.async(o(t, this, e))
          })
        }
      };
    t.exports = {
      Emitter: s,
      makeEmitter: r
    }
  }, function (t, e, n) {
    function r(t) {
      return t.reduce(function (t, e) {
        return t.concat(w.reduce(function (t, n) {
          return t.concat(n(e))
        }, []))
      }, [])
    }

    function i() {
      var t = l.val("widgets:autoload") || !0;
      return !m.isFalseValue(t) && (m.isTruthValue(t) ? a.body : a.querySelectorAll(t))
    }

    function o(t) {
      var e;
      return t = t || a.body, t = t.length ? v.toRealArray(t) : [t], h.pause(), e = c.allResolved(r(t).map(function (t) {
        return d.addWidget(t)
      })).then(function (t) {
        p.trigger("loaded", {
          widgets: t
        }), y.emitter.trigger(y.ALL_WIDGETS_RENDERED, {
          widgets: t
        })
      }), c.always(e, function () {
        h.resume()
      }), e
    }

    function s() {
      var t = i();
      return g.load(), t === !1 ? u.resolve() : (f.set("widgets.loaded", !0), o(t))
    }
    var a = n(9),
      u = n(2),
      c = n(34),
      d = n(35),
      l = n(42),
      f = n(18),
      h = n(43),
      p = n(31),
      m = n(27),
      v = n(12),
      g = n(75),
      w = n(83),
      y = n(241);
    t.exports = {
      load: o,
      loadPage: s,
      _getPageLoadTarget: i
    }
  }, function (t, e, n) {
    function r(t, e) {
      return t.then(e, e)
    }

    function i(t) {
      var e;
      return t = t || [], e = t.length, t = t.filter(a), e ? e !== t.length ? c.reject("non-Promise passed to .some") : new c(function (e, n) {
        function r() {
          i += 1, i === t.length && n()
        }
        var i = 0;
        t.forEach(function (t) {
          t.then(e, r)
        })
      }) : c.reject("no promises passed to .some")
    }

    function o(t) {
      var e;
      return void 0 === t ? c.reject(new Error("undefined is not an object")) : Array.isArray(t) ? (e = t.length, e ? new c(function (n, r) {
        function i() {
          s += 1, s === e && (0 === u.length ? r() : n(u))
        }

        function o(t) {
          u.push(t), i()
        }
        var s = 0,
          u = [];
        t.forEach(function (t) {
          a(t) ? t.then(o, i) : o(t)
        })
      }) : c.resolve([])) : c.reject(new Error("Type error"))
    }

    function s(t) {
      function e() {}
      return c.all((t || []).map(function (t) {
        return r(t, e)
      }))
    }

    function a(t) {
      return t instanceof c
    }

    function u(t, e) {
      var n = new d;
      return setTimeout(function () {
        n.reject(new Error("Promise timed out"))
      }, e), t.then(function (t) {
        n.resolve(t)
      }, function (t) {
        n.reject(t)
      }), n.promise
    }
    var c = n(2),
      d = n(1);
    t.exports = {
      always: r,
      allResolved: o,
      some: i,
      isPromise: a,
      allSettled: s,
      timeout: u
    }
  }, function (t, e, n) {
    function r(t) {
      return t.reduce(function (t, e) {
        return t[e.className] = t[e.className] || [], t[e.className].push(e), t
      }, {})
    }

    function i(t) {
      var e = t.map(s.fromRawTask),
        n = r(e);
      l.forIn(n, function (t, e) {
        c.allSettled(e.map(function (t) {
          return t.initialize()
        })).then(function () {
          e.forEach(function (t) {
            u.all([t.hydrate(), t.insertIntoDom()]).then(d(t.render, t)).then(d(t.success, t), d(t.fail, t))
          })
        })
      })
    }

    function o(t) {
      return f.add(t)
    }
    var s = n(36),
      a = n(40),
      u = n(2),
      c = n(34),
      d = n(15),
      l = n(12),
      f = new a(i);
    t.exports = {
      addWidget: o
    }
  }, function (t, e, n) {
    function r(t) {
      var e = t.srcEl || t.targetEl;
      return e.ownerDocument.defaultView
    }

    function i(t, e) {
      this._widget = null, this._sandbox = null, this._hydrated = !1, this._insertedIntoDom = !1, this._Sandbox = t.Sandbox, this._factory = t.factory, this._widgetParams = t.parameters, this._resolve = e, this._className = t.className, this._renderedClassName = t.className + "-rendered", this._errorClassName = t.className + "-error", this._srcEl = t.srcEl, this._targetGlobal = r(t), this._insertionStrategy = function (e) {
        var n = t.srcEl,
          r = t.targetEl;
        n ? r.insertBefore(e, n) : r.appendChild(e)
      }
    }
    var o = n(21),
      s = n(37),
      a = n(31),
      u = n(39),
      c = n(2),
      d = n(34);
    i.fromRawTask = function (t) {
      return new i(t.input, t.taskDoneDeferred.resolve)
    }, i.prototype.initialize = function () {
      var t = this,
        e = new this._Sandbox(this._targetGlobal);
      return this._factory(this._widgetParams, e).then(function (n) {
        return t._widget = n, t._sandbox = e, n
      })
    }, i.prototype.insertIntoDom = function () {
      var t = this;
      return this._widget ? this._sandbox.insert(this._widget.id, {
        class: [this._className, this._renderedClassName].join(" ")
      }, null, this._insertionStrategy).then(function () {
        t._insertedIntoDom = !0
      }) : c.reject(new Error("cannot insert widget into DOM before it is initialized"))
    }, i.prototype.hydrate = function () {
      var t = this;
      return this._widget ? this._widget.hydrate().then(function () {
        t._hydrated = !0
      }) : c.reject(new Error("cannot hydrate widget before it is initialized"))
    }, i.prototype.render = function () {
      function t() {
        r._sandbox.onResize(function () {
          return r._widget.resize().then(function () {
            a.trigger("resize", {
              target: r._sandbox.sandboxEl
            })
          })
        })
      }

      function e() {
        return u(r._srcEl).then(function () {
          return r._sandbox.sandboxEl
        })
      }

      function n(t) {
        return u(r._sandbox.sandboxEl).then(function () {
          return c.reject(t)
        })
      }
      var r = this;
      return this._hydrated ? this._insertedIntoDom ? r._widget.render(r._sandbox).then(function () {
        return t(), r._widget.show()
      }).then(e, n) : n(new Error("cannot render widget before DOM insertion")) : n(new Error("cannot render widget before hydration"))
    }, i.prototype.fail = function () {
      var t = this;
      return this._srcEl ? d.always(s.write(function () {
        o.add(t._srcEl, t._errorClassName)
      }), function () {
        a.trigger("rendered", {
          target: t._srcEl
        }), t._resolve(t._srcEl)
      }) : (t._resolve(), c.resolve())
    }, i.prototype.success = function () {
      a.trigger("rendered", {
        target: this._sandbox.sandboxEl
      }), this._resolve(this._sandbox.sandboxEl)
    }, t.exports = i
  }, function (t, e, n) {
    function r(t, e) {
      return function () {
        try {
          e.resolve(t.call(this))
        } catch (t) {
          e.reject(t)
        }
      }
    }

    function i(t, e) {
      t.call(e)
    }

    function o(t, e) {
      var n = new c;
      return u.read(r(t, n), e), n.promise
    }

    function s(t, e) {
      var n = new c;
      return u.write(r(t, n), e), n.promise
    }

    function a(t, e, n) {
      var i = new c;
      return d.isType("function", t) && (n = e, e = t, t = 1), u.defer(t, r(e, i), n), i.promise
    }
    var u = n(38),
      c = n(1),
      d = n(12);
    t.exports = {
      sync: i,
      read: o,
      write: s,
      defer: a
    }
  }, function (t, e, n) {
    var r;
    ! function () {
      "use strict";

      function i() {
        this.frames = [], this.lastId = 0, this.raf = o, this.batch = {
          hash: {},
          read: [],
          write: [],
          mode: null
        }
      }
      var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
        return window.setTimeout(t, 1e3 / 60)
      };
      i.prototype.read = function (t, e) {
        var n = this.add("read", t, e),
          r = n.id;
        this.batch.read.push(n.id);
        var i = "reading" === this.batch.mode || this.batch.scheduled;
        return i ? r : (this.scheduleBatch(), r)
      }, i.prototype.write = function (t, e) {
        var n = this.add("write", t, e),
          r = this.batch.mode,
          i = n.id;
        this.batch.write.push(n.id);
        var o = "writing" === r || "reading" === r || this.batch.scheduled;
        return o ? i : (this.scheduleBatch(), i)
      }, i.prototype.defer = function (t, e, n) {
        "function" == typeof t && (n = e, e = t, t = 1);
        var r = this,
          i = t - 1;
        return this.schedule(i, function () {
          r.run({
            fn: e,
            ctx: n
          })
        })
      }, i.prototype.clear = function (t) {
        if ("function" == typeof t) return this.clearFrame(t);
        t = Number(t);
        var e = this.batch.hash[t];
        if (e) {
          var n = this.batch[e.type],
            r = n.indexOf(t);
          delete this.batch.hash[t], ~r && n.splice(r, 1)
        }
      }, i.prototype.clearFrame = function (t) {
        var e = this.frames.indexOf(t);
        ~e && this.frames.splice(e, 1)
      }, i.prototype.scheduleBatch = function () {
        var t = this;
        this.schedule(0, function () {
          t.batch.scheduled = !1, t.runBatch()
        }), this.batch.scheduled = !0
      }, i.prototype.uniqueId = function () {
        return ++this.lastId
      }, i.prototype.flush = function (t) {
        for (var e; e = t.shift();) this.run(this.batch.hash[e])
      }, i.prototype.runBatch = function () {
        try {
          this.batch.mode = "reading", this.flush(this.batch.read), this.batch.mode = "writing", this.flush(this.batch.write), this.batch.mode = null
        } catch (t) {
          throw this.runBatch(), t
        }
      }, i.prototype.add = function (t, e, n) {
        var r = this.uniqueId();
        return this.batch.hash[r] = {
          id: r,
          fn: e,
          ctx: n,
          type: t
        }
      }, i.prototype.run = function (t) {
        var e = t.ctx || this,
          n = t.fn;
        if (delete this.batch.hash[t.id], !this.onError) return n.call(e);
        try {
          n.call(e)
        } catch (t) {
          this.onError(t)
        }
      }, i.prototype.loop = function () {
        function t() {
          var e = n.frames.shift();
          n.frames.length ? r(t) : n.looping = !1, e && e()
        }
        var e, n = this,
          r = this.raf,
          i = !1,
          o = 500;
        this.looping || (e = setTimeout(function () {
          i = !0, t()
        }, o), r(function () {
          i || (clearTimeout(e), t())
        }), this.looping = !0)
      }, i.prototype.schedule = function (t, e) {
        return this.frames[t] ? this.schedule(t + 1, e) : (this.loop(), this.frames[t] = e)
      };
      var s = new i;
      "undefined" != typeof t && t.exports ? t.exports = s : (r = function () {
        return s
      }.call(e, n, e, t), !(void 0 !== r && (t.exports = r)))
    }()
  }, function (t, e, n) {
    function r(t) {
      return i.write(function () {
        t && t.parentNode && t.parentNode.removeChild(t)
      })
    }
    var i = n(37);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      this._inputsQueue = [], this._task = t, this._hasFlushBeenScheduled = !1
    }
    var i = n(1),
      o = n(41),
      s = n(15);
    r.prototype.add = function (t) {
      var e = new i;
      return this._inputsQueue.push({
        input: t,
        taskDoneDeferred: e
      }), this._hasFlushBeenScheduled || (this._hasFlushBeenScheduled = !0, o(s(this._flush, this))), e.promise
    }, r.prototype._flush = function () {
      try {
        this._task.call(null, this._inputsQueue)
      } catch (t) {
        this._inputsQueue.forEach(function (e) {
          e.taskDoneDeferred.reject(t)
        })
      }
      this._inputsQueue = [], this._hasFlushBeenScheduled = !1
    }, t.exports = r
  }, function (t, e, n) {
    var r = n(3).Promise;
    t.exports = r._asap
  }, function (t, e, n) {
    function r(t) {
      var e, n, r, i = 0;
      for (o = {}, t = t || s, e = t.getElementsByTagName("meta"); e[i]; i++) {
        if (n = e[i], /^twitter:/.test(n.getAttribute("name"))) r = n.getAttribute("name").replace(/^twitter:/, "");
        else {
          if (!/^twitter:/.test(n.getAttribute("property"))) continue;
          r = n.getAttribute("property").replace(/^twitter:/, "")
        }
        o[r] = n.getAttribute("content") || n.getAttribute("value")
      }
    }

    function i(t) {
      return o[t]
    }
    var o, s = n(9);
    r(), t.exports = {
      init: r,
      val: i
    }
  }, function (t, e, n) {
    function r(t) {
      return 1 === t.length && f.canFlushOneItem(t[0])
    }

    function i(t) {
      t.forEach(function (t) {
        var e = t.input.namespace,
          n = t.input.data,
          r = t.input.offsite,
          i = t.input.version;
        f.clientEvent(e, n, r, i), t.taskDoneDeferred.resolve()
      })
    }

    function o(t) {
      function e() {
        t.forEach(function (t) {
          t.taskDoneDeferred.resolve()
        })
      }

      function n() {
        t.forEach(function (t) {
          t.taskDoneDeferred.reject()
        })
      }
      l.init(), t.forEach(function (t) {
        var e = t.input.namespace,
          n = t.input.data,
          r = t.input.offsite,
          i = t.input.version;
        l.clientEvent(e, n, r, i)
      }), l.flush().then(e, n)
    }

    function s(t) {
      var e, n, s;
      if (0 !== t.length) {
        if (r(t)) return i(t);
        e = d(t, function (t) {
          return h.noticeSeen(t.input.namespace)
        }), n = e.true, s = e.false, n && n.length > 0 && (n = n.slice(0, 1), f.canFlushOneItem(n[0]) || (n[0].input.data.message = ""), i(n)), s && (r(s) ? i : o)(s)
      }
    }

    function a(t, e, n, r) {
      return m.add({
        namespace: t,
        data: e,
        offsite: n,
        version: r
      })
    }

    function u() {
      m.pause()
    }

    function c() {
      m.resume()
    }
    var d = n(44),
      l = n(45),
      f = n(73),
      h = n(52),
      p = n(74),
      m = new p(s);
    t.exports = {
      scribe: a,
      pause: u,
      resume: c
    }
  }, function (t, e) {
    function n(t, e) {
      return t.reduce(function (t, n) {
        var r = e(n);
        return t[r] = t[r] || [], t[r].push(n), t
      }, {})
    }
    t.exports = n
  }, function (t, e, n) {
    function r() {
      function t(t) {
        p.body.appendChild(t)
      }
      return P ? j.promise : (h = new x(m), h.insert("rufous-sandbox", null, {
        display: "none"
      }, t).then(function () {
        h.setTitle("Twitter analytics iframe"), l = c(), f = d(), j.resolve([l, f])
      }), P = !0, j.promise)
    }

    function i(t, e) {
      var n, r, i;
      E.isObject(t) && E.isObject(e) && (b.log(t, e), i = _.flattenClientEventPayload(t, e), n = l.firstChild, n.value = +(+n.value || i.dnt || 0), r = h.createElement("input"), r.type = "hidden", r.name = "l", r.value = _.stringify(i), l.appendChild(r))
    }

    function o(t, e) {
      var n = !E.isObject(t),
        r = !!e && !E.isObject(e),
        i = n || r;
      return i
    }

    function s(t, e, n, r) {
      o(t, e) || (T && T(arguments), j.promise.then(function () {
        i(_.formatClientEventNamespace(t), _.formatClientEventData(e, n, r))
      }))
    }

    function a() {
      return j.promise.then(function () {
        var t;
        return l.children.length <= 2 ? y.reject() : (t = y.all([h.doc.body.appendChild(l), h.doc.body.appendChild(f)]).then(function (t) {
          var e = t[0],
            n = t[1];
          return n.addEventListener("load", function () {
            u(e, n)()
          }), e.submit(), t
        }), l = c(), f = d(), t)
      })
    }

    function u(t, e) {
      return function () {
        var n = t.parentNode;
        n && (n.removeChild(t), n.removeChild(e))
      }
    }

    function c() {
      var t = h.createElement("form"),
        e = h.createElement("input"),
        n = h.createElement("input");
      return R++, t.action = _.CLIENT_EVENT_ENDPOINT, t.method = "POST", t.target = I + R, t.id = S + R, e.type = "hidden", e.name = "dnt", e.value = g.enabled(), n.type = "hidden", n.name = "tfw_redirect", n.value = _.RUFOUS_REDIRECT, t.appendChild(e), t.appendChild(n), t
    }

    function d() {
      var t = I + R;
      return v({
        id: t,
        name: t,
        width: 0,
        height: 0,
        border: 0
      }, {
        display: "none"
      }, h.doc)
    }
    var l, f, h, p = n(9),
      m = n(7),
      v = n(46),
      g = n(47),
      w = n(1),
      y = n(2),
      b = n(51),
      _ = n(52),
      E = n(12),
      x = n(55),
      A = n(18),
      T = A.get("scribeCallback"),
      C = Math.floor(1e3 * Math.random()) + "_",
      I = "rufous-frame-" + C + "-",
      S = "rufous-form-" + C + "-",
      R = 0,
      P = !1,
      j = new w;
    t.exports = {
      clientEvent: s,
      flush: a,
      init: r
    }
  }, function (t, e, n) {
    var r = n(9),
      i = n(12);
    t.exports = function (t, e, n) {
      var o;
      if (n = n || r, t = t || {}, e = e || {}, t.name) {
        try {
          o = n.createElement('<iframe name="' + t.name + '"></iframe>')
        } catch (e) {
          o = n.createElement("iframe"), o.name = t.name
        }
        delete t.name
      } else o = n.createElement("iframe");
      return t.id && (o.id = t.id, delete t.id), o.allowtransparency = "true", o.scrolling = "no", o.setAttribute("frameBorder", 0), o.setAttribute("allowTransparency", !0), i.forIn(t, function (t, e) {
        o.setAttribute(t, e)
      }), i.forIn(e, function (t, e) {
        o.style[t] = e
      }), o
    }
  }, function (t, e, n) {
    function r() {
      l = !0
    }

    function i(t, e) {
      return !!l || (!!c.asBoolean(d.val("dnt")) || (!!u.isUrlSensitive(e || s.host) || (!(!a.isFramed() || !u.isUrlSensitive(a.rootDocumentLocation())) || (t = f.test(t || o.referrer) && RegExp.$1, !(!t || !u.isUrlSensitive(t))))))
    }
    var o = n(9),
      s = n(11),
      a = n(48),
      u = n(50),
      c = n(27),
      d = n(42),
      l = !1,
      f = /https?:\/\/([^\/]+).*/i;
    t.exports = {
      setOn: r,
      enabled: i
    }
  }, function (t, e, n) {
    function r(t) {
      return t && u.isType("string", t) && (c = t), c
    }

    function i() {
      return d
    }

    function o() {
      return c !== d
    }
    var s = n(11),
      a = n(49),
      u = n(12),
      c = a.getCanonicalURL() || s.href,
      d = c;
    t.exports = {
      isFramed: o,
      rootDocumentLocation: r,
      currentDocumentLocation: i
    }
  }, function (t, e, n) {
    function r(t, e) {
      var n, r;
      return e = e || a, /^https?:\/\//.test(t) ? t : /^\/\//.test(t) ? e.protocol + t : (n = e.host + (e.port.length ? ":" + e.port : ""), 0 !== t.indexOf("/") && (r = e.pathname.split("/"), r.pop(), r.push(t), t = "/" + r.join("/")), [e.protocol, "//", n, t].join(""))
    }

    function i() {
      for (var t, e = s.getElementsByTagName("link"), n = 0; e[n]; n++)
        if (t = e[n], "canonical" == t.rel) return r(t.href)
    }

    function o() {
      for (var t, e, n, r = s.getElementsByTagName("a"), i = s.getElementsByTagName("link"), o = [r, i], a = 0, c = 0, d = /\bme\b/; t = o[a]; a++)
        for (c = 0; e = t[c]; c++)
          if (d.test(e.rel) && (n = u.screenName(e.href))) return n
    }
    var s = n(9),
      a = n(11),
      u = n(25);
    t.exports = {
      absolutize: r,
      getCanonicalURL: i,
      getScreenNameFromPage: o
    }
  }, function (t, e, n) {
    function r(t) {
      return t in a ? a[t] : a[t] = s.test(t)
    }

    function i() {
      return r(o.host)
    }
    var o = n(11),
      s = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i,
      a = {};
    t.exports = {
      isUrlSensitive: r,
      isHostPageSensitive: i
    }
  }, function (t, e, n) {
    function r(t, e) {}
    n(10);
    t.exports = {
      log: r
    }
  }, function (t, e, n) {
    function r(t, e) {
      var n;
      return e = e || {}, t && t.nodeType === Node.ELEMENT_NODE ? (n = t.getAttribute("data-scribe"), n && n.split(" ").forEach(function (t) {
        var n = t.trim().split(":"),
          r = n[0],
          i = n[1];
        r && i && !e[r] && (e[r] = i)
      }), r(t.parentNode, e)) : e
    }

    function i(t) {
      return v.aug({
        client: "tfw"
      }, t || {})
    }

    function o(t, e, n) {
      var r = t && t.widget_origin || h.referrer;
      return t = s("tfw_client_event", t, r), t.client_version = _, t.format_version = void 0 !== n ? n : 1, e || (t.widget_origin = r), t
    }

    function s(t, e, n) {
      return e = e || {}, v.aug({}, e, {
        _category_: t,
        triggered_on: e.triggered_on || +new Date,
        dnt: m.enabled(n)
      })
    }

    function a(t, e) {
      var n = {};
      return e = e || {}, e.association_namespace = i(t), n[T] = e, n
    }

    function u(t, e) {
      return v.aug({}, e, {
        event_namespace: t
      })
    }

    function c(t) {
      return "notice" === t.element && "seen" === t.action
    }

    function d(t) {
      var e, n = Array.prototype.toJSON;
      return delete Array.prototype.toJSON, e = p.stringify(t), n && (Array.prototype.toJSON = n), e
    }

    function l(t) {
      var e = b.closest("[data-expanded-url]", t),
        n = e && e.getAttribute("data-expanded-url");
      return n && y.isTwitterURL(n) ? "twitter_url" : "url"
    }

    function f(t) {
      var e, n, r, i, o, s;
      return t.item_ids && t.item_ids.length > 1 ? (e = Math.floor(t.item_ids.length / 2), n = t.item_ids.slice(0, e), r = {}, i = t.item_ids.slice(e), o = {}, n.forEach(function (e) {
        r[e] = t.item_details[e]
      }), i.forEach(function (e) {
        o[e] = t.item_details[e]
      }), s = [v.aug({}, t, {
        item_ids: n,
        item_details: r
      }), v.aug({}, t, {
        item_ids: i,
        item_details: o
      })]) : [t]
    }
    var h = n(9),
      p = n(53),
      m = n(47),
      v = n(12),
      g = n(54),
      w = n(18),
      y = n(25),
      b = n(22),
      _ = g.version,
      E = w.get("clientEventEndpoint") || "https://syndication.twitter.com/i/jot",
      x = "https://syndication.twitter.com/i/jot/syndication",
      A = "https://platform.twitter.com/jot.html",
      T = 1;
    t.exports = {
      extractTermsFromDOM: r,
      clickEventElement: l,
      flattenClientEventPayload: u,
      formatGenericEventData: s,
      formatClientEventData: o,
      formatClientEventNamespace: i,
      formatTweetAssociation: a,
      noticeSeen: c,
      splitLogEntry: f,
      stringify: d,
      AUDIENCE_ENDPOINT: x,
      CLIENT_EVENT_ENDPOINT: E,
      RUFOUS_REDIRECT: A
    }
  }, function (t, e, n) {
    var r = n(7),
      i = r.JSON;
    t.exports = {
      stringify: i.stringify || i.encode,
      parse: i.parse || i.decode
    }
  }, function (t, e) {
    t.exports = {
      version: "d82bbaf:1535659122685"
    }
  }, function (t, e, n) {
    var r = n(56),
      i = n(65);
    t.exports = r.build([i])
  }, function (t, e, n) {
    var r = n(57),
      i = n(60),
      o = n(15);
    r = Object.create(r), r.build = o(r.build, null, i), t.exports = r
  }, function (t, e, n) {
    function r() {
      return a.toRealArray(arguments)
    }

    function i(t, e, n) {
      var r = new t;
      return e = s(o(e || [])), e.forEach(function (t) {
        t.call(null, r)
      }), r.build(n)
    }
    var o = n(58),
      s = n(59),
      a = n(12);
    t.exports = {
      couple: r,
      build: i
    }
  }, function (t, e, n) {
    function r(t) {
      var e = [];
      return t.forEach(function (t) {
        var n = i.isType("array", t) ? r(t) : [t];
        e = e.concat(n)
      }), e
    }
    var i = n(12);
    t.exports = r
  }, function (t, e) {
    function n(t) {
      return t.filter(function (e, n) {
        return t.indexOf(e) === n
      })
    }
    t.exports = n
  }, function (t, e, n) {
    function r() {
      i.apply(this, arguments)
    }
    var i = n(61),
      o = n(12),
      s = n(64);
    r.prototype = Object.create(i.prototype), o.aug(r.prototype, {
      factory: s
    }), t.exports = r
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = this[e];
      if (!r) throw new Error(e + " does not exist");
      this[e] = t(r, n)
    }

    function i() {
      this.Component = this.factory(), this._adviceArgs = [], this._lastArgs = []
    }
    var o = n(62),
      s = n(12),
      a = n(63);
    s.aug(i.prototype, {
      factory: a,
      build: function (t) {
        var e = this;
        this.Component;
        return s.aug(this.Component.prototype.boundParams, t), this._adviceArgs.concat(this._lastArgs).forEach(function (t) {
          r.apply(e.Component.prototype, t)
        }), delete this._lastArgs, delete this._adviceArgs, this.Component
      },
      params: function (t) {
        var e = this.Component.prototype.paramConfigs;
        t = t || {}, this.Component.prototype.paramConfigs = s.aug({}, t, e)
      },
      define: function (t, e) {
        if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
        this.override(t, e)
      },
      defineStatic: function (t, e) {
        this.Component[t] = e
      },
      override: function (t, e) {
        this.Component.prototype[t] = e
      },
      defineProperty: function (t, e) {
        if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
        this.overrideProperty(t, e)
      },
      overrideProperty: function (t, e) {
        var n = s.aug({
          configurable: !0
        }, e);
        Object.defineProperty(this.Component.prototype, t, n)
      },
      before: function (t, e) {
        this._adviceArgs.push([o.before, t, e])
      },
      after: function (t, e) {
        this._adviceArgs.push([o.after, t, e])
      },
      around: function (t, e) {
        this._adviceArgs.push([o.around, t, e])
      },
      last: function (t, e) {
        this._lastArgs.push([o.after, t, e])
      }
    }), t.exports = i
  }, function (t, e, n) {
    function r(t, e) {
      return function () {
        var n, r = this,
          i = arguments;
        return n = e.apply(this, arguments), s.isPromise(n) ? n.then(function () {
          return t.apply(r, i)
        }) : t.apply(this, arguments)
      }
    }

    function i(t, e) {
      return function () {
        function n(t, e) {
          return s.isPromise(e) ? e.then(function () {
            return t
          }) : t
        }
        var r, i = this,
          o = arguments;
        return r = t.apply(this, arguments), s.isPromise(r) ? r.then(function (t) {
          return n(t, e.apply(i, o))
        }) : n(r, e.apply(this, arguments))
      }
    }

    function o(t, e) {
      return function () {
        var n = a.toRealArray(arguments);
        return n.unshift(u(t, this)), e.apply(this, n)
      }
    }
    var s = n(34),
      a = n(12),
      u = n(15);
    t.exports = {
      before: r,
      after: i,
      around: o
    }
  }, function (t, e, n) {
    function r() {
      return !0
    }

    function i(t) {
      return t
    }

    function o(t, e, n) {
      var r = null;
      return t.some(function (t) {
        if (t = a.isType("function", t) ? t() : t, e(t)) return r = n(t), !0
      }), r
    }

    function s() {
      function t(t) {
        var e = this;
        t = t || {}, this.params = Object.keys(this.paramConfigs).reduce(function (n, s) {
          var a = [],
            u = e.boundParams,
            c = e.paramConfigs[s],
            d = c.validate || r,
            l = c.transform || i;
          if (s in u && a.push(u[s]), s in t && a.push(t[s]), a = "fallback" in c ? a.concat(c.fallback) : a, n[s] = o(a, d, l), c.required && null == n[s]) throw new Error(s + " is a required parameter");
          return n
        }, {}), this.initialize()
      }
      return a.aug(t.prototype, {
        paramConfigs: {},
        boundParams: {},
        initialize: function () {}
      }), t
    }
    var a = n(12);
    t.exports = s
  }, function (t, e, n) {
    function r() {
      function t(t) {
        e.apply(this, arguments), Object.defineProperty(this, "targetGlobal", {
          value: t
        })
      }
      var e = s();
      return t.prototype = Object.create(e.prototype), u.aug(t.prototype, {
        id: null,
        initialized: !1,
        width: 0,
        height: 0,
        sandboxEl: null,
        insert: function () {
          return a.reject()
        },
        onResize: function () {},
        addClass: function (t) {
          var e = this.sandboxEl;
          return t = Array.isArray(t) ? t : [t], o.write(function () {
            t.forEach(function (t) {
              i.add(e, t)
            })
          })
        },
        removeClass: function (t) {
          var e = this.sandboxEl;
          return t = Array.isArray(t) ? t : [t], o.write(function () {
            t.forEach(function (t) {
              i.remove(e, t)
            })
          })
        },
        styleSelf: function (t) {
          var e = this;
          return o.write(function () {
            u.forIn(t, function (t, n) {
              e.sandboxEl.style[t] = n
            })
          })
        }
      }), t
    }
    var i = n(21),
      o = n(37),
      s = n(63),
      a = n(2),
      u = n(12);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e, n, r) {
      return e = b.aug({
        id: t
      }, A, e), n = b.aug({}, T, n), m(e, n, r)
    }

    function i(t) {
      try {
        t.contentWindow.document
      } catch (t) {
        return y.reject(t)
      }
      return y.resolve(t)
    }

    function o(t, e, n, i, o) {
      var s = new w,
        u = E.generate(),
        d = r(t, e, n, o);
      return _.set(["sandbox", u], function () {
        var t = d.contentWindow.document,
          e = "<!DOCTYPE html><html><head></head><body></body></html>";
        c.write(function () {
          t.write(e)
        }).then(function () {
          t.close(), s.resolve(d)
        })
      }), d.src = ["javascript:", 'document.write("");', "try { window.parent.document; }", 'catch (e) { document.domain="' + a.domain + '"; }', "window.parent." + _.fullPath(["sandbox", u]) + "();"].join(""), d.addEventListener("error", s.reject, !1), c.write(function () {
        i.parentNode.replaceChild(d, i)
      }), s.promise
    }

    function s(t) {
      t.overrideProperty("id", {
        get: function () {
          return this.sandboxEl && this.sandboxEl.id
        }
      }), t.overrideProperty("initialized", {
        get: function () {
          return !!this.win
        }
      }), t.overrideProperty("width", {
        get: function () {
          return this._width
        }
      }), t.overrideProperty("height", {
        get: function () {
          return this._height
        }
      }), t.overrideProperty("sandboxEl", {
        get: function () {
          return this.iframeEl
        }
      }), t.defineProperty("iframeEl", {
        get: function () {
          return this._iframe
        }
      }), t.defineProperty("rootEl", {
        get: function () {
          return this.doc && this.doc.documentElement
        }
      }), t.defineProperty("widgetEl", {
        get: function () {
          return this.doc && this.doc.body.firstElementChild
        }
      }), t.defineProperty("win", {
        get: function () {
          return this.iframeEl && this.iframeEl.contentWindow
        }
      }), t.defineProperty("doc", {
        get: function () {
          return this.win && this.win.document
        }
      }), t.define("_updateCachedDimensions", function () {
        var t = this;
        return c.read(function () {
          var e, n = g(t.sandboxEl);
          "visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = g(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height
        })
      }), t.define("_setTargetToBlank", function () {
        var t = this.createElement("base");
        t.target = "_blank", this.doc.head.appendChild(t)
      }), t.define("_didResize", function () {
        var t = this,
          e = this._resizeHandlers.slice(0);
        return this._updateCachedDimensions().then(function () {
          e.forEach(function (e) {
            e(t)
          })
        })
      }), t.define("setTitle", function (t) {
        this.iframeEl.title = t
      }), t.override("createElement", function (t) {
        return this.doc.createElement(t)
      }), t.override("createFragment", function () {
        return this.doc.createDocumentFragment()
      }), t.override("htmlToElement", function (t) {
        var e;
        return e = this.createElement("div"), e.innerHTML = t, e.firstElementChild
      }), t.override("hasSelectedText", function () {
        return !!d.getSelectedText(this.win)
      }), t.override("addRootClass", function (t) {
        var e = this.rootEl;
        return t = Array.isArray(t) ? t : [t], this.initialized ? c.write(function () {
          t.forEach(function (t) {
            u.add(e, t)
          })
        }) : y.reject(new Error("sandbox not initialized"))
      }), t.override("removeRootClass", function (t) {
        var e = this.rootEl;
        return t = Array.isArray(t) ? t : [t], this.initialized ? c.write(function () {
          t.forEach(function (t) {
            u.remove(e, t)
          })
        }) : y.reject(new Error("sandbox not initialized"))
      }), t.override("hasRootClass", function (t) {
        return u.present(this.rootEl, t)
      }), t.define("addStyleSheet", function (t, e) {
        var n, r = new w;
        return this.initialized ? (n = this.createElement("link"), n.type = "text/css", n.rel = "stylesheet", n.href = t, n.addEventListener("load", r.resolve, !1), n.addEventListener("error", r.reject, !1), c.write(x(e, null, n)).then(function () {
          return f(t).then(r.resolve, r.reject), r.promise
        })) : y.reject(new Error("sandbox not initialized"))
      }), t.override("prependStyleSheet", function (t) {
        var e = this.doc;
        return this.addStyleSheet(t, function (t) {
          var n = e.head.firstElementChild;
          return n ? e.head.insertBefore(t, n) : e.head.appendChild(t)
        })
      }), t.override("appendStyleSheet", function (t) {
        var e = this.doc;
        return this.addStyleSheet(t, function (t) {
          return e.head.appendChild(t)
        })
      }), t.define("addCss", function (t, e) {
        var n;
        return h.inlineStyle() ? (n = this.createElement("style"), n.type = "text/css", n.appendChild(this.doc.createTextNode(t)), c.write(x(e, null, n))) : (v.devError("CSP enabled; cannot embed inline styles"), y.resolve())
      }), t.override("prependCss", function (t) {
        var e = this.doc;
        return this.addCss(t, function (t) {
          var n = e.head.firstElementChild;
          return n ? e.head.insertBefore(t, n) : e.head.appendChild(t)
        })
      }), t.override("appendCss", function (t) {
        var e = this.doc;
        return this.addCss(t, function (t) {
          return e.head.appendChild(t)
        })
      }), t.override("makeVisible", function () {
        var t = this;
        return this.styleSelf(C).then(function () {
          t._updateCachedDimensions()
        })
      }), t.override("injectWidgetEl", function (t) {
        var e = this;
        return this.initialized ? this.widgetEl ? y.reject(new Error("widget already injected")) : c.write(function () {
          e.doc.body.appendChild(t)
        }) : y.reject(new Error("sandbox not initialized"))
      }), t.override("matchHeightToContent", function () {
        var t, e = this;
        return c.read(function () {
          t = e.widgetEl ? g(e.widgetEl).height : 0
        }), c.write(function () {
          e.sandboxEl.style.height = t + "px"
        }).then(function () {
          return e._updateCachedDimensions()
        })
      }), t.override("matchWidthToContent", function () {
        var t, e = this;
        return c.read(function () {
          t = e.widgetEl ? g(e.widgetEl).width : 0
        }), c.write(function () {
          e.sandboxEl.style.width = t + "px"
        }).then(function () {
          return e._updateCachedDimensions()
        })
      }), t.after("initialize", function () {
        this._iframe = null, this._width = this._height = 0, this._resizeHandlers = []
      }), t.override("insert", function (t, e, n, s) {
        var a = this,
          u = new w,
          d = this.targetGlobal.document,
          l = r(t, e, n, d);
        return c.write(x(s, null, l)), l.addEventListener("load", function () {
          i(l).then(null, x(o, null, t, e, n, l, d)).then(u.resolve, u.reject)
        }, !1), l.addEventListener("error", u.reject, !1), u.promise.then(function (t) {
          var e = p(a._didResize, R, a);
          return a._iframe = t, a.win.addEventListener("resize", e, !1), y.all([a._setTargetToBlank(), a.addRootClass(I), a.prependCss(S)])
        })
      }), t.override("onResize", function (t) {
        this._resizeHandlers.push(t)
      }), t.after("styleSelf", function () {
        return this._updateCachedDimensions()
      })
    }
    var a = n(9),
      u = n(21),
      c = n(37),
      d = n(66),
      l = n(56),
      f = n(67),
      h = n(68),
      p = n(69),
      m = n(46),
      v = n(10),
      g = n(70),
      w = n(1),
      y = n(2),
      b = n(12),
      _ = n(18),
      E = n(30),
      x = n(15),
      A = {
        allowfullscreen: "true"
      },
      T = {
        position: "absolute",
        visibility: "hidden",
        display: "block",
        width: "0px",
        height: "0px",
        padding: "0",
        border: "none"
      },
      C = {
        position: "static",
        visibility: "visible"
      },
      I = "SandboxRoot",
      S = ".SandboxRoot { display: none; }",
      R = 50;
    t.exports = l.couple(n(71), s)
  }, function (t, e, n) {
    function r(t) {
      return t = t || o, t.getSelection && t.getSelection()
    }

    function i(t) {
      var e = r(t);
      return e ? e.toString() : ""
    }
    var o = n(7);
    t.exports = {
      getSelection: r,
      getSelectedText: i
    }
  }, function (t, e, n) {
    function r(t) {
      var e = new s,
        n = i.createElement("img");
      return n.onload = n.onerror = function () {
        o.setTimeout(e.resolve, 50)
      }, n.src = t, o.setTimeout(e.reject, a), e.promise
    }
    var i = n(9),
      o = n(7),
      s = n(1),
      a = 2e4;
    t.exports = r
  }, function (t, e, n) {
    function r() {
      return h + f.generate()
    }

    function i() {
      var t = r(),
        e = a.createElement("div"),
        n = a.createElement("style"),
        i = "." + t + " { visibility: hidden; }";
      return !!a.body && (l.asBoolean(c.val("widgets:csp")) && (o = !1), void 0 !== o ? o : (e.style.display = "none", s.add(e, t), n.type = "text/css", n.appendChild(a.createTextNode(i)), a.body.appendChild(n), a.body.appendChild(e), o = "hidden" === u.getComputedStyle(e).visibility, d(e), d(n), o))
    }
    var o, s = n(21),
      a = n(9),
      u = n(7),
      c = n(42),
      d = n(39),
      l = n(27),
      f = n(30),
      h = "csptest";
    t.exports = {
      inlineStyle: i
    }
  }, function (t, e, n) {
    function r(t, e, n) {
      function r() {
        var a = n || this,
          u = arguments,
          c = +new Date;
        return i.clearTimeout(o), c - s > e ? (s = c, void t.apply(a, u)) : void(o = i.setTimeout(function () {
          r.apply(a, u)
        }, e))
      }
      var o, s = 0;
      return n = n || null, r
    }
    var i = n(7);
    t.exports = r
  }, function (t, e) {
    function n(t) {
      var e = t.getBoundingClientRect();
      return {
        width: e.width,
        height: e.height
      }
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      t.define("createElement", i), t.define("createFragment", i), t.define("htmlToElement", i), t.define("hasSelectedText", i), t.define("addRootClass", i), t.define("removeRootClass", i), t.define("hasRootClass", i), t.define("prependStyleSheet", i), t.define("appendStyleSheet", i), t.define("prependCss", i), t.define("appendCss", i), t.define("makeVisible", i), t.define("injectWidgetEl", i), t.define("matchHeightToContent", i), t.define("matchWidthToContent", i)
    }
    var i = n(72);
    t.exports = r
  }, function (t, e) {
    function n() {
      throw new Error("unimplemented method")
    }
    t.exports = n
  }, function (t, e, n) {
    function r(t, e, n) {
      return i(t, e, n, 2)
    }

    function i(t, e, n, r) {
      var i = !w.isObject(t),
        o = !!e && !w.isObject(e);
      i || o || (b && b(arguments), s(g.formatClientEventNamespace(t), g.formatClientEventData(e, n, r), g.CLIENT_EVENT_ENDPOINT))
    }

    function o(t, e, n, r) {
      var o = g.extractTermsFromDOM(t.target || t.srcElement);
      o.action = r || "click", i(o, e, n)
    }

    function s(t, e, n) {
      var r, i;
      n && w.isObject(t) && w.isObject(e) && (m.log(t, e), r = g.flattenClientEventPayload(t, e), i = {
        l: g.stringify(r)
      }, g.noticeSeen(t) && (i.notice_seen = !0), r.dnt && (i.dnt = 1), f(v.url(n, i)))
    }

    function a(t, e, n, r) {
      var i, o = !w.isObject(t),
        s = !!e && !w.isObject(e);
      if (!o && !s) return i = g.flattenClientEventPayload(g.formatClientEventNamespace(t), g.formatClientEventData(e, n, r)), u(i)
    }

    function u(t) {
      return E.push(t), E
    }

    function c() {
      var t, e;
      return E.length > 1 && a({
        page: "widgets_js",
        component: "scribe_pixel",
        action: "batch_log"
      }, {}), t = E, E = [], e = t.reduce(function (e, n, r) {
        var i = e.length,
          o = i && e[i - 1],
          s = r + 1 == t.length;
        return s && n.event_namespace && "batch_log" == n.event_namespace.action && (n.message = ["entries:" + r, "requests:" + i].join("/")), d(n).forEach(function (t) {
          var n = l(t);
          (!o || o.urlLength + n > _) && (o = {
            urlLength: A,
            items: []
          }, e.push(o)), o.urlLength += n, o.items.push(t)
        }), e
      }, []), e.map(function (t) {
        var e = {
          l: t.items
        };
        return p.enabled() && (e.dnt = 1), f(v.url(g.CLIENT_EVENT_ENDPOINT, e))
      })
    }

    function d(t) {
      return Array.isArray(t) || (t = [t]), t.reduce(function (t, e) {
        var n, r = g.stringify(e),
          i = l(r);
        return A + i < _ ? t = t.concat(r) : (n = g.splitLogEntry(e), n.length > 1 && (t = t.concat(d(n)))), t
      }, [])
    }

    function l(t) {
      return encodeURIComponent(t).length + 3
    }

    function f(t) {
      var e = new Image;
      return e.src = t
    }

    function h(t) {
      var e = g.stringify(t),
        n = l(e);
      return A + n < _
    }
    var p = n(47),
      m = n(51),
      v = n(26),
      g = n(52),
      w = n(12),
      y = n(18),
      b = y.get("scribeCallback"),
      _ = 2083,
      E = [],
      x = v.url(g.CLIENT_EVENT_ENDPOINT, {
        dnt: 0,
        l: ""
      }),
      A = encodeURIComponent(x).length;
    t.exports = {
      canFlushOneItem: h,
      _enqueueRawObject: u,
      scribe: s,
      clientEvent: i,
      clientEvent2: r,
      enqueueClientEvent: a,
      flushClientEvents: c,
      interaction: o
    }
  }, function (t, e, n) {
    function r(t, e) {
      this._inputsQueue = [], this._task = t, this._isPaused = !1, this._flushDelay = e && e.flushDelay || s, this._pauseLength = e && e.pauseLength || a, this._flushTimeout = void 0
    }
    var i = n(1),
      o = n(15),
      s = 100,
      a = 3e3;
    r.prototype.add = function (t) {
      var e = new i;
      return this._inputsQueue.push({
        input: t,
        taskDoneDeferred: e
      }), this._scheduleFlush(), e.promise
    }, r.prototype._scheduleFlush = function () {
      this._isPaused || (clearTimeout(this._flushTimeout), this._flushTimeout = setTimeout(o(this._flush, this), this._flushDelay))
    }, r.prototype._flush = function () {
      try {
        this._task.call(null, this._inputsQueue)
      } catch (t) {
        this._inputsQueue.forEach(function (e) {
          e.taskDoneDeferred.reject(t)
        })
      }
      this._inputsQueue = [], this._flushTimeout = void 0
    }, r.prototype.pause = function (t) {
      clearTimeout(this._flushTimeout), this._isPaused = !0, !t && this._pauseLength && setTimeout(o(this.resume, this), this._pauseLength)
    }, r.prototype.resume = function () {
      this._isPaused = !1, this._scheduleFlush()
    }, t.exports = r
  }, function (t, e, n) {
    function r() {
      f.load()
    }

    function i() {
      return d().then(function (t) {
        return Object.keys(t)
      })
    }

    function o(t) {
      return d().then(function (e) {
        if (!e[t]) throw new Error("Experiment not found");
        return e[t]
      })
    }

    function s() {
      return d().then(function (t) {
        var e = Object.keys(t).reduce(function (e, n) {
          var r;
          return t[n].version && (r = n.split("_").slice(-1)[0], e.push(r + ";" + t[n].bucket)), e
        }, []);
        return h(e.join(","))
      })
    }

    function a(t) {
      return f.settingsLoaded().then(function (e) {
        return e[t]
      })
    }

    function u() {
      return a("isBucketed")
    }

    function c() {
      return a("shouldObtainCookieConsent")
    }

    function d() {
      return a("experiments")
    }

    function l() {
      return a("isAllowedAds")
    }
    var f = n(76),
      h = n(82);
    t.exports = {
      isBucketed: u,
      shouldObtainCookieConsent: c,
      getExperiments: d,
      getExperiment: o,
      getActiveExperimentDataString: s,
      getExperimentKeys: i,
      load: r,
      isAllowedAds: l
    }
  }, function (t, e, n) {
    function r() {
      var t, e, n, r;
      return f.ie9() || f.ie10() || "http:" !== p.protocol && "https:" !== p.protocol ? (m.devError("Using default settings due to unsupported browser or protocol."), s = i(), void x().resolve()) : (t = {
        origin: p.origin,
        settingsEndpoint: l.settings()
      }, e = y.url(a.resourceBaseUrl + a.widgetIframeHtmlPath, t), n = function (t) {
        var n;
        if (e.substr(0, t.origin.length) === t.origin) try {
          n = "string" == typeof t.data ? h.parse(t.data) : t.data, n.namespace === v.settings && (s = i(n.settings), x().resolve())
        } catch (t) {
          m.devError(t)
        }
      }, E.addEventListener("message", n), r = u({
        src: e,
        title: "Twitter settings iframe"
      }, {
        display: "none"
      }), void d.body.appendChild(r))
    }

    function i(t) {
      var e = {
          is_bucketed: !1,
          should_obtain_cookie_consent: !0,
          experiments: {},
          is_allowed_ads: !1
        },
        n = t || e;
      return new b(n.is_bucketed, n.should_obtain_cookie_consent, n.experiments, n.is_allowed_ads)
    }

    function o() {
      var t, e, n;
      return t = new c, e = w.get("experimentOverride"), x().promise.then(function () {
        e && e.name && e.assignment && (n = {}, n[e.name] = {
          bucket: e.assignment
        }, s.experiments = _.aug(s.experiments, n)), t.resolve(s)
      }).catch(function (e) {
        t.reject(e)
      }), t.promise
    }
    var s, a = n(77),
      u = n(46),
      c = n(1),
      d = n(9),
      l = n(78),
      f = n(8),
      h = n(53),
      p = n(11),
      m = n(10),
      v = n(79),
      g = n(80),
      w = n(18),
      y = n(26),
      b = n(81),
      _ = n(12),
      E = n(7),
      x = g(function () {
        return new c
      });
    t.exports = {
      load: r,
      settingsLoaded: o
    }
  }, function (t, e) {
    t.exports = {
      tweetButtonHtmlPath: "/widgets/tweet_button.32d6c6b4cb1ed84df04e7f9705a90c47.{{lang}}.html",
      followButtonHtmlPath: "/widgets/follow_button.32d6c6b4cb1ed84df04e7f9705a90c47.{{lang}}.html",
      hubHtmlPath: "/widgets/hub.html",
      widgetIframeHtmlPath: "/widgets/widget_iframe.32d6c6b4cb1ed84df04e7f9705a90c47.html",
      resourceBaseUrl: "https://platform.twitter.com"
    }
  }, function (t, e, n) {
    function r() {
      w.init("backendHost", b)
    }

    function i() {
      w.unset("backendHost", b)
    }

    function o(t) {
      var e = t || [];
      return e.unshift("cookie/consent"), p(E(), e)
    }

    function s(t) {
      var e = t || [];
      return e.unshift("settings"), p(E(), e)
    }

    function a(t) {
      var e = t || [];
      return e.unshift("video/event"), p(_(), e)
    }

    function u(t) {
      var e = t || [];
      return e.unshift("grid/collection"), p(_(), e)
    }

    function c(t) {
      var e = t || [];
      return e.unshift("moments"), p(_(), e)
    }

    function d(t) {
      var e = t || [];
      return e.unshift("timeline"), p(_(), e)
    }

    function l(t) {
      var e = t || [];
      return e.unshift("widgets/timelines"), p(_(), e)
    }

    function f(t) {
      var e = t || [];
      return e.unshift("tweets.json"), p(_(), e)
    }

    function h(t) {
      var e = t || [];
      return e.unshift("widgets/video"), p(_(), e)
    }

    function p(t, e) {
      var n = [t];
      return e.forEach(function (t) {
        n.push(m(t))
      }), n.join("/")
    }

    function m(t) {
      var e = (t || "").toString(),
        n = v(e) ? 1 : 0,
        r = g(e) ? -1 : void 0;
      return e.slice(n, r)
    }

    function v(t) {
      return "/" === t.slice(0, 1)
    }

    function g(t) {
      return "/" === t.slice(-1)
    }
    var w = n(18),
      y = "https://cdn.syndication.twimg.com",
      b = "https://syndication.twitter.com",
      _ = function () {
        return w.get("backendHost") || y
      },
      E = function () {
        return w.get("settingsSvcHost") || b
      };
    t.exports = {
      cookieConsent: o,
      disableCDN: r,
      enableCDN: i,
      eventVideo: a,
      grid: u,
      moment: c,
      settings: s,
      timeline: d,
      timelinePreconfigured: l,
      tweetBatch: f,
      video: h
    }
  }, function (t, e) {
    t.exports = {
      settings: "twttr.settings"
    }
  }, function (t, e) {
    function n(t) {
      var e, n = !1;
      return function () {
        return n ? e : (n = !0, e = t.apply(this, arguments))
      }
    }
    t.exports = n
  }, function (t, e) {
    function n(t, e, n, r) {
      this.isBucketed = t, this.shouldObtainCookieConsent = e, this.experiments = n || {}, this.isAllowedAds = r === !0
    }
    t.exports = n
  }, function (t, e) {
    function n(t) {
      return t.split("").map(function (t) {
        return t.charCodeAt(0).toString(16)
      }).join("")
    }
    t.exports = n
  }, function (t, e, n) {
    t.exports = [n(84), n(116), n(130), n(163), n(174), n(180), n(224), n(243)]
  }, function (t, e, n) {
    function r(t) {
      var e = t.getAttribute("data-show-screen-name"),
        n = u(t),
        r = t.getAttribute("href"),
        i = t.getAttribute("data-screen-name"),
        c = e ? s.asBoolean(e) : null,
        d = t.getAttribute("data-size"),
        l = o.decodeURL(r),
        f = l.recipient_id,
        h = t.getAttribute("data-text") || l.text,
        p = t.getAttribute("data-welcome-message-id") || l.welcomeMessageId;
      return a.aug(n, {
        screenName: i,
        showScreenName: c,
        size: d,
        text: h,
        userId: f,
        welcomeMessageId: p
      })
    }

    function i(t) {
      var e = c(t, l);
      return e.map(function (t) {
        return d(r(t), t.parentNode, t)
      })
    }
    var o = n(26),
      s = n(27),
      a = n(12),
      u = n(85),
      c = n(87)(),
      d = n(89),
      l = "a.twitter-dm-button";
    t.exports = i
  }, function (t, e, n) {
    function r(t) {
      var e = t.href && t.href.split("?")[1],
        n = e ? s.decode(e) : {},
        r = {
          lang: u(t),
          width: t.getAttribute("data-width") || t.getAttribute("width"),
          height: t.getAttribute("data-height") || t.getAttribute("height"),
          related: t.getAttribute("data-related"),
          partner: t.getAttribute("data-partner")
        };
      return o.asBoolean(t.getAttribute("data-dnt")) && i.setOn(), a.forIn(r, function (t, e) {
        var r = n[t];
        n[t] = o.hasValue(r) ? r : e
      }), a.compact(n)
    }
    var i = n(47),
      o = n(27),
      s = n(26),
      a = n(12),
      u = n(86);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e;
      if (t) return e = t.lang || t.getAttribute("data-lang"), i.isType("string", e) ? e : r(t.parentElement)
    }
    var i = n(12);
    t.exports = r
  }, function (t, e, n) {
    var r = n(88),
      i = n(30);
    t.exports = function () {
      var t = "data-twitter-extracted-" + i.generate();
      return function (e, n) {
        function i(e) {
          return !e.hasAttribute(t)
        }

        function o(e) {
          return e.setAttribute(t, "true"), e
        }
        return r(e, n).filter(i).map(o)
      }
    }
  }, function (t, e, n) {
    function r(t, e) {
      return o(t, e) ? [t] : i.toRealArray(t.querySelectorAll(e))
    }
    var i = n(12),
      o = n(23);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e, n) {
      return new i(o, s, "twitter-dm-button", t, e, n)
    }
    var i = n(90),
      o = n(91),
      s = n(112);
    t.exports = r
  }, function (t, e) {
    function n(t, e, n, r, i, o) {
      this.factory = t, this.Sandbox = e, this.srcEl = o, this.targetEl = i, this.parameters = r, this.className = n
    }
    n.prototype.destroy = function () {
      this.srcEl = this.targetEl = null
    }, t.exports = n
  }, function (t, e, n) {
    function r(t, e) {
      var r = new i;
      return n.e(1, function (i, o) {
        var s;
        if (i) return r.reject(i);
        try {
          s = n(92), r.resolve(new s(t, e))
        } catch (t) {
          r.reject(t)
        }
      }), r.promise
    }
    var i = n(1);
    t.exports = r
  }, , function (t, e, n) {
    var r = n(57),
      i = n(94),
      o = n(15);
    r = Object.create(r), r.build = o(r.build, null, i), t.exports = r
  }, function (t, e, n) {
    function r() {
      i.apply(this, arguments), this.Widget = this.Component
    }
    var i = n(61),
      o = n(12),
      s = n(95);
    r.prototype = Object.create(i.prototype), o.aug(r.prototype, {
      factory: s,
      build: function () {
        var t = i.prototype.build.apply(this, arguments);
        return t
      },
      selectors: function (t) {
        var e = this.Widget.prototype.selectors;
        t = t || {}, this.Widget.prototype.selectors = o.aug({}, t, e)
      }
    }), t.exports = r
  }, function (t, e, n) {
    function r() {
      function t(t, n) {
        e.apply(this, arguments), this.id = d + c(), this.sandbox = n
      }
      var e = s();
      return t.prototype = Object.create(e.prototype), a.aug(t.prototype, {
        selectors: {},
        hydrate: function () {
          return i.resolve()
        },
        prepForInsertion: function () {},
        render: function () {
          return i.resolve()
        },
        show: function () {
          return i.resolve()
        },
        resize: function () {
          return i.resolve()
        },
        select: function (t, e) {
          return 1 === arguments.length && (e = t, t = this.el), t ? (e = this.selectors[e] || e, a.toRealArray(t.querySelectorAll(e))) : []
        },
        selectOne: function () {
          return this.select.apply(this, arguments)[0]
        },
        selectLast: function () {
          return this.select.apply(this, arguments).pop()
        },
        on: function (t, e, n) {
          function r(t) {
            a.addEventListener(t, n, !1)
          }

          function i(t) {
            o.delegate(a, t, s, n)
          }
          var s, a = this.el;
          this.el && (t = (t || "").split(/\s+/), 2 === arguments.length ? n = e : s = e, s = this.selectors[s] || s, n = u(n, this), t.forEach(s ? i : r))
        }
      }), t
    }
    var i = n(2),
      o = n(20),
      s = n(63),
      a = n(12),
      u = n(15),
      c = n(96),
      d = "twitter-widget-";
    t.exports = r
  }, function (t, e) {
    function n() {
      return String(r++)
    }
    var r = 0;
    t.exports = n
  }, , function (t, e, n) {
    function r(t) {
      return "dark" === t ? "dark" : "light"
    }

    function i(t, e, n) {
      var i, o;
      return n = r(n), i = a.isRtlLang(e) ? "rtl" : "ltr", o = [t, u.css, n, i, "css"].join("."), d.resourceBaseUrl + "/css/" + o
    }

    function o() {
      return d.resourceBaseUrl + "/css/" + ["periscope_on_air", u.css, "css"].join(".")
    }

    function s() {
      return d.resourceBaseUrl + "/css/" + ["dm_button", u.css, "css"].join(".")
    }
    var a = n(99),
      u = n(102),
      c = n(15),
      d = n(77);
    t.exports = {
      dmButton: s,
      tweet: c(i, null, "tweet"),
      timeline: c(i, null, "timeline"),
      video: c(i, null, "video"),
      moment: c(i, null, "moment"),
      grid: c(i, null, "grid"),
      periscopeOnAir: o
    }
  }, function (t, e, n) {
    function r(t) {
      return t = String(t).toLowerCase(), o.contains(a, t)
    }

    function i(t) {
      return t = (t || "").toLowerCase(), t = t.replace("_", "-"), s(t) ? t : (t = t.replace(/-.*/, ""), s(t) ? t : "en")
    }
    var o = n(12),
      s = n(100),
      a = ["ar", "fa", "he", "ur"];
    t.exports = {
      isRtlLang: r,
      matchLanguage: i
    }
  }, function (t, e, n) {
    function r(t) {
      return "en" === t || i.contains(o, t)
    }
    var i = n(12),
      o = n(101);
    t.exports = r
  }, function (t, e) {
    t.exports = ["hi", "zh-cn", "fr", "zh-tw", "msa", "fil", "fi", "sv", "pl", "ja", "ko", "de", "it", "pt", "es", "ru", "id", "tr", "da", "no", "nl", "hu", "fa", "ar", "ur", "he", "th", "cs", "uk", "vi", "ro", "bn", "el", "en-gb", "gu", "kn", "mr", "ta", "bg", "ca", "hr", "sr", "sk"]
  }, function (t, e) {
    t.exports = {
      css: "d1d3833e3b1b21f1a6bc4e8af3baca6b"
    }
  }, function (t, e, n) {
    function r(t) {
      return i.isType("string", t)
    }
    var i = n(12);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = {};
      t.define("injectRefUrlParams", function (t) {
        return s.isTwitterURL(t.href) ? t.getAttribute(u) ? a.resolve() : (e = {
          twcamp: this.params.productName,
          twterm: this.params.id,
          twcon: t.getAttribute("data-twcon")
        }, o.getActiveExperimentDataString().then(function (n) {
          t.setAttribute(u, !0), e.twgr = n, t.href = i(t.href, e)
        }.bind(this)).catch(function () {
          t.setAttribute(u, !0), t.href = i(t.href, e)
        }.bind(this))) : a.resolve()
      }), t.after("render", function () {
        this.on("click", "A", function (t, e) {
          this.injectRefUrlParams(e)
        })
      })
    }
    var i = n(105),
      o = n(75),
      s = n(25),
      a = n(2),
      u = "data-url-ref-attrs-injected";
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      return u.url(t, {
        ref_src: e,
        ref_url: c.rootDocumentLocation()
      })
    }

    function i(t, e) {
      return t + d + e
    }

    function o(t) {
      return t.reduce(function (t, e) {
        return t + l + e
      })
    }

    function s(t) {
      var e = [];
      return t.twcamp && e.push(i(p, t.twcamp)), t.twterm && e.push(i(h, t.twterm)), t.twgr && e.push(i(m, t.twgr)), t.twcon && e.push(i(v, t.twcon)), e
    }

    function a(t, e) {
      var n = [i(f, "tfw")];
      return e && (n = n.concat(s(e))), r(t, o(n))
    }
    var u = n(26),
      c = n(48),
      d = "^",
      l = "|",
      f = "twsrc",
      h = "twterm",
      p = "twcamp",
      m = "twgr",
      v = "twcon";
    t.exports = a
  }, function (t, e, n) {
    function r(t) {
      t.params({
        partner: {
          fallback: u(c.val, c, "partner")
        }
      }), t.define("scribeItems", function () {
        return {}
      }), t.define("scribeNamespace", function () {
        return {
          client: "tfw"
        }
      }), t.define("scribeData", function () {
        return {
          widget_origin: s.rootDocumentLocation(),
          widget_frame: s.isFramed() && s.currentDocumentLocation(),
          widget_partner: this.params.partner,
          widget_site_screen_name: l(c.val("site")),
          widget_site_user_id: d.asNumber(c.val("site:id")),
          widget_creator_screen_name: l(c.val("creator")),
          widget_creator_user_id: d.asNumber(c.val("creator:id"))
        }
      }), t.define("scribe", function (t, e, n) {
        t = a.aug(this.scribeNamespace(), t || {}), e = a.aug(this.scribeData(), e || {}), i.scribe(t, e, !1, n)
      }), t.define("scribeInteraction", function (t, e, n) {
        var r = o.extractTermsFromDOM(t.target);
        r.action = t.type, "url" === r.element && (r.element = o.clickEventElement(t.target)), this.scribe(r, e, n)
      })
    }
    var i = n(43),
      o = n(52),
      s = n(48),
      a = n(12),
      u = n(15),
      c = n(42),
      d = n(27),
      l = n(107);
    t.exports = r
  }, function (t, e) {
    function n(t) {
      return t && "@" === t[0] ? t.substr(1) : t
    }
    t.exports = n
  }, , function (t, e, n) {
    function r(t, e) {
      var n, r;
      if (t) return r = e ? [t, e] : [t], n = a(r), {
        item_ids: Object.keys(n),
        item_details: n
      }
    }

    function i(t) {
      t.selectors({
        tweetIdInfo: ".js-tweetIdInfo",
        quotedTweetInfo: '[data-tweet-item-type="23"]'
      }), t.define("scribeClickInteraction", function (t, e) {
        var n = o.closest(this.selectors.tweetIdInfo, e, this.el),
          i = n && n.querySelector(this.selectors.quotedTweetInfo);
        this.scribeInteraction(t, r(n, i))
      }), t.after("render", function () {
        this.on("click", "A", this.scribeClickInteraction), this.on("click", "BUTTON", this.scribeClickInteraction)
      })
    }
    var o = n(22),
      s = n(93),
      a = n(110);
    t.exports = s.couple(n(106), i)
  }, function (t, e, n) {
    function r(t) {
      return t ? (t = Array.isArray(t) ? t : [t], t.reduce(function (t, e) {
        var n = e.getAttribute("data-tweet-id"),
          r = e.getAttribute("data-rendered-tweet-id") || n,
          o = e.getAttribute("data-tweet-item-type") === i.QUOTE_TWEET.toString();
        return o ? t[n] = {
          item_type: i.QUOTE_TWEET
        } : n === r ? t[r] = {
          item_type: i.TWEET
        } : n && (t[r] = {
          item_type: i.RETWEET,
          target_type: i.TWEET,
          target_id: n
        }), t
      }, {})) : {}
    }
    var i = n(111);
    t.exports = r
  }, function (t, e) {
    t.exports = {
      TWEET: 0,
      RETWEET: 10,
      CUSTOM_TIMELINE: 17,
      LIVE_VIDEO_EVENT: 28,
      QUOTE_TWEET: 23
    }
  }, function (t, e, n) {
    var r = n(113),
      i = n(55);
    t.exports = r.isSupported() ? r : i
  }, function (t, e, n) {
    var r = n(56),
      i = n(114);
    t.exports = r.build([i])
  }, function (t, e, n) {
    function r(t) {
      t.defineStatic("isSupported", function () {
        return !!o.HTMLElement.prototype.createShadowRoot && f.inlineStyle() && !h.android()
      }), t.overrideProperty("id", {
        get: function () {
          return this.sandboxEl && this.sandboxEl.id
        }
      }), t.overrideProperty("initialized", {
        get: function () {
          return !!this._shadowHost
        }
      }), t.overrideProperty("width", {
        get: function () {
          return this._width
        }
      }), t.overrideProperty("height", {
        get: function () {
          return this._height
        }
      }), t.overrideProperty("sandboxEl", {
        get: function () {
          return this._shadowHost
        }
      }), t.define("_updateCachedDimensions", function () {
        var t = this;
        return u.read(function () {
          var e, n = p(t.sandboxEl);
          "visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = p(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height
        })
      }), t.define("_didResize", function () {
        var t = this,
          e = this._resizeHandlers.slice(0);
        return this._updateCachedDimensions().then(function () {
          e.forEach(function (e) {
            e(t)
          })
        })
      }), t.override("createElement", function (t) {
        return this.targetGlobal.document.createElement(t)
      }), t.override("createFragment", function () {
        return this.targetGlobal.document.createDocumentFragment()
      }), t.override("htmlToElement", function (t) {
        var e;
        return e = this.createElement("div"), e.innerHTML = t, e.firstElementChild
      }), t.override("hasSelectedText", function () {
        return !!c.getSelectedText(this.targetGlobal)
      }), t.override("addRootClass", function (t) {
        var e = this._shadowRootBody;
        return t = Array.isArray(t) ? t : [t], this.initialized ? u.write(function () {
          t.forEach(function (t) {
            s.add(e, t)
          })
        }) : g.reject(new Error("sandbox not initialized"))
      }), t.override("removeRootClass", function (t) {
        var e = this._shadowRootBody;
        return t = Array.isArray(t) ? t : [t], this.initialized ? u.write(function () {
          t.forEach(function (t) {
            s.remove(e, t)
          })
        }) : g.reject(new Error("sandbox not initialized"))
      }), t.override("hasRootClass", function (t) {
        return s.present(this._shadowRootBody, t)
      }), t.override("addStyleSheet", function (t, e) {
        return this.addCss('@import url("' + t + '");', e).then(function () {
          return l(t)
        })
      }), t.override("prependStyleSheet", function (t) {
        var e = this._shadowRoot;
        return this.addStyleSheet(t, function (t) {
          var n = e.firstElementChild;
          return n ? e.insertBefore(t, n) : e.appendChild(t)
        })
      }), t.override("appendStyleSheet", function (t) {
        var e = this._shadowRoot;
        return this.addStyleSheet(t, function (t) {
          return e.appendChild(t)
        })
      }), t.override("addCss", function (t, e) {
        var n;
        return this.initialized ? f.inlineStyle() ? (n = this.createElement("style"), n.type = "text/css", n.appendChild(this.targetGlobal.document.createTextNode(t)), u.write(m(e, null, n))) : g.resolve() : g.reject(new Error("sandbox not initialized"))
      }), t.override("prependCss", function (t) {
        var e = this._shadowRoot;
        return this.addCss(t, function (t) {
          var n = e.firstElementChild;
          return n ? e.insertBefore(t, n) : e.appendChild(t)
        })
      }), t.override("appendCss", function (t) {
        var e = this._shadowRoot;
        return this.addCss(t, function (t) {
          return e.appendChild(t)
        })
      }), t.override("makeVisible", function () {
        return this.styleSelf(_)
      }), t.override("injectWidgetEl", function (t) {
        function e() {
          var t = v(n._didResize, y, n);
          new i(n._shadowRootBody, t)
        }
        var n = this;
        return this.initialized ? this._shadowRootBody.firstElementChild ? g.reject(new Error("widget already injected")) : u.write(function () {
          n._shadowRootBody.appendChild(t)
        }).then(function () {
          return n._updateCachedDimensions()
        }).then(e) : g.reject(new Error("sandbox not initialized"))
      }), t.override("matchHeightToContent", function () {
        return g.resolve()
      }), t.override("matchWidthToContent", function () {
        return g.resolve()
      }), t.override("insert", function (t, e, n, r) {
        var i = this.targetGlobal.document,
          o = this._shadowHost = i.createElement(E),
          s = this._shadowRoot = o.createShadowRoot(),
          c = this._shadowRootBody = i.createElement("div");
        return w.forIn(e || {}, function (t, e) {
          o.setAttribute(t, e)
        }), o.id = t, s.appendChild(c), a.delegate(c, "click", "A", function (t, e) {
          e.hasAttribute("target") || e.setAttribute("target", "_blank")
        }), g.all([this.styleSelf(b), this.addRootClass(x), this.prependCss(A), u.write(r.bind(null, o))])
      }), t.override("onResize", function (t) {
        this._resizeHandlers.push(t)
      }), t.after("initialize", function () {
        this._shadowHost = this._shadowRoot = this._shadowRootBody = null, this._width = this._height = 0, this._resizeHandlers = []
      }), t.after("styleSelf", function () {
        return this._updateCachedDimensions()
      })
    }
    var i = n(115),
      o = n(7),
      s = n(21),
      a = n(20),
      u = n(37),
      c = n(66),
      d = n(56),
      l = n(67),
      f = n(68),
      h = n(8),
      p = n(70),
      m = n(15),
      v = n(69),
      g = n(2),
      w = n(12),
      y = 50,
      b = {
        position: "absolute",
        visibility: "hidden",
        display: "block",
        transform: "rotate(0deg)"
      },
      _ = {
        position: "static",
        visibility: "visible"
      },
      E = "twitterwidget",
      x = "SandboxRoot",
      A = ".SandboxRoot { display: none; }";
    t.exports = d.couple(n(71), r)
  }, function (t, e) {
    ! function () {
      var e = function (t, n) {
        function r() {
          this.q = [], this.add = function (t) {
            this.q.push(t)
          };
          var t, e;
          this.call = function () {
            for (t = 0, e = this.q.length; t < e; t++) this.q[t].call()
          }
        }

        function i(t, e) {
          return t.currentStyle ? t.currentStyle[e] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(e) : t.style[e]
        }

        function o(t, e) {
          if (t.resizedAttached) {
            if (t.resizedAttached) return void t.resizedAttached.add(e)
          } else t.resizedAttached = new r, t.resizedAttached.add(e);
          t.resizeSensor = document.createElement("div"), t.resizeSensor.className = "resize-sensor";
          var n = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
            o = "position: absolute; left: 0; top: 0; transition: 0s;";
          t.resizeSensor.style.cssText = n, t.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + n + '"><div style="' + o + '"></div></div><div class="resize-sensor-shrink" style="' + n + '"><div style="' + o + ' width: 200%; height: 200%"></div></div>', t.appendChild(t.resizeSensor), {
            fixed: 1,
            absolute: 1
          } [i(t, "position")] || (t.style.position = "relative");
          var s, a, u = t.resizeSensor.childNodes[0],
            c = u.childNodes[0],
            d = t.resizeSensor.childNodes[1],
            l = (d.childNodes[0], function () {
              c.style.width = u.offsetWidth + 10 + "px", c.style.height = u.offsetHeight + 10 + "px", u.scrollLeft = u.scrollWidth, u.scrollTop = u.scrollHeight, d.scrollLeft = d.scrollWidth, d.scrollTop = d.scrollHeight, s = t.offsetWidth, a = t.offsetHeight
            });
          l();
          var f = function () {
              t.resizedAttached && t.resizedAttached.call()
            },
            h = function (t, e, n) {
              t.attachEvent ? t.attachEvent("on" + e, n) : t.addEventListener(e, n)
            },
            p = function () {
              t.offsetWidth == s && t.offsetHeight == a || f(), l()
            };
          h(u, "scroll", p), h(d, "scroll", p)
        }
        var s = Object.prototype.toString.call(t),
          a = "[object Array]" === s || "[object NodeList]" === s || "[object HTMLCollection]" === s || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
        if (a)
          for (var u = 0, c = t.length; u < c; u++) o(t[u], n);
        else o(t, n);
        this.detach = function () {
          if (a)
            for (var n = 0, r = t.length; n < r; n++) e.detach(t[n]);
          else e.detach(t)
        }
      };
      e.detach = function (t) {
        t.resizeSensor && (t.removeChild(t.resizeSensor), delete t.resizeSensor, delete t.resizedAttached)
      }, "undefined" != typeof t && "undefined" != typeof t.exports ? t.exports = e : window.ResizeSensor = e
    }()
  }, function (t, e, n) {
    function r(t) {
      var e = a(t),
        n = {
          screenName: o.screenName(t.href),
          showScreenName: "false" !== t.getAttribute("data-show-screen-name"),
          showCount: "false" !== t.getAttribute("data-show-count"),
          size: t.getAttribute("data-size"),
          count: t.getAttribute("data-count"),
          preview: t.getAttribute("data-preview")
        };
      return s.forIn(n, function (t, n) {
        var r = e[t];
        e[t] = d.hasValue(r) ? r : n
      }), e.screenName = e.screenName || e.screen_name, e
    }

    function i(t) {
      var e = u(t, l);
      return e.map(function (t) {
        return c(r(t), t.parentNode, t)
      })
    }
    var o = n(25),
      s = n(12),
      a = n(85),
      u = n(87)(),
      c = n(117),
      d = n(27),
      l = "a.twitter-follow-button";
    t.exports = i
  }, function (t, e, n) {
    function r(t, e, n) {
      return new i(o, s, "twitter-follow-button", t, e, n)
    }
    var i = n(90),
      o = n(118),
      s = n(123);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var r = new i;
      return n.e(2, function (i, o) {
        var s;
        if (i) return r.reject(i);
        try {
          s = n(119), r.resolve(new s(t, e))
        } catch (t) {
          r.reject(t)
        }
      }), r.promise
    }
    var i = n(1);
    t.exports = r
  }, , , , function (t, e, n) {
    function r(t) {
      t.define("widgetDataAttributes", function () {
        return {}
      }), t.define("setDataAttributes", function () {
        var t = this.sandbox.sandboxEl;
        o.forIn(this.widgetDataAttributes(), function (e, n) {
          i.hasValue(n) && t.setAttribute("data-" + e, n)
        })
      }), t.after("render", function () {
        this.setDataAttributes()
      })
    }
    var i = n(27),
      o = n(12);
    t.exports = r
  }, function (t, e, n) {
    var r = n(56),
      i = n(124);
    t.exports = r.build([i])
  }, function (t, e, n) {
    function r(t) {
      t.overrideProperty("id", {
        get: function () {
          return this.sandboxEl && this.sandboxEl.id
        }
      }), t.overrideProperty("initialized", {
        get: function () {
          return !!this.iframeEl
        }
      }), t.overrideProperty("width", {
        get: function () {
          return this._width
        }
      }), t.overrideProperty("height", {
        get: function () {
          return this._height
        }
      }), t.overrideProperty("sandboxEl", {
        get: function () {
          return this.iframeEl
        }
      }), t.defineProperty("iframeEl", {
        get: function () {
          return this._iframe
        }
      }), t.define("updateCachedDimensions", function () {
        var t = this;
        return this.initialized ? i.read(function () {
          t._width = t.sandboxEl.offsetWidth, t._height = t.sandboxEl.offsetHeight
        }) : c.resolve()
      }), t.define("setTitle", function (t) {
        this.iframeEl.title = t
      }), t.define("makeVisible", function () {
        return this.styleSelf(h)
      }), t.define("didResize", function () {
        var t = this,
          e = t._resizeHandlers.length > 0;
        return this.updateCachedDimensions().then(function () {
          e && t._resizeHandlers.forEach(function (e) {
            e(t)
          })
        })
      }), t.define("loadDocument", function (t) {
        var e = new u;
        return this.initialized ? this.iframeEl.src ? c.reject(new Error("widget already loaded")) : (this.iframeEl.addEventListener("load", e.resolve, !1), this.iframeEl.addEventListener("error", e.reject, !1), this.iframeEl.src = t, e.promise) : c.reject(new Error("sandbox not initialized"))
      }), t.after("initialize", function () {
        this._iframe = null, this._width = this._height = 0, this._resizeHandlers = []
      }), t.override("insert", function (t, e, n, r) {
        var o = this;
        return e = l.aug({
          id: t
        }, e), n = l.aug({}, f, n), this._iframe = a(e, n), p[t] = this, this.onResize(s(function () {
          o.makeVisible()
        })), i.write(d(r, null, this._iframe))
      }), t.override("onResize", function (t) {
        this._resizeHandlers.push(t)
      }), t.after("styleSelf", function () {
        return this.updateCachedDimensions()
      })
    }
    var i = n(37),
      o = n(125),
      s = n(80),
      a = n(46),
      u = n(1),
      c = n(2),
      d = n(15),
      l = n(12),
      f = {
        position: "absolute",
        visibility: "hidden",
        width: "0px",
        height: "0px"
      },
      h = {
        position: "static",
        visibility: "visible"
      },
      p = {};
    o(function (t, e, n) {
      var r = p[t];
      if (r) return e = e || 1, n = n || 1, r.styleSelf({
        width: e + "px",
        height: n + "px"
      }).then(function () {
        r.didResize()
      })
    }), t.exports = r
  }, function (t, e, n) {
    function r(t) {
      (new o).attachReceiver(new s.Receiver(i, "twttr.button")).bind("twttr.private.trigger", function (t, e) {
        var n = c(this);
        a.trigger(t, {
          target: n,
          region: e,
          type: t,
          data: {}
        })
      }).bind("twttr.private.resizeButton", function (e) {
        var n = c(this),
          r = n && n.id,
          i = u.asInt(e.width),
          o = u.asInt(e.height);
        r && void 0 !== i && void 0 !== o && t(r, i, o)
      })
    }
    var i = n(7),
      o = n(126),
      s = n(128),
      a = n(31),
      u = n(27),
      c = n(129);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      this.registry = t || {}
    }

    function i(t) {
      return h.isType("string", t) ? l.parse(t) : t
    }

    function o(t) {
      var e, n, r;
      return !!h.isObject(t) && (e = t.jsonrpc === v, n = h.isType("string", t.method), r = !("id" in t) || s(t.id), e && n && r)
    }

    function s(t) {
      var e, n, r;
      return e = h.isType("string", t), n = h.isType("number", t), r = null === t, e || n || r
    }

    function a(t) {
      return h.isObject(t) && !h.isType("function", t)
    }

    function u(t, e) {
      return {
        jsonrpc: v,
        id: t,
        result: e
      }
    }

    function c(t, e) {
      return {
        jsonrpc: v,
        id: s(t) ? t : null,
        error: e
      }
    }

    function d(t) {
      return p.all(t).then(function (t) {
        return t = t.filter(function (t) {
          return void 0 !== t
        }), t.length ? t : void 0
      })
    }
    var l = n(53),
      f = n(127),
      h = n(12),
      p = n(2),
      m = n(34),
      v = "2.0";
    r.prototype._invoke = function (t, e) {
      var n, r, i;
      n = this.registry[t.method], r = t.params || [], r = h.isType("array", r) ? r : [r];
      try {
        i = n.apply(e.source || null, r)
      } catch (t) {
        i = p.reject(t.message)
      }
      return m.isPromise(i) ? i : p.resolve(i)
    }, r.prototype._processRequest = function (t, e) {
      function n(e) {
        return u(t.id, e)
      }

      function r() {
        return c(t.id, f.INTERNAL_ERROR)
      }
      var i;
      return o(t) ? (i = "params" in t && !a(t.params) ? p.resolve(c(t.id, f.INVALID_PARAMS)) : this.registry[t.method] ? this._invoke(t, {
        source: e
      }).then(n, r) : p.resolve(c(t.id, f.METHOD_NOT_FOUND)), null != t.id ? i : p.resolve()) : p.resolve(c(t.id, f.INVALID_REQUEST))
    }, r.prototype.attachReceiver = function (t) {
      return t.attachTo(this), this
    }, r.prototype.bind = function (t, e) {
      return this.registry[t] = e, this
    }, r.prototype.receive = function (t, e) {
      var n, r, o, s = this;
      try {
        t = i(t)
      } catch (t) {
        return p.resolve(c(null, f.PARSE_ERROR))
      }
      return e = e || null, n = h.isType("array", t), r = n ? t : [t], o = r.map(function (t) {
        return s._processRequest(t, e)
      }), n ? d(o) : o[0]
    }, t.exports = r
  }, function (t, e) {
    t.exports = {
      PARSE_ERROR: {
        code: -32700,
        message: "Parse error"
      },
      INVALID_REQUEST: {
        code: -32600,
        message: "Invalid Request"
      },
      INVALID_PARAMS: {
        code: -32602,
        message: "Invalid params"
      },
      METHOD_NOT_FOUND: {
        code: -32601,
        message: "Method not found"
      },
      INTERNAL_ERROR: {
        code: -32603,
        message: "Internal error"
      }
    }
  }, function (t, e, n) {
    function r(t, e, n) {
      var r;
      t && t.postMessage && (g ? r = (n || "") + l.stringify(e) : n ? (r = {}, r[n] = e) : r = e, t.postMessage(r, "*"))
    }

    function i(t) {
      return p.isType("string", t) ? t : "JSONRPC"
    }

    function o(t, e) {
      return e ? p.isType("string", t) && 0 === t.indexOf(e) ? t.substring(e.length) : t[e] ? t[e] : void 0 : t
    }

    function s(t, e) {
      var n = t.document;
      this.filter = i(e), this.server = null, this.isTwitterFrame = m.isTwitterURL(n.location.href), t.addEventListener("message", v(this._onMessage, this), !1)
    }

    function a(t, e) {
      this.pending = {}, this.target = t, this.isTwitterHost = m.isTwitterURL(c.href), this.filter = i(e), d.addEventListener("message", v(this._onMessage, this), !1)
    }

    function u(t) {
      return arguments.length > 0 && (g = !!t), g
    }
    var c = n(11),
      d = n(7),
      l = n(53),
      f = n(1),
      h = n(8),
      p = n(12),
      m = n(25),
      v = n(15),
      g = h.ie9();
    p.aug(s.prototype, {
      _onMessage: function (t) {
        var e, n = this;
        this.server && (this.isTwitterFrame && !m.isTwitterURL(t.origin) || (e = o(t.data, this.filter), e && this.server.receive(e, t.source).then(function (e) {
          e && r(t.source, e, n.filter)
        })))
      },
      attachTo: function (t) {
        this.server = t
      },
      detach: function () {
        this.server = null
      }
    }), p.aug(a.prototype, {
      _processResponse: function (t) {
        var e = this.pending[t.id];
        e && (e.resolve(t), delete this.pending[t.id])
      },
      _onMessage: function (t) {
        var e;
        if ((!this.isTwitterHost || m.isTwitterURL(t.origin)) && (e = o(t.data, this.filter))) {
          if (p.isType("string", e)) try {
            e = l.parse(e)
          } catch (t) {
            return
          }
          e = p.isType("array", e) ? e : [e], e.forEach(v(this._processResponse, this))
        }
      },
      send: function (t) {
        var e = new f;
        return t.id ? this.pending[t.id] = e : e.resolve(), r(this.target, t, this.filter), e.promise
      }
    }), t.exports = {
      Receiver: s,
      Dispatcher: a,
      _stringifyPayload: u
    }
  }, function (t, e, n) {
    function r(t) {
      for (var e, n = i.getElementsByTagName("iframe"), r = 0; n[r]; r++)
        if (e = n[r], e.contentWindow === t) return e
    }
    var i = n(9);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = u(t),
        n = {
          collectionId: a.collectionId(t.href),
          chrome: t.getAttribute("data-chrome"),
          limit: t.getAttribute("data-limit")
        };
      return s.forIn(n, function (t, n) {
        var r = e[t];
        e[t] = o.hasValue(r) ? r : n
      }), e
    }

    function i(t) {
      var e = c(t, l);
      return e.map(function (t) {
        return d(r(t), t.parentNode, t)
      })
    }
    var o = n(27),
      s = n(12),
      a = n(25),
      u = n(85),
      c = n(87)(),
      d = n(131),
      l = "a.twitter-grid";
    t.exports = i
  }, function (t, e, n) {
    function r(t, e, n) {
      return new i(o, s, "twitter-grid", t, e, n)
    }
    var i = n(90),
      o = n(132),
      s = n(55);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var r = new i;
      return n.e(3, function (i, o) {
        var s;
        if (i) return r.reject(i);
        try {
          s = n(133), r.resolve(new s(t, e))
        } catch (t) {
          r.reject(t)
        }
      }), r.promise
    }
    var i = n(1);
    t.exports = r
  }, , , , function (t, e, n) {
    function r(t) {
      if (t) return t.replace(/[^\w$]/g, "_")
    }

    function i() {
      return l + f++
    }

    function o(t, e, n, o) {
      var l, f, h;
      return o = r(o || i()), l = a.fullPath(["callbacks", o]), f = s.createElement("script"), h = new u, e = c.aug({}, e, {
        callback: l,
        suppress_response_codes: !0
      }), a.set(["callbacks", o], function (t) {
        var e, r;
        e = n(t || !1), t = e.resp, r = e.success, r ? h.resolve(t) : h.reject(t), f.onload = f.onreadystatechange = null, f.parentNode && f.parentNode.removeChild(f), a.unset(["callbacks", o])
      }), f.onerror = function () {
        h.reject(new Error("failed to fetch " + f.src))
      }, f.src = d.url(t, e), f.async = "async", s.body.appendChild(f), h.promise
    }
    var s = n(9),
      a = n(18),
      u = n(1),
      c = n(12),
      d = n(26),
      l = "cb",
      f = 0;
    t.exports = {
      fetch: o
    }
  }, function (t, e, n) {
    function r(t) {
      var e, n;
      return e = t.headers && t.headers.status, n = t && !t.error && 200 === e, !n && t.headers && t.headers.message && i.publicError(t.headers.message), {
        success: n,
        resp: t
      }
    }
    var i = n(10);
    t.exports = r
  }, function (t, e) {
    function n() {
      var t = (new Date).toString().match(/(GMT[+-]?\d+)/);
      return t && t[0] || "GMT"
    }
    t.exports = {
      getTimezoneOffset: n
    }
  }, function (t, e) {
    function n() {
      var t = 9e5;
      return Math.floor(+new Date / t)
    }
    t.exports = n
  }, function (t, e, n) {
    var r = n(9),
      i = n(27),
      o = r.createElement("div");
    t.exports = function (t) {
      return i.isNumber(t) && (t += "px"), o.style.width = "", o.style.width = t, o.style.width || null
    }
  }, function (t, e, n) {
    function r(t) {
      t.after("prepForInsertion", function (t) {
        o.sizeIframes(t, this.sandbox.width, s, i.sync)
      }), t.after("resize", function () {
        o.sizeIframes(this.el, this.sandbox.width, s, i.write)
      })
    }
    var i = n(37),
      o = n(142),
      s = 375;
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      t.getAttribute("data-image") ? s(t, e) : u(t, e)
    }

    function i(t) {
      var e = t.split(" ");
      this.url = decodeURIComponent(e[0].trim()), this.width = +e[1].replace(/w$/, "").trim()
    }

    function o(t, e, n) {
      var r, o, s, u, c;
      if (o = a(t), s = e.split(",").map(function (t) {
          return new i(t.trim())
        }), n)
        for (c = 0; c < s.length; c++) s[c].url === n && (r = s[c]);
      return u = s.reduce(function (t, e) {
        return e.width < t.width && e.width >= o ? e : t
      }, s[0]), r && r.width > u.width ? r : u
    }

    function s(t, e) {
      var n, r, i, o, s;
      n = y.decodeURL(t.src).name, r = n && b(R, function (t) {
        if (S[t] === n) return t
      }), o = a(e) || 680, r >= o || (i = t.getAttribute("data-image"), s = b(R, function (t) {
        if (t >= o) return t
      }) || 4096, t.src = y.url(i, {
        format: "jpg",
        name: S[s]
      }))
    }

    function a(t) {
      return v.devicePixelRatio ? t * v.devicePixelRatio : t
    }

    function u(t, e) {
      var n, r = t.getAttribute("data-srcset"),
        i = t.src;
      r && (n = o(e, r, i), t.src = n.url)
    }

    function c(t, e) {
      e = void 0 !== e ? !!e : _.retina(), g.toRealArray(t.getElementsByTagName("IMG")).forEach(function (t) {
        var n = t.getAttribute("data-src-1x") || t.getAttribute("src"),
          r = t.getAttribute("data-src-2x");
        e && r ? t.src = r : n && (t.src = n)
      })
    }

    function d(t, e, n) {
      t && (g.toRealArray(t.querySelectorAll(".NaturalImage-image")).forEach(function (t) {
        n(function () {
          r(t, e)
        })
      }), g.toRealArray(t.querySelectorAll(".CroppedImage-image")).forEach(function (t) {
        n(function () {
          r(t, e / 2)
        })
      }), g.toRealArray(t.querySelectorAll("img.autosized-media")).forEach(function (t) {
        n(function () {
          r(t, e), t.removeAttribute("width"), t.removeAttribute("height")
        })
      }))
    }

    function l(t, e, n, r) {
      t && g.toRealArray(t.querySelectorAll("iframe.autosized-media, .wvp-player-container")).forEach(function (t) {
        var i = h(t.getAttribute("data-width"), t.getAttribute("data-height"), E.effectiveWidth(t.parentElement) || e, n);
        r(function () {
          t.setAttribute("width", i.width), t.setAttribute("height", i.height), x.present(t, "wvp-player-container") ? (t.style.width = i.width, t.style.height = i.height) : (t.width = i.width, t.height = i.height)
        })
      })
    }

    function f(t, e, n, r) {
      d(t, e, r), l(t, e, n, r)
    }

    function h(t, e, n, r, i, o) {
      return n = n || t, r = r || e, i = i || 0, o = o || 0, t > n && (e *= n / t, t = n), e > r && (t *= r / e, e = r), t < i && (e *= i / t, t = i), e < o && (t *= o / e, e = o), {
        width: Math.floor(t),
        height: Math.floor(e)
      }
    }

    function p(t, e, n, r) {
      g.toRealArray(t.querySelectorAll(e)).forEach(function (t) {
        var e = t.getAttribute("style") || t.getAttribute("data-style"),
          i = r.test(e) && RegExp.$1;
        i && (t.setAttribute("data-csp-fix", !0), t.style[n] = i)
      })
    }

    function m(t) {
      w.inlineStyle() || (p(t, ".MediaCard-widthConstraint", "maxWidth", A), p(t, ".MediaCard-mediaContainer", "paddingBottom", I), p(t, ".CroppedImage-image", "top", T), p(t, ".CroppedImage-image", "left", C))
    }
    var v = n(7),
      g = n(12),
      w = n(68),
      y = n(26),
      b = n(143),
      _ = n(8),
      E = n(144),
      x = n(21),
      A = /max-width:\s*([\d.]+px)/,
      T = /top:\s*(-?[\d.]+%)/,
      C = /left:\s*(-?[\d.]+%)/,
      I = /padding-bottom:\s*([\d.]+%)/,
      S = {
        64: "tiny",
        120: "120x120",
        240: "240x240",
        360: "360x360",
        680: "small",
        900: "900x900",
        1200: "medium",
        2048: "large",
        4096: "4096x4096"
      },
      R = Object.keys(S).sort(function (t, e) {
        return t - e
      });
    t.exports = {
      scaleDimensions: h,
      retinize: c,
      setSrcForImgs: d,
      sizeIframes: l,
      constrainMedia: f,
      fixMediaCardLayout: m,
      __setSrcFromSet: u,
      __setSrcFromImage: s,
      __setImageSrc: r
    }
  }, function (t, e) {
    t.exports = function (t, e, n) {
      for (var r, i = 0; i < t.length; i++)
        if (r = e.call(n, t[i], i, t)) return r
    }
  }, function (t, e) {
    function n(t) {
      return t && 1 === t.nodeType ? t.offsetWidth || n(t.parentNode) : 0
    }
    t.exports = {
      effectiveWidth: n
    }
  }, function (t, e, n) {
    function r(t) {
      return t.replace(/-(.)/g, function (t, e) {
        return e.toUpperCase()
      })
    }

    function i(t) {
      return (t || "").split(";").reduce(function (t, e) {
        var n, i;
        return c.test(e.trim()) && (n = RegExp.$1, i = RegExp.$2, t[r(n)] = i), t
      }, {})
    }

    function o(t) {
      var e = i(t.getAttribute("data-style"));
      0 !== Object.keys(e).length && (t.setAttribute("data-csp-fix", "true"), u.forIn(e, function (e, n) {
        t.style[e] = n
      }))
    }

    function s(t) {
      t.selectors({
        cspForcedStyle: ".js-cspForcedStyle"
      }), t.after("prepForInsertion", function (t) {
        a.inlineStyle() || this.select(t, "cspForcedStyle").forEach(o)
      })
    }
    var a = n(68),
      u = (n(10), n(12)),
      c = /^([a-zA-Z-]+):\s*(.+)$/;
    t.exports = s
  }, function (t, e, n) {
    function r(t) {
      t.after("prepForInsertion", function (t) {
        i.retinize(t)
      })
    }
    var i = n(142);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      t.after("prepForInsertion", function (t) {
        o.setSrcForImgs(t, this.sandbox.width, i.sync)
      }), t.after("resize", function () {
        o.setSrcForImgs(this.el, this.sandbox.width, i.write)
      })
    }
    var i = n(37),
      o = n(142);
    t.exports = r
  }, function (t, e) {
    function n(t) {
      t.after("render", function () {
        var t = this.el.getAttribute(r);
        t && this.sandbox.setTitle && this.sandbox.setTitle(t)
      })
    }
    var r = "data-iframe-title";
    t.exports = n
  }, function (t, e, n) {
    function r(t) {
      return t.every(a.isInt)
    }

    function i(t) {
      var e = t.map(function (t) {
        return {
          size: +t,
          className: u + t
        }
      }).sort(function (t, e) {
        return t.size - e.size
      });
      return e.unshift({
        size: 0,
        className: c
      }), e
    }

    function o(t) {
      t.params({
        breakpoints: {
          required: !0,
          validate: r,
          transform: i
        }
      }), t.define("getClassForWidth", function (t) {
        var e, n, r;
        for (n = this.params.breakpoints.length - 1; n >= 0; n--)
          if (r = this.params.breakpoints[n], t > r.size) {
            e = r.className;
            break
          }
        return e
      }), t.after("initialize", function () {
        this.allBreakpoints = this.params.breakpoints.map(function (t) {
          return t.className
        })
      }), t.define("recalculateBreakpoints", function () {
        var t = this.getClassForWidth(this.sandbox.width);
        return t && this.sandbox.hasRootClass(t) ? s.resolve() : s.all([this.sandbox.removeRootClass(this.allBreakpoints), this.sandbox.addRootClass(t)])
      }), t.after("render", function () {
        return this.recalculateBreakpoints()
      }), t.after("resize", function () {
        return this.recalculateBreakpoints()
      })
    }
    var s = n(2),
      a = n(27),
      u = "env-bp-",
      c = u + "min";
    t.exports = o
  }, , function (t, e, n) {
    function r(t, e, n) {
      var r, i = new u,
        o = a(t, n);
      if (o) return (r = d.createPlayerForTweet(o.element, e, o.options)) ? (i.resolve(r), i.promise) : i.reject(new Error("unable to create tweet video player"))
    }

    function i(t, e, n) {
      var r, i = new u,
        o = a(t, n);
      return o ? (r = d.createPlayerForLiveVideo(o.element, e, o.options), r.on("ready", function () {
        r.playPreview(), i.resolve(r)
      }), i.promise) : i.reject(new Error("unable to initialize event video player"))
    }

    function o(t) {
      var e = t.querySelector(".wvp-player-container"),
        n = e && d.findPlayerForElement(e);
      if (n) return n.teardown()
    }

    function s(t) {
      return d.findPlayerForElement(t)
    }

    function a(t, e) {
      var n, r;
      if (e = e || {}, r = {
          scribeContext: e.scribeContext || {
            client: "tfw"
          },
          languageCode: e.languageCode,
          hideControls: e.hideControls || !1,
          addTwitterBranding: e.addBranding || !1,
          widgetOrigin: e.widgetOrigin,
          borderRadius: e.borderRadius,
          autoPlay: e.autoPlay
        }, n = c(t, ".wvp-player-container"), n.length > 0) return l && d.setBaseUrl(l), {
        element: n[0],
        options: r
      }
    }
    var u = n(1),
      c = n(88),
      d = n(152),
      l = null;
    t.exports = {
      insertForTweet: r,
      insertForEvent: i,
      remove: o,
      find: s
    }
  }, function (t, e, n) {
    var r;
    ! function (i, o) {
      r = function () {
        return i.TwitterVideoPlayer = o()
      }.call(e, n, e, t), !(void 0 !== r && (t.exports = r))
    }(this, function () {
      function t(t) {
        if (t && t.data && t.data.params && t.data.params[0]) {
          var e = t.data.params[0],
            n = t.data.id;
          if (e && e.context && "TwitterVideoPlayer" === e.context) {
            var r = e.playerId;
            delete e.playerId, delete e.context;
            var i = a[r];
            i && i.processMessage(t.data.method, e, n)
          }
        }
      }

      function e(t, e, n) {
        var r = Object.keys(n).filter(function (t) {
          return null != n[t]
        }).map(function (t) {
          var e = n[t];
          return encodeURIComponent(t) + "=" + encodeURIComponent(e)
        }).join("&");
        return r && (r = "?" + r), t + e + r
      }

      function n(n, i, o, u, c) {
        var d = n.ownerDocument,
          l = d.defaultView;
        l.addEventListener("message", t), this.playerId = s++;
        var f = {
          embed_source: "clientlib",
          player_id: this.playerId,
          rpc_init: 1,
          autoplay: u.autoPlay
        };
        if (this.scribeParams = {}, this.scribeParams.suppressScribing = u && u.suppressScribing, !this.scribeParams.suppressScribing) {
          if (!u.scribeContext) throw "video_player: Missing scribe context";
          if (!u.scribeContext.client) throw "video_player: Scribe context missing client property";
          this.scribeParams.client = u.scribeContext.client, this.scribeParams.page = u.scribeContext.page, this.scribeParams.section = u.scribeContext.section, this.scribeParams.component = u.scribeContext.component
        }
        this.scribeParams.debugScribe = u && u.scribeContext && u.scribeContext.debugScribing, this.scribeParams.scribeUrl = u && u.scribeContext && u.scribeContext.scribeUrl, this.promotedLogParams = u.promotedContext, this.adRequestCallback = u.adRequestCallback, u.languageCode && (f.language_code = u.languageCode), "tfw" === this.scribeParams.client && (f.use_syndication_guest_id = !0), u.autoPlay && (f.autoplay = 1);
        var h = e(r, i, f);
        return this.videoIframe = document.createElement("iframe"), this.videoIframe.setAttribute("src", h), this.videoIframe.setAttribute("allowfullscreen", ""), this.videoIframe.setAttribute("allow", "autoplay; fullscreen"), this.videoIframe.setAttribute("id", o), this.videoIframe.setAttribute("style", "width: 100%; height: 100%; position: absolute; top: 0; left: 0;"), this.domElement = n, this.domElement.appendChild(this.videoIframe), a[this.playerId] = this, this.eventCallbacks = {}, this.emitEvent = function (t, e) {
          var n = this.eventCallbacks[t];
          "undefined" != typeof n && n.forEach(function (t) {
            t.apply(this.playerInterface, [e])
          }.bind(this))
        }, this.jsonRpc = function (t) {
          var e = this.videoIframe.contentWindow;
          t.jsonrpc = "2.0", e && e.postMessage && e.postMessage(JSON.stringify(t), "*")
        }, this.jsonRpcCall = function (t, e) {
          this.jsonRpc({
            method: t,
            params: e
          })
        }, this.jsonRpcResult = function (t, e) {
          this.jsonRpc({
            result: t,
            id: e
          })
        }, this.processMessage = function (t, e, n) {
          switch (t) {
            case "requestPlayerConfig":
              this.jsonRpcResult({
                scribeParams: this.scribeParams,
                promotedLogParams: this.promotedLogParams,
                squareCorners: u.squareCorners,
                borderRadius: u.borderRadius,
                hideControls: u.hideControls,
                embedded: u.addTwitterBranding,
                widgetOrigin: u.widgetOrigin,
                ignoreFineGrainGeoblocking: u.ignoreFineGrainGeoblocking
              }, n);
              break;
            case "videoPlayerAdStart":
              this.emitEvent("adStart", e);
              break;
            case "videoPlayerAdEnd":
              this.emitEvent("adEnd", e);
              break;
            case "videoPlayerPlay":
              this.emitEvent("play", e);
              break;
            case "videoPlayerPause":
              this.emitEvent("pause", e);
              break;
            case "videoPlayerMute":
              this.emitEvent("mute", e);
              break;
            case "videoPlayerUnmute":
              this.emitEvent("unmute", e);
              break;
            case "videoPlayerPlaybackComplete":
              this.emitEvent("playbackComplete", e);
              break;
            case "videoPlayerReady":
              this.emitEvent("ready", e);
              break;
            case "videoView":
              this.emitEvent("view", e);
              break;
            case "debugLoggingEvent":
              this.emitEvent("logged", e);
              break;
            case "requestDynamicAd":
              "function" == typeof this.adRequestCallback ? this.jsonRpcResult(this.adRequestCallback(), n) : this.jsonRpcResult({}, n);
              break;
            case "videoPlayerError":
              e && "NO_COOKIES_ERROR" === e.error_category ? this.emitEvent("noCookiesError", e) : e && "GEOBLOCK_ERROR" === e.error_category && this.emitEvent("geoblockError", e)
          }
        }, this.playerInterface = {
          on: function (t, e) {
            return "undefined" == typeof this.eventCallbacks[t] && (this.eventCallbacks[t] = []), this.eventCallbacks[t].push(e), this.playerInterface
          }.bind(this),
          off: function (t, e) {
            if ("undefined" == typeof e) delete this.eventCallbacks[t];
            else {
              var n = this.eventCallbacks[t];
              if ("undefined" != typeof n) {
                var r = n.indexOf(e);
                r > -1 && n.splice(r, 1)
              }
            }
            return this.playerInterface
          }.bind(this),
          play: function () {
            return this.jsonRpcCall("play"), this.playerInterface
          }.bind(this),
          pause: function () {
            return this.jsonRpcCall("pause"), this.playerInterface
          }.bind(this),
          mute: function () {
            return this.jsonRpcCall("mute"), this.playerInterface
          }.bind(this),
          unmute: function () {
            return this.jsonRpcCall("unmute"), this.playerInterface
          }.bind(this),
          playPreview: function () {
            return this.jsonRpcCall("autoPlayPreview"), this.playerInterface
          }.bind(this),
          pausePreview: function () {
            return this.jsonRpcCall("autoPlayPreviewStop"), this.playerInterface
          }.bind(this),
          updatePosition: function (t) {
            return this.jsonRpcCall("updatePosition", [t]), this.playerInterface
          }.bind(this),
          updateLayoutBreakpoint: function (t) {
            return this.jsonRpcCall("updateLayoutBreakpoint", [t]), this.playerInterface
          }.bind(this),
          enterFullScreen: function () {
            return this.jsonRpcCall("enterFullScreen"), this.playerInterface
          }.bind(this),
          exitFullScreen: function () {
            return this.jsonRpcCall("exitFullScreen"), this.playerInterface
          }.bind(this),
          teardown: function () {
            this.eventCallbacks = {}, n.removeChild(this.videoIframe), this.videoIframe = void 0, delete a[this.playerId]
          }.bind(this)
        }, this.playerInterface
      }
      var r = "https://twitter.com",
        i = /^https?:\/\/([a-zA-Z0-9]+\.)*twitter.com(:\d+)?$/,
        o = {
          suppressScribing: !1,
          squareCorners: !1,
          hideControls: !1,
          addTwitterBranding: !1
        },
        s = 0,
        a = {};
      return {
        setBaseUrl: function (t) {
          i.test(t) ? r = t : window.console.error("newBaseUrl " + t + " not allowed")
        },
        createPlayerForTweet: function (t, e, r) {
          var i = "/i/videos/tweet/" + e,
            s = "player_tweet_" + e;
          return new n(t, i, s, r || o)
        },
        createPlayerForDm: function (t, e, r) {
          var i = "/i/videos/dm/" + e,
            s = "player_dm_" + e;
          return new n(t, i, s, r || o)
        },
        createPlayerForLiveVideo: function (t, e, r) {
          var i = "/i/videos/live_video/" + e,
            s = "player_live_video_" + e;
          return new n(t, i, s, r || o)
        },
        findPlayerForElement: function (t) {
          for (var e in a)
            if (a.hasOwnProperty(e)) {
              var n = a[e];
              if (n && n.domElement === t) return n.playerInterface
            }
          return null
        }
      }
    })
  }, function (t, e, n) {
    function r(t) {
      t.selectors({
        clickToOpen: ".js-clickToOpenTarget"
      }), t.define("shouldOpenTarget", function (t) {
        var e = i.closest("A", t.target, this.el),
          n = i.closest("BUTTON", t.target, this.el),
          r = this.sandbox.hasSelectedText();
        return !e && !n && !r
      }), t.define("openTarget", function (t, e) {
        var n = e && e.getAttribute(l),
          r = {
            twcamp: this.params.productName,
            twterm: this.params.id,
            twcon: e.getAttribute("data-twcon")
          };
        return n ? a.getActiveExperimentDataString().then(function (e) {
          r.twgr = e, o(n, r), this.scribeOpenClick(t)
        }.bind(this)).catch(function () {
          o(n, r), this.scribeOpenClick(t)
        }.bind(this)) : d.resolve()
      }), t.define("attemptToOpenTarget", function (t, e) {
        return this.shouldOpenTarget(t) ? this.openTarget(t, e) : d.resolve()
      }), t.define("scribeOpenClick", function (t) {
        var e = u.extractTermsFromDOM(t.target),
          n = {
            associations: u.formatTweetAssociation(e)
          },
          r = {
            element: "chrome",
            action: "click"
          },
          i = c.aug({}, r, e);
        this.scribe(i, n)
      }), t.after("render", function () {
        this.on("click", "clickToOpen", this.attemptToOpenTarget)
      })
    }
    var i = n(22),
      o = n(154),
      s = n(93),
      a = n(75),
      u = n(52),
      c = n(12),
      d = n(2),
      l = "data-click-to-open-target";
    t.exports = s.couple(n(106), r)
  }, function (t, e, n) {
    function r(t, e) {
      s.isTwitterURL(t) && (t = o(t, e)), i.open(t)
    }
    var i = n(7),
      o = n(105),
      s = n(25);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      t.params({
        productName: {
          required: !0
        },
        dataSource: {
          required: !1
        },
        related: {
          required: !1
        },
        partner: {
          fallback: d(o.val, o, "partner")
        }
      }), t.selectors({
        timeline: ".timeline",
        tweetIdInfo: ".js-tweetIdInfo"
      }), t.define("injectWebIntentParams", function (t) {
        var e = i.closest(this.selectors.timeline, t, this.el),
          n = i.closest(this.selectors.tweetIdInfo, t, this.el);
        t.getAttribute(l) || (t.setAttribute(l, !0), t.href = u.url(t.href, {
          tw_w: this.params.dataSource && this.params.dataSource.id,
          tw_i: n && n.getAttribute("data-tweet-id"),
          tw_p: this.params.productName,
          related: this.params.related,
          partner: this.params.partner,
          query: e && e.getAttribute("data-search-query"),
          profile_id: e && e.getAttribute("data-profile-id"),
          original_referer: a.rootDocumentLocation()
        }))
      }), t.after("render", function () {
        this.on("click", "A", function (t, e) {
          c.isIntentURL(e.href) && (this.injectWebIntentParams(e), s.open(e.href, this.sandbox.sandboxEl, t))
        })
      })
    }
    var i = n(22),
      o = n(42),
      s = n(24),
      a = n(48),
      u = n(26),
      c = n(25),
      d = n(15),
      l = "data-url-params-injected";
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      t.before("render", function () {
        i.ios() && this.sandbox.addRootClass("env-ios"),
          i.ie9() && this.sandbox.addRootClass("ie9"), i.touch() && this.sandbox.addRootClass("is-touch")
      })
    }
    var i = n(8);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      t.params({
        pageForAudienceImpression: {
          required: !0
        }
      }), t.before("hydrate", function () {
        i.scribeAudienceImpression(this.params.pageForAudienceImpression)
      })
    }
    var i = n(158);
    t.exports = r
  }, function (t, e, n) {
    function r() {
      return d.formatGenericEventData("syndicated_impression", {})
    }

    function i() {
      u("tweet")
    }

    function o() {
      u("timeline")
    }

    function s() {
      u("video")
    }

    function a() {
      u("partnertweet")
    }

    function u(t) {
      l.isHostPageSensitive() || f[t] || (f[t] = !0, c.scribe(d.formatClientEventNamespace({
        page: t,
        action: "impression"
      }), r(), d.AUDIENCE_ENDPOINT))
    }
    var c = n(73),
      d = n(52),
      l = n(50),
      f = {};
    t.exports = {
      scribeAudienceImpression: u,
      scribePartnerTweetAudienceImpression: a,
      scribeTweetAudienceImpression: i,
      scribeTimelineAudienceImpression: o,
      scribeVideoAudienceImpression: s
    }
  }, function (t, e, n) {
    function r(t) {
      var e = {
          action: "dimensions"
        },
        n = new o(s);
      t.after("show", function () {
        var t, r, i;
        n.nextBoolean() && (t = this.sandbox.width, r = this.sandbox.height, i = {
          widget_width: t,
          widget_height: r
        }, this.scribe(e, i))
      })
    }
    var i = n(93),
      o = n(160),
      s = 1;
    t.exports = i.couple(n(106), r)
  }, function (t, e) {
    function n(t) {
      this.percentage = t
    }
    n.prototype.nextBoolean = function () {
      return 100 * Math.random() < this.percentage
    }, t.exports = n
  }, , function (t, e, n) {
    function r(t) {
      var e = {
        transparent: !1,
        hideBorder: !1,
        hideHeader: !1,
        hideFooter: !1,
        hideScrollBar: !1
      };
      return t = t || "", i.contains(t, "transparent") && (e.transparent = !0), i.contains(t, "noborders") && (e.hideBorder = !0), i.contains(t, "noheader") && (e.hideHeader = !0), i.contains(t, "nofooter") && (e.hideFooter = !0), i.contains(t, "noscrollbar") && (e.hideScrollBar = !0), e
    }
    var i = n(12);
    t.exports = r
  }, function (t, e, n) {
    function r(t) {
      var e = u(t),
        n = {
          momentId: a.momentId(t.href),
          chrome: t.getAttribute("data-chrome"),
          limit: t.getAttribute("data-limit")
        };
      return s.forIn(n, function (t, n) {
        var r = e[t];
        e[t] = o.hasValue(r) ? r : n
      }), e
    }

    function i(t) {
      var e = c(t, l);
      return e.map(function (t) {
        return d(r(t), t.parentNode, t)
      })
    }
    var o = n(27),
      s = n(12),
      a = n(25),
      u = n(85),
      c = n(87)(),
      d = n(164),
      l = "a.twitter-moment";
    t.exports = i
  }, function (t, e, n) {
    function r(t, e, n) {
      return new i(o, s, "twitter-moment", t, e, n)
    }
    var i = n(90),
      o = n(165),
      s = n(55);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var r = new i;
      return n.e(4, function (i, o) {
        var s;
        if (i) return r.reject(i);
        try {
          s = n(166), r.resolve(new s(t, e))
        } catch (t) {
          r.reject(t)
        }
      }), r.promise
    }
    var i = n(1);
    t.exports = r
  }, , , , function (t, e, n) {
    function r(t) {
      t.selectors({
        inViewportMarker: ".js-inViewportScribingTarget"
      }), t.define("scribeInViewportSeen", function (t, e) {
        var n = i.extractTermsFromDOM(t);
        n.action = "seen", this.scribe(n, e, s.version)
      }), t.after("show", function () {
        var t = this.selectors.inViewportMarker,
          e = this.select(t);
        e.forEach(function (t) {
          t && a.inViewportOnce(t, this.sandbox.sandboxEl, function () {
            this.scribeInViewportSeen(t, this.scribeItems())
          }.bind(this))
        }, this)
      })
    }
    var i = n(52),
      o = n(93),
      s = n(54),
      a = n(170);
    t.exports = o.couple(n(106), r)
  }, function (t, e, n) {
    var r = n(171),
      i = n(69),
      o = n(172),
      s = n(7),
      a = n(8),
      u = 50,
      c = function (t) {
        return (s.requestIdleCallback || s.requestAnimationFrame || function (t) {
          t()
        })(t)
      },
      d = function () {
        this.observers = []
      };
    d.prototype._register = function (t, e, n) {
      var i, u = this;
      return a.hasIntersectionObserverSupport() ? (i = new s.IntersectionObserver(function (t) {
        t.forEach(function (t) {
          t.intersectionRatio >= 1 && (c(n), u._unregister(i))
        })
      }, {
        threshold: 1
      }), i.observe(t), i) : (i = {
        update: function (o, s) {
          r(t, {
            viewportWidth: o,
            viewportHeight: s,
            sandboxEl: e
          }) && (n(), u._unregister(i))
        }
      }, this.observers.push(i), 1 === this.observers.length && (this.unlisten = o.addScrollListener(this._onViewportChange.bind(this))), this._onViewportChange(), i)
    }, d.prototype._unregister = function (t) {
      var e;
      a.hasIntersectionObserverSupport() && t instanceof s.IntersectionObserver ? t.disconnect() : (e = this.observers.indexOf(t), e > -1 && (this.observers.splice(e, 1), 0 === this.observers.length && this.unlisten && this.unlisten()))
    }, d.prototype._onViewportChange = function () {
      i(c(function () {
        this._notify(o.getWidth(), o.getHeight())
      }.bind(this)), u, this)
    }, d.prototype._notify = function (t, e) {
      this.observers.forEach(function (n) {
        n.update(t, e)
      })
    }, d.prototype.inViewportOnce = function (t, e, n) {
      return this._register(t, e, n)
    }, t.exports = new d
  }, function (t, e, n) {
    function r(t, e) {
      var n, r, s, a;
      return e = e || {}, r = e.viewportWidth || o.innerWidth, n = e.viewportHeight || o.innerHeight, s = t.getBoundingClientRect(), t.ownerDocument !== i && e.sandboxEl && (a = e.sandboxEl.getBoundingClientRect(), s = {
        top: s.top + a.top,
        bottom: s.bottom + a.top,
        left: s.left + a.left,
        right: s.right + a.left
      }), s.top >= 0 && s.left >= 0 && s.bottom <= n && s.right <= r
    }
    var i = n(9),
      o = n(7);
    t.exports = r
  }, function (t, e, n) {
    var r = n(7),
      i = {
        _addListener: function (t, e) {
          var n, i = function () {
            e()
          };
          return r.addEventListener(t, i), n = function () {
            r.removeEventListener(t, i)
          }
        },
        addScrollListener: function (t) {
          return this._addListener("scroll", t)
        },
        getHeight: function () {
          return r.innerHeight
        },
        getWidth: function () {
          return r.innerWidth
        }
      };
    t.exports = i
  }, , function (t, e, n) {
    function r(t) {
      var e = s(t),
        n = t.getAttribute("href"),
        r = t.getAttribute("data-size"),
        i = d.exec(n)[1];
      return o.aug(e, {
        username: i,
        size: r
      })
    }

    function i(t) {
      var e = a(t, c);
      return e.map(function (t) {
        return u(r(t), t.parentNode, t)
      })
    }
    var o = n(12),
      s = n(85),
      a = n(87)(),
      u = n(175),
      c = "a.periscope-on-air",
      d = /^https?:\/\/(?:www\.)?(?:periscope|pscp)\.tv\/@?([a-zA-Z0-9_]+)\/?$/i;
    t.exports = i
  }, function (t, e, n) {
    function r(t, e, n) {
      return new i(o, s, "periscope-on-air", t, e, n)
    }
    var i = n(90),
      o = n(176),
      s = n(55);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var r = new i;
      return n.e(5, function (i, o) {
        var s;
        if (i) return r.reject(i);
        try {
          s = n(177), r.resolve(new s(t, e))
        } catch (t) {
          r.reject(t)
        }
      }), r.promise
    }
    var i = n(1);
    t.exports = r
  }, , , , function (t, e, n) {
    function r(t) {
      var e = c(t),
        n = t.getAttribute("data-show-replies"),
        r = {
          widgetId: t.getAttribute("data-widget-id"),
          chrome: t.getAttribute("data-chrome"),
          tweetLimit: t.getAttribute("data-tweet-limit"),
          ariaLive: t.getAttribute("data-aria-polite"),
          theme: t.getAttribute("data-theme"),
          linkColor: t.getAttribute("data-link-color"),
          borderColor: t.getAttribute("data-border-color"),
          showReplies: n ? o.asBoolean(n) : null,
          profileScreenName: t.getAttribute("data-screen-name"),
          profileUserId: t.getAttribute("data-user-id"),
          favoritesScreenName: t.getAttribute("data-favorites-screen-name"),
          favoritesUserId: t.getAttribute("data-favorites-user-id"),
          likesScreenName: t.getAttribute("data-likes-screen-name"),
          likesUserId: t.getAttribute("data-likes-user-id"),
          listOwnerScreenName: t.getAttribute("data-list-owner-screen-name"),
          listOwnerUserId: t.getAttribute("data-list-owner-id"),
          listId: t.getAttribute("data-list-id"),
          listSlug: t.getAttribute("data-list-slug"),
          customTimelineId: t.getAttribute("data-custom-timeline-id"),
          staticContent: t.getAttribute("data-static-content"),
          url: t.href
        };
      return r = s.aug(r, e), r.dataSource = a(r), r.useLegacyDefaults = r.dataSource instanceof u, r.id = r.dataSource.id, r
    }

    function i(t) {
      var e = d(t, f);
      return e.map(function (t) {
        return l(r(t), t.parentNode, t)
      })
    }
    var o = n(27),
      s = n(12),
      a = n(181),
      u = n(196),
      c = n(85),
      d = n(87)(),
      l = n(198),
      f = "a.twitter-timeline,div.twitter-timeline";
    t.exports = i
  }, function (t, e, n) {
    function r(t) {
      var e, n;
      return e = (t.sourceType + "").toLowerCase(), n = p[e], n ? new n(t) : null
    }

    function i(t) {
      return s(m, function (e) {
        try {
          return new e(t)
        } catch (t) {}
      })
    }

    function o(t) {
      return t ? r(t) || i(t) : null
    }
    var s = n(143),
      a = n(182),
      u = n(186),
      c = n(188),
      d = n(190),
      l = n(192),
      f = n(194),
      h = n(196),
      p = {
        collection: a,
        event: u,
        likes: c,
        list: d,
        profile: f,
        widget: h,
        url: i
      },
      m = [h, f, c, a, d, u, l];
    t.exports = o
  }, function (t, e, n) {
    var r = n(183);
    t.exports = r.build([n(184), n(185)])
  }, function (t, e, n) {
    var r = n(57),
      i = n(61),
      o = n(15);
    r = Object.create(r), r.build = o(r.build, null, i), t.exports = r
  }, function (t, e, n) {
    function r(t) {
      if (!t || !t.headers) throw new Error("unexpected response schema");
      return {
        html: t.body,
        config: t.config,
        pollInterval: 1e3 * parseInt(t.headers.xPolling, 10) || null,
        maxCursorPosition: t.headers.maxPosition,
        minCursorPosition: t.headers.minPosition
      }
    }

    function i(t) {
      if (t && t.headers) throw new Error(t.headers.status);
      throw t instanceof Error ? t : new Error(t)
    }

    function o(t) {
      t.params({
        instanceId: {
          required: !0,
          fallback: p.deterministic
        },
        lang: {
          required: !0,
          transform: d.matchLanguage,
          fallback: "en"
        },
        tweetLimit: {
          transform: h.asInt
        }
      }), t.defineProperty("endpoint", {
        get: function () {
          throw new Error("endpoint not specified")
        }
      }), t.defineProperty("pollEndpoint", {
        get: function () {
          return this.endpoint
        }
      }), t.define("cbId", function (t) {
        var e = t ? "_new" : "_old";
        return "tl_" + this.params.instanceId + "_" + this.id + e
      }), t.define("queryParams", function () {
        return {
          lang: this.params.lang,
          tz: l.getTimezoneOffset(),
          t: s(),
          domain: c.host,
          tweet_limit: this.params.tweetLimit,
          dnt: f.enabled()
        }
      }), t.define("fetch", function () {
        return a.fetch(this.endpoint, this.queryParams(), u, this.cbId()).then(r, i)
      }), t.define("poll", function (t, e) {
        var n, o;
        return t = t || {}, n = {
          since_id: t.sinceId,
          max_id: t.maxId,
          min_position: t.minPosition,
          max_position: t.maxPosition
        }, o = m.aug(this.queryParams(), n), a.fetch(this.pollEndpoint, o, u, this.cbId(e)).then(r, i)
      })
    }
    var s = n(139),
      a = n(136),
      u = n(137),
      c = n(11),
      d = n(99),
      l = n(138),
      f = n(47),
      h = n(27),
      p = n(30),
      m = n(12);
    t.exports = o
  }, function (t, e, n) {
    function r(t, e) {
      return o.collectionId(t) || e
    }

    function i(t) {
      t.params({
        id: {},
        url: {}
      }), t.overrideProperty("id", {
        get: function () {
          var t = r(this.params.url, this.params.id);
          return u + t
        }
      }), t.overrideProperty("endpoint", {
        get: function () {
          return a.timeline(["collection"])
        }
      }), t.around("queryParams", function (t) {
        return s.aug(t(), {
          collection_id: r(this.params.url, this.params.id)
        })
      }), t.before("initialize", function () {
        if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required")
      })
    }
    var o = n(25),
      s = n(12),
      a = n(78),
      u = "collection:";
    t.exports = i
  }, function (t, e, n) {
    var r = n(183);
    t.exports = r.build([n(184), n(187)])
  }, function (t, e, n) {
    function r(t, e) {
      return o.eventId(t) || e
    }

    function i(t) {
      t.params({
        id: {},
        url: {}
      }), t.overrideProperty("id", {
        get: function () {
          var t = r(this.params.url, this.params.id);
          return u + t
        }
      }), t.overrideProperty("endpoint", {
        get: function () {
          return a.timeline(["event"])
        }
      }), t.around("queryParams", function (t) {
        return s.aug(t(), {
          event_id: r(this.params.url, this.params.id)
        })
      }), t.before("initialize", function () {
        if (!r(this.params.url, this.params.id)) throw new Error("one of url or id is required")
      })
    }
    var o = n(25),
      s = n(12),
      a = n(78),
      u = "event:";
    t.exports = i
  }, function (t, e, n) {
    var r = n(183);
    t.exports = r.build([n(184), n(189)])
  }, function (t, e, n) {
    function r(t) {
      return o.likesScreenName(t.url) || t.screenName
    }

    function i(t) {
      t.params({
        screenName: {},
        userId: {},
        url: {}
      }), t.overrideProperty("id", {
        get: function () {
          var t = r(this.params) || this.params.userId;
          return u + t
        }
      }), t.overrideProperty("endpoint", {
        get: function () {
          return a.timeline(["likes"])
        }
      }), t.define("_getLikesQueryParam", function () {
        var t = r(this.params);
        return t ? {
          screen_name: t
        } : {
          user_id: this.params.userId
        }
      }), t.around("queryParams", function (t) {
        return s.aug(t(), this._getLikesQueryParam())
      }), t.before("initialize", function () {
        if (!r(this.params) && !this.params.userId) throw new Error("screen name or user id is required")
      })
    }
    var o = n(25),
      s = n(12),
      a = n(78),
      u = "likes:";
    t.exports = i
  }, function (t, e, n) {
    var r = n(183);
    t.exports = r.build([n(184), n(191)])
  }, function (t, e, n) {
    function r(t) {
      var e = o.listScreenNameAndSlug(t.url) || t;
      return s.compact({
        screen_name: e.ownerScreenName,
        user_id: e.ownerUserId,
        list_slug: e.slug
      })
    }

    function i(t) {
      t.params({
        id: {},
        ownerScreenName: {},
        ownerUserId: {},
        slug: {},
        url: {}
      }), t.overrideProperty("id", {
        get: function () {
          var t, e, n;
          return this.params.id ? u + this.params.id : (t = r(this.params), e = t && t.list_slug.replace(/-/g, "_"), n = t && (t.screen_name || t.user_id), u + (n + ":" + e))
        }
      }), t.overrideProperty("endpoint", {
        get: function () {
          return a.timeline(["list"])
        }
      }), t.define("_getListQueryParam", function () {
        return this.params.id ? {
          list_id: this.params.id
        } : r(this.params)
      }), t.around("queryParams", function (t) {
        return s.aug(t(), this._getListQueryParam())
      }), t.before("initialize", function () {
        var t = r(this.params);
        if (s.isEmptyObject(t) && !this.params.id) throw new Error("qualified slug or list id required")
      })
    }
    var o = n(25),
      s = n(12),
      a = n(78),
      u = "list:";
    t.exports = i
  }, function (t, e, n) {
    var r = n(183);
    t.exports = r.build([n(184), n(193)])
  }, function (t, e, n) {
    function r(t) {
      t.params({
        previewParams: {
          required: !0,
          validate: i.isObject
        }
      }), t.overrideProperty("id", {
        get: function () {
          return "preview"
        }
      }), t.overrideProperty("endpoint", {
        get: function () {
          return o.timelinePreconfigured(["preview"])
        }
      }), t.override("queryParams", function () {
        return this.params.previewParams
      })
    }
    var i = n(27),
      o = n(78);
    t.exports = r
  }, function (t, e, n) {
    var r = n(183);
    t.exports = r.build([n(184), n(195)])
  }, function (t, e, n) {
    function r(t, e) {
      return o.screenName(t) || e
    }

    function i(t) {
      t.params({
        showReplies: {
          fallback: !1,
          transform: s.asBoolean
        },
        screenName: {},
        userId: {},
        url: {}
      }), t.overrideProperty("id", {
        get: function () {
          var t = r(this.params.url, this.params.screenName);
          return c + (t || this.params.userId)
        }
      }), t.overrideProperty("endpoint", {
        get: function () {
          return u.timeline(["profile"])
        }
      }), t.define("_getProfileQueryParam", function () {
        var t = r(this.params.url, this.params.screenName),
          e = t ? {
            screen_name: t
          } : {
            user_id: this.params.userId
          };
        return a.aug(e, {
          with_replies: this.params.showReplies ? "true" : "false"
        })
      }), t.around("queryParams", function (t) {
        return a.aug(t(), this._getProfileQueryParam())
      }), t.before("initialize", function () {
        var t = r(this.params.url, this.params.screenName);
        if (!t && !this.params.userId) throw new Error("screen name or user id is required")
      })
    }
    var o = n(25),
      s = n(27),
      a = n(12),
      u = n(78),
      c = "profile:";
    t.exports = i
  }, function (t, e, n) {
    var r = n(183);
    t.exports = r.build([n(184), n(197)])
  }, function (t, e, n) {
    function r(t) {
      t.params({
        widgetId: {
          required: !0
        },
        profileShowReplies: {
          fallback: !1,
          transform: i.asBoolean
        },
        showReplies: {
          fallback: !1,
          transform: i.asBoolean
        },
        profileScreenName: {},
        screenName: {},
        profileUserId: {},
        userId: {},
        favoritesScreenName: {},
        favoritesUserId: {},
        listOwnerScreenName: {},
        listOwnerUserId: {},
        listOwnerId: {},
        listId: {},
        listSlug: {},
        customTimelineId: {},
        previewParams: {}
      }), t.overrideProperty("id", {
        get: function () {
          return this.params.widgetId
        }
      }), t.overrideProperty("endpoint", {
        get: function () {
          return s.timelinePreconfigured([this.params.widgetId])
        }
      }), t.overrideProperty("pollEndpoint", {
        get: function () {
          return s.timelinePreconfigured(["paged", this.params.widgetId])
        }
      }), t.define("_getWidgetQueryParams", function () {
        var t = this.params.profileScreenName || this.params.screenName,
          e = this.params.profileUserId || this.params.userId,
          n = this.params.profileShowReplies || this.params.showReplies,
          r = this.params.listOwnerUserId || this.params.listOwnerId;
        return t || e ? {
          override_type: "user",
          override_id: e,
          override_name: t,
          with_replies: n ? "true" : "false"
        } : this.params.favoritesScreenName || this.params.favoritesUserId ? {
          override_type: "favorites",
          override_id: this.params.favoritesUserId,
          override_name: this.params.favoritesScreenName
        } : this.params.listOwnerScreenName || r || this.params.listId || this.params.listSlug ? {
          override_type: "list",
          override_owner_id: r,
          override_owner_name: this.params.listOwnerScreenName,
          override_id: this.params.listId,
          override_name: this.params.listSlug
        } : this.params.customTimelineId ? {
          override_type: "custom",
          override_id: this.params.customTimelineId
        } : void 0
      }), t.around("queryParams", function (t) {
        return o.aug(t(), this._getWidgetQueryParams())
      })
    }
    var i = n(27),
      o = n(12),
      s = n(78);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e, n) {
      return new i(o, s, "twitter-timeline", t, e, n)
    }
    var i = n(90),
      o = n(199),
      s = n(55);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var r = new i;
      return n.e(6, function (i, o) {
        var s;
        if (i) return r.reject(i);
        try {
          s = n(200), r.resolve(new s(t, e))
        } catch (t) {
          r.reject(t)
        }
      }), r.promise
    }
    var i = n(1);
    t.exports = r
  }, , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    function r(t) {
      var e = u(t),
        n = t.getElementsByTagName("A"),
        r = n && n[n.length - 1],
        i = r && s.status(r.href),
        c = t.getAttribute("data-conversation"),
        d = "none" == c || "hidden" == c || o.present(t, "tw-hide-thread"),
        l = t.getAttribute("data-cards"),
        h = "none" == l || "hidden" == l || o.present(t, "tw-hide-media"),
        p = t.getAttribute("data-align") || t.getAttribute("align"),
        m = t.getAttribute("data-link-color"),
        v = t.getAttribute("data-theme");
      return !p && f.test(t.className) && (p = RegExp.$1), a.aug(e, {
        tweetId: i,
        hideThread: d,
        hideCard: h,
        align: p,
        linkColor: m,
        theme: v,
        id: i
      })
    }

    function i(t) {
      var e = c(t, l);
      return e.map(function (t) {
        return d(r(t), t.parentNode, t)
      })
    }
    var o = n(21),
      s = n(25),
      a = n(12),
      u = n(85),
      c = n(87)(),
      d = n(225),
      l = "blockquote.twitter-tweet, blockquote.twitter-video",
      f = /\btw-align-(left|right|center)\b/;
    t.exports = i
  }, function (t, e, n) {
    function r(t, e, n) {
      return new i(o, s, "twitter-tweet", t, e, n)
    }
    var i = n(90),
      o = n(226),
      s = n(112);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var r = new i;
      return n.e(7, function (i, o) {
        var s;
        if (i) return r.reject(i);
        try {
          s = n(227), r.resolve(new s(t, e))
        } catch (t) {
          r.reject(t)
        }
      }), r.promise
    }
    var i = n(1);
    t.exports = r
  }, , , , , , , , , , , , , , function (t, e, n) {
    function r() {
      a++, i()
    }

    function i() {
      o && o.length === a && (s.emitter.trigger(s.ALL_WIDGETS_AND_IMAGES_LOADED, o), o = null)
    }
    var o, s = n(241),
      a = 0;
    s.emitter.bind(s.ALL_WIDGETS_RENDERED, function (t) {
      o = t.widgets, i()
    }), t.exports = {
      reportImagesLoadForAWidget: r
    }
  }, function (t, e, n) {
    var r = n(32),
      i = r.makeEmitter();
    t.exports = {
      emitter: i,
      START: "start",
      ALL_WIDGETS_RENDERED: "all_widgets_rendered",
      ALL_WIDGETS_AND_IMAGES_LOADED: "all_widgets_and_images_loaded"
    }
  }, , function (t, e, n) {
    function r(t) {
      var e = a(t),
        n = {
          screenName: t.getAttribute("data-button-screen-name"),
          text: t.getAttribute("data-text"),
          type: t.getAttribute("data-type"),
          size: t.getAttribute("data-size"),
          url: t.getAttribute("data-url"),
          hashtags: t.getAttribute("data-hashtags"),
          via: t.getAttribute("data-via"),
          buttonHashtag: t.getAttribute("data-button-hashtag")
        };
      return s.forIn(n, function (t, n) {
        var r = e[t];
        e[t] = d.hasValue(r) ? r : n
      }), e.screenName = e.screenName || e.screen_name, e.buttonHashtag = e.buttonHashtag || e.button_hashtag || e.hashtag, o.present(t, f) && (e.type = "hashtag"), o.present(t, h) && (e.type = "mention"), e
    }

    function i(t) {
      var e = u(t, l);
      return e.map(function (t) {
        return c(r(t), t.parentNode, t)
      })
    }
    var o = n(21),
      s = n(12),
      a = n(85),
      u = n(87)(),
      c = n(244),
      d = n(27),
      l = "a.twitter-share-button, a.twitter-mention-button, a.twitter-hashtag-button",
      f = "twitter-hashtag-button",
      h = "twitter-mention-button";
    t.exports = i
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = t && t.type || "share",
        a = "hashtag" == r ? "twitter-hashtag-button" : "mention" == r ? "twitter-mention-button" : "twitter-share-button";
      return new i(o, s, a, t, e, n)
    }
    var i = n(90),
      o = n(245),
      s = n(123);
    t.exports = r
  }, function (t, e, n) {
    function r(t, e) {
      var r = new i;
      return n.e(2, function (i, o) {
        var s;
        if (i) return r.reject(i);
        try {
          s = n(246), r.resolve(new s(t, e))
        } catch (t) {
          r.reject(t)
        }
      }), r.promise
    }
    var i = n(1);
    t.exports = r
  }, , , function (t, e, n) {
    var r = n(12);
    t.exports = r.aug({}, n(249), n(251), n(252), n(253), n(254), n(255), n(256), n(257))
  }, function (t, e, n) {
    var r = n(89),
      i = n(250),
      o = i(["userId"], {}, r);
    t.exports = {
      createDMButton: o
    }
  }, function (t, e, n) {
    function r(t, e, n) {
      var r;
      return t = t || [], e = e || {}, r = "ƒ(" + t.join(", ") + ", target, [options]);",
        function () {
          var c, d, l, f, h = Array.prototype.slice.apply(arguments, [0, t.length]),
            p = Array.prototype.slice.apply(arguments, [t.length]);
          return p.forEach(function (t) {
            if (t) return t.nodeType === Node.ELEMENT_NODE ? void(l = t) : u.isType("function", t) ? void(c = t) : void(u.isType("object", t) && (d = t))
          }), h.length !== t.length || 0 === p.length ? (c && u.async(function () {
            c(!1)
          }), i.reject(new Error("Not enough parameters. Expected: " + r))) : l ? (d = u.aug({}, d || {}, e), t.forEach(function (t) {
            d[t] = h.shift()
          }), a.asBoolean(d.dnt) && s.setOn(), f = o.addWidget(n(d, l)), c && f.then(c, function () {
            c(!1)
          }), f) : (c && u.async(function () {
            c(!1)
          }), i.reject(new Error("No target element specified. Expected: " + r)))
        }
    }
    var i = n(2),
      o = n(35),
      s = n(47),
      a = n(27),
      u = n(12);
    t.exports = r
  }, function (t, e, n) {
    var r = n(117),
      i = n(250),
      o = i(["screenName"], {}, r);
    t.exports = {
      createFollowButton: o
    }
  }, function (t, e, n) {
    var r = n(131),
      i = n(250),
      o = i(["collectionId"], {}, r);
    t.exports = {
      createGridFromCollection: o
    }
  }, function (t, e, n) {
    var r = n(164),
      i = n(250),
      o = i(["momentId"], {}, r);
    t.exports = {
      createMoment: o
    }
  }, function (t, e, n) {
    var r = n(175),
      i = n(250),
      o = i(["username"], {}, r);
    t.exports = {
      createPeriscopeOnAirButton: o
    }
  }, function (t, e, n) {
    function r(t) {
      var e, n = a.toRealArray(arguments).slice(1);
      return a.isObject(t) || u.isString(t) ? (t = t || {}, n.forEach(function (t) {
        a.isType("object", t) && (e = t, i(e))
      }), e || (e = {}, n.push(e)), u.isString(t) && (t = a.aug({}, e, {
        sourceType: "widget",
        widgetId: t
      })), t.lang = e.lang, t.tweetLimit = e.tweetLimit, t.showReplies = e.showReplies, e.dataSource = c(t), e.useLegacyDefaults = e.dataSource instanceof d, h.apply(this, n)) : p.reject("data source must be a string or an object.")
    }

    function i(t) {
      t.ariaLive = t.ariaPolite
    }
    var o = n(11),
      s = n(25),
      a = n(12),
      u = n(27),
      c = n(181),
      d = n(196),
      l = n(198),
      f = n(250),
      h = f([], {}, l),
      p = n(2),
      m = {
        createTimeline: r
      };
    s.isTwitterURL(o.href) && (m.createTimelinePreview = function (t, e, n) {
      var r = {
        previewParams: t,
        useLegacyDefaults: !0,
        isPreviewTimeline: !0
      };
      return r.dataSource = c(r), h(e, r, n)
    }), t.exports = m
  }, function (t, e, n) {
    function r(t) {
      return function () {
        return i.toRealArray(arguments).slice(1).forEach(function (t) {
          i.isType("object", t) && (t.hideCard = "none" == t.cards || "hidden" == t.cards, t.hideThread = "none" == t.conversation || "hidden" == t.conversation)
        }), t.apply(this, arguments)
      }
    }
    var i = n(12),
      o = n(225),
      s = n(250),
      a = r(s(["tweetId"], {}, o));
    t.exports = {
      createTweet: a,
      createTweetEmbed: a,
      createVideo: a
    }
  }, function (t, e, n) {
    function r(t) {
      return function () {
        return i.toRealArray(arguments).slice(1).forEach(function (t) {
          i.isType("object", t) && (t.screenName = t.screenName || t.screen_name, t.buttonHashtag = t.buttonHashtag || t.button_hashtag || t.hashtag)
        }), t.apply(this, arguments)
      }
    }
    var i = n(12),
      o = n(244),
      s = n(250),
      a = s(["url"], {
        type: "share"
      }, o),
      u = s(["buttonHashtag"], {
        type: "hashtag"
      }, o),
      c = s(["screenName"], {
        type: "mention"
      }, o);
    t.exports = {
      createShareButton: r(a),
      createHashtagButton: r(u),
      createMentionButton: r(c)
    }
  }, function (t, e, n) {
    function r() {
      var t, e;
      for (c = 1, t = 0, e = d.length; t < e; t++) d[t]()
    }
    var i, o, s, a = n(9),
      u = n(7),
      c = 0,
      d = [],
      l = !1,
      f = a.createElement("a");
    /^loade|c/.test(a.readyState) && (c = 1), a.addEventListener && a.addEventListener("DOMContentLoaded", o = function () {
      a.removeEventListener("DOMContentLoaded", o, l), r()
    }, l), f.doScroll && a.attachEvent("onreadystatechange", i = function () {
      /^c/.test(a.readyState) && (a.detachEvent("onreadystatechange", i), r())
    }), s = f.doScroll ? function (t) {
      u.self != u.top ? c ? t() : d.push(t) : ! function () {
        try {
          f.doScroll("left")
        } catch (e) {
          return setTimeout(function () {
            s(t)
          }, 50)
        }
        t()
      }()
    } : function (t) {
      c ? t() : d.push(t)
    }, t.exports = s
  }, function (t, e, n) {
    var r = n(54),
      i = n(18);
    t.exports = function () {
      i.set("buildVersion", r.version)
    }
  }, function (t, e, n) {
    n(261), n(240), n(265)
  }, function (t, e, n) {
    var r = n(262),
      i = n(241),
      o = n(264),
      s = new r;
    i.emitter.bind(i.START, function () {
      s.start()
    }), i.emitter.bind(i.ALL_WIDGETS_RENDERED, function () {
      s.end(), o(s.duration(), {
        action: "render"
      })
    })
  }, function (t, e, n) {
    function r() {}
    var i = n(263);
    r.prototype.start = function () {
      this._startTime = i()
    }, r.prototype.end = function () {
      this._duration = i() - this._startTime
    }, r.prototype.duration = function () {
      return this._duration
    }, t.exports = r
  }, function (t, e, n) {
    var r = n(7);
    t.exports = function () {
      return r.performance && r.performance.now ? r.performance.now() : Date.now()
    }
  }, function (t, e, n) {
    var r = n(43),
      i = n(48),
      o = n(12);
    t.exports = function (t, e) {
      var n = {
          widget_origin: i.rootDocumentLocation(),
          widget_frame: i.isFramed() ? i.currentDocumentLocation() : null,
          duration_ms: t
        },
        s = o.aug(e, {
          page: "page",
          component: "performance"
        });
      r.scribe(s, n)
    }
  }, function (t, e, n) {
    function r(t, e, n) {
      var r = Object.keys(t).reduce(function (e, r) {
        return n(r) ? e + t[r] : e
      }, 0);
      a(r, {
        element: e,
        action: "resource"
      })
    }

    function i(t) {
      return t.performance.getEntriesByType("resource").filter(function (t) {
        return c.isTwimgURL(t.name) || c.isTwitterURL(t.name)
      }).reduce(function (t, e) {
        return t[e.name] = e.duration, t
      }, {})
    }

    function o(t) {
      return t.reduce(function (t, e) {
        return l.aug(t, i(e.contentDocument.defaultView))
      }, {})
    }
    var s = n(241),
      a = n(264),
      u = n(266),
      c = n(25),
      d = n(7),
      l = n(12),
      f = n(8),
      h = n(113);
    s.emitter.bind(s.ALL_WIDGETS_AND_IMAGES_LOADED, function (t) {
      var e, n, s = [];
      f.hasPerformanceInformation() && (e = i(d), h.isSupported() || (s = o(t)), n = l.aug({}, e, s), Object.keys(u).forEach(function (t) {
        r(n, t, u[t])
      }))
    })
  }, function (t, e, n) {
    var r = n(25),
      i = {
        all: function () {
          return !0
        },
        image: function (t) {
          return r.isTwimgURL(t)
        },
        settings: function (t) {
          return r.isSettingsURL(t)
        },
        widget_iframe: function (t) {
          return r.isWidgetIframeURL(t)
        }
      };
    t.exports = i
  }])))
}();

;! function (a, b, c) {
  var d, e, f;
  d = "PIN_" + ~~((new Date).getTime() / 864e5), a[d] ? a[d] += 1 : (a[d] = 1, a.setTimeout(function () {
    e = b.getElementsByTagName("SCRIPT")[0], f = b.createElement("SCRIPT"), f.type = "text/javascript", f.async = !0, f.src = c.mainUrl + "?" + Math.random(), e.parentNode.insertBefore(f, e)
  }, 10))
}(window, document, {
  mainUrl: "//assets.pinterest.com/js/pinit_main.js"
});

;
//# sourceMappingURL=scripts.js.map