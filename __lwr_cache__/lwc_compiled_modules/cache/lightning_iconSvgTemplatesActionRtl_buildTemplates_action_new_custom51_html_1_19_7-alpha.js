import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom51.css";

import _implicitScopedStylesheets from "./new_custom51.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M185 65c20 14 39 46 47 71 2 6 6 10 12 10 6 2 10 2 16 2 9 0 16 0 23-3 20-7 38-16 53-31 24-25 33-60 24-89-29-9-64-1-88 24-7 7-13 15-17 24-13-20-28-38-45-49-12-7-27-3-34 9-6 11-1 25 9 32zm242 117c-81-46-98 16-167 16s-86-62-167-16c-78 45-55 192-24 248 28 49 79 99 184 51 4-2 9-2 13 0 105 48 157-3 184-51 32-56 55-203-23-248z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3e6sc7hemtf";
freezeTemplate(tmpl);
