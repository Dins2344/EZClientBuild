import{r as s,_ as i,u as c,j as e}from"./index-eb407973.js";const d=s.lazy(()=>i(()=>import("./dashboardComponents-b7aa344a.js"),["assets/dashboardComponents-b7aa344a.js","assets/index-eb407973.js","assets/index-24626ca1.css","assets/admin-405496b7.js","assets/envConfig-2c904499.js","assets/react-apexcharts.min-c6099d3e.js"])),g=()=>{const[t,n]=s.useState(),a=c(),o=()=>{const r=localStorage.getItem("adminToken");n(!!r)};return s.useEffect(()=>{o()}),t?e.jsx(e.Fragment,{children:e.jsx("div",{className:"min-h-screen px-4",children:e.jsx(s.Suspense,{children:e.jsx(d,{})})})}):e.jsx(e.Fragment,{children:a("/admin/login")})};export{g as default};
