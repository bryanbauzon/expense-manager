import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./survey.css";

import _implicitScopedStylesheets from "./survey.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M52 30h356a33 33 0 0132 33v34a33 33 0 01-32 33H52a33 33 0 01-32-33V63a33 33 0 0132-33zm0 150h196a33 33 0 0132 33v34a33 33 0 01-31 33H50a33 33 0 01-30-33v-34a33 33 0 0132-33zm338 100a110 110 0 11-110 110 110 110 0 01110-110zm70 80a8 8 0 000-10l-11-10a8 8 0 00-11 0l-60 66-28-26a8 8 0 00-10 0l-12 10a7 7 0 000 10l38 38a16 16 0 0012 5 14 14 0 0010-5zM52 330h186a161 161 0 00-10 50 171 171 0 004 50H52a33 33 0 01-32-33v-34a33 33 0 0132-33z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7lcm971nmji";
freezeTemplate(tmpl);
