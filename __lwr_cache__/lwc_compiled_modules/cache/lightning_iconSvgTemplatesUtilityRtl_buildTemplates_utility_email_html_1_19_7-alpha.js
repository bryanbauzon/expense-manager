import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./email.css";

import _implicitScopedStylesheets from "./email.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M249 301c6 6 15 6 21 0L496 91c4-8 3-21-13-21L36 71c-12 0-22 11-13 21zm251-128c0-10-12-16-20-9L303 327c-12 11-27 17-43 17s-31-6-43-16L41 164c-8-7-20-2-20 9-1-3-1 227-1 227a40 40 0 0040 40h400a40 40 0 0040-40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5i833f6j8oc";
freezeTemplate(tmpl);
