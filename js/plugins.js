function checkContentHeight(r){var n=$(window).height(),t=n/2-r.height()/2;return t}function checkContentWidth(r){var n=$(window).width(),t=n/2-r.width()/2;return t}function getDeviceVer(){var r,n=navigator.userAgent;return n.match(/(iPad|iPhone|iPod touch)/)?(userOS="iOS",r=n.indexOf("OS ")):n.match(/Android/)?(userOS="Android",r=n.indexOf("Android ")):userOS="unknown","iOS"===userOS&&r>-1?userOSver=n.substr(r+3,3).replace("_","."):"Android"===userOS&&r>-1?userOSver=n.substr(r+8,3):userOSver="unknown",Number(userOSver)}function shuffle(r){for(var n,t,e=r.length;0!==e;)t=Math.floor(Math.random()*e),e-=1,n=r[e],r[e]=r[t],r[t]=n;return r}function randomBoolean(){return Math.random()<.5}function getDistance(r,n,t,e){var o=Math.sqrt(Math.pow(r-t,2)+Math.pow(n-e,2));return o}function sortOnObject(r,n,t){return t?r.sort(function(r,t){var e=r[n],o=t[n];return e==o?0:e<o?1:-1}):r.sort(function(r,t){var e=r[n],o=t[n];return e==o?0:e>o?1:-1}),r}function randomIntFromInterval(r,n){return Math.floor(Math.random()*(n-r+1)+r)}function addCommas(r){r+="",x=r.split("."),x1=x[0],x2=x.length>1?"."+x[1]:"";for(var n=/(\d+)(\d{3})/;n.test(x1);)x1=x1.replace(n,"$1,$2");return x1+x2}function swapArray(r,n,t){var e=r[n];r[n]=r[t],r[t]=e}function getCenterPosition(r,n,t,e){var o={x:0,y:0};return o.x=(r+t)/2,o.y=(n+e)/2,o}function isEven(r){return r%2==0}(function(){for(var r,n=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],e=t.length,o=window.console=window.console||{};e--;)r=t[e],o[r]||(o[r]=n)})();