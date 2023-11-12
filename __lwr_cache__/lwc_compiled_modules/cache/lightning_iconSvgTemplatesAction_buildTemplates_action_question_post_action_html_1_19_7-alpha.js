import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./question_post_action.css";

import _implicitScopedStylesheets from "./question_post_action.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M284 380h-50c-8 0-14-6-14-14v-15c0-42 27-80 67-94 12-4 23-11 32-21 50-60 4-132-56-134-22-1-43 7-59 22-13 12-21 27-23 44-1 6-7 11-15 11h-50c-9 0-16-7-15-16 4-38 21-72 48-99 32-30 73-46 117-45 83 3 151 71 154 154 3 70-40 133-105 157-9 4-15 11-15 20v15c0 9-8 15-16 15zm16 105c0 8-7 15-15 15h-50c-8 0-15-7-15-15v-50c0-8 7-15 15-15h50c8 0 15 7 15 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5j1pqh29h3d";
freezeTemplate(tmpl);
