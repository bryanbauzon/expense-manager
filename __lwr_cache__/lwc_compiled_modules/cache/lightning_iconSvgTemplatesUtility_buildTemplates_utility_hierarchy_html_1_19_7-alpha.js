import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hierarchy.css";

import _implicitScopedStylesheets from "./hierarchy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M231 230H108c-7 0-14 6-14 13v105H53c-7 0-14 7-14 14v100c0 7 7 14 14 14h137c7 0 14-7 14-14V362c0-7-7-14-14-14h-41v-64h219v64h-41c-7 0-14 7-14 14v100c0 7 7 14 14 14h137c7 0 13-7 13-14V362c0-7-6-14-13-14h-42V243c0-7-7-13-14-13H286v-64h41c7 0 13-7 13-14V52c0-7-6-14-13-14H190c-7 0-14 7-14 14v100c0 7 7 14 14 14h42v64z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-52sdgairhuo";
freezeTemplate(tmpl);
