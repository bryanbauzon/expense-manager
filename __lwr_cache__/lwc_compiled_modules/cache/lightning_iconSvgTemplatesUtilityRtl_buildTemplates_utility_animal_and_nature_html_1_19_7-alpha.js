import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./animal_and_nature.css";

import _implicitScopedStylesheets from "./animal_and_nature.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M174 46a243 243 0 0186-15c30 0 59 5 86 15a50 50 0 0189 47c12 10 20 43 25 97 4 30 30 121 30 140 1 80-76 136-230 170-153-33-230-90-230-170 1-20 25-109 30-140 6-53 15-85 26-96a50 50 0 0188-48zm36 181a40 40 0 00-28 41l4 62a74.5 74.5 0 00148.7 0l4-61a40 40 0 00-28-41 182 182 0 00-53-8c-17 0-32 2-47 7zm150 3c17 0 30-18 30-40s-13-40-30-40-30 18-30 40 13 40 30 40zm-200 0c17 0 30-18 30-40s-13-40-30-40-30 18-30 40 13 40 30 40zm131 47a41 41 0 01-64 0c-17-20-3-37 32-37s49 17 32 37z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1sufae8tkap";
freezeTemplate(tmpl);
