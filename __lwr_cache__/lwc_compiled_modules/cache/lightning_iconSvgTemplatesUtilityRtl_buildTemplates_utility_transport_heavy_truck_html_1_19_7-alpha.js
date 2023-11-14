import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./transport_heavy_truck.css";

import _implicitScopedStylesheets from "./transport_heavy_truck.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M484 302h-1v-40a35 35 0 00-35-36h-23l-32-52c-18-30-40-28-40-28h-78v-28a16 16 0 00-16-16H36a16 16 0 00-16 16v241a16 16 0 0016 16h28a61.6 61.6 0 00116.4 0h163a61.6 61.6 0 00116.4 0h25a16 16 0 0015.2-15v-40a16 16 0 00-16-17zm-362 83a30 30 0 1130-30 30 30 0 01-30 30zm180-158a15 15 0 01-13-16v-27a15 15 0 0113-16h46c14 0 23 17 23 17l15 26c5 8 5 16-13 16zm99 158a30 30 0 1130-30 30 30 0 01-30 30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-30p5u1cgrcu";
freezeTemplate(tmpl);
