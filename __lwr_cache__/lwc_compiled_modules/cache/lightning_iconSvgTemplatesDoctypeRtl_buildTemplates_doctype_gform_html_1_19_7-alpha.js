import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gform.css";

import _implicitScopedStylesheets from "./gform.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#5a1ba9" d="M51 0A50 50 0 000 50v539c0 28 23 51 51 51h458c28 0 51-23 51-51V203L371 0z"${3}/><path fill="#300b60" d="M560 204v10H432s-63-13-62-68c0 0 3 58 61 58z"${3}/><path fill="#ad7bee" d="M371 0v146c0 16 11 58 61 58h128z"${3}/><path fill="#fff" d="M288 407c0 4 3 7 7 7h13c4 0 7-3 7-7v-13c0-4-3-7-7-7h-13c-4 0-7 3-7 7zm-188 0c0 4 3 7 7 7h157c4 0 7-3 7-7v-13c0-4-3-7-7-7H107c-4 0-7 3-7 7zm188 63c0 4 3 7 7 7h13c4 0 7-3 7-7v-13c0-4-3-7-7-7h-13c-4 0-7 3-7 7zm-188 0c0 4 4 7 8 7h155c4 0 8-3 8-7v-13c0-4-4-7-8-7H108c-4 0-8 3-8 7zm188 62c0 4 3 7 7 7h13c4 0 7-3 7-7v-13c0-4-3-7-7-7h-13c-4 0-7 3-7 7zm-188 0c0 4 3 7 7 7h157c4 0 7-3 7-7v-13c0-4-3-7-7-7H107c-4 0-7 3-7 7z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 560 640",
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
tmpl.stylesheetToken = "lwc-73q4keldcci";
freezeTemplate(tmpl);
