import{m as o,u as c,j as e,c as s,z as d}from"./index-1fe445a4.js";import{n as g}from"./logo-no-background-0edf3043.js";function h(){const[n,i]=o.useState(!1),t=c();o.useEffect(()=>{window.addEventListener("resize",()=>window.innerWidth>=960&&i(!1))},[]);const a=()=>{t("/register/user-login")},l=()=>{t("/register/user-sign-up-email-verify")},r=e.jsx("ul",{className:"mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"});return e.jsx(e.Fragment,{children:e.jsxs(s.Navbar,{className:"sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-blue-gray-900",children:[e.jsx("img",{onClick:()=>{t("/")},className:"w-32",src:g}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"mr-4 hidden lg:block",children:r}),e.jsx(s.Button,{onClick:l,variant:"outlined",size:"sm",className:"hidden lg:inline-block",color:"blue-gray",children:e.jsx("span",{children:"Sign Up"})}),e.jsxs(s.Button,{onClick:a,variant:"text",className:"flex items-center gap-2 hidden lg:inline-flex",children:["Login ",e.jsx(d,{strokeWidth:2,className:"h-5 w-5"})]}),e.jsx(s.IconButton,{variant:"text",className:"ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden",ripple:!1,onClick:()=>i(!n),children:n?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"h-6 w-6",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),e.jsxs(s.Collapse,{open:n,children:[r,e.jsx(s.Button,{onClick:l,variant:"text",size:"sm",className:"mb-2",children:"Sign Up"}),e.jsx(s.Button,{onClick:a,variant:"text",size:"sm",className:"mb-2",children:"Login"})]})]})})}export{h as default};
