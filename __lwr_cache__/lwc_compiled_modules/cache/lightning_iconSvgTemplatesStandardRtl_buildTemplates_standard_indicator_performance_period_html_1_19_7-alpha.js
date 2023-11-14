import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./indicator_performance_period.css";

import _implicitScopedStylesheets from "./indicator_performance_period.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M800 464l-14-21-41 18a308 308 0 00-252-149c-151 0-293 139-293 286v9l1 12h72l-1-12v-9c0-118 99-215 221-215a223 223 0 01190 105l-141 61a82 82 0 00-90-10 78 78 0 00-34 106 82 82 0 00109 34 78 78 0 0043-78l131-78c9 24 14 50 14 75v9l-1 12h72v-12a254 254 0 00-26-119z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5ldvt8o88hl";
freezeTemplate(tmpl);
