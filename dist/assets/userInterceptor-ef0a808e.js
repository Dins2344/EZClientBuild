import{a as t,c as a}from"./envConfig-2c904499.js";const o=t.create({baseURL:a.BASE_URL});o.interceptors.request.use(e=>{const r=localStorage.getItem("token");return r&&(e.headers.Authorization=`Bearer ${r}`),e},e=>Promise.reject(e));export{o as a};
