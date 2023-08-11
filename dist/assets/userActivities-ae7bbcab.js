import{r,u as N,j as e,c as i,a as T,s as O,b as _}from"./index-1fe445a4.js";import{r as B,s as L,w as E,x as F,h as U,m as S,n as z}from"./userApis-a60f39b2.js";import{a as H}from"./organizerCards-ef773b46.js";import{H as I}from"./index-a56cd223.js";import{k as b,Q as k}from"./ReactToastify-97604f09.js";import{u as P}from"./useDispatch-7ef66e2e.js";import"./userInterceptor-eb453d1e.js";import"./envConfig-9a8092f4.js";const K=()=>{const[t,x]=r.useState(),[l,h]=r.useState(),[n,f]=r.useState(),[c,v]=r.useState(),[g,j]=r.useState(),a=N();r.useEffect(()=>{p(),o(),w()},[g]);const o=async()=>{const s=await B();(s==null?void 0:s.data.data.likedEvents.length)>0&&s&&f(s.data.data.likedEvents)},w=async()=>{const s=await L();s&&v(s.data.data.following)},p=async()=>{const s=await E();x(s==null?void 0:s.data.data);const d=s==null?void 0:s.data.data.sort((m,D)=>new Date(D.event.startDate).getTime()-new Date(m.event.startDate).getTime());let u=d[0];const C=new Date().getTime();d.filter(m=>{new Date(m.event.startDate).getTime()>=C&&new Date(m.event.startDate).getTime()<new Date(u.startDate).getTime()?u=m:u=!1}),h(u)};r.useEffect(()=>{y()},[]);const y=async()=>{const s=new Date().getTime();t==null||t.forEach(async d=>{s>new Date(d.event.startDate).getTime()&&await F(d._id)}),j(!g)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"md:pl-10 pt-2 w-full",children:[e.jsx("h3",{className:"text-2xl mb-2",children:"Upcoming Event"}),e.jsx("div",{className:"flex flex-col p-2 border-4 rounded-lg mb-5",children:l?e.jsxs("div",{className:"flex justify-between h-min mb-2 border",children:[e.jsxs("div",{className:"flex",children:[e.jsx("img",{className:" hidden lg:block md:h-20 p-1 mr-2",src:l.event.imageURL[0],alt:"nature image"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("h3",{className:"md:text-2xl",children:[" ",l.event.eventName]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["on ",l.event.startDate," at ",l.event.startTime," "]}),e.jsxs("p",{className:"text-sm text-gray-600",children:[l.event.ticketValue," booking #",l._id,e.jsx("br",{}),"booked on : ",l.bookingTime]})]})]}),e.jsx("div",{className:"flex items-center p-2",children:e.jsx(i.Button,{className:"h-8",size:"sm",variant:"outlined",color:"gray",onClick:()=>{a(`/show-booking/?bookingId=${l._id}`)},children:"View more"})})]},l._id):e.jsx("div",{className:"w-full flex justify-center h-20 items-center",children:e.jsx("h3",{className:"text-2xl",children:"you don't have any upcoming events"})})}),e.jsx("div",{className:"w-full mb-5 border-2"}),e.jsx("h3",{className:"text-2xl mb-2",children:"Bookings"}),e.jsx("div",{className:"flex flex-col p-2 border-4 rounded-lg h-80 mb-5 overflow-scroll no-scrollbar",children:t&&t.map(s=>e.jsxs("div",{className:"flex justify-between h-min mb-2 border",children:[e.jsxs("div",{className:"flex",children:[e.jsx("img",{className:" hidden lg:block md:h-20 p-1 mr-2",src:s.event.imageURL[0],alt:"nature image"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("h3",{className:"md:text-2xl",children:[" ",s.event.eventName]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["on ",s.event.startDate," at ",s.event.startTime," "]}),e.jsxs("p",{className:"text-sm text-gray-600",children:[s.event.ticketValue," booking #",s._id,e.jsx("br",{}),"booked on : ",s.bookingTime]})]})]}),e.jsx("div",{className:"flex i  tems-center p-2",children:e.jsx(i.Button,{className:"h-8",size:"sm",variant:"outlined",color:"gray",onClick:()=>{a(`/show-booking/?bookingId=${s._id}`)},children:"View more"})})]},s._id))}),e.jsx("div",{className:"w-full mb-5 border-2"}),e.jsx("h3",{className:"text-2xl mb-2",children:"Liked events"}),e.jsx("div",{className:"flex p-2 border-4 rounded-lg mb-5 overflow-y-scroll no-scrollbar",children:n&&n.length>0?n.map(s=>e.jsx(V,{approvedEvent:s},s._id)):e.jsx("div",{children:"No liked events to display."})}),e.jsx("div",{className:"w-full mb-5 border-2"}),e.jsx("h3",{className:"text-2xl mb-2",children:"Following organizers"}),e.jsx("div",{className:"flex p-2 border-4 rounded-lg overflow-y-scroll no-scrollbar",children:c&&c.length>0?c.map(s=>e.jsx(H,{organization:s},s._id)):e.jsx("div",{children:"No liked events to display."})})]})})},V=({approvedEvent:t})=>{const[x,l]=r.useState(!1),h=N(),n=T(O),f=P();r.useEffect(()=>{c()},[x]);const c=async()=>{const a=await U();f(_(a==null?void 0:a.data.data)),a!=null&&a.data.data.likedEvents.includes(t._id)&&l(!0)},v=async()=>{var a;if((a=n.likedEvents)!=null&&a.includes(t._id)){const o=await S(t._id);o!=null&&o.data.response.ok&&(l(!1),g())}else{const o=await z(t._id);o!=null&&o.data.response.ok&&(l(!0),j())}},g=()=>{k.warn("Event removed from liked events...!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},j=()=>{k.success("Event added to liked events....!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})};return e.jsxs(e.Fragment,{children:[e.jsx(b,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx(b,{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e.jsx("div",{className:"  px-2  mt-2 ",children:e.jsxs(i.Card,{className:"w-60 shadow-lg ",children:[e.jsx("div",{className:"!absolute top-0 right-0 rounded-full w-min h-min z-10",children:e.jsx(I,{isClick:x,onClick:v})}),e.jsxs("div",{className:"",children:[e.jsxs(i.CardHeader,{className:"p-0",floated:!1,color:"blue-gray",children:[e.jsx("img",{onClick:()=>{const a=t._id;h(`/show-event/?id=${a}`)},src:t.imageURL[0],alt:"ui/ux review check"}),e.jsx("div",{className:"hover:cursor-pointer to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 "})]}),e.jsxs(i.CardBody,{children:[e.jsxs("div",{className:"mb-3 flex flex-col ",children:[e.jsx("div",{className:"flex justify-between",children:e.jsxs(i.Typography,{variant:"h6",color:"blue-gray",className:"font-thin",children:[t.city,",",t.state]})}),e.jsx(i.Typography,{variant:"h6",color:"blue-gray",className:"font-bold h-14 ",children:t.eventName})]}),e.jsx("div",{className:"",children:e.jsxs(i.Typography,{color:"red",children:[t.startDate,", ",t.startTime]})})]})]}),e.jsx(i.CardFooter,{className:"pt-1",children:e.jsx(i.Button,{onClick:()=>{const a=t._id;h(`/show-event/?id=${a}`)},size:"lg",fullWidth:!0,children:"View more"})})]})},t._id)]})};export{K as default};
