import{i as u,S as h}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=document.querySelector(".js-search"),l=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";f.addEventListener("submit",d);function d(n){n.preventDefault(),l.innerHTML="",i.style.display="block";const o=n.target.elements.search.value;p(o).then(r=>{i.style.display="none",r.hits.length||u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML=m(r.hits),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>{i.style.display="none",console.log(r)})}function p(n){const o="https://pixabay.com/api/",r="40891115-11d0b88dd3a60afc830d1d27f",s=new URLSearchParams({key:r,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${s}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function m(n){return n.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:a,downloads:c})=>`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
            <img
                class="gallery-image"
                src="${o}"
                alt="${s}"
                width='360'
            />
        </a>
        <h2>Likes</h2>
        <p>${e}</p>
        <h2>Views</h2>
        <p>${t}</p>
        <h2>Comments</h2>
        <p>${a}</p>
        <h2>Downloads</h2>
        <p>${c}</p>
    </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
