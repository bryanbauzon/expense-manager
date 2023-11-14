import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_preference.css";

import _implicitScopedStylesheets from "./shift_preference.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M720 260h-50v-20a40 40 0 00-80 0v20H410v-20a40 40 0 00-80 0v20h-50a60 60 0 00-60 60v20a20 20 0 0020 20h520a20 20 0 0020-20v-20a60 60 0 00-60-60zm40 160H240a20 20 0 00-20 20v300a60 60 0 0060 60h440a60 60 0 0060-60V440a20 20 0 00-20-20zM500 759a149 149 0 11149-149 149 149 0 01-149 149zm-68-87a17 17 0 01-19 16h-12a7 7 0 01-7-6v-92c0-4 3-6 7-6h24a7 7 0 017 6zm172-18c0 35-33 38-69 38-33 0-45-11-77-12a7 7 0 01-6-6v-80c0-4 3-6 7-6a42 42 0 0040-42v-24c0-4 3-6 7-6h12a17 17 0 0119 16v41a17 17 0 0019 16h28a18 18 0 0119 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7r4pcpeqg69";
freezeTemplate(tmpl);
