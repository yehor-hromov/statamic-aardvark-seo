!function(t){var e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a(a.s=0)}([function(t,e,a){t.exports=a(1)},function(t,e,a){"use strict";a.r(e);function i(t,e,a,i,n,r,s,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):n&&(l=o?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}var n=i({data:function(){var t="string"==typeof this.value?this.value.length:0;return{contentLength:t,validation:this.validateMeta(t)}},methods:{handleKeyUp:function(){this.contentLength=this.value&&this.value.length,this.validation=this.validateMeta(this.value&&this.value.length)}}},void 0,void 0,!1,null,null,null).exports,r=i({mixins:[Fieldtype,n],inject:["storeName"],methods:{generatePlaceholder:function(){var t=this.$store.state.publish[this.storeName];return"".concat(t.values.title," ").concat(this.meta.title_separator," ").concat(this.meta.site_name)},validateMeta:function(t){var e;switch(!0){case 0===t:e={step:"valid",caption:"You have not set a meta title, the value for the page title will be used."};break;case t<20:e={step:"warn",caption:"Your meta title could be longer."};break;case t>=20&&t<=70:e={step:"valid",caption:"Your meta title is a good length."};break;case t>70:e={step:"err",caption:"Your meta title is too long, <strong>the ideal length is between 20 and 70 characters.</strong>"}}return e}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"meta-field-validator__outer"},[a("div",{staticClass:"meta-field-validator__field-container"},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"input-text",attrs:{type:"text",name:t.name,id:t.id,placeholder:t.generatePlaceholder()},domProps:{value:t.value},on:{input:function(e){return t.update(e.target.value)},keyup:t.handleKeyUp}})]),t._v(" "),a("progress",{class:"meta-field-validator__progress meta-field-validator__progress--"+t.validation.step,attrs:{max:"70"},domProps:{value:t.contentLength}})]),t._v(" "),a("span",{staticClass:"meta-field-validator__caption",domProps:{innerHTML:t._s(t.validation.caption)}})])}),[],!1,null,null,null).exports,s=i({mixins:[Fieldtype,n],methods:{generatePlaceholder:function(){return this.config.placeholder||"No meta description has been set for this page, search engines will use a relevent body of text from the page content instead."},validateMeta:function(t){var e;switch(!0){case 0===t:e={step:"valid",caption:"You have not set a meta description for this page."};break;case t<50:e={step:"warn",caption:"Your meta description could be longer."};break;case t>=20&&t<=300:e={step:"valid",caption:"Your meta description is a good length."};break;case t>300:e={step:"err",caption:"Your meta description is too long, <strong>the ideal length is between 50 and 300 characters.</strong>"}}return e}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"meta-field-validator__outer"},[a("div",{staticClass:"meta-field-validator__field-container"},[a("textarea",{staticClass:"input-text",staticStyle:{"overflow-x":"hidden","overflow-wrap":"break-word",resize:"none"},attrs:{name:t.name,id:t.id,placeholder:t.generatePlaceholder()},domProps:{value:t.value},on:{input:function(e){return t.update(e.target.value)},keyup:t.handleKeyUp}}),t._v(" "),a("progress",{class:"meta-field-validator__progress meta-field-validator__progress--"+t.validation.step,attrs:{max:"300"},domProps:{value:t.contentLength}})]),t._v(" "),a("span",{staticClass:"meta-field-validator__caption",domProps:{innerHTML:t._s(t.validation.caption)}})])}),[],!1,null,null,null).exports,o=i({mixins:[Fieldtype],inject:["storeName"],computed:{previewParts:function(){var t=this.$store.state.publish[this.storeName].values,e=t.meta_title,a=t.meta_description,i=t.slug,n=t.title,r=this.meta,s=r.site_name,o=r.site_url,l=r.title_separator;return{title:e||"".concat(n," ").concat(l," ").concat(s),url:"".concat(o,"/").concat(i),description:a}}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"google-styles google-preview__preview z-depth-1"},[a("div",[a("span",{staticClass:"google-styles__title"},[t._v(t._s(this.previewParts.title))]),t._v(" "),a("span",{staticClass:"google-styles__link"},[t._v(t._s(this.previewParts.url))]),t._v(" "),a("p",{staticClass:"google-styles__description"},[t._v(t._s(this.previewParts.description))])])])}),[],!1,null,null,null).exports,l=i({mixins:[Listing],props:["initial-redirects","initial-columns","create-url"],data:function(){return{rows:this.initialRedirects,columns:this.initialColumns}},methods:{actionCompleted:function(){location.reload()}},computed:{}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.rows.length?a("data-list",{attrs:{columns:t.columns,rows:t.rows},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.filteredRows;return a("div",{staticClass:"card p-0 relative"},[a("data-list-bulk-actions",{attrs:{url:t.bulkActionsUrl},on:{started:t.actionStarted,completed:t.actionCompleted}}),t._v(" "),a("data-list-table",{attrs:{rows:i,"allow-bulk-actions":!0},scopedSlots:t._u([{key:"cell-source_url",fn:function(e){var i=e.row;return[a("a",{attrs:{href:i.edit_url}},[t._v(t._s(i.source_url))])]}},{key:"cell-is_active",fn:function(e){var a=e.row;return[t._v("\n                "+t._s(a.is_active?"Yes":"No")+"\n            ")]}},{key:"actions",fn:function(e){var i=e.row;return[a("dropdown-list",[a("dropdown-item",{attrs:{text:t.__("Edit"),redirect:i.edit_url}}),t._v(" "),a("dropdown-item",{staticClass:"warning",attrs:{text:t.__("Delete")},on:{click:function(e){t.$refs["deleter_"+i.id].confirm()}}},[a("resource-deleter",{ref:"deleter_"+i.id,attrs:{resource:i},on:{deleted:function(e){return t.removeRow(i)}}})],1)],1)]}}],null,!0)})],1)}}],null,!1,3192648496)}):a("div",{staticClass:"md:pt-8 max-w-2xl mx-auto"},[a("div",{staticClass:"w-full md:w-1/2"},[a("h1",{staticClass:"mb-4"},[t._v("Redirects")]),t._v(" "),a("p",{staticClass:"text-grey-70 leading-normal mb-4 text-lg antialiased"},[t._v("\n            Redirects are used to direct users to content which may have been removed or deleted.\n        ")]),t._v(" "),a("a",{staticClass:"btn-primary btn-lg",attrs:{href:this.createUrl}},[t._v("Create a redirect")])])])}),[],!1,null,null,null).exports,c=i({props:["title","action","blueprint","method","meta","values"],methods:{redirectOnSaved:function(){}}},(function(){var t=this.$createElement;return(this._self._c||t)("publish-form",{attrs:{title:this.title,action:this.action,blueprint:this.blueprint,meta:this.meta,method:this.method,values:this.values}})}),[],!1,null,null,null).exports;Statamic.booting((function(){Statamic.component("aardvark_seo_meta_title-fieldtype",r),Statamic.component("aardvark_seo_meta_description-fieldtype",s),Statamic.component("aardvark_seo_google_preview-fieldtype",o),Statamic.component("aardvark-manual-redirects-listing",l),Statamic.component("aardvark-redirects-publish-form",c)}))}]);