(function(e){function o(o){for(var n,r,c=o[0],s=o[1],u=o[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(o);while(d.length)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,o=0;o<i.length;o++){for(var t=i[o],n=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(n=!1)}n&&(i.splice(o--,1),e=s(s.s=t[0]))}return e}var n={},r={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-05d53e80":"e6fd0278","chunk-34464711":"e20d9ba6","chunk-4fb0a7c3":"d5dca53f","chunk-51476892":"682086e5","chunk-5ea23a96":"69dfe538","chunk-85a280fa":"d509ff10","chunk-c1a87aec":"e33fd4d2","chunk-f6ef9ee8":"dc5b2efd"}[e]+".js"}function s(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var o=[],t={"chunk-05d53e80":1,"chunk-34464711":1,"chunk-4fb0a7c3":1,"chunk-51476892":1,"chunk-5ea23a96":1,"chunk-85a280fa":1,"chunk-c1a87aec":1,"chunk-f6ef9ee8":1};r[e]?o.push(r[e]):0!==r[e]&&t[e]&&o.push(r[e]=new Promise((function(o,t){for(var n="css/"+({}[e]||e)+"."+{"chunk-05d53e80":"b5221cfd","chunk-34464711":"6da01551","chunk-4fb0a7c3":"0d80cee8","chunk-51476892":"90073249","chunk-5ea23a96":"9adc8b1f","chunk-85a280fa":"fd2510c6","chunk-c1a87aec":"98c4cedc","chunk-f6ef9ee8":"30e2273e"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===a))return o()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===a)return o()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=o,m.onerror=function(o){var n=o&&o.target&&o.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],m.parentNode.removeChild(m),t(i)},m.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)o.push(n[2]);else{var i=new Promise((function(o,t){n=a[e]=[o,t]}));o.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(o){l.onerror=l.onload=null,clearTimeout(m);var t=a[e];if(0!==t){if(t){var n=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,t[1](d)}a[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(o)},s.m=e,s.c=n,s.d=function(e,o,t){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)s.d(t,n,function(o){return e[o]}.bind(null,n));return t},s.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=o,u=u.slice();for(var d=0;d<u.length;d++)o(u[d]);var m=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"49f8":function(e,o,t){var n={"./en.json":"edd4","./es.json":"a306"};function r(e){var o=a(e);return t(o)}function a(e){if(!t.o(n,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id="49f8"},"56d7":function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),r={class:"container-layaout"},a={class:"header"},i={class:"wrapper"},c={class:"left-aside"},s={class:"main"},u={class:"right-aside"};function l(e,o,t,l,d,m){var h=Object(n["v"])("toggle"),f=Object(n["v"])("ToggleColor"),p=Object(n["v"])("Multilanguage"),g=Object(n["v"])("CardProfile"),b=Object(n["v"])("Hobbies"),v=Object(n["v"])("Skills"),y=Object(n["v"])("Projects"),k=Object(n["v"])("CardExperience");return Object(n["q"])(),Object(n["e"])("div",r,[Object(n["f"])("div",a,[Object(n["h"])(h,{darkMode:d.darkMode,textMode:d.textMode,onLightMode:m.lightMode},null,8,["darkMode","textMode","onLightMode"]),Object(n["h"])(f,{onChangeColorBlue:m.changeColorBlue,onChangeColorGreen:m.changeColorGreen,onChangeColorPurple:m.changeColorPurple,onChangeColorOrange:m.changeColorOrange,onAudioFocus:m.audioFocus,colorBlue:d.colorBlue,colorGreen:d.colorGreen,colorPurple:d.colorPurple,colorOrange:d.colorOrange},null,8,["onChangeColorBlue","onChangeColorGreen","onChangeColorPurple","onChangeColorOrange","onAudioFocus","colorBlue","colorGreen","colorPurple","colorOrange"]),Object(n["h"])(p,{titleLanguage:d.titleLanguage,onAudioFocus:m.audioFocus},null,8,["titleLanguage","onAudioFocus"])]),Object(n["f"])("div",i,[Object(n["f"])("div",c,[Object(n["h"])(g,{onAudioFocus:m.audioFocus},null,8,["onAudioFocus"]),Object(n["h"])(b)]),Object(n["f"])("main",s,[Object(n["h"])(v),Object(n["h"])(y,{onAudioFocus:m.audioFocus,totalProjects:d.totalProjects,onCounterProjects:m.counterProjects},null,8,["onAudioFocus","totalProjects","onCounterProjects"])]),Object(n["f"])("div",u,[Object(n["h"])(k)])])])}t("d3b7"),t("3ca3"),t("ddb0");var d={name:"Portafolio",components:{CardProfile:Object(n["i"])((function(){return t.e("chunk-4fb0a7c3").then(t.bind(null,"b37e"))})),Toggle:Object(n["i"])((function(){return t.e("chunk-51476892").then(t.bind(null,"ae48"))})),ToggleColor:Object(n["i"])((function(){return t.e("chunk-05d53e80").then(t.bind(null,"f48c"))})),CardExperience:Object(n["i"])((function(){return t.e("chunk-34464711").then(t.bind(null,"c317"))})),Skills:Object(n["i"])((function(){return t.e("chunk-85a280fa").then(t.bind(null,"9086"))})),Projects:Object(n["i"])((function(){return t.e("chunk-c1a87aec").then(t.bind(null,"8cca"))})),Hobbies:Object(n["i"])((function(){return t.e("chunk-5ea23a96").then(t.bind(null,"bced"))})),Multilanguage:Object(n["i"])((function(){return t.e("chunk-f6ef9ee8").then(t.bind(null,"3c3f"))}))},data:function(){return{darkMode:!0,textMode:"",titleLanguage:"Inglés",colorBlue:!1,colorGreen:!1,colorPurple:!1,colorOrange:!1,srcFocusAudio:t("757d"),focusAudio:new Audio,totalProjects:0}},methods:{lightMode:function(){this.audioFocus(),this.darkMode?(document.body.classList.add("lightMode"),document.body.classList.remove("dark"),window.screen.width>=700?this.textMode="Dark Mode":this.textMode=""):(document.body.classList.add("dark"),document.body.classList.remove("lightMode"),window.screen.width>=700?this.textMode="Ligth Blue":this.textMode=""),this.darkMode=!this.darkMode},changeColorBlue:function(){this.audioFocus(),document.body.classList.add("color-item--blue"),document.body.classList.remove("color-item--green"),document.body.classList.remove("color-item--purple"),document.body.classList.remove("color-item--orange")},changeColorGreen:function(){this.audioFocus(),document.body.classList.add("color-item--green"),document.body.classList.remove("color-item--blue"),document.body.classList.remove("color-item--purple"),document.body.classList.remove("color-item--orange")},changeColorPurple:function(){this.audioFocus(),document.body.classList.add("color-item--purple"),document.body.classList.remove("color-item--blue"),document.body.classList.remove("color-item--green"),document.body.classList.remove("color-item--orange")},changeColorOrange:function(){this.audioFocus(),document.body.classList.add("color-item--orange"),document.body.classList.remove("color-item--blue"),document.body.classList.remove("color-item--green"),document.body.classList.remove("color-item--purple")},audioFocus:function(){this.focusAudio.src=this.srcFocusAudio,this.focusAudio.play()},changelanguague:function(){this.$i18n.locale},counterProjects:function(){this.totalProjects=document.querySelectorAll(".project_info").length,console.log(this.totalProjects)},watchScreenWidth:function(){window.screen.width>=700?this.textMode="Ligth Mode":this.textMode=""}},mounted:function(){document.body.classList.add("dark"),this.watchScreenWidth()}},m=(t("ed4f"),t("d959")),h=t.n(m);const f=h()(d,[["render",l]]);var p=f,g=(t("90c2"),t("159b"),t("ac1f"),t("466d"),t("1276"),t("47e2"));function b(){var e=t("49f8"),o={};return e.keys().forEach((function(t){var n=t.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var r=n[1];o[r]=e(t).default}})),o}var v=Object(g["a"])({locale:window.navigator.language.split("-")[0],fallbackLocale:"en",messages:b()});Object(n["d"])(p).use(v).mount("#app")},"757d":function(e,o,t){e.exports=t.p+"media/audio-click.85e1067d.mp3"},"90c2":function(e,o,t){},a306:function(e,o,t){"use strict";t.r(o),o["default"]={CardProfile:{description:e=>{const{normalize:o}=e;return o(["Apasionada de la programación, responsable, con facilidad para trabajar en equipo y con ganas de aprendizaje constante."])}},Hobbies:{"title-cook":e=>{const{normalize:o}=e;return o(["Cocinar"])},"title-gaming":e=>{const{normalize:o}=e;return o(["VideoJuegos"])},"title-film":e=>{const{normalize:o}=e;return o(["Películas y series"])},"description-cook":e=>{const{normalize:o}=e;return o(["Me gusta cocinar todo tipo de platos, pero mi debilidad son los platos salados."])},"description-gaming":e=>{const{normalize:o}=e;return o(["Mi primer juego instalado en una PC fue The sims, desde ahí supe que sería el principio de todo. "])},"description-film":e=>{const{normalize:o}=e;return o(["Consumidora de casi todos los sitios de servicio en Streaming."])}},CardExperience:{"date-jalon":e=>{const{normalize:o}=e;return o(["Diciembre 2016 - 2017"])},"date-campana":e=>{const{normalize:o}=e;return o(["Julio 2019"])},"date-txoco":e=>{const{normalize:o}=e;return o(["Julio - Agosto 2019"])},"job-jalon":e=>{const{normalize:o}=e;return o(["Limpiadora"])},"job-campana":e=>{const{normalize:o}=e;return o(["Pinche"])},"job-txoco":e=>{const{normalize:o}=e;return o(["Pinche"])}},Projects:{"text-pokemonPage":e=>{const{normalize:o}=e;return o(["Proyecto que simula una consola portátil. El juego consiste en que se te muestra un pokemon oculto y se te dan cuatro opciones, tienes que averiguar de qué pokemon se trata. Una vez que eliges el pokemon se te muestra la imagen. Empiezas con 3 vidas, si fallas 3 veces pierdes. Si aciertas sumas puntos, cuando acabaes las tres vidas puedes añadir tu nombre en la lista de clasificación. Consume el API PokéApi."])},"text-questionme":e=>{const{normalize:o}=e;return o(["Divertida app  a la que le preguntas y te responde 'Sí', 'No' o 'Quizás'. Usa la API yesno.wtf. ¡Importante! para que te responda, debes terminar la pregunta con el símbolo '?'"])},"text-journal":e=>{const{normalize:o}=e;return o(["App de publicaciones, tiene una autentificación para acceder a ella. Se puede añadir, actualizar y borrar publicación, así como añadirle una imagen. "])},"text-blacklist":e=>{const{normalize:o}=e;return o(["Famoso juego de cartas, también llamado veintiuno. Es un juego propio de los casinos con una o más barajas inglesas de 52 cartas sin los comodines, que consiste en sumar un valor lo más próximo a 21 pero sin pasarse."])}}}},ea89:function(e,o,t){},ed4f:function(e,o,t){"use strict";t("ea89")},edd4:function(e,o,t){"use strict";t.r(o),o["default"]={CardProfile:{description:e=>{const{normalize:o}=e;return o(["Passionate about programming, responsible, easy to work in a team and eager to learn constantly."])}},Hobbies:{"title-cook":e=>{const{normalize:o}=e;return o(["Cooking"])},"title-gaming":e=>{const{normalize:o}=e;return o(["Gaming"])},"title-film":e=>{const{normalize:o}=e;return o(["Film/Series"])},"description-cook":e=>{const{normalize:o}=e;return o(["I like to cook all kinds of dishes, but my weakness is savory dishes."])},"description-gaming":e=>{const{normalize:o}=e;return o(["My first game installed on a PC was The sims, from there I knew it would be the beginning of everything."])},"description-film":e=>{const{normalize:o}=e;return o(["Consumer of almost all Streaming service sites."])}},CardExperience:{"date-jalon":e=>{const{normalize:o}=e;return o(["December 2016 - 2017"])},"date-campana":e=>{const{normalize:o}=e;return o(["July 2019"])},"date-txoco":e=>{const{normalize:o}=e;return o(["July - August 2019"])},"job-jalon":e=>{const{normalize:o}=e;return o(["Cleaner"])},"job-campana":e=>{const{normalize:o}=e;return o(["kitchen assistant"])},"job-txoco":e=>{const{normalize:o}=e;return o(["kitchen assistant"])}},Projects:{"text-pokemonPage":e=>{const{normalize:o}=e;return o(["Project that simulates a portable console. The game consists of showing you a hidden pokemon and giving you four options, you have to figure out which pokemon it is. Once you choose the pokemon you are shown the image. You start with 3 lives, if you miss 3 times you lose. If you guess right you get points, when you finish the three lives you can add your name in the ranking list. It consumes the PokéApi API."])},"text-questionme":e=>{const{normalize:o}=e;return o(["Funny app to which you ask a question and it answers 'Yes', 'No' or 'Maybe'. It uses the API yesno.wtf. Important! to get an answer, you must end the question with the symbol '?'"])},"text-journal":e=>{const{normalize:o}=e;return o(["App for publications, it has an authentication to access it. You can add, update and delete publication, as well as add an image to it."])},"text-blacklist":e=>{const{normalize:o}=e;return o(["Famous card game, also called twenty-one. It is a casino game with one or more English decks of 52 cards without jokers, which consists of adding a value as close to 21 as possible without going over."])}}}}});
//# sourceMappingURL=app.477eb797.js.map