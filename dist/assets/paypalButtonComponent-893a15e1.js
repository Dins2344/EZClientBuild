import{j as t,J as d}from"./index-12db1f77.js";import{c as a}from"./envConfig-25a527f2.js";import{t as m}from"./userApis-5b974bd0.js";import{k as f,Q as h}from"./ReactToastify-28335442.js";import"./userInterceptor-0ee9c11b.js";const P=({eventName:n,registerInfo:i,setBookingRes:c})=>{const l=e=>(console.log(e),fetch(`${a.BASE_URL}/my-server/create-paypal-order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:{sku:{eventName:n},quantity:"500"}})}).then(r=>r.json()).then(r=>r.id)),p=e=>fetch(`${a.BASE_URL}/my-server/capture-paypal-order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderID:e.orderID})}).then(s=>(s.ok&&m(i).then(o=>(o&&(u(),c(o.data.response)),o)),s)),u=()=>{h.success("Successfully booked tickets!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})};return t.jsxs(t.Fragment,{children:[t.jsx(d,{createOrder:e=>l(e),onApprove:e=>p(e)}),t.jsx(f,{className:"z-50",position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})};export{P as default};
