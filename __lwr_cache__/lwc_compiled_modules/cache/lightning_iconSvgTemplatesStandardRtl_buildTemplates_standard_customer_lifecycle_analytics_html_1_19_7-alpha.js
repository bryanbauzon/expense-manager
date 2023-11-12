import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer_lifecycle_analytics.css";

import _implicitScopedStylesheets from "./customer_lifecycle_analytics.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M606 202a182 182 0 11-181 182 181 181 0 01181-182zm44 131c0 18 10 31 23 31s23-15 23-31c0-18-10-31-23-31s-21 14-23 31zm-135 0c0 18 10 31 23 31s23-15 23-31c0-18-10-31-23-31s-23 14-23 31zm-23 74a113 113 0 00115 106c65 0 107-49 112-106zM202 599a13 13 0 0014 13h26a14 14 0 0014-14l1-45a9 9 0 0115-6l232 234a12 12 0 0019 0l102-103a19 19 0 0126 1l104 103a14 14 0 0019 0l19-19a14 14 0 000-19L667 618a1 1 0 01-1-1l-19-19-1-1a14 14 0 00-18 1L521 707a10 10 0 01-9 2L312 508a9 9 0 016-15l45-1a14 14 0 0014-14v-26a13 13 0 00-14-13l-146 1a14 14 0 00-14 14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1dv8gl38e9n";
freezeTemplate(tmpl);
