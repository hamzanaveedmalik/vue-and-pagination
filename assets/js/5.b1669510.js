(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(t,e,i){"use strict";var n=i(2),r=i(11),o=i(15),a=i(60),s=i(56),l=i(4),c=i(82).f,u=i(81).f,p=i(7).f,v=i(159).trim,f=n.Number,d=f,g=f.prototype,h="Number"==o(i(58)(g)),_="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var i,n,r,o=(e=_?e.trim():v(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var a,l=e.slice(2),c=0,u=l.length;c<u;c++)if((a=l.charCodeAt(c))<48||a>r)return NaN;return parseInt(l,n)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof f&&(h?l(function(){g.valueOf.call(i)}):"Number"!=o(i))?a(new d(y(e)),i,f):y(e)};for(var m,w=i(5)?c(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;w.length>A;A++)r(d,m=w[A])&&!r(f,m)&&p(f,m,u(d,m));f.prototype=g,g.constructor=f,i(8)(n,"Number",f)}},150:function(t,e,i){},151:function(t,e,i){},152:function(t,e,i){},153:function(t,e,i){},155:function(t,e,i){"use strict";var n=i(10),r=i(79)(!0);n(n.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(78)("includes")},156:function(t,e,i){"use strict";var n=i(10),r=i(157);n(n.P+n.F*i(158)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},157:function(t,e,i){var n=i(59),r=i(18);t.exports=function(t,e,i){if(n(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(r(t))}},158:function(t,e,i){var n=i(1)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},159:function(t,e,i){var n=i(10),r=i(18),o=i(4),a=i(160),s="["+a+"]",l=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(t,e,i){var r={},s=o(function(){return!!a[t]()||"​"!="​"[t]()}),l=r[t]=s?e(p):a[t];i&&(r[i]=l),n(n.P+n.F*s,"String",r)},p=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t};t.exports=u},160:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},161:function(t,e,i){var n=i(10);n(n.P,"Array",{fill:i(162)}),i(78)("fill")},162:function(t,e,i){"use strict";var n=i(43),r=i(80),o=i(57);t.exports=function(t){for(var e=n(this),i=o(e.length),a=arguments.length,s=r(a>1?arguments[1]:void 0,i),l=a>2?arguments[2]:void 0,c=void 0===l?i:r(l,i);c>s;)e[s++]=t;return e}},163:function(t,e,i){"use strict";var n=i(150);i.n(n).a},164:function(t,e,i){"use strict";var n=i(151);i.n(n).a},165:function(t,e,i){"use strict";var n=i(152);i.n(n).a},166:function(t,e,i){"use strict";var n=i(153);i.n(n).a},168:function(t,e,i){},169:function(t,e,i){"use strict";i(155),i(156),i(149),i(161);var n={props:{isDisabled:{type:Boolean,default:!1},type:{type:String,default:null},color:{type:String,default:null}},computed:{fill:function(){return this.isDisabled?"#a8a8a8":this.color},direction:function(){switch(this.type){case"prev":return'\n                     <svg  class="svg" width="12px" fill="'.concat(this.fill,'" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">\n                        <path\n                            d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">\n                        </path>\n                    </svg>');case"next":return'\n                    <svg width="12px" fill="'.concat(this.fill,'" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">\n                        <path\n                            d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">\n                        </path>\n                    </svg>');default:return null}}}},r=(i(163),i(0)),o=Object(r.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vsp-pagination__arrow",class:{"is-disabled":this.isDisabled,prev:"prev"===this.type,next:"next"===this.type},domProps:{innerHTML:this._s(this.direction)}})},[],!1,null,"6d69d83d",null);o.options.__file="arrow.vue";var a=o.exports,s={props:{page:{type:Number,default:null},pages:{type:Number,default:null},previous:{type:Array,default:[]},next:{type:Array,default:[]},color:{type:String,default:null},withSideArrows:{type:Boolean,default:!0}},components:{Arrow:a}},l=(i(164),Object(r.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsp-pagination__pages"},[t.withSideArrows?i("arrow",{staticClass:"transparent",attrs:{type:"prev",isDisabled:1===t.page,color:t.color},nativeOn:{click:function(e){t.page>1&&t.$emit("to",t.page-1)}}}):t._e(),t._v(" "),t._l(t.previous,function(e,n){return i("div",{key:"prev_"+n,staticClass:"vsp-pagination__pages__page",style:{color:t.color},on:{click:function(i){t.$emit("to",e)}}},[t._v("\n        "+t._s(e)+"\n    ")])}),t._v(" "),i("div",{staticClass:"vsp-pagination__pages__page is-active",style:{background:t.color}},[t._v(t._s(t.page))]),t._v(" "),t._l(t.next,function(e,n){return i("div",{key:"next_"+n,staticClass:"vsp-pagination__pages__page",style:{color:t.color},on:{click:function(i){t.$emit("to",e)}}},[t._v("\n        "+t._s(e)+"\n    ")])}),t._v(" "),t.withSideArrows?i("arrow",{staticClass:"transparent",attrs:{type:"next",isDisabled:t.page===t.pages,color:t.color},nativeOn:{click:function(e){t.page<t.pages&&t.$emit("to",t.page+1)}}}):t._e()],2)},[],!1,null,"4410d914",null));l.options.__file="pages.vue";var c=l.exports,u={props:{pages:{type:Number,default:0},page:{type:Number,default:1},withSideArrows:{type:Boolean,default:!0},color:{type:String,default:null},align:{type:String,default:"null"}},components:{Arrow:a}},p=(i(165),Object(r.a)(u,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsp-pagination__numbers",class:t.align},[t.withSideArrows?i("arrow",{staticClass:"transparent",attrs:{type:"prev",isDisabled:1===t.page,color:t.color},nativeOn:{click:function(e){t.page>1&&t.$emit("to",t.page-1)}}}):t._e(),t._v(" "),i("div",{staticClass:"vsp-pagination__numbers__state",style:{color:t.color}},[t._v(t._s(t.page)+" / "+t._s(t.pages))]),t._v(" "),t.withSideArrows?i("arrow",{staticClass:"transparent",attrs:{type:"next",isDisabled:t.page===t.pages,color:t.color},nativeOn:{click:function(e){t.page<t.pages&&t.$emit("to",t.page+1)}}}):t._e()],1)},[],!1,null,"6e3fc7fc",null));p.options.__file="numbers.vue";var v=p.exports,f={props:{items:{type:Array,default:function(){return[]}},limit:{type:Number,default:10},controlsOnTop:{type:Boolean,default:!1},controlsOnBottom:{type:Boolean,default:!0},controlsType:{type:String,default:"Pages"},controlsAlign:{type:String,default:"center"},from:{type:Number,default:1},useKeyboard:{type:Boolean,default:!0},value:{type:Number,default:null},color:{type:String,default:"#35495e"},sidePagesNumber:{type:Number,default:3},withSideArrows:{type:Boolean,default:!0}},components:{Pages:c,Numbers:v},data:function(){return{page:this.from||this.value||1}},computed:{scope:function(){return this.items.slice((this.page-1)*this.limit,this.page*this.limit)},pages:function(){var t=this.items;return Math.ceil((t instanceof Array?t.length:0)/this.limit)},previous:function(){for(var t=[],e=this.page-1;e>=this.page-this.sidePagesNumber;e--)e>=1&&t.push(e);return t.reverse()},next:function(){for(var t=[],e=this.page+1;e<=this.page+this.sidePagesNumber;e++)e<=this.pages&&t.push(e);return t},configuration:function(){return{page:this.page,pages:this.pages,previous:this.previous,next:this.next}}},methods:{follow:function(t){(this.next.includes(t)||this.previous.includes(t))&&(this.page=t)},keyboardEmitter:function(t){var e=t.which||t.keyCode;37===e&&this.useKeyboard&&this.follow(this.page-1),39===e&&this.useKeyboard&&this.follow(this.page+1)}},watch:{page:{immediate:!0,handler:function(t){this.$emit("input",t)}},value:{handler:function(t){this.page!==t&&(this.page=t)}},items:{handler:function(){this.page=1}}},mounted:function(){window.addEventListener("keydown",this.keyboardEmitter,!0)},beforeDestroy:function(){window.removeEventListener("keydown",this.keyboardEmitter,!0)}},d=(i(166),Object(r.a)(f,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsp-pagination"},[t.controlsOnTop?t._t("controls",[t._t("top-controls",[t.pages>1?i(t.controlsType,t._b({tag:"component",staticClass:"vsp-pagination__controls top",attrs:{color:t.color,withSideArrows:t.withSideArrows,align:t.controlsAlign},on:{to:t.follow}},"component",t.configuration,!1)):t._e()],null,t.configuration)],null,t.configuration):t._e(),t._v(" "),t._t("default",null,{scope:t.scope},t.configuration),t._v(" "),t.controlsOnBottom?t._t("controls",[t._t("bottom-controls",[t.pages>1?i(t.controlsType,t._b({tag:"component",staticClass:"vsp-pagination__controls bottom",attrs:{color:t.color,withSideArrows:t.withSideArrows,align:t.controlsAlign},on:{to:function(e){t.page=e}}},"component",t.configuration,!1)):t._e()],null,t.configuration)],null,t.configuration):t._e()],2)},[],!1,null,"e9bd9280",null));d.options.__file="container.vue";var g=d.exports;i.d(e,!1,function(){return c}),i.d(e,!1,function(){return v});e.a=g},172:function(t,e,i){"use strict";var n=i(168);i.n(n).a},174:function(t,e,i){"use strict";i.r(e);i(149);var n=i(169),r=[{title:"Mercury",year:1985,vin:"WAUSFAFL6AA782134",color:"Turquoise"},{title:"Mercury",year:2007,vin:"1N6AA0CC1FN553109",color:"Crimson"},{title:"Mercedes-Benz",year:2011,vin:"WBAUL7C56DV680789",color:"Red"},{title:"Mazda",year:1999,vin:"2G61N5S31F9668837",color:"Yellow"},{title:"Jeep",year:2007,vin:"WAULC58E92A398014",color:"Mauv"},{title:"Mercedes-Benz",year:1989,vin:"1GD02ZCG1BF735959",color:"Fuscia"},{title:"Buick",year:2009,vin:"TRUDD38J581439517",color:"Yellow"},{title:"Volkswagen",year:1987,vin:"JN1CV6EK5EM671257",color:"Turquoise"},{title:"GMC",year:2004,vin:"1D7CE3GK8AS004137",color:"Red"},{title:"Maserati",year:2006,vin:"WAUWGAFB4BN153052",color:"Mauv"},{title:"Hyundai",year:2010,vin:"1GYS4AEF3CR794910",color:"Puce"},{title:"Mazda",year:2003,vin:"3VW117AU9FM980956",color:"Goldenrod"},{title:"Chevrolet",year:1995,vin:"1G6DA8E57D0788074",color:"Green"},{title:"Mazda",year:1990,vin:"WAUFMAFC4EN069125",color:"Mauv"},{title:"MG",year:1977,vin:"WA1CGAFE4ED548952",color:"Indigo"},{title:"Ford",year:2013,vin:"1G6DV5EPXD0723658",color:"Puce"},{title:"Volkswagen",year:2001,vin:"WAUXG74F69N874674",color:"Orange"},{title:"Volkswagen",year:1984,vin:"1GD11ZCGXDF037618",color:"Mauv"},{title:"Ford",year:2010,vin:"1G6AB5RA9F0221924",color:"Pink"},{title:"Land Rover",year:2004,vin:"WBXPA73494W942119",color:"Teal"},{title:"Hummer",year:2010,vin:"3FAHP0GA1AR160330",color:"Aquamarine"},{title:"Dodge",year:1993,vin:"1FTMF1EW1AF033457",color:"Goldenrod"},{title:"Volkswagen",year:1996,vin:"5XXGM4A79CG816939",color:"Aquamarine"},{title:"Mazda",year:1995,vin:"TRUDD38J091005555",color:"Khaki"},{title:"Lotus",year:2005,vin:"3C3CFFCR5FT449425",color:"Green"},{title:"Suzuki",year:2007,vin:"1C4RDJAG8CC076095",color:"Violet"},{title:"Mitsubishi",year:2007,vin:"JN8AZ1MU1DW248231",color:"Maroon"},{title:"Chevrolet",year:1955,vin:"5UXFB33542L881590",color:"Fuscia"},{title:"Chevrolet",year:2007,vin:"WAUXD68D32A525898",color:"Yellow"},{title:"Volkswagen",year:2003,vin:"3D7JB1ET1BG484756",color:"Aquamarine"}],o={props:{limit:{type:Number,default:5},color:{type:String,default:"#35495e"},from:{type:Number,default:1}},name:"PaginationWithPages",components:{Pagination:n.a},data:function(){return{items:r}}},a=(i(172),i(0)),s=Object(a.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pagination-with-pages"},[i("pagination",t._b({scopedSlots:t._u([{key:"default",fn:function(e){var n=e.scope;return e.page,t._l(n,function(e,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"item__title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"item__meta"},[i("div",[t._v(t._s(e.year))]),t._v(" "),i("div",[t._v(t._s(e.vin))]),t._v(" "),i("div",[t._v(t._s(e.color))])])])})}}])},"pagination",{items:t.items,limit:t.limit,color:t.color,from:t.from},!1))],1)},[],!1,null,"1ec62c74",null);s.options.__file="PaginationWithPages.vue";e.default=s.exports}}]);