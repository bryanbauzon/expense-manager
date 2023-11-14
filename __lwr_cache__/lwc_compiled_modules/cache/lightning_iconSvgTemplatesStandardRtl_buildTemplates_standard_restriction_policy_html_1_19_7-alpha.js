import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./restriction_policy.css";

import _implicitScopedStylesheets from "./restriction_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M64 48a16 16 0 1016 16 16 16 0 00-16-16zm7 19H57a3 3 0 010-6h14a3 3 0 010 6zM36 20H26a6 6 0 00-6 6v9a6 6 0 006 6h10a6 6 0 006-6v-9a6 6 0 00-6-6zm-4.5 15h-1a4.5 4.5 0 010-9h1a4.5 4.5 0 010 9zM54 41h10a6 6 0 006-6v-9a6 6 0 00-6-6H54a6 6 0 00-6 6v9a6 6 0 006 6zm4.5-15h1a4.5 4.5 0 010 9h-1a4.5 4.5 0 010-9zM36 47H26a6 6 0 00-6 6v9a6 6 0 006 6h10a6 6 0 006-6v-9a6 6 0 00-6-6zm-4.5 15h-1a4.5 4.5 0 010-9h1a4.5 4.5 0 010 9z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-7tt5kdlsjr2";
freezeTemplate(tmpl);
