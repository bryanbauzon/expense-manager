import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./edit.css";

import _implicitScopedStylesheets from "./edit.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M95 334l89 89c4 4 10 4 14 0l222-223c4-4 4-10 0-14l-88-88a10 10 0 00-14 0L95 321c-4 4-4 10 0 13zM361 57a10 10 0 000 14l88 88c4 4 10 4 14 0l25-25a38 38 0 000-55l-47-47a40 40 0 00-57 0zM21 482c-2 10 7 19 17 17l109-26c4-1 7-3 9-5l2-2c2-2 3-9-1-13l-90-90c-4-4-11-3-13-1l-2 2a20 20 0 00-5 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ui47qr6crt";
freezeTemplate(tmpl);
