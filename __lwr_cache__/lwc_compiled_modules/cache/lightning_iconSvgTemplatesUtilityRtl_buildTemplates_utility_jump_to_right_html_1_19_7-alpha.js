import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./jump_to_right.css";

import _implicitScopedStylesheets from "./jump_to_right.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M215 406L79 271a16 16 0 010-22l136-135a16 16 0 0122 0l22 22a16 16 0 010 22l-94 91a16 16 0 000 22l93 91a16 16 0 010 22l-22 22a17 17 0 01-21 0zm181 0L258 271a16 16 0 010-22l138-135a16 16 0 0122 0l22 22a16 16 0 010 22l-94 91a16 16 0 000 22l93 91a16 16 0 010 22l-22 22a17 17 0 01-21 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4kdhe0j9g0j";
freezeTemplate(tmpl);
