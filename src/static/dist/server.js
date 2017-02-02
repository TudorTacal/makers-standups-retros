module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _path = __webpack_require__(1);

	var _path2 = _interopRequireDefault(_path);

	var _http = __webpack_require__(2);

	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _HomePage = __webpack_require__(6);

	var _HomePage2 = _interopRequireDefault(_HomePage);

	var _RetroPage = __webpack_require__(9);

	var _RetroPage2 = _interopRequireDefault(_RetroPage);

	var _StandupPage = __webpack_require__(14);

	var _StandupPage2 = _interopRequireDefault(_StandupPage);

	var _template = __webpack_require__(15);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = new _express2.default();
	var server = new _http.Server(app);

	app.set('view engine', 'ejs');
	app.set('views', _path2.default.join(__dirname, 'views'));
	console.log(_path2.default);

	app.use(_express2.default.static(_path2.default.join(__dirname, 'static')));

	// app.get('/', (req, res) => {
	//   const appString = renderToString(<StandupPage />);
	//
	//  res.send(template({
	//     body: appString,
	//     title: 'Hello World from the server'
	//   }));
	// });

	app.get('/', function (req, res) {
	  var markup = (0, _server.renderToString)(_react2.default.createElement(_StandupPage2.default, null));
	  res.render('index', { markup: markup });
	});

	// app.get('/standup', (req, res) => {
	//   let markup = renderToString(<StandupPage/>)
	//   res.render('index', {markup})
	// })
	//
	// app.get('/retro', (req, res) => {
	//   let markup = renderToString(<RetroPage/>)
	//   res.send(markup);
	// })

	var port = process.env.PORT || 3000;
	var env = process.env.NODE_ENV || 'production';
	server.listen(port, function (err) {
	  if (err) {
	    return console.error(err);
	  }
	  console.info('Server running on http://localhost:' + port + ' [' + env + ']');
	});

	//Saving this command for later use to start the server "nodemon --exec babel-node --presets 'react,es2015' src/server.js"

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Layout = __webpack_require__(7);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Button = __webpack_require__(8);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomePage = function (_Component) {
		_inherits(HomePage, _Component);

		function HomePage() {
			_classCallCheck(this, HomePage);

			return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
		}

		_createClass(HomePage, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'homePageContent' },
					_react2.default.createElement(
						'div',
						{ className: 'homePageLogo' },
						_react2.default.createElement(_Layout2.default, null)
					),
					_react2.default.createElement(
						'div',
						{ className: 'homePageButtons' },
						_react2.default.createElement(_Button2.default, { route: '/standup', name: 'New Stand Up' }),
						_react2.default.createElement(_Button2.default, { route: '/retro', name: 'New Retro' })
					)
				);
			}
		}]);

		return HomePage;
	}(_react.Component);

	exports.default = HomePage;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Layout = function (_Component) {
	  _inherits(Layout, _Component);

	  function Layout() {
	    _classCallCheck(this, Layout);

	    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
	  }

	  _createClass(Layout, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "a",
	        { href: "/" },
	        _react2.default.createElement("img", { className: "homePageLogo", src: "/images/logo.png" })
	      );
	    }
	  }]);

	  return Layout;
	}(_react.Component);

	exports.default = Layout;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = function (_Component) {
		_inherits(Button, _Component);

		function Button() {
			_classCallCheck(this, Button);

			return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
		}

		_createClass(Button, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"a",
					{ href: this.props.route, className: "homepageButton" },
					this.props.name
				);
			}
		}]);

		return Button;
	}(_react.Component);

	exports.default = Button;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Layout = __webpack_require__(7);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Board = __webpack_require__(10);

	var _Board2 = _interopRequireDefault(_Board);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RetroPage = function (_Component) {
	  _inherits(RetroPage, _Component);

	  function RetroPage() {
	    _classCallCheck(this, RetroPage);

	    return _possibleConstructorReturn(this, (RetroPage.__proto__ || Object.getPrototypeOf(RetroPage)).apply(this, arguments));
	  }

	  _createClass(RetroPage, [{
	    key: 'render',
	    value: function render() {

	      var titles = ["Successes", "Struggles", "Suggestions", "Actions"];

	      return _react2.default.createElement(
	        'div',
	        { className: 'retroPageContent' },
	        _react2.default.createElement(
	          'div',
	          { className: 'logo' },
	          _react2.default.createElement(_Layout2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'retroBoard' },
	          _react2.default.createElement(_Board2.default, { titles: titles })
	        )
	      );
	    }
	  }]);

	  return RetroPage;
	}(_react.Component);

	exports.default = RetroPage;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Column = __webpack_require__(11);

	var _Column2 = _interopRequireDefault(_Column);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Board = function (_Component) {
	  _inherits(Board, _Component);

	  function Board() {
	    _classCallCheck(this, Board);

	    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
	  }

	  _createClass(Board, [{
	    key: 'render',
	    value: function render() {
	      var columns = this.props.titles.map(function (text, index) {
	        return _react2.default.createElement(_Column2.default, { title: text, key: index });
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: 'whiteBoard' },
	        columns
	      );
	    }
	  }]);

	  return Board;
	}(_react.Component);

	;

	exports.default = Board;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _ItemList = __webpack_require__(12);

	var _ItemList2 = _interopRequireDefault(_ItemList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Column = function (_Component) {
		_inherits(Column, _Component);

		function Column() {
			_classCallCheck(this, Column);

			return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
		}

		_createClass(Column, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'column' },
					_react2.default.createElement(
						'h1',
						null,
						this.props.title
					),
					_react2.default.createElement(
						'div',
						{ className: 'column-content' },
						_react2.default.createElement(_ItemList2.default, null)
					)
				);
			}
		}]);

		return Column;
	}(_react.Component);

	exports.default = Column;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Item = __webpack_require__(13);

	var _Item2 = _interopRequireDefault(_Item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ItemList = function (_Component) {
		_inherits(ItemList, _Component);

		function ItemList(props) {
			_classCallCheck(this, ItemList);

			var _this = _possibleConstructorReturn(this, (ItemList.__proto__ || Object.getPrototypeOf(ItemList)).call(this, props));

			_this.state = { data: [{ text: "I am the first item" }, { text: "I am the second item" }], value: '' };
			_this.handleSubmit = _this.handleSubmit.bind(_this);
			return _this;
		}

		_createClass(ItemList, [{
			key: 'handleSubmit',
			value: function handleSubmit(event) {
				event.preventDefault();
				var comment = this.refs.comment.value;
				this.setState({
					data: this.state.data.concat({ text: comment })
				});
				this.refs.comment.value = "";
			}
		}, {
			key: 'render',
			value: function render() {
				var items = this.state.data.map(function (item, index) {
					return _react2.default.createElement(
						_Item2.default,
						{ text: item.text, key: index },
						item.text
					);
				});
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'ul',
						{ className: 'list' },
						items
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'form',
							{ onSubmit: this.handleSubmit.bind(this) },
							_react2.default.createElement('input', { type: 'text', ref: 'comment' }),
							_react2.default.createElement('input', { type: 'submit', value: 'Add' })
						)
					)
				);
			}
		}]);

		return ItemList;
	}(_react.Component);

	exports.default = ItemList;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Item = function (_Component) {
	  _inherits(Item, _Component);

	  function Item(props) {
	    _classCallCheck(this, Item);

	    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

	    _this.state = {
	      clicks: 0
	    };
	    _this.onPlusClick = _this.onPlusClick.bind(_this);
	    return _this;
	  }

	  _createClass(Item, [{
	    key: "onPlusClick",
	    value: function onPlusClick(event) {
	      this.setState({
	        clicks: this.state.clicks + 1
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var image = _react2.default.createElement("img", { src: "/images/plus.png", onClick: this.onPlusClick, alt: "Plus", height: "20", width: "20" });
	      return _react2.default.createElement(
	        "li",
	        { className: "item" },
	        this.props.text,
	        image,
	        this.state.clicks
	      );
	    }
	  }]);

	  return Item;
	}(_react.Component);

	;

	exports.default = Item;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Layout = __webpack_require__(7);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Board = __webpack_require__(10);

	var _Board2 = _interopRequireDefault(_Board);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StandupPage = function (_Component) {
	  _inherits(StandupPage, _Component);

	  function StandupPage() {
	    _classCallCheck(this, StandupPage);

	    return _possibleConstructorReturn(this, (StandupPage.__proto__ || Object.getPrototypeOf(StandupPage)).apply(this, arguments));
	  }

	  _createClass(StandupPage, [{
	    key: 'render',
	    value: function render() {

	      var titles = ["I learned", "I want to learn", "I am blocked"];

	      return _react2.default.createElement(
	        'div',
	        { className: 'standupPageContent' },
	        _react2.default.createElement(
	          'div',
	          { className: 'logo' },
	          _react2.default.createElement(_Layout2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'standupBoard' },
	          _react2.default.createElement(_Board2.default, { titles: titles })
	        )
	      );
	    }
	  }]);

	  return StandupPage;
	}(_react.Component);

	exports.default = StandupPage;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var body = _ref.body,
	      title = _ref.title;

	  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <base href=\"/\" />\n        <title>" + title + "</title>\n      </head>\n\n     <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n\n     <script src=\"./dist/assets/bundle.js\"></script>\n    </html>\n  ";
	};

/***/ }
/******/ ]);
