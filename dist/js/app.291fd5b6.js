(function(){"use strict";var t={4306:function(t,e,i){var s=i(6369),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content",attrs:{id:"app"}},[e("div",{staticClass:"form"},[e("div",{staticClass:"content_head"},[e("h1",[t._v("Актуальное")]),e("div",{staticClass:"sliderPages"},t._l(t.sliderLength,(function(i){return e("div",{key:i},[i===t.pages[0].id?e("div",[e("span",{staticClass:"activeSpan",on:{click:function(e){return t.parentMethodTakeSlide(i)}}})]):e("div",[e("span",{on:{click:function(e){return t.parentMethodTakeSlide(i)}}})])])})),0),e("span",[e("button",{on:{click:function(e){return t.parentMethodSlideNext()}}},[t._v("ᐸ")]),e("button",{on:{click:function(e){return t.parentMethodSlideBack()}}},[t._v("ᐳ")])])]),e("Custom_slider",{ref:"Custom_slider"})],1)])},r=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"slider"},t._l(t.slides,(function(t,i){return e("div",{key:i,staticClass:"slide"},[e("Custom_slide",{attrs:{date:t.date,title:t.title,info:t.info,photo_url:t.photo_url}})],1)})),0)},l=[],u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"slideTool"},[e("img",{attrs:{src:t.photo_url,alt:t.info}}),e("p",[t._v(t._s(t.date))]),e("h3",{staticClass:"toolName"},[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.info))])])},a=[],d={name:"Custom_slide",props:{date:{type:String,default:null},title:{type:String,default:null},info:{type:String,default:null},photo_url:{type:String,default:null}}},c=d,f=i(1001),h=(0,f.Z)(c,u,a,!1,null,"37b7680a",null),p=h.exports,m={name:"Custom_slider",components:{Custom_slide:p},data:()=>({slides:[]}),mounted(){this.slides.push({id:1,date:"17.07.2022",title:"Ким и Валерия Брейтбурги написали книгу про искусство",info:"Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…",photo_url:"/images/empty_photo.png"},{id:2,date:"12.07.2022",title:"Юрий Колокольников пытается спасти Землю в клипе «Космические силы»",info:"Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года.",photo_url:"/images/empty_photo.png"},{id:3,date:"14.06.2022",title:"BTS получили четыре награды MTV EMA",info:"BTS получили четыре награды MTV EMA\n27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г.",photo_url:"/images/empty_photo.png"},{id:4,date:"12.04.2022 ",title:"Открытие сезона «Ла Скала» отменено",info:"Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».",photo_url:"/images/empty_photo.png"})},methods:{slideNext(){this.slides.unshift(this.slides[this.slides.length-1]),this.slides.pop()},slideBack(){this.slides.push(this.slides[0]),this.slides.shift()},slideClick(t){this.slides.unshift(this.slides[t]),this.slides.pop()}}},_=m,v=(0,f.Z)(_,o,l,!1,null,"95be2d2a",null),g=v.exports,C={name:"App",components:{Custom_slider:g},data:()=>({currentTime:5e13,sliderLength:0,pages:[]}),methods:{parentMethodSlideNext(){this.$refs.Custom_slider.slideNext()},parentMethodSlideBack(){this.$refs.Custom_slider.slideBack()},parentMethodTakeSlide(t){this.$refs.Custom_slider.slideClick(t)},startTimer(){this.timer=setInterval((()=>{this.currentTime--}),1e3)},reloadTimer(){clearTimeout(this.currentTime),this.currentTime=5}},mounted(){this.startTimer(),this.sliderLength=this.$refs.Custom_slider.slides.length,this.pages=this.$refs.Custom_slider.slides},watch:{currentTime(t){0===t&&(this.$refs.Custom_slider.slideNext(),this.reloadTimer())}}},T=C,k=(0,f.Z)(T,n,r,!1,null,null,null),y=k.exports;s.ZP.config.productionTip=!1,new s.ZP({render:t=>t(y)}).$mount("#app")}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,s,n,r){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],r=t[d][2];for(var l=!0,u=0;u<s.length;u++)(!1&r||o>=r)&&Object.keys(i.O).every((function(t){return i.O[t](s[u])}))?s.splice(u--,1):(l=!1,r<o&&(o=r));if(l){t.splice(d--,1);var a=n();void 0!==a&&(e=a)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[s,n,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,r,o=s[0],l=s[1],u=s[2],a=0;if(o.some((function(e){return 0!==t[e]}))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(u)var d=u(i)}for(e&&e(s);a<o.length;a++)r=o[a],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(d)},s=self["webpackChunktz"]=self["webpackChunktz"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(4306)}));s=i.O(s)})();
//# sourceMappingURL=app.291fd5b6.js.map