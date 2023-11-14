import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./guidance_center.css";

import _implicitScopedStylesheets from "./guidance_center.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M637 474a162 162 0 10162 162 162 162 0 00-162-162zm0 280a119 119 0 11119-118 119 119 0 01-119 119zm63-188l-90 33a16 16 0 00-10 10l-32 89a6 6 0 007 7l89-32a16 16 0 0010-10l33-90a6 6 0 00-7-7zm-63 92a22 22 0 1122-22 22 22 0 01-22 22zM476 500H341a19 19 0 00-19 18v37a19 19 0 0019 18h95a209 209 0 0140-73z"${3}/><rect height="73" rx="18" width="73" x="200" y="200"${3}/><rect height="73" rx="18" width="420" x="322" y="200"${3}/><rect height="73" rx="18" width="420" x="322" y="350"${3}/><rect height="73" rx="18" width="73" x="200" y="350"${3}/><rect height="73" rx="18" width="73" x="200" y="500"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-5he7l1903uf";
freezeTemplate(tmpl);
