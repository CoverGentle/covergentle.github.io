import{g as f}from"./index.2cdee353.js";import{d as h,r as w,t as C,v as g,g as F,f as e,w as l,u as v,b as s,o as D,h as u}from"./index.94d66ccc.js";const k={class:"table-contianer"},x=u("Edit"),B=u("Delete"),A=h({__name:"userManagement",setup(E){const i=w({tableData:[]}),{tableData:c}=C(i);g(()=>{r()});const r=async()=>{const{userInfoList:t}=await f();c.value=t},_=(t,o)=>{console.log(t,o)},p=(t,o)=>{console.log(t,o)};return(t,o)=>{const a=s("el-table-column"),d=s("el-button"),m=s("el-table");return D(),F("div",k,[e(m,{data:v(c),style:{width:"100%"}},{default:l(()=>[e(a,{prop:"id",label:"id",width:"180"}),e(a,{prop:"username",label:"\u8D26\u53F7",width:"180"}),e(a,{prop:"createdAt",label:"\u521B\u5EFA\u65F6\u95F4",width:"220"}),e(a,{prop:"updatedAt",label:"\u66F4\u65B0\u65F6\u95F4",width:"220"}),e(a,{label:"\u64CD\u4F5C"},{default:l(n=>[e(d,{size:"small",onClick:b=>_(n.$index,n.row)},{default:l(()=>[x]),_:2},1032,["onClick"]),e(d,{size:"small",type:"danger",onClick:b=>p(n.$index,n.row)},{default:l(()=>[B]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}}});export{A as default};
