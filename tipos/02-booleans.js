"use strict";
var index = (function () {
    var isSuperman = true;
    var isBatman = false;
    console.log({ isBatman: isBatman });
    isSuperman = true && false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
//# sourceMappingURL=02-booleans.js.map