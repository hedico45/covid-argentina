(function(e){function t(t){for(var n,i,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"2bc97037"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/covid-argentina/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("v-app",[r("v-main",[r("router-view")],1)],1)],1)},o=[],i=(r("034f"),r("2877")),c={},s=Object(i["a"])(c,a,o,!1,null,null,null),u=s.exports,l=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("preCargaMap")],1)},p=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.series?r("div",[r("mapa",{attrs:{series:e.series}})],1):r("div",[e._v("\n        Data is loading\n    ")])])},v=[],h=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn-toggle",{attrs:{mandatory:""},model:{value:e.toggle_exclusive,callback:function(t){e.toggle_exclusive=t},expression:"toggle_exclusive"}},[r("v-btn",{on:{click:e.loadCasos}},[r("span",{staticClass:"hidden-sm-and-down"},[e._v("Casos")]),r("v-icon",{attrs:{right:""}},[e._v("mdi-emoticon-sick")])],1),r("v-btn",{on:{click:e.loadMuertos}},[r("span",{staticClass:"hidden-sm-and-down"},[e._v("Fallecidos")]),r("v-icon",{attrs:{right:""}},[e._v("mdi-emoticon-dead")])],1),r("v-btn",{on:{click:e.loadRecuperados}},[r("span",{staticClass:"hidden-sm-and-down"},[e._v("Recuperados")]),r("v-icon",{attrs:{right:""}},[e._v("mdi-emoticon-happy")])],1)],1),r("v-container",{attrs:{height:"750"}},[r("highcharts",{ref:"chart",staticClass:"hc",attrs:{constructorType:"mapChart",options:e.chartOptions,updateArgs:[!0,!1]}})],1)],1)},b=[],g=r("ea7f"),E=r.n(g),O=r("b6d1"),_=r.n(O),y=r("669a"),C=r.n(y),A=r("4e16");C()(E.a),_()(E.a);var w={name:"mapa",props:{series:{type:Array,required:!0}},data:function(){return{toggle_exclusive:void 0}},computed:{chartOptions:function(){return{chart:{height:"100%",map:A,backgroundColor:"rgba(255, 255, 255, 0.0)"},title:{text:""},legend:{enabled:!0},credits:{enabled:!1},colorAxis:{min:0,minColor:"#E6E7E8",maxColor:"#ff0000"},plotOptions:{map:{states:{hover:{color:"#808080",borderColor:"red"},select:{color:"#7db7ed",borderColor:"red"}}}},series:this.series}}},methods:{loadCasos:function(){this.$store.dispatch("GENERATE",{option:"casos"})},loadMuertos:function(){this.$store.dispatch("GENERATE",{option:"muertos"})},loadRecuperados:function(){this.$store.dispatch("GENERATE",{option:"recuperados"})}}},j=w,T=Object(i["a"])(j,m,b,!1,null,"9583ec5a",null),x=T.exports,R=r("2f62");function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){Object(h["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k={name:"preCargaMap",components:{mapa:x},data:function(){return{}},mounted:function(){this.getDataCovid()},methods:{getDataCovid:function(){this.$store.dispatch("FETCH_DATA_COVID")}},computed:P({},Object(R["b"])(["series"]))},D=k,F=Object(i["a"])(D,f,v,!1,null,"657f815d",null),N=F.exports,M={name:"home",components:{preCargaMap:N}},G=M,$=Object(i["a"])(G,d,p,!1,null,null,null),q=$.exports;n["default"].use(l["a"]);var I=new l["a"]({mode:"history",base:"/covid-argentina/",routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}}]}),L=(r("96cf"),r("3b8d")),U=(r("bc3a"),function(e,t){return[{boostThreshold:1,turboThreshold:0,name:t,data:e.map((function(e){return[e.code,e[t]]})),states:{hover:{color:"#BADA55"}},allAreas:!1,allowPointSelect:!0,dataLabels:{enabled:!0,color:"#FFFFFF",formatter:function(){var e=this.point.value;return e}},tooltip:{headerFormat:"{point.name}",pointFormat:"{point.value}"}}]}),V=(r("c5f6"),r("a481"),r("28a5"),r("7514"),r("02cc")),B=r.n(V),H=r("a18f"),J=r.n(H),z=[["ar","Argentina",11517,45974e3],["ar-tf","Tierra del Fuego",70,173432],["ar-ba","Buenos Aires",3227,17541141],["ar-sj","San Juan",192,781217],["ar-mz","Mendoza",252,1990338],["ar-nq","Neuquén",255,1261294],["ar-lp","La Pampa",106,358428],["ar-rn","Río Negro",149,747610],["ar-sl","San Luis",89,508328],["ar-cb","Córdoba",1326,3760450],["ar-ct","Catamarca",271,415438],["ar-lr","La Rioja",162,393531],["ar-sa","Salta",466,1424397],["ar-se","Santiago del Estero",195,978313],["ar-tm","Tucumán",797,1694656],["ar-cc","Chaco",319,1204541],["ar-fm","Formosa",91,605193],["ar-cn","Corrientes",389,1120801],["ar-er","Entre Ríos",251,1385961],["ar-ch","Chubut",97,618994],["ar-sf","Santa Fe",914,3536418],["ar-mn","Misiones",217,1261294],["ar-df","CABA",1417,3075646],["ar-sc","Santa Cruz",82,365698],["ar-jy","Jujuy",183,770881]],K=function(){var e=Object(L["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=COVID-19_pandemic_in_Argentina",e.next=3,J()(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",Q(n.parse.text["*"]));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Q(e){var t=B.a.load(e),r=t("#covid19-container").find("table tbody tr").map((function(e){var r=t(this).find("th").eq(0).find("a").attr("title");if(r){r=W(r.indexOf("Province")<0?"CABA":r.split("Province")[0]);var n=X(t(this).find("td").eq(0).text()),a=X(t(this).find("td").eq(1).text()),o=X(t(this).find("td").eq(2).text()),i=z.find((function(e){return e[1]==r}))[0],c=z.find((function(e){return e[1]==r}))[3];return{code:i,provincia:r,casos:n,muertos:a,recuperados:o,poblacion:c}}})).get();return r.filter((function(e){return e.casos}))}function W(e){return(e||"").replace(/^\s+|\s+$/g,"")}function X(e){return Number((e||"").replace(/[^\d]+/,""))}n["default"].use(R["a"]);var Y={data:null,covid:null},Z={series:function(e){return e.data},covid:function(e){return e.covid}},ee={FETCH_DATA_COVID_MUTATION:function(e,t){e.covid=t},GENERATE_CASOS:function(e){e.covid&&(e.data=U(e.covid,"casos"))},GENERATE_MUERTOS:function(e){e.covid&&(e.data=U(e.covid,"muertos"))},GENERATE_RECUPERADOS:function(e){e.covid&&(e.data=U(e.covid,"recuperados"))}},te={FETCH_DATA_COVID:function(){var e=Object(L["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,K();case 4:n=e.sent,r("FETCH_DATA_COVID_MUTATION",n),r("GENERATE_CASOS"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t){return e.apply(this,arguments)}return t}(),GENERATE:function(e,t){var r=e.commit,n=t.option;switch(console.log(n),n){case"casos":r("GENERATE_CASOS");break;case"muertos":r("GENERATE_MUERTOS");break;case"recuperados":r("GENERATE_RECUPERADOS");break}}},re=new R["a"].Store({state:Y,getters:Z,mutations:ee,actions:te}),ne=r("4452"),ae=r.n(ne),oe=r("d817"),ie=r.n(oe),ce=r("ce5b"),se=r.n(ce),ue=(r("bf40"),{theme:{dark:!0},icons:{iconfont:"mdi"}}),le=new se.a(ue);n["default"].use(se.a),n["default"].use(ae.a),ie()(E.a),n["default"].config.productionTip=!1,new n["default"]({vuetify:le,router:I,store:re,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.695fad6b.js.map