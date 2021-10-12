(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[4],{57:function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return l}));var c="https://api.themoviedb.org/3",i="43599aecc4a107996f3426684f8b9f50";function a(){return fetch("".concat(c,"/trending/movie/week?api_key=").concat(i)).then((function(t){return t.json()}))}function r(t){return fetch("".concat(c,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(t){return t.json()}))}function o(t){return fetch("".concat(c,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US")).then((function(t){return t.json()}))}function s(t){return fetch("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US")).then((function(t){return t.json()}))}function l(t){return fetch("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(t){return t.json()}))}},58:function(t,e,n){"use strict";function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,c=new Array(e);n<e;n++)c[n]=t[n];return c}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],c=!0,i=!1,a=void 0;try{for(var r,o=t[Symbol.iterator]();!(c=(r=o.next()).done)&&(n.push(r.value),!e||n.length!==e);c=!0);}catch(s){i=!0,a=s}finally{try{c||null==o.return||o.return()}finally{if(i)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return i}))},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(1),i=n(60),a=n.n(i);function r(t){var e=t.text;return Object(c.jsx)("h1",{className:a.a.title,children:e})}},60:function(t,e,n){t.exports={title:"PageHeading_title__24BCg"}},61:function(t,e,n){t.exports={movieDetailsPage:"Styles_movieDetailsPage__3ScNw",movieDescription:"Styles_movieDescription__Dx8mD",list:"Styles_list__3wRIl",title:"Styles_title__37AVA",text:"Styles_text__3rnGs",btn:"Styles_btn__lMkF9",actorsList:"Styles_actorsList__1eSqS",actorCard:"Styles_actorCard__3rosd"}},68:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var c=n(58),i=n(1),a=n(0),r=n(15),o=n.n(r),s=(n(21),n(3)),l=n(57),u=n(61),d=n.n(u),j=n(59),h=n(16);function f(t){var e=t.movieDetails;return Object(i.jsx)(h.a,{children:Object(i.jsxs)("div",{className:d.a.movieDetailsPage,children:[Object(i.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",alt:e.title,width:"300",height:"250"}),Object(i.jsxs)("ul",{className:d.a.list,children:[Object(i.jsx)("li",{children:Object(i.jsx)("h2",{className:d.a.title,children:e.title})}),Object(i.jsx)("li",{children:Object(i.jsx)("span",{className:d.a.text,children:"Release date: ".concat(e.release_date)})}),Object(i.jsx)("li",{children:Object(i.jsx)("span",{className:d.a.text,children:"Rating: ".concat(10*e.vote_average,"%")})}),Object(i.jsx)("li",{children:Object(i.jsx)("span",{className:d.a.text,children:"Genre: ".concat(e.genres?e.genres.map((function(t){return t.name})).join(", "):"No genre")})}),Object(i.jsx)("li",{children:Object(i.jsx)("span",{className:d.a.text,children:"Overview: ".concat(e.overview)})})]})]})})}var b=n(9);function v(t){var e,n,c,a,r=t.movieId,o=Object(s.h)();return Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(b.c,{to:{pathname:"/movies/".concat(r,"/cast"),state:{from:null!==(e=null===(n=o.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"}},activeClassName:d.a.activeLink,children:"Cast"})}),Object(i.jsx)("li",{children:Object(i.jsx)(b.c,{to:{pathname:"/movies/".concat(r,"/reviews"),state:{from:null!==(c=null===(a=o.state)||void 0===a?void 0:a.from)&&void 0!==c?c:"/"}},activeClassName:d.a.activeLink,children:"Reviews"})})]})}var m=Object(a.lazy)((function(){return n.e(0).then(n.bind(null,65))})),p=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,66))}));function O(){var t=Object(s.i)().movieId,e=Object(a.useState)({}),n=Object(c.a)(e,2),r=n[0],u=n[1],h=Object(s.g)(),b=Object(s.h)();Object(a.useEffect)((function(){t?l.a(t).then((function(t){u(t)})):l.a(state.id).then((function(t){u(t)}))}),[t]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j.a,{text:r.title}),Object(i.jsx)("button",{className:d.a.btn,type:"button",onClick:function(){var t,e;h.push(null!==(t=null===b||void 0===b||null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/")},children:"Go back"}),Object(i.jsx)(f,{movieDetails:r}),Object(i.jsx)(v,{movieId:t}),Object(i.jsx)(a.Suspense,{fallback:Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{className:"Loader",type:"ThreeDots",color:"#00BFFF",height:20,width:100,timeout:3e3})}),children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"/movies/:movieId/cast",children:Object(i.jsx)(m,{movieId:t})}),Object(i.jsx)(s.b,{path:"/movies/:movieId/reviews",children:Object(i.jsx)(p,{movieId:t})})]})})]})}}}]);
//# sourceMappingURL=movie-details.c12279e4.chunk.js.map