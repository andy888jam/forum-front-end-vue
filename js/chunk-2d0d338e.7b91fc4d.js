(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d338e"],{"5c9c":function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"container py-5"},[s("form",{staticClass:"w-100",on:{submit:function(a){return a.preventDefault(),a.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),s("div",{staticClass:"form-label-group mb-2"},[s("label",{attrs:{for:"name"}},[e._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})]),s("div",{staticClass:"form-label-group mb-2"},[s("label",{attrs:{for:"email"}},[e._v("email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),s("div",{staticClass:"form-label-group mb-3"},[s("label",{attrs:{for:"password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),s("div",{staticClass:"form-label-group mb-3"},[s("label",{attrs:{for:"password-check"}},[e._v("Password Check")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.passwordCheck},on:{input:function(a){a.target.composing||(e.passwordCheck=a.target.value)}}})]),s("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"處理中":"Submit")+" ")]),s("div",{staticClass:"text-center mb-3"},[s("p",[s("router-link",{attrs:{to:"/signin"}},[e._v(" Sign In ")])],1)]),s("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v("© 2017-2018")])])])},r=[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"text-center mb-4"},[s("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Sign Up")])])}],o=s("1da1"),n=(s("96cf"),s("b0c0"),s("d9e2"),s("7696")),i=s("2fa3"),l={data:function(){return{name:"",email:"",password:"",passwordCheck:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s,t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.isProcessing=!0,e.name&&e.email&&e.password&&e.passwordCheck){a.next=5;break}return i["a"].fire({icon:"warning",title:"請確認已填寫所有欄位"}),a.abrupt("return");case 5:if(e.password===e.passwordCheck){a.next=9;break}return i["a"].fire({icon:"warning",title:"兩次輸入的密碼不同"}),e.passwordCheck="",a.abrupt("return");case 9:return a.next=11,n["a"].signUp({name:e.name,email:e.email,password:e.password,passwordCheck:e.passwordCheck});case 11:if(s=a.sent,t=s.data,"success"===t.status){a.next=15;break}throw new Error(t.message);case 15:i["a"].fire({icon:"success",title:t.message}),e.$router.push({name:"sign-in"}),a.next=24;break;case 19:a.prev=19,a.t0=a["catch"](0),console.log("error",a.t0),e.isProcessing=!1,i["a"].fire({icon:"warning",title:"無法註冊，請稍候再試"});case 24:case"end":return a.stop()}}),a,null,[[0,19]])})))()}}},c=l,m=s("2877"),p=Object(m["a"])(c,t,r,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d338e.7b91fc4d.js.map