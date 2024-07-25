var uhyphen = (function (exports) {
                             'use strict';

                             var index = (function (camel) {
                               return camel.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z0-9]+)([A-Z]))/g, '$2$5-$3$6').toLowerCase();
                             });

                             exports["default"] = index;

                             Object.defineProperty(exports, '__esModule', { value: true });

                             return exports;

})({}).default;
