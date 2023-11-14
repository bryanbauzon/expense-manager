import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./device.css";

import _implicitScopedStylesheets from "./device.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M566 379h-33v-33a22 22 0 00-22-22h-22a22 22 0 00-22 22v33h-33a22 22 0 00-22 22v22a22 22 0 0022 22h33v33a22 22 0 0022 22h22a22 22 0 0022-22v-33h33a22 22 0 0022-22v-22a22 22 0 00-22-22zm230-126a50 50 0 00-49-49H253a50 50 0 00-49 49v321a50 50 0 0049 49h494a50 50 0 0049-49zm-74 278a19 19 0 01-18 18H297a19 19 0 01-19-18V296a19 19 0 0119-18h407a19 19 0 0118 18zM586 722h-37a12 12 0 01-12-12v-25a12 12 0 00-12-12h-50a12 12 0 00-12 12v25a12 12 0 01-12 12h-37a50 50 0 00-50 50v6a19 19 0 0019 18h234a19 19 0 0019-18v-6a50 50 0 00-50-50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7bv60j7t8j4";
freezeTemplate(tmpl);
