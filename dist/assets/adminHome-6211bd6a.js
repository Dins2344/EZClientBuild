import{r as s,_ as i,u as c,j as e}from"./index-f1de148d.js";const d=s.lazy(()=>i(()=>import("./dashboardComponents-25f276bf.js"),["assets/dashboardComponents-25f276bf.js","assets/index-f1de148d.js","assets/index-a241e8e9.css","assets/admin-405496b7.js","assets/envConfig-2c904499.js","assets/react-apexcharts.min-793b7462.js"])),g=()=>{const[t,n]=s.useState(),a=c(),o=()=>{const r=localStorage.getItem("adminToken");n(!!r)};return s.useEffect(()=>{o()}),t?e.jsx(e.Fragment,{children:e.jsx("div",{className:"min-h-screen px-4",children:e.jsx(s.Suspense,{children:e.jsx(d,{})})})}):e.jsx(e.Fragment,{children:a("/admin/login")})};export{g as default};
