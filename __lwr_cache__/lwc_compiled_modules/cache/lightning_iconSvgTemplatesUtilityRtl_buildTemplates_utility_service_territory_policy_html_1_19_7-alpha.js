import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_territory_policy.css";

import _implicitScopedStylesheets from "./service_territory_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M17 2H8a6 6 0 00-6 6v5.8a6 6 0 006 6h9a6 6 0 006-6V8a6 6 0 00-6-6zm-3.2 13h-2.5a4 4 0 010-8.1h2.5a4 4 0 110 8.1zm20.6 4.9h9a6 6 0 006-6.1V8a6 6 0 00-6-6.1h-9a6 6 0 00-6 6v5.8a6 6 0 006 6zm3.3-13h2.5a4 4 0 110 8h-2.5a4 4 0 010-8zM17 24.7H8a6 6 0 00-6 6.1v5.7a6 6 0 006 6h9a6 6 0 006-6v-5.7a6 6 0 00-6-6zm-3.2 13h-2.5a4 4 0 010-8h2.5a4 4 0 110 8zm25.4-13c-6 0-10.8 4.5-10.8 10 0 7 7.7 13.4 10.1 15a1.2 1.2 0 001.4 0c2.4-1.7 10.1-8 10.1-15 0-5.5-4.8-10-10.8-10zm0 14.2a4.4 4.4 0 01-4.6-4.2 4.6 4.6 0 019.1 0 4.4 4.4 0 01-4.5 4.2z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-65qjuf7uqil";
freezeTemplate(tmpl);
