webpackJsonp([1],{"5grT":function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("VCXJ"),a={data:function(){return{item:-1,num:2,onoff:!0,n:null,timer1:null,timer2:null,pos:5,add:200,low:100,mask:!1,ulmask:!1,rule:[{txt:"此活动仅限郑州地区跑男参与"},{txt:"2017.12.9-2017.12.12，活动期间每接满5单，可获得一次抽奖机会，接单越多抽奖机会越多。"},{txt:"抽奖获得的U币会在1个工作日内发至“U币商城”，可在 “飞人端-U币商城-我的U币”中查看。"},{txt:"获得的现金奖励在1个工作日内到达“账户余额”，可在 “飞人端-账户余额”中查看。"},{txt:"获得的物料奖励请在中奖后7天内到浦发国际2111前台领取。"},{txt:"如有任何问题请与UU跑腿客服联系，客服热线：400-499-7999"}],list:[{img:"/static/img1/rmb5.png",info:"5元代金券",txt1:"恭喜您，获得5元代金券",txt2:"快去使用吧"},{img:"/static/img1/rmb10.png",info:"10元代金券",txt1:"恭喜您，获得10元代金券",txt2:"快去使用吧"},{img:"/static/img1/participate.png",info:"谢谢参与",txt1:"很遗憾，未中奖",txt2:"再接再厉"},{img:"/static/img1/rmb5.png",info:"5元代金券",txt1:"恭喜您，获得5元代金券",txt2:"快去使用吧"},{img:"/static/img1/rmb10.png",info:"10元代金券",txt1:"恭喜您，获得10元代金券",txt2:"快去使用吧"},{img:"/static/img1/participate.png",info:"谢谢参与",txt1:"很遗憾，未中奖",txt2:"再接再厉"},{img:"/static/img1/rmb5.png",info:"5元代金券",txt1:"恭喜您，获得5元代金券",txt2:"快去使用吧"},{img:"/static/img1/rmb10.png",info:"10元代金券",txt1:"恭喜您，获得10元代金券",txt2:"快去使用吧"}],left:null,right:null,text1:"",text2:"",maskImg:null,number:0,musicOnoff:!0,templates:[{pid:1,activityTitle:"活动模板一",conBg:"/static/img1/bg.png",lotteryBg:"/static/img1/lotterybg.png",itemBg:"/static/img1/normal.png",clickBg:"/static/img1/click.png",checkedBg:"/static/img1/checked.png",maskBg:"/static/img1/mask.png",bgColor:"#660e88",bannerImg:"/static/img1/banner.png",ruleImg:"/static/img1/article.png",bgMusic:"/static/img1/石久让-天空之城.mp3",play:"/static/img1/play.png",mute:"/static/img1/pause.png",titleColor:"#fff",titleNumColor:"#fff",prizeColor:"#666",ruleColor:"#fff",over:"/static/img1/over.png",notWinning:"/static/img1/notWinning.png"},{pid:1,activityTitle:"活动模板二",conBg:"/static/img2/bg.png",lotteryBg:"/static/img2/lotterybg.png",itemBg:"/static/img2/normal.png",clickBg:"/static/img2/click.png",checkedBg:"/static/img2/checked.png",maskBg:"/static/img2/mask.png",bgColor:"#ffe433",bannerImg:"/static/img2/banner.png",ruleImg:"/static/img2/article.png",bgMusic:"/static/img2/理查德.克莱德曼-梦中的婚礼.mp3",play:"/static/img2/play.png",mute:"/static/img2/pause.png",titleColor:"#4d4d4d",titleNumColor:"#ff5741",prizeColor:"#666",ruleColor:"#333",over:"/static/img2/over.png",notWinning:"/static/img2/notWinning.png"},{pid:1,activityTitle:"活动模板三",conBg:"/static/img3/bg.png",lotteryBg:"/static/img3/lotterybg.png",itemBg:"/static/img3/normal.png",clickBg:"/static/img3/click.png",checkedBg:"/static/img3/checked.png",maskBg:"/static/img3/mask.png",bgColor:"#362c51",bannerImg:"/static/img3/banner.png",ruleImg:"/static/img3/article.png",bgMusic:"/static/img3/石进-夜的钢琴曲五.mp3",play:"/static/img3/play.png",mute:"/static/img3/pause.png",titleColor:"#fff",titleNumColor:"#ffe827",prizeColor:"#666",ruleColor:"#fff",over:"/static/img3/over.png",notWinning:"/static/img3/notWinning.png"},{pid:1,activityTitle:"活动模板四",conBg:"/static/img4/bg.png",lotteryBg:"/static/img4/lotterybg.png",itemBg:"/static/img4/normal.png",clickBg:"/static/img4/click.png",checkedBg:"/static/img4/checked.png",maskBg:"/static/img4/mask.png",bgColor:"#326bd3",bannerImg:"/static/img4/banner.png",ruleImg:"/static/img4/article.png",bgMusic:"/static/img4/Yiruma-Kiss The Rain.mp3",play:"/static/img4/play.png",mute:"/static/img4/pause.png",titleColor:"#4c4535",titleNumColor:"#dd2c14",prizeColor:"#666",ruleColor:"#fff",over:"/static/img4/over.png",notWinning:"/static/img4/notWinning.png"}]}},mounted:function(){var t=this;this.$nextTick(function(i){var e=[0,1,2,7,3,6,5,4];t.list.forEach(function(t,i){t.a=e[i]}),t.left=t.list.slice(0,4),t.right=t.list.slice(4),document.title=t.templates[t.number].activityTitle,t.device()})},methods:{lottery:function(){var t=this;if(this.onoff){if(this.onoff=!1,0==this.num)return this.maskImg=this.templates[this.number].over,this.text1="您的抽奖次数用完了",this.text2="明天再来吧",void(this.mask=!0);this.ulmask=!0,this.num--,this.n=Math.round(10*Math.random()+30),this.timer1=setInterval(this.speed,this.add),setTimeout(function(i){clearInterval(t.timer1),t.addSpeed()},this.pos*this.add),setTimeout(function(i){clearInterval(t.timer2),t.lowSpeed()},this.pos*this.add+(this.n-2*this.pos)*this.low)}},speed:function(){var t=this;this.item<this.pos?this.item++:this.item>=this.pos&&this.item<this.n-this.pos?this.item++:this.item>=this.n-this.pos&&this.item<this.n&&(this.item++,this.item==this.n&&(clearInterval(this.timer1),this.list.forEach(function(i){i.a==t.n%8&&("谢谢参与"==i.info?t.maskImg=t.templates[t.number].notWinning:t.maskImg=i.img,t.text1=i.txt1,t.text2=i.txt2)}),setTimeout(function(i){t.mask=!0},300)))},addSpeed:function(){clearInterval(this.timer1),this.timer2=setInterval(this.speed,this.low)},lowSpeed:function(){clearInterval(this.timer2),this.timer1=setInterval(this.speed,this.add)},ok:function(){this.mask=!1,this.ulmask=!1,this.onoff=!0,this.item=-1},music:function(){var t=this.$refs.music;this.musicOnoff?(t.style.cssText="transform: rotate(0deg)",t.pause()):t.play(),this.musicOnoff=!this.musicOnoff},device:function(){var t=navigator.userAgent.toLowerCase();-1==t.indexOf("iphone")&&-1==t.indexOf("ipad")&&-1==t.indexOf("android")&&(document.getElementsByTagName("html")[0].style.cssText="max-width:750px;margin:0 auto;font-size:75px;box-shadow:0 0 3px #333;overflow:hidden;",document.getElementsByClassName("lottery")[0].style.cssText+="height:750px")},pifu:function(){this.number++,this.number==this.templates.length&&(this.number=0),document.title=this.templates[this.number].activityTitle}}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"content",style:{backgroundColor:t.templates[t.number].bgColor}},[e("div",{staticClass:"con-bg",style:{backgroundImage:"url("+t.templates[t.number].conBg+")"}},[e("div",{staticClass:"top"},[e("img",{staticClass:"title",attrs:{src:t.templates[t.number].bannerImg}})]),t._v(" "),e("div",{staticClass:"lottery",style:{backgroundImage:"url("+t.templates[t.number].lotteryBg+")"}},[e("p",{staticClass:"opportunity",style:{color:t.templates[t.number].titleColor}},[t._v("您还有"),e("span",{style:{color:t.templates[t.number].titleNumColor}},[t._v(t._s(t.num))]),t._v("次抽奖机会")]),t._v(" "),e("ul",{staticClass:"con"},[t._l(t.left,function(i,s){return e("li",{key:i.a,staticClass:"item",class:i.a==t.item%8?"itemMask":"",style:{backgroundImage:i.a==t.item%8?"url("+t.templates[t.number].checkedBg+")":"url("+t.templates[t.number].itemBg+")"}},[e("div",{staticClass:"img-top"},[e("img",{attrs:{src:i.img,alt:""}})]),t._v(" "),e("p",{style:{color:t.templates[t.number].prizeColor}},[t._v(t._s(i.info))])])}),t._v(" "),e("li",{staticClass:"item click",style:{backgroundImage:"url("+t.templates[t.number].clickBg+")"},on:{click:t.lottery}}),t._v(" "),t._l(t.right,function(i,s){return e("li",{key:i.a,staticClass:"item",class:i.a==t.item%8?"itemMask":"",style:{backgroundImage:i.a==t.item%8?"url("+t.templates[t.number].checkedBg+")":"url("+t.templates[t.number].itemBg+")"}},[e("div",{staticClass:"img-top"},[e("img",{attrs:{src:i.img,alt:""}})]),t._v(" "),e("p",{style:{color:t.templates[t.number].prizeColor}},[t._v(t._s(i.info))])])}),t._v(" "),t.ulmask?e("div",{staticClass:"ul-mask"}):t._e()],2)]),t._v(" "),e("div",{staticClass:"rule"},[e("div",{staticClass:"line"},[e("img",{attrs:{src:t.templates[t.number].ruleImg,alt:""}}),t._v(" "),e("p",{style:{color:t.templates[t.number].ruleColor}},[t._v("活动规则")])]),t._v(" "),e("ul",{staticClass:"rule-con"},t._l(t.rule,function(i,s){return e("li",{key:s,style:{color:t.templates[t.number].ruleColor}},[t._v(t._s(i.txt))])}))])])]),t._v(" "),t.mask?e("div",{staticClass:"mask-bg"},[e("div",{staticClass:"mask bounceIn"},[e("div",{staticClass:"mask-top",style:{backgroundImage:"url("+t.templates[t.number].maskBg+")"}},[e("img",{attrs:{src:t.maskImg,alt:""}})]),t._v(" "),e("div",{staticClass:"mask-bot"},[e("p",{staticClass:"p1"},[t._v(t._s(t.text1))]),t._v(" "),e("p",{staticClass:"p2"},[t._v(t._s(t.text2))]),t._v(" "),e("div",{staticClass:"ok",on:{click:t.ok}},[t._v("确定")])])])]):t._e(),t._v(" "),e("audio",{ref:"music",attrs:{src:t.templates[t.number].bgMusic,autoplay:"autoplay",loop:"loop"}}),t._v(" "),e("div",{staticClass:"music",style:{animationName:t.musicOnoff?"move":""},on:{click:t.music}},[e("img",{attrs:{src:t.musicOnoff?t.templates[t.number].play:t.templates[t.number].mute,alt:""}})]),t._v(" "),e("button",{staticClass:"pifu",on:{click:t.pifu}},[t._v("更换皮肤")])])},staticRenderFns:[]},m=e("8AGX")(a,n,!1,function(t){e("5grT")},null,null).exports;new s.a({el:"#app",template:"<App/>",components:{App:m}})}},["NHnr"]);
//# sourceMappingURL=app.3098c400ac74c0b7ef27.js.map