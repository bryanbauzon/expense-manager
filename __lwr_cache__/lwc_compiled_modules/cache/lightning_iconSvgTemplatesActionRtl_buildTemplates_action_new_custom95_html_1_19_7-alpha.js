import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom95.css";

import _implicitScopedStylesheets from "./new_custom95.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M284 102V68h8c13 0 24-10 24-24 0-13-10-24-24-24h-64c-13 0-24 10-24 24 0 13 10 24 24 24h8v34c-99 12-176 96-176 198 0 110 90 200 200 200s200-90 200-200c0-102-77-186-176-198zm-24 350c-84 0-152-68-152-152s68-152 152-152 152 68 152 152-68 152-152 152zm53-234l-37 37c-5-2-10-3-16-3-26 0-48 22-48 48s22 48 48 48 48-22 48-48c0-6-1-11-3-16l37-37c8-8 8-21 0-29s-21-8-29 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-46u4rbqii0b";
freezeTemplate(tmpl);
