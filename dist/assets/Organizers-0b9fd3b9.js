import{r as t,j as e}from"./index-22a109d5.js";import{o as i}from"./userApis-7fd80f2c.js";import{O as c,a as m}from"./organizerCards-1d683b60.js";import"./userInterceptor-9200eaeb.js";import"./envConfig-92d5628e.js";import"./ReactToastify-a6df80db.js";const u=()=>{const[s,n]=t.useState(),[o,a]=t.useState(!1),l=async()=>{a(!0);const r=await i();n(r==null?void 0:r.data.data),setTimeout(()=>a(!1),3e3)};return t.useEffect(()=>{l()},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:" mt-24  w-full px-20 ",children:[e.jsxs("h4",{className:"text-2xl pl-4 mb-10 font-bold dark:text-white",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-10 h-10 inline-block mr-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})}),"Organizers to follow"]}),e.jsx("div",{className:"flex w-full  overflow-x-scroll px-4",children:s&&(s==null?void 0:s.length)>0?e.jsx(e.Fragment,{children:o?e.jsx(e.Fragment,{children:e.jsx(c,{})}):e.jsx(e.Fragment,{children:s.map(r=>e.jsx(m,{organization:r},r._id))})}):e.jsx("h4",{className:"text-2xl md:text-4xl",children:"Apologies, but it seems that there are currently no organizers available."})})]})})};export{u as default};
