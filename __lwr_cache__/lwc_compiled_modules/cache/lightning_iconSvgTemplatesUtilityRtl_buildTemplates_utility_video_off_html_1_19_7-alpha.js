import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./video_off.css";

import _implicitScopedStylesheets from "./video_off.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M497 46l-23-22a18 18 0 00-25 3L344 132l-23 23H92a21 21 0 00-21 21v168a21 21 0 0021 21h19l-84 85a20 20 0 00-3 25l22 22a18 18 0 0024-2L494 70a18 18 0 004-25zM327 360a21 21 0 0021-21v-43l86 61a9 9 0 0016-7V178L269 360z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-40dfehhvmp0";
freezeTemplate(tmpl);
