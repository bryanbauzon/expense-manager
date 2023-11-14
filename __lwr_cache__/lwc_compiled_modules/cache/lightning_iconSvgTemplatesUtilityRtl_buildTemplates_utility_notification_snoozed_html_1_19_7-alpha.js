import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./notification_snoozed.css";

import _implicitScopedStylesheets from "./notification_snoozed.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M497 20a5 5 0 015 5v10a6 6 0 01-1 4l-50 60h46a5 5 0 015 5v10a5 5 0 01-5 5h-69a5 5 0 01-5-5v-10l1-2 51-62h-47a5 5 0 01-5-5V25a5 5 0 015-5h69z"${3}/><path fill-rule="evenodd" d="M454 331h5a40 40 0 0140 40v15c0 8-8 15-16 15H37c-8 0-15-7-15-14v-15a40 40 0 0140-40h5a34 34 0 0034-34V188c0-87 66-160 151-164a160 160 0 01167 159v114a35 35 0 0034 34zM359 80a10 10 0 0110 10v20l-2 7-100 121h93a10 10 0 0110 10v20a10 10 0 01-10 10H222a10 10 0 01-10-10v-20c0-2 0-4 2-5l101-124h-93a10 10 0 01-10-10V89a10 10 0 0110-10h137z"${3}/><path d="M211 440h99c6 0 10 6 10 12-6 27-30 48-59 48s-54-20-58-48a10 10 0 0110-12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5a726i27r4q";
freezeTemplate(tmpl);
