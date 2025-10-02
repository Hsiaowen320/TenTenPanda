import"./main-BZkCYUk3.js";document.addEventListener("DOMContentLoaded",()=>{const g=document.getElementById("favorites-list"),l=document.getElementById("favorites-pagination"),t=6,E=[{id:"classic",name:"經典甜甜",price:65,img:"/TenTenPanda/assets/%E7%B6%93%E5%85%B8%E7%94%9C%E7%94%9C-Cs5Etp7x.png",padding:"p-0"},{id:"berry",name:"莓果甜甜",price:65,img:"/TenTenPanda/assets/%E8%8E%93%E6%9E%9C%E7%94%9C%E7%94%9C-Ifbh7mOU.png",padding:"p-0"},{id:"sesame",name:"芝麻甜甜",price:65,img:"/TenTenPanda/assets/%E8%8A%9D%E9%BA%BB%E7%94%9C%E7%94%9C-DoL5nBCi.png",padding:"p-0"},{id:"matcha",name:"抹茶甜甜",price:65,img:"/TenTenPanda/assets/%E6%8A%B9%E8%8C%B6%E7%94%9C%E7%94%9C-JW-VG4UK.png",padding:"p-0"},{id:"caramelcocoa",name:"焦糖可可甜甜",price:65,img:"/TenTenPanda/assets/%E7%84%A6%E7%B3%96%E5%8F%AF%E5%8F%AF%E7%94%9C%E7%94%9C-0uhqrfN7.png",padding:"p-0"},{id:"creamlemon",name:"生乳檸檬甜甜",price:65,img:"/TenTenPanda/assets/%E7%94%9F%E4%B9%B3%E6%AA%B8%E6%AA%AC%E7%94%9C%E7%94%9C-lF70gClV.png",padding:"p-0"},{id:"starberry",name:"星塵草莓",price:95,img:"/TenTenPanda/assets/%E6%98%9F%E5%A1%B5%E8%8D%89%E8%8E%93%EF%BC%88%E5%85%89%E6%9A%88%EF%BC%89-Du1Aj3hz.png",padding:"p-18"},{id:"snowberry",name:"白雪綿霜莓",price:95,img:"/TenTenPanda/assets/%E7%99%BD%E9%9B%AA%E7%B6%BF%E9%9C%9C%E8%8E%93%EF%BC%88%E5%85%89%E6%9A%88%EF%BC%89-B5DDcb2-.png",padding:"p-18"},{id:"berrycoco",name:"莓果可可",price:95,img:"/TenTenPanda/assets/%E8%8E%93%E6%9E%9C%E5%8F%AF%E5%8F%AF%EF%BC%88%E5%85%89%E6%9A%88%EF%BC%89-Cb11tIyi.png",padding:"p-18"},{id:"SnowberryMont",name:"雪莓蒙布朗",price:95,img:"/TenTenPanda/assets/%E9%9B%AA%E8%8E%93%E8%92%99%E5%B8%83%E6%9C%97%EF%BC%88%E5%85%89%E6%9A%88%EF%BC%89-B6R64g0i.png",padding:"p-18"},{id:"wineberry",name:"熱紅酒莓果",price:95,img:"/TenTenPanda/assets/%E7%86%B1%E7%B4%85%E9%85%92%E8%8E%93%E6%9E%9C%EF%BC%88%E5%85%89%E6%9A%88%EF%BC%89-70SzG_lH.png",padding:"p-18"},{id:"frostBerry",name:"莓果夾心",price:80,img:"/TenTenPanda/assets/%E8%8E%93%E6%9E%9C%E5%A4%BE%E5%BF%83%EF%BC%88%E5%85%89%E6%9A%88%EF%BC%89-BXFX6iwp.png",padding:"p-25"},{id:"giftbox_Six",name:"經典甜甜-禮盒-6入",price:360,img:"/TenTenPanda/assets/%E7%B6%93%E5%85%B8%E7%94%9C%E7%94%9C-%E7%A6%AE%E7%9B%92-6%E5%85%A5-%E5%8E%BB%E8%83%8C-DLwmNRmF.png",padding:"p-25"},{id:"giftbox_twelve",name:"經典甜甜-禮盒-12入",price:750,img:"/TenTenPanda/assets/%E7%B6%93%E5%85%B8%E7%94%9C%E7%94%9C-%E7%A6%AE%E7%9B%92-12%E5%85%A5-%E5%8E%BB%E8%83%8C-BSzD1Buh.png",padding:"p-25"},{id:"comp_giftbox_Six",name:"綜合甜甜-禮盒-6入",price:360,img:"/TenTenPanda/assets/%E7%B6%9C%E5%90%88%E7%94%9C%E7%94%9C-%E7%A6%AE%E7%9B%92-6%E5%85%A5-%E5%8E%BB%E8%83%8C-BYC-VGdj.png",padding:"p-25"},{id:"comp_giftbox_twelve",name:"綜合甜甜-禮盒-12入",price:750,img:"/TenTenPanda/assets/%E7%B6%9C%E5%90%88%E7%94%9C%E7%94%9C-%E7%A6%AE%E7%9B%92-12%E5%85%A5-%E5%8E%BB%E8%83%8C-BE_PNVOF.png",padding:"p-25"}].filter(d=>localStorage.getItem(d.id)==="true");let e=1;const p=Math.ceil(E.length/t);function c(d){g.innerHTML="";const o=(d-1)*t,a=o+t;E.slice(o,a).forEach(n=>{const r=document.createElement("div");r.classList.add("col-12","col-lg-6","mb-8","favorite-item"),r.dataset.id=n.id,r.innerHTML=`
            <div class="mb-lg-8 product" data-id="${n.id}">
                <a href="./item_details-${n.id}.html" class="position-relative d-inline-block">
                    <div class="img-box ${n.padding}">
                        <img src="${n.img}" alt="${n.name}" class="img-fluid">
                    </div>
                    <button
                        type="button"
                        class="favorite-btn active position-absolute top-0 end-0 fs-3 fs-lg-1"
                        data-bs-toggle="modal"
                        data-bs-target="#favoriteModal"
                    >
                        <i class="bi bi-heart empty"></i>
                        <i class="bi bi-heart-fill full"></i>
                    </button>
                </a>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h2 class="fs-6 mb-2">${n.name}</h2>
                        <p class="fs-6">$ ${n.price}</p>
                    </div>
                    <button
                        type="button"
                        class="producList-cart-btn br-999"
                        data-bs-toggle="modal"
                        data-bs-target="#cartModal">
                        <i class="bi bi-cart2 fs-3 fs-lg-2"></i>
                    </button>
                </div>
            </div>
        </div>
        `,g.appendChild(r)}),m()}function m(){l.querySelectorAll(".page-number").forEach(a=>a.remove());for(let a=1;a<=p;a++){const s=document.createElement("li");s.classList.add("px-3","page-number"),a===e&&s.classList.add("text-primary-60"),s.textContent=a,s.dataset.page=a;const n=document.getElementById("next-page");l.insertBefore(s,n),s.addEventListener("click",()=>{e=a,c(e)})}const d=document.getElementById("prev-page"),o=document.getElementById("next-page");d.style.pointerEvents=e===1?"none":"auto",o.style.pointerEvents=e===p?"none":"auto",d.onclick=()=>{e>1&&(e--,c(e))},o.onclick=()=>{e<p&&(e++,c(e))}}c(e)});document.addEventListener("DOMContentLoaded",()=>{document.getElementById("favorites-list").addEventListener("click",t=>{const i=t.target.closest(".favorite-btn");if(!i)return;t.preventDefault(),t.stopPropagation();const e=i.closest(".favorite-item").dataset.id;i.classList.toggle("active"),i.classList.contains("active")?(localStorage.setItem(e,"true"),i.setAttribute("data-bs-target","#cancelFavoriteModal"),favoriteModal.show()):(localStorage.removeItem(e),i.setAttribute("data-bs-target","#favoriteModal"))}),document.querySelectorAll(".favorite-btn").forEach(t=>{const E=t.closest(".product").dataset.id;localStorage.getItem(E)==="true"&&(t.classList.add("active"),t.setAttribute("data-bs-target","#cancelFavoriteModal"))})});
