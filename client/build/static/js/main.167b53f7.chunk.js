(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/towel1.bba28523.jpg"},44:function(e,t,a){e.exports=a(74)},49:function(e,t,a){},50:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),s=a.n(c),r=a(100),o=a(101),i=a(23);a(49);var m=function(){return l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("h1",null,"Animal Lovers' Blog"))};a(50);var u=function(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-dark"})},p=a(93),E=a(102),h=a(95),d=a(97),g=a(98),b=a(96),v=a(99),f=Object(p.a)(function(e){return{root:{flexGrow:20},menuButton:{marginRight:e.spacing(20),marginLeft:e.spacing(54)},title:{flexGrow:20}}});function w(){var e=f();return l.a.createElement("div",{className:e.root},l.a.createElement(E.a,{position:"static"},l.a.createElement(h.a,null,l.a.createElement(b.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"}),l.a.createElement(d.a,{variant:"h6",className:"navbar-brand",href:"/"},"Home Page"),l.a.createElement(g.a,{variant:"h6",color:"inherit",className:"navbar-brand",to:"client\\AmithBio\\AmithBio.html"},"Creators Bio"),l.a.createElement(v.a,{to:"/NewPost"}," New Blog Post Page! "),l.a.createElement(g.a,{variant:"h6",color:"inherit"},"Login"))))}var y=a(13),k=a.n(y);var j=function(){var e=Object(n.useState)({blogPosts:[]}),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){k.a.get("/allPost").then(function(e){console.log("this is our data",e.data),c({blogPosts:e.data})})},[]),console.log("this is our state, ",a),l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(v.a,{to:"/store"},"Store "),l.a.createElement(u,null),l.a.createElement(m,null),a.blogPosts.map(function(e){return console.log("Lopping",e),l.a.createElement("div",{class:"post"},l.a.createElement("h1",null,e.title),l.a.createElement("img",{src:e.pic}),l.a.createElement("div",{class:"deletebtn"},l.a.createElement("button",{onClick:function(){var t;t=e._id,console.log("you got clicked",t),k.a.delete("/delete/"+t).then(function(e){console.log("we got this back from the backend",e)})}},"delete")))}))},B=a(25),N=a(36);function O(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function P(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function S(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var I=function(){var e=Object(n.useState)({title:"",blog:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),o=(r[0],r[1],function(e){console.log("we are typing",e.target.name),c(Object(N.a)({},a,Object(B.a)({},e.target.name,e.target.value)))});return console.log("this is our state!",a),l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(v.a,{to:"/"},"Go Home "),l.a.createElement(m,null),l.a.createElement(O,null,l.a.createElement(P,null,l.a.createElement(S,{size:"md-12"},l.a.createElement("form",null,l.a.createElement(O,null)))),l.a.createElement(P,null,l.a.createElement("div",{class:"textspot"},l.a.createElement("input",{name:"title",onChange:o}),l.a.createElement("textarea",{style:{display:"block"},name:"blog",onChange:o}),l.a.createElement("div",{class:"savebtn"},l.a.createElement("button",{onClick:function(){console.log("you got clicked",a),k.a.get("https://api.giphy.com/v1/gifs/search?api_key=gkXrF127UWQRI7iw1V1p3i0c2ypkBsHS&q="+a.title+"&limit=25&offset=0&rating=g&lang=en").then(function(e){console.log("dtaa",e.data.data[2].images.original.url),a.pic=e.data.data[2].images.original.url,k.a.post("/save",a).then(function(e){console.log("we got this back from the backend",e)})})}},"save"))))))},x=a(37),C=a.n(x);var U=function(){return l.a.createElement("div",null,l.a.createElement("header",{class:"main-header"},l.a.createElement("nav",{class:"main-nav nav"},l.a.createElement("ul",null,l.a.createElement(v.a,{to:"/"},"Go Home "),l.a.createElement(v.a,{to:"/store"},"Store "))),l.a.createElement("h1",{class:"band-name band-name-large"},"Das Products")),l.a.createElement("section",{class:"container content-section"},l.a.createElement("h2",{class:"section-header"},"Towels"),l.a.createElement("div",{class:"shop-items"},l.a.createElement("div",{class:"shop-item"},l.a.createElement("span",{class:"shop-item-title"},"Style 1"),l.a.createElement("img",{class:"shop-item-image",src:C.a}),l.a.createElement("div",{class:"shop-item-details"},l.a.createElement("span",{class:"shop-item-price"},"$9.99"),l.a.createElement("button",{class:"btn btn-primary shop-item-button",type:"button"},"BUY"))),l.a.createElement("div",{class:"shop-item"},l.a.createElement("span",{class:"shop-item-title"},"Style 2"),l.a.createElement("img",{class:"shop-item-image",src:"Images/towel2.jpeg"}),l.a.createElement("div",{class:"shop-item-details"},l.a.createElement("span",{class:"shop-item-price"},"$12.99"),l.a.createElement("button",{class:"btn btn-primary shop-item-button",type:"button"},"BUY"))),l.a.createElement("div",{class:"shop-item"},l.a.createElement("span",{class:"shop-item-title"},"Style 3"),l.a.createElement("img",{class:"shop-item-image",src:"Images/towel3.jpeg"}),l.a.createElement("div",{class:"shop-item-details"},l.a.createElement("span",{class:"shop-item-price"},"$15.99"),l.a.createElement("button",{class:"btn btn-primary shop-item-button",type:"button"},"BUY"))),l.a.createElement("div",{class:"shop-item"},l.a.createElement("span",{class:"shop-item-title"},"Style 4"),l.a.createElement("img",{class:"shop-item-image",src:"Images/towel4.jpg"}),l.a.createElement("div",{class:"shop-item-details"},l.a.createElement("span",{class:"shop-item-price"},"$19.99"),l.a.createElement("button",{class:"btn btn-primary shop-item-button",type:"button"},"BUY"))))),l.a.createElement("section",{class:"container content-section"},l.a.createElement("h2",{class:"section-header"},"Washclothes"),l.a.createElement("div",{class:"shop-items"},l.a.createElement("div",{class:"shop-item"},l.a.createElement("span",{class:"shop-item-title"},"Style One"),l.a.createElement("img",{class:"shop-item-image",src:"Images/washcloth1.jpg"}),l.a.createElement("div",{class:"shop-item-details"},l.a.createElement("span",{class:"shop-item-price"},"$4.99"),l.a.createElement("button",{class:"btn btn-primary shop-item-button",type:"button"},"BUY"))),l.a.createElement("div",{class:"shop-item"},l.a.createElement("span",{class:"shop-item-title"},"Style Two"),l.a.createElement("img",{class:"shop-item-image",src:"Images/washcloth3.jpg"}),l.a.createElement("div",{class:"shop-item-details"},l.a.createElement("span",{class:"shop-item-price"},"$6.99"),l.a.createElement("button",{class:"btn btn-primary shop-item-button",type:"button"},"BUY"))))),l.a.createElement("section",{class:"container content-section"},l.a.createElement("h2",{class:"section-header"},"CART"),l.a.createElement("div",{class:"cart-row"},l.a.createElement("span",{class:"cart-item cart-header cart-column"},"ITEM"),l.a.createElement("span",{class:"cart-price cart-header cart-column"},"PRICE"),l.a.createElement("span",{class:"cart-quantity cart-header cart-column"},"AMOUNT")),l.a.createElement("div",{class:"cart-items"}),l.a.createElement("div",{class:"cart-total"},l.a.createElement("strong",{class:"cart-total-title"},"Total"),l.a.createElement("span",{class:"cart-total-price"},"$0")),l.a.createElement("button",{class:"btn btn-primary btn-purchase",type:"button"},"Check Out")),l.a.createElement("footer",{class:"main-footer"},l.a.createElement("div",{class:"container main-footer-container"},l.a.createElement("h3",{class:"band-name"},"Das Products"),l.a.createElement("ul",{class:"nav footer-nav"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.youtube.com",target:"_blank"},l.a.createElement("img",{src:"Images/YouTube Logo.png"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com",target:"_blank"},l.a.createElement("img",{src:"Images/Facebook Logo.png"})))))))};var T=function(){return l.a.createElement("div",null,l.a.createElement(r.a,null,l.a.createElement("div",null,l.a.createElement(o.a,{exact:!0,path:"/",component:j}),l.a.createElement(o.a,{exact:!0,path:"/NewPost",component:I}),l.a.createElement(o.a,{exact:!0,path:"/store",component:U}))))};s.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.167b53f7.chunk.js.map