import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotion_tiers.css";

import _implicitScopedStylesheets from "./promotion_tiers.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M516 486l-2-2 2 1zm58 77c-5 0-9 1-13 4-4 2-7 6-9 10a23 23 0 005 26 23 23 0 0036-4c3-4 4-8 4-13 0-6-3-12-7-16-4-5-10-7-16-7zm215 47l-18-18c-5-7-8-14-9-22l-2-27a35 35 0 00-31-33l-23-2c-11-1-21-5-29-12l-18-15a35 35 0 00-46 0l-19 16c-8 6-17 10-26 10l-25 2a35 35 0 00-32 32l-2 23c-1 10-5 20-12 28l-16 18a35 35 0 000 45l17 20c6 7 9 15 10 24l2 26a35 35 0 0031 33l24 3c10 0 20 5 28 12l18 15a35 35 0 0045 0l21-17c7-5 15-9 23-9l27-2c8-1 16-4 22-10s9-14 10-22l2-22c1-11 6-23 13-31l15-17c5-6 8-14 8-23s-3-19-8-25zm-260-23a44 44 0 0153-44 45 45 0 0135 35c2 9 1 18-2 26a45 45 0 01-41 27c-12 0-23-4-32-13-8-8-13-19-13-31zm65 143l-2 1-1 1h-14l-2-1-2-1a3 3 0 010-4l103-188 1-1h17l2 2v3zm103-3a44 44 0 01-44-54 45 45 0 0135-35c8-1 17 0 26 3a45 45 0 0127 41 45 45 0 01-44 45zm0-68c-5 0-10 1-13 4-4 3-7 6-9 10s-2 9-1 14c1 4 3 9 6 12a23 23 0 0036-4c3-3 4-8 4-13 0-6-3-12-7-16-4-5-10-7-16-7zm-468-42h214c3-10 7-19 14-26l16-19c2-2 3-6 4-9l1-23 1-1c0-8 3-15 6-23H233l-31 53c-13 21 2 48 27 48zm292-134H253l59-101h256l39 66c-5 3-9 5-13 9l-20 16c-2 2-4 3-7 3l-25 2c-7 0-14 2-21 5zM332 348l80-135c12-21 43-21 56 0l80 135z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-128gmhbehi4";
freezeTemplate(tmpl);
