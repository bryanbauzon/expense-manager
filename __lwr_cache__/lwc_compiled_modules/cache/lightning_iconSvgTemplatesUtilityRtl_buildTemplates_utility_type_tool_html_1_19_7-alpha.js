import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./type_tool.css";

import _implicitScopedStylesheets from "./type_tool.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M504 476L327 40a24 24 0 00-22-15H201a22 22 0 00-20 15L19 476a14 14 0 0013 19h60a24 24 0 0020-16l48-130h197l51 130a24 24 0 0020 16h60a15 15 0 0016-20zM190 260l57-147h13l63 147z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4pa22j2u9vn";
freezeTemplate(tmpl);
