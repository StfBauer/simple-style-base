this.ssgCore=this.ssgCore||{},this.ssgCore.templates=this.ssgCore.templates||{},this.ssgCore.templates.addTools=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){return'<div id="ssg-add-tools">\n</div>'},useData:!0}),Handlebars.registerPartial("buttons",Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var helper,alias1=null!=depth0?depth0:container.nullContext||{},alias2=helpers.helperMissing,alias4=container.escapeExpression;return'<button id="ssg-btn'+alias4((helper=null!=(helper=helpers.action||(null!=depth0?depth0.action:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"action",hash:{},data:data}):helper))+'" class="ssg-btn '+alias4((helper=null!=(helper=helpers.class||(null!=depth0?depth0.class:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"class",hash:{},data:data}):helper))+'">'+alias4((helper=null!=(helper=helpers.title||(null!=depth0?depth0.title:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"title",hash:{},data:data}):helper))+"</button>"},useData:!0})),this.ssgCore.templates.itemselector=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var helper,alias1=null!=depth0?depth0:container.nullContext||{},alias2=helpers.helperMissing,alias4=container.escapeExpression;return'<div id="ssg-items" data-item-index="'+alias4((helper=null!=(helper=helpers.index||(null!=depth0?depth0.index:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"index",hash:{},data:data}):helper))+'">\n\t<button class="ssg-btn prev" '+alias4((helper=null!=(helper=helpers.prevEnabled||(null!=depth0?depth0.prevEnabled:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"prevEnabled",hash:{},data:data}):helper))+' >&lt;</button>\n\t<span class="item-title">'+alias4((helper=null!=(helper=helpers.title||(null!=depth0?depth0.title:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"title",hash:{},data:data}):helper))+'</span>\n\t<button class="ssg-btn next" '+alias4((helper=null!=(helper=helpers.nextEnabled||(null!=depth0?depth0.nextEnabled:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"nextEnabled",hash:{},data:data}):helper))+" >&gt;</button>\n</div>"},useData:!0}),this.ssgCore.templates.patternItem=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var stack1,helper,alias1=null!=depth0?depth0:container.nullContext||{},alias2=helpers.helperMissing,alias3="function",alias4=container.escapeExpression;return'<div class="ssg-item" data-cat="'+alias4((helper=null!=(helper=helpers.baseFilter||(null!=depth0?depth0.baseFilter:depth0))?helper:alias2,typeof helper===alias3?helper.call(alias1,{name:"baseFilter",hash:{},data:data}):helper))+'" data-file="'+alias4((helper=null!=(helper=helpers.filename||(null!=depth0?depth0.filename:depth0))?helper:alias2,typeof helper===alias3?helper.call(alias1,{name:"filename",hash:{},data:data}):helper))+'">\n\t<div class="ssg-item-header">\n\t\t<div class="ssg-item-title">'+alias4((helper=null!=(helper=helpers.title||(null!=depth0?depth0.title:depth0))?helper:alias2,typeof helper===alias3?helper.call(alias1,{name:"title",hash:{},data:data}):helper))+'</div>\n\t\t<div class="ssg-item-description">\n\t\t\t<div class="ssg-docs">'+alias4((helper=null!=(helper=helpers.description||(null!=depth0?depth0.description:depth0))?helper:alias2,typeof helper===alias3?helper.call(alias1,{name:"description",hash:{},data:data}):helper))+'</div>\n\t\t\t<b class="ssg-pattern-label">Pattern name:</b>\n\t\t\t<span class="ssg-pattern-name">'+alias4((helper=null!=(helper=helpers.filename||(null!=depth0?depth0.filename:depth0))?helper:alias2,typeof helper===alias3?helper.call(alias1,{name:"filename",hash:{},data:data}):helper))+'</span>\n\t\t</div>\n\t</div>\n\t<div class="sample">'+(null!=(helper=null!=(helper=helpers.sample||(null!=depth0?depth0.sample:depth0))?helper:alias2,stack1=typeof helper===alias3?helper.call(alias1,{name:"sample",hash:{},data:data}):helper)?stack1:"")+"</div>\n\t<pre class=\"ssg-item-code\"><code class='language-markup'>"+alias4((helper=null!=(helper=helpers.sample||(null!=depth0?depth0.sample:depth0))?helper:alias2,typeof helper===alias3?helper.call(alias1,{name:"sample",hash:{},data:data}):helper))+"</code></pre>\n</div>"},useData:!0}),this.ssgCore.templates.test=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){return'<div class="ello"></div>'},useData:!0}),this.ssgCore.templates.vpresizer=Handlebars.template({compiler:[7,">= 4.0.0"],main:function(container,depth0,helpers,partials,data){var helper,alias1=null!=depth0?depth0:container.nullContext||{},alias2=helpers.helperMissing,alias4=container.escapeExpression;return'\n\t<input type="numeric" id="ssg-vp-w" class="ssg-input-s" value="'+alias4((helper=null!=(helper=helpers.width||(null!=depth0?depth0.width:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"width",hash:{},data:data}):helper))+'">\n\t<span id="ssg-vp-by">x</span>\n\t<input type="numeric" id="ssg-vp-h" class="ssg-input-s" value="'+alias4((helper=null!=(helper=helpers.height||(null!=depth0?depth0.height:depth0))?helper:alias2,"function"==typeof helper?helper.call(alias1,{name:"height",hash:{},data:data}):helper))+'">\n\t<button id="ssg-btn-disco" class="ssg-btn">Disco</button>\n'},useData:!0});var ssg;!function(ssg){!function(UI){var win=window,doc=document,ssgCoreTemplates=ssgCore.templates,ssgTemplates=ssg.templates,patternConfig=null,currentSingleItems=[],currentSingleCount=0,viewports=(ssg.UI.State,[320,768,1024,3500]);UI.coreUiElement={btnShowAnnotion:".ssg-button[data-action='ssg-annot']",btnShowCode:".ssg-button[data-action='ssg-code']",btnShowToC:".ssg-button[data-action='ssg-toc']",discoButton:".ssg-button[data-viewport='disco']",filterButton:".ssg-core-filter .ssg-button",patternItem:"div[class^=ssg-item]",tocItem:".ssg-toc-item",viewButton:".ssg-core-view .ssg-button",viewPortButton:".ssg-core-viewport .ssg-button",viewPortTarget:".ssg-patterns-inner",viewPortWidth:"#ssg-in-width",viewToc:".ssg-toc",viewTocInner:".ssg-toc-inner",singleItemNav:"ssg-core-nav",singleItemNavTitle:"#ssg-item-nav-label",singleNavLeft:"ssg-left",singleNavRight:"ssg-right",tocSearchBox:".ssg-toc-searchbox",tocSearchValue:"toc-searchbox",state:{active:"active",hidden:"hidden",show:"show"}},UI.State=function(){var XTRAS=["isolate","code","annotation"],FILTERS=["atoms","molecules","organism","templates","pages","single"],_currentUIState=null,defState={filter:"atoms",screen:window.screen.availWidth,xtras:["annotation"]},_updateState=function(state){var curState=state;if(!function(state){for(var checkSumXtras=0,checkSumFilter=0,checkSumScreen=0,i=state.xtras.length-1;i>0;i--){var curState=state.xtras[i];-1===XTRAS.indexOf(curState)&&(checkSumXtras+=1)}-1===FILTERS.indexOf(state.filter)&&(checkSumFilter+=1);try{parseInt(state.screen.toString(),10)}catch(exception){checkSumScreen+=1}return checkSumFilter+checkSumXtras+checkSumScreen===0}(state))throw"There are some errors with the state";localStorage.setItem("ssg.UI.State",JSON.stringify(curState))};return function(){var sessionState=localStorage.getItem("ssg.UI.State");sessionState?_currentUIState=JSON.parse(sessionState):(localStorage.setItem("ssg.UI.State",JSON.stringify(defState)),_currentUIState=defState)}(),{current:function(){return _currentUIState},update:function(state){_updateState(state)}}}();var Utils;!function(Utils){Utils.requestData=function(method,url){return new Promise(function(resolve,reject){var xhr;(xhr=new XMLHttpRequest).open(method,url),xhr.onload=function(){var curStatus=this.status;curStatus>=200&&curStatus<300?resolve(xhr.response):reject({status:this.status,statusText:xhr.statusText})},xhr.onerror=function(){reject({status:this.status,statusText:xhr.statusText})},xhr.send()})},Utils.changeItemToSinglePage=function(nodes){for(var nodeCount=nodes.length;0!==nodeCount;){var curNode=nodes[nodeCount-=1];curNode.classList.contains("ssg-item")&&(curNode.classList.remove("ssg-item"),curNode.classList.add("ssg-item-single"))}},Utils.hideSingleItemSlider=function(hide){var singleItemSelector=doc.querySelector("."+UI.coreUiElement.singleItemNav);void 0!==singleItemSelector&&null!==singleItemSelector&&(!0===hide?singleItemSelector.classList.add(UI.coreUiElement.state.hidden):singleItemSelector.classList.remove(UI.coreUiElement.state.hidden))}}(Utils=UI.Utils||(UI.Utils={})),UI.Filter={elements:function(filterValue){switch(filterValue){case"atoms":case"molecules":var newState=ssg.UI.State.current();newState.filter=filterValue,ssg.UI.State.update(newState);for(var allElements=doc.querySelectorAll("div[data-cat]"),i=allElements.length-1;i>=0;i--){var curElement=allElements[i];curElement.dataset.cat===filterValue?curElement.classList.remove("hide"):curElement.classList.add("hide")}ssg.UI.Utils.hideSingleItemSlider(!0);break;case"organism":case"templates":case"pages":ssg.UI.Filter.sliderSelection(filterValue)}},sliderSelection:function(filter){var allElements=doc.querySelectorAll("div[data-cat]"),firstItemFound=!1;currentSingleItems=[];for(var i=0;i<allElements.length;i++){var curElement=allElements[i];if(curElement.dataset.cat===filter){var curSingleItem={category:filter,file:curElement.dataset.file,title:curElement.getAttribute("title")};currentSingleItems.push(curSingleItem),!1===firstItemFound?(currentSingleCount=0,firstItemFound=!0,curElement.classList.contains("hide")&&curElement.classList.remove("hide")):curElement.classList.add("hide")}else curElement.classList.add("hide")}ssg.UI.EnableSingleSlider(currentSingleItems,null),currentSingleItems.length>1?ssg.UI.Utils.hideSingleItemSlider(!1):ssg.UI.Utils.hideSingleItemSlider(!0)}},UI.initDisco=function(){var disco=setInterval(function(){var discoButton=document.querySelector(UI.coreUiElement.discoButton+"."+UI.coreUiElement.state.active),viewPortInner=doc.querySelector(UI.coreUiElement.viewPortTarget),viewPortWidth=doc.querySelector(UI.coreUiElement.viewPortWidth);if(null!==discoButton){var curViewPort=Math.floor(Math.random()*(viewports.length-0))+0;viewPortWidth.value=viewPortInner.style.width=viewports[curViewPort].toString()}else clearInterval(disco)},1e3)},UI.Events={changeFilter:function(event){event.preventDefault();for(var allButtons=doc.querySelectorAll(UI.coreUiElement.filterButton),i=allButtons.length-1;i>=0;i--)allButtons[i].classList.contains(UI.coreUiElement.state.active)&&allButtons[i].classList.remove(UI.coreUiElement.state.active);var curButton=event.target,filter=curButton.dataset.filter;if(curButton.classList.add(UI.coreUiElement.state.active),void 0===filter)throw"filter cannot be undefined";UI.Filter.elements(filter);var tocButton=doc.querySelectorAll(UI.coreUiElement.btnShowToC);0!==tocButton.length&&tocButton[0].classList.contains(UI.coreUiElement.state.active)&&tocButton[0].classList.remove("active");var curState=ssg.UI.State.current();return curState.filter=filter,ssg.UI.State.update(curState),!1},changeView:function(event){event.preventDefault();var curButton=event.target;curButton.dataset.filter;curButton.classList.contains(UI.coreUiElement.state.active)?curButton.classList.remove(UI.coreUiElement.state.active):curButton.classList.add(UI.coreUiElement.state.active)},changeViewPort:function(event){event.preventDefault();var vpButton=event.target,vpActiveButton=doc.querySelector(UI.coreUiElement.viewPortButton+"."+UI.coreUiElement.state.active),vpData=vpButton.dataset.viewport,vpTarget=doc.querySelector(UI.coreUiElement.viewPortTarget),widthInput=doc.querySelector(UI.coreUiElement.viewPortWidth),newState=ssg.UI.State.current();if(newState.screen=vpData,ssg.UI.State.update(newState),null!==vpActiveButton&&vpActiveButton.classList.remove(UI.coreUiElement.state.active),vpActiveButton===vpButton?(vpButton.classList.remove(UI.coreUiElement.state.active),vpData="full"):vpButton.classList.add(UI.coreUiElement.state.active),null===(vpActiveButton=doc.querySelector(UI.coreUiElement.viewPortButton+"."+UI.coreUiElement.state.active))&&(vpActiveButton=doc.querySelector(".ssg-button[data-viewport='full']")).classList.add(UI.coreUiElement.state.active),void 0!==typeof vpTarget){switch(vpData){case"full":vpData=vpTarget.style.width=win.innerWidth.toString();break;case"disco":ssg.UI.initDisco();break;default:void 0!==vpData&&null!==vpData&&(vpTarget.style.width=vpData)}if(void 0!==vpData&&null!==vpData){var vpCurSize=parseInt(vpData,10);NaN!==vpCurSize&&vpCurSize<=1024?vpTarget.classList.add("vp-small"):vpTarget.classList.remove("vp-small")}}void 0!==vpData&&"disco"!==vpData&&(vpTarget=doc.querySelector(UI.coreUiElement.viewPortTarget),widthInput.value=vpData)},filterToc:function(event){event.preventDefault();var currentToc=event.target;if(null!==currentToc&&null!==currentToc.parentNode){var filter=currentToc.dataset.filter,filterFolder=currentToc.dataset.folder,filterCat=currentToc.parentNode.attributes.getNamedItem("id").value,tocButton=doc.querySelector(ssg.UI.coreUiElement.btnShowToC);if(tocButton&&tocButton[0].classList.add("active"),filterCat){if("templates"===filterFolder||"organism"===filterFolder||"page"===filterFolder){doc.querySelectorAll("div[data-cat="+filterFolder+"]");var curState=ssg.UI.State.current();curState.filterSelector="."+filter,ssg.UI.State.update(curState),ssg.UI.Filter.sliderSelection(filterFolder)}else ssg.UI.Utils.hideSingleItemSlider(!0);for(var category=filterCat.split("-")[1],filterButtons=document.querySelectorAll(".ssg-core-filter .ssg-button"),i=filterButtons.length-1;i>=0;i--){var curFilterButton=filterButtons[i],curFilterStyle=curFilterButton.classList,curDataSet=curFilterButton.dataset.filter;curFilterStyle.contains("active")&&curFilterStyle.remove("active"),curDataSet===category&&curFilterStyle.add("active")}}var newState=ssg.UI.State.current();if(newState.filter="single",newState.filterSelector="."+filter,ssg.UI.State.update(newState),null!==filter){var allElements=doc.querySelectorAll(UI.coreUiElement.patternItem),tocElement=doc.querySelector(UI.coreUiElement.viewToc);if(null===tocElement)throw"Current toc elment is null";for(i=allElements.length-1;i>=0;i--){var curItem=allElements[i];curItem.dataset.file===filter?curItem.classList.remove("hide"):curItem.classList.add("hide")}tocElement.classList.remove("show"),tocElement.classList.add("hidden")}}},searchToc:function(event){event.preventDefault();var searchBox=doc.getElementById(UI.coreUiElement.tocSearchValue);if(null!==searchBox){for(var searchValue=searchBox.value,resetResult=doc.querySelectorAll(".ssg-toc-item"),j=resetResult.length-1;j>=0;j--)resetResult[j].classList.contains("hide")&&resetResult[j].classList.remove("hide");if(""!==searchValue){var searchResult=doc.querySelectorAll(".ssg-toc-item:not([data-filter*='"+searchValue+"'])");if(null!==searchResult)for(var i=searchResult.length-1;i>=0;i--)searchResult[i].classList.add("hide")}}},showAnnotation:function(event){event.preventDefault(),event.stopImmediatePropagation();var newState=ssg.UI.State.current();if(-1===newState.xtras.indexOf("annotation"))newState.xtras.push("annotation");else{var newXtras=newState.xtras.filter(function(e){return"annotation"!==e});newState.xtras=newXtras}if(ssg.UI.State.update(newState),event.target.classList.contains(UI.coreUiElement.state.active))for(var i=(codeBlocks=doc.querySelectorAll(".ssg-item-description")).length-1;i>=0;i--)codeBlocks[i].classList.add(UI.coreUiElement.state.show);else{var codeBlocks;for(i=(codeBlocks=doc.querySelectorAll(".ssg-item-description")).length-1;i>=0;i--)codeBlocks[i].classList.remove(UI.coreUiElement.state.show)}},showSource:function(event){event.preventDefault(),event.stopImmediatePropagation();var newState=ssg.UI.State.current();if(-1===newState.xtras.indexOf("code"))newState.xtras.push("code");else{var newXtras=newState.xtras.filter(function(e){return"code"!==e});newState.xtras=newXtras}if(ssg.UI.State.update(newState),event.target.classList.contains(UI.coreUiElement.state.active))for(var i=(codeBlocks=doc.querySelectorAll(".ssg-item-code")).length-1;i>=0;i--)codeBlocks[i].classList.add(UI.coreUiElement.state.show);else{var codeBlocks;for(i=(codeBlocks=doc.querySelectorAll(".ssg-item-code")).length-1;i>=0;i--)codeBlocks[i].classList.remove(UI.coreUiElement.state.show)}},showToc:function(event){event.preventDefault();var currentButton=event.target,containerToc=doc.querySelector(UI.coreUiElement.viewToc);null!==currentButton&&currentButton.classList.contains(UI.coreUiElement.state.active)?currentButton.classList.remove(UI.coreUiElement.state.active):currentButton.classList.add(UI.coreUiElement.state.active),null!==containerToc&&(containerToc.classList.contains(UI.coreUiElement.state.show)?(containerToc.classList.add(UI.coreUiElement.state.hidden),containerToc.classList.remove(UI.coreUiElement.state.show)):(containerToc.classList.remove(UI.coreUiElement.state.hidden),containerToc.classList.add(UI.coreUiElement.state.show)))},viewPortResizer:function(event){if(event instanceof KeyboardEvent){if(13===event.keyCode){var innerPattern=doc.querySelector(UI.coreUiElement.viewPortTarget),newWidth=doc.querySelector(UI.coreUiElement.viewPortWidth);innerPattern.style.width=newWidth.value}}else{innerPattern=doc.querySelector(UI.coreUiElement.viewPortTarget),newWidth=doc.querySelector(UI.coreUiElement.viewPortWidth);innerPattern.style.width=newWidth.value}},registerEvents:function(curElements,eventType,handler){for(var i=curElements.length-1;i>=0;i--)curElements[i].addEventListener(eventType,handler)}},UI.Render=function(){for(var container=doc.querySelector(UI.coreUiElement.viewPortTarget),allContent=(doc.querySelector(UI.coreUiElement.viewTocInner),""),parser=new DOMParser,i=patternConfig.patterns.length-1;i>=0;i--){var curPattern=patternConfig.patterns[i],curPatternTitle=curPattern.filename,curTemplate=ssgTemplates[curPatternTitle];if(curPattern.baseFilter=curPattern.filepath.split("/")[0],null!==curPattern){curPattern.sample=void 0!==curTemplate?curTemplate(ssgData):curTemplate;var content=ssgCoreTemplates.patternItem(curPattern);try{allContent=parser.parseFromString(content,"text/html").body.innerHTML+allContent}catch(exception){}}}var allContentDOM=parser.parseFromString(allContent,"text/html"),allTempLates=allContentDOM.querySelectorAll("div[data-cat=templates]"),allPages=allContentDOM.querySelectorAll("div[data-cat=pages]"),allOrganism=allContentDOM.querySelectorAll("div[data-cat=organism]");Utils.changeItemToSinglePage(allTempLates),Utils.changeItemToSinglePage(allPages),Utils.changeItemToSinglePage(allOrganism),container.insertAdjacentHTML("afterbegin",allContentDOM.body.innerHTML),Prism.highlightAll(),function(patternConfig){for(var patterns=patternConfig.patterns.filter(function(object){return void 0===object.deleted}),folder=patternConfig.folder,ssgToc=doc.querySelector(UI.coreUiElement.viewTocInner),i=0;i<folder.length;i++){var baseElement="<ul><li id=ssg-"+folder[i].name+" class=ssg-toc-header>"+folder[i].name+"</li><ul id=ssg-"+folder[i].name+"-items class=ssg-toc-items></ul></ul>";ssgToc.insertAdjacentHTML("beforeend",baseElement)}for(var j=0;j<patterns.length;j++){var folderpath=patterns[j].filepath.split("/")[0],patternTitle='<li class=ssg-toc-item data-filter="'+patterns[j].filename+'"  data-folder="'+folderpath+'" >'+patterns[j].title+"</li>",currentSection=doc.getElementById("ssg-"+folderpath+"-items");null!==currentSection&&currentSection.insertAdjacentHTML("beforeend",patternTitle)}for(var tocItems=doc.querySelectorAll(UI.coreUiElement.tocItem),k=0;k<tocItems.length;k++)tocItems[k].addEventListener("click",UI.Events.filterToc)}(patternConfig),UI.ApplyUIState(ssg.UI.State.current())},UI.ApplyUIState=function(state){!function(state){if(void 0!==state.filter&&"single"!==state.filter){for(var buttons=doc.querySelectorAll(".ssg-button[data-filter]"),i=buttons.length-1;i>=0;i--){var curButton=buttons[i];null!==curButton.dataset&&void 0!==curButton.dataset&&curButton.dataset.filter===state.filter?curButton.classList.contains("active")||curButton.classList.add("active"):curButton.classList.contains("active")&&curButton.classList.remove("active")}var query="div[class^='ssg-item'][data-cat='"+state.filter+"']",invQuery="div[class^='ssg-item']:not([data-cat='"+state.filter+"'])";if("single"===state.filter){var filter=state.filterSelector.substr(1);query="div[data-file='"+filter+"']",invQuery="div:not([data-file='"+filter+"'])",void 0!==(tocButton=doc.querySelectorAll(".ssg-button[data-action='ssg-toc']"))&&1===tocButton.length&&tocButton[0].classList.add("active")}"organism"!==state.filter&&"molecules"!==state.filter&&"templates"!==state.filter||ssg.UI.Filter.sliderSelection(state.filter);var notSelItems=doc.querySelectorAll(invQuery);for(i=notSelItems.length-1;i>=0;i--)notSelItems[i].classList.add("hide");var selItems=doc.querySelectorAll(query);if(1===selItems.length)void 0===(curItem=selItems[0])||null===curItem||void 0===curItem.dataset||null===curItem.dataset||"templates"!==curItem.dataset.cat&&"pages"!==curItem.dataset.cat&&"organism"!==curItem.dataset.cat?ssg.UI.Utils.hideSingleItemSlider(!0):void 0!==curItem.dataset.cat&&null!==curItem.dataset.cat&&ssg.UI.Filter.sliderSelection(curItem.dataset.cat);else for(i=selItems.length-1;i>=0;i--)selItems[i].classList.remove("hide")}else if("single"===state.filter){var tocButton;if(null!==(tocButton=doc.querySelector(UI.coreUiElement.btnShowToC))&&tocButton.classList.add("active"),void 0!==state.filterSelector&&null!==state.filterSelector){var curFilter=state.filterSelector.substr(1),allAMItems=[].slice.call(doc.querySelectorAll("div[class=ssg-item")),allOPTItems=[].slice.call(doc.querySelectorAll("div[class=ssg-item-single")),allItems=allAMItems.concat(allOPTItems);for(i=allItems.length-1;i>=0;i--)if(allItems[i].dataset.file!==curFilter){var curItem;(curItem=allItems[i]).classList.add("hide")}}}}(state),function(state){var viewPortQuery="button[data-viewport='"+state.screen+"']",viewPortActiveButton=doc.querySelector("button.active[data-viewport]"),viewPortButton=doc.querySelector(viewPortQuery),widthSelector=doc.getElementById("ssg-in-width"),contentWidth=doc.querySelector(".ssg-patterns-inner");"full"===state.screen&&(state.screen=window.innerWidth),contentWidth.style.width=state.screen+"px",widthSelector.value=state.screen,void 0!==viewPortButton&&null!==viewPortButton&&(viewPortButton.classList.add("active"),viewPortButton!==viewPortActiveButton&&null!==viewPortActiveButton&&viewPortActiveButton.classList.remove("active"))}(state),function(state){if(-1!==state.xtras.indexOf("annotation")){for(var i=(notes=doc.querySelectorAll(".ssg-item-description")).length-1;i>=0;i--)notes[i].classList.add("show");for(i=(notesButton=doc.querySelectorAll("button[data-action='ssg-annot']")).length-1;i>=0;i--)notesButton[i].classList.add("active")}if(-1!==state.xtras.indexOf("code")){var notes;for(i=(notes=doc.querySelectorAll(".ssg-item-code")).length-1;i>=0;i--)notes[i].classList.add("show");var notesButton;for(i=(notesButton=doc.querySelectorAll("button[data-action='ssg-code']")).length-1;i>=0;i--)notesButton[i].classList.add("active")}}(state)},UI.EnableSingleSlider=function(currentSingleItems,filter){var slideItems=currentSingleItems,currentTitle=doc.querySelector(UI.coreUiElement.singleItemNavTitle);null!==currentTitle&&(currentTitle.textContent=slideItems[0].title);var setCurrentItem=function(index){var curElement=slideItems[index];null!==currentTitle&&(currentTitle.textContent=curElement.title);for(var allElements=doc.querySelectorAll("div[data-cat='"+slideItems[currentSingleCount].category+"']"),j=0;j<allElements.length;j++){var curPatternElement=allElements[j];if(curPatternElement.dataset.file===curElement.file){curPatternElement.classList.remove("hide");var newState=ssg.UI.State.current();newState.filterSelector="."+curPatternElement.dataset.file,ssg.UI.State.update(newState)}else curPatternElement.classList.add("hide")}},slidePatterns=function(event){event.preventDefault(),event.stopPropagation();var currentButton=event.target;null!==currentButton&&(currentButton.dataset.filter===UI.coreUiElement.singleNavLeft&&(currentSingleCount-=1),currentButton.dataset.filter===UI.coreUiElement.singleNavRight&&(currentSingleCount+=1),currentSingleCount>currentSingleItems.length-1&&(currentSingleCount=0),currentSingleCount<0&&(currentSingleCount=currentSingleItems.length-1)),setCurrentItem(currentSingleCount)};if(!(slideItems.length<=1)){for(var slider=doc.querySelectorAll(".ssg-core-nav .ssg-button"),i=0;i<slider.length;i++){var currentButton=slider[i];if(null!==currentButton){var newButton=currentButton.cloneNode(!0);newButton.addEventListener("click",slidePatterns),null!==currentButton.parentNode&&currentButton.parentNode.replaceChild(newButton,currentButton)}}var curState=ssg.UI.State.current();void 0!==curState.filterSelector&&(currentSingleCount=currentSingleItems.findIndex(function(x){return x.file===curState.filterSelector.substring(1)}),setCurrentItem(currentSingleCount))}},UI.ShowSliderCtrl=function(show){var singleSliderControl=document.querySelector("."+UI.coreUiElement.singleItemNav);null!==singleSliderControl&&(show?singleSliderControl.classList.remove("hidden"):singleSliderControl.classList.add("hidden"))},UI.InitEvents=function(){var filterButtons=doc.querySelectorAll(UI.coreUiElement.filterButton),viewButtons=doc.querySelectorAll(UI.coreUiElement.viewButton),viewPortButtons=doc.querySelectorAll(UI.coreUiElement.viewPortButton),viewPortWidth=doc.querySelectorAll(UI.coreUiElement.viewPortWidth),showCode=doc.querySelectorAll(UI.coreUiElement.btnShowCode),showAnnot=doc.querySelectorAll(UI.coreUiElement.btnShowAnnotion),showToc=doc.querySelectorAll(UI.coreUiElement.btnShowToC),allTocItems=doc.querySelectorAll(UI.coreUiElement.tocSearchBox);UI.Events.registerEvents(filterButtons,"click",UI.Events.changeFilter),UI.Events.registerEvents(viewButtons,"click",UI.Events.changeView),UI.Events.registerEvents(viewPortButtons,"click",UI.Events.changeViewPort),UI.Events.registerEvents(viewPortWidth,"blur",UI.Events.viewPortResizer),UI.Events.registerEvents(viewPortWidth,"focusout",UI.Events.viewPortResizer),UI.Events.registerEvents(viewPortWidth,"keypress",UI.Events.viewPortResizer),UI.Events.registerEvents(showCode,"click",UI.Events.showSource),UI.Events.registerEvents(showAnnot,"click",UI.Events.showAnnotation),UI.Events.registerEvents(showToc,"click",UI.Events.showToc),UI.Events.registerEvents(allTocItems,"keyup",UI.Events.searchToc)},UI.Init=function(){Promise.all([ssg.UI.Utils.requestData("GET","/_config/pattern.conf.json")]).then(function(result){try{patternConfig=JSON.parse(result.toString())}catch(error){}}).then(function(){UI.Render(),UI.InitEvents(),UI.ApplyUIState(ssg.UI.State.current()),0!==UI.PostRender.length&&UI.PostRender.forEach(function(element){element()})}).catch(function(error){})},UI.PostRender=[]}(ssg.UI||(ssg.UI={}))}(ssg||(ssg={})),ssg.UI.Init(),Handlebars.registerHelper("description",function(block){var description="",markdownKey=block.data.root.baseFilter+"_"+block.data.root.filename;return void 0!==ssgDoc[markdownKey]?(description=ssgDoc[markdownKey].body,new Handlebars.SafeString(description)):block.data.root.description});
//# sourceMappingURL=ssg.ui.js.map
