(function(e){function o(o){for(var n,a,s=o[0],c=o[1],u=o[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(o);while(d.length)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,o=0;o<i.length;o++){for(var t=i[o],n=!0,a=1;a<t.length;a++){var s=t[a];0!==r[s]&&(n=!1)}n&&(i.splice(o--,1),e=c(c.s=t[0]))}return e}var n={},a={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-42481a69":"91492f3b","chunk-59aa025b":"6d7c4471","chunk-5bc80463":"a5a707b4","chunk-786b3698":"b6889596","chunk-7a86c309":"3e7201e6","chunk-a87ec77c":"152fd523","chunk-c8d0bd16":"f2ce6e87"}[e]+".js"}function c(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var o=[],t={"chunk-42481a69":1,"chunk-59aa025b":1,"chunk-5bc80463":1,"chunk-786b3698":1,"chunk-7a86c309":1,"chunk-a87ec77c":1,"chunk-c8d0bd16":1};a[e]?o.push(a[e]):0!==a[e]&&t[e]&&o.push(a[e]=new Promise((function(o,t){for(var n="css/"+({}[e]||e)+"."+{"chunk-42481a69":"b5221cfd","chunk-59aa025b":"ba4bc3da","chunk-5bc80463":"26a9c89c","chunk-786b3698":"eac7a310","chunk-7a86c309":"9224c5d1","chunk-a87ec77c":"95d9e1e1","chunk-c8d0bd16":"b7cd1e9c"}[e]+".css",r=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return o()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===r)return o()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=o,m.onerror=function(o){var n=o&&o.target&&o.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],m.parentNode.removeChild(m),t(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var n=r[e];if(0!==n)if(n)o.push(n[2]);else{var i=new Promise((function(o,t){n=r[e]=[o,t]}));o.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(o){l.onerror=l.onload=null,clearTimeout(m);var t=r[e];if(0!==t){if(t){var n=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,t[1](d)}r[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(o)},c.m=e,c.c=n,c.d=function(e,o,t){c.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,o){if(1&o&&(e=c(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)c.d(t,n,function(o){return e[o]}.bind(null,n));return t},c.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(o,"a",o),o},c.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=o,u=u.slice();for(var d=0;d<u.length;d++)o(u[d]);var m=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"49f8":function(e,o,t){var n={"./en.json":"edd4","./es.json":"a306"};function a(e){var o=r(e);return t(o)}function r(e){if(!t.o(n,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="49f8"},"53df":function(e,o,t){},"56d7":function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),a={class:"container-layout"},r={class:"header"},i={class:"wrapper"},s={class:"left-aside"},c={class:"right-aside"};function u(e,o,t,u,l,d){var m=Object(n["v"])("toggle"),p=Object(n["v"])("ToggleColor"),h=Object(n["v"])("Multilanguage"),g=Object(n["v"])("CardProfile"),b=Object(n["v"])("Skills"),f=Object(n["v"])("CardExperience"),y=Object(n["v"])("Projects");return Object(n["q"])(),Object(n["f"])("div",a,[Object(n["g"])("div",r,[Object(n["h"])(m,{darkMode:l.darkMode,textMode:l.textMode,onLightMode:d.lightMode},null,8,["darkMode","textMode","onLightMode"]),Object(n["h"])(p,{onChangeColorBlue:d.changeColorBlue,onChangeColorGreen:d.changeColorGreen,onChangeColorPurple:d.changeColorPurple,onChangeColorOrange:d.changeColorOrange,onAudioFocus:d.audioFocus,colorBlue:l.colorBlue,colorGreen:l.colorGreen,colorPurple:l.colorPurple,colorOrange:l.colorOrange},null,8,["onChangeColorBlue","onChangeColorGreen","onChangeColorPurple","onChangeColorOrange","onAudioFocus","colorBlue","colorGreen","colorPurple","colorOrange"]),Object(n["h"])(h,{titleLanguage:l.titleLanguage,onAudioFocus:d.audioFocus},null,8,["titleLanguage","onAudioFocus"])]),Object(n["g"])("div",i,[Object(n["g"])("div",s,[Object(n["h"])(g,{onAudioFocus:d.audioFocus},null,8,["onAudioFocus"]),Object(n["h"])(b),Object(n["h"])(f)]),Object(n["g"])("main",c,[Object(n["h"])(y,{onAudioFocus:d.audioFocus},null,8,["onAudioFocus"])])])])}t("d3b7"),t("3ca3"),t("ddb0");var l={name:"Portafolio",components:{CardProfile:Object(n["i"])((function(){return t.e("chunk-786b3698").then(t.bind(null,"b37e"))})),Toggle:Object(n["i"])((function(){return t.e("chunk-c8d0bd16").then(t.bind(null,"ae48"))})),ToggleColor:Object(n["i"])((function(){return t.e("chunk-42481a69").then(t.bind(null,"f48c"))})),CardExperience:Object(n["i"])((function(){return t.e("chunk-a87ec77c").then(t.bind(null,"c317"))})),Skills:Object(n["i"])((function(){return t.e("chunk-5bc80463").then(t.bind(null,"9086"))})),Projects:Object(n["i"])((function(){return t.e("chunk-7a86c309").then(t.bind(null,"8cca"))})),Multilanguage:Object(n["i"])((function(){return t.e("chunk-59aa025b").then(t.bind(null,"3c3f"))}))},data:function(){return{darkMode:!0,textMode:"",titleLanguage:"Inglés",colorBlue:!1,colorGreen:!1,colorPurple:!1,colorOrange:!1,srcFocusAudio:t("757d"),focusAudio:new Audio}},methods:{lightMode:function(){this.audioFocus(),this.darkMode?(document.body.classList.add("lightMode"),document.body.classList.remove("dark"),window.screen.width>=700?this.textMode="Dark Mode":this.textMode=""):(document.body.classList.add("dark"),document.body.classList.remove("lightMode"),window.screen.width>=700?this.textMode="Ligth Blue":this.textMode=""),this.darkMode=!this.darkMode},changeColorBlue:function(){this.audioFocus(),document.body.classList.add("color-item--blue"),document.body.classList.remove("color-item--green"),document.body.classList.remove("color-item--purple"),document.body.classList.remove("color-item--orange")},changeColorGreen:function(){this.audioFocus(),document.body.classList.add("color-item--green"),document.body.classList.remove("color-item--blue"),document.body.classList.remove("color-item--purple"),document.body.classList.remove("color-item--orange")},changeColorPurple:function(){this.audioFocus(),document.body.classList.add("color-item--purple"),document.body.classList.remove("color-item--blue"),document.body.classList.remove("color-item--green"),document.body.classList.remove("color-item--orange")},changeColorOrange:function(){this.audioFocus(),document.body.classList.add("color-item--orange"),document.body.classList.remove("color-item--blue"),document.body.classList.remove("color-item--green"),document.body.classList.remove("color-item--purple")},audioFocus:function(){this.focusAudio.src=this.srcFocusAudio,this.focusAudio.play()},changelanguague:function(){this.$i18n.locale},watchScreenWidth:function(){window.screen.width>=700?this.textMode="Ligth Mode":this.textMode=""}},mounted:function(){document.body.classList.add("dark"),this.watchScreenWidth()}},d=(t("87c9"),t("6b0d")),m=t.n(d);const p=m()(l,[["render",u]]);var h=p,g=(t("90c2"),t("159b"),t("ac1f"),t("466d"),t("1276"),t("47e2"));function b(){var e=t("49f8"),o={};return e.keys().forEach((function(t){var n=t.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var a=n[1];o[a]=e(t).default}})),o}var f=Object(g["a"])({locale:window.navigator.language.split("-")[0],fallbackLocale:"en",messages:b()});Object(n["d"])(h).use(f).mount("#app")},"757d":function(e,o,t){e.exports=t.p+"media/audio-click.85e1067d.mp3"},"87c9":function(e,o,t){"use strict";t("53df")},"90c2":function(e,o,t){},a306:function(e,o,t){"use strict";t.r(o),o["default"]={CardProfile:{description:e=>{const{normalize:o}=e;return o(["Apasionada de la programación, responsable, con facilidad para trabajar en equipo y con ganas de aprendizaje constante."])}},Hobbies:{"title-cook":e=>{const{normalize:o}=e;return o(["Cocinar"])},"title-gaming":e=>{const{normalize:o}=e;return o(["VideoJuegos"])},"title-film":e=>{const{normalize:o}=e;return o(["Películas y series"])},"description-cook":e=>{const{normalize:o}=e;return o(["Me gusta cocinar todo tipo de platos, pero mi debilidad son los platos salados."])},"description-gaming":e=>{const{normalize:o}=e;return o(["Mi primer juego instalado en una PC fue The sims, desde ahí supe que sería el principio de todo. "])},"description-film":e=>{const{normalize:o}=e;return o(["Consumidora de casi todos los sitios de servicio en Streaming."])}},CardExperience:{"date-jalon":e=>{const{normalize:o}=e;return o(["Diciembre 2016 - 2017"])},"date-campana":e=>{const{normalize:o}=e;return o(["Julio 2019"])},"date-txoco":e=>{const{normalize:o}=e;return o(["Julio - Agosto 2019"])},"job-jalon":e=>{const{normalize:o}=e;return o(["Limpiadora"])},"job-campana":e=>{const{normalize:o}=e;return o(["Pinche"])},"job-txoco":e=>{const{normalize:o}=e;return o(["Pinche"])}},Projects:{"text-pokemonPage":e=>{const{normalize:o}=e;return o(["Proyecto que simula una consola portátil. El juego consiste en que se te muestra un pokemon oculto y se te dan cuatro opciones, tienes que averiguar de qué pokemon se trata. Una vez que eliges el pokemon se te muestra la imagen. Empiezas con 3 vidas, si fallas 3 veces pierdes. Si aciertas sumas puntos, cuando acabaes las tres vidas puedes añadir tu nombre en la lista de clasificación. Consume el API PokéApi."])},"text-questionme":e=>{const{normalize:o}=e;return o(["Divertida app  a la que le preguntas y te responde 'Sí', 'No' o 'Quizás'. Usa la API yesno.wtf. ¡Importante! para que te responda, debes terminar la pregunta con el símbolo '?'"])},"text-journal":e=>{const{normalize:o}=e;return o(["App de publicaciones, tiene una autentificación para acceder a ella. Se puede añadir, actualizar y borrar publicación, así como añadirle una imagen. "])},"text-blacklist":e=>{const{normalize:o}=e;return o(["Famoso juego de cartas, también llamado veintiuno. Es un juego propio de los casinos con una o más barajas inglesas de 52 cartas sin los comodines, que consiste en sumar un valor lo más próximo a 21 pero sin pasarse."])},"text-timedashboard":e=>{const{normalize:o}=e;return o(["Realización de un Tarjeta de registro de tiempo. Se usó un archivo JSON para obtener los datos de las horas según la frecuencia."])},"text-todo":e=>{const{normalize:o}=e;return o(["App basada en el diseño de un figma de Kiran Kumar, a excepción de algunos cambios o añadiduras que he hecho. Es totalmente funcional: registros, login, restablecer contraseña, cambiar foto de perfil, añadir nuevas tareas."])},"text-pokeball":e=>{const{normalize:o}=e;return o(["Es un sencillo proyecto que pone en práctica las habilidades con css. Es una pokeball con un transition infinito."])},"text-gameboy-eoi":e=>{const{normalize:o}=e;return o(["Sencillo proyecto desarrollado en el curso de la EOI donde creamos a partir de una imagen una copia en css"])},"text-culturayocio":e=>{const{normalize:o}=e;return o(["Proyecto que tiene como finalidad crear y ver los eventos que hay en Málaga. Está pensando para poner en práctica petición con axios, usar la CRUD alojada la base de dato en firebase y la autenticación de usuario.Se añadió un calendario y es funcional tanto si eres usuario registrado o entras como anónimo, en este último caso estará guardado en localstorage."])},"text-taperia":e=>{const{normalize:o}=e;return o(["App de una taperia ficticia en el centro de Málaga. Esta incluye formulario para contactar con la empresa así como un apartado para reservar mesa exterior y interior. La vista reserva no utiliza ninguna libreria. Los datos son alojados en firebase."])},"text-pontefuerte":e=>{const{normalize:o}=e;return o(["App sencilla ecommerce de productos deportivos."])},"text-abajatemperatura":e=>{const{normalize:o}=e;return o(["App de un restaurante ficticio. Esta incluye apartado para reservar mesa. La reservas no utiliza ninguna libreria. Los datos son alojados en firebase."])},"text-yummytours":e=>{const{normalize:o}=e;return o(["App de reservas de rutas turísticas. Se ha simulado la reserva. Esta web es ficticia, pero se estudia que en un futuro pueda darle uso, añadiendo trabajadores en una base de datos y las rutas que ellos llevan."])}}}},edd4:function(e,o,t){"use strict";t.r(o),o["default"]={CardProfile:{description:e=>{const{normalize:o}=e;return o(["Passionate about programming, responsible, easy to work in a team and eager to learn constantly."])}},Hobbies:{"title-cook":e=>{const{normalize:o}=e;return o(["Cooking"])},"title-gaming":e=>{const{normalize:o}=e;return o(["Gaming"])},"title-film":e=>{const{normalize:o}=e;return o(["Film/Series"])},"description-cook":e=>{const{normalize:o}=e;return o(["I like to cook all kinds of dishes, but my weakness is savory dishes."])},"description-gaming":e=>{const{normalize:o}=e;return o(["My first game installed on a PC was The sims, from there I knew it would be the beginning of everything."])},"description-film":e=>{const{normalize:o}=e;return o(["Consumer of almost all Streaming service sites."])}},CardExperience:{"date-jalon":e=>{const{normalize:o}=e;return o(["December 2016 - 2017"])},"date-campana":e=>{const{normalize:o}=e;return o(["July 2019"])},"date-txoco":e=>{const{normalize:o}=e;return o(["July - August 2019"])},"job-jalon":e=>{const{normalize:o}=e;return o(["Cleaner"])},"job-campana":e=>{const{normalize:o}=e;return o(["kitchen assistant"])},"job-txoco":e=>{const{normalize:o}=e;return o(["kitchen assistant"])}},Projects:{"text-pokemonPage":e=>{const{normalize:o}=e;return o(["Project that simulates a portable console. The game consists of showing you a hidden pokemon and giving you four options, you have to figure out which pokemon it is. Once you choose the pokemon you are shown the image. You start with 3 lives, if you miss 3 times you lose. If you guess right you get points, when you finish the three lives you can add your name in the ranking list. It consumes the PokéApi API."])},"text-questionme":e=>{const{normalize:o}=e;return o(["Funny app to which you ask a question and it answers 'Yes', 'No' or 'Maybe'. It uses the API yesno.wtf. Important! to get an answer, you must end the question with the symbol '?'"])},"text-journal":e=>{const{normalize:o}=e;return o(["App for publications, it has an authentication to access it. You can add, update and delete publication, as well as add an image to it."])},"text-blacklist":e=>{const{normalize:o}=e;return o(["Famous card game, also called twenty-one. It is a casino game with one or more English decks of 52 cards without jokers, which consists of adding a value as close to 21 as possible without going over."])},"text-timedashboard":e=>{const{normalize:o}=e;return o(["Realization of a timecard. A JSON file was used to obtain the data of the hours according to frequency."])},"text-todo":e=>{const{normalize:o}=e;return o(["App based on the design of a Kiran Kumar figma, except for some changes or additions I have made. It is fully functional: registrations, login, reset password, change profile picture, add new tasks."])},"text-pokeball":e=>{const{normalize:o}=e;return o(["This is a simple project that puts css skills into practice. It's a pokeball with an infinite transition.."])},"text-gameboy-eoi":e=>{const{normalize:o}=e;return o(["Simple project developed in the EOI course where we create a css copy from an image"])},"text-culturayocio":e=>{const{normalize:o}=e;return o(["Project that aims to create and see the events that take place in Malaga. It is thinking to put into practice request with axios, use the CRUD hosted the database in firebase and user authentication. A calendar was added and it is functional whether you are a registered user or you enter as anonymous, in the latter case it will be saved in localstorage."])},"text-taperia":e=>{const{normalize:o}=e;return o(["App of a fictitious taperia in the center of Malaga. This includes a form to contact the company as well as a section to reserve an outdoor and indoor table. The reservation view does not use any library. The data is hosted in firebase."])},"text-pontefuerte":e=>{const{normalize:o}=e;return o(["Simple ecommerce app for sporting goods."])},"text-abajatemperatura":e=>{const{normalize:o}=e;return o(["App of a fictitious restaurant. It includes a section to reserve a table. The reservation does not use any library. The data is hosted in firebase."])},"text-yummytours":e=>{const{normalize:o}=e;return o(["Tourist route booking app. The reservation has been simulated. This web is fictitious, but it is being studied that in the future it can be used, adding workers in a database and the routes that they take."])}}}}});
//# sourceMappingURL=app.0d1ac65d.js.map