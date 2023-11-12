import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom60.css";

import _implicitScopedStylesheets from "./new_custom60.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 222C481 108 381 20 260 20S39 108 20 222c-1 8 7 13 13 8 12-10 27-16 45-16 22 0 42 10 54 26 3 4 10 4 13 0 13-16 32-26 54-26s42 10 54 26c3 4 10 4 13 0 13-16 32-26 54-26s42 10 54 26c3 4 10 4 13 0 13-16 32-26 54-26 17 0 33 6 45 16 7 5 15 0 14-8zM356 404c-14 0-24 10-24 24s-10 24-24 24-24-10-24-24V316c0-14-10-24-24-24s-24 10-24 24v112c0 40 32 72 72 72s72-32 72-72c0-14-10-24-24-24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5s6fs7f0756";
freezeTemplate(tmpl);
