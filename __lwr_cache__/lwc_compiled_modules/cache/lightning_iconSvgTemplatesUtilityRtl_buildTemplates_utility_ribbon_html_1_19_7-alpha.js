import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./ribbon.css";

import _implicitScopedStylesheets from "./ribbon.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M241 367l-94 133-24-64H59l82-111c16 10 33 11 45 14l11 2 8 6c9 6 21 15 36 20zm152-42c-16 10-33 11-45 14l-12 2-8 6c-9 6-20 16-35 21l94 132 24-64h64zM267 116a56 56 0 100 112 56 56 0 000-112zm152 56c0 19-21 34-28 51-7 18-3 43-17 56-13 13-38 10-56 17-17 7-32 28-51 28s-34-21-51-28c-18-7-43-3-56-17-13-13-10-38-17-56-7-17-28-32-28-51s21-34 28-51c7-18 3-43 17-56 13-13 38-10 56-17 17-7 32-28 51-28s34 21 51 28c18 7 43 3 56 17 13 13 10 38 17 56 7 17 28 32 28 51zm-48 0c0-58-46-104-104-104s-104 46-104 104 46 104 104 104 104-46 104-104z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6b9riavfh0o";
freezeTemplate(tmpl);
