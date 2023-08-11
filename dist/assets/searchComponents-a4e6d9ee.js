import{r,a as k,D as z,E,j as e,c as F,u as N}from"./index-2f93e65a.js";import{m as O,l as D}from"./organizer-59abea21.js";import{B as p}from"./userApis-a121ecb4.js";import{u as M}from"./useDispatch-c5b0b476.js";import"./userInterceptor-ab5ce591.js";import"./envConfig-25a527f2.js";const Y=()=>{const[l,i]=r.useState(),[s,x]=r.useState(""),[c,m]=r.useState(""),[d,j]=r.useState(""),[h,u]=r.useState(""),[n,f]=r.useState("event"),[g,v]=r.useState(),[a,w]=r.useState(),o=k(z),y=M();r.useEffect(()=>{S(),b()},[]),r.useEffect(()=>{C()},[s,c,d,h,n]);const b=()=>{o&&(x(o==null?void 0:o.searchText),m(o==null?void 0:o.city),y(E()))},S=async()=>{const t=await O();i(t==null?void 0:t.data.data)},C=async()=>{if(n==="event"){const t=await p(n,s,c,d,h);v(t==null?void 0:t.data.data)}else if(n==="organizer"){const t=await p(n,s,c,d,h);w(t==null?void 0:t.data.data)}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full flex flex-col pb-3 border-b-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6 mr-3",children:e.jsx("path",{"fill-rule":"evenodd",d:"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z","clip-rule":"evenodd"})}),e.jsx("div",{className:"w-52 mr-3",children:e.jsx(F.Input,{variant:"standard",placeholder:"Search anything",className:"w-52 h-10 border-b-2",value:s,onChange:t=>{x(t.target.value)}})})]}),e.jsxs("div",{className:"flex items-center md:mt-4",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6 mr-3",children:e.jsx("path",{"fill-rule":"evenodd",d:"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"})}),e.jsxs("select",{id:"countries",className:"border-none text-gray-900 text-sm rounded-lg",onChange:t=>{m(t.target.value)},children:[c?e.jsx("option",{value:c,selected:!0,children:c}):e.jsx("option",{value:"",selected:!0,children:"Choose a city"}),l&&l.map(t=>e.jsx("option",{value:t.cityName,children:t.cityName},t._id))]})]})]}),e.jsxs("div",{className:"flex mt-4",children:[e.jsx("div",{className:"w-4/12 flex flex-col",children:e.jsx(P,{setPrice:j,price:d,category:h,setCategory:u,searchFor:n,setSearchFor:f})}),e.jsx("div",{className:"w-8/12 flex flex-col",children:g&&a?e.jsxs(e.Fragment,{children:[n==="event"&&e.jsx(_,{data:g}),n==="organizer"&&e.jsx(T,{data:a})]}):e.jsx(e.Fragment,{})})]})]})},P=({price:l,category:i,setPrice:s,setCategory:x,searchFor:c,setSearchFor:m})=>{const[d,j]=r.useState(),[h,u]=r.useState(!1);r.useEffect(()=>{n()},[]);const n=async()=>{const a=await D();j(a==null?void 0:a.data.data)},f=a=>{a.target.value===l?s(""):s(a.target.value)},g=a=>{a.target.value===i?x(""):x(a.target.value)},v=a=>{a.target.value===c?m(""):m(a.target.value),a.target.value==="organizer"&&u(!0),(a.target.value==="event"||a.target.value==="")&&u(!1),x(""),s("")};return e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-xl md:text-3xl font-bold",children:"Filters"}),e.jsxs("div",{className:"flex flex-col mt-3",children:[e.jsx("h5",{className:"text-lg md:text-xl font-semibold",children:"Search for"}),e.jsxs("label",{className:"w-auto mt-1 mb-1",children:[e.jsx("input",{type:"radio",onClick:v,checked:c==="organizer",value:"organizer",name:"organizer",className:"mr-3"}),"Organizer"]}),e.jsxs("label",{className:"w-auto",children:[e.jsx("input",{type:"radio",onClick:v,checked:c==="event",value:"event",name:"event",className:"mr-3"}),"Event"]})]}),!h&&e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col mt-3",children:[e.jsx("h5",{className:"text-lg md:text-xl font-semibold",children:"Price"}),e.jsxs("label",{className:"w-auto mt-1 mb-1",children:[e.jsx("input",{type:"radio",onClick:f,checked:l==="free",value:"free",name:"Price",className:"mr-3"}),"Free"]}),e.jsxs("label",{className:"w-16",children:[e.jsx("input",{type:"radio",onClick:f,checked:l==="charged",value:"charged",name:"Price",className:"mr-3"}),"Paid"]})]}),e.jsxs("div",{className:"flex flex-col mt-3",children:[e.jsx("h5",{className:"text-lg md:text-xl font-semibold",children:"Categories"}),d&&d.map(a=>e.jsxs("label",{className:"w-auto mt-1 mb-1",children:[e.jsx("input",{type:"radio",onClick:g,checked:i===a.categoryName,value:a.categoryName,name:"Category",className:"mr-3"}),a.categoryName]},a._id))]})]})]})},_=({data:l})=>{const i=N();return l.length===0?e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full px-4 h-96 flex items-center justify-center",children:e.jsx("h3",{className:"text-2xl",children:"Ooops..! Your search query fails to align with any scheduled events in our database."})})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full px-4",children:l&&l.map(s=>e.jsxs("div",{onClick:()=>i(`/show-event/?id=${s._id}`),className:"w-full flex flex-wrap p-3 hover:shadow-md border-2 rounded-md mt-3",children:[e.jsx("img",{className:" w-full md:w-48 rounded-md",src:s.imageURL[0]}),e.jsxs("div",{className:"flex flex-col pt-2 md:pt-0 md:pl-2",children:[e.jsx("h3",{className:"text-lg md:text-2xl font-bold dark:text-white mb-3",children:s.eventName}),e.jsxs("p",{children:["on: ",s.startDate,",",s.startTime]}),s.ticketValue==="free"?e.jsx("p",{children:s.ticketValue}):e.jsxs("p",{children:["Price: ",s.ticketPrice]})]})]},s._id))})})},T=({data:l})=>{const i=N();return l.length===0?e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full px-4 h-96 flex items-center justify-center",children:e.jsx("h3",{className:"text-2xl",children:"Ooops..! Your search query fails to align with any scheduled events in our database."})})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full px-4",children:l.map(s=>e.jsxs("div",{onClick:()=>i(`/show-organizer/?id=${s._id}`),className:"w-full flex flex-wrap p-3 hover:cursor-pointer hover:shadow-md border-2 rounded-md mt-3",children:[e.jsx("img",{className:" w-full md:w-48 rounded-md",src:s.logo}),e.jsxs("div",{className:"flex flex-col pt-2 md:pt-0 md:pl-2",children:[e.jsx("h3",{className:"text-lg md:text-2xl font-bold dark:text-white mb-3",children:s.orgName}),e.jsxs("p",{children:["category: ",s.orgType]}),e.jsxs("p",{children:["Country: ",s.country]})]})]},s._id))})})};export{Y as default};
