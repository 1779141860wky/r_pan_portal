/* empty css                  */import{cd as v,r as f,Z as x,aA as K,W as b,o as k,g as V,C as e,S as l,ca as u,aB as d,M as U,w as C,aC as E,aD as a,V as w,k as P,a0 as B,a1 as S}from"./index.d41792f8.js";import{_ as q}from"./_plugin-vue_export-helper.cdc0426e.js";const n=i=>(B("data-v-d9a7d9d7"),i=i(),S(),i),I={class:"content"},M={class:"sub-cont"},N=n(()=>e("div",{class:"img__text m--in"},[e("h2",null,"\u5DF2\u6709\u5E10\u53F7\uFF1F"),e("p",null,"\u6709\u5E10\u53F7\u5C31\u767B\u5F55\u5427\uFF0C\u597D\u4E45\u4E0D\u89C1\u4E86\uFF01")],-1)),R=n(()=>e("span",{class:"m--in"},"\u53BB \u767B \u5F55",-1)),T=[R],D={class:"form sign-up"},F=n(()=>e("h2",null,"NEU Cloud \u6CE8\u518C",-1)),L=n(()=>e("span",null,"\u7528\u6237\u540D",-1)),A=["onKeyup"],W=n(()=>e("span",null,"\u5BC6\u7801",-1)),Z=["onKeyup"],j=n(()=>e("span",null,"\u786E\u8BA4\u5BC6\u7801",-1)),z=["onKeyup"],G=n(()=>e("span",null,"\u5BC6\u4FDD\u95EE\u9898",-1)),H=["onKeyup"],J=n(()=>e("span",null,"\u5BC6\u4FDD\u7B54\u6848",-1)),O=["onKeyup"],Q={__name:"index",setup(i){const y=v(),p=f(!1),_=f(null);x(()=>{_.value.focus()});const s=K({username:"",password:"",rePassword:"",question:"",answer:""}),r=()=>{g()&&(p.value=!0,E.register(s,()=>{a.success("\u6CE8\u518C\u6210\u529F\uFF01\u5373\u5C06\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762"),setTimeout(c,1e3),p.value=!1},m=>{a.error(m.message),p.value=!1}))},g=()=>w.checkUsername(s.username)?w.checkPassword(s.password)?!s.rePassword||s.password!==s.rePassword?(a.error("\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"),!1):s.question?s.answer?!0:(a.error("\u8BF7\u8F93\u5165\u5BC6\u4FDD\u7B54\u6848"),!1):(a.error("\u8BF7\u8F93\u5165\u5BC6\u4FDD\u95EE\u9898"),!1):(a.error("\u8BF7\u8F93\u51658-16\u4F4D\u7684\u5BC6\u7801"),!1):(a.error("\u8BF7\u8F93\u51656-16\u4F4D\u53EA\u5305\u542B\u6570\u5B57\u548C\u5B57\u6BCD\u7684\u7528\u6237\u540D"),!1),c=()=>{y.push({name:"Login"})};return(m,o)=>{const h=b;return k(),V("div",I,[e("div",M,[e("div",{class:"img"},[N,e("div",{class:"img__btn",onClick:c},T)]),e("div",D,[F,e("label",null,[L,l(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>s.username=t),onKeyup:d(r,["enter"]),ref_key:"usernameEl",ref:_},null,40,A),[[u,s.username]])]),e("label",null,[W,l(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=t=>s.password=t),onKeyup:d(r,["enter"])},null,40,Z),[[u,s.password]])]),e("label",null,[j,l(e("input",{type:"password","onUpdate:modelValue":o[2]||(o[2]=t=>s.rePassword=t),onKeyup:d(r,["enter"])},null,40,z),[[u,s.rePassword]])]),e("label",null,[G,l(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>s.question=t),onKeyup:d(r,["enter"])},null,40,H),[[u,s.question]])]),e("label",null,[J,l(e("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=t=>s.answer=t),onKeyup:d(r,["enter"])},null,40,O),[[u,s.answer]])]),U(h,{type:"warning",class:"submit",loading:p.value,onClick:r,round:""},{default:C(()=>[P("\u6CE8 \u518C")]),_:1},8,["loading"])])])])}}},ee=q(Q,[["__scopeId","data-v-d9a7d9d7"]]);export{ee as default};