import{a as v,s as b,j as e,r,u as p,L as N,c as w}from"./index-01798a1d.js";import{b as y,g as k}from"./organizer-d9f53913.js";import"./userInterceptor-ef0a808e.js";import"./envConfig-2c904499.js";const L=()=>{const s=v(b);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full px-3 h-screen",children:[e.jsxs("h1",{className:"mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white",children:["Hello,",s&&(s==null?void 0:s.firstName)]}),e.jsx(O,{})]})})},O=()=>{const[s,c]=r.useState([]),[a,o]=r.useState(""),[n,d]=r.useState(),[i,x]=r.useState(),m=async()=>{const t=await y();c(t.data.data),d(t.data.data[0])},g=async()=>{if(a==""&&s)d(s[0]);else{const t=s==null?void 0:s.filter(l=>l._id===a?l:null);t&&t.length>0&&d(t[0])}},h=async()=>{if(n){const t=await k(n==null?void 0:n._id),l=t==null?void 0:t.data.data,u=new Date,f=l.filter(j=>new Date(j.startDate)>u);console.log(f),x(l[0])}};return r.useEffect(()=>{m()},[]),r.useEffect(()=>{(async()=>{await g(),await h()})()},[a]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex border p-3 rounded-md mb-8",children:[e.jsxs("div",{className:"flex md:w-2/3 lg:w-1/4",children:[e.jsx("div",{className:" mr-3",children:e.jsx("img",{className:"rounded-full w-20 h-20 object-cover",src:n!=null&&n.logo?n.logo:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:"image description"})}),e.jsxs("div",{className:"flex flex-col md:ml-3",children:[e.jsx("h6",{className:"inline-flex mb-3 text-lg font-bold dark:text-white",children:n==null?void 0:n.orgName}),e.jsx("p",{className:"mb-1 text-gray-500 dark:text-gray-400",children:"Total Events"}),e.jsx("p",{className:" text-gray-500 dark:text-gray-400",children:"Total Followers"})]})]}),e.jsx("div",{className:"ml-2",children:e.jsxs("select",{onChange:t=>{o(t.target.value)},id:"small",className:"block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[e.jsx("option",{value:"",selected:!0,children:"Switch organization"}),s&&s.map(t=>e.jsx("option",{value:t._id,children:t.orgName},t._id))]})})]}),e.jsx(z,{nextEvent:i})]})},z=s=>{const c=p(),a=s.nextEvent;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col border p-3 rounded-md ",children:a?e.jsxs("div",{children:[e.jsx("h2",{className:"text-4xl font-bold dark:text-white",children:"Your next event"}),e.jsx(N,{className:"mb-3 text-blue-600",to:"/organization/events",children:"Go to events"}),e.jsxs("div",{className:"flex  flex-wrap  h-auto p-2 bg-blue-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("p",{children:"Date"}),e.jsx("p",{children:a==null?void 0:a.startDate})]}),e.jsx("div",{className:" ml-2 w-40 h-16 bg-black",children:e.jsx("img",{src:a.imageURL[0]})}),e.jsxs("div",{className:"flex flex-col ml-2 justify-center max-w-max ",children:[e.jsx("h6",{children:a==null?void 0:a.eventName}),e.jsx("h6",{children:"tickets sold"})]}),e.jsx("div",{className:"flex place-content-center lg:place-content-end items-center lg:w-7/12 w-full mt-2 ",children:e.jsx(w.Button,{onClick:()=>{c(`/organization/events/event/?eventId=${a._id}`)},size:"sm",color:"deep-orange",children:"Make a change"})})]})]}):e.jsx("h2",{children:"You don't have any events posted. Add new event"})})})};export{L as default};
