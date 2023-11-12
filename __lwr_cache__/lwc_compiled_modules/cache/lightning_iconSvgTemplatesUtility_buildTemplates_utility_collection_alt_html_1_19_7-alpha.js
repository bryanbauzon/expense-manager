import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./collection_alt.css";

import _implicitScopedStylesheets from "./collection_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M138 20a29 29 0 00-28 30 29 29 0 0028 30h245a29 29 0 0027-30 29 29 0 00-27-30zM70 150a29 29 0 0128-30h325a29 29 0 0127 30 29 29 0 01-27 30H98a29 29 0 01-28-30z"${3}/><rect width="480" height="280" x="20" y="220" rx="40"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4abv4rs1g73";
freezeTemplate(tmpl);
