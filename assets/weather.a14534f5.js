import{a as C,b as V}from"./index.96c96e2e.js";import{d as x,a as k,r as _,t as v,y as I,g as c,e as t,f as S,w as B,F as r,z as y,u as h,b as f,o as l,c as N,A as s,p as A,q as D}from"./index.7e30240a.js";import{_ as E}from"./_plugin-vue_export-helper.cdc0426e.js";const F=n=>(A("data-v-6a83168a"),n=n(),D(),n),q={class:"top-select"},z={class:"contianer"},M={class:"box-card"},R=F(()=>t("div",null,null,-1)),U=x({__name:"weather",setup(n){const u=k("\u4E0A\u6D77"),m=_({cityList:[]}),{cityList:i}=v(m);I(()=>{g(),p("101020100")});const g=()=>{C().then(o=>{console.log(o,"getCityList"),o.code===2e3&&(i.value=o.data)})},w=_({weatherList:[]}),{weatherList:d}=v(w),p=o=>{V({cityNum:o}).then(a=>{a.code===2e3&&(d.value=a.data)})};return(o,a)=>{const L=f("el-option"),b=f("el-select");return l(),c(r,null,[t("div",q,[S(b,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),class:"m-2",onChange:a[1]||(a[1]=e=>p(u.value)),placeholder:"Select"},{default:B(()=>[(l(!0),c(r,null,y(h(i),e=>(l(),N(L,{key:e.citynumber,label:e.cityname,value:e.citynumber},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),t("div",z,[(l(!0),c(r,null,y(h(d),e=>(l(),c("div",M,[t("p",null,s(e.ymd)+" "+s(e.week),1),t("p",null,s(e.high),1),t("p",null,s(e.low),1),t("p",null,s(e.type),1),t("p",null,s(e.fl),1)]))),256))]),R],64)}}});const G=E(U,[["__scopeId","data-v-6a83168a"]]);export{G as default};
