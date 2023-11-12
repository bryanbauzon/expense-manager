import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./push.css";

import _implicitScopedStylesheets from "./push.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 20H200a40 40 0 00-40 40v1c0 7 4 14 10 18l41 40c3 3 8 0 8-4 0-8 7-16 15-16h170c8 0 16 8 16 16v270c0 8-8 14-16 14H234c-8 0-14-6-14-14v-1c0-4-5-6-8-3 0 0-38 38-42 40-6 4-10 10-10 18v20a40 40 0 0039 40h240c22 0 41-18 41-40V60a40 40 0 00-40-40zM320 480c-17 0-30-13-30-30s13-30 30-30 30 13 30 30-13 30-30 30zm-44-241L151 114c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l46 46c6 6 2 17-7 17H15c-8 1-15 8-15 16v30c0 8 7 15 15 15h132c9 0 13 11 7 17l-46 46c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l126-125c5-5 5-15 0-21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6j9hm5d3gm";
freezeTemplate(tmpl);
