import{b as m,af as y,d as u,u as h,c as b,o as a,g as i,f as r,w as v,E,a as o,F as C,h as t,n as c,j as d,_,p as g}from"./index.d41792f8.js";const w=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:y}}),B={click:l=>l instanceof MouseEvent},L=["href"],$=u({name:"ElLink"}),P=u({...$,props:w,emits:B,setup(l,{emit:f}){const s=l,n=h("link"),p=b(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||f("click",e)}return(e,I)=>(a(),i("a",{class:c(o(p)),href:e.disabled||!e.href?void 0:e.href,onClick:k},[e.icon?(a(),r(o(C),{key:0},{default:v(()=>[(a(),r(E(e.icon)))]),_:1})):t("v-if",!0),e.$slots.default?(a(),i("span",{key:1,class:c(o(n).e("inner"))},[d(e.$slots,"default")],2)):t("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):t("v-if",!0)],10,L))}});var S=_(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const j=g(S);export{j as E};
