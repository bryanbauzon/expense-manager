import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom39.css";

import _implicitScopedStylesheets from "./custom39.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M636 286c-2-8-11-13-19-11L214 405c-10 3-15 14-13 24l16 62c3 10 13 17 23 15l102-14c3 11 8 22 15 31l-87 236c-6 16 2 33 18 39l10 2c12 0 24-8 28-20l82-224c7 2 13 2 20 2l20-2 83 224c4 12 16 20 28 20l10-2c16-6 24-23 18-39l-87-237c11-15 18-34 18-54v-1l141-20c9-1 15-10 12-19zm163 141l-55-204c-4-16-21-26-37-22s-26 21-22 37l55 204c4 16 21 26 37 22s26-21 22-37z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-20tf1mido3b";
freezeTemplate(tmpl);
