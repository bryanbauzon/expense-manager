import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./spacer.css";

import _implicitScopedStylesheets from "./spacer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M3 1v16a2 2 0 002 2h42a2 2 0 002-2V1h-4v14H7V1zm46 50V35a2 2 0 00-2-2H5a2 2 0 00-2 2v16h4V37h38v14zM12 28H4v-4h8zm4 0h8v-4h-8zm20 0h-8v-4h8zm4 0h8v-4h-8z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-390vh0lhl0g";
freezeTemplate(tmpl);
