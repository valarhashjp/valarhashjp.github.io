import{j as S,a3 as C,Y as k,Q as w,q as l,v as d,x as s,N as e,l as n,D as M,K as y,a0 as I,a1 as g,X as $,a4 as E,k as v,L as f,M as m,C as R,E as b}from"./index.c50f7a72.js";import{_ as D}from"./Envelope.514f0a0e.js";const B="/image/img_hostingService.png",T=t=>(I("data-v-4f103f50"),t=t(),g(),t),L={class:"card-info"},A={class:"title"},N={class:"info-item"},O={class:"info-title"},V={class:"info-content"},z={class:"info-item"},P={class:"info-title"},U={class:"info-content"},W={class:"info-item"},X={class:"info-title"},Y={class:"info-content"},j={class:"card-img-box"},q=["src"],F=["onClick"],H=T(()=>s("img",{class:"icon",src:D,alt:""},null,-1)),K=S({__name:"SalesCard",props:{cardInfo:null},setup(t){const u=C(),{t:o}=k(),c=w({productConsultationShow:46}),_=()=>{u.push({path:"/ContactUs"})};return(h,i)=>(l(),d("div",{class:"cardBox flex",onMouseenter:i[0]||(i[0]=a=>c.productConsultationShow=0),onMouseleave:i[1]||(i[1]=a=>c.productConsultationShow=46)},[s("div",L,[s("div",A,e(t.cardInfo.name),1),s("div",N,[s("span",O,e(n(o)("hashrate")),1),s("span",V,e(t.cardInfo.hashrate),1)]),s("div",z,[s("span",P,e(n(o)("powerRatio")),1),s("span",U,e(t.cardInfo.powerRatio),1)]),s("div",W,[s("span",X,e(n(o)("powerOnWall")),1),s("span",Y,e(t.cardInfo.powerOnWall),1)])]),s("div",j,[s("img",{class:"card-img",src:t.cardInfo.productImage,alt:""},null,8,q),s("span",{onClick:M(_,["stop"])},[s("div",{class:"ProductConsultation",style:y({transform:`translateX(-50%) translateY(${c.productConsultationShow}px)`})},[H,s("span",null,e(n(o)("ProductConsultation")),1)],4)],8,F)])],32))}});const Q=$(K,[["__scopeId","data-v-4f103f50"]]),G=t=>(I("data-v-ffcb3de0"),t=t(),g(),t),J=G(()=>s("div",{class:"MinerSalesBanner"},[s("img",{src:B,alt:""})],-1)),Z={class:"box"},ss={class:"resourcesTitle"},ts=["onClick"],os={class:"info-card-box flex"},es=["onClick"],ns=S({__name:"MinerSales",setup(t){const u=C(),o=E(),c=v(()=>o.state.resources),_=v(()=>o.state.activeResources),h=a=>{o.commit("SET_ACTIVE_RESOURCES",a)},i=a=>{o.commit("SET_DETAILED_ID",a),u.push({path:"/MiningResources/MinerHostingServices"})};return(a,as)=>(l(),d(f,null,[J,s("div",Z,[s("div",ss,[(l(!0),d(f,null,m(n(c),(r,p)=>(l(),d("span",{key:r.id,onClick:x=>h(r.id),class:R(r.id===n(_)?"active":"")},e(a.$t(r.name)),11,ts))),128))]),s("div",os,[(l(!0),d(f,null,m(n(c)[n(_)].resourcesList,(r,p)=>(l(),d("div",{class:"info-card-item",key:p,onClick:x=>i(p)},[b(Q,{cardInfo:r},null,8,["cardInfo"])],8,es))),128))])])],64))}});const rs=$(ns,[["__scopeId","data-v-ffcb3de0"]]);export{rs as default};
