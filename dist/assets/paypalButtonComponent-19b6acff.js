import{j as r,J as d}from"./index-2971bc14.js";import{t as m}from"./userApis-b7d312a0.js";import{k as h,Q as f}from"./ReactToastify-99f11a3a.js";import"./userInterceptor-c1588ff4.js";import"./axios-4a70c6fc.js";const a="http://localhost:4000",j=({eventName:n,registerInfo:i,setBookingRes:c})=>{const l=e=>(console.log(e),fetch(`${a}/my-server/create-paypal-order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:{sku:{eventName:n},quantity:"500"}})}).then(t=>t.json()).then(t=>t.id)),p=e=>fetch(`${a}/my-server/capture-paypal-order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderID:e.orderID})}).then(s=>(s.ok&&m(i).then(o=>(o&&(u(),c(o.data.response)),o)),s)),u=()=>{f.success("Successfully booked tickets!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})};return r.jsxs(r.Fragment,{children:[r.jsx(d,{createOrder:e=>l(e),onApprove:e=>p(e)}),r.jsx(h,{className:"z-50",position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})};export{j as default};
