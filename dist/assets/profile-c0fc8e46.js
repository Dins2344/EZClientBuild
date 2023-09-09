import{a as n,s as o,u as a,j as e,r as t,_ as c}from"./index-115ee365.js";const x=()=>{var r,l;const s=n(o),i=a();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-full px-2 bg-gradient-to-b from-blue-gray-300 pt-2",children:e.jsxs("div",{className:"flex flex-wrap ",children:[e.jsx("img",{className:"h-20 w-20 rounded-full",src:s.profileImage,alt:"https://img.freepik.com/free-icon/user_318-159711.jpg"}),e.jsxs("div",{className:"flex flex-col ml-4 justify-center",children:[e.jsxs("div",{className:"flex",children:[e.jsxs("h3",{className:"text-2xl",children:[s.firstName," ",s.lastName]}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6 ml-5 hover:cursor-pointer",onClick:()=>i("/user/edit-profile"),children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("p",{children:["likes ",(r=s.likedEvents)==null?void 0:r.length," events"]}),e.jsxs("p",{children:["following ",(l=s.following)==null?void 0:l.length," organizations"]})]})]})]})})})},d=t.lazy(()=>c(()=>import("./userActivities-ca56d07e.js"),["assets/userActivities-ca56d07e.js","assets/index-115ee365.js","assets/index-24626ca1.css","assets/userApis-d8269ce8.js","assets/userInterceptor-ef0a808e.js","assets/envConfig-2c904499.js","assets/organizerCards-663d7eb2.js","assets/ReactToastify-004524da.js","assets/ReactToastify-f2ebcc7d.css","assets/index-a56cd223.js","assets/useDispatch-549d81b8.js"])),f=()=>{const[s,i]=t.useState(""),r=a();return t.useEffect(()=>{const l=localStorage.getItem("token");l&&i(l),l||r("/")},[]),e.jsx(e.Fragment,{children:s&&e.jsxs("div",{className:"flex flex-wrap px-7 md:px-20 lg:px-32 xlg:px-44 mt-12 min-h-screen mb-10",children:[e.jsx("div",{className:"w-full md:w-4/12",children:e.jsx(x,{})}),e.jsx("div",{className:" w-full md:w-8/12",children:e.jsx(t.Suspense,{children:e.jsx(d,{})})})]})})};export{f as default};
