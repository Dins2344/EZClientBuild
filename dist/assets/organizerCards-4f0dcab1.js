import{r as d,u as f,j as e,c as l}from"./index-5987b9c5.js";import{h as w,k as p,j}from"./userApis-7fd80f2c.js";import{k as i,Q as n}from"./ReactToastify-caef8927.js";const N=({organization:s})=>{const[t,a]=d.useState();d.useEffect(()=>{c()},[]);const c=async()=>{const o=await w();o!=null&&o.data.data.following.includes(s._id)&&a(!0)},m=async o=>{const r=await p(o);console.log(r==null?void 0:r.data),r!=null&&r.data.response.ok&&(a(!0),x())},u=async o=>{const r=await j(o);r!=null&&r.data.response.ok&&(a(!1),h())},g=f(),h=()=>{n.warn("You will no longer receive updates from the organizer...!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},x=()=>{n.success("You will receive updates from the organizer....!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})};return e.jsxs(e.Fragment,{children:[e.jsx(i,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx(i,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx("div",{className:" px-5 w-64 mr-3 max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",children:e.jsxs("div",{className:"flex flex-col w-full items-center mt-10 pb-10",children:[e.jsx("img",{className:"w-24 h-24 mb-3 rounded-full shadow-lg",src:s.logo?s.logo:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:"Bonnie image"}),e.jsx("h5",{className:"mb-1 text-xl font-medium text-gray-900 dark:text-white",children:s.orgName}),e.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Followers count"}),e.jsxs("div",{className:"flex justify-between mt-4 space-x-3 w-48 md:mt-6",children:[t?e.jsx(l.Button,{onClick:()=>u(s._id),size:"sm",children:"Unfollow"}):e.jsx(l.Button,{onClick:()=>m(s._id),size:"sm",children:"Follow"}),e.jsx(l.Button,{onClick:()=>{const o=s._id;g(`/show-organizer/?id=${o}`)},size:"sm",variant:"outlined",children:"View"})]})]})},s._id)]})},k=()=>{const s=new Array(10).fill(0);return e.jsx(e.Fragment,{children:s.map((t,a)=>e.jsxs("div",{className:"p-3",children:[e.jsx("p",{className:"hidden",children:t}),e.jsxs("div",{className:"w-52 h-64 border-2 rounded-md border-gray-300 animate-pulse flex flex-col items-center",children:[e.jsx("div",{className:"rounded-full w-20 h-20 bg-gray-300 mt-10"}),e.jsx("div",{className:"w-20 h-4 bg-gray-300 mt-2"}),e.jsx("div",{className:"w-14 h-3 bg-gray-300 mt-1"}),e.jsxs("div",{className:"flex justify-between w-full px-2 mt-12",children:[e.jsx("div",{className:"w-20 h-8 bg-gray-300"}),e.jsx("div",{className:"w-20 h-8 bg-gray-300"})]})]})]},a))})};export{k as O,N as a};
