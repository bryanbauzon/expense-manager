import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./email_open.css";

import _implicitScopedStylesheets from "./email_open.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M458 281c0-8-10-13-17-7L295 409c-10 9-22 14-36 14s-26-5-36-13L78 274c-7-6-17-2-17 7-1-2-1 180-1 180 0 18 15 33 33 33h331c18 0 33-15 33-33V281zm-2-75l3-6a10 10 0 00-3-7L268 20c-5-5-12-5-17 0L65 192l-2 2v1l-1 3c0 3 1 5 3 7l185 172c5 5 12 5 17 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3eqmu751drs";
freezeTemplate(tmpl);
