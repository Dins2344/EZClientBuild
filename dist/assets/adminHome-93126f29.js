import{r as s,_ as i,u as c,j as e}from"./index-2f93e65a.js";const l=s.lazy(()=>i(()=>import("./dashboardComponents-74e62573.js"),["assets/dashboardComponents-74e62573.js","assets/index-2f93e65a.js","assets/index-53bd7d69.css","assets/admin-5c35e7a4.js","assets/envConfig-25a527f2.js","assets/react-apexcharts.min-a7e5a582.js"])),g=()=>{const[t,n]=s.useState(),a=c(),o=localStorage.getItem("adminToken"),r=()=>{n(!!o)};return s.useEffect(()=>{r()}),t?e.jsx(e.Fragment,{children:e.jsx("div",{className:"min-h-screen px-4",children:e.jsx(s.Suspense,{children:e.jsx(l,{})})})}):(a("/admin/login"),null)};export{g as default};
