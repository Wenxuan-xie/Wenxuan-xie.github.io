(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["classifygirl"],{"2d0d":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"UniversalClassify"}},[i("van-tree-select",{attrs:{height:"100%",items:t.items,"active-id":t.activeId,"main-active-index":t.activeIndex},on:{"update:activeId":function(e){t.activeId=e},"update:active-id":function(e){t.activeId=e},"update:mainActiveIndex":function(e){t.activeIndex=e},"update:main-active-index":function(e){t.activeIndex=e}},scopedSlots:t._u([{key:"content",fn:function(){return[i("UniversalAllClassify",{directives:[{name:"show",rawName:"v-show",value:0===t.activeIndex,expression:"activeIndex===0"}],attrs:{Theme:t.$attrs.Theme,items:t.$attrs.items}}),i("ClassifyGeneralList",{directives:[{name:"show",rawName:"v-show",value:1===t.activeIndex,expression:"activeIndex===1"}],attrs:{HotList:t.$attrs.HotList}}),i("ClassifyGeneralList",{directives:[{name:"show",rawName:"v-show",value:2===t.activeIndex,expression:"activeIndex===2"}],attrs:{Finish:t.$attrs.Finish}}),i("ClassifyGeneralList",{directives:[{name:"show",rawName:"v-show",value:3===t.activeIndex,expression:"activeIndex===3"}],attrs:{DarkHorse:t.$attrs.DarkHorse}}),i("ClassifyGeneralList",{directives:[{name:"show",rawName:"v-show",value:4===t.activeIndex,expression:"activeIndex===4"}],attrs:{HotSearch:t.$attrs.HotSearch}})]},proxy:!0}])})],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"UniversalAllClassify"}},[i("GeneralSwipe",{staticStyle:{backgroundColor:"#ffffff"},attrs:{color:t.color,items:t.$attrs.items}}),i("UniversalAllClassifySon",{attrs:{Theme:t.$attrs.Theme}},[t._v(" 题材 ")])],1)},r=[],o=i("a494"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"UniversalAllClassifySon"}},[i("van-divider",{style:{color:"#999999",borderColor:"#999999",padding:"0 60px"}},[t._t("default")],2),i("ul",t._l(t.items,(function(e,s){return i("li",{key:s},[i("img",{attrs:{src:e.img}}),i("p",[t._v(" "+t._s(e.name)+" ")])])})),0)],1)},l=[],u={props:{Theme:{type:Array}},data:function(){return{items:[1,2,3,4,5,6,7,8,9,10,11,12]}},mounted:function(){this.Theme&&(this.items=this.Theme)},watch:{Theme:function(t){this.items=t}}},f=u,d=(i("de68"),i("2877")),m=Object(d["a"])(f,c,l,!1,null,null,null),h=m.exports,v={components:{GeneralSwipe:o["a"],UniversalAllClassifySon:h},data:function(){return{color:"#ffffff"}}},p=v,y=Object(d["a"])(p,n,r,!1,null,null,null),g=y.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"ClassifyGeneralList"}},[i("ul",t._l(t.items,(function(t,e){return i("ClassifyGeneralListSon",{key:e,attrs:{item:t}})})),1)])},x=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{attrs:{id:"ClassifyGeneralListSon"},on:{click:function(e){return t.AccessDetails(t.item.id)}}},[i("van-image",{attrs:{src:t.item.img}}),i("div",{staticClass:"text"},[i("div",{staticClass:"top"},[i("span",{staticClass:"name"},[t._v(t._s(t.item.title))]),i("span",{staticClass:"score"},[t._v(" "+t._s(t.item.ranking)+" ")])]),i("div",{staticClass:"bottom"},[i("span",{staticClass:"writer"},[t._v(t._s(t.item.minorCate))]),i("span",{staticClass:"popularity"},[t._v(t._s(t.item.retention)+"万热度")])])])],1)},w=[],C={props:{item:{type:Object}},methods:{AccessDetails:function(t){this.$store.commit("JudgeError"),this.$router.push({path:"/noveldetails",query:{id:t}})}}},_=C,H=(i("a47f"),Object(d["a"])(_,b,w,!1,null,null,null)),S=H.exports,I={components:{ClassifyGeneralListSon:S},props:{HotList:{type:Array},Finish:{type:Array},DarkHorse:{type:Array},HotSearch:{type:Array}},data:function(){return{items:[]}},mounted:function(){this.HotList&&(this.items=this.HotList),this.Finish&&(this.items=this.Finish),this.DarkHorse&&(this.items=this.DarkHorse),this.HotSearch&&(this.items=this.HotSearch)},watch:{HotList:function(t){this.items=t},Finish:function(t){this.items=t},DarkHorse:function(t){this.items=t},HotSearch:function(t){this.items=t}}},L=I,$=(i("8cd5"),Object(d["a"])(L,k,x,!1,null,null,null)),A=$.exports,G={components:{UniversalAllClassify:g,ClassifyGeneralList:A},data:function(){return{items:[{text:"全部分类",id:1},{text:"大热榜",id:2},{text:"完结榜",id:3},{text:"黑马榜",id:4},{text:"热搜榜",id:5}],activeId:1,activeIndex:0}}},U=G,D=(i("eae2"),Object(d["a"])(U,s,a,!1,null,null,null));e["a"]=D.exports},5950:function(t,e,i){},"63ca":function(t,e,i){},"80a7":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"ClassifyGirl"}},[i("UniversalClassify",{attrs:{Theme:t.Theme,HotList:t.HotList,Finish:t.Finish,DarkHorse:t.DarkHorse,HotSearch:t.HotSearch,items:t.items}})],1)},a=[],n=(i("b0c0"),i("ac1f"),i("1276"),i("2d0d")),r={components:{UniversalClassify:n["a"]},props:{ClassifyGirl:{type:String}},data:function(){return{items:[{img:"https://cdn.qimao.com/bookimg/zww/backendstatic/images/other/16062872009171063.jpg"},{img:"https://cdn.qimao.com/bookimg/zww/backendstatic/images/other/16062874639131325.jpg"},{img:"https://cdn.qimao.com/bookimg/zww/backendstatic/images/other/16062873627945760.jpg"}],Theme:[],Unify:["54d43437d47d13ff21cad58b","564eb8a9cf77e9b25056162d","54d43709fd6ec9ae04184aa5","5a684515fc84c2b8efaa9875"],HotList:[],Finish:[],DarkHorse:[],HotSearch:[]}},activated:function(){this.$store.commit("classifyOne"),this.$store.commit("Eliminate")},created:function(){var t=this;this.axios.get("categories").then((function(e){for(var i=0;i<e.data.female.length;i++){var s=e.data.female[i].bookCover[0].split("/"),a={img:unescape(s[2]),name:e.data.female[i].name};t.Theme.push(a)}})),this.traverse(this.Unify[0],this.HotList),this.traverse(this.Unify[1],this.Finish),this.traverse(this.Unify[2],this.DarkHorse),this.traverse(this.Unify[3],this.HotSearch)},methods:{traverse:function(t,e){this.axios.get("rank/".concat(t)).then((function(t){for(var i=0;i<21;i++){var s=t.data.ranking.books[i].cover.split("/"),a={id:t.data.ranking.books[i]._id,img:unescape(s[2]),title:t.data.ranking.books[i].title,minorCate:t.data.ranking.books[i].minorCate,retention:t.data.ranking.books[i].retentionRatio,ranking:i+1};e.push(a)}}))}},watch:{}},o=r,c=i("2877"),l=Object(c["a"])(o,s,a,!1,null,null,null);e["default"]=l.exports},"8cd5":function(t,e,i){"use strict";i("63ca")},"967f":function(t,e,i){},a47f:function(t,e,i){"use strict";i("5950")},a494:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"GeneralSwipe"}},[i("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:5e3,"indicator-color":"#ffffff"}},t._l(t.items,(function(e,s){return i("van-swipe-item",{key:s,style:{backgroundColor:t.color}},[i("img",{attrs:{src:e.img}})])})),1)],1)},a=[],n={props:{color:{type:String},items:{type:Array}},data:function(){return{}}},r=n,o=(i("c8ef"),i("2877")),c=Object(o["a"])(r,s,a,!1,null,null,null);e["a"]=c.exports},a95d:function(t,e,i){},b0c0:function(t,e,i){var s=i("83ab"),a=i("9bf2").f,n=Function.prototype,r=n.toString,o=/^\s*function ([^ (]*)/,c="name";s&&!(c in n)&&a(n,c,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},c8ef:function(t,e,i){"use strict";i("d9db")},d9db:function(t,e,i){},de68:function(t,e,i){"use strict";i("967f")},eae2:function(t,e,i){"use strict";i("a95d")}}]);
//# sourceMappingURL=classifygirl.04b9df0f.js.map