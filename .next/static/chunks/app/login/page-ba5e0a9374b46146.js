(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{7672:function(e,s,r){Promise.resolve().then(r.bind(r,1193))},6463:function(e,s,r){"use strict";var t=r(1169);r.o(t,"useRouter")&&r.d(s,{useRouter:function(){return t.useRouter}})},5248:function(e,s,r){"use strict";var t=r(7437);r(2265),s.Z=function(){return(0,t.jsx)("div",{className:"flex items-center justify-center min-h-screen",children:(0,t.jsx)("div",{className:"w-16 h-16 border-4 border-t-4 border-purple-500 border-solid rounded-full animate-spin"})})}},1193:function(e,s,r){"use strict";r.r(s);var t=r(7437),l=r(7138),a=r(2265),n=r(6463),i=r(8472),o=r(8726),u=r(1942),c=r(5248);s.default=function(){let e=(0,n.useRouter)(),[s,r]=(0,a.useState)({email:"",password:""}),[d,p]=(0,a.useState)(!0),[m,x]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let{email:e,password:r}=s;p(!(e&&r))},[s]);let h=async()=>{x(!0);try{await o.ZP.promise(i.Z.post("/api/users/login",s),{loading:"Logging in...",success:e=>(console.log("Login successful",e.data),"Login successful!"),error:"Invalid email or password. Please try again."}),e.push("/products")}catch(e){console.error("Error during login",e),o.ZP.error(e.message)}finally{x(!1)}};return(0,t.jsxs)("div",{className:"flex items-center justify-center min-h-screen py-2 bg-gray-900 relative",children:[(0,t.jsx)(o.Toaster,{position:"top-center",reverseOrder:!1}),m&&(0,t.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50",children:(0,t.jsx)(c.Z,{})}),(0,t.jsxs)("div",{className:"w-full max-w-md bg-gray-800 rounded-lg overflow-hidden shadow-lg",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold text-center text-purple-500 bg-gray-700 py-4",children:"Login"}),(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-purple-300",children:"Email"}),(0,t.jsxs)("div",{className:"flex items-center mb-4",children:[(0,t.jsx)(u.SRX,{className:"text-purple-500 mr-2"}),(0,t.jsx)("input",{className:"w-full p-2 border rounded-md bg-gray-700 border-purple-500 text-white placeholder-purple-500",id:"email",type:"email",value:s.email,onChange:e=>r({...s,email:e.target.value}),placeholder:"Email \uD83D\uDCE7"})]}),(0,t.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-purple-300",children:"Password"}),(0,t.jsxs)("div",{className:"flex items-center mb-4",children:[(0,t.jsx)(u.kUi,{className:"text-purple-500 mr-2"}),(0,t.jsx)("input",{className:"w-full p-2 border rounded-md bg-gray-700 border-purple-500 text-white placeholder-purple-500",id:"password",type:"password",value:s.password,onChange:e=>r({...s,password:e.target.value}),placeholder:"Password \uD83D\uDD12"})]}),(0,t.jsx)("button",{className:"w-full p-2 rounded-md ".concat(d||m?"bg-purple-400 cursor-not-allowed text-gray-500":"bg-purple-700 hover:bg-purple-800 text-white"),onClick:h,disabled:d||m,children:"Login"}),(0,t.jsx)("div",{className:"mt-4 text-center",children:(0,t.jsx)(l.default,{href:"/signup",className:"text-purple-300 hover:text-purple-500",children:"Don't have an account? Sign Up"})})]})]})]})}}},function(e){e.O(0,[699,726,853,472,971,23,744],function(){return e(e.s=7672)}),_N_E=e.O()}]);