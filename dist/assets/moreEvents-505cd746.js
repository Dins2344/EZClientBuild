import{r,_ as i,j as e}from"./index-115ee365.js";import{B as m}from"./userApis-d8269ce8.js";import{EventCardsShimmer as c}from"./eventCards-22a8dee7.js";import"./userInterceptor-ef0a808e.js";import"./envConfig-2c904499.js";import"./ReactToastify-004524da.js";import"./index-a56cd223.js";import"./useDispatch-549d81b8.js";const d=r.lazy(()=>i(()=>import("./eventCards-22a8dee7.js"),["assets/eventCards-22a8dee7.js","assets/index-115ee365.js","assets/index-24626ca1.css","assets/userApis-d8269ce8.js","assets/userInterceptor-ef0a808e.js","assets/envConfig-2c904499.js","assets/ReactToastify-004524da.js","assets/ReactToastify-f2ebcc7d.css","assets/index-a56cd223.js","assets/useDispatch-549d81b8.js"])),w=()=>{const[s,a]=r.useState(),[o,n]=r.useState(!1),l=async()=>{const t=await m();a(t==null?void 0:t.data.data),setTimeout(()=>n(!1),2e3)};return r.useEffect(()=>{n(!0),l()},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:" mt-24  w-full px-5 md:px-20",children:[e.jsxs("h4",{className:"text-2xl pl-4 mb-10 font-bold dark:text-white ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-10 h-10 mr-2 inline-block",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"})}),"More events for you"]}),(s==null?void 0:s.length)===0?e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full flex justify-center h-80 items-center",children:e.jsx("h4",{className:"text-2xl md:text-4xl",children:"Apologies, but it seems that there are currently no events available."})})}):e.jsx("div",{className:"flex flex-wrap ",children:o?e.jsx(e.Fragment,{children:e.jsx(c,{})}):e.jsx(e.Fragment,{children:e.jsx(r.Suspense,{children:s&&s.map(t=>e.jsx(d,{approvedEvent:t},t._id))})})})]})})};export{w as default};
