import{r as t,_ as o,j as e}from"./index-aa30c290.js";const c=t.lazy(()=>o(()=>import("./loggedIn-a81e2bee.js"),["assets/loggedIn-a81e2bee.js","assets/index-aa30c290.js","assets/index-b4a2dc1c.css","assets/logo-no-background-0edf3043.js","assets/userApis-2bde5bf5.js","assets/userInterceptor-ef0a808e.js","assets/envConfig-2c904499.js","assets/organizer-ff67fd88.js","assets/useDispatch-907d60ab.js"])),d=t.lazy(()=>o(()=>import("./logout-b1224749.js"),["assets/logout-b1224749.js","assets/index-aa30c290.js","assets/index-b4a2dc1c.css","assets/logo-no-background-0edf3043.js"])),i=()=>{const[r,s]=t.useState(),n=localStorage.getItem("token"),a=()=>{s(!!n)};return t.useEffect(()=>{a()}),r?e.jsx(e.Fragment,{children:e.jsx(t.Suspense,{children:e.jsx(c,{})})}):e.jsx(e.Fragment,{children:e.jsx(t.Suspense,{children:e.jsx(d,{})})})};export{i as H};