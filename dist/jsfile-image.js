(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("JsFile"));
	else if(typeof define === 'function' && define.amd)
		define(["JsFile"], factory);
	else if(typeof exports === 'object')
		exports["JsFileImage"] = factory(require("JsFile"));
	else
		root["JsFileImage"] = factory(root["JsFile"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _JsFile = __webpack_require__(1);

	var _readerParseImageFile = __webpack_require__(2);

	var _readerParseImageFile2 = _interopRequireDefault(_readerParseImageFile);

	var _readerCreateDocument = __webpack_require__(3);

	var _readerCreateDocument2 = _interopRequireDefault(_readerCreateDocument);

	var _readerParseWbmp = __webpack_require__(4);

	var _readerParseWbmp2 = _interopRequireDefault(_readerParseWbmp);

	/**
	 * @description Supported files by engine
	 * @type {{mime: Array}}
	 */
	var files = {
	    extension: ['gif', 'jpg', 'jpeg', 'pjpeg', 'png', 'svg', 'ico', 'tif', 'tiff'],
	    mime: ['image/gif', 'image/jpg', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/svg+xml', 'image/x-icon', 'image/tiff', 'image/tiff-fx', 'image/vnd.microsoft.icon']
	};

	var wbmpFiles = {
	    extension: ['wbmp'],
	    mime: ['image/vnd.wap.wbmp']
	};

	files.extension.push.apply(files.extension, wbmpFiles.extension);
	files.mime.push.apply(files.mime, wbmpFiles.mime);

	var ImageEngine = (function (_Engine) {
	    _inherits(ImageEngine, _Engine);

	    function ImageEngine() {
	        _classCallCheck(this, ImageEngine);

	        _get(Object.getPrototypeOf(ImageEngine.prototype), 'constructor', this).apply(this, arguments);

	        this.createDocument = _readerCreateDocument2['default'];
	        this.files = files;
	        this.parser = _readerParseImageFile2['default'];
	        this.parseWbmp = _readerParseWbmp2['default'];
	    }

	    _createClass(ImageEngine, [{
	        key: 'isWbmp',
	        value: function isWbmp() {
	            return Boolean(this.file && _JsFile.Engine.validateFile(this.file, wbmpFiles));
	        }
	    }], [{
	        key: 'test',
	        value: function test(file) {
	            return Boolean(file && _JsFile.Engine.validateFile(file, files));
	        }
	    }, {
	        key: 'mimeTypes',
	        value: files.mime.slice(0),
	        enumerable: true
	    }]);

	    return ImageEngine;
	})(_JsFile.Engine);

	(0, _JsFile.defineEngine)(ImageEngine);

	exports['default'] = ImageEngine;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var _JsFile$Engine = _JsFile2['default'].Engine;
	var notFoundMethodCreateDocument = _JsFile$Engine.errors.notFoundMethodCreateDocument;
	var normalizeDataUri = _JsFile$Engine.normalizeDataUri;

	exports['default'] = function () {
	    return new Promise((function (resolve, reject) {
	        var promise = undefined;
	        var fileName = this.fileName;

	        if (this.isWbmp()) {
	            promise = this.parseWbmp();
	        } else {
	            promise = this.readFileEntry({
	                file: this.file,
	                method: 'readAsDataURL'
	            }).then(function (src) {
	                return {
	                    properties: {
	                        src: normalizeDataUri(src, fileName)
	                    }
	                };
	            });
	        }

	        promise.then((function (result) {
	            if (typeof this.createDocument !== 'function') {
	                reject(new Error(notFoundMethodCreateDocument));
	                return;
	            }

	            this.createDocument(result).then(resolve, reject);
	        }).bind(this));

	        promise['catch'](reject);
	    }).bind(this));
	};

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var Document = _JsFile2['default'].Document;

	exports['default'] = function (obj) {
	    return new Promise((function (resolve) {
	        var page = Document.elementPrototype;
	        var img = Document.elementPrototype;
	        var fileName = this.fileName;

	        page.properties.tagName = 'DIV';
	        img.properties.tagName = 'IMG';
	        img.properties.src = obj.properties.src;
	        page.children.push(img);

	        resolve(new Document({
	            meta: {
	                name: fileName
	            },
	            content: [page]
	        }));
	    }).bind(this));
	};

	;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var invalidReadFile = _JsFile2['default'].Engine.errors.invalidReadFile;

	function writeImageData(data, bit, index) {
	    var color = bit ? 255 : 0;
	    data[index++] = color;
	    data[index++] = color;
	    data[index++] = color;
	    data[index++] = 255;

	    return index;
	}

	function decode(arrayBuffer) {
	    var bytes = new Uint8Array(arrayBuffer);
	    var ptr = 0;

	    // Read unsigned multi-byte integer (6.3.1) from the byte stream.
	    function readMultiByteInteger(bytes) {
	        var result = 0;

	        while (true) {
	            if (result & 0xfe000000) {
	                return null;
	            }

	            var b = bytes[ptr++];
	            result = result << 7 | b & 0x7f;

	            if (!(b & 0x80)) {
	                return result;
	            }
	        }
	    }

	    // Support only image type 0: B/W, no compression
	    if (readMultiByteInteger(bytes) !== 0) {
	        return null;
	    }

	    /**
	     * @description Unsigned octet from the byte stream
	     * @type {number}
	     */
	    var octet = bytes[ptr++] & 0xff;

	    // Don't expect any extended headers here.
	    if (octet !== 0) {
	        return null;
	    }

	    var width = readMultiByteInteger(bytes);
	    var height = readMultiByteInteger(bytes);

	    // Reject incorrect image dimensions
	    if (width === 0 || width > 65535 || height == 0 || height > 65535) {
	        return null;
	    }

	    // Create a canvas to draw the pixels into.
	    var canvas = document.createElement('canvas');
	    canvas.setAttribute('width', width);
	    canvas.setAttribute('height', height);
	    var ctx = canvas.getContext('2d');
	    var imageData = ctx.createImageData(width, height);
	    var data = imageData.data;

	    // Decode the image.
	    for (var y = 0; y < height; ++y) {
	        for (var x = 0; x < width; x += 8) {
	            var bits = bytes[ptr++];
	            var w = (y * width + x) * 4;

	            w = writeImageData(data, bits & 0x80, w);
	            w = writeImageData(data, bits & 0x40, w);
	            w = writeImageData(data, bits & 0x20, w);
	            w = writeImageData(data, bits & 0x10, w);
	            w = writeImageData(data, bits & 0x08, w);
	            w = writeImageData(data, bits & 0x04, w);
	            w = writeImageData(data, bits & 0x02, w);
	            w = writeImageData(data, bits & 0x01, w);
	        }
	    }

	    if (ptr > bytes.length) {
	        return null;
	    }

	    ctx.putImageData(imageData, 0, 0);
	    return canvas.toDataURL('image/png');
	}

	exports['default'] = function () {
	    return new Promise((function (resolve, reject) {
	        var promise = this.readFileEntry({
	            file: this.file,
	            method: 'readAsArrayBuffer'
	        });

	        promise.then(function (arrayBuffer) {
	            var src = decode(arrayBuffer);
	            if (!src) {
	                return reject(new Error(invalidReadFile));
	            }

	            resolve({
	                properties: {
	                    src: src
	                }
	            });
	        });

	        promise['catch'](reject);
	    }).bind(this));
	};

	;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;