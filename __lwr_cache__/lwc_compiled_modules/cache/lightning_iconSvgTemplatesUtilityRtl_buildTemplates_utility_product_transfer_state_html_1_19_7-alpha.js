import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_transfer_state.css";

import _implicitScopedStylesheets from "./product_transfer_state.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M230 24a14 14 0 0120 0l108 104a13 13 0 010 20L250 252a14 14 0 01-20 0l-20-20a13 13 0 010-20l34-32a9 9 0 00-7-15H55a15 15 0 01-15-15v-28a15 15 0 0115-12h182a9 9 0 007-15l-34-33a13 13 0 010-20zm-58 244a14 14 0 00-20 0L44 372a13 13 0 000 20l108 104a14 14 0 0020 0l20-20a13 13 0 000-19l-34-33a9 9 0 017-15h87a134 134 0 01-4-29 127 127 0 013-26h-87a9 9 0 01-6-16l34-32a13 13 0 000-20zm108 112a96 96 0 1196 96 96 96 0 01-96-96zm156-22l-64 64a11 11 0 01-9 4 11 11 0 01-9-4l-30-31a6 6 0 010-9l8-8a6 6 0 018 0l23 22 55-55a6 6 0 019 0l9 9a6 6 0 010 8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-130ebomuiqv";
freezeTemplate(tmpl);
