import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom3.css";

import _implicitScopedStylesheets from "./custom3.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 380c-66 0-120 54-120 120s54 120 120 120 120-54 120-120-54-120-120-120zm300 120c0-35-84-53-97-84-13-32 33-104 9-128s-96 22-128 9c-31-13-49-97-84-97s-53 84-84 97c-32 13-104-33-128-9s22 96 9 128c-13 31-97 49-97 84s84 53 97 84c13 32-33 104-9 128s96-22 128-9c31 13 49 97 84 97s53-84 84-97c32-13 104 33 128 9s-22-96-9-128c13-31 97-49 97-84zM500 680c-99 0-180-81-180-180s81-180 180-180 180 81 180 180-81 180-180 180z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ojvatfehp";
freezeTemplate(tmpl);
