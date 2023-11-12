import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom56.css";

import _implicitScopedStylesheets from "./new_custom56.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M362 103c-50 50-111-11-167 45L34 308a47 47 0 000 66l56 56 56 56c18 18 48 18 66 0l162-161c56-56-6-117 45-167l13-13c3-3 3-8 0-11l-45-44c-3-3-8-3-11 0zm-39 205l-56 56c-6 6-16 6-22 0l-45-45-45-45c-6-6-6-16 0-22l56-56c6-6 16-6 22 0l45 45 45 45c7 6 7 16 0 22zM495 58l-17-17-17-17c-6-6-16-6-22 0l-21 21c-3 3-3 8 0 11l44 44c3 3 8 3 11 0l21-20c8-5 8-15 1-22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1d5qq06qo04";
freezeTemplate(tmpl);
