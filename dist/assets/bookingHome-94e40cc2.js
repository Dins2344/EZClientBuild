import{r as c,j as a,c as s,M as f,C as j}from"./index-0cc785ab.js";import{s as u}from"./organizer-46a8c21f.js";import"./userInterceptor-eb453d1e.js";import"./envConfig-9a8092f4.js";const N=()=>{const[i,m]=c.useState();c.useEffect(()=>{d()},[]);const d=async()=>{const e=await u();m(e==null?void 0:e.data.data)},n=i,t=["User info","Contact info","Event info","Organization","Ticket info"];return a.jsxs(s.Card,{className:"h-full w-full",children:[a.jsxs(s.CardHeader,{floated:!1,shadow:!1,className:"rounded-none",children:[a.jsx("div",{className:"mb-8 flex items-center justify-between gap-8",children:a.jsxs("div",{children:[a.jsx(s.Typography,{variant:"h5",color:"blue-gray",children:"Bookings"}),a.jsx(s.Typography,{color:"gray",className:"mt-1 font-normal",children:"See information about all bookings of your events"})]})}),a.jsx("div",{className:"flex flex-col items-center justify-between gap-4 md:flex-row",children:a.jsx("div",{className:"w-full md:w-72",children:a.jsx(s.Input,{label:"Search",icon:a.jsx(f,{className:"h-5 w-5"})})})})]}),a.jsx(s.CardBody,{className:"overflow-scroll px-0",children:a.jsxs("table",{className:"mt-4 w-full min-w-max table-auto text-left",children:[a.jsx("thead",{children:a.jsx("tr",{children:t.map((e,l)=>a.jsx("th",{className:"cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50",children:a.jsxs(s.Typography,{variant:"small",color:"blue-gray",className:"flex items-center justify-between gap-2 font-normal leading-none opacity-70",children:[e," ",l!==t.length-1&&a.jsx(j,{strokeWidth:2,className:"h-4 w-4"})]})},e))})}),a.jsx("tbody",{children:n&&n.map(({user:e,event:l,bookingTime:h,contactInfo:o,ticketCount:x,totalAmount:y,_id:g},p)=>{const r=p===n.length-1?"p-4":"p-4 border-b border-blue-gray-50";return a.jsxs("tr",{children:[a.jsx("td",{className:r,children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(s.Avatar,{src:e.profileImage,alt:"https://img.freepik.com/free-icon/user_318-159711.jpg",size:"sm"}),a.jsxs("div",{className:"flex flex-col",children:[a.jsxs(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:[e.firstName," ",e.lastName]}),a.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:e.email})]})]})}),a.jsx("td",{className:r,children:a.jsxs("div",{className:"flex flex-col",children:[a.jsxs(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:[o.firstName," ",o.lastName]}),a.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:o.email}),a.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:o.phoneNumber})]})}),a.jsx("td",{className:r,children:a.jsxs("div",{className:"flex flex-col",children:[a.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:l.eventName}),a.jsxs(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:["category: ",l.category]}),a.jsxs(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:["starts on:",l.startDate," ",l.startTime]})]})}),a.jsx("td",{className:r,children:a.jsx("div",{className:"flex flex-col",children:a.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:l.orgName})})}),a.jsx("td",{className:r,children:a.jsxs("div",{className:"flex flex-col",children:[a.jsxs(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:["Tickets: ",x]}),a.jsxs(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:["Booked on: ",h]}),a.jsxs(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:["Total paid: ₹",y]})]})})]},g)})})]})}),a.jsxs(s.CardFooter,{className:"flex items-center justify-between border-t border-blue-gray-50 p-4",children:[a.jsx(s.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:"Page 1 of 10"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(s.Button,{variant:"outlined",color:"blue-gray",size:"sm",children:"Previous"}),a.jsx(s.Button,{variant:"outlined",color:"blue-gray",size:"sm",children:"Next"})]})]})]})},B=()=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"min-h-screen",children:a.jsx(N,{})})});export{B as default};
