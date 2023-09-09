import{a as s}from"./userInterceptor-ef0a808e.js";import{c as r}from"./envConfig-2c904499.js";const i=async t=>{try{const e={email:t};return s.post(`${r.BASE_URL}/user/update-email`,e)}catch(e){console.log(e)}},d=async t=>{try{return(await s.post(`${r.BASE_URL}/user/register-organization`,t)).data}catch(e){console.log("error in fetching",e)}},u=async()=>{try{return await s.get(`${r.BASE_URL}/user/get-user-details`)}catch(t){console.log(t)}},y=async()=>{try{return await s.get(`${r.BASE_URL}/user/get-user-details-by-Id`)}catch(t){console.log(t)}},w=async()=>{try{return await s.get(`${r.BASE_URL}/user/get-all-approved-events`)}catch(t){console.log(t)}},h=async()=>{try{return await s.get(`${r.BASE_URL}/user/get-all-events-from-following-organizers`)}catch(t){console.log(t)}},$=async t=>{try{return await s.get(`${r.BASE_URL}/user/get-complete-event-details/${t}`)}catch(e){console.log(e)}},p=async t=>{try{return await s.post(`${r.BASE_URL}/user/ticket-booking`,t)}catch(e){console.log(e)}},E=async()=>{try{return await s.get(`${r.BASE_URL}/user/get-booking-details`)}catch(t){console.log(t)}},B=async t=>{try{return await s.get(`${r.BASE_URL}/user/get-one-booking-details/${t}`)}catch(e){console.log(e)}},A=async t=>{try{return await s.get(`${r.BASE_URL}/user/cancel-booking/${t}`)}catch(e){console.log(e)}},U=async()=>{try{return await s.get(`${r.BASE_URL}/user/get-all-organizers`)}catch(t){console.log(t)}},L=async t=>{console.log(t);try{return await s.post(`${r.BASE_URL}/user/add-profile-contact-info`,t)}catch(e){console.log(e)}},R=async t=>{try{return await s.post(`${r.BASE_URL}/user/add-address`,t)}catch(e){console.log(e)}},S=async()=>{try{return await s.get(`${r.BASE_URL}/user/get-address-info`)}catch(t){console.log(t)}},_=async t=>{try{const e={password:t};return await s.post(`${r.BASE_URL}/user/verify-password`,e)}catch(e){console.log(e)}},k=async(t,e,a,o,c)=>{try{return await s.get(`${r.BASE_URL}/user/search`,{params:{searchFor:t,searchText:e,city:a,price:o,category:c}})}catch(n){console.log(n)}},v=async(t,e,a)=>{const o={secondUserId:t,orgName:e,logo:a};try{return await s.post(`${r.BASE_URL}/user/chat`,o)}catch(c){console.log(c)}},f=async()=>{try{return await s.get(`${r.BASE_URL}/user/chat/get-chats`)}catch(t){console.log(t)}},m=async(t,e)=>{const a={chatId:t,content:e};try{return await s.post(`${r.BASE_URL}/user/chat/send-message`,a)}catch(o){console.log(o)}},b=async t=>{try{return await s.get(`${r.BASE_URL}/user/chat/get-chat-messages/${t}`)}catch(e){console.log(e)}},z=async t=>{try{return await s.put(`${r.BASE_URL}/user/update-following/${t}`)}catch(e){console.log(e)}},D=async t=>{try{return await s.get(`${r.BASE_URL}/user/update-following/${t}`)}catch(e){console.log(e)}},C=async t=>{try{return await s.get(`${r.BASE_URL}/user/update-like-list/${t}`)}catch(e){console.log(e)}},F=async t=>{try{return await s.put(`${r.BASE_URL}/user/update-like-list/${t}`)}catch(e){console.log(e)}},O=async()=>{try{return await s.get(`${r.BASE_URL}/user/get-all-liked-events`)}catch(t){console.log(t)}},I=async()=>{try{return await s.get(`${r.BASE_URL}/user/get-all-following-orgs`)}catch(t){console.log(t)}},P=async t=>{try{await s.get(`${r.BASE_URL}/user/update-booking-attended/${t}`)}catch(e){console.log(e)}},x=async t=>{try{return await s.post(`${r.BASE_URL}/user/add-review`,t)}catch(e){console.log(e)}},M=async t=>{try{return await s.get(`${r.BASE_URL}/user/get-reviews/${t}`)}catch(e){console.log(e)}},j=async t=>{const e={newPassword:t};try{return await s.post(`${r.BASE_URL}/user/change-password`,e)}catch(a){console.log(a)}};export{h as A,w as B,f as C,b as D,m as E,M as a,y as b,D as c,$ as d,i as e,j as f,u as g,B as h,A as i,x as j,v as k,d as l,F as m,C as n,O as o,I as p,E as q,P as r,S as s,p as t,z as u,_ as v,L as w,R as x,k as y,U as z};
