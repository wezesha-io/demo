import"./index-DdF8Iyg4.js";import{P as o,a as d,k as e,b as c}from"./common-a1hngvh1.js";const n=new URLSearchParams(location.search).get("id"),t=o.find(a=>a.id===n)??o[0];document.title=`${t.name}: Soko Bora`;const i=document.getElementById("product");i.innerHTML=`<p class="crumbs"><a href="/shop.html">Shop</a> / <a href="/shop.html?cat=${t.cat}">${t.cat}</a> / ${t.name}</p>
  <div class="product">
    <div class="pic">${d(t)}</div>
    <div>
      <h1>${t.name}</h1>
      <p class="price" style="margin:0 0 16px;font-size:28px">${e(t.price)}</p>
      <p class="lede">${t.about}</p>
      ${t.stock?"":'<p><span class="out">Out of stock</span></p>'}
      <div class="actions">
        <button class="btn" id="add" type="button" ${t.stock?"":"disabled"}>Add to cart</button>
        <a class="btn ghost" href="/shop.html">Back to shop</a>
      </div>
      <p id="added" class="ok" hidden role="status"></p>
    </div>
  </div>`;const p=document.getElementById("add");p.onclick=()=>{const a=c(t.name),s=document.getElementById("added");s.hidden=!1,s.innerHTML=`Added. You have ${a} × ${t.name} in your cart. <a href="/shop.html#cart">Go to cart</a>`};
