module.exports=function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=3)}([function(t,r){t.exports=flarum.core.compat.extend},function(t,r){t.exports=flarum.core.compat["components/SignUpModal"]},function(t,r){t.exports=flarum.core.compat.app},function(t,r,e){"use strict";e.r(r);var n=e(2),o=e.n(n),a=e(0),i=e(1),u=e.n(i);o.a.initializers.add("nearata/flarum-ext-signup-confirm-password",(function(){Object(a.extend)(u.a.prototype,"oninit",(function(){this.confirmPassword=""})),Object(a.extend)(u.a.prototype,"fields",(function(t){var r=this;t.add("confirmPassword",m(".Form-group",[m("input.FormControl",{name:"confirmPassword",type:"password",placeholder:o.a.translator.trans("nearata-signup-confirm-password.forum.field_placeholder"),value:this.confirmPassword,oninput:function(t){return r.confirmPassword=t.target.value},disabled:this.loading})]),10)})),Object(a.extend)(u.a.prototype,"submitData",(function(t){t.confirmPassword=this.confirmPassword}))}))}]);
//# sourceMappingURL=forum.js.map