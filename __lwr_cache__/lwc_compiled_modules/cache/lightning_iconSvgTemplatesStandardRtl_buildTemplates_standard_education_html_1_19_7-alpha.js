import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./education.css";

import _implicitScopedStylesheets from "./education.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M499 511c-15 1-29-5-44-10l-236-79-13-7c-5-4-5-9 0-13 4-3 9-6 14-7l252-76c19-6 38-6 58 0l250 75 15 7c6 4 6 10 0 14l-12 6-251 83c-11 5-21 7-33 7zm-166 4c-12-3-15 5-15 11v95c0 11 4 18 11 25l9 7c20 14 43 23 67 29a363 363 0 00234-16c13-6 25-13 34-23 6-6 9-12 8-21l1-92c0-17-12-15-17-14l-133 44c-22 7-43 7-65 0zm416-29c-4 1-5 3-5 7v84l-2 9-18 45c-5 14-2 28 8 39l11 10c4 3 10 5 15 6 9 1 16-4 22-9l9-9c7-9 9-22 6-34-4-17-11-32-19-47-2-3-3-7-3-10v-92c0-6-5-5-7-4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2efs54binfv";
freezeTemplate(tmpl);
