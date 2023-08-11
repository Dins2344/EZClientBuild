import{r,j as e,L as u,c as s}from"./index-1fe445a4.js";import{n as g,q as y}from"./admin-cf162092.js";import{k as j,Q as f}from"./ReactToastify-97604f09.js";import"./envConfig-9a8092f4.js";const w=()=>{const[o,d]=r.useState(),[n,i]=r.useState(!1),[c,x]=r.useState(!1),a=()=>i(!n);r.useEffect(()=>{m()},[c]);const m=async()=>{const t=await g();console.log(t),d(t==null?void 0:t.data.data)},h=async t=>{const l=await y(t);l!=null&&l.data.ok&&(a(),p(),x(!c))},p=()=>{f.success("successfully deleted a city!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})};return e.jsxs(e.Fragment,{children:[e.jsx(j,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx("footer",{className:"bg-white rounded-lg shadow my-4 dark:bg-gray-800",children:e.jsxs("div",{className:"w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between",children:[e.jsx("span",{className:"text-lg text-gray-500 sm:text-center dark:text-gray-400",children:"Cities Hosting Events"}),e.jsx("ul",{className:"flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0",children:e.jsx("li",{children:e.jsx(u,{to:"/admin/add-cities/add-event-city",className:"mr-4 hover:underline md:mr-6 ",children:"Add a city"})})})]})}),e.jsx("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg mb-14",children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"City name"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"State"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),e.jsx("tbody",{children:o&&o.map(t=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:t.cityName}),e.jsx("td",{className:"px-6 py-4",children:t.state}),e.jsxs("td",{className:"px-6 py-4",children:[e.jsx("button",{className:"font-medium text-red-600 dark:text-red-500 hover:underline w-12 ml-2",onClick:a,children:"Delete"}),e.jsxs(s.Dialog,{open:n,handler:a,children:[e.jsxs(s.DialogBody,{className:"grid place-items-center gap-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-16 w-16 text-red-500",children:e.jsx("path",{fillRule:"evenodd",d:"M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z",clipRule:"evenodd"})}),e.jsx(s.Typography,{color:"red",variant:"h4",children:"Are you sure!"}),e.jsx(s.Typography,{className:"text-center font-normal",children:"You are about to delete important data. This action cannot be undone, and the data will be permanently lost."})]}),e.jsxs(s.DialogFooter,{className:"space-x-2",children:[e.jsx(s.Button,{variant:"text",color:"blue-gray",size:"sm",onClick:a,children:"close"}),e.jsx(s.Button,{variant:"gradient",size:"sm",color:"red",onClick:()=>h(t._id),children:"delete"})]})]})]})]},t._id))})]})})]})},C=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"min-h-screen px-4",children:e.jsx(w,{})})});export{C as default};
