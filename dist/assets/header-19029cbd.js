import{r as t,_ as o,j as e}from"./index-5987b9c5.js";const c=t.lazy(()=>o(()=>import("./loggedIn-934d60fb.js"),["assets/loggedIn-934d60fb.js","assets/index-5987b9c5.js","assets/index-53bd7d69.css","assets/logo-no-background-0edf3043.js","assets/userApis-7fd80f2c.js","assets/userInterceptor-9200eaeb.js","assets/envConfig-92d5628e.js","assets/admin-a8dedc52.js","assets/organizer-f5f7f7a1.js","assets/useDispatch-732b0af0.js"])),d=t.lazy(()=>o(()=>import("./logout-d0bf9b75.js"),["assets/logout-d0bf9b75.js","assets/index-5987b9c5.js","assets/index-53bd7d69.css","assets/logo-no-background-0edf3043.js"])),i=()=>{const[r,s]=t.useState(),n=localStorage.getItem("token"),a=()=>{s(!!n)};return t.useEffect(()=>{a()}),r?e.jsx(e.Fragment,{children:e.jsx(t.Suspense,{children:e.jsx(c,{})})}):e.jsx(e.Fragment,{children:e.jsx(t.Suspense,{children:e.jsx(d,{})})})};export{i as H};
