import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom83.css";

import _implicitScopedStylesheets from "./new_custom83.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M457 174c3 3 8 3 11 0l11-11c27-27 28-69 2-95l-35-35c-27-22-65-12-86 10l-11 11c-3 3-3 8 0 11zM313 98c-3-3-8-3-11 0L82 317c-12 12-21 26-26 43L21 468c-2 6-2 14 2 20 5 8 13 12 21 12l7-1 110-34c16-5 30-14 42-26l219-219c3-3 3-8 0-11zM146 419l-66 21 21-66c2-9 7-16 14-22l54 54c-7 6-15 11-23 13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-305t9pfsnqh";
freezeTemplate(tmpl);
