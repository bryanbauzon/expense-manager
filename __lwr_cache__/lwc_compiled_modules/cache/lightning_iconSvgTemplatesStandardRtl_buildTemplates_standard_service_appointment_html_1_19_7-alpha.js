import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_appointment.css";

import _implicitScopedStylesheets from "./service_appointment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M718 200H283a81 81 0 00-83 78v444a81 81 0 0082 78h59a36 36 0 01-4-17V560a14 14 0 0113-14h375a14 14 0 0114 14v223a36 36 0 01-3 15 80 80 0 0064-76V278c1-42-36-78-82-78zM308 361a29 29 0 01-28-27v-28a29 29 0 0128-27h141a29 29 0 0127 27v28a29 29 0 01-27 27zm431 141a14 14 0 01-14 14H350a14 14 0 01-14-14v-22a37 37 0 0137-36h46v-19a27 27 0 0154 0v18h128v-18a27 27 0 0155 0v18h46a37 37 0 0137 37z"${3}/><rect width="55" height="55" x="603" y="610" rx="9"${3}/><rect width="55" height="55" x="603" y="702" rx="9"${3}/><rect width="55" height="55" x="512" y="610" rx="9"${3}/><rect width="55" height="55" x="512" y="702" rx="9"${3}/><rect width="55" height="55" x="420" y="610" rx="9"${3}/><rect width="55" height="55" x="420" y="701" rx="9"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3riuqj77ddo";
freezeTemplate(tmpl);
