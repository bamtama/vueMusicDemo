webpackJsonp([1],{"+r7u":function(t,i,a){"use strict";var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"app"}},[a("center",[a("router-view")],1),t._v(" "),a("player-nav")],1)},e=[],s={render:n,staticRenderFns:e};i.a=s},"42Hy":function(t,i,a){"use strict";function n(t){a("NQnd")}var e=a("DK6z"),s=a("j6EX"),o=a("VU/8"),r=n,c=o(e.a,s.a,r,"data-v-3aaf5bec",null);i.a=c.exports},"5awb":function(t,i,a){"use strict";var n=a("Dd8w"),e=a.n(n),s=a("NYxO"),o=a("gyMJ"),r=a("ZoQJ");i.a={name:"Media",data:function(){return{id:this.$route.params.id,item:{},end:0,start:0,isRangeChanging:!1}},computed:e()({duration:{get:function(){return r.a.FormatTime(this.end)},set:function(t){this.end=t}},startTime:function(){return r.a.FormatTime(this.$store.state.playingTime)},valueRange:function(){return this.isRangeChanging?this.$el.querySelector(".range").value:this.$store.state.playingTime}},a.i(s.b)(["playingTime","playMode","isPlaylistShow","currentId"])),methods:{initNav:function(){this.$store.commit("setNavShow",!0),this.$store.commit("setNavState",1)},getMusic:function(t){var i=this;o.a.getSongDetail(t).then(function(a){if(a.data[t]){var n=a.data[t].songs[0];i.item={name:n.name,id:n.id,dt:n.dt/1e3,picUrl:n.al.picUrl},i.end=i.item.dt,i.$store.commit("setCurrentId",t),i.$store.dispatch("updatePlayList",{item:i.item})}else alert("无源")})},onEvent:function(){},isChanging:function(){this.isRangeChanging=!0},changeValue:function(){this.isRangeChanging=!1;var t=this.$el.querySelector(".range").value;this.$store.dispatch("changePlayingTime",{time:t,flag:!0})},changePlayMode:function(){var t=this.playMode,i=++t%3;this.$store.commit("setPlayMode",i)},showPlaylist:function(){this.$store.commit("setPlaylistShow",!this.isPlaylistShow)}},watch:{currentId:function(t,i){t!=i&&(this.$router.replace({name:"Media",params:{id:t}}),this.getMusic(t))},$route:function(t,i){console.log(t)}},mounted:function(){this.initNav(),this.getMusic(this.id),this.onEvent()}}},"9itC":function(t,i,a){"use strict";var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"m-media"},[a("img",{staticClass:"cover",attrs:{src:t.item.picUrl}}),t._v(" "),a("h4",[t._v(t._s(t.item.name))]),t._v(" "),a("div",{staticClass:"m-range"},[a("span",[t._v(t._s(t.startTime))]),t._v(" "),a("input",{staticClass:"range",attrs:{type:"range",min:0,max:t.end},domProps:{value:t.valueRange},on:{input:t.isChanging,change:t.changeValue}}),t._v(" "),a("span",[t._v(t._s(t.duration))])]),t._v(" "),a("div",{staticClass:"options"},[a("span",{staticClass:"btn-mode",attrs:{mode:t.playMode},on:{click:t.changePlayMode}},[a("i",{directives:[{name:"show",rawName:"v-show",value:0==t.playMode,expression:"playMode==0"}],staticClass:"iconfont icon-loop"}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:1==t.playMode,expression:"playMode==1"}],staticClass:"iconfont icon-singleloop"}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:2==t.playMode,expression:"playMode==2"}],staticClass:"iconfont icon-random"})]),t._v(" "),a("span",{staticClass:"btn-like iconfont icon-like"}),t._v(" "),a("span",{staticClass:"btn-list iconfont icon-playlist",on:{click:t.showPlaylist}})])])},e=[],s={render:n,staticRenderFns:e};i.a=s},DK6z:function(t,i,a){"use strict";var n=a("gyMJ");i.a={name:"Index",data:function(){return{value:"",imgs:["http://wx1.sinaimg.cn/mw690/006fcAFqgy1fj3auw1ej2j31hc0s9tt0.jpg","http://wx3.sinaimg.cn/mw690/006fcAFqgy1fj3aumri94j31gf0ti4j9.jpg","http://wx2.sinaimg.cn/mw690/006fcAFqgy1fj3av3os0vj31ev0sadza.jpg"],medias:[]}},methods:{goPlayList:function(t){this.$router.push({path:"/PlayList?id="+t})},initNav:function(){this.$store.commit("setNavShow",!1)},getMusics:function(){var t=this;n.a.getPersonalizedPlaylist().then(function(i){200===i.data.code&&(t.medias=i.data.result)},function(t){console.log("error")})}},create:function(){this.initNav()},mounted:function(){this.getMusics()}}},FYb2:function(t,i,a){"use strict";var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"m-playlist"},[a("div",{staticClass:"info"},[a("img",{attrs:{src:t.playList.coverImgUrl}}),t._v(" "),a("span",[t._v(t._s(t.playList.name))])]),t._v(" "),a("ul",{staticClass:"list"},t._l(t.playList.tracks,function(i){return a("li",[a("router-link",{attrs:{to:{name:"Media",params:{id:i.id}}}},[t._v(t._s(i.name))]),t._v(" "),a("i",{staticClass:"iconfont icon-play",on:{click:function(a){a.stopPropagation(),t.updatePlaylist(i)}}})],1)}))])},e=[],s={render:n,staticRenderFns:e};i.a=s},Fs8J:function(t,i,a){"use strict";i.a={name:"home",data:function(){return{}},methods:{initNav:function(){this.$store.commit("setNavShow",!0),this.$store.commit("setNavState",0)}},mounted:function(){this.initNav()}}},IcnI:function(t,i,a){"use strict";var n=a("mvHQ"),e=a.n(n),s=a("7+uW"),o=a("NYxO");a("gyMJ");s.default.use(o.a);var r=new o.a.Store({state:{navShow:!1,navState:0,isPlaying:!1,isPlaylistShow:!1,playList:[],playMode:0,playingTime:0,changeFlag:!1,duration:0,currentId:null,currentMedia:{}},getters:{navShow:function(t){return t.navShow},navState:function(t){return t.navState},isPlaylistShow:function(t){return t.isPlaylistShow},isPlaying:function(t){return t.isPlaying},playList:function(t){return t.playList},playMode:function(t){return t.playMode},playingTime:function(t){return t.playingTime},changeFlag:function(t){return t.changeFlag},duration:function(t){return t.duration},currentId:function(t){return t.currentId},currentMedia:function(t){return t.currentMedia}},mutations:{setNavShow:function(t,i){t.navShow=i},setNavState:function(t,i){t.navState=i},setPlaylistShow:function(t,i){t.isPlaylistShow=i},setIsPlaying:function(t,i){t.isPlaying=i},setPlayMode:function(t,i){t.playMode=i},setPlayingTime:function(t,i){t.playingTime=i},setChangeFlag:function(t,i){t.changeFlag=i},setCurrentId:function(t,i){t.currentId=i},setCurrentMedia:function(t,i){t.currentMedia=i},setPlayList:function(t,i){if(0==t.playList.length)t.playList.push(i);else{var a=!1;t.playList.forEach(function(t,n){t.id===i.id&&(a=!0)}),a||t.playList.push(i)}},setLocalPlayList:function(t,i){t.playList=i}},actions:{changePlayingTime:function(t,i){var a=t.commit,n=(t.state,i.time),e=i.flag;a("setPlayingTime",n),a("setChangeFlag",e)},initLocalPlayList:function(t){var i=t.commit,a=(t.state,window.localStorage.getItem("localList"));a=a||[],i("setLocalPlayList",JSON.parse(a))},updatePlayList:function(t,i){var a=t.commit,n=t.state,s=i.item,o=i.opt;"add"==(void 0===o?"add":o)&&(a("setPlayList",s),window.localStorage.setItem("localList",e()(n.playList)))}}});i.a=r},Jl7w:function(t,i){},LFGr:function(t,i,a){"use strict";function n(t){a("TsKp")}var e=a("XCFq"),s=a("PH3q"),o=a("VU/8"),r=n,c=o(e.a,s.a,r,"data-v-5cb6c08c",null);i.a=c.exports},M93x:function(t,i,a){"use strict";function n(t){a("ZRwa")}var e=a("xJD8"),s=a("+r7u"),o=a("VU/8"),r=n,c=o(e.a,s.a,r,null,null);i.a=c.exports},MPzD:function(t,i){},NHnr:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=a("7+uW"),e=a("NYxO"),s=a("Au9i"),o=a.n(s),r=a("MPzD"),c=(a.n(r),a("d8/S")),l=(a.n(c),a("M93x")),u=a("YaEn"),d=a("LFGr"),m=a("IcnI");n.default.use(e.a),n.default.use(o.a),n.default.component("player-nav",d.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:u.a,store:m.a,template:"<App/>",components:{App:l.a}})},NQnd:function(t,i){},OLp2:function(t,i){},PH3q:function(t,i,a){"use strict";var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("footer",{directives:[{name:"show",rawName:"v-show",value:t.navShow,expression:"navShow"}]},[a("div",{staticClass:"nav"},[a("span",{directives:[{name:"show",rawName:"v-show",value:0==t.navState,expression:"navState==0"}],staticClass:"link"},[a("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:1==t.navState,expression:"navState==1"}],staticClass:"prevbtn",on:{click:function(i){t.playNextOrPrev(-1)}}},[a("i",{staticClass:"iconfont icon-prev"})]),t._v(" "),a("span",{staticClass:"playbtn",class:{"z-playing":t.isPlaying},on:{click:t.playOrNot}},[a("i",{staticClass:"iconfont icon-play"}),t._v(" "),a("i",{staticClass:"iconfont icon-pause"})]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:1==t.navState,expression:"navState==1"}],staticClass:"prevbtn",on:{click:function(i){t.playNextOrPrev(1)}}},[a("i",{staticClass:"iconfont icon-next"})]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:0==t.navState,expression:"navState==0"}],staticClass:"link"},[t._v("我的")])]),t._v(" "),a("div",{staticClass:"player"},[a("audio",{attrs:{src:t.audioItem.url,preload:""},on:{canplay:t.getPlayState,timeupdate:t.audioTimeUpdate,ended:t.playEnd}})]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isPlaylistShow,expression:"isPlaylistShow"}],staticClass:"m-playlist"},[a("div",{staticClass:"close",on:{click:t.hidePlaylist}},[t._v("关闭")]),t._v(" "),a("ul",t._l(t.playList,function(i){return a("li",{class:{cur:i.id==t.currentId},on:{click:function(a){t.goPlay(i.id)}}},[t._v(t._s(i.name))])}))])])],1)},e=[],s={render:n,staticRenderFns:e};i.a=s},RTLX:function(t,i,a){"use strict";var n=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",[t._v("some strange page")])},e=[],s={render:n,staticRenderFns:e};i.a=s},TsKp:function(t,i){},XCFq:function(t,i,a){"use strict";var n=a("Dd8w"),e=a.n(n),s=a("NYxO"),o=a("gyMJ");i.a={name:"PlayerNav",data:function(){return{id:null,audioItem:{}}},computed:e()({},a.i(s.b)(["navState","navShow","currentId","playingTime","duration","isPlaying","playList","isPlaylistShow","playMode"])),methods:{playOrNot:function(){this.$audio.paused?this.$store.commit("setIsPlaying",!0):this.$store.commit("setIsPlaying",!1)},getDuration:function(){},getPlayState:function(){this.$store.commit("setIsPlaying",!0)},getMusicSource:function(){var t=this;if(this.$store.commit("setIsPlaying",!1),null!=this.id)return o.a.getMusicUrl(this.id).then(function(i){i.data[t.id]?t.audioItem=i.data[t.id].data[0]:alert("无源")})},onEvent:function(){},audioTimeUpdate:function(){this.$store.state.changeFlag?(this.$audio.currentTime=this.$store.state.playingTime,this.$store.commit("setChangeFlag",!1)):this.$store.commit("setPlayingTime",this.$audio.currentTime)},playEnd:function(){this.playWithList()},playWithList:function(){var t=this.$store.state.playMode,i=this.$store.state.playList;this.$store.state.currentId;switch(t){case 0:this.playNextOrPrev(1);break;case 1:this.$audio.currentTime=0,this.audioTimeUpdate(),this.$audio.play();break;case 2:var a=Math.floor(i.length*Math.random());this.$store.commit("setCurrentId",i[a].id)}},playNextOrPrev:function(t){var i,a=this.$store.state.playList,n=this.$store.state.currentId,e=-1;a.forEach(function(i,s){if(i.id==n)return void(-1===t?e=--s%a.length:1==t&&(e=++s%a.length))}),i=a[e].id,this.$store.commit("setCurrentId",i)},hidePlaylist:function(){this.$store.commit("setPlaylistShow",!1)},goPlay:function(t){this.$store.commit("setCurrentId",t)}},watch:{currentId:function(t,i){t!=i&&(this.id=t,this.getMusicSource())},changeFlag:function(t,i){console.log(this.playingTime)},isPlaying:function(t,i){t?(console.log("why not play"),this.$audio.play()):this.$audio.pause()}},mounted:function(){this.$audio=document.querySelector(".player audio"),this.getMusicSource(),this.onEvent()}}},YaEn:function(t,i,a){"use strict";var n=a("7+uW"),e=a("/ocq"),s=a("42Hy"),o=a("v6Uu"),r=a("lO7g"),c=a("cUHA");a("rwDq");n.default.use(e.a),i.a=new e.a({routes:[{path:"/",name:"Index",component:s.a},{path:"/Media/:id",name:"Media",component:o.a},{path:"/Home",name:"home",component:r.a},{path:"/PlayList",name:"PlayList",component:c.a}]})},ZRwa:function(t,i){},ZoQJ:function(t,i,a){"use strict";i.a={FormatTime:function(t){var i=parseInt(t/60),a=parseInt(t%60);return(i>=10?""+i:"0"+i)+":"+(a>=10?""+a:"0"+a)}}},cUHA:function(t,i,a){"use strict";function n(t){a("Jl7w")}var e=a("ofsE"),s=a("FYb2"),o=a("VU/8"),r=n,c=o(e.a,s.a,r,null,null);i.a=c.exports},"d8/S":function(t,i){},gyMJ:function(t,i,a){"use strict";var n=a("mvHQ"),e=a.n(n),s=a("mtWM"),o=a.n(s);Vue.prototype.$http=o.a.create({baseURL:"/vueMusicDemo"});i.a={getPersonalizedPlaylist:function(){return o.a.get("/static/datas/hot-list.json")},getPlaylistDetail:function(t){return o.a.get("/static/datas/list-detail.json",{params:{id:t}})},getSongDetail:function(t){return o.a.get("/static/datas/list-song.json",{params:{c:e()([{id:t}]),ids:"["+t+"]",csrf_token:""}})},getMusicUrl:function(t){return o.a.get("/static/datas/url-list.json",{params:{ids:"["+t+"]",br:999e3,csrf_token:""}})}}},j6EX:function(t,i,a){"use strict";var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"m-index"},[a("mt-search",{model:{value:t.value,callback:function(i){t.value=i},expression:"value"}}),t._v(" "),a("div",{staticClass:"index-swipe"},[a("mt-swipe",{attrs:{auto:0}},t._l(t.imgs,function(t){return a("mt-swipe-item",[a("img",{attrs:{src:t}})])}))],1),t._v(" "),a("div",{staticClass:"m-grid"},[a("h4",[t._v("推荐歌单")]),t._v(" "),a("ul",{staticClass:"grid-ul"},t._l(t.medias,function(i){return a("li",{on:{click:function(a){t.goPlayList(i.id)}}},[a("img",{attrs:{src:i.picUrl}}),t._v(" "),a("span",[t._v(t._s(i.name))])])}))])],1)},e=[],s={render:n,staticRenderFns:e};i.a=s},lO7g:function(t,i,a){"use strict";function n(t){a("OLp2")}var e=a("Fs8J"),s=a("RTLX"),o=a("VU/8"),r=n,c=o(e.a,s.a,r,"data-v-36247c57",null);i.a=c.exports},ldWV:function(t,i){},ofsE:function(t,i,a){"use strict";var n=a("gyMJ");i.a={name:"playlist",data:function(){return{id:this.$route.query.id,playList:{}}},methods:{getPlayList:function(){var t=this;n.a.getPlaylistDetail(this.id).then(function(i){t.playList=i.data[t.id].playlist})},updatePlaylist:function(t){this.$store.commit("setCurrentId",t.id),this.$store.dispatch("updatePlayList",{item:{name:t.name,id:t.id,dt:t.dt/1e3,picUrl:t.al.picUrl}}),this.$store.commit("setNavShow",!0),this.$store.commit("setNavState",1)}},computed:{},mounted:function(){this.getPlayList()}}},rwDq:function(t,i,a){"use strict";var n=a("VU/8"),e=n(null,null,null,null,null);e.exports},v6Uu:function(t,i,a){"use strict";function n(t){a("ldWV")}var e=a("5awb"),s=a("9itC"),o=a("VU/8"),r=n,c=o(e.a,s.a,r,"data-v-db427fc8",null);i.a=c.exports},xJD8:function(t,i,a){"use strict";i.a={name:"app",created:function(){this.$store.dispatch("initLocalPlayList")}}}},["NHnr"]);
//# sourceMappingURL=app.01dfdaae8e68513a5b06.js.map