(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{3443:function(e,t,r){Promise.resolve().then(r.bind(r,8606))},8606:function(e,t,r){"use strict";r.r(t);var s=r(7437),a=r(2265),n=r(8932),i=r(101),l=r(6037),c=r(8726);t.default=function(){let{cart:e,removeFromCart:t,updateQuantity:r}=(0,n.j)(),[o,d]=(0,a.useState)(""),[x,u]=(0,a.useState)(0),h=()=>e.reduce((e,t)=>e+t.price*t.quantity,0).toFixed(2),m=e=>(83*e).toFixed(2);return(0,s.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,s.jsx)(i.Z,{}),(0,s.jsxs)("main",{className:"flex-grow p-4",children:[(0,s.jsx)("h1",{className:"text-2xl font-semibold mb-4",children:"Your Cart"}),e.length>0?e.map(e=>(0,s.jsxs)("div",{className:"flex justify-between items-center mb-4 border-b pb-4",children:[(0,s.jsx)("img",{src:e.image,alt:e.title,className:"w-20 h-20 object-cover"}),(0,s.jsxs)("div",{className:"flex-1 ml-4",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold",children:e.title}),(0,s.jsxs)("p",{className:"text-gray-700",children:["₹",m(e.price)]})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("button",{onClick:()=>r(e.id,Math.max(1,e.quantity-1)),className:"bg-gray-300 text-gray-700 px-2 py-1 rounded-md",children:"-"}),(0,s.jsx)("input",{type:"number",value:e.quantity,onChange:t=>r(e.id,Math.max(1,parseInt(t.target.value))),className:"w-16 text-center border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mx-2 text-black"}),(0,s.jsx)("button",{onClick:()=>r(e.id,e.quantity+1),className:"bg-gray-300 text-gray-700 px-2 py-1 rounded-md",children:"+"}),(0,s.jsx)("button",{onClick:()=>t(e.id),className:"text-red-500 hover:text-red-700 ml-4",children:"Remove"})]})]},e.id)):(0,s.jsx)("p",{children:"Your cart is empty."}),e.length>0&&(0,s.jsxs)("div",{className:"mt-6",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold",children:"Cart Summary"}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("p",{children:"Subtotal:"}),(0,s.jsxs)("p",{children:["₹",m(parseFloat(h()))]})]}),(0,s.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,s.jsx)("input",{type:"text",placeholder:"Discount code",value:o,onChange:e=>d(e.target.value),className:"w-48 border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"}),(0,s.jsx)("button",{onClick:()=>{"SAVE10"===o?(u(.1),c.ZP.success("10% discount applied!",{duration:3e3})):"FLAT10"===o?(u(10),c.ZP.success("$10 discount applied!",{duration:3e3})):(u(0),c.ZP.error("Invalid discount code",{duration:3e3}))},className:"bg-purple-700 text-white p-2 rounded-md",children:"Apply"})]}),(0,s.jsxs)("div",{className:"flex justify-between mt-2",children:[(0,s.jsx)("p",{children:"Discount:"}),(0,s.jsx)("p",{children:x<1?"".concat((100*x).toFixed(0),"%"):"₹".concat(m(x))})]}),(0,s.jsxs)("div",{className:"flex justify-between mt-4 text-xl font-semibold",children:[(0,s.jsx)("p",{children:"Total:"}),(0,s.jsxs)("p",{children:["₹",m(parseFloat((()=>{let e=parseFloat(h()),t=x<1?e*x:x;return(x<1?e*(1-x):Math.max(0,e-t)).toFixed(2)})()))]})]}),(0,s.jsx)("button",{onClick:()=>c.ZP.success("Proceeding to checkout..."),className:"bg-green-500 text-white p-2 mt-4 w-full rounded-md",children:"Checkout"})]})]}),(0,s.jsx)(l.Z,{})]})}},6037:function(e,t,r){"use strict";var s=r(7437),a=r(1942),n=r(9690);t.Z=function(){return(0,s.jsx)("footer",{className:"bg-gray-800 p-4 text-center text-white",children:(0,s.jsxs)("div",{className:"container mx-auto flex flex-col items-center",children:[(0,s.jsxs)("div",{className:"flex gap-4 mb-4",children:[(0,s.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.Am9,{size:24})}),(0,s.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.fWC,{size:24})}),(0,s.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.Zf_,{size:24})}),(0,s.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.ltd,{size:24})}),(0,s.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(n.RrF,{size:24})})]}),(0,s.jsxs)("p",{className:"text-gray-400 text-sm",children:["\xa9 ",new Date().getFullYear()," Your Company. All rights reserved."]})]})})}},101:function(e,t,r){"use strict";var s=r(7437),a=r(1942),n=r(7138),i=r(8932);t.Z=function(){let{cart:e}=(0,i.j)(),t=e.reduce((e,t)=>e+t.quantity,0);return(0,s.jsx)("nav",{className:"bg-gray-800 p-4",children:(0,s.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,s.jsx)(n.default,{href:"/",className:"text-white text-xl hover:text-gray-400",children:(0,s.jsx)(a.xng,{size:24})}),(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsxs)(n.default,{href:"/cart",className:"text-white hover:text-gray-400 relative",children:[(0,s.jsx)(a.FeP,{size:24}),t>0&&(0,s.jsx)("span",{className:"absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs",children:t})]}),(0,s.jsx)(n.default,{href:"/profile",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.Xws,{size:24})})]})]})})}},8932:function(e,t,r){"use strict";r.d(t,{CartProvider:function(){return l},j:function(){return c}});var s=r(7437),a=r(2265);let n=(0,a.createContext)(void 0),i=(e,t)=>{switch(t.type){case"ADD_TO_CART":let r=e.findIndex(e=>e.id===t.product.id);if(r>=0)return e.map((e,t)=>t===r?{...e,quantity:e.quantity+1}:e);return[...e,{...t.product,quantity:1}];case"REMOVE_FROM_CART":return e.filter(e=>e.id!==t.id);case"UPDATE_QUANTITY":return e.map(e=>e.id===t.id?{...e,quantity:t.quantity}:e);default:return e}},l=e=>{let{children:t}=e,[r,l]=(0,a.useReducer)(i,[]);return(0,s.jsx)(n.Provider,{value:{cart:r,addToCart:e=>{l({type:"ADD_TO_CART",product:e})},removeFromCart:e=>{l({type:"REMOVE_FROM_CART",id:e})},updateQuantity:(e,t)=>{l({type:"UPDATE_QUANTITY",id:e,quantity:t})}},children:t})},c=()=>{let e=(0,a.useContext)(n);if(!e)throw Error("useCart must be used within a CartProvider");return e}}},function(e){e.O(0,[699,259,726,853,971,23,744],function(){return e(e.s=3443)}),_N_E=e.O()}]);