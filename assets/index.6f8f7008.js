import{j as f,Y as x,Q as C,q as i,v as d,N as n,l as t,x as e,K as S,L as I,M as k,H as g,E as D,$ as u,A as h,a2 as v,a0 as U,a1 as w,X as $}from"./index.c50f7a72.js";const b="/image/img_contactus.png",V="/image/icon/iocndown.png",B={key:0,class:"placeholderText"},N={key:1,class:"value"},E={key:2,class:"select-item-box"},K=["onClick"],M=f({__name:"Myselect",props:{selectkey:null,selectData:null},emits:["choose"],setup(l,{emit:s}){const{t:o}=x(),p=C({selectItemShow:!1}),r=a=>{p.selectItemShow=a},c=a=>{s("choose",a)};return(a,y)=>(i(),d("div",{class:"select-box",onClick:y[0]||(y[0]=m=>r(!p.selectItemShow))},[l.selectkey?(i(),d("span",N,n(l.selectkey),1)):(i(),d("span",B,n(t(o)("PleaseSelect")),1)),e("img",{class:"iocndown",src:V,style:S({transform:`translateY(-50%) rotate(${p.selectItemShow?"180":"0"}deg)`})},null,4),p.selectItemShow?(i(),d("div",E,[(i(!0),d(I,null,k(l.selectData,(m,re)=>(i(),d("div",{class:"select-item",onClick:me=>c(m.key)},n(t(o)(m.title)),9,K))),256))])):g("",!0)]))}});const _=l=>(U("data-v-94c91192"),l=l(),w(),l),A=_(()=>e("img",{class:"banner",src:b,alt:""},null,-1)),F={class:"center"},P=_(()=>e("div",{class:"line"},null,-1)),T={class:"ContactUsInfo flex"},q={class:"ContactUsInfo-item"},L={class:"ContactUsInfo-titme"},Y=_(()=>e("span",{class:"ContactUsInfo-content"},"hanetsu@vhash.io",-1)),j={class:"ContactUsInfo-item"},z={class:"ContactUsInfo-titme"},H={class:"ContactUsInfo-content"},Q=_(()=>e("div",{class:"line"},null,-1)),X={class:"form"},G={class:"from-item form-select flex"},J={class:"form-select-title"},O={class:"input-box"},R={class:"input"},W={class:"input-title"},Z=_(()=>e("span",{class:"red"},"*",-1)),ee=["placeholder"],se={class:"input"},te={class:"input-title"},oe=_(()=>e("span",{class:"red"},"*",-1)),ne=["placeholder"],ae={class:"Detais-box"},le={class:"input"},ce={class:"input-title"},ie=_(()=>e("span",{class:"red"},"*",-1)),de=["placeholder"],_e={class:"submitBtn"},pe=f({__name:"index",setup(l){const{t:s}=x(),o=C({selectData:[{key:"Sales",title:"Sales"},{key:"BusinessCooperation",title:"BusinessCooperation"},{key:"ComplaintsandSugge",title:"ComplaintsandSugge"}],SelectKey:"",name:"",email:"",detais:""}),p=r=>{o.SelectKey=r};return(r,c)=>(i(),d("main",null,[A,e("div",F,[e("h2",null,n(t(s)("ContactUs")),1),P,e("div",T,[e("div",q,[e("span",L,n(t(s)("ContactEmail")),1),Y]),e("div",j,[e("span",z,n(t(s)("Address")),1),e("span",H,n(t(s)("AddressContent")),1)])]),Q,e("div",X,[e("div",G,[e("span",J,n(t(s)("Inquiry")),1),D(M,{selectData:o.selectData,selectkey:o.SelectKey,onChoose:p},null,8,["selectData","selectkey"])]),e("div",O,[e("div",R,[e("span",W,[Z,u(n(t(s)("Name")),1)]),h(e("input",{placeholder:t(s)("PleaseFill"),class:"input-main",type:"text","onUpdate:modelValue":c[0]||(c[0]=a=>o.name=a)},null,8,ee),[[v,o.name]])]),e("div",se,[e("span",te,[oe,u(n(t(s)("Email")),1)]),h(e("input",{placeholder:t(s)("PleaseFill"),class:"input-main",type:"text","onUpdate:modelValue":c[1]||(c[1]=a=>o.email=a)},null,8,ne),[[v,o.email]])])]),e("div",ae,[e("div",le,[e("span",ce,[ie,u(n(t(s)("Detais")),1)]),h(e("textarea",{"onUpdate:modelValue":c[2]||(c[2]=a=>o.detais=a),placeholder:t(s)("detaisDisabled")},null,8,de),[[v,o.detais]])])]),e("div",_e,n(t(s)("comfirm")),1)])])]))}});const he=$(pe,[["__scopeId","data-v-94c91192"]]);export{he as default};
