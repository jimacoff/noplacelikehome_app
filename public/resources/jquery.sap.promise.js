/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
(function(q){"use strict";var P=function(A){if(typeof(A)!="function"){throw new TypeError("Argument is not a function")}this._deferred=new q.Deferred();try{var t=this;A(function(v){b(t,v,true)},function(v){b(t,v,false)})}catch(e){b(this,e,false)}};P.prototype.then=function(o,O){var f=new P(_);this._deferred.then(d(o,f,true),d(O,f,false));return f};P.prototype["catch"]=function(o){return this.then(undefined,o)};P.all=function(p){return new P(function(r,R){if(!q.isArray(p)){R({});return}if(p.length==0){r([]);return}var f=false,v=new Array(p.length),C=0;function e(I){P.resolve(p[I]).then(function(o){if(!f){C++;v[I]=o;if(C==p.length){r(v)}}},function(o){if(!f){f=true;R(o)}})}for(var i=0;i<p.length;i++){e(i)}})};P.race=function(p){return new P(function(r,R){if(!q.isArray(p)){R({})}var f=false;for(var i=0;i<p.length;i++){P.resolve(p[i]).then(function(o){if(!f){f=true;r(o)}},function(o){if(!f){f=true;R(o)}})}})};P.resolve=function(o){return o instanceof P?o:c(new P(_),o)};P.reject=function(o){return b(new P(_),o,false)};function _(){}function a(o){return o&&o.then&&typeof(o.then)=="function"}function b(p,o,r){setTimeout(function(){if(a(o)&&r){c(p,o)}else{p._deferred[r?"resolve":"reject"](o)}},0);return p}function c(p,o){if(a(o)){var f=false;try{o.then(function(v){b(p,v,true);f=true},function(v){b(p,v,false);f=true})}catch(e){if(!f){b(p,e,false)}else{q.sap.log.debug("Promise: Error in then: "+e)}}}else{b(p,o,true)}return p}function d(A,p,r){return function(o){if(!A){b(p,o,r)}else{try{c(p,A(o))}catch(e){b(p,e,false)}}}}if(!window.Promise){window.Promise=P}if(window.sap&&window.sap.__ui5PublishPromisePolyfill){window._UI5Promise=P}})(jQuery);
