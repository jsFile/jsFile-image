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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	var _parseImageFile = __webpack_require__(2);

	var _parseImageFile2 = _interopRequireDefault(_parseImageFile);

	var _createDocument = __webpack_require__(3);

	var _createDocument2 = _interopRequireDefault(_createDocument);

	var _parseWbmp = __webpack_require__(4);

	var _parseWbmp2 = _interopRequireDefault(_parseWbmp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Engine = _JsFile2.default.Engine;
	var defineEngine = _JsFile2.default.defineEngine;

	/**
	 * @description Supported files by engine
	 * @type {{mime: Array}}
	 */

	var files = {
	    extension: ['gif', 'jpg', 'jpeg', 'png', 'svg', 'ico', 'tif', 'tiff'],
	    mime: ['image/gif', 'image/jpg', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/svg+xml', 'image/x-icon', 'image/tiff', 'image/tiff-fx', 'image/vnd.microsoft.icon']
	};

	var wbmpFiles = {
	    extension: ['wbmp'],
	    mime: ['image/vnd.wap.wbmp']
	};

	files.extension.push.apply(files.extension, wbmpFiles.extension);
	files.mime.push.apply(files.mime, wbmpFiles.mime);

	var ImageEngine = function (_Engine) {
	    _inherits(ImageEngine, _Engine);

	    function ImageEngine() {
	        _classCallCheck(this, ImageEngine);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageEngine).apply(this, arguments));

	        _this.createDocument = _createDocument2.default;
	        _this.files = files;
	        _this.parser = _parseImageFile2.default;
	        _this.parseWbmp = _parseWbmp2.default;
	        return _this;
	    }

	    _createClass(ImageEngine, [{
	        key: 'isWbmp',
	        value: function isWbmp() {
	            return Boolean(this.file && Engine.validateFile(this.file, wbmpFiles));
	        }
	    }], [{
	        key: 'test',
	        value: function test(file) {
	            return Boolean(file && Engine.validateFile(file, files));
	        }
	    }]);

	    return ImageEngine;
	}(Engine);

	ImageEngine.mimeTypes = files.mime.slice(0);
	defineEngine(ImageEngine);

	exports.default = ImageEngine;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parseImageFile;

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _JsFile$Engine = _JsFile2.default.Engine;
	var notFoundMethodCreateDocument = _JsFile$Engine.errors.notFoundMethodCreateDocument;
	var normalizeDataUri = _JsFile$Engine.normalizeDataUri;
	function parseImageFile() {
	    return new Promise(function (resolve, reject) {
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

	        promise.then(function (result) {
	            if (typeof this.createDocument !== 'function') {
	                reject(new Error(notFoundMethodCreateDocument));
	                return;
	            }

	            this.createDocument(result).then(resolve, reject);
	        }.bind(this));

	        promise.catch(reject);
	    }.bind(this));
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = createDocument;

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Document = _JsFile2.default.Document;
	function createDocument(obj) {
	    var _this = this;

	    return new Promise(function (resolve) {
	        var page = Document.elementPrototype;
	        var img = Document.elementPrototype;
	        var fileName = _this.fileName;

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
	    });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parseWbmp;

	var _JsFile = __webpack_require__(1);

	var _JsFile2 = _interopRequireDefault(_JsFile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var invalidReadFile = _JsFile2.default.Engine.errors.invalidReadFile;

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

	    /**
	     * @description Read unsigned multi-byte integer (6.3.1) from the byte stream.
	     * @param bytes
	     * @returns {number|null}
	     */
	    function readMultiByteInteger(bytes) {
	        var value = 0;
	        var result = undefined;

	        while (result === undefined) {
	            if (value & 0xfe000000) {
	                result = null;
	            }

	            var b = bytes[ptr++];
	            value = value << 7 | b & 0x7f;

	            if (!(b & 0x80)) {
	                result = value;
	            }
	        }

	        return result;
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

	    var canvas = document.createElement('canvas');
	    canvas.setAttribute('width', width);
	    canvas.setAttribute('height', height);
	    var ctx = canvas.getContext('2d');
	    var imageData = ctx.createImageData(width, height);
	    var data = imageData.data;

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

	function parseWbmp() {
	    return this.readFileEntry({
	        file: this.file,
	        method: 'readAsArrayBuffer'
	    }).then(function (arrayBuffer) {
	        var src = decode(arrayBuffer);
	        if (!src) {
	            throw new Error(invalidReadFile);
	        }

	        return {
	            properties: {
	                src: src
	            }
	        };
	    });
	}

/***/ }
/******/ ])
});
;