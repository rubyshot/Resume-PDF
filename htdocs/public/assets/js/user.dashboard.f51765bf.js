(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user.dashboard"],{dc3f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"viewContainer"},[a("v-container",[a("v-row",[a("v-col",{attrs:{"align-self":"center",xs:"12","offset-xs":"0",sm:"10","offset-sm":"1",md:"8","offset-md":"2",lg:"6","offset-lg":"3",xl:"4","offset-xl":"4"}},[a("v-container",{staticClass:"pa-0"},[a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"4"}},[a("v-btn",{staticClass:"no-caps mb-3",attrs:{large:"",rounded:"",block:"",color:"primary"}},[a("v-icon",{staticClass:"mr-1",attrs:{size:"16"}},[t._v("mdi-file-pdf")]),t._v(" "+t._s(t.$t("download_pdf")))],1)],1)],1)],1),a("v-card",{attrs:{elevation:"14",outlined:!1}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[a("div",[a("v-card",{attrs:{elevation:"0",tile:"",color:"transparent"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"end"}},[a("v-col",{attrs:{"align-self":"start",cols:"12"}},[a("v-avatar",{staticClass:"ml-3",attrs:{color:"grey",size:"128"}},[a("v-img",{attrs:{src:t.$auth.user().avatar}})],1)],1),a("v-col",{staticClass:"py-0"},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title",domProps:{innerHTML:t._s(t.$auth.user().name)}}),a("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.$auth.user().bio)}})],1)],1)],1)],1),a("v-fade-transition",[s?a("v-overlay",{style:{"margin-top":null==t.$auth.user().cover?"0":"-184px"},attrs:{absolute:""}},[a("v-btn",{attrs:{to:{name:"user.profile"},color:"primary",rounded:""}},[a("v-icon",{staticClass:"mr-2",attrs:{size:"14"}},[t._v("mdi-pencil")]),t._v(" "+t._s(t.$t("edit_profile")))],1)],1):t._e()],1)],1)],1)]}}])}),a("v-divider"),a("v-card-actions",{staticClass:"pa-4"},[a("v-btn",{attrs:{color:"primary","x-large":"",rounded:"",block:"",to:{name:"user.experience"}}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-history")]),t._v(" "+t._s(t.$t("experience")))],1)],1),a("v-divider"),null!==t.resume&&Array.isArray(t.resume)&&t.resume.length>0?a("v-container",t._l(t.resume,(function(e,s){return a("v-row",{key:s,attrs:{dense:""}},[a("v-col",{attrs:{cols:"1"}},[a("div",{staticClass:"text-center d-flex align-start flex-column fill-height pa-1"},[a("div",{staticClass:"align-start flex-column"},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[a("v-btn",t._g({attrs:{color:"grey","x-small":"",icon:"",disabled:e.first},on:{click:function(a){return t.resumeAction("moveUp",e.uuid,t.resume[s-1].uuid)}}},o),[a("v-icon",[t._v("mdi-arrow-up")])],1)]}}],null,!0)},[a("span",[t._v(t._s(t.$t("move_up")))])])],1),a("div",{staticClass:"align-end flex-column mt-auto"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[a("v-btn",t._g({attrs:{color:"grey","x-small":"",icon:"",disabled:e.last},on:{click:function(a){return t.resumeAction("moveDown",e.uuid,t.resume[s+1].uuid)}}},o),[a("v-icon",[t._v("mdi-arrow-down")])],1)]}}],null,!0)},[a("span",[t._v(t._s(t.$t("move_down")))])])],1)])]),a("v-col",{attrs:{cols:"10"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var r=s.hover;return[a("v-card",{attrs:{color:e.color,elevation:r?12:2,href:e.url,target:"_blank"}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("v-card-title",{staticClass:"headline",domProps:{innerHTML:t._s(e.title)}}),a("v-card-text",{staticStyle:{"margin-top":"-16px"},domProps:{innerHTML:t._s(null!==e.description?e.description.replace(/(?:\r\n|\r|\n)/g,"<br />"):null)}})],1)]),a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:""}}):t._e()],1)],1)]}}],null,!0)})],1),a("v-col",{attrs:{cols:"1"}},[a("div",{staticClass:"text-center d-flex align-start flex-column fill-height pa-1"},[a("div",{staticClass:"align-start flex-column"},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(s){var r=s.on;return[a("v-btn",t._g({attrs:{color:"primary","x-small":"",icon:""},on:{click:function(a){return t.resumeAction("edit",e.uuid,null,e)}}},r),[a("v-icon",[t._v("mdi-pencil")])],1)]}}],null,!0)},[a("span",[t._v(t._s(t.$t("edit_link")))])])],1),a("div",{staticClass:"align-end flex-column mt-auto"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(s){var r=s.on;return[a("v-btn",t._g({attrs:{color:"red","x-small":"",icon:""},on:{click:function(a){return t.resumeAction("delete",e.uuid)}}},r),[a("v-icon",[t._v("mdi-delete")])],1)]}}],null,!0)},[a("span",[t._v(t._s(t.$t("delete_link")))])])],1)])])],1)})),1):t._e(),a("v-divider"),a("v-card-actions",{staticClass:"pa-4"},[a("v-btn",{attrs:{color:"primary","x-large":"",rounded:"",block:"",to:{name:"user.projects"}}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-briefcase-outline")]),t._v(" "+t._s(t.$t("projects")))],1)],1),a("v-divider"),null===t.resume||t.resumeLoading?a("v-overlay",{attrs:{absolute:""}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1):t._e()],1)],1)],1)],1)],1)},r=[],o={data:function(){return{locale:"en",key:0,resumeLoading:!1,resume:null}},created:function(){this.$vuetify.breakpoint.mdAndUp&&this.$store.dispatch("setDashboardDrawer",!0);var t=Intl.DateTimeFormat().resolvedOptions().locale||"en";t=this.$auth.check()?this.$auth.user().locale:t,this.locale=t,this.moment.locale(this.locale.substr(0,2)),this.getResume()},methods:{formatNumber:function(t){return new Intl.NumberFormat(this.locale.replace("_","-")).format(t)},resumeAction:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;arguments.length>3&&void 0!==arguments[3]&&arguments[3];"moveUp"!=t&&"moveDown"!=t||this.changeOrder(e,a)},getResume:function(){var t=this;this.axios.get("/user/resume",{params:{locale:this.$i18n.locale}}).then((function(e){t.resume=e.data,t.resumeLoading=!1}))},changeOrder:function(t,e){var a=this;this.resumeLoading=!0,this.axios.post("/user/resume-projects/change-order",{locale:this.$i18n.locale,uuid1:t,uuid2:e}).then((function(t){"success"===t.data.status&&(a.getResume(),a.$root.$snackbar(t.data.msg,{timeout:2e3}))})).catch((function(t){"error"===t.response.data.status&&a.$root.$snackbar(t.response.data.msg,{timeout:8e3}),a.resumeLoading=!1}))}}},i=o,n=a("2877"),l=a("6544"),c=a.n(l),u=a("8212"),d=a("8336"),v=a("b0af"),m=a("99d9"),f=a("62ad"),p=a("a523"),h=a("ce7e"),_=a("0789"),g=a("ce87"),b=a("132d"),x=a("adda"),C=a("da13"),y=a("5d23"),k=a("a797"),w=a("490a"),$=a("0fd9"),V=a("3a2f"),L=Object(n["a"])(i,s,r,!1,null,null,null);e["default"]=L.exports;c()(L,{VAvatar:u["a"],VBtn:d["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:f["a"],VContainer:p["a"],VDivider:h["a"],VFadeTransition:_["c"],VHover:g["a"],VIcon:b["a"],VImg:x["a"],VListItem:C["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VOverlay:k["a"],VProgressCircular:w["a"],VRow:$["a"],VTooltip:V["a"]})}}]);
//# sourceMappingURL=user.dashboard.f51765bf.js.map