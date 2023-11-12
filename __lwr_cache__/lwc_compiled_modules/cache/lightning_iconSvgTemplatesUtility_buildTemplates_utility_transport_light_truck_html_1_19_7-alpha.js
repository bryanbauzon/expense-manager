import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./transport_light_truck.css";

import _implicitScopedStylesheets from "./transport_light_truck.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M484 287h-1v-41a35 35 0 00-35-35l-23-1c-10-14-22-33-32-51-19-31-40-29-40-29h-50a33 33 0 00-33 33v44H36a16 16 0 00-16 16v121a16 16 0 0016 16h28a61.7 61.7 0 00116 0h163a61.7 61.7 0 00116 0h25a16 16 0 0016-16v-41a16 16 0 00-16-16zm-362 83a30 30 0 1130-30 30 30 0 01-30 30zm180-157a15 15 0 01-13-16v-29a15 15 0 0113-15h46c14 0 23 17 23 17l15 26c5 8 5 16-13 16zm99 157a30 30 0 1130-30 30 30 0 01-30 30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-oqj48skqcb";
freezeTemplate(tmpl);
