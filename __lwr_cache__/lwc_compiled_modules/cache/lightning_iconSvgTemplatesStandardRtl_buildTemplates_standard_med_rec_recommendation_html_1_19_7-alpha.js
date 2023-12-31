import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./med_rec_recommendation.css";

import _implicitScopedStylesheets from "./med_rec_recommendation.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M695 283v93a18 18 0 0018 18h11a7 7 0 007-7V283a7 7 0 00-7-6h-23a7 7 0 00-6 6zm-181 16v56c0 40 31 43 65 43 32 0 42-12 73-13a7 7 0 006-7v-90a7 7 0 00-6-7c-22 0-39-23-39-47v-27a7 7 0 00-7-7h-11a18 18 0 00-18 18v45a18 18 0 01-18 18h-27a18 18 0 00-18 18z"${3}/><path d="M571 434c-43 0-90-12-90-62v-55H315a46 46 0 00-46 46v391a46 46 0 0046 46h297a46 46 0 0046-46V417c-35 3-49 17-87 17zm-238 97l24-28 47 40-23 28a31 31 0 11-49-39zm48 184a31 31 0 01-50-37 39 39 0 012-3l24-27 47 40zm57-68l-24 28-47-40 23-28a31 31 0 0147 40zm0-144l-24 28-47-40 23-28a31 31 0 0149 38 12 12 0 01-2 2zm156 181a8 8 0 01-7 9H483a10 10 0 01-9-9v-17a9 9 0 019-10h102a9 9 0 019 10v18zm0-145a9 9 0 01-7 10H483a9 9 0 01-9-10v-17a9 9 0 019-9h102a9 9 0 019 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4fk616ja9b8";
freezeTemplate(tmpl);
