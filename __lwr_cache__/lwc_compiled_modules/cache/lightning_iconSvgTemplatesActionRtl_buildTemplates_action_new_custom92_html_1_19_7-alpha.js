import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom92.css";

import _implicitScopedStylesheets from "./new_custom92.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M450 311l-182-83c-5-2-10-2-14 0L70 311c-10 5-14 17-7 26 19 27 31 62 36 78 2 6 7 10 13 12 63 15 115 51 137 68 6 5 15 5 22 0 22-17 74-53 137-68 6-2 11-6 13-12 5-17 17-52 36-78 6-8 3-21-7-26zm-238 45c-14 0-24-14-24-32s10-32 24-32 24 14 24 32-10 32-24 32zm96 0c-14 0-24-14-24-32s10-32 24-32 24 14 24 32-10 32-24 32zM135 229l98-45a62 62 0 0155 1l97 45c6 2 11-2 11-7v-36c0-4-2-8-5-11-6-7-19-19-43-19v-47c0-6-3-11-8-14-9-5-24-12-48-16V36c0-9-7-16-16-16h-32c-9 0-16 7-16 16v43c-24 4-39 11-48 16-5 2-8 8-8 14v47c-24 0-37 12-43 18-3 3-5 7-5 11v36c0 6 6 10 11 8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5ai2ervr4rf";
freezeTemplate(tmpl);
