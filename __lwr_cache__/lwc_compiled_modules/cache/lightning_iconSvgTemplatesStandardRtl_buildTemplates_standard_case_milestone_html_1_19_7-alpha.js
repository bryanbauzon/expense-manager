import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./case_milestone.css";

import _implicitScopedStylesheets from "./case_milestone.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M730 360H251c-33 0-60 27-60 60v320c0 33 27 60 60 60h479c33 0 60-27 60-60V420c0-33-27-60-60-60zM409 486v220c0 10-7 19-17 19h-1c-10 0-18-9-18-19V486c-6-6-9-14-9-22-1-15 10-28 25-29s28 10 29 25v5c0 7-3 15-9 21zm215 138c0 3-2 6-4 8-69 41-108-24-172-3-5 1-10-1-12-6V495c0-4 2-8 6-9 66-26 105 42 175 2 2-1 5-1 6 1l1 3v132zM371 300h40c5 0 10-4 10-9v-31h140v30c0 5 4 10 9 10h41c5 0 10-4 10-9v-31c0-33-27-60-60-60H421c-33 0-60 27-60 60v30c0 5 4 10 9 10h1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3qctgcpa8ig";
freezeTemplate(tmpl);
