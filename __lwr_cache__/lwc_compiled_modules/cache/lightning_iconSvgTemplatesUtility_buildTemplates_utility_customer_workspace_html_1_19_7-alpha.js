import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer_workspace.css";

import _implicitScopedStylesheets from "./customer_workspace.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M155 42c9-1 16 6 16 15v12c0 9-7 16-15 16h-51c-17 0-32 14-32 31v312c0 17 13 32 31 32h311c17 0 32-14 32-31v-51c0-9 7-16 16-16h12c9-1 16 6 16 15v62c0 36-29 65-65 65H94c-36 0-65-29-65-65V107c-1-36 29-66 65-66h61zm176 249h85c3 0 5-2 5-5l16-56c1-2-1-5-4-6l-1-1H300l-2-8c-2-4-5-6-9-6h-14c-5 0-9 3-9 8s3 9 7 9h10l7 26 20 66c1 4 4 6 8 6h101c4 0 8-3 9-8 0-5-3-9-8-9h-90c-3 0-7-2-8-6-1-5 2-9 6-10l2-1zm-65-31l-2-10c-6-2-11-5-15-10a34 34 0 0127-57h13c12 0 22 6 29 15h37c-11-7-23-13-35-18-21-8-23-17-23-25 1-9 5-17 12-23 12-12 19-28 18-46 0-33-20-62-56-62s-57 29-57 62c0 17 7 34 19 46 7 5 11 14 12 23 0 8-3 17-23 25-31 12-59 27-60 54-1 18 12 33 30 35h77z"${3}/><circle cx="333" cy="357" r="14"${3}/><circle cx="402" cy="357" r="14"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-60bms3qg348";
freezeTemplate(tmpl);
