import{r as o,j as e,c}from"./index-1fe445a4.js";import{k as C,l as E,m as L,n as q}from"./organizer-3586ee5e.js";import{c as S,a as n}from"./index.esm-7df76759.js";import{b as D}from"./userApis-a60f39b2.js";import{c as A}from"./index.esm-17d3ffaf.js";import"./userInterceptor-eb453d1e.js";import"./envConfig-9a8092f4.js";const F=({eventId:t,setMode:m})=>{const[r,u]=o.useState(),[g,h]=o.useState(),[a,j]=o.useState({eventName:"",category:"",description:"",agenda:"",addressLine1:"",addressLine2:"",state:"",city:"",startTime:"",startDate:"",endTime:"",endDate:""}),[s,f]=o.useState({});o.useEffect(()=>{y(),v(),N()},[]);const N=async()=>{const d=await C(t),l=d==null?void 0:d.data.data,x={eventName:l.eventName,category:l.category,description:l.description,agenda:l.agenda,addressLine1:l.addressLine2,addressLine2:l.addressLine2,state:l.state,city:l.city,startTime:l.startTime,startDate:l.startDate,endTime:l.endTime,endDate:l.endDate};j(x)},y=async()=>{const d=await E();u(d==null?void 0:d.data.data)},v=async()=>{const d=await L();h(d==null?void 0:d.data.data)},k=S().shape({addressLine1:n().required("Address line 1 is required"),addressLine2:n(),city:n().required("City is required"),eventName:n().required("event name is required"),state:n().required("State is required"),category:n().required("event category is required"),description:n().required("description is required"),agenda:n(),startDate:n().required("start Date is required"),startTime:n().required("start time is required"),endDate:n().required("end Date is required"),endTime:n().required("end time is required")}),i=d=>{const{name:l,value:x}=d.target;j(b=>({...b,[l]:x}))},w=d=>{d.preventDefault(),k.validate(a,{abortEarly:!1}).then(async()=>{f({}),a.eventId=t,console.log(a);const l=await q(a);l!=null&&l.data.message&&l&&m("view")}).catch(l=>{const x=l.inner.reduce((b,{path:p,message:T})=>(p&&(b[p]=T),b),{});f(x)})};return e.jsx("div",{className:"flex flex-col px-4 w-full",children:e.jsxs("form",{onSubmit:w,children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h5",{className:"mt-5 mb-5",children:"Event Basic Info"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"",children:[e.jsx(c.Input,{name:"eventName",value:a==null?void 0:a.eventName,onChange:i,label:"Event name"}),(s==null?void 0:s.eventName)&&e.jsx("div",{className:"error text-red-600",children:s==null?void 0:s.eventName})]}),e.jsxs("div",{className:"",children:[e.jsxs("select",{name:"category",value:a.category,onChange:i,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[e.jsx("option",{selected:!0,children:"Choose a category"}),r&&r.map(d=>e.jsx("option",{value:d.categoryName,children:d.categoryName}))]}),(s==null?void 0:s.category)&&e.jsx("div",{className:"error text-red-600",children:s==null?void 0:s.category})]})]}),e.jsxs("div",{className:"mt-3 mb-1",children:[e.jsx(c.Textarea,{name:"description",value:a==null?void 0:a.description,onChange:i,label:"Description"}),(s==null?void 0:s.description)&&e.jsx("div",{className:"error text-red-600",children:s==null?void 0:s.description})]}),e.jsxs("div",{children:[e.jsx(c.Textarea,{name:"agenda",value:a.agenda,onChange:i,label:"Agenda"}),(s==null?void 0:s.agenda)&&e.jsx("div",{className:"error text-red-600",children:s==null?void 0:s.agenda})]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h5",{className:"mt-5 mb-5",children:"Event Location Info"}),e.jsx(c.Input,{name:"addressLine1",value:a.addressLine1,onChange:i,label:"Address Line 1"}),(s==null?void 0:s.addressLine1)&&e.jsx("div",{className:"error text-red-600",children:s==null?void 0:s.addressLine1}),e.jsxs("div",{className:"mt-2",children:[e.jsx(c.Input,{name:"addressLine2",value:a.addressLine2,onChange:i,label:"Address Line 2"}),(s==null?void 0:s.addressLine2)&&e.jsx("div",{className:"error text-red-600",children:s==null?void 0:s.addressLine2})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2",children:[e.jsxs("div",{className:"",children:[e.jsxs("select",{name:"state",value:a.state,onChange:i,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[e.jsx("option",{selected:!0,children:"Choose a State"}),e.jsx("option",{value:"kerala",children:"kerala"})]}),(s==null?void 0:s.state)&&e.jsx("div",{className:"error text-red-600",children:s==null?void 0:s.state})]}),e.jsxs("div",{className:"",children:[e.jsxs("select",{name:"city",value:a.city,onChange:i,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[e.jsx("option",{selected:!0,children:"Choose a city"}),g&&g.map(d=>e.jsx("option",{value:d.cityName,children:d.cityName}))]}),(s==null?void 0:s.city)&&e.jsx("div",{className:"error text-red-600",children:s==null?void 0:s.city})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"startDate",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Start Date"}),e.jsx("input",{type:"date",id:"startDate",name:"startDate",value:a.startDate,onChange:i,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),(s==null?void 0:s.startDate)&&e.jsx("div",{className:"error text-red-600",children:s==null?void 0:s.startDate})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"startTime",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Start Time"}),e.jsx("input",{value:a.startTime,onChange:i,type:"time",id:"startTime",name:"startTime",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),(s==null?void 0:s.startTime)&&e.jsx("div",{className:"error text-red-600",children:s==null?void 0:s.startTime})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"endDate",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"End Date"}),e.jsx("input",{value:a.endDate,onChange:i,type:"date",id:"endDate",name:"endDate",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),(s==null?void 0:s.endDate)&&e.jsx("div",{className:"error text-red-600",children:s==null?void 0:s.endDate})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"endTime",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"End Time"}),e.jsx("input",{value:a.endTime,onChange:i,type:"time",id:"endTime",name:"endTime",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),(s==null?void 0:s.endTime)&&e.jsx("div",{className:"error text-red-600",children:s==null?void 0:s.endTime})]})]})]})]}),e.jsxs("div",{className:"w-full flex mt-6 justify-end",children:[e.jsx(c.Button,{onClick:()=>m("view"),className:"mr-2",size:"sm",color:"red",variant:"outlined",children:"Discard"}),e.jsx(c.Button,{size:"sm",color:"green",type:"submit",children:"Save changes"})]})]})})},I=({eventData:t})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5 w-full px-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"Event basic info"}),e.jsxs("p",{className:"mb-1",children:[e.jsx("span",{className:"font-semibold",children:"Event Name: "}),t.eventName]}),e.jsxs("p",{className:"mb-1",children:[e.jsx("span",{className:"font-semibold",children:"Event category: "}),t.category]}),e.jsxs("p",{className:"mb-1",children:[e.jsx("span",{className:"font-semibold",children:"Event description: "}),t.description]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"When & where"}),e.jsxs("p",{className:"mb-1",children:[e.jsx("span",{className:"font-semibold",children:"State & city: "}),t.city,", ",t.state]}),e.jsxs("p",{className:"mb-1",children:[e.jsx("span",{className:"font-semibold",children:"Address line 1: "}),t.addressLine1]}),e.jsxs("p",{className:"mb-1",children:[" ",e.jsx("span",{className:"font-semibold",children:"Address line 2:"})," ",t.addressLine2]}),e.jsxs("p",{className:"mb-1",children:[e.jsx("span",{className:"font-semibold",children:"Start date & time: "}),e.jsxs("span",{className:"text-red-500 font-semibold",children:[t.startDate,", ",t.startTime]})]}),e.jsxs("p",{className:"mb-1",children:[e.jsx("span",{className:"font-semibold",children:"End date & time: "}),e.jsxs("span",{className:"text-red-500 font-semibold",children:[t.endDate,", ",t.endTime]})]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ticket info"}),e.jsxs("p",{className:"mb-1",children:[e.jsx("span",{className:"font-semibold",children:"Ticket price: "})," ₹",t.ticketPrice]}),e.jsxs("p",{className:"mb-1",children:[" ",e.jsx("span",{className:"font-semibold",children:" Ticket type: "}),t.ticketValue]}),e.jsxs("p",{className:"mb-1",children:[" ",e.jsx("span",{className:"font-semibold",children:" Event capacity: "}),t.eventCapacity]}),e.jsxs("p",{className:"mb-1",children:[e.jsx("span",{className:"font-semibold",children:" Ticket sold: "}),t.ticketSold]})]}),e.jsxs("div",{className:"felx flex-col",children:[e.jsx("h3",{className:"text-xl font-bold mb-2",children:"Media info"}),e.jsx("p",{className:"mb-1",children:e.jsx("span",{className:"font-semibold",children:"Images: "})}),e.jsx("div",{className:"flex w-full overflow-x-scroll no-scrollbar mb-1",children:t.imageURL.map(m=>e.jsx("img",{className:"w-28 mx-2 ",src:m}))}),e.jsxs("p",{className:"mb-1",children:[e.jsx("span",{className:"font-semibold",children:"Video URL: "}),t.videoURL]}),e.jsxs("p",{className:"mb-1",children:[e.jsx("span",{className:"font-semibold",children:"Agenda: "}),t.agenda]})]})]})}),$=()=>{const[t,m]=o.useState("view"),[r,u]=o.useState();o.useEffect(()=>{const a=new URLSearchParams(window.location.search).get("eventId");a&&g(a)},[]);const g=async h=>{const a=await D(h);console.log(a==null?void 0:a.data),u(a==null?void 0:a.data.data[0])};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"min-h-screen",children:[e.jsxs("div",{className:"flex w-full  px-4 mt-10 mb-5",children:[e.jsxs("h2",{className:"text-4xl font-bold",children:[r==null?void 0:r.eventName," ",e.jsxs("span",{className:"text-xl",children:["Organized by ",r==null?void 0:r.orgName]})]}),t==="view"&&e.jsxs(c.Button,{className:"text-sm",size:"sm",variant:"text",color:"red",onClick:()=>m("edit"),children:[e.jsx(A,{})," edit"]})]}),t==="view"&&r&&e.jsx(I,{eventData:r}),t==="edit"&&r&&e.jsx(F,{eventId:r==null?void 0:r._id,setMode:m})]})})};export{$ as default};
