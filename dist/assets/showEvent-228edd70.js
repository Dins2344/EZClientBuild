import{j as s,c as o,r as c,u as y,a as v,s as C,_ as F}from"./index-49fb6d1c.js";import{a as O,b as E,c as D,u as S,d as B}from"./userApis-33cbdc1e.js";import{S as H}from"./starRating-a10a239b.js";import{k as g,Q as u}from"./ReactToastify-489188e9.js";import"./userInterceptor-eb453d1e.js";import"./envConfig-9a8092f4.js";import"./index.esm-57c67a51.js";const A=({images:e})=>s.jsx(o.Carousel,{className:"h-96",navigation:({setActiveIndex:a,activeIndex:t,length:i})=>s.jsx("div",{className:"absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2",children:new Array(i).fill("").map((l,r)=>s.jsx("span",{className:`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${t===r?"bg-white w-8":"bg-white/50 w-4"}`,onClick:()=>a(r)},r))}),children:e&&e.map(a=>s.jsx("img",{src:a,alt:"image 1",className:"h-full w-full object-cover"},a))}),I=({event:e})=>{const[a,t]=c.useState();c.useEffect(()=>{i()},[]);const i=async()=>{const l=await O(e._id);t(l==null?void 0:l.data.data.reviews)};return s.jsx(s.Fragment,{children:s.jsx("div",{className:" mt-5 mb-10",children:s.jsxs("div",{className:"flex flex-col",children:[s.jsxs("p",{className:"font-bold",children:["Date : ",e==null?void 0:e.startDate]}),s.jsx("h1",{className:"mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white",children:e==null?void 0:e.eventName}),s.jsxs("div",{className:"flex flex-col mt-8",children:[s.jsx("h3",{className:"text-3xl font-bold dark:text-white block",children:"When & Where"}),s.jsxs("div",{className:"flex flex-wrap mt-5",children:[s.jsxs("div",{className:"flex flex-col w-full md:w-1/2 p-5",children:[s.jsxs("div",{className:"flex",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:s.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"})}),s.jsx("h5",{className:"text-xl font-bold dark:text-white mb-3",children:"Date & Time"})]}),s.jsxs("p",{className:"mb-3",children:["Start time: ",e==null?void 0:e.startDate," ",e==null?void 0:e.startTime]}),s.jsxs("p",{children:["End time: ",e==null?void 0:e.endDate," ",e==null?void 0:e.endTime]})]}),s.jsxs("div",{className:"flex flex-col w-full md:w-1/2 p-5",children:[s.jsxs("div",{className:"flex",children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:[s.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),s.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),s.jsx("h5",{className:"text-xl font-bold dark:text-white mb-3",children:"Location"})]}),s.jsxs("p",{className:"mb-3",children:[e==null?void 0:e.addressLine1," ",e==null?void 0:e.addressLine2]}),s.jsxs("p",{children:[e==null?void 0:e.city,",",e==null?void 0:e.state]})]})]})]}),s.jsxs("div",{className:"flex flex-col w-full",children:[s.jsx("h3",{className:"text-3xl font-bold dark:text-white block ",children:"About this event"}),s.jsxs("div",{className:"flex flex-col",children:[s.jsxs("h5",{className:"text-xl font-bold dark:text-white mt-3 mb-3",children:["Reviews (",a!=null&&a.length?a.length:"0",")"]}),a!=null&&a.length?s.jsx(s.Fragment,{children:s.jsx("div",{className:"w-full flex flex-col max-h-60 border-2 p-2",children:a==null?void 0:a.map(l=>{var r;return s.jsxs("div",{className:"flex flex-col border p-2",children:[s.jsxs("div",{className:"flex",children:[s.jsx(H,{rating:l.rating}),s.jsxs("p",{className:"ml-2",children:[l.rating," stars"]})]}),s.jsx("p",{className:"mb-2",children:l.comment}),s.jsxs("div",{className:"flex",children:[s.jsx(o.Avatar,{className:"w-7 h-7",size:"sm",src:l&&((r=l==null?void 0:l.userId)==null?void 0:r.profileImage)}),s.jsxs("p",{className:"ml-2 ",children:[l.userId.firstName," ",l.userId.lastName]})]})]},l._id)})})}):s.jsx(s.Fragment,{children:s.jsx("div",{className:"flex flex-col border p-2 h-16 justify-center",children:s.jsx("h3",{children:"No one have reviewed yet....!"})})}),s.jsx("h5",{className:"text-xl font-bold dark:text-white mt-3 mb-3",children:"Event description"}),s.jsx("p",{className:"mb-3 text-gray-500 dark:text-gray-400",children:e==null?void 0:e.description}),s.jsx("h5",{className:"text-xl font-bold dark:text-white mt-3 mb-3",children:"Agenda"}),s.jsx("p",{className:"mb-3 text-gray-500 dark:text-gray-400",children:e==null?void 0:e.agenda}),s.jsxs("p",{children:["event category:"," ",s.jsx("span",{className:"mb-3 text-gray-500 dark:text-gray-400",children:e==null?void 0:e.category})]}),s.jsxs("p",{children:["event capacity:"," ",s.jsx("span",{className:"mb-3 text-gray-500 dark:text-gray-400",children:e==null?void 0:e.eventCapacity})]})]})]}),s.jsx(R,{event:e})]})})})},R=({event:e})=>{const[a,t]=c.useState(),[i,l]=c.useState(e.organizerInfo.followers.length),[r,p]=c.useState(!1),h=()=>p(!r),x=e.organizerInfo,m=y(),j=v(C),f=localStorage.getItem("token");c.useEffect(()=>{w()},[]);const w=async()=>{if(j){const d=await E();d!=null&&d.data.data.following.includes(e.organizer)&&t(!0)}else t(!1)},N=async d=>{if(!f)h();else{const n=await D(d);n!=null&&n.data.response.ok&&(t(!0),l(i+1),z())}},b=async d=>{const n=await S(d);n!=null&&n.data.response.ok&&(t(!1),l(i-1),k())},k=()=>{u.warn("You will no longer receive updates from the organizer...!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},z=()=>{u.success("You will receive updates from the organizer....!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})};return s.jsxs(s.Fragment,{children:[s.jsx(g,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),s.jsx(g,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),s.jsxs(o.Dialog,{open:r,handler:h,children:[s.jsxs(o.DialogBody,{divider:!0,className:"grid place-items-center gap-4",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-16 w-16 text-red-500",children:s.jsx("path",{fillRule:"evenodd",d:"M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z",clipRule:"evenodd"})}),s.jsx(o.Typography,{color:"red",variant:"h4",children:"You should login...!"}),s.jsx(o.Typography,{className:"text-center font-normal",children:"You should have to login to explore more features"})]}),s.jsxs(o.DialogFooter,{className:"space-x-2",children:[s.jsx(o.Button,{size:"sm",variant:"text",color:"red",onClick:h,children:"close"}),s.jsx(o.Button,{size:"sm",onClick:()=>{m("/register/user-login")},children:"lets login"})]})]}),s.jsxs("div",{className:"flex flex-col mt-8",children:[s.jsx("h3",{className:"text-3xl  font-bold dark:text-white block mb-3",children:"About the organizer"}),s.jsxs("div",{className:"flex flex-col place-items-center border mt-3 rounded-md shadow-md p-5",children:[s.jsx("img",{className:"rounded-full w-20 h-20 mb-5 mt-10",src:x.logo?x.logo:"https://img.freepik.com/free-icon/user_318-159711.jpg",alt:"image description"}),s.jsx("p",{children:"Organized by"}),s.jsx("h3",{className:"text-3xl mb-5 font-bold dark:text-white",children:x==null?void 0:x.orgName}),s.jsx("p",{children:i}),s.jsx("p",{className:"font-bold mb-4",children:"Followers"}),s.jsxs("div",{className:"flex mt-3",children:[s.jsx(o.Button,{className:"mr-3",size:"sm",color:"blue",variant:"outlined",onClick:()=>{f?m(`/show-organizer/?id=${e.organizer}`):h()},children:"View"}),a?s.jsx(o.Button,{onClick:()=>b(e.organizer),size:"sm",children:"Unfollow"}):s.jsx(o.Button,{onClick:()=>{N(e.organizer)},size:"sm",children:"Follow"})]})]})]})]})},_=c.lazy(()=>F(()=>import("./reserveSeat-db4c350d.js"),["assets/reserveSeat-db4c350d.js","assets/index-49fb6d1c.js","assets/index-a241e8e9.css","assets/userApis-33cbdc1e.js","assets/userInterceptor-eb453d1e.js","assets/envConfig-9a8092f4.js","assets/ReactToastify-489188e9.js","assets/ReactToastify-f2ebcc7d.css"])),W=()=>{const[e,a]=c.useState(),t=async i=>{const l=await B(i),r=l==null?void 0:l.data.data[0];r&&a(r)};return c.useEffect(()=>{const l=new URLSearchParams(window.location.search).get("id");l&&t(l)},[]),s.jsx(s.Fragment,{children:e&&s.jsxs(s.Fragment,{children:[s.jsx(A,{images:e.imageURL}),s.jsx("div",{className:"flex md:mx-14 px-3 lg:px-10",children:s.jsxs("div",{className:"flex flex-wrap w-full",children:[s.jsx("div",{className:"md:w-8/12 w-full px-8 lg:px-14",children:s.jsx(I,{event:e})}),s.jsx("div",{className:"md:w-4/12 w-full sticky bottom-0 lg:px-5",children:s.jsx(c.Suspense,{children:s.jsx(_,{eventDetails:e})})})]})})]})})};export{W as default};
