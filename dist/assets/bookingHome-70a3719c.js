import{r as c,j as a,c as l,g as f,M as j,C as u}from"./index-2f93e65a.js";import{s as b}from"./organizer-59abea21.js";import"./userInterceptor-ab5ce591.js";import"./envConfig-25a527f2.js";const N=[{label:"All",value:"all"},{label:"Monitored",value:"monitored"},{label:"Unmonitored",value:"unmonitored"}],v=()=>{const[t,m]=c.useState();c.useEffect(()=>{d()},[]);const d=async()=>{const e=await b();console.log(e),m(e==null?void 0:e.data.data)},n=t,i=["User info","Contact info","Event info","Organization","Ticket info"];return a.jsxs(l.Card,{className:"h-full w-full",children:[a.jsxs(l.CardHeader,{floated:!1,shadow:!1,className:"rounded-none",children:[a.jsxs("div",{className:"mb-8 flex items-center justify-between gap-8",children:[a.jsxs("div",{children:[a.jsx(l.Typography,{variant:"h5",color:"blue-gray",children:"Bookings"}),a.jsx(l.Typography,{color:"gray",className:"mt-1 font-normal",children:"See information about all bookings of your events"})]}),a.jsxs("div",{className:"flex shrink-0 flex-col gap-2 sm:flex-row",children:[a.jsx(l.Button,{variant:"outlined",color:"blue-gray",size:"sm",children:"view all"}),a.jsxs(l.Button,{className:"flex items-center gap-3",color:"blue",size:"sm",children:[a.jsx(f,{strokeWidth:2,className:"h-4 w-4"})," Add member"]})]})]}),a.jsxs("div",{className:"flex flex-col items-center justify-between gap-4 md:flex-row",children:[a.jsx(l.Tabs,{value:"all",className:"w-full md:w-max",children:a.jsx(l.TabsHeader,{children:N.map(({label:e,value:s})=>a.jsxs(l.Tab,{value:s,children:["  ",e,"  "]},s))})}),a.jsx("div",{className:"w-full md:w-72",children:a.jsx(l.Input,{label:"Search",icon:a.jsx(j,{className:"h-5 w-5"})})})]})]}),a.jsx(l.CardBody,{className:"overflow-scroll px-0",children:a.jsxs("table",{className:"mt-4 w-full min-w-max table-auto text-left",children:[a.jsx("thead",{children:a.jsx("tr",{children:i.map((e,s)=>a.jsx("th",{className:"cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50",children:a.jsxs(l.Typography,{variant:"small",color:"blue-gray",className:"flex items-center justify-between gap-2 font-normal leading-none opacity-70",children:[e," ",s!==i.length-1&&a.jsx(u,{strokeWidth:2,className:"h-4 w-4"})]})},e))})}),a.jsx("tbody",{children:n&&n.map(({user:e,event:s,bookingTime:x,contactInfo:o,ticketCount:h,totalAmount:y,_id:g},p)=>{const r=p===n.length-1?"p-4":"p-4 border-b border-blue-gray-50";return a.jsxs("tr",{children:[a.jsx("td",{className:r,children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(l.Avatar,{src:e.profileImage,alt:"https://img.freepik.com/free-icon/user_318-159711.jpg",size:"sm"}),a.jsxs("div",{className:"flex flex-col",children:[a.jsxs(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:[e.firstName," ",e.lastName]}),a.jsx(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:e.email})]})]})}),a.jsx("td",{className:r,children:a.jsxs("div",{className:"flex flex-col",children:[a.jsxs(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:[o.firstName," ",o.lastName]}),a.jsx(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:o.email}),a.jsx(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:o.phoneNumber})]})}),a.jsx("td",{className:r,children:a.jsxs("div",{className:"flex flex-col",children:[a.jsx(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:s.eventName}),a.jsxs(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:["category: ",s.category]}),a.jsxs(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:["starts on:",s.startDate," ",s.startTime]})]})}),a.jsx("td",{className:r,children:a.jsx("div",{className:"flex flex-col",children:a.jsx(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:s.orgName})})}),a.jsx("td",{className:r,children:a.jsxs("div",{className:"flex flex-col",children:[a.jsxs(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:["Tickets: ",h]}),a.jsxs(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:["Booked on: ",x]}),a.jsxs(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal opacity-70",children:["Total paid:",y]})]})})]},g)})})]})}),a.jsxs(l.CardFooter,{className:"flex items-center justify-between border-t border-blue-gray-50 p-4",children:[a.jsx(l.Typography,{variant:"small",color:"blue-gray",className:"font-normal",children:"Page 1 of 10"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(l.Button,{variant:"outlined",color:"blue-gray",size:"sm",children:"Previous"}),a.jsx(l.Button,{variant:"outlined",color:"blue-gray",size:"sm",children:"Next"})]})]})]})},A=()=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"min-h-screen",children:a.jsx(v,{})})});export{A as default};
