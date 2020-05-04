(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{116:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return O})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return j})),a.d(t,"default",(function(){return h}));var n=a(1),o=a(7),c=a(0),r=a.n(c),s=a(124),i=a(136),d=a(130),b=a(199),l=a(198),u=a(195),g={lat:51.22172,lng:6.77616},p=function(){var e=Object(b.a)(d.a,{pooling:!0});return r.a.createElement(l.a,{zoom:13,center:g,map:e},r.a.createElement(u.a,{position:g}))},O={id:"markers",title:"Markers"},m={id:"markers",title:"Markers",description:"## Adding markers",source:"@site/docs/Markers.mdx",permalink:"/react-hooks-google-maps/docs/markers",editUrl:"https://github.com/malte-wessel/react-hooks-google-maps/edit/master/website/docs/Markers.mdx",sidebar:"docs",previous:{title:"Overview",permalink:"/react-hooks-google-maps/docs/overview"},next:{title:"InfoWindow",permalink:"/react-hooks-google-maps/docs/info-window"}},j=[{value:"Adding markers",id:"adding-markers",children:[]}],f={rightToc:j};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"adding-markers"},"Adding markers"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { useMap, GoogleMap, Marker } from 'react-hooks-google-maps';\n\nconst duesseldorf = {\n    lat: 51.22172,\n    lng: 6.77616,\n};\n\nconst App: FC = () => {\n    const map = useMap(GOOGLE_MAPS_KEY);\n    return (\n        <GoogleMap zoom={13} center={duesseldorf} map={map}>\n            <Marker position={duesseldorf} />\n        </GoogleMap>\n    );\n};\n")),Object(s.b)(i.a,{mdxType:"Wrapper"},Object(s.b)(p,{mdxType:"Markers"})))}h.isMDXComponent=!0},195:function(e,t,a){"use strict";var n=a(0),o=a(134),c=a(128),r=a(129);t.a=e=>{const t=Object(o.a)(),{anchorPoint:a,animation:s,clickable:i,crossOnDrag:d,cursor:b,draggable:l,icon:u,label:g,opacity:p,optimized:O,position:m,shape:j,title:f,visible:h,zIndex:k,onAnimationChanged:M,onClick:C,onClickableChanged:E,onCursorChanged:w,onDoubleClick:v,onDrag:_,onDragEnd:x,onDraggableChanged:D,onDragStart:y,onFlatChanged:z,onIconChanged:A,onMouseDown:I,onMouseOut:T,onMouseOver:G,onMouseUp:P,onPositionChanged:L,onRightClick:S,onShapeChanged:U,onTitleChanged:F,onVisibleChanged:J,onZIndexChanged:N,onLoad:V,onUnmount:W}=e,X=Object(n.useMemo)(()=>new google.maps.Marker({anchorPoint:a,animation:s,clickable:i,crossOnDrag:d,cursor:b,draggable:l,icon:u,label:g,opacity:p,optimized:O,position:m,shape:j,title:f,visible:h,zIndex:k}),[]),Z=Object(r.a)(V),K=Object(r.a)(W);return Object(n.useEffect)(()=>{if(t)return X.setMap(t),()=>{X.setMap(null)}},[t,X]),Object(n.useEffect)(()=>{if(t&&Z.current)return Z.current(X),()=>{K.current&&K.current(X)}},[t]),Object(n.useEffect)(()=>{s&&X.setAnimation(s)},[X,s]),Object(n.useEffect)(()=>{i&&X.setClickable(i)},[X,i]),Object(n.useEffect)(()=>{b&&X.setCursor(b)},[X,b]),Object(n.useEffect)(()=>{l&&X.setDraggable(l)},[X,l]),Object(n.useEffect)(()=>{u&&X.setIcon(u)},[X,u]),Object(n.useEffect)(()=>{g&&X.setLabel(g)},[X,g]),Object(n.useEffect)(()=>{p&&X.setOpacity(p)},[X,p]),Object(n.useEffect)(()=>{m&&X.setPosition(m)},[X,m]),Object(n.useEffect)(()=>{j&&X.setShape(j)},[X,j]),Object(n.useEffect)(()=>{f&&X.setTitle(f)},[X,f]),Object(n.useEffect)(()=>{h&&X.setVisible(h)},[X,h]),Object(n.useEffect)(()=>{k&&X.setZIndex(k)},[X,k]),Object(c.a)(X,"animation_changed",M),Object(c.a)(X,"click",C),Object(c.a)(X,"clickable_changed",E),Object(c.a)(X,"cursor_changed",w),Object(c.a)(X,"dblclick",v),Object(c.a)(X,"drag",_),Object(c.a)(X,"dragend",x),Object(c.a)(X,"draggable_changed",D),Object(c.a)(X,"dragstart",y),Object(c.a)(X,"flat_changed",z),Object(c.a)(X,"icon_changed",A),Object(c.a)(X,"mousedown",I),Object(c.a)(X,"mouseout",T),Object(c.a)(X,"mouseover",G),Object(c.a)(X,"mouseup",P),Object(c.a)(X,"position_changed",L),Object(c.a)(X,"rightclick",S),Object(c.a)(X,"shape_changed",U),Object(c.a)(X,"title_changed",F),Object(c.a)(X,"visible_changed",J),Object(c.a)(X,"zindex_changed",N),null}}}]);