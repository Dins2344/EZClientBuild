import{a as o}from"./userInterceptor-0ee9c11b.js";import{c as n}from"./envConfig-25a527f2.js";const s=async()=>await o.get(`${n.BASE_URL}/organization/get-user-organizations`),c=async t=>await o.get(`${n.BASE_URL}/organization/get-organization-details/${t}`),i=async()=>await o.get(`${n.BASE_URL}/organization/get-all-event-categories`),g=async t=>await o.post(`${n.BASE_URL}/organization/add-event-basic-info`,t),l=async t=>{console.log(t);try{return await o.post(`${n.BASE_URL}/organization/add-event-media-info`,t)}catch(a){console.log(a)}},d=async t=>{try{return await o.post(`${n.BASE_URL}/organization/add-event-publish-info`,t)}catch(a){console.log(a)}},y=async t=>{try{return await o.get(`${n.BASE_URL}/organization/get-event-details/${t}`)}catch(a){console.log(a)}},u=async t=>{console.log("publish called");try{return await o.get(`${n.BASE_URL}/organization/publish-event/${t}`)}catch(a){console.log(a)}},z=async()=>{try{return await o.get(`${n.BASE_URL}/organization/get-users-all-events`)}catch(t){console.log(t)}},E=async t=>{try{return await o.get(`${n.BASE_URL}/organization/get-organizers-all-events/${t}`)}catch(a){console.log(a)}},h=async()=>{try{return await o.get(`${n.BASE_URL}/organization/get-organizers-all-bookings`)}catch(t){console.log(t)}},$=async t=>{try{return await o.get(`${n.BASE_URL}/organization/get-organization-owner/${t}`)}catch(a){console.log(a)}},A=async()=>{try{return await o.get(`${n.BASE_URL}/organization/get-all-organization-categories`)}catch(t){console.log(t)}},S=async t=>{try{return await o.post(`${n.BASE_URL}/organization/update-organization-info`,t)}catch(a){console.log(a)}},B=async()=>{try{return await o.get(`${n.BASE_URL}/organization/get-monthly-sales`)}catch(t){console.log(t)}},w=async()=>{try{return await o.get(`${n.BASE_URL}/organization/get-monthly-ticket-sales`)}catch(t){console.log(t)}},U=async()=>{try{return await o.get(`${n.BASE_URL}/organization/get-ticket-type-sold`)}catch(t){console.log(t)}},v=async()=>{try{return await o.get(`${n.BASE_URL}/organization/get-tickets-sold-by-events`)}catch(t){console.log(t)}},L=async()=>{try{return await o.get(`${n.BASE_URL}/organization/get-all-cities`)}catch(t){console.log(t)}},R=async t=>{try{return await o.put(`${n.BASE_URL}/organization/update-event-info`,t)}catch(a){console.log(a)}};export{c as a,s as b,z as c,A as d,$ as e,B as f,E as g,w as h,U as i,v as j,y as k,i as l,L as m,R as n,g as o,l as p,d as q,u as r,h as s,S as u};