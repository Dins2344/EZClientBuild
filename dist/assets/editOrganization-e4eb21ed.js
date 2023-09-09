import{r as t,j as e,S as T,c as g}from"./index-eb407973.js";import{e as U,a as _,d as B,u as R}from"./organizer-ff67fd88.js";import{c as A,a as $}from"./index.esm-dcaf6c88.js";import"./userInterceptor-ef0a808e.js";import"./envConfig-2c904499.js";const q=()=>{const[o,w]=t.useState(),[N,m]=t.useState(!1),[i,v]=t.useState(),[h,k]=t.useState(),[r,f]=t.useState({_id:"",userId:"",orgName:"",orgType:"",admin:[],ownerId:"",__v:0,logo:"",country:""}),[c,C]=t.useState(void 0),[p,O]=t.useState(!1),[S,j]=t.useState(!1);t.useEffect(()=>{const a=new URLSearchParams(window.location.search).get("id");a&&z(a),E(),m(!1)},[p]),t.useEffect(()=>{o&&L(o==null?void 0:o.ownerId)},[o]);const L=async s=>{const a=await U(s);v(a==null?void 0:a.data.data)},z=async s=>{const a=await _(s);w(a==null?void 0:a.data.data),f(a==null?void 0:a.data.data)},E=async()=>{const s=await B();k(s==null?void 0:s.data.data)},u=s=>{const{name:a,value:n}=s.target;f(l=>({...l,[a]:n}))},F=s=>{var n;const a=(n=s.target.files)==null?void 0:n[0];C(a)},I=A().shape({orgName:$().required("Organization name is required")}),[y,b]=t.useState({}),P=s=>{s.preventDefault(),I.validate(r,{abortEarly:!1}).then(async()=>{const a=new FormData;a.append("orgName",r.orgName),a.append("orgType",r.orgType),a.append("country",r.country),a.append("_id",r._id),c&&[c].forEach((d,x)=>{a.append("images",d,`images${x}`)}),j(!0);const n=await R(a);b({}),n!=null&&n.data.ok&&(j(!1),O(!p))}).catch(a=>{const n=a.inner.reduce((l,{path:d,message:x})=>(d&&(l[d]=x),l),{});b(n)})};return e.jsx(e.Fragment,{children:S?e.jsx(T,{}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-4xl font-extrabold text-black mt-10",children:"Organization Settings"}),e.jsxs("h3",{className:"text-2xl  text-black mt-10",children:[o==null?void 0:o.orgName," Organization"]}),e.jsxs("h3",{className:"text-xl  text-black mt-10",children:["Owner : ",i&&i.firstName," ",i&&i.lastName]}),e.jsxs("form",{onSubmit:P,children:[e.jsxs("div",{className:"flex flex-wrap mt-5",children:[e.jsxs("div",{className:"flex flex-col md:w-1/2 w-full ",children:[e.jsx("h5",{className:"mt-5 mb-5",children:"Organization Logo"}),N?e.jsx(e.Fragment,{children:c?e.jsxs("div",{className:"flex flex-col w-52 items-center",children:[e.jsx("img",{className:"rounded-full w-52 h-52",src:URL.createObjectURL(c),alt:"image description"}),e.jsx(g.Button,{onClick:()=>{m(!0)},size:"sm",variant:"outlined",color:"gray",className:"mt-3",children:"Change Logo"})]}):e.jsx("div",{className:"flex items-center justify-center w-52 h-52",children:e.jsxs("label",{htmlFor:"profilePicture",className:"flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center ",children:[e.jsx("svg",{className:"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16",children:e.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),e.jsxs("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("span",{className:"font-semibold",children:"Click to upload"})," ","or drag and drop"]})]}),e.jsx("input",{type:"file",id:"profilePicture",name:"profilePicture",onChange:F,className:"hidden"})]})})}):e.jsxs("div",{className:"flex flex-col w-52 items-center",children:[e.jsx("img",{className:"rounded-full w-52 h-52",src:r.logo?r.logo:"https://img.freepik.com/free-icon/user_318-159711.jpg",alt:"image description"}),e.jsx(g.Button,{onClick:()=>{m(!0)},size:"sm",variant:"outlined",color:"gray",className:"mt-3",children:"Change Logo"})]})]}),e.jsxs("div",{className:"flex flex-col md:w-1/2 w-full",children:[e.jsx("h5",{className:"mt-5 mb-5",children:"Organization Info"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-wrap",children:[e.jsxs("div",{className:"w-full lg:w-1/2 lg:pr-3",children:[e.jsx(g.Input,{onChange:u,label:"Organization name",value:r.orgName,name:"orgName"}),y.orgName&&e.jsx("div",{className:"error text-red-600",children:y.orgName})]}),e.jsx("div",{className:"w-full lg:w-1/2 lg:pl-3 mt-3 lg:mt-0",children:e.jsxs("select",{onChange:u,name:"orgType",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[e.jsx("option",{value:r==null?void 0:r.orgType,selected:!0,children:r==null?void 0:r.orgType}),h&&h.map(s=>e.jsx("option",{value:s.categoryName,children:s.categoryName}))]})})]}),e.jsx("div",{className:"flex flex-wrap mt-3 lg:pr-3",children:e.jsx("div",{className:"w-full lg:w-1/2",children:e.jsxs("select",{onChange:u,name:"country",id:"countries",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[r.country?e.jsx("option",{value:r.country,selected:!0,children:r.country}):e.jsx("option",{selected:!0,children:"Choose a country"}),e.jsx("option",{value:"India",children:"India"}),e.jsx("option",{value:"USA",children:"United States"}),e.jsx("option",{value:"Canada",children:"Canada"}),e.jsx("option",{value:"France",children:"France"}),e.jsx("option",{value:"Germany",children:"Germany"})]})})})]})]})]}),e.jsx("div",{className:"flex justify-end mt-3",children:e.jsx(g.Button,{type:"submit",color:"red",size:"sm",children:"Save"})})]})]})})},J=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"h-screen w-full px-4",children:e.jsx(q,{})})});export{J as default};
