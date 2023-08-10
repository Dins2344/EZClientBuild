import{r as l,a as g,s as h,u as d,j as e,L as t,b as x,O as m}from"./index-12d5c0b2.js";import{u as v}from"./useIsOnline-5e7f116a.js";import{n as p}from"./logo-no-background-0edf3043.js";import{g as u}from"./userApis-5b974bd0.js";import{u as y}from"./useDispatch-83dcb48b.js";import{F as w}from"./footer-5ed67771.js";import"./userInterceptor-0ee9c11b.js";import"./envConfig-25a527f2.js";const f=()=>{const[a,r]=l.useState(""),o=y(),i=async()=>{const n=await u();o(x(n==null?void 0:n.data.data))};l.useEffect(()=>{i()},[]);const s=g(h),c=d();return e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:"fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700",children:e.jsx("div",{className:"px-3 py-3 lg:px-5 lg:pl-3",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center justify-start",children:[e.jsxs("button",{"data-drawer-target":"logo-sidebar","data-drawer-toggle":"logo-sidebar","aria-controls":"logo-sidebar",type:"button",className:"inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:[e.jsx("span",{className:"sr-only",children:"Open sidebar"}),e.jsx("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})]}),e.jsxs(t,{to:"/organization/home",className:"flex ml-2 md:mr-24",children:[e.jsx("img",{src:p,className:"h-8 mr-3",alt:"FlowBite Logo"}),e.jsx("span",{className:"self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white",children:"Organizer panel"})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(t,{to:"/",className:"hidden md:block mr-3",children:"Switch to attendee"}),e.jsxs("div",{className:"flex items-center ml-3",children:[e.jsx("div",{children:e.jsxs("button",{type:"button",className:"flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600","aria-expanded":"false","data-dropdown-toggle":"dropdown-user",children:[e.jsx("span",{className:"sr-only",children:"Open user menu"}),e.jsx("img",{className:"w-8 h-8 rounded-full object-cover",src:s.profileImage,alt:"https://img.freepik.com/free-icon/user_318-159711.jpg"})]})}),e.jsxs("div",{className:"z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600",id:"dropdown-user",children:[e.jsxs("div",{className:"px-4 py-3",role:"none",children:[e.jsx("p",{className:"text-sm text-gray-900 dark:text-white",role:"none",children:"Neil Sims"}),e.jsx("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-gray-300",role:"none",children:"neil.sims@flowbite.com"})]}),e.jsxs("ul",{className:"py-1",role:"none",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"md:hidden block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem",children:"Switch to attendee"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem",children:"Settings"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem",children:"Earnings"})}),e.jsx("li",{children:e.jsx("button",{onClick:()=>{localStorage.removeItem("token"),c("/")},className:"block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white",role:"menuitem",children:"Sign out"})})]})]})]})]})]})})}),e.jsx("aside",{id:"logo-sidebar",className:"fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700","aria-label":"Sidebar",children:e.jsx("div",{className:"h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800",children:e.jsxs("ul",{className:"space-y-2 font-medium",children:[e.jsx("li",{children:e.jsxs(t,{to:"/organization/home",onClick:()=>r("home"),className:`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${a==="home"&&"bg-gray-100"}`,children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",children:[e.jsx("path",{d:"M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"}),e.jsx("path",{d:"M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"})]}),e.jsx("span",{className:"ml-3",children:"Home"})]})}),e.jsx("li",{children:e.jsxs(t,{to:"/organization/reports",onClick:()=>r("reports"),className:`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${a==="reports"&&"bg-gray-100"}`,children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",children:[e.jsx("path",{"fill-rule":"evenodd",d:"M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 17.25a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zm2.25-3a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-5.25z","clip-rule":"evenodd"}),e.jsx("path",{d:"M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"})]}),e.jsx("span",{className:"ml-3",children:"Reports"})]})}),e.jsx("li",{children:e.jsxs(t,{to:"/organization/events",onClick:()=>r("events"),className:`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${a==="events"&&"bg-gray-100"}`,children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",children:[e.jsx("path",{"fill-rule":"evenodd",d:"M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z","clip-rule":"evenodd"}),e.jsx("path",{"fill-rule":"evenodd",d:"M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})]}),e.jsx("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Events management"})]})}),e.jsx("li",{children:e.jsxs(t,{to:"/organization/bookings",onClick:()=>r("bookings"),className:`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${a==="bookings"&&"bg-gray-100"}`,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",children:e.jsx("path",{"fill-rule":"evenodd",d:"M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z","clip-rule":"evenodd"})}),e.jsx("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Bookings"})]})}),e.jsx("li",{children:e.jsxs(t,{to:"/organization/settings",onClick:()=>r("settings"),className:`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${a==="settings"&&"bg-gray-100"}`,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",children:e.jsx("path",{"fill-rule":"evenodd",d:"M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z","clip-rule":"evenodd"})}),e.jsx("span",{className:"flex-1 ml-3 whitespace-nowrap",children:"Settings"})]})})]})})})]})},V=()=>{const[a,r]=l.useState(""),o=d();return l.useEffect(()=>{const s=localStorage.getItem("token");s&&r(s),s||o("/")},[]),v()?e.jsx(e.Fragment,{children:a&&e.jsxs(e.Fragment,{children:[e.jsx(f,{}),e.jsx("div",{className:"p-4 sm:ml-64 mt-12",children:e.jsx(m,{})}),e.jsx(w,{})]})}):e.jsx(e.Fragment,{children:e.jsx("p",{children:"your offline"})})};export{V as default};