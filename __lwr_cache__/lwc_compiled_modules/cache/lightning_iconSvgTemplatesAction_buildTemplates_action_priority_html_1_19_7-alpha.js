import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./priority.css";

import _implicitScopedStylesheets from "./priority.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M90 35c0-8-7-15-15-15H45c-8 0-15 7-15 15v450c0 8 7 15 15 15h30c8 0 15-7 15-15zm385 42c-160 84-142-88-335-21-6 2-10 8-10 14v233c0 7 7 12 13 9 192-64 172 112 339 18 5-3 8-8 8-13V85c0-7-8-12-15-8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-73um11mf9e6";
freezeTemplate(tmpl);
