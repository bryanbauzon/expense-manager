import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./standard_objects.css";

import _implicitScopedStylesheets from "./standard_objects.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M462 389L274 496c-10 6-23 6-33 0L54 389c-8-4-8-14 0-18l44-25a10 10 0 0110 0l114 65c11 6 23 9 36 9s25-3 36-9l114-65a10 10 0 0110 0l44 25c8 4 8 14 0 18zm0-120L274 376c-10 6-23 6-33 0L54 269c-8-4-8-14 0-18l44-25a10 10 0 0110 0l114 65c11 6 23 9 36 9s25-3 36-9l114-65a10 10 0 0110 0l44 25c8 4 8 14 0 18zm-219-13L55 149c-8-4-8-14 0-18L243 24c10-6 23-6 33 0l188 107c8 4 8 14 0 18L276 256c-10 5-23 5-33 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ittgitfg5g";
freezeTemplate(tmpl);
