window.addEventListener("DOMContentLoaded",e=>{function n(){const e=document.body.querySelector("#mainNav");e&&(0===window.scrollY?e.classList.remove("navbar-shrink"):e.classList.add("navbar-shrink"))}n(),document.addEventListener("scroll",n);var t=document.body.querySelector("#mainNav");t&&new bootstrap.ScrollSpy(document.body,{target:"#mainNav",offset:74});const o=document.body.querySelector(".navbar-toggler"),a=[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));a.map(function(e){e.addEventListener("click",()=>{"none"!==window.getComputedStyle(o).display&&o.click()})})});const countDownDate=new Date("Jun 4, 2022 10:00:00").getTime();window.onload=function e(){var n=(new Date).getTime(),n=countDownDate-n,t=Math.floor(n/864e5),o=Math.floor(n%864e5/36e5),a=Math.floor(n%36e5/6e4),i=Math.floor(n%6e4/1e3);document.getElementById("countdownText").innerHTML=t+"d "+o+"h "+a+"m "+i+"s ",n<0&&(clearInterval(x),document.getElementById("countdownText").innerHTML="OPEN!"),setTimeout(e,1e3)}(),function(e,n){function t(e,n){return typeof e===n}function i(e){var n,t=w.className,o=v._config.classPrefix||"";h&&(t=t.baseVal),v._config.enableJSClass&&(n=new RegExp("(^|\\s)"+o+"no-js(\\s|$)"),t=t.replace(n,"$1"+o+"js$2")),v._config.enableClasses&&(t+=" "+o+e.join(" "+o),h?w.className.baseVal=t:w.className=t)}function A(e,n){if("object"==typeof e)for(var t in e)s(e,t)&&A(t,e[t]);else{var o=(e=e.toLowerCase()).split("."),a=v[o[0]];if(void 0!==(a=2==o.length?a[o[1]]:a))return v;n="function"==typeof n?n():n,1==o.length?v[o[0]]=n:(!v[o[0]]||v[o[0]]instanceof Boolean||(v[o[0]]=new Boolean(v[o[0]])),v[o[0]][o[1]]=n),i([(n&&0!=n?"":"no-")+o.join("-")]),v._trigger(e,n)}return v}var s,o,a,r,l,c,m,d,u,f=[],p=[],g={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){p.push({name:e,fn:n,options:t})},addAsyncTest:function(e){p.push({name:null,fn:e})}},v=((v=function(){}).prototype=g,new v),w=n.documentElement,h="svg"===w.nodeName.toLowerCase();for(d in s=void 0===(u={}.hasOwnProperty)||void 0===u.call?function(e,n){return n in e&&void 0===e.constructor.prototype[n]}:function(e,n){return u.call(e,n)},g._l={},g.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),v.hasOwnProperty(e)&&setTimeout(function(){v._trigger(e,v[e])},0)},g._trigger=function(e,n){var t;this._l[e]&&(t=this._l[e],setTimeout(function(){for(var e=0;e<t.length;e++)(0,t[e])(n)},0),delete this._l[e])},v._q.push(function(){g.addTest=A}),v.addAsyncTest(function(){function t(t,e,o){function n(e){var n=!(!e||"load"!==e.type)&&1==a.width;A(t,"webp"===t&&n?new Boolean(n):n),o&&o(e)}var a=new Image;a.onerror=n,a.onload=n,a.src=e}var o=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],e=o.shift();t(e.name,e.uri,function(e){if(e&&"load"===e.type)for(var n=0;n<o.length;n++)t(o[n].name,o[n].uri)})}),p)if(p.hasOwnProperty(d)){if(o=[],(a=p[d]).name&&(o.push(a.name.toLowerCase()),a.options&&a.options.aliases&&a.options.aliases.length))for(r=0;r<a.options.aliases.length;r++)o.push(a.options.aliases[r].toLowerCase());for(l=t(a.fn,"function")?a.fn():a.fn,c=0;c<o.length;c++)1===(m=o[c].split(".")).length?v[m[0]]=l:(!v[m[0]]||v[m[0]]instanceof Boolean||(v[m[0]]=new Boolean(v[m[0]])),v[m[0]][m[1]]=l),f.push((l?"":"no-")+m.join("-"))}i(f),delete g.addTest,delete g.addAsyncTest;for(var T=0;T<v._q.length;T++)v._q[T]();e.Modernizr=v}(window,document);let openTimeSelected=0,manualHover=0;function openingTimesHook(){openingTimes(),manualHover<3&&(manualHover+=1)}function openingTimes(){openTimeSelected=0==openTimeSelected?(Scrambler({target:"#timesTitle",text:"FOOD TIMES",random:[200,500],speed:50}),Scrambler({target:"#timesTime1",text:"12:00-16:30",random:[200,500],speed:50}),Scrambler({target:"#timesTime2",text:"12:00-20:30",random:[200,500],speed:50}),Scrambler({target:"#timesTime3",text:"11:45-17:30",random:[200,500],speed:50}),1):(Scrambler({target:"#timesTitle",text:"OPENING TIMES",random:[200,500],speed:50}),Scrambler({target:"#timesTime1",text:"11:30-18:00",random:[200,500],speed:50}),Scrambler({target:"#timesTime2",text:"11:30-LATE",random:[200,500],speed:50}),Scrambler({target:"#timesTime3",text:"11:30-19:00",random:[200,500],speed:50}),0)}function openingTimesLoop(){0==manualHover?openingTimes():--manualHover}setInterval(openingTimesLoop,5e3);