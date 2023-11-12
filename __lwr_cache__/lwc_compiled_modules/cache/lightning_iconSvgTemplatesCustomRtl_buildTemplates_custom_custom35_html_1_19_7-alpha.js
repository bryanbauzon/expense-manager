import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom35.css";

import _implicitScopedStylesheets from "./custom35.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M69 40a3 3 0 00-3 3v5c0 8.8-7.2 16-16 16s-16-7.2-16-16v-5c0-1.7-1.3-3-3-3s-3 1.3-3 3v5a22 22 0 0019 21.8V74h-5c-1.7 0-3 1.3-3 3s1.3 3 3 3h16c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v-4.2A22 22 0 0072 48v-5a3 3 0 00-3-3zM50 58a10 10 0 0010-10V29.9a9.9 9.9 0 00-9.9-9.9h-.2a9.9 9.9 0 00-9.9 9.9V48a10 10 0 0010 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3st62qcluef";
freezeTemplate(tmpl);
