(this.webpackJsonplolsearcher=this.webpackJsonplolsearcher||[]).push([[0],{117:function(e,n,a){e.exports=a.p+"static/media/bronze.3ad17a20.png"},118:function(e,n,a){e.exports=a.p+"static/media/challenger.48f98701.png"},119:function(e,n,a){e.exports=a.p+"static/media/diamond.55c497d7.png"},120:function(e,n,a){e.exports=a.p+"static/media/gold.b787163c.png"},121:function(e,n,a){e.exports=a.p+"static/media/grandmaster.6a35ceea.png"},122:function(e,n,a){e.exports=a.p+"static/media/iron.d283cf7a.png"},123:function(e,n,a){e.exports=a.p+"static/media/master.1b77ca93.png"},124:function(e,n,a){e.exports=a.p+"static/media/platinum.32742990.png"},125:function(e,n,a){e.exports=a.p+"static/media/silver.61992f04.png"},126:function(e,n,a){e.exports=a.p+"static/media/unranked.c428b2ae.png"},127:function(e,n,a){},144:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a.n(t),o=a(25),i=a.n(o),s=a(10),m=a.n(s),c=a(26),u=a(3),l=a(4),p=a(6),d=a(5),f=a(8),v=a(7);var h=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"LoL Searcher")))},g=function(e){function n(){var e,a;Object(u.a)(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={summonerName:""},a.onSubmit=function(e){e.preventDefault(),a.props.searchSummoner(a.state.summonerName),a.setState({summonerName:""})},a.onChange=function(e){return a.setState({summonerName:e.target.value})},a}return Object(v.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"search_bar"},r.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},r.a.createElement("input",{type:"text",name:"summonerName",placeholder:"Search Summoner (NA Only)",value:this.state.summonerName,onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn"})))}}]),n}(r.a.Component),E=a(11),b={server:"https://nameless-cove-74345.herokuapp.com",base:"https://{region}.api.riotgames.com/lol/{url}",summoner_by_name:"summoner/v{version}/summoners/by-name/{summoner_name}{api_key}",league_by_summoner:"league/v{version}/entries/by-summoner/{summoner_id}{api_key}",mastery_score_by_summoner:"champion-mastery/v{version}/scores/by-summoner/{summoner_id}{api_key}",profile_icon:"http://ddragon.leagueoflegends.com/cdn/{version}/img/profileicon/{profile_icon_id}.png",champion_icon:"http://ddragon.leagueoflegends.com/cdn/{version}/img/champion/{champion_name}.png"},y={profileicon:"10.6.1",champion:"10.6.1",item:"10.6.1",summoner:"10.6.1",mastery:"7.23.1",rune:"7.23.1"},N={EUNE:"eun1",EUW:"euw1",NA:"na1",BR:"br1",JP:"jp1",KR:"kr1",OCE:"oc1",PBE:"pbe1"},k={RANKED_FLEX_SR:"FLEX 5V5",RANKED_FLEX_TT:"FLEX 3V3",RANKED_SOLO_5x5:"SOLO/DUO",RANKED_SOLO_3X3:"3V3",RANKED_TFT:"TFT"},O=a(12),S=a(27);function _(){var e=Object(E.a)(["animation: 2s ",""]);return _=function(){return e},e}function j(){var e=Object(E.a)(["",""]);return j=function(){return e},e}var x=Object(O.b)(j(),S.fadeIn),w=O.a.div(_(),x);var D=function(e){function n(){return Object(u.a)(this,n),Object(p.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(v.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e,n=this.props.rankedData,t=this.props.summonerInfo,o=this.props.masteryScore;return t.name?r.a.createElement(w,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"profile-pic"},function(e){var n=b.profile_icon.formatUnicorn({version:y.profileicon,profile_icon_id:e.profileIconId});return r.a.createElement("img",{className:"profile-image",src:n,alt:"new",width:"130",height:"130"})}(t)),r.a.createElement("div",{className:"summoner-info"},(e=t,r.a.createElement("div",null,r.a.createElement("div",{className:"summoner-name"},e.name),r.a.createElement("div",{level:"level"},"LEVEL "+e.summonerLevel))),"MASTERY SCORE "+o),r.a.createElement("div",{className:"ranked-data"},function(e){return e.length?e.map((function(e){return r.a.createElement("div",{className:"queue-info",key:e.leagueId},"{type}\n{tier} {rank}\n {wins} WINS {lp} LP".formatUnicorn({type:k[e.queueType],tier:e.tier,rank:e.rank,wins:e.wins,lp:e.leaguePoints}).split("\n").map((function(e,n){return r.a.createElement("div",{className:"info-line",key:n},e)})),function(e){var n=a(16)("./{tier}.png".formatUnicorn({tier:e.tier.toLowerCase()}));return r.a.createElement("div",null,r.a.createElement("img",{src:n,alt:"Emblem",width:"120px",height:"136.8px"}))}(e)," ")})):r.a.createElement("div",{className:"queue-info",key:"none"},r.a.createElement("div",{className:"unranked-line",key:"unranked"},"UNRANKED"),function(){var e=a(16)("./unranked.png");return r.a.createElement("div",{className:"unranked-image"},r.a.createElement("img",{src:e,alt:"Unranked Emblem"}))}())}(n)))):null}}]),n}(r.a.Component),L=(a(127),a(9)),C=a.n(L);function A(e){return r.a.createElement("div",{className:"summoner-error"},"Invalid Summoner Name!")}var I=function(e){function n(e){var a;return Object(u.a)(this,n),(a=Object(p.a)(this,Object(d.a)(n).call(this,e))).state={region:N.NA,responseCode:200,rankedData:{},masteryScore:null,basicSummonerInfo:{}},a.searchSummoner=a.searchSummoner.bind(Object(f.a)(a)),a}return Object(v.a)(n,e),Object(l.a)(n,[{key:"searchSummoner",value:function(){var e=Object(c.a)(m.a.mark((function e(n){var a,t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post(b.server+"/summoner/id/by/name",{region:this.state.region,name:n});case 3:return a=e.sent,e.next=6,C.a.post(b.server+"/summoner/ranked/by/id",{region:this.state.region,id:a.data.id});case 6:return t=e.sent,e.next=9,C.a.post(b.server+"/summoner/mastery/by/id",{region:this.state.region,id:a.data.id});case 9:r=e.sent,this.setState({masteryScore:r.data,basicSummonerInfo:a.data,rankedData:t.data,responseCode:a.status}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),this.setState({responseCode:400});case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=(e.region,e.code),a=e.rankedData,t=e.masteryScore,o=e.basicSummonerInfo;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement(g,{searchSummoner:this.searchSummoner}),200===n?r.a.createElement(D,{rankedData:a,masteryScore:t,summonerInfo:o}):r.a.createElement(A,null)))}}]),n}(r.a.Component);i.a.render(r.a.createElement(I,null),document.getElementById("root"))},16:function(e,n,a){var t={"./bronze.png":117,"./challenger.png":118,"./diamond.png":119,"./gold.png":120,"./grandmaster.png":121,"./iron.png":122,"./master.png":123,"./platinum.png":124,"./silver.png":125,"./unranked.png":126};function r(e){var n=o(e);return a(n)}function o(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=o,e.exports=r,r.id=16},32:function(e,n,a){e.exports=a(144)}},[[32,1,2]]]);
//# sourceMappingURL=main.65022681.chunk.js.map