import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entitlement.css";

import _implicitScopedStylesheets from "./entitlement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M719 199H352c-37 0-69 34-69 69h-23c-26 0-46 21-46 47s20 46 46 46h23v93h-23c-26 0-46 20-46 46s20 46 46 46h23v93h-23c-26 0-46 21-46 46 0 26 20 46 46 46h23c0 46 32 69 69 69h367c37 0 69-32 69-69V268c-1-37-32-69-69-69zm-38 501c0 11-9 20-20 20H400c-11 0-20-9-20-20v-20c0-11 9-20 20-20h261c11 0 20 9 20 20v20zM400 503l21-21c6-6 15-6 21 0l52 51 128-127c6-6 15-6 21 0l21 21c5 6 5 16 0 21L514 596c-6 6-13 8-21 8s-15-2-21-8l-72-72c-7-6-7-15 0-21zm281-179c0 11-9 20-20 20H400c-11 0-20-9-20-20v-20c0-11 9-20 20-20h261c11 0 20 9 20 20v20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6cc4400e702";
freezeTemplate(tmpl);
