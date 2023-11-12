import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom51.css";

import _implicitScopedStylesheets from "./custom51.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M405 256c25 17 50 58 60 89 2 7 8 12 15 13 7 2 13 2 20 2 11 0 20 0 29-4 26-9 48-20 67-39 31-31 42-75 30-112-37-11-81-1-112 30-9 9-16 19-22 30-16-25-35-47-57-61-15-9-34-4-43 11-6 15 0 32 13 41zm307 146c-103-58-125 20-212 20s-109-78-212-20c-100 57-71 241-31 310 36 61 101 124 234 64 5-2 12-2 17 0 133 60 199-3 234-64 41-69 70-254-30-310z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-72cmbg8p1n9";
freezeTemplate(tmpl);
