import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./qualifications.css";

import _implicitScopedStylesheets from "./qualifications.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M444 624a5 5 0 01-4 2h-18a5 5 0 01-4-2 4 4 0 010-5l130-239a5 5 0 014-2h19a5 5 0 013 6zm-25-208a26 26 0 11-27 26 26 26 0 0127-27m0-34a61 61 0 1060 61 61 61 0 00-60-61zm385 119a16 16 0 00-12 5L622 692a6 6 0 01-4 2 5 5 0 01-4-2l-58-57a16 16 0 00-23 0l-23 23a16 16 0 000 24l91 89a28 28 0 0019 8 27 27 0 0020-9l200-220a16 16 0 00-1-23l-24-22a16 16 0 00-11-5zm-49-20l-20 23-13-15-4-5-25-29a93 93 0 01-21-54l-3-43a23 23 0 00-20-21l-38-3a111 111 0 01-64-27l-28-25a22 22 0 00-29 0l-31 26a104 104 0 01-60 24l-40 3a22 22 0 00-21 20l-3 37a111 111 0 01-27 64l-24 29a22 22 0 000 29l26 32a100 100 0 0123 57l3 41a22 22 0 0020 21l37 3a112 112 0 0164 28l28 24a8 8 0 002 1l34 33a56 56 0 01-20 4 55 55 0 01-37-13l-28-25a78 78 0 00-46-19l-37-3a55 55 0 01-50-52l-3-41a67 67 0 00-15-38l-27-32a55 55 0 011-72l24-28a80 80 0 0020-46l2-37a55 55 0 0152-50l40-2a72 72 0 0040-17l31-26a55 55 0 0172 1l29 25a78 78 0 0045 19l37 3a55 55 0 0150 51l3 43a60 60 0 0015 35l28 33a53 53 0 018 14zM544 586a60 60 0 0143 18l15 14a61 61 0 0034-55v1a61 61 0 00-61-61 61 61 0 00-54 88 59 59 0 0123-5zm5-23a26 26 0 110 1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6j627fvn8i0";
freezeTemplate(tmpl);
