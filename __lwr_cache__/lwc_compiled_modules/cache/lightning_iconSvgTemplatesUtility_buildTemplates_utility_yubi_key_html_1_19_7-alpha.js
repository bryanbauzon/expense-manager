import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./yubi_key.css";

import _implicitScopedStylesheets from "./yubi_key.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M385 141H15c-8 0-15 7-15 15v210c0 8 7 15 15 15h370c8 0 15-7 15-15V156c0-8-7-15-15-15zM210 322c-34 0-61-27-61-61s27-61 61-61 61 27 61 61-27 61-61 61z"${3}/><path d="M505 180H360c-8 0-15 7-15 15v130c0 8 7 15 15 15h145c8 0 15-7 15-15V195c0-8-7-15-15-15zm-34 40c6 0 10 4 10 10v19h-81v-29h71zm0 80h-71v-27h81v17c0 6-4 10-10 10z"${3}/><circle cx="210" cy="261" r="12"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3qe3cvqqnrj";
freezeTemplate(tmpl);
