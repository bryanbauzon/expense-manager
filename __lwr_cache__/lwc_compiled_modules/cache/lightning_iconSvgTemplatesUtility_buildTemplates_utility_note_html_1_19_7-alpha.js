import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./note.css";

import _implicitScopedStylesheets from "./note.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M414 397l-9 9a51 51 0 01-37 15h-26a50 50 0 01-50-52v-25c0-20 9-32 14-39l108-110c3-3 6-10 6-14V98c0-26-22-48-48-48H116a50 50 0 00-48 48H52c-18 0-32 15-32 33s14 32 32 32h16v65H52c-18 0-32 14-32 32s14 32 32 32h16v65H52a32 32 0 00-32 32c0 18 14 32 32 32h16c0 32 22 48 48 48h256c26 0 48-22 48-48v-21c0-5-2-6-6-3zm-82-226c0 9-7 16-16 16H156c-9 0-16-7-16-16v-16c0-9 7-16 16-16h160c9 0 16 7 16 16v16zm-72 194c0 9-7 16-16 16h-88c-9 0-16-7-16-16v-16c0-9 7-16 16-16h88c9 0 16 7 16 16v16zm24-97c0 9-7 16-16 16H156c-9 0-16-7-16-16v-16c0-9 7-16 16-16h112c9 0 16 7 16 16v16zm211-44l-10-10c-6-6-16-6-22 0L341 340l-1 2v27c0 2 0 4 2 4h26l3-1 123-124c8-7 8-17 1-24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-e1hg8q4dnj";
freezeTemplate(tmpl);
