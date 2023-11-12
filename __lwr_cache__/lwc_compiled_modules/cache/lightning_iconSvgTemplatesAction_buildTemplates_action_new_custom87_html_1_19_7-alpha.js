import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom87.css";

import _implicitScopedStylesheets from "./new_custom87.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M456 20H64c-14 0-24 10-24 24v384c0 14 10 24 24 24h8v24c0 14 10 24 24 24h16c13 0 24-10 24-24v-24h251v24c0 14 10 24 24 24h16c13 0 24-10 24-24v-24h8c13 0 24-10 24-24V44c-3-14-13-24-27-24zM111 404c-13 0-24-10-24-24V92c0-14 10-24 24-24h299c13 0 24 10 24 24v288c0 14-10 24-24 24zm259-288H150c-9 0-16 7-16 16v208c0 9 7 16 16 16h220c9 0 16-7 16-16V132c0-9-7-16-16-16zm-37 144h-65c-9 16-27 32-49 32-30 0-53-26-53-56s24-56 53-56c22 0 41 16 49 32h64c12 0 21 12 21 24 1 12-8 24-20 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7ijk3bg30km";
freezeTemplate(tmpl);
