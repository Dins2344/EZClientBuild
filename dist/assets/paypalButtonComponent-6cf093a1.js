import{j as t,H as d}from"./index-1b70dfac.js";import{c as a}from"./envConfig-2c904499.js";import{t as m}from"./userApis-d8269ce8.js";import{k as f,Q as h}from"./ReactToastify-9ad22707.js";import"./userInterceptor-ef0a808e.js";const P=({eventName:n,registerInfo:i,setBookingRes:c})=>{const l=e=>(console.log(e),fetch(`${a.BASE_URL}/my-server/create-paypal-order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:{sku:{eventName:n},quantity:"500"}})}).then(r=>r.json()).then(r=>r.id)),p=e=>fetch(`${a.BASE_URL}/my-server/capture-paypal-order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderID:e.orderID})}).then(s=>(s.ok&&m(i).then(o=>(o&&(u(),c(o.data.response)),o)),s)),u=()=>{h.success("Successfully booked tickets!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})};return t.jsxs(t.Fragment,{children:[t.jsx(d,{createOrder:e=>l(e),onApprove:e=>p(e)}),t.jsx(f,{className:"z-50",position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})};export{P as default};
