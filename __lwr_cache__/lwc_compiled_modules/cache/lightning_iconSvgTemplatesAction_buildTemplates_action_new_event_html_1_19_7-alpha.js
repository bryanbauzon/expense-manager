import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_event.css";

import _implicitScopedStylesheets from "./new_event.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M465 200H55c-8 0-15 7-15 15v245c0 22 18 40 40 40h360c22 0 40-18 40-40V215c0-8-7-15-15-15zM190 420c0 6-4 10-10 10h-40c-6 0-10-4-10-10v-40c0-6 4-10 10-10h40c6 0 10 4 10 10zm0-100c0 6-4 10-10 10h-40c-6 0-10-4-10-10v-40c0-6 4-10 10-10h40c6 0 10 4 10 10zm100 100c0 6-4 10-10 10h-40c-6 0-10-4-10-10v-40c0-6 4-10 10-10h40c6 0 10 4 10 10zm0-100c0 6-4 10-10 10h-40c-6 0-10-4-10-10v-40c0-6 4-10 10-10h40c6 0 10 4 10 10zm100 100c0 6-4 10-10 10h-40c-6 0-10-4-10-10v-40c0-6 4-10 10-10h40c6 0 10 4 10 10zm0-100c0 6-4 10-10 10h-40c-6 0-10-4-10-10v-40c0-6 4-10 10-10h40c6 0 10 4 10 10zm50-250h-50V50c0-16-13-30-30-30-16 0-30 13-30 30v20H190V50c0-16-13-30-30-30-16 0-30 13-30 30v20H80c-22 0-40 18-40 40v25c0 8 7 15 15 15h410c8 0 15-7 15-15v-25c0-22-18-40-40-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2poohil5mjb";
freezeTemplate(tmpl);
