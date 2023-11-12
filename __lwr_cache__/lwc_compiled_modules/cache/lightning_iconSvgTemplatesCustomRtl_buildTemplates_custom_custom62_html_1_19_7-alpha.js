import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom62.css";

import _implicitScopedStylesheets from "./custom62.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M77 70H23a3 3 0 100 6h54a3 3 0 100-6zm-53-6h34v-4c0-1.1.9-2 2-2h10a2 2 0 012 2v4h4a2 2 0 002-2V28a2 2 0 00-2-2H24a2 2 0 00-2 2v34c0 1.1.9 2 2 2zm9-26c0-1.1.9-2 2-2h29a2 2 0 012 2v2a2 2 0 01-2 2H35a2 2 0 01-2-2v-2zm0 12c0-1.1.9-2 2-2h19a2 2 0 012 2v2a2 2 0 01-2 2H35a2 2 0 01-2-2v-2z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-5mjfedmode1";
freezeTemplate(tmpl);
