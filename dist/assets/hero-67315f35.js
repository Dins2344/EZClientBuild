import{r as c,u as d,j as e,c as a}from"./index-01798a1d.js";import{q as m}from"./userApis-6fecf29f.js";import"./userInterceptor-ef0a808e.js";import"./envConfig-2c904499.js";const f=()=>{const[t,i]=c.useState(),o=d(),n=async()=>{const s=await m(),l=s==null?void 0:s.data.data.filter(r=>{if(r.isPromoted)return r});i(l)};return c.useEffect(()=>{n()},[]),e.jsx(a.Carousel,{className:"h-[29rem]",children:t==null?void 0:t.map(s=>e.jsxs("div",{className:"relative h-full w-full",children:[e.jsx("div",{className:"flex justify-center w-full h-full",children:e.jsx("img",{src:s.imageURL[0],alt:"image 3",className:"h-full object-cover "})}),e.jsx("div",{className:"absolute inset-0 grid h-full w-full items-end bg-black/75",children:e.jsxs("div",{className:"w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32",children:[e.jsx(a.Typography,{variant:"h1",color:"white",className:"mb-4 text-2xl md:text-3xl lg:text-4xl",children:s.eventName}),e.jsx("div",{className:"flex gap-2",children:e.jsx(a.Button,{onClick:()=>{const l=s._id;o(`/show-event/?id=${l}`)},size:"sm",color:"white",children:"Explore"})})]})})]},s._id))})};export{f as default};
