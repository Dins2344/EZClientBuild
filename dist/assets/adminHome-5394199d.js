import{r as s,_ as i,u as c,j as e}from"./index-0cc785ab.js";const d=s.lazy(()=>i(()=>import("./dashboardComponents-1e1bc910.js"),["assets/dashboardComponents-1e1bc910.js","assets/index-0cc785ab.js","assets/index-24626ca1.css","assets/admin-cf162092.js","assets/envConfig-9a8092f4.js","assets/react-apexcharts.min-7d4f0d80.js"])),g=()=>{const[t,n]=s.useState(),a=c(),o=()=>{const r=localStorage.getItem("adminToken");n(!!r)};return s.useEffect(()=>{o()}),t?e.jsx(e.Fragment,{children:e.jsx("div",{className:"min-h-screen px-4",children:e.jsx(s.Suspense,{children:e.jsx(d,{})})})}):e.jsx(e.Fragment,{children:a("/admin/login")})};export{g as default};