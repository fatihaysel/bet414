module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},,function(t,e){t.exports=flarum.core.compat.app},,,,,function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},,function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),u=n(0),i=n(7),a=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.className=function(){return"ImgurUploadSettingsModal Modal--small"},n.title=function(){return app.translator.trans("imgur-upload.admin.settings.title")},n.form=function(){return[m("div",{className:"Form-group"},m("label",null,"Imgur Client ID"),m("input",{className:"FormControl",bidi:this.setting("imgur-upload.client-id")}))]},e}(n.n(i).a);o.a.initializers.add("imgur-upload",(function(){o.a.extensionSettings["matteocontrini-imgur-upload"]=function(){return o.a.modal.show(a)}}))}]);
//# sourceMappingURL=admin.js.map