import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./radio_button.css";

import _implicitScopedStylesheets from "./radio_button.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M131 285c-59 0-106 47-106 105a106 106 0 00212 0c-1-58-48-105-106-105zm0 164a59 59 0 110-118 59 59 0 010 118zm258-164a106 106 0 100 212 106 106 0 000-212zM131 25a106 106 0 10106 106c-1-59-48-106-106-106zm0 164a59 59 0 110-118 59 59 0 010 118zM389 25a106 106 0 100 212 106 106 0 000-212z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-voqnmmtoav";
freezeTemplate(tmpl);
