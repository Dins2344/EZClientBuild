import{r as o,a as S,s as k,b as E,j as e,c as v}from"./index-115ee365.js";import{g as O,a as y}from"./organizer-ff67fd88.js";import{b as D,k as F,u as B,c as P}from"./userApis-d8269ce8.js";import{k as N,Q as C}from"./ReactToastify-004524da.js";import{u as U}from"./useDispatch-549d81b8.js";import I from"./eventCards-22a8dee7.js";import"./userInterceptor-ef0a808e.js";import"./envConfig-2c904499.js";import"./index-a56cd223.js";const $=({organization:t})=>{var x;const[r,n]=o.useState(),[d,u]=o.useState((x=t.followers)==null?void 0:x.length),[c,f]=o.useState(),h=U(),m=S(k);o.useEffect(()=>{l()},[]),o.useEffect(()=>{j()},[r]);const l=async()=>{const s=await O(t._id),i=s==null?void 0:s.data.data.filter(b=>{if(b.status==="approved")return b});f(i)},a=async()=>{await F(t.ownerId,t.orgName,t.logo)},j=async()=>{const s=await D();s!=null&&s.data.data.following.includes(t._id)&&n(!0),s&&h(E(s.data.data))},p=async()=>{var s;if((s=m==null?void 0:m.following)!=null&&s.includes(t._id)){const i=await B(t._id);i!=null&&i.data.response.ok&&(n(!1),d&&u(d-1),g())}else{const i=await P(t._id);i!=null&&i.data.response.ok&&(n(!0),d&&u(d+1),w())}},g=()=>{C.warn("You will no longer receive updates from the organizer...!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},w=()=>{C.success("You will receive updates from the organizer....!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})};return e.jsxs(e.Fragment,{children:[e.jsx(N,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx(N,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx("div",{className:"w-full flex justify-center items-center",children:e.jsxs("div",{className:"md:w-3/4 lg:w-2/4 w-full flex flex-col items-center my-10 md:rounded-xl md:shadow-lg mt-3 md:mt-10",children:[e.jsx("img",{className:"h-32 w-32 rounded-full object-cover object-center mt-4 mb-5",src:t.logo?t.logo:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:"nature image"}),e.jsx("h1",{className:"text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-white mb-3",children:t.orgName}),e.jsxs("div",{className:"flex mb-3",children:[e.jsx(v.Button,{onClick:p,className:"mr-2 rounded-sm",size:"sm",variant:"outlined",color:"blue",children:r?"Unfollow":"Follow"}),e.jsx(v.Button,{onClick:a,className:"ml-2 rounded-sm",size:"sm",color:"blue",children:"Contact"})]}),e.jsxs("div",{className:"flex mb-8",children:[e.jsxs("div",{className:"flex flex-col items-center px-3 border-r-2",children:[e.jsx("p",{children:d}),e.jsx("p",{children:"followers"})]}),e.jsxs("div",{className:"flex flex-col items-center px-3 ",children:[e.jsxs("p",{children:[c==null?void 0:c.length," "]}),e.jsx("p",{children:"Events"})]})]})]})})]})},H=({events:t})=>{const[r,n]=o.useState(),[d,u]=o.useState(!0),[c,f]=o.useState(!1);o.useEffect(()=>{h()},[]);const h=()=>{const l=t.filter(a=>{const p=new Date().toLocaleDateString("en-GB"),[g,w,x]=p.split("/"),s=`${x}-${w.padStart(2,"0")}-${g.padStart(2,"0")}`;if(a.startDate>s)return a});n(l),u(!0),f(!1)},m=()=>{const l=t.filter(a=>{const p=new Date().toLocaleDateString("en-GB"),[g,w,x]=p.split("/"),s=`${x}-${w.padStart(2,"0")}-${g.padStart(2,"0")}`;if(a.startDate<s)return a});n(l),u(!1),f(!0)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full border-t-2 mb-16",children:[e.jsx("h3",{className:"text-lg md:text-2xl mt-4 font-semibold",children:"Events"}),e.jsxs("div",{className:"flex mt-4 mb-10",children:[e.jsx(v.Button,{onClick:h,className:d?"rounded-full mr-4 bg-blue-600 text-white":"rounded-full mr-4 border-2 bg-white text-black",children:"Upcoming events"}),e.jsx(v.Button,{onClick:m,className:c?"rounded-full  bg-blue-600 text-white":"rounded-full mr-4 bg-white border-2 text-black",children:"Past events"})]}),(r==null?void 0:r.length)===0?e.jsx("div",{className:"w-full flex justify-center h-80 items-center",children:e.jsx("h4",{className:"text-2xl md:text-4xl",children:"Apologies, but it seems that there are currently no events available."})}):e.jsx("div",{className:"flex flex-wrap",children:r&&r.map(l=>e.jsx(I,{approvedEvent:l}))})]})})},q=()=>{const[t,r]=o.useState(),[n,d]=o.useState(),c=new URLSearchParams(window.location.search).get("id");o.useEffect(()=>{c&&f(c),c&&h(c)},[]);const f=async l=>{const a=await y(l);r(a==null?void 0:a.data.data)},h=async l=>{const a=await O(l);d(a==null?void 0:a.data.data)},m=n==null?void 0:n.filter(l=>{if(l.status==="approved")return l});return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full min-h-screen",children:[e.jsx("div",{className:"",children:t&&e.jsx($,{organization:t})}),e.jsx("div",{className:"lg:px-36 md:px-20 px-4",children:m&&e.jsx(H,{events:m})})]})})};export{q as default};
