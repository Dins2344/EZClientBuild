import{a as r,c as a}from"./envConfig-25a527f2.js";const o=r.create({baseURL:a.BASE_URL});o.interceptors.request.use(t=>{const e=localStorage.getItem("adminToken");return e&&(t.headers.Authorization=`Bearer ${e}`),t},t=>Promise.reject(t));const n=async t=>{try{return await o.post(`${a.BASE_URL}/admin/add-event-category`,t)}catch(e){console.log(e)}},c=async t=>{try{return await o.post(`${a.BASE_URL}/admin/add-org-category`,t)}catch(e){console.log(e)}},l=async()=>{try{return await o.get(`${a.BASE_URL}/admin/get-all-event-categories`)}catch(t){console.log(t)}},g=async()=>{try{return await o.get(`${a.BASE_URL}/admin/get-all-org-categories`)}catch(t){console.log(t)}},i=async t=>{try{return await o.get(`${a.BASE_URL}/admin/get-single-event-categories/${t}`)}catch(e){console.log(e)}},d=async t=>{try{return console.log(t),await o.post(`${a.BASE_URL}/admin/edit-event-category`,t)}catch(e){console.log(e)}},y=async t=>{try{return await o.get(`${a.BASE_URL}/admin/delete-event-category/${t}`)}catch(e){console.log(e)}},m=async t=>{try{return await o.get(`${a.BASE_URL}/admin/delete-org-category/${t}`)}catch(e){console.log(e)}},u=async()=>{try{return await o.get(`${a.BASE_URL}/admin/get-all-events`)}catch(t){console.log(t)}},S=async t=>{try{return await o.get(`${a.BASE_URL}/admin/approve-event/${t}`)}catch(e){console.log(e)}},E=async t=>{try{return await o.get(`${a.BASE_URL}/admin/reject-event/${t}`)}catch(e){console.log(e)}},$=async()=>{try{return await o.get(`${a.BASE_URL}/admin/getTotalUsers`)}catch(t){console.log(t)}},h=async()=>{try{return await o.get(`${a.BASE_URL}/admin/getTotalEvents`)}catch(t){console.log(t)}},A=async()=>{try{return await o.get(`${a.BASE_URL}/admin/getTotalOrganizers`)}catch(t){console.log(t)}},p=async()=>{try{return await o.get(`${a.BASE_URL}/admin/getTotalTicketsSold`)}catch(t){console.log(t)}},U=async()=>{try{return await o.get(`${a.BASE_URL}/admin/get-monthly-sales`)}catch(t){console.log(t)}},B=async()=>{try{return await o.get(`${a.BASE_URL}/admin/get-monthly-ticket-sales`)}catch(t){console.log(t)}},L=async()=>{try{return await o.get(`${a.BASE_URL}/admin/get-monthly-ticket-type-sales`)}catch(t){console.log(t)}},R=async()=>{try{return await o.get(`${a.BASE_URL}/admin/get-most-sold-events`)}catch(t){console.log(t)}},w=async()=>{try{return await o.get(`${a.BASE_URL}/admin/get-all-bookings`)}catch(t){console.log(t)}},_=async t=>{try{return await o.post(`${a.BASE_URL}/admin/city-manage`,t)}catch(e){console.log(e)}},v=async()=>{try{return await o.get(`${a.BASE_URL}/admin/city-manage`)}catch(t){console.log(t)}},T=async t=>{try{return await o.delete(`${a.BASE_URL}/admin/city-manage/${t}`)}catch(e){console.log(e)}},k=async t=>{try{return await o.get(`${a.BASE_URL}/admin/update-promoted-events/${t}`)}catch(e){console.log(e)}},C=async t=>{try{return await o.delete(`${a.BASE_URL}/admin/update-promoted-events/${t}`)}catch(e){console.log(e)}},b=async t=>{try{return await o.get(`${a.BASE_URL}/admin/update-user-status/${t}`)}catch(e){console.log(e)}},j=async t=>{try{return await o.put(`${a.BASE_URL}/admin/update-user-status/${t}`)}catch(e){console.log(e)}};export{R as A,g as a,m as b,u as c,y as d,S as e,C as f,l as g,A as h,$ as i,b as j,n as k,i as l,d as m,v as n,c as o,k as p,T as q,E as r,_ as s,w as t,j as u,U as v,B as w,L as x,h as y,p as z};
