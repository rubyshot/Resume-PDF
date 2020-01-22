(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user.profile"],{"0798":function(e,t,r){"use strict";r("0c18");var a=r("10d2"),o=r("afdd"),s=r("9d26"),i=r("f2e7"),n=r("7560"),l=r("2b0e"),c=l["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),u=r("58df"),d=r("d9bd");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t["a"]=Object(u["a"])(a["a"],i["a"],c).extend({name:"v-alert",props:{border:{type:String,validator:function(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var e={staticClass:"v-alert__border",class:h({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible:function(){var e=this;if(!this.dismissible)return null;var t=this.iconColor;return this.$createElement(o["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return e.isActive=!1}}},[this.$createElement(s["a"],{props:{color:t}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(s["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var e=f({},a["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(e["v-alert--border-".concat(this.border)]=!0),e},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||n["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(d["a"])("outline","outlined",this)},methods:{genWrapper:function(){var e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var e={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(e){var t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},"0c18":function(e,t,r){},"7c54":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"viewContainer"},[r("v-container",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-toolbar",{attrs:{tabs:"",flat:""},scopedSlots:e._u([{key:"extension",fn:function(){return[r("v-tabs",{attrs:{"show-arrows":""},model:{value:e.selected_tab,callback:function(t){e.selected_tab=t},expression:"selected_tab"}},[r("v-tab",{attrs:{href:"#page"}},[e._v(" "+e._s(e.$t("profile"))+" ")]),r("v-tab",{attrs:{href:"#localization"}},[e._v(" "+e._s(e.$t("localization"))+" ")]),r("v-tab",{attrs:{href:"#login"}},[e._v(" "+e._s(e.$t("login"))+" ")])],1)]},proxy:!0}])},[r("v-toolbar-title",[e._v(e._s(e.$t("profile")))]),r("v-spacer")],1),r("ValidationObserver",{ref:"form1",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.invalid;return[r("v-form",{attrs:{model:e.form1,id:"form1","lazy-validation":"",autocomplete:"off",method:"post","accept-charset":"UTF-8",enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.submitForm("form1")}}},[r("v-divider"),r("v-card-text",[r("v-alert",{staticClass:"mb-4",attrs:{value:e.form1.has_error&&!e.form1.success,type:"error"}},["registration_validation_error"===e.form1.error?r("span",[e._v(e._s(e.$t("server_error")))]):"demo"===e.form1.error?r("span",[e._v("This is a demo user. You can't update or delete anything this account. If you want to test all user features, sign up with a new account.")]):r("span",[e._v(e._s(e.$t("correct_errors")))])]),r("v-alert",{staticClass:"mb-4",attrs:{value:e.form1.success,type:"success"}},[e._v(" "+e._s(e.$t("update_success"))+" ")]),r("v-tabs-items",{attrs:{touchless:!1},model:{value:e.selected_tab,callback:function(t){e.selected_tab=t},expression:"selected_tab"}},[r("v-tab-item",{attrs:{value:"page"}},[r("v-row",[r("v-col",{staticClass:"py-0 my-0",attrs:{cols:"6"}},[r("v-subheader",{domProps:{innerHTML:e._s(e.$t("avatar")+" <small class='ml-2'>(512 x 512px)</small>")}}),r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.hover;return[r("v-avatar",{staticClass:"mb-5",attrs:{size:"150"}},[r("v-img",{attrs:{src:e.form1.avatar_media_url}},[r("v-fade-transition",[a?r("v-overlay",{attrs:{absolute:""}},[r("v-btn-toggle",{attrs:{rounded:""}},[r("v-btn",{attrs:{"x-small":"",color:"primary",rounded:""},on:{click:function(t){return e.pickFile("avatar")}}},[r("v-icon",{staticClass:"mr-1",attrs:{size:"14"}},[e._v("mdi-upload")]),e._v(" "+e._s(e.$t("upload")))],1),e.showDeleteAvatar?r("v-btn",{attrs:{"x-small":"",color:"red",rounded:""},on:{click:function(t){e.form1.avatar_media_url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9JREFUeNpiuHbtGkCAAQAFCAKDZcGh3gAAAABJRU5ErkJggg==",e.form1.avatar_media_changed=!0,e.showDeleteAvatar=!1}}},[r("v-icon",{attrs:{size:"14"}},[e._v("mdi-close")])],1):e._e()],1)],1):e._e()],1)],1)],1)]}}],null,!0)}),r("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"avatar",name:"avatar",accept:"image/*"},on:{change:e.onFilePicked}})],1)],1),r("x-text-field",{ref:"form1.name",attrs:{id:"form1.name",label:e.$t("name"),rules:"required|min:2|max:64"},model:{value:e.form1.name,callback:function(t){e.$set(e.form1,"name",t)},expression:"form1.name"}}),r("x-text-field",{ref:"form1.job_title",attrs:{id:"form1.job_title",label:e.$t("job_title"),name:e.$t("job_title"),rules:"nullable|max:250"},model:{value:e.form1.job_title,callback:function(t){e.$set(e.form1,"job_title",t)},expression:"form1.job_title"}})],1),r("v-tab-item",{attrs:{value:"localization"}},[r("x-autocomplete",{attrs:{items:e.locales,"item-value":"0","item-text":"1",label:e.$t("locale"),name:e.$t("locale"),rules:"required",hint:e.$t("locale_hint"),"persistent-hint":!0},model:{value:e.form1.locale,callback:function(t){e.$set(e.form1,"locale",t)},expression:"form1.locale"}}),r("x-autocomplete",{attrs:{items:e.timezones,"item-value":"0","item-text":"1",label:e.$t("timezone"),name:e.$t("timezone"),rules:"required"},model:{value:e.form1.timezone,callback:function(t){e.$set(e.form1,"timezone",t)},expression:"form1.timezone"}})],1),r("v-tab-item",{attrs:{value:"login"}},[r("x-text-field",{ref:"form1.email",attrs:{type:"email",id:"form1.email",label:e.$t("email_address"),rules:"required|max:64|email"},model:{value:e.form1.email,callback:function(t){e.$set(e.form1,"email",t)},expression:"form1.email"}}),r("x-password",{ref:"form1.new_password",attrs:{id:"form1.new_password",label:e.$t("change_password"),name:e.$t("password"),rules:"min:8|max:24",hint:e.$t("leave_empty_for_no_change"),"persistent-hint":!0},model:{value:e.form1.new_password,callback:function(t){e.$set(e.form1,"new_password",t)},expression:"form1.new_password"}})],1)],1),r("x-password",{ref:"form1.current_password",attrs:{id:"form1.current_password",label:e.$t("current_password"),name:e.$t("current_password"),rules:"required|min:8|max:24"},model:{value:e.form1.current_password,callback:function(t){e.$set(e.form1,"current_password",t)},expression:"form1.current_password"}})],1),r("v-card-actions",{staticClass:"mx-2"},[r("v-spacer"),r("v-btn",{staticClass:"mb-2",attrs:{color:"primary",large:"",loading:e.form1.loading,disabled:e.form1.loading||a,type:"submit"}},[e._v(e._s(e.$t("update")))])],1)],1)]}}])})],1)],1)],1)],1)],1)},o=[],s=r("a34a"),i=r.n(s);function n(e,t,r,a,o,s,i){try{var n=e[s](i),l=n.value}catch(c){return void r(c)}n.done?t(l):Promise.resolve(l).then(a,o)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var s=e.apply(t,r);function i(e){n(s,a,o,i,l,"next",e)}function l(e){n(s,a,o,i,l,"throw",e)}i(void 0)}))}}var c={data:function(){return{activeFilePickerId:null,showDeleteAvatar:!1,showDeleteCover:!1,selected_tab:"page",locales:[],timezones:[],currencies:[],form1:{loading:!1,name:this.$auth.user().name,job_title:this.$auth.user().job_title,email:this.$auth.user().email,avatar_media_url:this.$auth.user().avatar,avatar_media_changed:!1,locale:this.$auth.user().locale,timezone:this.$auth.user().timezone,new_password:null,current_password:null,has_error:!1,error:null,success:!1}}},mounted:function(){var e=this;this.axios.get("/localization/locales",{params:{locale:this.$i18n.locale}}).then((function(t){e.locales=e.$_.toPairs(t.data)})),this.axios.get("/localization/timezones",{params:{locale:this.$i18n.locale}}).then((function(t){e.timezones=e.$_.toPairs(t.data)})),this.$refs["form1.current_password"].validate()},created:function(){this.showDeleteAvatar=!this.$_.startsWith(this.form1.avatar_media_url,"data:image/png;base64"),this.showDeleteCover=null!=this.form1.cover_media_url},methods:{submitForm:function(e){var t=this;return l(i.a.mark((function r(){return i.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs[e].reset(),t[e].success=!1,t[e].has_error=!1,t[e].loading=!0,t.updateProfile(e);case 5:case"end":return r.stop()}}),r)})))()},updateProfile:function(e){var t=this,r=this[e],a={headers:{"content-type":"multipart/form-data"}},o=Object.assign({},this.form1);o.avatar_media_url=null;var s=new FormData(document.getElementById("form1"));for(var i in o)s.append(i,o[i]);this.axios.post("/auth/profile",s,a).then((function(a){"success"===a.data.status&&(r.success=!0,r.new_password=null,r.current_password=null,t.$nextTick((function(){return t.$refs[e].reset()})),t.$auth.user(a.data.user),t.form1.avatar_media_url=t.$auth.user().avatar)})).catch((function(a){if(r.has_error=!0,"error"===a.response.data.status){"undefined"!==typeof a.response.data.error&&(r.error=a.response.data.error),t.errorMsg=a.response.data.error;var o=a.response.data.errors||[];for(var s in o)t.$refs[e+"."+s].applyResult({errors:o[s],valid:!1,failedRules:{}})}})).finally((function(){r.loading=!1}))},pickFile:function(e){this.activeFilePickerId=e,document.getElementById(e).click()},onFilePicked:function(e){var t=this,r=e.target.files;if(void 0!==r[0]){if(r[0].name.lastIndexOf(".")<=0)return;var a=new FileReader;a.readAsDataURL(r[0]),a.addEventListener("load",(function(){switch(t.form1[t.activeFilePickerId+"_media_url"]=a.result,t.form1[t.activeFilePickerId+"_media_file"]=r[0],t.form1[t.activeFilePickerId+"_media_changed"]=!0,t.activeFilePickerId){case"avatar":t.showDeleteAvatar=!0;break}}))}else this.form1[this.activeFilePickerId+"_media_file"]="",this.form1[this.activeFilePickerId+"_media_url"]="",this.form1[this.activeFilePickerId+"_media_changed"]=!0}},computed:{app:function(){return this.$store.getters.app}}},u=c,d=r("2877"),m=r("6544"),f=r.n(m),h=r("0798"),v=r("8212"),p=r("8336"),_=r("a609"),b=r("b0af"),g=r("99d9"),w=r("62ad"),$=r("a523"),y=r("ce7e"),x=r("0789"),A=r("4bd4"),k=r("ce87"),C=r("132d"),P=r("adda"),B=r("a797"),V=r("0fd9"),O=r("2fa4"),j=r("e0c7"),F=r("71a3"),I=r("c671"),z=r("fe57"),D=r("aac8"),S=r("71d9"),T=r("2a7f"),E=Object(d["a"])(u,a,o,!1,null,null,null);t["default"]=E.exports;f()(E,{VAlert:h["a"],VAvatar:v["a"],VBtn:p["a"],VBtnToggle:_["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VCol:w["a"],VContainer:$["a"],VDivider:y["a"],VFadeTransition:x["c"],VForm:A["a"],VHover:k["a"],VIcon:C["a"],VImg:P["a"],VOverlay:B["a"],VRow:V["a"],VSpacer:O["a"],VSubheader:j["a"],VTab:F["a"],VTabItem:I["a"],VTabs:z["a"],VTabsItems:D["a"],VToolbar:S["a"],VToolbarTitle:T["b"]})},a34a:function(e,t,r){e.exports=r("96cf")}}]);
//# sourceMappingURL=user.profile.3e634095.js.map