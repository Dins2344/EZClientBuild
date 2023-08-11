import{r as o,_ as F,a as H,s as V,u as E,j as e,c as l}from"./index-2f93e65a.js";import{t as A}from"./userApis-a121ecb4.js";import{k as U,Q as G}from"./ReactToastify-ee635d44.js";import"./userInterceptor-ab5ce591.js";import"./envConfig-25a527f2.js";const W=o.lazy(()=>F(()=>import("./paypalButtonComponent-ac81a6b8.js"),["assets/paypalButtonComponent-ac81a6b8.js","assets/index-2f93e65a.js","assets/index-53bd7d69.css","assets/envConfig-25a527f2.js","assets/userApis-a121ecb4.js","assets/userInterceptor-ab5ce591.js","assets/ReactToastify-ee635d44.js","assets/ReactToastify-f2ebcc7d.css"])),K=({eventDetails:s})=>{const[j,k]=o.useState(""),[x,N]=o.useState(""),[m,b]=o.useState(""),[h,y]=o.useState(""),[c,f]=o.useState(1),[n,p]=o.useState(),[C,I]=o.useState(null),[B,z]=o.useState(!1),[g,O]=o.useState({firstName:"",lastName:"",phoneNumber:"",email:"",userId:"",ticketCount:0,eventId:"",totalAmount:0,paymentType:"",orgOwnerId:"",organizationId:""}),[w,L]=o.useState(!1),u=()=>L(!w),a=H(V),P=E();o.useEffect(()=>{const r=localStorage.getItem("token");r&&k(r)},[]);const i=r=>I(r),S=()=>{f(c+1)},T=()=>{f(c-1)},M=()=>(!j&&u(),!!j),v=async()=>{if(a!==void 0){const r={firstName:x,lastName:m,phoneNumber:h,email:a.email,userId:a._id,ticketCount:c,eventId:s._id,totalAmount:d,paymentType:s.ticketValue,orgOwnerId:s.orgOwnerId,organizationId:s.organizer};r&&O(r),z(!0)}},_=async()=>{if(a){const r={firstName:x,lastName:m,phoneNumber:h,email:a.email,userId:a._id,ticketCount:c,eventId:s._id,totalAmount:d,paymentType:s.ticketValue,orgOwnerId:s.orgOwnerId,organizationId:s.organizer},t=await A(r);console.log(t),(t==null?void 0:t.data.message)==="booking confirmed"&&(R(),p(t.data.response))}},R=()=>{G.success("successfully booked tickets!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},d=c*(s==null?void 0:s.ticketPrice);return e.jsxs(e.Fragment,{children:[e.jsx(U,{className:"z-50",position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx("div",{className:" w-full pt-5 lg:p-5  sticky md:top-0 bg-white",children:e.jsxs("div",{className:"flex flex-col border-2 p-5 rounded-md ",children:[e.jsxs("div",{className:"flex mb-3",children:[e.jsx("label",{className:"mr-2",children:"entry pass : "}),e.jsx(l.Button,{size:"sm",variant:"text",className:"w-6 h-6 p-0 ",onClick:T,disabled:c<=1&&!0,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18 12H6"})})}),e.jsx("input",{className:"w-1/12 p-0 m=0 border border-none",type:"text",value:c}),e.jsx(l.Button,{size:"sm",variant:"text",className:"w-6 h-6 p-0",onClick:S,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"})})})]}),s&&e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("label",{className:"mb-3",children:["Ticket type : ",s==null?void 0:s.ticketValue]}),e.jsxs("label",{className:"mb-3",children:["Ticket price : ₹ ",s==null?void 0:s.ticketPrice]}),e.jsxs("label",{className:"mb-3",children:["Ticket sold : ",s==null?void 0:s.ticketSold," /"," ",s==null?void 0:s.eventCapacity]}),s.ticketSold+c<=s.eventCapacity?e.jsx(l.Button,{onClick:()=>{M()&&i("xl")},color:"deep-orange",children:"Reserve a spot"}):e.jsx(l.Button,{onClick:()=>i("xl"),color:"deep-orange",children:"can't provide that much tickets"})]})]})}),e.jsx("div",{className:"mb-3 flex gap-3"}),e.jsxs(l.Dialog,{open:C==="xl",size:"xl",handler:i,children:[e.jsx(l.DialogHeader,{children:e.jsx("div",{className:"flex justify-end w-full",children:e.jsx("button",{onClick:()=>i(null),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})})})})}),e.jsx(l.DialogBody,{divider:!0,children:n?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full flex",children:[e.jsxs("div",{className:"w-full md:w-8/12 md:px-14 ",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"w-7 h-7 bg-green-500 rounded-full mb-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6 text-white mr-4",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})})}),e.jsxs("p",{children:["Thank you for your order...! #",n==null?void 0:n._id]})]}),e.jsx("div",{className:"flex  w-11/12 mb-5",children:e.jsxs("div",{className:"flex flex-col w-full mt-4",children:[e.jsx("p",{children:"Your going to"}),e.jsx("h3",{className:"text-3xl font-bold text-black",children:s.eventName}),e.jsx("h3",{className:"text-xl font-bold text-black mt-10",children:"Organization message"}),e.jsx("p",{children:"Dear,"}),e.jsxs("p",{children:["Thanks for registering to attend the"," ",s.eventName,". Look forward to meeting you and family on ",s.startDate," at"," ",s.addressLine1]}),e.jsxs("div",{className:"flex flex-wrap mt-5 mb-3",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-1/2",children:[e.jsx("h3",{className:"text-xl font-bold text-black",children:"One registration sent to"}),e.jsx("p",{children:n.contactInfo.email})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-1/2 mt-3 md:mt-0",children:[e.jsx("h3",{className:"text-xl font-bold text-black",children:"Event date"}),e.jsx("p",{children:s.startDate}),e.jsx("p",{children:s.startTime})]})]}),e.jsxs("div",{className:"flex flex-col mb-5",children:[e.jsx("h3",{className:"text-xl font-bold text-black",children:"Location"}),e.jsx("p",{children:s.addressLine1}),e.jsx("p",{children:s.addressLine2})]}),e.jsx(l.Button,{onClick:()=>{P(`/show-booking/?bookingId=${n._id}`)},variant:"outlined",color:"deep-orange",children:"View Registration"})]})})]}),e.jsx("div",{className:"md:w-4/12 hidden md:block",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex",children:[e.jsx("img",{className:"h-14 w-14 rounded-full",src:"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",alt:"nature image"}),e.jsxs("div",{className:"flex flex-col ml-4",children:[e.jsx("h5",{className:"text-xl font-bold dark:text-white mb-1",children:s.organizerInfo.orgName}),e.jsx("p",{children:"followers count"})]})]}),e.jsx(l.Button,{size:"sm",className:"mt-4",children:"Follow"})]})})]})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full flex",children:[e.jsxs("div",{className:"w-full md:w-8/12 md:px-14 ",children:[e.jsx("div",{className:"flex justify-center w-11/12 mb-5",children:e.jsx("h3",{className:"text-3xl font-bold text-black",children:"Checkout"})}),e.jsx("form",{children:e.jsxs("div",{className:"flex flex-col h-96 overflow-scroll no-scrollbar",children:[e.jsx("h3",{className:"text-3xl font-bold dark:text-white",children:"Contact Information"}),e.jsxs("div",{className:"flex px-2 mb-3 mt-3",children:[e.jsx("div",{className:"flex flex-col w-1/2 gap-6 px-2",children:e.jsx(l.Input,{value:x,onChange:r=>{N(r.target.value)},variant:"outlined",label:"First name"})}),e.jsx("div",{className:"flex flex-col w-1/2 gap-6 px-2",children:e.jsx(l.Input,{value:m,onChange:r=>{b(r.target.value)},variant:"outlined",label:"Last name"})})]}),e.jsxs("div",{className:"flex px-2 mb-3 mt-2",children:[e.jsx("div",{className:"flex flex-col w-1/2 gap-6 px-2",children:e.jsx(l.Input,{variant:"outlined",value:a.email,readOnly:!0})}),e.jsx("div",{className:"flex flex-col w-1/2 gap-6 px-2",children:e.jsx(l.Input,{type:"number",value:h,onChange:r=>{y(r.target.value)},variant:"outlined",label:"phone number"})})]}),e.jsx("div",{className:"px-2 mb-3 m-t2",children:e.jsx(l.Checkbox,{label:e.jsxs(l.Typography,{color:"blue-gray",className:"font-medium flex",children:["I agree with the",e.jsx(l.Typography,{as:"a",href:"#",color:"blue",className:"font-medium hover:text-blue-700 transition-colors",children:" terms and conditions"}),"."]})})}),e.jsx("div",{className:"md:w-4/12 md:hidden p-3 mb-4 ",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h5",{className:"text-xl font-bold dark:text-white mt-1 mb-5",children:"Order summary"}),e.jsxs("div",{className:"flex justify-between px-2 mt-1 mb-5 border-b-2",children:[e.jsxs("p",{className:"flex",children:["1","  ",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-4 h-4 mt-1",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})}),"  ",s&&(s==null?void 0:s.eventName)]}),e.jsxs("p",{children:["₹",s&&(s==null?void 0:s.ticketPrice)]})]}),e.jsxs("div",{className:"flex justify-between px-2 mb-5 border-b-2",children:[e.jsxs("p",{className:"flex",children:[c,"  ",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-4 h-4 mt-1",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})}),"  ","e-ticket"]}),e.jsxs("p",{children:["₹",s&&c*(s==null?void 0:s.ticketPrice)]})]}),e.jsxs("div",{className:"flex justify-between px-2",children:[e.jsx("p",{className:"font-bold",children:"Total"}),e.jsxs("p",{className:"font-bold",children:["₹",d]})]})]})}),e.jsxs("div",{className:"px-3",children:[(s==null?void 0:s.ticketValue)==="free"&&e.jsx(l.Button,{size:"md",color:"deep-orange",className:"w-full mb-3",onClick:_,children:"Register and continue"}),(s==null?void 0:s.ticketValue)==="charged"&&e.jsxs(e.Fragment,{children:[e.jsx(l.Button,{size:"md",color:"deep-orange",className:"w-full mb-3",onClick:v,children:"Register and continue to payment"}),B&&e.jsx("div",{children:e.jsx(o.Suspense,{children:e.jsx(W,{setBookingRes:p,registerInfo:g&&g,total:d,eventName:s.eventName})})})]})]})]})})]}),e.jsx("div",{className:"md:w-4/12 hidden md:block",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("img",{className:"h-full w-full rounded-lg shadow-xl shadow-blue-gray-900/50 mb-8",src:s==null?void 0:s.imageURL[0],alt:"nature image"}),e.jsx("h5",{className:"text-xl font-bold dark:text-white mt-1 mb-5",children:"Order summary"}),e.jsxs("div",{className:"flex justify-between px-2 mt-1 mb-5 border-b-2",children:[e.jsxs("p",{className:"flex",children:["1","  ",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-4 h-4 mt-1",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})}),"  ",s&&(s==null?void 0:s.eventName)]}),e.jsxs("p",{children:["₹",s&&(s==null?void 0:s.ticketPrice)]})]}),e.jsxs("div",{className:"flex justify-between px-2 mb-5 border-b-2",children:[e.jsxs("p",{className:"flex",children:[c,"  ",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-4 h-4 mt-1",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})}),"  ","e-ticket"]}),e.jsxs("p",{children:["₹",s&&c*(s==null?void 0:s.ticketPrice)]})]}),e.jsxs("div",{className:"flex justify-between px-2",children:[e.jsx("p",{className:"font-bold",children:"Total"}),e.jsxs("p",{className:"font-bold",children:["₹",d]})]})]})})]})})})]}),e.jsxs(l.Dialog,{size:"sm",open:w,handler:u,children:[e.jsx(l.DialogBody,{children:"Unlock more amazing features by logging in! Embrace the full experience and unleash the possibilities!"}),e.jsx(l.DialogFooter,{children:e.jsx(l.Button,{size:"sm",variant:"gradient",color:"green",onClick:u,children:e.jsx("span",{children:"Ok"})})})]})]})};export{K as default};
