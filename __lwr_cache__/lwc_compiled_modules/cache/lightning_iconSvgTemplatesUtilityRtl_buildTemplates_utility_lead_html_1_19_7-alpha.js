import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead.css";

import _implicitScopedStylesheets from "./lead.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M484 212H36c-16 0-22 20-9 29l117 75c6 4 9 11 6 18l-43 146c-5 16 16 27 28 15l113-120c6-7 18-7 24 0l114 120c11 12 32 1 28-15l-44-146c-2-7 0-14 6-18l117-75c13-9 7-29-9-29z"${3}/><circle cx="260" cy="92" r="72"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6pni15n9n8o";
freezeTemplate(tmpl);
