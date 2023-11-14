import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotion_segments.css";

import _implicitScopedStylesheets from "./promotion_segments.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M516 485l-2-1zm-60 105l16-18a20 20 0 004-11l2-23a68 68 0 015-19l-21-12-25-12c-30-13-35-25-35-38a52 52 0 0118-36 95 95 0 0027-69c0-52-30-97-83-97h-6c-53 0-83 45-83 97a95 95 0 0027 69 50 50 0 0118 36c0 13-3 25-35 38-43 20-84 39-86 81 2 28 22 50 47 50h195a66 66 0 0115-36z"${3}/><path d="M495 354a170 170 0 01-23 83 18 18 0 007 26l35 21a67 67 0 0126-8l26-1a13 13 0 007-4l20-16a66 66 0 0125-13 226 226 0 00-48-28c-26-11-32-22-32-34a57 57 0 0116-33 80 80 0 0024-61c1-46-25-86-74-86a72 72 0 00-62 36c33 25 53 69 53 118zm202 306a24 24 0 1024 24 24 24 0 00-24-24zm-123-97a24 24 0 1023 24 24 24 0 00-23-24zm0 0a24 24 0 1023 24 24 24 0 00-23-24zm216 50l-17-21a39 39 0 01-9-22l-2-27a35 35 0 00-32-33l-24-2a51 51 0 01-28-12l-19-16a35 35 0 00-45 0l-20 17a46 46 0 01-26 10l-26 2a35 35 0 00-32 32l-2 23a52 52 0 01-12 29l-16 18a35 35 0 000 45l17 20a43 43 0 0110 24l2 27a35 35 0 0032 33l23 2a49 49 0 0129 12l18 16a35 35 0 0046 0l21-17a41 41 0 0123-10l27-2a35 35 0 0032-32l2-22a54 54 0 0114-31l14-17a35 35 0 000-46zm-261-26a45 45 0 1144 45 45 45 0 01-44-45zm65 144a4 4 0 01-3 2h-14a4 4 0 01-4-2 3 3 0 010-4l103-189a4 4 0 013-1h16a4 4 0 012 5zm103-3a45 45 0 1145-45 45 45 0 01-45 45zM597 587a24 24 0 10-23 23 24 24 0 0023-23z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7r5400f9os2";
freezeTemplate(tmpl);
