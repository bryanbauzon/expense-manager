import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer_portal_users.css";

import _implicitScopedStylesheets from "./customer_portal_users.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M680 488c0 11-9 20-20 20H474c-11 0-20-9-20-20v-30c0-11 9-20 20-20h186c11 0 20 9 20 20zm-286 0c0 11-9 20-20 20h-34c-11 0-20-9-20-20v-30c0-11 9-20 20-20h34c11 0 20 9 20 20zm0 130c0 11-9 20-20 20h-34c-11 0-20-9-20-20v-30c0-11 9-20 20-20h34c11 0 20 9 20 20zm286 0c0 11-9 20-20 20H474c-11 0-20-9-20-20v-30c0-11 9-20 20-20h186c11 0 20 9 20 20zm58-418H262c-34 0-62 28-62 62v476c0 34 28 62 62 62h476c34 0 62-28 62-62V262c0-34-28-62-62-62zm-264 74c0-8 8-14 16-14h234c8 0 14 8 14 16v30c0 8-8 14-16 14H488c-8 0-14-8-14-16zm-80-14c17 0 30 13 30 30s-13 30-30 30-30-13-30-30 13-30 30-30zm-104 0c17 0 30 13 30 30s-13 30-30 30-30-13-30-30 13-30 30-30zm450 466c0 8-8 14-16 14h-44v-23c0-11-9-20-20-20H474c-11 0-20 9-20 20v23h-60v-23c0-11-9-20-20-20h-34c-11 0-20 9-20 20v23h-46c-8 0-14-8-14-16V394c0-8 8-14 16-14h450c8 0 14 8 14 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4dmqmngma6q";
freezeTemplate(tmpl);
