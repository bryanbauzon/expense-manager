import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entitlement.css";

import _implicitScopedStylesheets from "./entitlement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M435 20H142a57 57 0 00-55 55H69a37 37 0 00-37 37 36 36 0 0036 38h19v74H69a37 37 0 100 74h18v72H69a37 37 0 00-37 37 36 36 0 0036 36h19a52 52 0 0055 56h293a56 56 0 0055-56V73a57 57 0 00-55-53zm-30 400a16 16 0 01-16 16H180a16 16 0 01-16-16v-16a16 16 0 0116-16h209a16 16 0 0116 16zM180 262l17-16a12 12 0 0117 0l41 40 103-101a12 12 0 0116 0l17 17a13 13 0 010 16L271 337a25 25 0 01-33 0l-58-58a10 10 0 010-17zm224-142a16 16 0 01-15 16H180a16 16 0 01-16-16v-16a16 16 0 0116-17h209a16 16 0 0116 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1093jskj15d";
freezeTemplate(tmpl);
