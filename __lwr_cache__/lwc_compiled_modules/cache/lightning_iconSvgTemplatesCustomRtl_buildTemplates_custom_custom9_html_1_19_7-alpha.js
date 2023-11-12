import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom9.css";

import _implicitScopedStylesheets from "./custom9.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M62 20H45.1a6 6 0 00-5.6 3.8L29 50.9a3 3 0 002.8 4.1H49l-6.4 22.4a2 2 0 003.4 1.8L72.3 48c1.7-1.9.3-5-2.3-5H57l11.4-18.4a3 3 0 00-2.6-4.6H62z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4s68ln2vtcl";
freezeTemplate(tmpl);
