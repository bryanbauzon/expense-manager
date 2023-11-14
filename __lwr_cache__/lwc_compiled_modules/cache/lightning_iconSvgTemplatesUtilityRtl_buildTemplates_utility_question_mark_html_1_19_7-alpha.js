import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./question_mark.css";

import _implicitScopedStylesheets from "./question_mark.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M267 428c8 0 15 7 15 15v32c0 8-7 15-15 15h-32c-8 0-15-7-15-15v-32c0-8 7-15 15-15zm15-77c0-21 13-40 31-48h1a142.5 142.5 0 00-54-274c-72 0-132 53-142 122v1c-1 9 6 16 15 16h32c8 0 14-5 15-11v-2c7-37 40-65 79-65 45 0 81 36 81 81 0 21-8 40-21 55l-1 1c-9 10-21 16-33 20-40 14-67 52-67 94v15c0 8 6 14 14 14h32c8 0 16-6 16-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4a8fdekb154";
freezeTemplate(tmpl);
