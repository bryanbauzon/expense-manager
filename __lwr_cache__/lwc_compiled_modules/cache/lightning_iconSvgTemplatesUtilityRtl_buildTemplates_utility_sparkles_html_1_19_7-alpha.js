import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sparkles.css";

import _implicitScopedStylesheets from "./sparkles.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M349 272l-69 34a105 105 0 00-47 47l-33 67c-5 10-19 10-24 0l-34-68a105 105 0 00-47-47l-68-34a13 13 0 010-24l68-34a105 105 0 0047-47l34-68a13 13 0 0124 0l34 68a105 105 0 0047 47l68 34c10 5 10 19 0 24zm148 150l-30-14a45 45 0 01-20-20l-14-30a6 6 0 00-10 0l-15 30a45 45 0 01-20 20l-30 15c-3 2-3 8 0 10l30 15a45 45 0 0120 20l15 29c2 4 8 4 10 0l14-30a45 45 0 0120-20l30-14c4-2 4-8 0-10zm0-335l-30-15a45 45 0 01-20-20l-14-29a6 6 0 00-10 0l-15 30a45 45 0 01-20 20l-30 14c-3 2-3 8 0 10l30 15a45 45 0 0120 20l15 29c2 4 8 4 10 0l15-30a45 45 0 0120-20l29-14c4-2 4-8 0-10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1tdmn949iad";
freezeTemplate(tmpl);
