"use strict";(()=>{var e={};e.id=990,e.ids=[990],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},542:(e,o,t)=>{t.r(o),t.d(o,{originalPathname:()=>d,patchFetch:()=>m,requestAsyncStorage:()=>l,routeModule:()=>c,serverHooks:()=>g,staticGenerationAsyncStorage:()=>p});var r={};t.r(r),t.d(r,{GET:()=>i});var s=t(9303),u=t(8716),n=t(670),a=t(7070);async function i(e){try{console.log("Entering GET function for logout");let e=a.NextResponse.json({message:"Logout successful",success:!0},{status:200});return console.log("Clearing token cookie"),e.cookies.set("token","",{httpOnly:!0,expires:new Date(0)}),console.log("Logout successful"),e}catch(e){return console.error("Error during logout:",e),console.error("Error stack:",e.stack),a.NextResponse.json({message:"Error during logout"},{status:500})}}let c=new s.AppRouteRouteModule({definition:{kind:u.x.APP_ROUTE,page:"/api/users/logout/route",pathname:"/api/users/logout",filename:"route",bundlePath:"app/api/users/logout/route"},resolvedPagePath:"C:\\Users\\Abhisek Samal\\Desktop\\Ecoomerce_next\\src\\app\\api\\users\\logout\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:l,staticGenerationAsyncStorage:p,serverHooks:g}=c,d="/api/users/logout/route";function m(){return(0,n.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:p})}}};var o=require("../../../../webpack-runtime.js");o.C(e);var t=e=>o(o.s=e),r=o.X(0,[948,972],()=>t(542));module.exports=r})();