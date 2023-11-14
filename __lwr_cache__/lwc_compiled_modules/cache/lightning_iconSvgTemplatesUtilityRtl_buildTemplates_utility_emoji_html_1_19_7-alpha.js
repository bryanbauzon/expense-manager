import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./emoji.css";

import _implicitScopedStylesheets from "./emoji.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M501 260a241 241 0 11-482 0 241 241 0 01482 0zM183 158c-24 0-43 19-43 43s19 43 43 43 43-19 43-43-19-43-43-43zm155 0c-24 0-43 19-43 43s19 43 43 43 43-19 43-43-19-43-43-43zm-2 167c-20 18-47 28-76 28-28 0-54-10-75-27l-9-8c-3-2-5-3-11-3-11 0-19 9-19 19 0 5 2 10 6 14l7 6a152 152 0 00203-1l5-5c4-4 6-9 6-14 0-11-9-19-19-19-5 0-9 2-12 4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-628k7fucqt9";
freezeTemplate(tmpl);
