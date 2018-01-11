var ssg;!function(e){!function(e){var t=window,s=document,a=ssgCore.templates,r=ssg.templates,i=null,l=[],n=0,o=(ssg.UI.State,[320,768,1024,3500]),c=".ssg-core-filter .ssg-button",d=".ssg-core-view .ssg-button",v=".ssg-core-viewport .ssg-button",u=".ssg-patterns-inner",g="#ssg-in-width",f=".ssg-toc",h=".ssg-toc-inner",S=".ssg-button[data-viewport='disco']",m=".ssg-button[data-action='ssg-code']",y=".ssg-button[data-action='ssg-annot']",p=".ssg-button[data-action='ssg-toc']",L=".ssg-toc-item",I=".ssg-toc-searchbox",q="toc-searchbox",w="div[class^=ssg-item]",U="#ssg-item-nav-label",A="ssg-core-nav",E="ssg-left",b="ssg-right",x={active:"active",hidden:"hidden",show:"show"};e.State=function(){var e="ssg.UI.State",t=["isolate","code","annotation"],s=["atoms","molecules","organism","templates","pages","single"],a=null,r={filter:"atoms",xtras:["annotation"],screen:window.screen.availWidth},i=function(a){var r=a;if(!function(e){for(var a=0,r=0,i=0,l=e.xtras.length-1;l>0;l--){var n=e.xtras[l];-1===t.indexOf(n)&&(a+=1)}-1===s.indexOf(e.filter)&&(r+=1);try{parseInt(e.screen.toString())}catch(e){console.log("ERROR:"+e),i+=1}return r+a+i===0}(a))throw"There are some errors with the state";localStorage.setItem(e,JSON.stringify(r))};return function(){var t=localStorage.getItem(e);t?a=JSON.parse(t):(localStorage.setItem(e,JSON.stringify(r)),a=r)}(),{current:function(){return a},update:function(e){i(e)}}}();var T;(P=T=e.Utils||(e.Utils={})).requestData=function(e,t){return new Promise(function(s,a){var r;(r=new XMLHttpRequest).open(e,t),r.onload=function(){this.status>=200&&this.status<300?s(r.response):a({status:this.status,statusText:r.statusText})},r.onerror=function(){a({status:this.status,statusText:r.statusText})},r.send()})},P.changeItemToSinglePage=function(e){for(var t=e.length;0!==t;){var s=e[t-=1];s.classList.contains("ssg-item")&&(s.classList.remove("ssg-item"),s.classList.add("ssg-item-single"))}},P.hideSingleItemSlider=function(e){var t=s.querySelector("."+A);void 0!==t&&null!==t&&(!0===e?t.classList.add(x.hidden):t.classList.remove(x.hidden))};var P;e.Filter={sliderSelection:function(e){var t=s.querySelectorAll("div[data-cat]"),a=!1;l=[];for(var r=0;r<t.length;r++){var i=t[r];if(i.dataset.cat===e){var o={title:i.getAttribute("title"),file:i.dataset.file,category:e};l.push(o),!1===a?(n=0,a=!0,i.classList.contains("hide")&&i.classList.remove("hide")):i.classList.add("hide")}else i.classList.add("hide")}ssg.UI.EnableSingleSlider(l),l.length>1?ssg.UI.Utils.hideSingleItemSlider(!1):ssg.UI.Utils.hideSingleItemSlider(!0)},elements:function(e){switch(e){case"atoms":case"molecules":var t=ssg.UI.State.current();t.filter=e,ssg.UI.State.update(t);for(var a=s.querySelectorAll("div[data-cat]"),r=a.length-1;r>=0;r--){var i=a[r];i.dataset.cat===e?i.classList.remove("hide"):i.classList.add("hide")}ssg.UI.Utils.hideSingleItemSlider(!0);break;case"organism":case"templates":case"pages":ssg.UI.Filter.sliderSelection(e)}}},e.initDisco=function(){var e=setInterval(function(){var t=document.querySelector(S+"."+x.active),a=s.querySelector(u),r=s.querySelector(g);if(null!==t){var i=Math.floor(Math.random()*(o.length-0))+0;r.value=a.style.width=o[i].toString()}else clearInterval(e)},1e3)},e.Events={changeFilter:function(t){t.preventDefault();for(var a=s.querySelectorAll(c),r=a.length-1;r>=0;r--)a[r].classList.contains(x.active)&&a[r].classList.remove(x.active);var i=t.target,l=i.dataset.filter;i.classList.add(x.active),e.Filter.elements(l);var n=s.querySelectorAll(p);0!==n.length&&n[0].classList.contains(x.active)&&n[0].classList.remove("active");var o=ssg.UI.State.current();return o.filter=l,ssg.UI.State.update(o),!1},changeView:function(e){e.preventDefault();var t=e.target;t.dataset.filter;t.classList.contains(x.active)?t.classList.remove(x.active):t.classList.add(x.active)},changeViewPort:function(e){e.preventDefault();var a=e.target,r=s.querySelector(v+"."+x.active),i=a.dataset.viewport,l=s.querySelector(u),n=s.querySelector(g),o=ssg.UI.State.current();if(o.screen=i,ssg.UI.State.update(o),null!==r&&r.classList.remove(x.active),r===a?(a.classList.remove(x.active),i="full"):a.classList.add(x.active),null===(r=s.querySelector(v+"."+x.active))&&(r=s.querySelector(".ssg-button[data-viewport='full']")).classList.add(x.active),void 0!==typeof l)switch(i){case"full":i=l.style.width=t.innerWidth.toString();break;case"disco":ssg.UI.initDisco();break;default:l.style.width=i}"disco"!==i&&(l=s.querySelector(u),n.value=i)},viewPortResizer:function(e){if(e instanceof KeyboardEvent){if(13==e.keyCode){var t=s.querySelector(u),a=s.querySelector(g);t.style.width=a.value}}else{t=s.querySelector(u),a=s.querySelector(g);t.style.width=a.value}},showSource:function(e){e.preventDefault(),e.stopImmediatePropagation();var t=ssg.UI.State.current();if(-1===t.xtras.indexOf("code"))t.xtras.push("code");else{var a=t.xtras.filter(function(e){return"code"!==e});t.xtras=a}if(ssg.UI.State.update(t),e.target.classList.contains(x.active))for(var r=(i=s.querySelectorAll(".ssg-item-code")).length-1;r>=0;r--)i[r].classList.add(x.show);else{var i;for(r=(i=s.querySelectorAll(".ssg-item-code")).length-1;r>=0;r--)i[r].classList.remove(x.show)}},showAnnotation:function(e){e.preventDefault(),e.stopImmediatePropagation();var t=ssg.UI.State.current();if(-1===t.xtras.indexOf("annotation"))t.xtras.push("annotation");else{var a=t.xtras.filter(function(e){return"annotation"!==e});t.xtras=a}if(ssg.UI.State.update(t),e.target.classList.contains(x.active))for(var r=(i=s.querySelectorAll(".ssg-item-description")).length-1;r>=0;r--)i[r].classList.add(x.show);else{var i;for(r=(i=s.querySelectorAll(".ssg-item-description")).length-1;r>=0;r--)i[r].classList.remove(x.show)}},showToc:function(e){e.preventDefault();var t=e.target,a=s.querySelector(f);null!==t&&t.classList.contains(x.active)?t.classList.remove(x.active):t.classList.add(x.active),null!==a&&(a.classList.contains(x.show)?(a.classList.add(x.hidden),a.classList.remove(x.show)):(a.classList.remove(x.hidden),a.classList.add(x.show)))},filterToc:function(e){e.preventDefault();var t=e.target,a=t.dataset.filter,r=t.dataset.folder,i=t.parentNode.attributes.getNamedItem("id").value,l=s.querySelector(ssg.UI.btnShowToC);if(l&&l[0].classList.add("active"),i){if("templates"===r||"organism"===r||"page"===r){s.querySelectorAll("div[data-cat="+r+"]");var n=ssg.UI.State.current();n.filterSelector="."+a,ssg.UI.State.update(n),ssg.UI.Filter.sliderSelection(r)}else ssg.UI.Utils.hideSingleItemSlider(!0);for(var o=i.split("-")[1],c=document.querySelectorAll(".ssg-core-filter .ssg-button"),d=c.length-1;d>=0;d--){var v=c[d],u=v.classList,g=v.dataset.filter;u.contains("active")&&u.remove("active"),g===o&&u.add("active")}}var h=ssg.UI.State.current();if(h.filter="single",h.filterSelector="."+a,ssg.UI.State.update(h),null!==a){var S=s.querySelectorAll(w),m=s.querySelector(f);for(d=S.length-1;d>=0;d--){var y=S[d];y.dataset.file===a?y.classList.remove("hide"):y.classList.add("hide")}m.classList.remove("show"),m.classList.add("hidden")}},searchToc:function(e){e.preventDefault();var t=s.getElementById(q);if(null!==t){for(var a=t.value,r=s.querySelectorAll(".ssg-toc-item"),i=r.length-1;i>=0;i--)r[i].classList.contains("hide")&&r[i].classList.remove("hide");if(""!==a){var l=s.querySelectorAll(".ssg-toc-item:not([data-filter*='"+a+"'])");if(null!==l)for(var n=l.length-1;n>=0;n--)l[n].classList.add("hide")}}},registerEvents:function(e,t,s){for(var a=e.length-1;a>=0;a--)e[a].addEventListener(t,s)}},e.Render=function(){for(var t=s.querySelector(u),l=(s.querySelector(h),""),n=new DOMParser,o=i.patterns.length-1;o>=0;o--){var c=i.patterns[o],d=c.filename,v=r[d];if(c.baseFilter=c.filepath.split("/")[0],null!==c){c.sample=void 0!==v?v(ssgData):v,console.log("Current Tempalte:",d,v);var g=a.patternItem(c);try{l=n.parseFromString(g,"text/html").body.innerHTML+l}catch(e){console.log(e)}}}var f=n.parseFromString(l,"text/html"),S=f.querySelectorAll("div[data-cat=templates]"),m=f.querySelectorAll("div[data-cat=pages]"),y=f.querySelectorAll("div[data-cat=organism]");T.changeItemToSinglePage(S),T.changeItemToSinglePage(m),T.changeItemToSinglePage(y),t.insertAdjacentHTML("afterbegin",f.body.innerHTML),Prism.highlightAll(),function(t){for(var a=t.patterns.filter(function(e){return void 0===e.deleted}),r=t.folder,i=s.querySelector(h),l=0;l<r.length;l++){var n="<ul><li id=ssg-"+r[l].name+" class=ssg-toc-header>"+r[l].name+"</li><ul id=ssg-"+r[l].name+"-items class=ssg-toc-items></ul></ul>";i.insertAdjacentHTML("beforeend",n)}for(var o=0;o<a.length;o++){var c=a[o].filepath.split("/")[0],d='<li class=ssg-toc-item data-filter="'+a[o].filename+'"  data-folder="'+c+'" >'+a[o].title+"</li>",v=s.getElementById("ssg-"+c+"-items");null!==v&&v.insertAdjacentHTML("beforeend",d)}for(var u=s.querySelectorAll(L),g=0;g<u.length;g++)u[g].addEventListener("click",e.Events.filterToc)}(i),e.ApplyUIState(ssg.UI.State.current())},e.ApplyUIState=function(e){!function(e){if(void 0!==e.filter&&"single"!==e.filter){for(var t=s.querySelectorAll(".ssg-button[data-filter]"),a=t.length-1;a>=0;a--){var r=t[a];null!==r.dataset&&void 0!==r.dataset&&r.dataset.filter===e.filter?r.classList.contains("active")||r.classList.add("active"):r.classList.contains("active")&&r.classList.remove("active")}var i="div[class^='ssg-item'][data-cat='"+e.filter+"']",l="div[class^='ssg-item']:not([data-cat='"+e.filter+"'])";if("single"===e.filter){var n=e.filterSelector.substr(1);i="div[data-file='"+n+"']",l="div:not([data-file='"+n+"'])",void 0!==(d=s.querySelectorAll(".ssg-button[data-action='ssg-toc']"))&&1===d.length&&d[0].classList.add("active")}"organism"!==e.filter&&"molecules"!==e.filter&&"templates"!==e.filter||ssg.UI.Filter.sliderSelection(e.filter);var o=s.querySelectorAll(l);for(a=o.length-1;a>=0;a--)o[a].classList.add("hide");var c=s.querySelectorAll(i);if(1===c.length)void 0===(h=c[0]).dataset.cat||null===h.dataset.cat||"templates"!==h.dataset.cat&&"pages"!==h.dataset.cat&&"organism"!==h.dataset.cat?ssg.UI.Utils.hideSingleItemSlider(!0):ssg.UI.Filter.sliderSelection(h.dataset.cat);else for(a=c.length-1;a>=0;a--)c[a].classList.remove("hide")}else if("single"===e.filter){var d;if((d=s.querySelector(p)).classList.add("active"),void 0!==e.filterSelector&&null!==e.filterSelector){var v=e.filterSelector.substr(1),u=[].slice.call(s.querySelectorAll("div[class=ssg-item")),g=[].slice.call(s.querySelectorAll("div[class=ssg-item-single")),f=u.concat(g);for(a=f.length-1;a>=0;a--)if(f[a].dataset.file!==v){var h;(h=f[a]).classList.add("hide")}}}}(e),function(e){var t="button[data-viewport='"+e.screen+"']",a=s.querySelector("button.active[data-viewport]"),r=s.querySelector(t),i=s.getElementById("ssg-in-width"),l=s.querySelector(".ssg-patterns-inner");"full"===e.screen&&(e.screen=window.innerWidth),l.style.width=e.screen+"px",i.value=e.screen,void 0!==r&&null!==r&&(r.classList.add("active"),r!==a&&a.classList.remove("active"))}(e),function(e){if(-1!==e.xtras.indexOf("annotation")){for(var t=(a=s.querySelectorAll(".ssg-item-description")).length-1;t>=0;t--)a[t].classList.add("show");for(t=(r=s.querySelectorAll("button[data-action='ssg-annot']")).length-1;t>=0;t--)r[t].classList.add("active")}if(-1!==e.xtras.indexOf("code")){var a;for(t=(a=s.querySelectorAll(".ssg-item-code")).length-1;t>=0;t--)a[t].classList.add("show");var r;for(t=(r=s.querySelectorAll("button[data-action='ssg-code']")).length-1;t>=0;t--)r[t].classList.add("active")}}(e)},e.EnableSingleSlider=function(e,t){var a=e,r=function(e){var t=a[e];l.textContent=t.title;for(var r=s.querySelectorAll("div[data-cat='"+a[n].category+"']"),i=0;i<r.length;i++){var o=r[i];if(o.dataset.file===t.file){o.classList.remove("hide");var c=ssg.UI.State.current();c.filterSelector="."+o.dataset.file,ssg.UI.State.update(c)}else o.classList.add("hide")}},i=function(t){t.preventDefault(),t.stopPropagation();var s=t.target;null!==s&&(s.dataset.filter===E&&(n-=1),s.dataset.filter===b&&(n+=1),n>e.length-1&&(n=0),n<0&&(n=e.length-1)),r(n)};if(!(a.length<=1)){var l=s.querySelector(U);l.textContent=a[0].title;for(var o=s.querySelectorAll(".ssg-core-nav .ssg-button"),c=0;c<o.length;c++){var d=o[c],v=d.cloneNode(!0);v.addEventListener("click",i),d.parentNode.replaceChild(v,d)}var u=ssg.UI.State.current();void 0!==u.filterSelector&&(n=e.findIndex(function(e){return e.file===u.filterSelector.substring(1)}),r(n))}},e.ShowSliderCtrl=function(e){var t=document.querySelector("."+A);e?t.classList.remove("hidden"):t.classList.add("hidden")},e.InitEvents=function(){var t=s.querySelectorAll(c),a=s.querySelectorAll(d),r=s.querySelectorAll(v),i=s.querySelectorAll(g),l=s.querySelectorAll(m),n=s.querySelectorAll(y),o=s.querySelectorAll(p),u=s.querySelectorAll(I);e.Events.registerEvents(t,"click",e.Events.changeFilter),e.Events.registerEvents(a,"click",e.Events.changeView),e.Events.registerEvents(r,"click",e.Events.changeViewPort),e.Events.registerEvents(i,"blur",e.Events.viewPortResizer),e.Events.registerEvents(i,"focusout",e.Events.viewPortResizer),e.Events.registerEvents(i,"keypress",e.Events.viewPortResizer),e.Events.registerEvents(l,"click",e.Events.showSource),e.Events.registerEvents(n,"click",e.Events.showAnnotation),e.Events.registerEvents(o,"click",e.Events.showToc),e.Events.registerEvents(u,"keyup",e.Events.searchToc)},e.Init=function(){Promise.all([ssg.UI.Utils.requestData("GET","/_config/pattern.conf.json")]).then(function(e){try{i=JSON.parse(e.toString())}catch(e){console.log(e)}}).then(function(){e.Render(),e.InitEvents(),e.ApplyUIState(ssg.UI.State.current()),0!==e.PostRender.length&&e.PostRender.forEach(function(e){e()})}).catch(function(e){console.log(e)})},e.PostRender=[]}(e.UI||(e.UI={}))}(ssg||(ssg={})),ssg.UI.Init();
//# sourceMappingURL=ssg-min.js.map
