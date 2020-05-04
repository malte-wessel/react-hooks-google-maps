(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return O}));var n=a(1),o=a(7),s=a(0),r=a.n(s),i=a(126),c=a(141),p=a(133),l=a(134),d={lat:51.22172,lng:6.77616},g=function(){var e=Object(l.useMap)(p.a,{pooling:!0});return r.a.createElement(l.GoogleMap,{zoom:13,center:d,map:e})},b={id:"overview",title:"Overview"},m={id:"overview",title:"Overview",description:"## Why this package?",source:"@site/docs/Overview.mdx",permalink:"/react-hooks-google-maps/docs/overview",editUrl:"https://github.com/malte-wessel/react-hooks-google-maps/edit/master/website/docs/Overview.mdx",sidebar:"docs",next:{title:"Markers",permalink:"/react-hooks-google-maps/docs/markers"}},h=[{value:"Why this package?",id:"why-this-package",children:[]},{value:"Getting started",id:"getting-started",children:[{value:"Installation",id:"installation",children:[]}]},{value:"The gist",id:"the-gist",children:[]}],u={rightToc:h};function O(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"why-this-package"},"Why this package?"),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("h4",{id:"using-yarn"},"Using yarn"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-hooks-google-maps\n")),Object(i.b)("h4",{id:"using-npm"},"Using npm"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-hooks-google-maps --save\n")),Object(i.b)("h2",{id:"the-gist"},"The gist"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { useMap, GoogleMap } from 'react-hooks-google-maps';\n\nconst duesseldorf = {\n    lat: 51.22172,\n    lng: 6.77616,\n};\n\nconst App: FC = () => {\n    // Load the Google Maps API and get a Map instance\n    const map = useMap(GOOGLE_MAPS_KEY);\n\n    // Pass it to the `GoogleMap` component and configure your map\n    return <GoogleMap zoom={13} center={duesseldorf} map={map} />;\n};\n")),Object(i.b)(c.a,{mdxType:"Wrapper"},Object(i.b)(g,{mdxType:"Overview"})))}O.isMDXComponent=!0}}]);