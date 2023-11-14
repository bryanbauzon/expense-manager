import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer_lifecycle_analytics.css";

import _implicitScopedStylesheets from "./customer_lifecycle_analytics.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M574 384a181 181 0 11-181-182 181 181 0 01181 182zm-248-82c-13 0-23 13-23 31 0 16 9 31 23 31s23-13 23-31c-2-17-11-31-23-31zm135 0c-13 0-23 13-23 31 0 16 9 31 23 31s23-13 23-31-9-31-23-31zM280 407c5 57 47 106 112 106a113 113 0 00115-106zm516 47a14 14 0 00-14-14l-146-1a13 13 0 00-14 13v26a14 14 0 0014 14l45 1a9 9 0 016 15L487 709a10 10 0 01-9-2L371 598a14 14 0 00-18-1l-1 1-19 19a1 1 0 01-1 1L206 744a14 14 0 000 19l19 19a14 14 0 0019 0l104-103a19 19 0 0126-1l102 103a12 12 0 0019 0l232-234a9 9 0 0115 6l1 45a14 14 0 0014 14h26a13 13 0 0014-13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ro2jmshdln";
freezeTemplate(tmpl);
