import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./loop.css";

import _implicitScopedStylesheets from "./loop.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M472 326l-1 2c-3 9-5 18-9 26-4 9-8 19-13 27a240 240 0 01-139 109A226 226 0 0120 271 230 230 0 01366 74a225 225 0 0155 45c8 6 13 2 13-8V36c0-8 8-16 16-16h32c9 0 16 8 17 16v196c0 8-6 14-14 14H289c-9 0-15-6-15-15v-33c0-9 8-16 16-16h75c6 0 12-2 14-5a160 160 0 1021 148s3-14 14-14h46c7 0 13 5 13 12l-1 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4vq3k0leh0m";
freezeTemplate(tmpl);
