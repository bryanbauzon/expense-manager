import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./medication.css";

import _implicitScopedStylesheets from "./medication.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M307 262h266a13 13 0 0013-13v-36a13 13 0 00-13-13H307a13 13 0 00-13 13v37a13 13 0 0013 12zm302 263V385a91 91 0 00-90-91H363a91 91 0 00-92 90v25h166a15 15 0 0115 15v167a15 15 0 01-15 15H271v73a14 14 0 0015 13h182l140-166zm103 26a63 63 0 00-89 7l-48 57 97 81 47-56a63 63 0 00-7-89zM507 696a63 63 0 0096 82l48-57-97-81z"${3}/><rect x="272" y="453" width="131" height="30" rx="10"${3}/><rect x="272" y="528" width="92" height="30" rx="10"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-68mvorbfni2";
freezeTemplate(tmpl);
