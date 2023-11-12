import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_opportunity.css";

import _implicitScopedStylesheets from "./new_opportunity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M418 410H102c-8 0-14 7-14 14v1c0 25 20 45 45 45h255c25 0 45-20 45-45v-1c-1-7-7-14-15-14zm37-308a45 45 0 00-29 79 80 80 0 01-76 48c-40-2-72-34-74-74l1-19c17-7 29-22 29-42-1-24-21-44-46-44s-45 20-45 45c0 19 12 35 28 42 2 6 2 12 2 19-2 40-34 72-74 74-34 2-64-19-77-48a45 45 0 00-29-79c-25 0-45 20-45 45s20 45 45 45l21 160c1 7 7 12 14 12h320c7 0 13-5 14-12l21-160c25 0 45-20 45-45s-20-46-45-46z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-71ioshis0gb";
freezeTemplate(tmpl);
