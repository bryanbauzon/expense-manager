import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./incident.css";

import _implicitScopedStylesheets from "./incident.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38 30h4a.9.9 0 001-1v-3h14v3a.9.9 0 001 1h4a.9.9 0 001-1v-3a6 6 0 00-6-6H43a6 6 0 00-6 6v3a.9.9 0 001 1zm12 33.3a2.2 2.2 0 102.2 2.3 2.2 2.2 0 00-2.2-2.3zM74 36H26a6 6 0 00-6 6v32a6 6 0 006 6h48a6 6 0 006-6V42a6 6 0 00-6-6zm-6.9 37.8H32.9c-1.9 0-2.9-2.4-1.9-4.1L48.2 42a2.1 2.1 0 013.7 0L69 69.7c1.1 1.7 0 4.1-1.9 4.1z"${3}/><rect width="4.5" height="11.2" x="47.8" y="50.6" rx=".8"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ke0uovnkqq";
freezeTemplate(tmpl);
