import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom52.css";

import _implicitScopedStylesheets from "./new_custom52.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M499 141c2-26 0-51-4-76-3-21-19-37-40-40-26-4-50-6-76-4-7 0-10 9-6 14l112 112c6 4 14 0 14-6zM310 38c-4-4-10-6-15-4A373 373 0 0035 291c-2 6 0 12 4 16l174 174c4 4 10 6 16 4a377 377 0 00257-260c2-6 0-11-4-15zm-67 314c-10 10-25 10-34 0l-45-45c-10-10-10-25 0-34 10-10 25-10 34 0l45 45c10 10 10 25 0 34zm56-56c-10 10-25 10-34 0l-45-45c-10-10-10-25 0-34 10-10 25-10 34 0l45 45c10 10 10 25 0 34zm56-56c-10 10-25 10-34 0l-45-45c-10-10-10-25 0-34 10-10 25-10 34 0l45 45c10 10 10 25 0 34zM21 374c-2 27-1 54 4 82 3 21 19 37 40 40 27 4 54 6 82 4 7-1 10-9 6-14L34 368c-4-4-13-1-13 6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7i4ef8glh76";
freezeTemplate(tmpl);
