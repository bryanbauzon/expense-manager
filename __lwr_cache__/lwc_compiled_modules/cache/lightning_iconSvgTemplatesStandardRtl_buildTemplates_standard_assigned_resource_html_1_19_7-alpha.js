import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./assigned_resource.css";

import _implicitScopedStylesheets from "./assigned_resource.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M499 200a254 254 0 10252 255c0-138-112-255-252-255zm166 232L559 534c-7 7-17 1-17-12v-60c-76 0-127 51-127 128h-76a201 201 0 01203-204v-62c0-13 11-19 17-12l106 103a15 15 0 010 17zM260 642h-13a48 48 0 00-47 48v63a47 47 0 0047 47h506a48 48 0 0047-47v-63a47 47 0 00-47-48h-16a302 302 0 01-477 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-37bi3n408v2";
freezeTemplate(tmpl);
