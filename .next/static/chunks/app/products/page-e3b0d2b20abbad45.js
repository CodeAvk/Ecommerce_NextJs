(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[286],{5610:function(e,t,r){Promise.resolve().then(r.bind(r,4761))},6037:function(e,t,r){"use strict";var s=r(7437),a=r(1942),l=r(9690);t.Z=function(){return(0,s.jsx)("footer",{className:"bg-gray-800 p-4 text-center text-white",children:(0,s.jsxs)("div",{className:"container mx-auto flex flex-col items-center",children:[(0,s.jsxs)("div",{className:"flex gap-4 mb-4",children:[(0,s.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.Am9,{size:24})}),(0,s.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.fWC,{size:24})}),(0,s.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.Zf_,{size:24})}),(0,s.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.ltd,{size:24})}),(0,s.jsx)("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400",children:(0,s.jsx)(l.RrF,{size:24})})]}),(0,s.jsxs)("p",{className:"text-gray-400 text-sm",children:["\xa9 ",new Date().getFullYear()," Your Company. All rights reserved."]})]})})}},5248:function(e,t,r){"use strict";var s=r(7437);r(2265),t.Z=function(){return(0,s.jsx)("div",{className:"flex items-center justify-center min-h-screen",children:(0,s.jsx)("div",{className:"w-16 h-16 border-4 border-t-4 border-purple-500 border-solid rounded-full animate-spin"})})}},101:function(e,t,r){"use strict";var s=r(7437),a=r(1942),l=r(7138),i=r(8932);t.Z=function(){let{cart:e}=(0,i.j)(),t=e.reduce((e,t)=>e+t.quantity,0);return(0,s.jsx)("nav",{className:"bg-gray-800 p-4",children:(0,s.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,s.jsx)(l.default,{href:"/",className:"text-white text-xl hover:text-gray-400",children:(0,s.jsx)(a.xng,{size:24})}),(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsxs)(l.default,{href:"/cart",className:"text-white hover:text-gray-400 relative",children:[(0,s.jsx)(a.FeP,{size:24}),t>0&&(0,s.jsx)("span",{className:"absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs",children:t})]}),(0,s.jsx)(l.default,{href:"/profile",className:"text-white hover:text-gray-400",children:(0,s.jsx)(a.Xws,{size:24})})]})]})})}},8932:function(e,t,r){"use strict";r.d(t,{CartProvider:function(){return c},j:function(){return n}});var s=r(7437),a=r(2265);let l=(0,a.createContext)(void 0),i=(e,t)=>{switch(t.type){case"ADD_TO_CART":let r=e.findIndex(e=>e.id===t.product.id);if(r>=0)return e.map((e,t)=>t===r?{...e,quantity:e.quantity+1}:e);return[...e,{...t.product,quantity:1}];case"REMOVE_FROM_CART":return e.filter(e=>e.id!==t.id);case"UPDATE_QUANTITY":return e.map(e=>e.id===t.id?{...e,quantity:t.quantity}:e);default:return e}},c=e=>{let{children:t}=e,[r,c]=(0,a.useReducer)(i,[]);return(0,s.jsx)(l.Provider,{value:{cart:r,addToCart:e=>{c({type:"ADD_TO_CART",product:e})},removeFromCart:e=>{c({type:"REMOVE_FROM_CART",id:e})},updateQuantity:(e,t)=>{c({type:"UPDATE_QUANTITY",id:e,quantity:t})}},children:t})},n=()=>{let e=(0,a.useContext)(l);if(!e)throw Error("useCart must be used within a CartProvider");return e}},4761:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var s=r(7437),a=r(2265),l=r(8472),i=r(5678),c=r(8726);let n=e=>(83*e).toFixed(2);var o=function(e){let{product:t,onAddToCart:r}=e,[l,o]=(0,a.useState)(!1);return(0,s.jsxs)(i.E.div,{className:"bg-white rounded-lg shadow-md p-4 cursor-pointer w-64 h-80 flex flex-col",whileHover:{scale:1.05},transition:{duration:.2},onHoverStart:()=>o(!0),onHoverEnd:()=>o(!1),onClick:()=>{r(t),c.Am.success("".concat(t.title," added to cart!"),{position:"bottom-right",duration:2e3})},children:[(0,s.jsxs)("div",{className:"flex-grow overflow-hidden",children:[(0,s.jsx)("img",{src:t.image,alt:t.title,className:"w-full h-40 object-cover mb-2 rounded-md"}),(0,s.jsx)("h3",{className:"text-lg font-semibold mb-1 line-clamp-2 overflow-hidden text-black",children:t.title}),(0,s.jsxs)("p",{className:"text-gray-600 mb-2",children:["₹",n(t.price)]})]}),(0,s.jsx)(i.E.button,{className:"w-full py-2 rounded-md transition-colors ".concat(l?"bg-purple-700 text-white":"bg-purple-100 text-purple-700"),whileTap:{scale:.95},children:l?"Add to Cart":"View Product"})]})},d=r(8932),u=r(101),x=r(6037),h=r(5248),m=r(1942),p=function(){let{addToCart:e}=(0,d.j)(),[t,r]=(0,a.useState)([]),[i,c]=(0,a.useState)(!0),[n,p]=(0,a.useState)(""),[f,j]=(0,a.useState)("");(0,a.useEffect)(()=>{(async()=>{try{let{data:e}=await l.Z.get("https://fakestoreapi.com/products");r(e)}catch(e){console.error("Error fetching products:",e)}finally{c(!1)}})()},[]);let v=t.filter(e=>e.title.toLowerCase().includes(n.toLowerCase())).sort((e,t)=>"price-asc"===f?e.price-t.price:"price-desc"===f?t.price-e.price:"title-asc"===f?e.title.localeCompare(t.title):"title-desc"===f?t.title.localeCompare(e.title):0);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Z,{}),(0,s.jsxs)("div",{className:"p-4",children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center mb-4",children:[(0,s.jsxs)("div",{className:"relative w-full md:w-auto mb-2 md:mb-0 md:mr-4",children:[(0,s.jsx)("input",{type:"text",placeholder:"Search products...",value:n,onChange:e=>{p(e.target.value)},className:"border border-gray-300 p-2 pl-10 rounded text-black w-full"}),(0,s.jsx)(m.U41,{className:"absolute left-3 top-3 text-black"})]}),(0,s.jsxs)("div",{className:"relative w-full md:w-auto",children:[(0,s.jsxs)("select",{value:f,onChange:e=>{j(e.target.value)},className:"border border-gray-300 p-2 pl-10 rounded text-black w-full",children:[(0,s.jsx)("option",{value:"",className:"text-black",children:"Sort by"}),(0,s.jsx)("option",{value:"price-asc",className:"text-black",children:"Price: Low to High"}),(0,s.jsx)("option",{value:"price-desc",className:"text-black",children:"Price: High to Low"}),(0,s.jsx)("option",{value:"title-asc",className:"text-black",children:"Title: A-Z"}),(0,s.jsx)("option",{value:"title-desc",className:"text-black",children:"Title: Z-A"})]}),(0,s.jsx)(m.ulB,{className:"absolute left-3 top-3 text-black"})]})]}),i?(0,s.jsx)(h.Z,{}):(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:v.map(t=>(0,s.jsx)(o,{product:t,onAddToCart:e},t.id))})]}),(0,s.jsx)(x.Z,{})]})}}},function(e){e.O(0,[699,259,726,853,472,678,971,23,744],function(){return e(e.s=5610)}),_N_E=e.O()}]);