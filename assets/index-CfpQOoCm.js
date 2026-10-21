import"./index-DdF8Iyg4.js";import{P as a,a as e,k as t}from"./common-a1hngvh1.js";const c=document.getElementById("board");c.innerHTML=a.map(i=>`<figure>${e(i)}<figcaption>${i.name}</figcaption></figure>`).join("");const r=document.getElementById("featured");r.innerHTML=a.filter(i=>i.stock).slice(0,4).map(i=>`<article class="card">
      <div class="pic">${e(i)}</div>
      <h3>${i.name}</h3>
      <p>${i.blurb}</p>
      <div class="price">${t(i.price)}</div>
      <div class="actions"><a class="btn blue small" href="/product.html?id=${i.id}">View ${i.name}</a></div>
    </article>`).join("");
