import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./number_input.css";

import _implicitScopedStylesheets from "./number_input.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M740 800H260c-33 0-60-27-60-60V260c0-33 27-60 60-60h480c33 0 60 27 60 60v480c0 33-27 60-60 60zM281 300v400c0 11 9 20 20 20h399c11 0 20-9 20-20V300c0-11-9-20-20-20H301c-11 0-20 9-20 20zm349 128h-37l16-61v-1c0-2-2-5-5-5h-29c-2 0-4 2-5 4l-16 63h-74l16-61v-1c0-2-2-5-5-5h-29c-2 0-4 2-5 4l-16 63h-41c-2 0-4 1-5 3l-7 28v1c0 2 2 5 5 5h39l-18 71h-40c-2 0-4 1-5 3l-7 28v1c0 2 2 5 5 5h37l-16 62v1c0 2 2 5 5 5h29c2 0 4-1 5-4l16-64h73l-16 60v1c0 2 2 5 5 5h29c2 0 4-1 5-4l16-64h41c2 0 4-1 5-4l7-28v-1c0-2-2-5-5-5h-38l18-71h39c2 0 4-1 5-4l7-28c1-1-1-2-4-2zM527 536h-74l18-71h73z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3r3m60ibi1g";
freezeTemplate(tmpl);
