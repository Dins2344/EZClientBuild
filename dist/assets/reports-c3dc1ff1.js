import{r as o,j as e}from"./index-22a109d5.js";import{_ as m}from"./react-apexcharts.min-c8b30781.js";import{f as h,h as p,i as f,j as u}from"./organizer-f5f7f7a1.js";import"./userInterceptor-9200eaeb.js";import"./envConfig-92d5628e.js";const y=()=>{const[a,c]=o.useState();o.useEffect(()=>{r()},[]);const r=async()=>{const s=await h();c(s==null?void 0:s.data.data)},l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["2023-01","2023-02","2023-03","2023-04","2023-05","2023-06","2023-07","2023-08","2023-09","2023-10","2023-11","2023-12"].map(s=>{const i=a&&a.find(x=>x.month===s);return i?i.totalSales:0}),t={options:{chart:{id:"basic-bar"},xaxis:{categories:l}},series:[{name:"Revenue",data:n}]};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full",children:e.jsx(m,{options:t.options,series:t.series,type:"bar"})})})},j=()=>{const[a,c]=o.useState();o.useEffect(()=>{r()},[]);const r=async()=>{const s=await p();c(s==null?void 0:s.data.data)},l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["2023-01","2023-02","2023-03","2023-04","2023-05","2023-06","2023-07","2023-08","2023-09","2023-10","2023-11","2023-12"].map(s=>{const i=a&&a.find(x=>x.month===s);return i?i.totalTickets:0}),t={options:{chart:{id:"basic-bar"},xaxis:{categories:l}},series:[{name:"Ticket sold",data:n}]};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full",children:e.jsx(m,{options:t.options,series:t.series,type:"line"})})})},k=()=>{const[a,c]=o.useState();o.useEffect(()=>{r()},[]);const r=async()=>{const t=await f();c(t==null?void 0:t.data.data)},l=["free","charged","donation"],n={series:l.map(t=>{const s=a&&a.find(i=>i.paymentType===t);return s?s.totalTickets:0}),chartOptions:{labels:l}};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full",children:e.jsx(m,{options:n.chartOptions,series:n.series,type:"pie"})})})},S=()=>{const[a,c]=o.useState();o.useEffect(()=>{r()},[]);const r=async()=>{const t=await u();console.log(t==null?void 0:t.data.data),c(t==null?void 0:t.data.data)},l=[],d=[];a==null||a.forEach(t=>{l.push(t.eventName),d.push(t.totalTickets)});const n={series:d,chartOptions:{labels:l}};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full",children:e.jsx(m,{options:n.chartOptions,series:n.series,type:"donut"})})})},M=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"min-h-screen px-4",children:[e.jsx("h2",{className:"text-xl md:text-4xl font-extrabold text-black mt-10",children:"Reports"}),e.jsxs("div",{className:"flex flex-wrap mt-10 border shadow-md px-3 rounded-md",children:[e.jsxs("div",{className:"flex flex-col justify-center w-full py-4 mb-3",children:[e.jsx("h2",{className:"text-xl  font-extrabold text-black ",children:"Sales Summary"}),e.jsx("p",{children:"An overview of all ticket sales,"})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-1/2 items-center",children:[e.jsx("p",{children:"Monthly revenue"}),e.jsx(y,{})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-1/2 items-center mt-3 md:mt-0",children:[e.jsx("p",{children:"Tickets sold in a month"}),e.jsx(j,{})]})]}),e.jsxs("div",{className:"flex flex-wrap mt-10 border shadow-md px-3 rounded-md",children:[e.jsxs("div",{className:"flex flex-col justify-center w-full py-4 mb-3",children:[e.jsx("h2",{className:"text-xl  font-extrabold text-black ",children:"Sales by Ticket Type"}),e.jsx("p",{children:"An overview of all ticket sales by ticket type"})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-1/2 items-center",children:[e.jsx("p",{className:"mb-2",children:"Ticket types sold"}),e.jsx(k,{})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-1/2 items-center mt-3 md:mt-0",children:[e.jsx("p",{className:"mb-2",children:"Ticket sold by events"}),e.jsx(S,{})]})]})]})});export{M as default};
