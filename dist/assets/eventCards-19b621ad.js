import{r as d,u as y,a as j,s as b,b as w,j as e,c as r,o as k}from"./index-1fe445a4.js";import{h as N,m as p,n as C}from"./userApis-a60f39b2.js";import{k as n,Q as m}from"./ReactToastify-97604f09.js";import{H as v}from"./index-a56cd223.js";import{u as O}from"./useDispatch-7ef66e2e.js";import"./userInterceptor-eb453d1e.js";import"./envConfig-9a8092f4.js";const P=({approvedEvent:s})=>{const[i,l]=d.useState(!1),c=y(),g=O(),o=j(b);d.useEffect(()=>{h()},[i]);const h=async()=>{const a=await N();g(w(a==null?void 0:a.data.data)),a!=null&&a.data.data.likedEvents.includes(s._id)&&l(!0)},u=async()=>{var a;if(o)if((a=o==null?void 0:o.likedEvents)!=null&&a.includes(s._id)){const t=await p(s._id);t!=null&&t.data.response.ok&&(l(!1),x())}else{const t=await C(s._id);t!=null&&t.data.response.ok&&(l(!0),f())}},x=()=>{m.warn("Event removed from liked events...!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},f=()=>{m.success("Event added to liked events....!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})};return e.jsxs(e.Fragment,{children:[e.jsx(n,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx(n,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx("div",{className:"xl:w-1/4 lg:w-2/4 px-2 md:w-1/2 w-full mt-2 ",children:e.jsxs(r.Card,{className:"w-full max-w-[26rem] shadow-lg ",children:[e.jsx("div",{className:"!absolute top-0 right-0 rounded-full w-min h-min z-10",children:e.jsx(v,{isClick:i,onClick:u})}),e.jsxs("div",{className:"",children:[e.jsxs(r.CardHeader,{className:"p-0",floated:!1,color:"blue-gray",children:[e.jsx("img",{onClick:()=>{const a=s._id;c(`/show-event/?id=${a}`)},src:s.imageURL[0],alt:"ui/ux review check"}),e.jsx("div",{className:"hover:cursor-pointer to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 "})]}),e.jsxs(r.CardBody,{children:[e.jsxs("div",{className:"mb-3 flex flex-col  justify-between",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs(r.Typography,{variant:"h5",color:"blue-gray",className:"font-thin",children:[s.city,",",s.state]}),e.jsxs(r.Typography,{color:"blue-gray",className:"flex items-center gap-1.5 font-normal",children:[e.jsx(k,{className:"-mt-0.5 h-5 w-5 text-yellow-700"}),s.avgRating?s.avgRating:0]})]}),e.jsx(r.Typography,{variant:"h5",color:"blue-gray",className:"font-bold",children:s.eventName})]}),e.jsxs("div",{className:" mt-2",children:[e.jsxs(r.Typography,{color:"red",children:[s.startDate,", ",s.startTime]}),e.jsxs(r.Typography,{className:"mt-2",children:["Event type: ",s.category]}),s.ticketValue==="free"?e.jsx(r.Typography,{children:"Payment type: free"}):e.jsxs(r.Typography,{children:["Ticket fee : ",s.ticketPrice]}),e.jsxs(r.Typography,{className:"mt-2",children:["Organized by: ",s.orgName]})]})]})]}),e.jsx(r.CardFooter,{className:"pt-2",children:e.jsx(r.Button,{onClick:()=>{const a=s._id;c(`/show-event/?id=${a}`)},size:"lg",fullWidth:!0,children:"Reserve"})})]})},s._id)]})},F=()=>{const s=new Array(8).fill(0);return e.jsx(e.Fragment,{children:s.map((i,l)=>e.jsxs("div",{className:"p-3",children:[e.jsx("p",{className:"hidden",children:i}),e.jsxs("div",{role:"status",className:"max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700",children:[e.jsx("div",{className:"flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700",children:e.jsxs("svg",{className:"w-10 h-10 text-gray-200 dark:text-gray-600","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 20",children:[e.jsx("path",{d:"M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"}),e.jsx("path",{d:"M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"})]})}),e.jsx("div",{className:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"}),e.jsx("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),e.jsx("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),e.jsx("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700"}),e.jsxs("div",{className:"flex items-center mt-4 space-x-3",children:[e.jsx("svg",{className:"w-10 h-10 text-gray-200 dark:text-gray-700","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"})}),e.jsxs("div",{children:[e.jsx("div",{className:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"}),e.jsx("div",{className:"w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})]})]}),e.jsx("span",{className:"sr-only",children:"Loading..."})]})]},l))})};export{F as EventCardsShimmer,P as default};
