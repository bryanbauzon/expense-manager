import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./transport_walking.css";

import _implicitScopedStylesheets from "./transport_walking.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M280 99a41 41 0 0046-36 40 40 0 00-40-43 42 42 0 00-46 36 40 40 0 0040 43zm-37 16a46 46 0 0130-8 48 48 0 0134 20l44 80 58 37a17 17 0 018 16 20 20 0 01-20 16 23 23 0 01-9-2l-64-41a54 54 0 01-5-6l-16-30-20 80 77 83a23 23 0 013 9l20 100v6a28 28 0 01-30 25 29 29 0 01-26-21l-20-94-61-63-14 60a76 76 0 01-6 12l-60 92a31 31 0 01-27 14 27 27 0 01-26-30 32 32 0 014-12l54-85 46-189-30 23-16 67a20 20 0 01-20 15 18 18 0 01-18-19 3 3 0 010-2l19-79a23 23 0 016-9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-26qvjecjst9";
freezeTemplate(tmpl);
