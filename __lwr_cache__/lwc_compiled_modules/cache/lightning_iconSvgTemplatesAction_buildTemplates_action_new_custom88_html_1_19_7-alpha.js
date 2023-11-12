import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom88.css";

import _implicitScopedStylesheets from "./new_custom88.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M485 420H35c-8 0-15 6-15 14v1c0 36 45 65 80 65h320c35 0 80-29 80-65v-1c0-8-7-14-15-14zM44 372h144c9 0 16-9 16-18V79c0-4-6-6-7-2L37 359c-3 6 1 13 7 13zm224 0h200c10 0 17-9 16-18-7-58-17-237-221-333-5-2-11 1-11 7v326c0 9 7 18 16 18z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6mpd3vn43vf";
freezeTemplate(tmpl);
