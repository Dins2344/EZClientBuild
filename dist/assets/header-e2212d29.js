import{r as t,_ as o,j as e}from"./index-01798a1d.js";const c=t.lazy(()=>o(()=>import("./loggedIn-fe009671.js"),["assets/loggedIn-fe009671.js","assets/index-01798a1d.js","assets/index-a241e8e9.css","assets/logo-no-background-0edf3043.js","assets/userApis-6fecf29f.js","assets/userInterceptor-ef0a808e.js","assets/envConfig-2c904499.js","assets/organizer-d9f53913.js","assets/useDispatch-b1503bbd.js"])),d=t.lazy(()=>o(()=>import("./logout-d02ac986.js"),["assets/logout-d02ac986.js","assets/index-01798a1d.js","assets/index-a241e8e9.css","assets/logo-no-background-0edf3043.js"])),i=()=>{const[r,s]=t.useState(),n=localStorage.getItem("token"),a=()=>{s(!!n)};return t.useEffect(()=>{a()}),r?e.jsx(e.Fragment,{children:e.jsx(t.Suspense,{children:e.jsx(c,{})})}):e.jsx(e.Fragment,{children:e.jsx(t.Suspense,{children:e.jsx(d,{})})})};export{i as H};