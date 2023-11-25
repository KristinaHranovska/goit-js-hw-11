import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h=document.querySelector(".js-search"),a=document.querySelector(".gallery");h.addEventListener("submit",f);function f(n){n.preventDefault(),a.innerHTML="";const r=n.target.elements.search.value;m(r).then(o=>{o.hits.length||c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.innerHTML=p(o.hits),new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),gallery.refresh()}).catch(o=>console.log(o))}function m(n){const r="https://pixabay.com/api/",o="40891115-11d0b88dd3a60afc830d1d27f",s=new URLSearchParams({key:o,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${s}`).then(e=>{if(console.log(`${r}?${s}`),!e.ok)throw new Error(e.statusText);return e.json()})}function p(n){return n.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:i,downloads:l})=>`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
            <img
                class="gallery-image"
                src="${r}"
                alt="${s}"
                width='360'
            />
        </a>
        <h2>Likes</h2>
        <p>${e}</p>
        <h2>Views</h2>
        <p>${t}</p>
        <h2>Comments</h2>
        <p>${i}</p>
        <h2>Downloads</h2>
        <p>${l}</p>
    </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
