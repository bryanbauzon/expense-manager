import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom103.css";

import _implicitScopedStylesheets from "./custom103.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M761 549c-16-8-40-27-75-34 9-10 16-26 23-45 3-11 4-22 3-33 0-10 2-26 0-35-8-29-28-37-51-37s-43 8-51 37c-2 9 0 25 0 35-1 11 0 23 3 33 7 20 14 35 23 46-17 3-33 10-48 19a381 381 0 0150 26l21 11c27 13 42 27 51 39h85v-29s0-17-34-33zm-420 23l21-11a374 374 0 0151-26 164 164 0 00-50-19c9-11 16-27 23-46 4-11 5-22 4-33 0-10 2-26-1-35-8-29-28-37-51-37s-43 8-50 37c-3 9-1 25-1 34a89 89 0 003 34c7 19 14 35 23 45-35 7-58 26-75 34-33 16-33 33-33 33v29h86a131 131 0 0150-39zm309 20c-24-12-60-41-113-51 13-15 24-39 34-68 7-16 5-30 5-50 0-15 3-38-1-51-11-44-41-56-76-56-34 0-64 12-76 56-3 13 0 36 0 51 0 20-1 35 5 51 10 28 20 52 34 68-53 10-88 39-112 50-50 23-50 49-50 49v43l400 1v-44s0-26-50-49v-1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5e3iidiftem";
freezeTemplate(tmpl);
