import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recall.css";

import _implicitScopedStylesheets from "./recall.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M264 285c-6 6-6 16 0 22l22 22c6 6 16 6 22 0l141-141c6-6 6-16 0-22L309 25c-6-6-16-6-22 0l-22 22c-6 6-6 16 0 22l59 58c17 19-10 18-10 18h-83c-99 1-183 82-181 181 2 96 80 174 177 174h36c9 0 16-8 16-16v-31c0-9-8-16-16-16h-34c-60 0-112-44-118-103-6-69 48-126 115-126h90c7 2 10 12 5 18z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-225fj0b9s1m";
freezeTemplate(tmpl);
