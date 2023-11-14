import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./partner_fund_allocation.css";

import _implicitScopedStylesheets from "./partner_fund_allocation.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M309 656l-81 85c-3 3-8 1-8-3v-40c0-4-4-9-8-9h-15c-4 0-8 5-8 9v95c0 5 2 7 7 7h95c4 0 8-2 8-7v-15c0-4-3-8-8-8h-40c-5 0-7-5-3-8l104-109h-9c-11 0-23 1-34 3zm422 106c3 3 1 8-4 8h-40c-4 0-8 4-8 8v15c0 4 5 8 8 8h95c5 0 7-2 7-7v-95c0-4-2-8-6-8h-15c-4 0-9 3-9 8v40c0 4-5 7-8 3l-47-42-35 8zm-43-357c-152 47-272-97-439-29-13 5-19 16-19 31v173c0 23 19 37 41 31 165-50 285 94 441 29 11-5 21-16 21-31V436c-1-21-23-38-45-31zM486 567a65 65 0 110-130 65 65 0 110 130zm-2-301c0-5-5-6-8-3l-28 28c-3 3-9 2-12 0l-10-11c-3-3-2-7 1-10l68-68c3-3 6-3 10 0l67 67c3 3 4 8 1 11l-10 10c-3 3-9 2-12 0l-28-28c-3-3-8-1-8 3v73l-30-9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ejammhha6m";
freezeTemplate(tmpl);
