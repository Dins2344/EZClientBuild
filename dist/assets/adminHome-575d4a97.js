import{r as l,u as i,j as e,L as a,O as n}from"./index-5987b9c5.js";import{n as o}from"./logo-no-background-0edf3043.js";import{u as d}from"./useIsOnline-4dc9fcdd.js";import{F as h}from"./footer-4c4cccb4.js";const g=()=>{const[r,t]=l.useState("dashboard"),s=i();return e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:"fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700",children:e.jsx("div",{className:"px-3 py-3 lg:px-5 lg:pl-3",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center justify-start",children:[e.jsxs("button",{"data-drawer-target":"logo-sidebar","data-drawer-toggle":"logo-sidebar","aria-controls":"logo-sidebar",type:"button",className:"inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})]}),e.jsxs(a,{to:"/admin",className:"flex ml-2 md:mr-24",children:[e.jsx("img",{src:o,className:"h-8 mr-3",alt:"FlowBite Logo"}),e.jsx("span",{className:"self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white",children:"Admin panel"})]})]}),e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"flex items-center ml-3",children:[e.jsx("div",{children:e.jsxs("button",{type:"button",className:"flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600","aria-expanded":"false","data-dropdown-toggle":"dropdown-user",children:[e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{className:"w-8 h-8 rounded-full",src:"https://flowbite.com/docs/images/people/profile-picture-5.jpg",alt:"user photo"})]})}),e.jsxs("div",{className:"z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600",id:"dropdown-user",children:[e.jsxs("div",{className:"px-4 py-3",role:"none",children:[e.jsx("p",{className:"text-sm text-gray-900 dark:text-white",role:"none",children:"Neil Sims"}),e.jsx("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-gray-300",role:"none",children:"neil.sims@flowbite.com"})]}),e.jsxs("ul",{className:"py-1",role:"none",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem",children:"Dashboard"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem",children:"Settings"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem",children:"Earnings"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>{localStorage.removeItem("adminToken"),s("/admin/login")},className:"block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem",children:"Sign out"})})]})]})]})})]})})}),e.jsx("aside",{id:"logo-sidebar",className:"fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700","aria-label":"Sidebar",children:e.jsx("div",{className:"h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800",children:e.jsxs("ul",{className:"space-y-2 font-medium",children:[e.jsx("li",{children:e.jsxs(a,{to:"/admin",onClick:()=>t("dashboard"),className:`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${r==="dashboard"&&"bg-gray-100"}`,children:[e.jsxs("svg",{"aria-hidden":"true",className:"w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}),e.jsx("path",{d:"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"})]}),e.jsx("span",{className:"ml-3",children:"Dashboard"})]})}),e.jsx("li",{children:e.jsxs(a,{to:"/admin/category-management",onClick:()=>t("category"),className:`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${r==="category"&&"bg-gray-100"}`,children:[e.jsx("svg",{"aria-hidden":"true",className:"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),e.jsx("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Category management"})]})}),e.jsx("li",{children:e.jsxs(a,{to:"/admin/events-management",onClick:()=>t("events"),className:`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${r==="events"&&"bg-gray-100"}`,children:[e.jsxs("svg",{"aria-hidden":"true",className:"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"}),e.jsx("path",{d:"M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"})]}),e.jsx("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Events management"}),e.jsx("span",{className:"inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300",children:"3"})]})}),e.jsx("li",{children:e.jsxs(a,{to:"/admin/users-organization-management",onClick:()=>t("user"),className:`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${r==="user"&&"bg-gray-100"}`,children:[e.jsx("svg",{"aria-hidden":"true",className:"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"})}),e.jsx("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Users/Organizations"})]})}),e.jsx("li",{children:e.jsxs(a,{to:"/admin/add-cities",onClick:()=>t("city"),className:`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${r==="city"&&"bg-gray-100"}`,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"})}),e.jsx("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Add cities"})]})})]})})})]})},u=()=>d()?e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx("div",{className:"px-4 py-8 sm:ml-64 mt-12 bg-blue-gray-50",children:e.jsx(n,{})}),e.jsx(h,{})]}):e.jsx(e.Fragment,{children:e.jsx("p",{children:"your offline"})});export{u as default};
