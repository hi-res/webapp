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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var App;

	App = (function() {
	  function App() {
	    var nav;
	    window.c = __webpack_require__(1);
	    c.enable = env.DEBUG;
	    window.app = this;

	    /*
	    		Expose view classes
	     */
	    this.views = {
	      'Home': __webpack_require__(2),
	      'About': __webpack_require__(3)
	    };

	    /*
	    		Start
	     */
	    nav = __webpack_require__(4);
	    nav.start();
	  }

	  return App;

	})();

	module.exports = $(function() {
	  return new App;
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var slice = [].slice;

	module.exports = {
	  enable: false,
	  clear: function() {
	    if ((typeof console !== "undefined" && console !== null) && (console.clear != null)) {
	      return console.clear();
	    }
	  },
	  log: function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    if (this.enable) {
	      if ((typeof console !== "undefined" && console !== null) && (console.log != null) && (console.log.apply != null)) {
	        return console.log.apply(console, args);
	      } else {
	        return console.log(args);
	      }
	    }
	  },
	  debug: function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    if (this.enable) {
	      if ((typeof console !== "undefined" && console !== null) && (console.debug != null) && (console.debug.apply != null)) {
	        return console.debug.apply(console, args);
	      } else {
	        return console.log(args);
	      }
	    }
	  },
	  info: function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    if (this.enable) {
	      if ((typeof console !== "undefined" && console !== null) && (console.info != null) && (console.info.apply != null)) {
	        return console.info.apply(console, args);
	      } else {
	        return console.log(args);
	      }
	    }
	  },
	  warn: function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    if (this.enable) {
	      if ((typeof console !== "undefined" && console !== null) && (console.warn != null) && (console.warn.apply != null)) {
	        return console.warn.apply(console, args);
	      } else {
	        return console.log(args);
	      }
	    }
	  },
	  error: function() {
	    var args;
	    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	    if (this.enable) {
	      if ((typeof console !== "undefined" && console !== null) && (console.error != null) && (console.error.apply != null)) {
	        return console.error.apply(console, args);
	      } else {
	        return console.log(args);
	      }
	    }
	  }
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var AppView, HomeView,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	AppView = __webpack_require__(5);

	module.exports = HomeView = (function(superClass) {
	  extend(HomeView, superClass);

	  function HomeView() {
	    this.destroy = bind(this.destroy, this);
	    c.log('view --> home');
	    this.bind();
	  }

	  HomeView.prototype.bind = function() {
	    return $(window).one('before:render', this.destroy);
	  };

	  HomeView.prototype.unbind = function() {};

	  HomeView.prototype.destroy = function() {
	    return this.unbind();
	  };

	  return HomeView;

	})(AppView);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var AboutView, AppView,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	AppView = __webpack_require__(5);

	module.exports = AboutView = (function(superClass) {
	  extend(AboutView, superClass);

	  function AboutView() {
	    this.destroy = bind(this.destroy, this);
	    c.log('view --> about');
	    this.bind();
	  }

	  AboutView.prototype.bind = function() {
	    return $(window).one('before:render', this.destroy);
	  };

	  AboutView.prototype.unbind = function() {};

	  AboutView.prototype.destroy = function() {
	    return this.unbind();
	  };

	  return AboutView;

	})(AppView);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Navigation, device, happens, router, utils, win,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	utils = __webpack_require__(6);

	win = __webpack_require__(7);

	device = __webpack_require__(8);

	router = __webpack_require__(9);

	happens = __webpack_require__(10);

	module.exports = new (Navigation = (function() {
	  Navigation.prototype.page = '';

	  function Navigation() {
	    this.url_changed = bind(this.url_changed, this);
	    this._rendered = bind(this._rendered, this);
	    var el, key, ref;
	    happens(this);
	    this.el = $('body');
	    this.ui = {
	      'main': 'main'
	    };
	    ref = this.ui;
	    for (key in ref) {
	      el = ref[key];
	      this.ui[key] = this.el.find(el);
	    }
	  }

	  Navigation.prototype.start = function() {
	    this._bind();
	    this._set_page_css();
	    this._rendered();
	    return router.on('url:changed', this.url_changed);
	  };


	  /*
	  	Bind all links
	   */

	  Navigation.prototype._bind = function() {
	    return this.el.find('a[href^="/"]').click((function(_this) {
	      return function(event) {
	        var $el;
	        event.preventDefault();
	        $el = $(event.currentTarget);
	        if ($el.attr('data-nobind')) {
	          return;
	        }
	        return router.go($el.attr('href'));
	      };
	    })(this));
	  };

	  Navigation.prototype._set_page_css = function() {
	    this.el.removeClass();
	    return this.el.addClass(env.BODY_CLASSES.join(' '));
	  };

	  Navigation.prototype._render = function(div) {
	    $(window).trigger('before:render');
	    this.ui.main.html($(div).find('#main').children());
	    document.title = $(div).find('title').text();
	    this._set_page_css();
	    this._rendered();
	    return this._bind();
	  };

	  Navigation.prototype._rendered = function() {
	    return $(window).trigger('after:render');
	  };


	  /*
	  	Handler for when the url changes
	   */

	  Navigation.prototype.url_changed = function(url) {
	    var div;
	    div = $('<div>');

	    /*
	    		Load the next page and re-render the content
	     */
	    return div.load(url, (function(_this) {
	      return function() {
	        var delay, el;
	        $(window).trigger('before:render');
	        if (device.firefox) {
	          el = $('body, html');
	        } else {
	          el = _this.el;
	        }
	        delay = 0.3;
	        if (el.scrollTop() > 0) {
	          TweenLite.to(el, delay, {
	            scrollTop: 0
	          });
	        } else {
	          delay = 0;
	        }
	        return utils.delay(delay, function() {
	          return _this._render(div);
	        });
	      };
	    })(this));
	  };

	  return Navigation;

	})());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var AppView;

	module.exports = AppView = (function() {
	  function AppView() {}

	  return AppView;

	})();


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  lerp: function(min, max, ratio) {
	    return min + ((max - min) * ratio);
	  },
	  delay: function(delay, func) {
	    return setTimeout(func, delay * 1000);
	  },
	  interval: function(interval, func) {
	    return setInterval(func, interval * 1000);
	  },
	  random: function(min, max) {
	    return min + Math.random() * (max - min);
	  },
	  radians: function(degrees) {
	    return degrees * (Math.PI / 180);
	  },
	  clamp: function(min, max, val) {
	    val = Math.min(max, val);
	    return val = Math.max(min, val);
	  }
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Window, happens, utils,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	happens = __webpack_require__(10);

	utils = __webpack_require__(6);

	Window = (function() {
	  Window.prototype.window = $(window);

	  Window.prototype.body = $('body');

	  Window.prototype.width = 0;

	  Window.prototype.height = 0;

	  Window.prototype.scroll_timer = null;

	  Window.prototype.scroll_top = 0;

	  Window.prototype.scroll_percent = 0;

	  function Window() {
	    this.keydown = bind(this.keydown, this);
	    this.scroll = bind(this.scroll, this);
	    this.resize = bind(this.resize, this);
	    happens(this);
	    this.window.on('resize', this.resize);
	    this.window.on('scroll', this.scroll);
	    this.window.on('keydown', this.keydown);
	    this.resize();
	  }

	  Window.prototype.resize = function() {
	    this.width = this.window.width();
	    this.height = this.window.height();
	    return this.emit('resize');
	  };

	  Window.prototype.scroll = function(event) {
	    var direction, percent, scroll_top;
	    clearTimeout(this.scroll_timer);
	    if (!this.body.hasClass('scrolling')) {
	      this.body.addClass('scrolling');
	    }
	    this.scroll_timer = setTimeout((function(_this) {
	      return function() {
	        return _this.body.removeClass('scrolling');
	      };
	    })(this), 100);
	    scroll_top = this.window.scrollTop();
	    if (scroll_top > this.scroll_top) {
	      direction = 'down';
	    } else {
	      direction = 'up';
	    }
	    this.scroll_top = scroll_top;
	    percent = scroll_top / (this.body[0].scrollHeight - this.height);
	    this.scroll_percent = utils.clamp(0, 1, percent);
	    this.emit('scroll', this.scroll_percent, this.scroll_top);
	    return event.preventDefault();
	  };

	  Window.prototype.keydown = function(event) {
	    var key;
	    key = event.keyCode;
	    switch (key) {
	      case 38:
	        key = 'up';
	        break;
	      case 40:
	        key = 'down';
	        break;
	      case 37:
	        key = 'left';
	        break;
	      case 39:
	        key = 'right';
	    }
	    return this.emit("keydown", key);
	  };

	  return Window;

	})();

	module.exports = new Window;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Device, bowser, isMobile;

	bowser = (__webpack_require__(11)).browser;

	isMobile = __webpack_require__(12);

	module.exports = new (Device = (function() {
	  function Device() {
	    var cls;
	    this.retina = window.devicePixelRatio >= 1.5;
	    this.ie = bowser.msie;
	    this.firefox = bowser.firefox;
	    this.ltie10 = bowser.msie && bowser.version < 10;
	    this.name = bowser.name;
	    this.version = bowser.version;
	    this.mobile = isMobile.phone;
	    this.tablet = isMobile.tablet;
	    this.handheld = isMobile.any;
	    if (this.ltie10) {
	      Modernizr.csstransforms = false;
	    }
	    cls = this.name.split(' ').join('_') + '_' + this.version.split('.').join('_');
	    $('html').addClass(cls);
	  }

	  return Device;

	})());


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var Router, happens,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	happens = __webpack_require__(10);

	module.exports = new (Router = (function() {
	  Router.prototype._url = String;

	  function Router() {
	    this.on_state_change = bind(this.on_state_change, this);
	    happens(this);
	    History.Adapter.bind(window, "statechange", this.on_state_change);
	    this._url = this.url().replace(window.location.href, '');
	  }

	  Router.prototype.on_state_change = function() {
	    var State;
	    State = History.getState();
	    this._url = this.url();
	    c.log('%c[router::on_state_change]', 'background:#000; color: #fff', this._url);
	    return this.emit('url:changed', this._url);
	  };

	  Router.prototype.url = function() {
	    return window.location.href.replace(window.location.origin, '');
	  };

	  Router.prototype.go = function(url) {
	    var title;
	    if (url === this.url) {
	      return;
	    }
	    title = document.title;
	    History.pushState(null, null, url);
	    return document.title = title;
	  };

	  Router.prototype.back = function() {
	    return History.back();
	  };

	  return Router;

	})());


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module constructor
	 * @param  {Object} target Target object to extends methods and properties into
	 * @return {Object}        Target after with extended methods and properties
	 */
	module.exports = function(target) {
	  target = target || {};
	  for(var prop in Happens)
	    target[prop] = Happens[prop];
	  return target;
	};



	/**
	 * Class Happens
	 * @type {Object}
	 */
	var Happens = {

	  /**
	   * Initializes event
	   * @param  {String} event Event name to initialize
	   * @return {Array}        Initialized event pool
	   */
	  __init: function(event) {
	    var tmp = this.__listeners || (this.__listeners = []);
	    return tmp[event] || (tmp[event] = []);
	  },

	  /**
	   * Adds listener
	   * @param  {String}   event Event name
	   * @param  {Function} fn    Event handler
	   */
	  on: function(event, fn) {
	    validate(fn);
	    this.__init(event).push(fn);
	  },

	  /**
	   * Removes listener
	   * @param  {String}   event Event name
	   * @param  {Function} fn    Event handler
	   */
	  off: function(event, fn) {
	    var pool = this.__init(event);
	    pool.splice(pool.indexOf(fn), 1);
	  },

	  /**
	   * Add listener the fires once and auto-removes itself
	   * @param  {String}   event Event name
	   * @param  {Function} fn    Event handler
	   */
	  once: function(event, fn) {
	    validate(fn);
	    var self = this, wrapper = function() {
	      self.off(event, wrapper);
	      fn.apply(this, arguments);
	    };
	    this.on(event, wrapper );
	  },

	  /**
	   * Emit some event
	   * @param  {String} event Event name -- subsequent params after `event` will
	   * be passed along to the event's handlers
	   */
	  emit: function(event /*, arg1, arg2 */ ) {
	    var i, pool = this.__init(event).slice(0);
	    for(i in pool)
	      pool[i].apply(this, [].slice.call(arguments, 1));
	  }
	};



	/**
	 * Validates if a function exists and is an instanceof Function, and throws
	 * an error if needed
	 * @param  {Function} fn Function to validate
	 */
	function validate(fn) {
	  if(!(fn && fn instanceof Function))
	    throw new Error(fn + ' is not a Function');
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Bowser - a browser detector
	  * https://github.com/ded/bowser
	  * MIT License | (c) Dustin Diaz 2014
	  */

	!function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports['browser'] = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	}('bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */

	  var t = true

	  function detect(ua) {

	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }

	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , result

	    if (/opera|opr/i.test(ua)) {
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/windows phone/i.test(ua)) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      , msie: t
	      , version: getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (/sailfish/i.test(ua)) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (/silk/i.test(ua)) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	      , version: versionIdentifier
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/(web|hpw)os/i.test(ua)) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (/tizen/i.test(ua)) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/safari/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      , version: versionIdentifier
	      }
	    }
	    else result = {}

	    // set webkit or gecko flag for browsers based on these engines
	    if (/(apple)?webkit/i.test(ua)) {
	      result.name = result.name || "Webkit"
	      result.webkit = t
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }

	    // set OS flags for platforms that have multiple browsers
	    if (android || result.silk) {
	      result.android = t
	    } else if (iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    }

	    // OS version extraction
	    var osVersion = '';
	    if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }

	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (tablet || iosdevice == 'ipad' || (android && (osMajorVersion == 3 || (osMajorVersion == 4 && !mobile))) || result.silk) {
	      result.tablet = t
	    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || result.blackberry || result.webos || result.bada) {
	      result.mobile = t
	    }

	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if ((result.msie && result.version >= 10) ||
	        (result.chrome && result.version >= 20) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        ) {
	      result.c = t
	    } else result.x = t

	    return result
	  }

	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')


	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;

	  return bowser
	});


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * isMobile.js v0.3.5
	 *
	 * A simple library to detect Apple phones and tablets,
	 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
	 * and any kind of seven inch device, via user agent sniffing.
	 *
	 * @author: Kai Mallea (kmallea@gmail.com)
	 *
	 * @license: http://creativecommons.org/publicdomain/zero/1.0/
	 */
	(function (global) {

	    var apple_phone         = /iPhone/i,
	        apple_ipod          = /iPod/i,
	        apple_tablet        = /iPad/i,
	        android_phone       = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, // Match 'Android' AND 'Mobile'
	        android_tablet      = /Android/i,
	        windows_phone       = /IEMobile/i,
	        windows_tablet      = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, // Match 'Windows' AND 'ARM'
	        other_blackberry    = /BlackBerry/i,
	        other_blackberry_10 = /BB10/i,
	        other_opera         = /Opera Mini/i,
	        other_firefox       = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, // Match 'Firefox' AND 'Mobile'
	        seven_inch = new RegExp(
	            '(?:' +         // Non-capturing group

	            'Nexus 7' +     // Nexus 7

	            '|' +           // OR

	            'BNTV250' +     // B&N Nook Tablet 7 inch

	            '|' +           // OR

	            'Kindle Fire' + // Kindle Fire

	            '|' +           // OR

	            'Silk' +        // Kindle Fire, Silk Accelerated

	            '|' +           // OR

	            'GT-P1000' +    // Galaxy Tab 7 inch

	            ')',            // End non-capturing group

	            'i');           // Case-insensitive matching

	    var match = function(regex, userAgent) {
	        return regex.test(userAgent);
	    };

	    var IsMobileClass = function(userAgent) {
	        var ua = userAgent || navigator.userAgent;

	        this.apple = {
	            phone:  match(apple_phone, ua),
	            ipod:   match(apple_ipod, ua),
	            tablet: match(apple_tablet, ua),
	            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
	        };
	        this.android = {
	            phone:  match(android_phone, ua),
	            tablet: !match(android_phone, ua) && match(android_tablet, ua),
	            device: match(android_phone, ua) || match(android_tablet, ua)
	        };
	        this.windows = {
	            phone:  match(windows_phone, ua),
	            tablet: match(windows_tablet, ua),
	            device: match(windows_phone, ua) || match(windows_tablet, ua)
	        };
	        this.other = {
	            blackberry:   match(other_blackberry, ua),
	            blackberry10: match(other_blackberry_10, ua),
	            opera:        match(other_opera, ua),
	            firefox:      match(other_firefox, ua),
	            device:       match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua)
	        };
	        this.seven_inch = match(seven_inch, ua);
	        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;
	        // excludes 'other' devices and ipods, targeting touchscreen phones
	        this.phone = this.apple.phone || this.android.phone || this.windows.phone;
	        // excludes 7 inch devices, classifying as phone or tablet is left to the user
	        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;

	        if (typeof window === 'undefined') {
	            return this;
	        }
	    };

	    var instantiate = function() {
	        var IM = new IsMobileClass();
	        IM.Class = IsMobileClass;
	        return IM;
	    };

	    if (typeof module != 'undefined' && module.exports && typeof window === 'undefined') {
	        //node
	        module.exports = IsMobileClass;
	    } else if (typeof module != 'undefined' && module.exports && typeof window !== 'undefined') {
	        //browserify
	        module.exports = instantiate();
	    } else if (true) {
	        //AMD
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (global.isMobile = instantiate()), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        global.isMobile = instantiate();
	    }

	})(this);


/***/ }
/******/ ]);