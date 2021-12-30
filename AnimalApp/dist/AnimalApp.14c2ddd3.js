// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"be0It":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "0395485714c2ddd3";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5gbLH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fishCard = require("./src/components/AnimalCard/fishCard");
var _fishCardDefault = parcelHelpers.interopDefault(_fishCard);
var _fishAPI = require("./src/components/APIquery/fishAPI");
var _fishAPIDefault = parcelHelpers.interopDefault(_fishAPI);
var _app = require("./src/components/App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _header = require("./src/components/Header/Header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _inputSearch = require("./src/components/Search/inputSearch");
var _inputSearchDefault = parcelHelpers.interopDefault(_inputSearch);
(async ()=>{
    const app = await _appDefault.default(_fishAPIDefault.default('http://acnhapi.com/v1/fish'), _fishCardDefault.default);
    const wrapper = document.getElementById('wrapper');
    wrapper.append(app);
})();
const query = async (api, card)=>{
    const app = await _appDefault.default(api, card);
    const wrapper = document.getElementById('wrapper');
    wrapper.removeChild(wrapper.lastChild);
    wrapper.append(app);
};
const searchContainer = _inputSearchDefault.default();
wrapper.prepend(searchContainer);
const header1 = _headerDefault.default();
wrapper.prepend(header1);
exports.default = query;

},{"./src/components/App":"1zoys","./src/components/Header/Header":"45XqP","@parcel/transformer-js/src/esmodule-helpers.js":"fEaB1","./src/components/Search/inputSearch":"cyeX9","./src/components/AnimalCard/fishCard":"1bVuj","./src/components/APIquery/fishAPI":"28Pe0"}],"1zoys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _animalCardList = require("./AnimalCard/AnimalCardList");
var _animalCardListDefault = parcelHelpers.interopDefault(_animalCardList);
const loader = document.querySelector('.loader');
const App = async (API, card)=>{
    loader.classList.remove('hidden');
    const wrapper = document.getElementById('wrapper');
    wrapper.lastChild.classList?.add('hidden');
    try {
        const container = document.createElement('div');
        const animalList = _animalCardListDefault.default({
            items: await API
        }, card);
        container.append(animalList);
        return container;
    } catch  {
        alert('Oops, Something Went Wrong');
    } finally{
        loader.classList.add('hidden');
        wrapper.lastChild.classList?.remove('hidden');
    }
};
exports.default = App;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fEaB1","./AnimalCard/AnimalCardList":"hQwnY"}],"fEaB1":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hQwnY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const AnimalCardList = (props, str)=>{
    const container = document.createElement('div');
    const cardItems = props.items.map((item)=>{
        return str(item);
    });
    container.append(...cardItems);
    container.classList.add('cardList');
    return container;
};
exports.default = AnimalCardList;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fEaB1"}],"45XqP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _animalApp = require("../../../AnimalApp");
var _animalAppDefault = parcelHelpers.interopDefault(_animalApp);
var _fishCard = require("../AnimalCard/fishCard");
var _fishCardDefault = parcelHelpers.interopDefault(_fishCard);
var _fossilsCard = require("../AnimalCard/fossilsCard");
var _fossilsCardDefault = parcelHelpers.interopDefault(_fossilsCard);
var _villagersCard = require("../AnimalCard/villagersCard");
var _villagersCardDefault = parcelHelpers.interopDefault(_villagersCard);
var _fishAPI = require("../APIquery/fishAPI");
var _fishAPIDefault = parcelHelpers.interopDefault(_fishAPI);
var _fossilsAPI = require("../APIquery/fossilsAPI");
var _fossilsAPIDefault = parcelHelpers.interopDefault(_fossilsAPI);
var _villagersAPI = require("../APIquery/villagersAPI");
var _villagersAPIDefault = parcelHelpers.interopDefault(_villagersAPI);
const header1 = ()=>{
    const header = document.createElement('header');
    const fish = document.createElement('button');
    const seaCreatures = document.createElement('button');
    const bugs = document.createElement('button');
    const fossils = document.createElement('button');
    const villagers = document.createElement('button');
    fish.innerText = 'Fish';
    seaCreatures.innerText = 'Sea Creatures';
    bugs.innerText = 'Bugs';
    fossils.innerText = 'Fossils';
    villagers.innerText = 'Villagers';
    fish.onclick = ()=>_animalAppDefault.default(_fishAPIDefault.default('http://acnhapi.com/v1/fish'), _fishCardDefault.default)
    ;
    villagers.onclick = ()=>_animalAppDefault.default(_villagersAPIDefault.default(), _villagersCardDefault.default)
    ;
    seaCreatures.onclick = ()=>_animalAppDefault.default(_fishAPIDefault.default('http://acnhapi.com/v1/sea'), _fishCardDefault.default)
    ;
    bugs.onclick = ()=>_animalAppDefault.default(_fishAPIDefault.default('http://acnhapi.com/v1/bugs'), _fishCardDefault.default)
    ;
    fossils.onclick = ()=>_animalAppDefault.default(_fossilsAPIDefault.default(), _fossilsCardDefault.default)
    ;
    header.append(fish, seaCreatures, bugs, fossils, villagers);
    return header;
};
exports.default = header1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fEaB1","../../../AnimalApp":"5gbLH","../AnimalCard/fishCard":"1bVuj","../APIquery/fishAPI":"28Pe0","../APIquery/villagersAPI":"eI5mx","../AnimalCard/villagersCard":"l9ufx","../AnimalCard/fossilsCard":"fQsTa","../APIquery/fossilsAPI":"bH8ez"}],"1bVuj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeToast = require("native-toast");
var _nativeToastDefault = parcelHelpers.interopDefault(_nativeToast);
const fishCard = (props)=>{
    const container = document.createElement('div');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const name = document.createElement('p');
    const location = document.createElement('p');
    const catchPhrase = document.createElement('p');
    const museumPhrase = document.createElement('p');
    const button = document.createElement('button');
    const price = document.createElement('p');
    img.src = props.src;
    name.setAttribute('name', '');
    button.innerText = 'Price';
    name.innerHTML = `<span>Name:  </span> ${props.name}`;
    location.innerHTML = `<span>Availability:  </span> ${props.location}`;
    catchPhrase.innerHTML = `<span>Catch-phrase:  </span> ${props.catchPhrase}`;
    museumPhrase.innerHTML = `<span>Museum-phrase:  </span> ${props.museumPhrase}`;
    div.append(name, location, catchPhrase, museumPhrase, price);
    container.append(img, div, button);
    container.classList.add('card');
    button.classList.add('card-buttons');
    button.onclick = ()=>{
        _nativeToastDefault.default({
            type: 'success',
            position: 'east',
            timeout: 3000,
            message: `Price: ${props.price}`
        });
    };
    return container;
};
exports.default = fishCard;

},{"native-toast":"alKD9","@parcel/transformer-js/src/esmodule-helpers.js":"fEaB1"}],"alKD9":[function(require,module,exports) {
'use strict';
function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var assign = _interopDefault(require('nano-assign'));
var prevToast = null;
var icons = {
    warning: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-alert-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line></svg>",
    success: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-check-circle\"><path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline></svg>",
    info: "<svg viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.25%\"><path d=\"M16 14 L16 23 M16 8 L16 10\" /><circle cx=\"16\" cy=\"16\" r=\"14\" /></svg>",
    error: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-alert-triangle\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"17\"></line></svg>"
};
var Toast = function Toast(ref) {
    var this$1 = this;
    if (ref === void 0) ref = {
    };
    var message = ref.message;
    if (message === void 0) message = '';
    var position = ref.position;
    if (position === void 0) position = 'south-east';
    var timeout = ref.timeout;
    if (timeout === void 0) timeout = 3000;
    var el1 = ref.el;
    if (el1 === void 0) el1 = document.body;
    var rounded = ref.rounded;
    if (rounded === void 0) rounded = false;
    var type = ref.type;
    if (type === void 0) type = '';
    var debug = ref.debug;
    if (debug === void 0) debug = false;
    var edge = ref.edge;
    if (edge === void 0) edge = false;
    var icon = ref.icon;
    if (icon === void 0) icon = true;
    var closeOnClick = ref.closeOnClick;
    if (closeOnClick === void 0) closeOnClick = false;
    var elements = ref.elements;
    if (elements === void 0) elements = [];
    if (prevToast) prevToast.destroy();
    this.message = message;
    this.position = position;
    this.el = el1;
    this.timeout = timeout;
    this.closeOnClick = closeOnClick;
    this.toast = document.createElement('div');
    this.toast.className = "native-toast native-toast-" + this.position;
    if (type) {
        this.toast.className += " native-toast-" + type;
        if (icon) this.message = "<span class=\"native-toast-icon-" + type + "\">" + (icons[type] || '') + "</span>" + this.message;
    }
    var messageElement = document.createElement('div');
    messageElement.className = 'native-toast-message';
    messageElement.innerHTML = this.message;
    [
        messageElement
    ].concat(elements).forEach(function(el) {
        this$1.toast.appendChild(el);
    });
    var isMobile = document.body.clientWidth < 768;
    if (edge || isMobile) this.toast.className += ' native-toast-edge';
    else if (rounded) this.toast.style.borderRadius = '33px';
    this.el.appendChild(this.toast);
    prevToast = this;
    this.show();
    if (!debug && timeout) this.hide();
    if (this.closeOnClick) this.toast.addEventListener('click', function() {
        this$1.destroy();
    });
};
Toast.prototype.show = function show() {
    var this$1 = this;
    setTimeout(function() {
        this$1.toast.classList.add('native-toast-shown');
    }, 300);
};
Toast.prototype.hide = function hide() {
    var this$1 = this;
    setTimeout(function() {
        this$1.destroy();
    }, this.timeout);
};
Toast.prototype.destroy = function destroy() {
    var this$1 = this;
    if (!this.toast) return;
    this.toast.classList.remove('native-toast-shown');
    setTimeout(function() {
        if (this$1.toast) {
            this$1.el.removeChild(this$1.toast);
            this$1.toast = null;
        }
    }, 300);
};
function toast(options) {
    return new Toast(options);
}
var loop = function() {
    toast[type1] = function(options) {
        return toast(assign({
            type: type1
        }, options));
    };
};
for (var type1 of [
    'success',
    'info',
    'warning',
    'error'
])loop();
module.exports = toast;

},{"nano-assign":"juuKO"}],"juuKO":[function(require,module,exports) {
/*!
 * nano-assign v1.0.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */ 'use strict';
var index = function(obj) {
    var arguments$1 = arguments;
    for(var i = 1; i < arguments.length; i++)// eslint-disable-next-line guard-for-in, prefer-rest-params
    for(var p in arguments[i])obj[p] = arguments$1[i][p];
    return obj;
};
module.exports = index;

},{}],"28Pe0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const fishAPI = async (url)=>{
    const response = await fetch(url);
    const data = await response.json();
    const values = Object.values(data);
    return values.map((item)=>{
        const name = Object.values(item.name);
        return {
            src: item.image_uri,
            name: name[0].charAt(0).toUpperCase() + name[0].slice(1),
            location: item.availability.location,
            catchPhrase: item['catch-phrase'],
            museumPhrase: item['museum-phrase'],
            price: item.price
        };
    });
};
exports.default = fishAPI;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fEaB1"}],"eI5mx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const villagersAPI = async ()=>{
    const response = await fetch('http://acnhapi.com/v1/villagers');
    const data = await response.json();
    const values = Object.values(data);
    return values.map((item)=>{
        const name = Object.values(item.name);
        return {
            src: item.image_uri,
            name: name[0].charAt(0).toUpperCase() + name[0].slice(1),
            saying: item.saying,
            gender: item.gender,
            species: item.species,
            personality: item.personality,
            birthdayString: item['birthday-string']
        };
    });
};
exports.default = villagersAPI;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fEaB1"}],"l9ufx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const villagersCard = (props)=>{
    const container = document.createElement('div');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const name = document.createElement('p');
    const saying = document.createElement('p');
    const gender = document.createElement('p');
    const species = document.createElement('p');
    const personality = document.createElement('p');
    const birthdayString = document.createElement('p');
    img.src = props.src;
    name.setAttribute('name', '');
    name.innerHTML = `<span>Name:  </span> ${props.name}`;
    saying.innerHTML = `<span>Saying:  </span> ${props.saying}`;
    gender.innerHTML = `<span>Gender:  </span> ${props.gender}`;
    species.innerHTML = `<span>Species:  </span> ${props.species}`;
    personality.innerHTML = `<span>Personality:  </span> ${props.personality}`;
    birthdayString.innerHTML = `<span>Birthday-string:  </span> ${props.birthdayString}`;
    div.append(name, gender, species, personality, birthdayString, saying);
    container.append(img, div);
    container.classList.add('card');
    return container;
};
exports.default = villagersCard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fEaB1"}],"fQsTa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeToast = require("native-toast");
var _nativeToastDefault = parcelHelpers.interopDefault(_nativeToast);
const fossilsCard = (props)=>{
    const container = document.createElement('div');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const name = document.createElement('p');
    const museumPhrase = document.createElement('p');
    const button = document.createElement('button');
    const price = document.createElement('p');
    img.src = props.src;
    name.setAttribute('name', '');
    button.innerText = 'Price';
    name.innerHTML = `<span>Name:  </span> ${props.name}`;
    museumPhrase.innerHTML = `<span>Museum-phrase:  </span> ${props.museumPhrase}`;
    div.append(name, museumPhrase, price);
    container.append(img, div, button);
    container.classList.add('card');
    button.classList.add('card-buttons');
    button.onclick = ()=>{
        _nativeToastDefault.default({
            type: 'success',
            position: 'east',
            timeout: 3000,
            message: `Price: ${props.price}`
        });
    };
    return container;
};
exports.default = fossilsCard;

},{"native-toast":"alKD9","@parcel/transformer-js/src/esmodule-helpers.js":"fEaB1"}],"bH8ez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const fossilsAPI = async ()=>{
    const response = await fetch('http://acnhapi.com/v1/fossils');
    const data = await response.json();
    const values = Object.values(data);
    return values.map((item)=>{
        const name = Object.values(item.name);
        return {
            src: item.image_uri,
            name: name[0].charAt(0).toUpperCase() + name[0].slice(1),
            museumPhrase: item['museum-phrase'],
            price: item.price
        };
    });
};
exports.default = fossilsAPI;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fEaB1"}],"cyeX9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const inputSearch = ()=>{
    const container = document.createElement('div');
    const input = document.createElement('input');
    const button = document.createElement('button');
    button.innerText = 'Search';
    input.placeholder = 'Enter name to search...';
    input.oninput = ()=>{
        const val = input.value.trim().toLowerCase();
        const elements = document.querySelectorAll('p[name]');
        if (val !== '') elements.forEach((item)=>{
            if (item.innerText.toLowerCase().search(val) === -1) item.closest('.card').classList.add('hidden');
            else item.classList.remove('hidden');
        });
        else elements.forEach((item)=>{
            item.closest('.card').classList.remove('hidden');
        });
    };
    container.append(input, button);
    container.classList.add('search');
    return container;
};
exports.default = inputSearch;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fEaB1"}]},["be0It","5gbLH"], "5gbLH", "parcelRequire890e")

//# sourceMappingURL=AnimalApp.14c2ddd3.js.map
