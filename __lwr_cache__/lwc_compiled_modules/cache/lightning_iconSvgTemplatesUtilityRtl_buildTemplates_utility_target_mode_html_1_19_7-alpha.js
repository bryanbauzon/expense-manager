import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./target_mode.css";

import _implicitScopedStylesheets from "./target_mode.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M246 458a15 15 0 0014-15l1-168a15 15 0 00-13-15H77a15 15 0 00-15 13v33a15 15 0 0013 15h55a11 11 0 0111 11 11 11 0 01-3 7L26 452a17 17 0 00-1 22l22 22a17 17 0 0022-1l114-113a10 10 0 0114 0 8 8 0 013 7v53a15 15 0 0013 16h33zm59.3 25.3A240 240 0 00431 418.8 233.7 233.7 0 10101 88.3a230.9 230.9 0 00-64.9 124.9h47.5A186.5 186.5 0 01398 121.4a186.6 186.6 0 01-91.1 314.3zm2.4-96a131.4 131.4 0 0057.2-34.6 140.18 140.18 0 00-198.2-198.3 138.6 138.6 0 00-34.7 58h50a92.1 92.1 0 0118-25.8 93.5 93.5 0 01131.9 132.2 104.9 104.9 0 01-24.2 17.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7t56p2c7ibt";
freezeTemplate(tmpl);
