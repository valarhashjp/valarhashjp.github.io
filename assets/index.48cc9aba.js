import{j as d,Y as u,q as a,v as i,x as n,N as o,l as c,a0 as t,a1 as _,X as m,L as v,M as f,E as h}from"./index.3c1fb9d0.js";const x="/image/img_nodeservice.png",S=e=>(t("data-v-33d92e38"),e=e(),_(),e),C={class:"card flex"},I=["src"],k={class:"name"},N={class:"commissionAndapr"},y={class:"commission flex"},w={class:"title"},$={class:"content"},A=S(()=>n("div",{class:"line"},null,-1)),B={class:"apr"},E={class:"title"},L={class:"content"},X=d({__name:"NodeCard",props:{nodeCardInfo:null},setup(e){const{t:s}=u();return(r,p)=>(a(),i("div",C,[n("img",{src:e.nodeCardInfo.icon,alt:""},null,8,I),n("span",k,o(e.nodeCardInfo.name),1),n("div",N,[n("div",y,[n("span",w,o(c(s)("commission")),1),n("span",$,o(e.nodeCardInfo.commission),1)]),A,n("div",B,[n("span",E,o(c(s)("APR")),1),n("span",L,o(e.nodeCardInfo.apr),1)])])]))}});const M=m(X,[["__scopeId","data-v-33d92e38"]]),P=e=>(t("data-v-37269f6d"),e=e(),_(),e),V=P(()=>n("img",{class:"img",src:x,alt:""},null,-1)),b={class:"nodeCard-box flex"},j=d({__name:"index",setup(e){const s=[{icon:"/image/nodeService/node_eth.png",name:"ETH 2.0",commission:"0.08%",apr:"9.32%"},{icon:"/image/nodeService/node_polkadot.png",name:"Polkadot",commission:"0.08%",apr:"9.32%"},{icon:"/image/nodeService/node_aptos.png",name:"Aptos",commission:"0.08%",apr:"9.32%"},{icon:"/image/nodeService/node_cosmos.png",name:"Cosmos",commission:"0.08%",apr:"9.32%"},{icon:"/image/nodeService/node_kusama.png",name:"Kusama",commission:"0.08%",apr:"9.32%"},{icon:"/image/nodeService/node_sui.png",name:"Sui",commission:"0.08%",apr:"9.32%"},{icon:"/image/nodeService/node_near.png",name:"Near",commission:"0.08%",apr:"9.32%"},{icon:"/image/nodeService/node_crust.png",name:"Crust",commission:"0.08%",apr:"9.32%"},{icon:"/image/nodeService/node_menson.png",name:"Menson",commission:"0.08%",apr:"9.32%"},{icon:"/image/nodeService/node_xx network.png",name:"XXNetwork",commission:"0.08%",apr:"9.32%"}];return(r,p)=>(a(),i("main",null,[V,n("div",b,[(a(),i(v,null,f(s,(l,g)=>h(M,{key:g,"node-card-info":l},null,8,["node-card-info"])),64))])]))}});const D=m(j,[["__scopeId","data-v-37269f6d"]]);export{D as default};
