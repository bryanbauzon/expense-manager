import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./warranty_term.css";

import _implicitScopedStylesheets from "./warranty_term.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 20c30 0 54 33 80 44s70 5 90 27 14 60 26 88 44 51 44 81-33 54-44 80-5 70-27 90-60 15-88 26-51 44-81 44-54-33-80-44-70-5-90-27-15-60-26-88-44-51-44-81 33-54 44-80 5-70 27-90 60-15 88-26 51-44 81-44zm0 76a164 164 0 10164 164A165 165 0 00260 96zm76 91l16 16a13 13 0 010 15L251 330a20 20 0 01-16 7 22 22 0 01-16-7l-55-55a10 10 0 01-1-14v-1l17-15a11 11 0 0115-1h1l39 40 86-97a11 11 0 0115 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-44lqhh9jpcj";
freezeTemplate(tmpl);
