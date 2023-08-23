import{r as o,j as e,c as r,d as M,a as C,e as S,m as T,U as I,f as q,B as A,u as D}from"./index-01798a1d.js";import{F as L,a as E,b as i,E as n}from"./formik.esm-57f35b27.js";import{c as z,a as g,d as F}from"./index.esm-fe3bb760.js";import{b as P,l as U,m as R,o as V,p as O,q as Z,k as _,r as G}from"./organizer-d9f53913.js";import{u as $}from"./useDispatch-b1503bbd.js";import"./userInterceptor-ef0a808e.js";import"./envConfig-2c904499.js";const H=({setActiveStep:t})=>{const[d,b]=o.useState([]),[m,u]=o.useState(),[p,x]=o.useState(),h=$(),a=async()=>{const s=await P();u(s.data.data)},l=async()=>{const s=await U();b(s.data.data)},y=async()=>{const s=await R();x(s==null?void 0:s.data.data)};o.useEffect(()=>{l(),a(),y()},[]);const j=z().shape({eventName:g().required("Event Name is required"),organizer:g().required("Choose an organizer"),category:g().required("Choose a category for the event"),agenda:g().required("Agenda is required"),addressLine1:g().required("Address Line 1 is required"),city:g().required("City is required"),state:g().required("State is required"),startDate:F().required("Select a start date"),startTime:g().required("Select a start time"),endDate:F().required("Select an end date"),endTime:g().required("Select an end time")}),k={eventName:"",organizer:"",category:"",agenda:"",addressLine1:"",addressLine2:"",city:"",state:"",addressLine3:"",startDate:"",startTime:"",endDate:"",endTime:""},N=async s=>{const f=await V(s);console.log(f.data.response),h(M(f.data.response)),t(1)};return e.jsx(L,{initialValues:k,validationSchema:j,onSubmit:N,children:e.jsxs(E,{className:"mx-12",children:[e.jsxs("div",{className:"mt-7",children:[e.jsx("h2",{className:"mb-4 text-lg font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Basic Info"}),e.jsx("p",{className:"mb-3 text-gray-500 dark:text-gray-400",children:"Name your event and tell event-goers why they should come. Add details that highlight what makes it unique."}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"eventName",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Event Name"}),e.jsx(i,{type:"text",id:"eventName",name:"eventName",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),e.jsx(n,{name:"eventName",component:"div",className:"text-red-500"})]}),e.jsxs("div",{className:"flex flex-wrap mb-6",children:[e.jsxs("div",{className:"w-full md:w-1/2 md:pr-2",children:[e.jsx("label",{htmlFor:"organizer",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Organizer"}),e.jsxs(i,{as:"select",id:"organizer",name:"organizer",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[e.jsx("option",{value:"",children:"Select an organizer"}),m&&m.map(s=>e.jsx("option",{value:s._id,children:s.orgName}))]}),e.jsx(n,{name:"organizer",component:"div",className:"text-red-500"})]}),e.jsxs("div",{className:"w-full md:w-1/2 md:pl-2 md:mt-0 mt-3",children:[e.jsx("label",{htmlFor:"category",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Category"}),e.jsxs(i,{as:"select",id:"category",name:"category",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[e.jsx("option",{value:"",children:"Select a category"}),d&&d.map(s=>e.jsx("option",{value:s.categoryName,children:s.categoryName}))]}),e.jsx(n,{name:"category",component:"div",className:"text-red-500"})]})]}),e.jsx("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Events agenda"}),e.jsx(i,{as:"textArea",id:"agenda",name:"agenda",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Write your events agenda here..."}),e.jsx(n,{name:"agenda",component:"div",className:"text-red-500"})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx("h2",{className:"mb-4 text-lg font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Location Info"}),e.jsx("p",{className:"mb-3 text-gray-500 dark:text-gray-400",children:"Let people know where the event will be held. Provide the address or specific location, if applicable."}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"addressLine1",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Address Line 1"}),e.jsx(i,{type:"text",id:"addressLine1",name:"addressLine1",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),e.jsx(n,{name:"addressLine1",component:"div",className:"text-red-500"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"addressLine2",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Address Line 2"}),e.jsx(i,{type:"text",id:"addressLine2",name:"addressLine2",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),e.jsx(n,{name:"addressLine2",component:"div",className:"text-red-500"})]}),e.jsxs("div",{className:"flex flex-wrap",children:[e.jsxs("div",{className:"w-full md:w-1/2 md:pr-2",children:[e.jsx("label",{htmlFor:"cities",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Select a city"}),e.jsxs(i,{as:"select",id:"city",name:"city",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[e.jsx("option",{value:"",selected:!0,children:"Choose a city"}),p&&p.map(s=>e.jsx("option",{value:s.cityName,children:s.cityName}))]}),e.jsx(n,{name:"city",component:"div",className:"text-red-500"})]}),e.jsxs("div",{className:"w-full md:w-1/2 md:pl-2 mt-3 md:mt-0",children:[e.jsx("label",{htmlFor:"state",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Select a state"}),e.jsxs(i,{as:"select",id:"state",name:"state",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[e.jsx("option",{value:"",selected:!0,children:"Choose a state"}),e.jsx("option",{value:"kerala",selected:!0,children:"kerala"})]}),e.jsx(n,{name:"state",component:"div",className:"text-red-500"})]})]})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx("h2",{className:"mb-4 text-lg font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Date and Time"}),e.jsx("p",{className:"mb-3 text-gray-500 dark:text-gray-400",children:"Tell people when your event starts and ends so they can make plans to attend."}),e.jsxs("div",{className:"flex mb-3",children:[e.jsxs("div",{className:"md:w-1/2 w-full mr-3",children:[e.jsx("label",{htmlFor:"startDate",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Start Date"}),e.jsx(i,{type:"date",id:"startDate",name:"startDate",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),e.jsx(n,{name:"startDate",component:"div",className:"text-red-500"})]}),e.jsxs("div",{className:"md:w-1/2 w-full ml-3",children:[e.jsx("label",{htmlFor:"startTime",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Start Time"}),e.jsx(i,{type:"time",id:"startTime",name:"startTime",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),e.jsx(n,{name:"startTime",component:"div",className:"text-red-500"})]})]}),e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"md:w-1/2 w-full mr-3",children:[e.jsx("label",{htmlFor:"endDate",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"End Date"}),e.jsx(i,{type:"date",id:"endDate",name:"endDate",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),e.jsx(n,{name:"endDate",component:"div",className:"text-red-500"})]}),e.jsxs("div",{className:"md:w-1/2 w-full ml-3",children:[e.jsx("label",{htmlFor:"endTime",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"End Time"}),e.jsx(i,{type:"time",id:"endTime",name:"endTime",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),e.jsx(n,{name:"endTime",component:"div",className:"text-red-500"})]})]})]}),e.jsxs("div",{className:"flex justify-between md:justify-end mt-4",children:[e.jsx(r.Button,{size:"sm",color:"red",variant:"outlined",className:"mt-3 w-28 mr-3",children:"Discard"}),e.jsx(r.Button,{type:"submit",size:"sm",color:"blue",className:"mt-3 w-28 ",children:"Save"})]})]})})},W=({setActiveStep:t})=>{const[d,b]=o.useState({images:[]}),m=C(S),u={videoURL:"",description:""},p=z().shape({description:g().max(400).min(20).required("Description is required"),videoURL:g().url("Please enter a valid URL").required("URL is required")}),x=async a=>{console.log(m);const l=new FormData;l.append("description",a==null?void 0:a.description),l.append("videoURL",a==null?void 0:a.videoURL),m&&l.append("eventId",m.eventDetails._id),d==null||d.images.forEach((j,k)=>{l.append("images",j,`images${k}`)});const y=await O(l);y!=null&&y.data.message&&t(2)},h=a=>{if(a.target.files){const l=Array.from(a.target.files);b({...d,images:l})}};return e.jsx(L,{initialValues:u,validationSchema:p,onSubmit:x,children:e.jsxs(E,{className:"mx-12",encType:"multipart/form-data",children:[e.jsxs("div",{className:"mt-7",children:[e.jsx("h2",{className:"mb-4 text-lg font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Images"}),e.jsx("p",{className:"mb-3 text-gray-500 dark:text-gray-400",children:"Add photos to show what your event will be about. You can upload up to 5 images."})]}),e.jsx("div",{className:"mb-6",children:e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsxs("label",{htmlFor:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[e.jsx("svg",{"aria-hidden":"true",className:"w-10 h-10 mb-3 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),e.jsxs("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("span",{className:"font-semibold",children:"Click to upload"})," or drag and drop"]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"SVG, PNG, JPG or GIF (MAX. 800x400px)"})]}),e.jsx(i,{id:"dropzone-file",name:"image",type:"file",className:"hidden",multiple:!0,onChange:h}),e.jsx(n,{name:"image",component:"div",className:"text-red-500"})]})})}),e.jsxs("div",{className:"mt-10",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Video"}),e.jsx("p",{className:"mb-3 text-gray-500 dark:text-gray-400",children:"Add a video link from Youtube or Vimeo to show your event's vibe. The video will appear with your event images."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"videoURL",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Video URL"}),e.jsx(i,{type:"text",id:"videoURL",name:"videoURL",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),e.jsx(n,{name:"videoURL",component:"div",className:"text-red-500"})]})]}),e.jsxs("div",{className:"mt-10",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"mb-4 text-lg font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Description"}),e.jsx("p",{className:"mb-3 text-gray-500 dark:text-gray-400",children:"Add more details to your event like your schedule, sponsors, or featured guests."})]}),e.jsxs("div",{className:"",children:[e.jsx("label",{htmlFor:"description",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Short description"}),e.jsx(i,{as:"textarea",id:"description",name:"description",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Write a description about this event..."}),e.jsx(n,{name:"description",component:"div",className:"text-red-500"})]})]}),e.jsxs("div",{className:"flex justify-end mt-4",children:[e.jsx(r.Button,{size:"sm",color:"blue",variant:"outlined",className:"mt-3 w-28 mr-3",children:"Discard"}),e.jsx(r.Button,{type:"submit",size:"sm",color:"red",className:"mt-3 w-28 ",children:"Save"})]})]})})},Y=({submitted:t,setSubmitted:d})=>{const[b,m]=o.useState(""),[u,p]=o.useState(""),[x,h]=o.useState(""),[a,l]=o.useState("0"),[y,j]=o.useState(!1),k=C(S),N=()=>a===""||a>"5000"||x===""||x>"20000"?(j(!0),!1):(j(!1),!0),s=async()=>{if(N()){const c={eventCapacity:x,ticketPrice:a,ticketValue:u,eventId:""};c.eventId=k.eventDetails._id;const w=await Z(c);console.log(w),d(!1)}},f=()=>{const[c,w]=o.useState(!1),v=()=>w(!c);return e.jsxs(o.Fragment,{children:[e.jsx(r.Button,{className:"h-10",onClick:v,variant:"outlined",children:"Submit"}),e.jsxs(r.Dialog,{open:c,handler:v,animate:{mount:{scale:1,y:0},unmount:{scale:.9,y:-100}},children:[e.jsx(r.DialogBody,{divider:!0,children:"Please review the details you have provided carefully before submitting. Once submitted, changes cannot be made later."}),e.jsxs(r.DialogFooter,{children:[e.jsx(r.Button,{variant:"text",color:"red",size:"sm",onClick:v,className:"mr-1",children:e.jsx("span",{children:"Cancel"})}),e.jsx(r.Button,{variant:"outlined",color:"green",size:"sm",onClick:()=>{s(),v()},children:e.jsx("span",{children:"Submit"})})]})]})]})},B=()=>b==="option1"?e.jsx(e.Fragment,{children:e.jsxs("form",{className:"flex flex-wrap",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("input",{value:x,type:"number",name:"eventCapacity",placeholder:"Enter capacity for event",className:"input-field mr-3",onChange:c=>{h(c.target.value)}}),y&&e.jsx("p",{className:"text-red-600",children:"enter valid inputs"})]}),e.jsx("div",{className:"mb-3 mr-2",children:e.jsx("input",{value:a,type:"text",name:"ticketPrice",placeholder:"Free of cost",readOnly:!0,className:"input-field"})}),e.jsx(f,{})]})}):b==="option2"?e.jsx(e.Fragment,{children:e.jsxs("form",{className:"flex flex-wrap",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("input",{value:x,type:"number",name:"eventCapacity",placeholder:"Enter capacity for event",className:"input-field mr-3",onChange:c=>{h(c.target.value)}}),y&&e.jsx("p",{className:"text-red-600",children:"enter valid inputs"})]}),e.jsx("div",{className:"mb-3 mr-2",children:e.jsx("input",{value:a,type:"text",name:"ticketPrice",placeholder:"Attendees can pay what they want",readOnly:!0,className:"input-field"})}),e.jsx(f,{})]})}):b==="option3"?e.jsx(e.Fragment,{children:e.jsxs("form",{className:"flex flex-wrap",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("input",{value:x,type:"number",name:"eventCapacity",placeholder:"Enter capacity for event",className:"input-field mr-3",onChange:c=>{h(c.target.value)}}),y&&e.jsx("p",{className:"text-red-600",children:"enter valid inputs"})]}),e.jsxs("div",{className:"mb-3 mr-2",children:[e.jsx("input",{value:a,type:"number",name:"ticketPrice",placeholder:"Enter ticket price",className:"input-field",onChange:c=>{l(c.target.value)}}),y&&e.jsx("p",{className:"text-red-600",children:"enter valid inputs"})]}),e.jsx(f,{})]})}):null;return e.jsx(e.Fragment,{children:t&&e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"flex flex-wrap mb-3 ",children:[e.jsx("div",{className:"mr-2",children:e.jsx("p",{children:"Choose a method for ticketing : "})}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:" mr-2",children:e.jsx(r.Button,{size:"sm",color:u=="free"?"red":"blue",onClick:()=>{m("option1"),p("free"),h(""),l("0")},children:"Free"})}),e.jsx("div",{className:"mr-2",children:e.jsx(r.Button,{size:"sm",color:u=="donation"?"red":"blue",onClick:()=>{m("option2"),p("donation"),h(""),l("1")},children:"Donation"})}),e.jsx("div",{className:"mr-2",children:e.jsx(r.Button,{className:"h-8 w-max",size:"sm",color:u=="charged"?"red":"blue",onClick:()=>{m("option3"),p("charged"),h(""),l("")},children:"Charge price"})})]})]}),B()]})})},de=()=>{const[t,d]=T.useState(0);return e.jsxs("div",{className:"w-full py-4 px-8",children:[e.jsxs(r.Stepper,{activeStep:t,children:[e.jsxs(r.Step,{onClick:()=>d(0),children:[e.jsx(I,{className:"h-5 w-5"}),e.jsx("div",{className:"absolute -bottom-[4.5rem] w-max text-center",children:e.jsx(r.Typography,{variant:"h6",color:t===0?"blue":"blue-gray",children:"Basic Info"})})]}),e.jsxs(r.Step,{onClick:()=>d(1),children:[e.jsx(q,{className:"h-5 w-5"}),e.jsx("div",{className:"absolute -bottom-[4.5rem] w-max text-center",children:e.jsx(r.Typography,{variant:"h6",color:t===1?"blue":"blue-gray",children:"Media Info"})})]}),e.jsxs(r.Step,{onClick:()=>d(2),children:[e.jsx(A,{className:"h-5 w-5"}),e.jsx("div",{className:"absolute -bottom-[4.5rem] w-max text-center",children:e.jsx(r.Typography,{variant:"h6",color:t===2?"blue":"blue-gray",children:"Lets Publish"})})]})]}),e.jsxs("div",{className:" mt-28",children:[t===0?e.jsx(J,{setActiveStep:d}):null,t===1?e.jsx(X,{setActiveStep:d}):null,t===2?e.jsx(K,{}):null]})]})},J=({setActiveStep:t})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:" lg:px-20",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-3",children:e.jsx("svg",{className:"w-10 h-10 text-gray-500 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 21 18",children:e.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"})})}),e.jsx("div",{children:e.jsx("h2",{className:"mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white",children:"Basic Info"})})]}),e.jsx(H,{setActiveStep:t})]})}),X=({setActiveStep:t})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:" lg:px-20",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-3",children:e.jsxs("svg",{className:"w-10 h-10 text-gray-500 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 18",children:[e.jsx("path",{fill:"currentColor",d:"M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"}),e.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"}),e.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"})]})}),e.jsx("div",{children:e.jsx("h2",{className:"mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white",children:"Media Info"})})]}),e.jsx(W,{setActiveStep:t})]})}),K=()=>{const[t,d]=o.useState(),[b,m]=o.useState(!0),u=C(S),p=D(),x=async a=>{const l=await _(a);d(l==null?void 0:l.data.data)};o.useEffect(()=>{x(u.eventDetails._id)},[b]);const h=async()=>{const a=await G(u.eventDetails._id);a!=null&&a.status&&p("/organization/events")};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:" lg:px-20",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"mr-3",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-10 h-10",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"})})}),e.jsx("div",{children:e.jsx("h2",{className:"mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white",children:"Publish your event"})})]}),e.jsxs("div",{className:"mx-12",children:[e.jsx("div",{className:"mt-7",children:e.jsx("h2",{className:"mb-4 text-lg font-bold  tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Ticket details"})}),e.jsx(Y,{submitted:b,setSubmitted:m}),e.jsxs("div",{className:"mt-10",children:[e.jsx("div",{children:e.jsx("h2",{className:"mb-4 text-lg font-bold  tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Event details"})}),e.jsxs("div",{className:"flex flex-wrap justify-center border shadow-md",children:[e.jsx("div",{className:"md:w-1/2 w-full",children:e.jsx("img",{className:"w-full h-auto p-4 rounded-lg",src:t==null?void 0:t.imageURL[0],alt:"image description"})}),e.jsx("div",{className:"md:w-1/2 w-full",children:e.jsxs("div",{className:"flex flex-col p-4",children:[e.jsx("h5",{className:"text-xl font-bold dark:text-white",children:t==null?void 0:t.eventName}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-400",children:["data : ",t==null?void 0:t.startDate," at ",t==null?void 0:t.startTime]}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-400",children:["venue : ",t==null?void 0:t.addressLine1]}),e.jsxs("div",{className:"flex",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"})}),e.jsx("p",{className:"text-gray-500 dark:text-gray-400 mr-3",children:t==null?void 0:t.ticketPrice}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})}),e.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:t==null?void 0:t.eventCapacity})]})]})})]})]}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx(r.Button,{onClick:h,type:"button",size:"sm",color:"red",className:"mt-3 w-28 ",children:"Publish"})})]})]})})};export{de as default};
