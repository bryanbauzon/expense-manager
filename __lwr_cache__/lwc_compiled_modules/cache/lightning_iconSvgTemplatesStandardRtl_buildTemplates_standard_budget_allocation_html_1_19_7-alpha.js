import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./budget_allocation.css";

import _implicitScopedStylesheets from "./budget_allocation.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M620 200H380a9 9 0 00-9 9v29a9 9 0 009 9h240a9 9 0 009-9v-29a9 9 0 00-9-9zm-187 70h-53a9 9 0 00-9 9v17a9 9 0 009 9h53a9 9 0 008-9v-17a9 9 0 00-8-9zm93 0h-52a9 9 0 00-9 9v17a9 9 0 009 9h52a9 9 0 009-9v-17a9 9 0 00-9-9zm94 0h-53a9 9 0 00-9 9v17a9 9 0 009 9h53a9 9 0 009-9v-17a9 9 0 00-9-9zm-187 58h-53a9 9 0 00-9 9v18a9 9 0 009 8h53a9 9 0 008-8v-18a9 9 0 00-8-9zm93 0h-52a9 9 0 00-9 9v18a9 9 0 009 8h52a9 9 0 009-8v-18a9 9 0 00-9-9zm94 0h-53a9 9 0 00-9 9v18a9 9 0 009 8h53a9 9 0 009-8v-18a9 9 0 00-9-9zm-187 59h-53a9 9 0 00-9 8v18a9 9 0 009 9h53a9 9 0 008-9v-18a9 9 0 00-8-8zm93 0h-52a9 9 0 00-9 8v18a9 9 0 009 9h52a9 9 0 009-9v-18a9 9 0 00-9-8zm94 0h-53a9 9 0 00-9 8v18a9 9 0 009 9h53a9 9 0 009-9v-18a9 9 0 00-9-8zm-187 58h-53a9 9 0 00-9 9v17a9 9 0 009 9h53a9 9 0 008-9v-17a9 9 0 00-8-9zm93 0h-52a9 9 0 00-9 9v17a9 9 0 009 9h52a9 9 0 009-9v-17a9 9 0 00-9-9zm94 0h-53a9 9 0 00-9 9v17a9 9 0 009 9h53a9 9 0 009-9v-17a9 9 0 00-9-9zm131 130H515v-54a15 15 0 10-30 0v54H249a15 15 0 00-15 15v78a15 15 0 0030 0v-63h221v51a15 15 0 0030 0v-51h221v63a15 15 0 0030 0v-78a15 15 0 00-15-15z"${3}/><circle cx="249" cy="747" r="49"${3}/><circle cx="498" cy="747" r="49"${3}/><circle cx="751" cy="747" r="49"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7t6fabhftmr";
freezeTemplate(tmpl);
