import{r as s,_ as i,u as c,j as e}from"./index-01798a1d.js";const d=s.lazy(()=>i(()=>import("./dashboardComponents-a072753b.js"),["assets/dashboardComponents-a072753b.js","assets/index-01798a1d.js","assets/index-a241e8e9.css","assets/admin-405496b7.js","assets/envConfig-2c904499.js","assets/react-apexcharts.min-42ead555.js"])),g=()=>{const[t,n]=s.useState(),a=c(),o=()=>{const r=localStorage.getItem("adminToken");n(!!r)};return s.useEffect(()=>{o()}),t?e.jsx(e.Fragment,{children:e.jsx("div",{className:"min-h-screen px-4",children:e.jsx(s.Suspense,{children:e.jsx(d,{})})})}):e.jsx(e.Fragment,{children:a("/admin/login")})};export{g as default};