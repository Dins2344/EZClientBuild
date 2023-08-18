import{r as s,u,j as e,c as a,L as j}from"./index-49fb6d1c.js";import{g as N,d as f,a as w,b as v}from"./admin-cf162092.js";import"./envConfig-9a8092f4.js";const b=()=>{const[r,d]=s.useState([]),o=u(),[i,x]=s.useState(!1),[n,l]=s.useState(""),c=()=>x(!i),m=async()=>{const t=await N();d(t==null?void 0:t.data.data)};s.useEffect(()=>{m()},[]);const h=t=>{o(`/admin/edit-event-category/${t}`)},g=async()=>{const t=await f(n);if(console.log(t),t!=null&&t.data.message){const p=r.filter(y=>y._id!==n);d(p),l(""),c()}};return e.jsxs(e.Fragment,{children:[e.jsxs(a.Dialog,{open:i,handler:c,children:[e.jsxs(a.DialogBody,{divider:!0,className:"grid place-items-center gap-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-16 w-16 text-red-500",children:e.jsx("path",{fillRule:"evenodd",d:"M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z",clipRule:"evenodd"})}),e.jsx(a.Typography,{color:"red",variant:"h4",children:"Are you sure..!"}),e.jsx(a.Typography,{className:"text-center font-normal",children:"once you deleted can't be restored"})]}),e.jsxs(a.DialogFooter,{className:"space-x-2",children:[e.jsx(a.Button,{size:"sm",variant:"text",color:"blue-gray",onClick:c,children:"Cancel"}),e.jsx(a.Button,{variant:"gradient",size:"sm",color:"red",onClick:g,children:"Delete"})]})]}),e.jsx("footer",{className:"bg-white rounded-lg shadow my-4 dark:bg-gray-800",children:e.jsxs("div",{className:"w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between",children:[e.jsx("span",{className:"text-lg text-gray-500 sm:text-center dark:text-gray-400",children:"Categories for events"}),e.jsx("ul",{className:"flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0",children:e.jsx("li",{children:e.jsx(j,{to:"/admin/add-event-category",className:"mr-4 hover:underline md:mr-6 ",children:"Add category"})})})]})}),e.jsx("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg mb-14",children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Category name"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Subcategory name"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Description"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),e.jsx("tbody",{children:r&&r.map(t=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:t.categoryName}),e.jsx("td",{className:"px-6 py-4",children:t.subCategoryName}),e.jsx("td",{className:"px-6 py-4",children:t.description}),e.jsxs("td",{className:"px-6 py-4",children:[e.jsx("button",{onClick:()=>{h(t._id)},className:"font-medium text-blue-600 dark:text-blue-500 hover:underline w-12",children:"Edit"}),e.jsx("button",{onClick:()=>{l(t._id),c()},className:"font-medium text-red-600 dark:text-red-500 hover:underline w-12 ml-2",children:"Delete"})]})]},t._id))})]})})]})},k=()=>{const[r,d]=s.useState([]),[o,i]=s.useState(!1),[x,n]=s.useState(""),l=()=>i(!o),c=u(),m=async()=>{const t=await w();d(t==null?void 0:t.data.data)};s.useEffect(()=>{m()},[]);const h=t=>{c(`/admin/edit-event-category/${t}`)},g=async()=>{const t=await v(x);if(t!=null&&t.data.message){const p=r.filter(y=>y._id!==x);d(p),n(""),l()}};return e.jsxs(e.Fragment,{children:[e.jsxs(a.Dialog,{open:o,handler:l,children:[e.jsxs(a.DialogBody,{divider:!0,className:"grid place-items-center gap-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-16 w-16 text-red-500",children:e.jsx("path",{fillRule:"evenodd",d:"M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z",clipRule:"evenodd"})}),e.jsx(a.Typography,{color:"red",variant:"h4",children:"Are you sure..!"}),e.jsx(a.Typography,{className:"text-center font-normal",children:"once you deleted can't be restored"})]}),e.jsxs(a.DialogFooter,{className:"space-x-2",children:[e.jsx(a.Button,{size:"sm",variant:"text",color:"blue-gray",onClick:l,children:"Cancel"}),e.jsx(a.Button,{variant:"gradient",size:"sm",color:"red",onClick:g,children:"Delete"})]})]}),e.jsx("footer",{className:"bg-white rounded-lg shadow my-4 dark:bg-gray-800",children:e.jsxs("div",{className:"w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between",children:[e.jsx("span",{className:"text-lg text-gray-500 sm:text-center dark:text-gray-400",children:"Categories for organizations"}),e.jsx("ul",{className:"flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0",children:e.jsx("li",{children:e.jsx(j,{to:"/admin/add-org-category",className:"mr-4 hover:underline md:mr-6 ",children:"Add category"})})})]})}),e.jsx("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Category name"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Subcategory name"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Description"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),e.jsx("tbody",{children:r&&r.map(t=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:t.categoryName}),e.jsx("td",{className:"px-6 py-4",children:t.subCategoryName}),e.jsx("td",{className:"px-6 py-4",children:t.description}),e.jsxs("td",{className:"px-6 py-4",children:[e.jsx("button",{onClick:()=>{h(t._id)},className:"font-medium text-blue-600 dark:text-blue-500 hover:underline w-12",children:"Edit"}),e.jsx("button",{onClick:()=>{n(t._id),l()},className:"font-medium text-red-600 dark:text-red-500 hover:underline w-12 ml-2",children:"Delete"})]})]},t._id))})]})})]})},A=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"min-h-screen px-4",children:[e.jsx(b,{}),e.jsx(k,{})]})});export{A as default};
