import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./resource_capacity.css";

import _implicitScopedStylesheets from "./resource_capacity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M499 200a254 254 0 10252 255c0-138-112-255-252-255zm177 264H493V270s69-4 131 61 52 133 52 133zM260 642h-13a48 48 0 00-47 48v63a47 47 0 0047 47h506a48 48 0 0047-47v-63a47 47 0 00-47-48h-16a302 302 0 01-477 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-71jsno3ehkp";
freezeTemplate(tmpl);
