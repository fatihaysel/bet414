module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}({2:function(t,e){t.exports=flarum.extensions["fof-components"]},9:function(t,e,n){"use strict";n.r(e);var r=n(2),o=r.settings.SettingsModal,i=r.settings.items.BooleanItem,a=[["facebook","twitter","linkedin","reddit"],["whatsapp","telegram"],["vkontakte","odnoklassniki","my_mail"],["qq","qzone"]];app.initializers.add("fof/share-social",(function(){app.extensionSettings["fof-share-social"]=function(){return app.modal.show(o,{title:app.translator.trans("fof-share-social.admin.settings.title"),className:"FofShareSocialSettingsModal",size:"small",items:function(t){return[].concat(a.map((function(e){return e.map((function(e){return m(i,{setting:t,name:"fof-share-social.networks."+e},app.translator.trans("fof-share-social.lib.networks."+e))}))})))}})}}))}});
//# sourceMappingURL=admin.js.map