(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{6367:function(e,t,r){Promise.resolve().then(r.bind(r,3917))},6463:function(e,t,r){"use strict";var s=r(1169);r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},6037:function(e,t,r){"use strict";var s=r(7437),a=r(1942),l=r(9690);t.Z=function(){return(0,s.jsx)("footer",{className:"bg-gray-800 p-4 text-center text-white",children:(0,s.jsxs)("div",{className:"container mx-auto flex flex-col items-center",children:[(0,s.jsxs)("div",{className:"flex gap-4 mb-4",children:[(0,s.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.Am9,{size:24})}),(0,s.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.fWC,{size:24})}),(0,s.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.Zf_,{size:24})}),(0,s.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.ltd,{size:24})}),(0,s.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(l.RrF,{size:24})})]}),(0,s.jsxs)("p",{className:"text-gray-400 text-sm",children:["\xa9 ",new Date().getFullYear()," Your Company. All rights reserved."]})]})})}},101:function(e,t,r){"use strict";var s=r(7437),a=r(1942),l=r(7138),n=r(8932);t.Z=function(){let{cart:e}=(0,n.j)(),t=e.reduce((e,t)=>e+t.quantity,0);return(0,s.jsx)("nav",{className:"bg-gray-800 p-4",children:(0,s.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,s.jsx)(l.default,{href:"/",className:"text-white text-xl hover:text-gray-400",children:(0,s.jsx)(a.xng,{size:24})}),(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsxs)(l.default,{href:"/cart",className:"text-white hover:text-gray-400 relative",children:[(0,s.jsx)(a.FeP,{size:24}),t>0&&(0,s.jsx)("span",{className:"absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs",children:t})]}),(0,s.jsx)(l.default,{href:"/profile",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.Xws,{size:24})})]})]})})}},8932:function(e,t,r){"use strict";r.d(t,{CartProvider:function(){return i},j:function(){return c}});var s=r(7437),a=r(2265);let l=(0,a.createContext)(void 0),n=(e,t)=>{switch(t.type){case"ADD_TO_CART":let r=e.findIndex(e=>e.id===t.product.id);if(r>=0)return e.map((e,t)=>t===r?{...e,quantity:e.quantity+1}:e);return[...e,{...t.product,quantity:1}];case"REMOVE_FROM_CART":return e.filter(e=>e.id!==t.id);case"UPDATE_QUANTITY":return e.map(e=>e.id===t.id?{...e,quantity:t.quantity}:e);default:return e}},i=e=>{let{children:t}=e,[r,i]=(0,a.useReducer)(n,[]);return(0,s.jsx)(l.Provider,{value:{cart:r,addToCart:e=>{i({type:"ADD_TO_CART",product:e})},removeFromCart:e=>{i({type:"REMOVE_FROM_CART",id:e})},updateQuantity:(e,t)=>{i({type:"UPDATE_QUANTITY",id:e,quantity:t})}},children:t})},c=()=>{let e=(0,a.useContext)(l);if(!e)throw Error("useCart must be used within a CartProvider");return e}},3917:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var s=r(7437),a=r(6463),l=r(8472),n=r(8726),i=r(2265),c=function(){return(0,s.jsx)("div",{className:"flex items-center justify-center min-h-screen",children:(0,s.jsx)("div",{className:"w-16 h-16 border-4 border-t-4 border-purple-500 border-solid rounded-full animate-spin"})})},o=r(101),d=r(6037),u=function(){let e=(0,a.useRouter)(),[t,r]=(0,i.useState)(!0),[u,x]=(0,i.useState)(null);(0,i.useEffect)(()=>{m()},[]);let h=async()=>{r(!0);try{await l.Z.get("/api/users/logout"),n.Am.success("Logout Successful \uD83D\uDE09"),console.log("Logging out..."),e.push("/login")}catch(e){console.error("Failed to logout:",e),n.Am.error("Failed to logout. Please try again.")}finally{r(!1)}},m=async()=>{try{let e=await l.Z.get("/api/users/me");x(e.data.data)}catch(e){console.error("Failed to fetch user data:",e),n.Am.error("Failed to fetch user data. Please try again.")}finally{r(!1)}};return t?(0,s.jsx)(c,{}):(0,s.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,s.jsx)(o.Z,{}),(0,s.jsxs)("main",{className:"flex flex-col items-center justify-center flex-1 py-2",children:[(0,s.jsx)("h1",{className:"text-4xl mb-4",children:"Profile Page"}),(0,s.jsx)("button",{onClick:h,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4",children:"Logout"}),u?(0,s.jsxs)("div",{onClick:()=>{if(u&&u.username){let t=u.username.replace(/\s+/g,"");e.push("/profile/".concat(t))}},className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full cursor-pointer hover:shadow-lg transition-shadow duration-300",children:[(0,s.jsx)("h2",{className:"text-2xl mb-4 text-center",children:"User Profile"}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"User ID:"}),(0,s.jsx)("p",{className:"text-gray-700",children:u._id})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Username:"}),(0,s.jsx)("p",{className:"text-gray-700",children:u.username})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Email:"}),(0,s.jsx)("p",{className:"text-gray-700",children:u.email})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Admin:"}),(0,s.jsx)("p",{className:"text-gray-700",children:u.isAdmin?"Yes":"No"})]})]}):(0,s.jsx)("p",{children:"No user data available."}),(0,s.jsx)(n.Toaster,{})]}),(0,s.jsx)(d.Z,{})]})}}},function(e){e.O(0,[699,259,726,853,472,971,23,744],function(){return e(e.s=6367)}),_N_E=e.O()}]);