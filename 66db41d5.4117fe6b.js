(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return E})),n.d(t,"metadata",(function(){return x})),n.d(t,"rightToc",(function(){return I})),n.d(t,"default",(function(){return D}));var o=n(1),a=n(7),c=n(0),i=n.n(c),r=n(124),s=n(136),d=n(130),l=n(199),u=n(198),b=n(195),g=n(36),f=n(134),O=n(128),j=n(129);var p=e=>{const t=Object(f.a)(),{disableAutoPan:n,maxWidth:o,pixelOffset:a,position:i,zIndex:r,onCloseClick:s,onContentChanged:d,onDomReady:l,onPositionChanged:u,onZIndexChanged:b,open:p,onLoad:m,onUnmount:h,children:w}=e,C=Object(c.useMemo)(()=>document.createElement("div"),[]),k=Object(c.useMemo)(()=>new google.maps.InfoWindow({disableAutoPan:n,maxWidth:o,pixelOffset:a,position:i,zIndex:r}),[]),E=Object(j.a)(m),x=Object(j.a)(h);return Object(c.useEffect)(()=>{if(t)return k.setContent(C),()=>{k.close()}},[C,k,t]),Object(c.useEffect)(()=>{if(t&&E.current)return E.current(k),()=>{x.current&&x.current(k)}},[t]),Object(c.useEffect)(()=>{t&&(p?k.open(t):k.close())},[k,t,p]),Object(O.a)(k,"closeclick",s),Object(O.a)(k,"content_changed",d),Object(O.a)(k,"domready",l),Object(O.a)(k,"position_changed",u),Object(O.a)(k,"zindex_changed",b),Object(g.createPortal)(w,C)},m={lat:51.22172,lng:6.77616},h={lat:51.21392,lng:6.78069},w={lat:51.218658,lng:6.793311},C={lat:51.2266046,lng:6.7710508},k=function(){var e=Object(l.a)(d.a,{pooling:!0}),t=Object(c.useState)(!1),n=t[0],o=t[1],a=Object(c.useState)(new Date),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=setInterval((function(){return s(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),i.a.createElement(u.a,{zoom:14,center:m,map:e},i.a.createElement(b.a,{position:m,onClick:function(){return o(!n)}}),i.a.createElement(p,{position:h,open:!0},i.a.createElement("strong",null,"Current time: ")," ",r.toLocaleTimeString()),i.a.createElement(p,{maxWidth:150,position:w,open:!0},i.a.createElement("strong",null,"Click the marker")," to open another InfoWindow"),i.a.createElement(p,{maxWidth:150,position:C,open:n,onCloseClick:function(){return o(!1)}},i.a.createElement("strong",null,"Oh yeah!")))},E={id:"info-window",title:"InfoWindow"},x={id:"info-window",title:"InfoWindow",description:"## Adding an info window",source:"@site/docs/InfoWindow.mdx",permalink:"/react-hooks-google-maps/docs/info-window",editUrl:"https://github.com/malte-wessel/react-hooks-google-maps/edit/master/website/docs/InfoWindow.mdx",sidebar:"docs",previous:{title:"Markers",permalink:"/react-hooks-google-maps/docs/markers"},next:{title:"Clustering",permalink:"/react-hooks-google-maps/docs/clustering"}},I=[{value:"Adding an info window",id:"adding-an-info-window",children:[]}],v={rightToc:I};function D(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"adding-an-info-window"},"Adding an info window"),Object(r.b)(s.a,{mdxType:"Wrapper"},Object(r.b)(k,{mdxType:"Example"})))}D.isMDXComponent=!0},195:function(e,t,n){"use strict";var o=n(0),a=n(134),c=n(128),i=n(129);t.a=e=>{const t=Object(a.a)(),{anchorPoint:n,animation:r,clickable:s,crossOnDrag:d,cursor:l,draggable:u,icon:b,label:g,opacity:f,optimized:O,position:j,shape:p,title:m,visible:h,zIndex:w,onAnimationChanged:C,onClick:k,onClickableChanged:E,onCursorChanged:x,onDoubleClick:I,onDrag:v,onDragEnd:D,onDraggableChanged:M,onDragStart:_,onFlatChanged:W,onIconChanged:y,onMouseDown:z,onMouseOut:P,onMouseOver:T,onMouseUp:A,onPositionChanged:S,onRightClick:L,onShapeChanged:U,onTitleChanged:Z,onVisibleChanged:J,onZIndexChanged:R,onLoad:V,onUnmount:X}=e,F=Object(o.useMemo)(()=>new google.maps.Marker({anchorPoint:n,animation:r,clickable:s,crossOnDrag:d,cursor:l,draggable:u,icon:b,label:g,opacity:f,optimized:O,position:j,shape:p,title:m,visible:h,zIndex:w}),[]),q=Object(i.a)(V),B=Object(i.a)(X);return Object(o.useEffect)(()=>{if(t)return F.setMap(t),()=>{F.setMap(null)}},[t,F]),Object(o.useEffect)(()=>{if(t&&q.current)return q.current(F),()=>{B.current&&B.current(F)}},[t]),Object(o.useEffect)(()=>{r&&F.setAnimation(r)},[F,r]),Object(o.useEffect)(()=>{s&&F.setClickable(s)},[F,s]),Object(o.useEffect)(()=>{l&&F.setCursor(l)},[F,l]),Object(o.useEffect)(()=>{u&&F.setDraggable(u)},[F,u]),Object(o.useEffect)(()=>{b&&F.setIcon(b)},[F,b]),Object(o.useEffect)(()=>{g&&F.setLabel(g)},[F,g]),Object(o.useEffect)(()=>{f&&F.setOpacity(f)},[F,f]),Object(o.useEffect)(()=>{j&&F.setPosition(j)},[F,j]),Object(o.useEffect)(()=>{p&&F.setShape(p)},[F,p]),Object(o.useEffect)(()=>{m&&F.setTitle(m)},[F,m]),Object(o.useEffect)(()=>{h&&F.setVisible(h)},[F,h]),Object(o.useEffect)(()=>{w&&F.setZIndex(w)},[F,w]),Object(c.a)(F,"animation_changed",C),Object(c.a)(F,"click",k),Object(c.a)(F,"clickable_changed",E),Object(c.a)(F,"cursor_changed",x),Object(c.a)(F,"dblclick",I),Object(c.a)(F,"drag",v),Object(c.a)(F,"dragend",D),Object(c.a)(F,"draggable_changed",M),Object(c.a)(F,"dragstart",_),Object(c.a)(F,"flat_changed",W),Object(c.a)(F,"icon_changed",y),Object(c.a)(F,"mousedown",z),Object(c.a)(F,"mouseout",P),Object(c.a)(F,"mouseover",T),Object(c.a)(F,"mouseup",A),Object(c.a)(F,"position_changed",S),Object(c.a)(F,"rightclick",L),Object(c.a)(F,"shape_changed",U),Object(c.a)(F,"title_changed",Z),Object(c.a)(F,"visible_changed",J),Object(c.a)(F,"zindex_changed",R),null}}}]);