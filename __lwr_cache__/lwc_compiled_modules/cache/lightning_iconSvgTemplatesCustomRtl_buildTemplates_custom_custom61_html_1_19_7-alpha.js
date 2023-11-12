import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom61.css";

import _implicitScopedStylesheets from "./custom61.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M73 20h-4a2 2 0 00-2 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v10a6 6 0 006 6h38a6 6 0 006-6V22a2 2 0 00-2-2zm-4.5 25.7c-.1-1-1-1.7-2-1.7h-33c-1 0-1.9.7-2 1.7l-4.5 32a2 2 0 002 2.3h12.9c1.1 0 2.1-.9 2.1-2v-9.7c0-3.3 2.5-6.2 5.8-6.2a6 6 0 016.2 6v10c0 1.1 1 2 2.1 2H71a2 2 0 002-2.3l-4.5-32.1z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-rhann88vtn";
freezeTemplate(tmpl);
