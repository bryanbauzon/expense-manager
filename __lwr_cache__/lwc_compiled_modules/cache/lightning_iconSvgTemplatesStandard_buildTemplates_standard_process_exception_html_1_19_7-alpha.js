import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./process_exception.css";

import _implicitScopedStylesheets from "./process_exception.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M218 399h94a24 24 0 0012-7l84-105a15 15 0 0124 0l84 105a15 15 0 0012 5h96a16 16 0 0016-16V250a47 47 0 00-47-47H249a47 47 0 00-47 47v133a16 16 0 0016 16zm399 86a100 100 0 0122-3v-22a16 16 0 00-16-16h-94a27 27 0 00-12 6l-84 105a15 15 0 01-24 0l-85-105a15 15 0 00-12-5h-94a16 16 0 00-16 16v133a47 47 0 0047 47h243l65-111a104 104 0 0160-45zm167 244L684 556a47 47 0 00-17-17 42 42 0 00-24-7 50 50 0 00-13 2 48 48 0 00-28 22L501 729a42 42 0 00-7 23 47 47 0 0047 48h203a51 51 0 0024-7 46 46 0 0021-28 45 45 0 00-5-36zm-142 30a22 22 0 01-22-21 24 24 0 0110-19 22 22 0 1112 40zm22-65a7 7 0 01-7 7h-29a7 7 0 01-7-7v-94a7 7 0 017-7h29a7 7 0 017 7z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-6rja2n0bb3h";
freezeTemplate(tmpl);
