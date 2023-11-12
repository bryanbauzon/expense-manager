import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom19.css";

import _implicitScopedStylesheets from "./new_custom19.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M494 122c-2-6-9-7-14-3l-81 81c-6 6-16 6-22 0l-57-57c-6-6-6-16 0-22l82-81c4-4 2-11-3-14-14-4-29-6-43-6a143 143 0 00-133 198L36 404a56 56 0 000 79c11 11 26 17 40 17s29-6 40-17l186-186a143 143 0 00192-175z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-310lvf4q839";
freezeTemplate(tmpl);
