import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./store.css";

import _implicitScopedStylesheets from "./store.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M431 295h-2a81 81 0 01-41-15l-2-1c-6-5-11-2-14-1l-1 1a85 85 0 01-52 17c-21 0-38-6-54-18-6-4-10 0-10 0a84 84 0 01-55 19c-20 0-38-6-53-18l-2-2c-5-4-10 0-10 0a87 87 0 01-51 19s-6 0-6 7v149c0 3 2 10 11 12h185c10-2 11-9 11-12V346c1-3 2-6 10-6h89c3 1 6 3 6 10v100c0 11 8 13 10 13h28c2 0 10-2 10-13V306c1-8-3-10-7-11zM232 410v3c0 4-2 10-12 10h-81c-9 0-11-4-12-8v-61c0-14 8-15 11-15h85c3 0 10 2 10 13l-1 58zm191-155c22 6 41 2 57-14 10-10 17-22 19-35v-2l-6-14a8170 8170 0 01-70-129c-3-6-10-6-12-6H106s-9 0-12 6L24 190c-2 4-4 10-4 16v2c2 14 8 26 18 35 18 16 38 20 62 12a60 60 0 0030-25l3-3c5-3 11-2 15 3 4 6 9 12 15 16a60 60 0 0056 9 53 53 0 0030-25c4-6 14-7 18 0l5 7a58 58 0 0079 11c7-5 13-11 17-18 5-6 14-6 18 0a52 52 0 0033 25h4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-33566lvla46";
freezeTemplate(tmpl);
