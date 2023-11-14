import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product.css";

import _implicitScopedStylesheets from "./product.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M36 386h40c9 0 16-7 16-16V122c0-9-7-16-16-16H36c-9 0-16 7-16 16v248c0 9 7 16 16 16zm448-280h-40c-9 0-16 7-16 16v248c0 9 7 16 16 16h40c9 0 16-7 16-16V122c0-9-7-16-16-16zM284 386c9 0 16-7 16-16V122c0-9-7-16-16-16h-48c-9 0-16 7-16 16v248c0 9 7 16 16 16h48zm96 0c9 0 16-7 16-16V122c0-9-7-16-16-16h-16c-9 0-16 7-16 16v248c0 9 7 16 16 16h16zm-208 0c9 0 16-7 16-16V122c0-9-7-16-16-16h-16c-9 0-16 7-16 16v248c0 9 7 16 16 16h16zm312 48H36c-9 0-16 7-16 16v16c0 9 7 16 16 16h448c9 0 16-7 16-16v-16c0-9-7-16-16-16zm0-416H36c-9 0-16 7-16 16v16c0 9 7 16 16 16h448c9 0 16-7 16-16V34c0-9-7-16-16-16z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
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
tmpl.stylesheetToken = "lwc-6l28t85p4b1";
freezeTemplate(tmpl);
