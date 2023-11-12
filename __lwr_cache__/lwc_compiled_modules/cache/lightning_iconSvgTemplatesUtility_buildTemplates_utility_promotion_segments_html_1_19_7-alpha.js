import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotion_segments.css";

import _implicitScopedStylesheets from "./promotion_segments.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M273 248l-2-1zm-48 84l12-15a16 16 0 004-9l1-18a53 53 0 014-16l-16-9-21-10c-24-10-28-20-28-30a42 42 0 0115-28 77 77 0 0021-56c0-41-24-77-66-77h-5c-42 0-66 36-66 76a76 76 0 0021 56 40 40 0 0115 28c0 10-3 20-28 30-35 17-67 33-68 66 2 23 18 40 38 40h155a53 53 0 0113-28z"${3}/><path d="M256 143a137 137 0 01-19 67 14 14 0 006 20c9 5 19 10 28 17a53 53 0 0120-6l20-1a10 10 0 007-3l15-13a55 55 0 0120-10 179 179 0 00-38-23c-20-9-25-17-25-27a46 46 0 0113-26 64 64 0 0020-50c0-36-20-68-60-68a58 58 0 00-50 28 117 117 0 0143 95zm162 245a19 19 0 1018 18 19 19 0 00-18-18zm-99-77a19 19 0 1018 18 19 19 0 00-18-18zm0 0a19 19 0 1018 18 19 19 0 00-18-18zm173 40l-14-18a30 30 0 01-7-17l-2-22a28 28 0 00-25-26l-19-2a40 40 0 01-23-10l-15-12a28 28 0 00-36 0l-16 13a36 36 0 01-21 8l-20 2a28 28 0 00-26 25l-1 19a41 41 0 01-10 23l-13 14a28 28 0 000 37l14 16a34 34 0 018 20l1 21a28 28 0 0026 26l19 1a39 39 0 0123 10l14 13a28 28 0 0037 0l16-14a32 32 0 0118-8l22-2a28 28 0 0026-25l2-17a44 44 0 0111-26l11-13a28 28 0 000-37zm-209-22a36 36 0 1136 36 36 36 0 01-36-36zm52 116a3 3 0 01-3 1h-11a3 3 0 01-3-1 3 3 0 010-3l83-151a4 4 0 012-2h13a3 3 0 011 4zm83-3a36 36 0 1136-36 36 36 0 01-36 36zm-80-113a19 19 0 10-19 19 19 19 0 0018-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5n3pvqf23d7";
freezeTemplate(tmpl);
