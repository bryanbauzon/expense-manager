import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bug.css";

import _implicitScopedStylesheets from "./bug.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M197 101h127c9 0 16-9 14-17-8-36-40-62-78-62s-70 27-78 62c-1 8 6 17 15 17zm278 207c14 0 25-11 24-25-1-13-12-23-26-23h-70v-40c46-18 79-68 79-126 0-12-8-22-20-25-15-2-28 9-28 24 0 34-16 64-39 78-9-14-24-22-41-22H165c-17 0-32 9-41 22a89 89 0 01-39-76c0-13-10-25-22-25-14-1-25 10-25 23 0 59 33 109 79 127v40H47c-13 0-25 10-25 22-1 14 10 25 24 25h72v40c-46 18-79 68-79 126 0 12 8 22 20 25 15 2 28-9 28-24 0-33 15-63 38-77 14 45 48 79 92 94 10 3 21-5 21-15V285c0-13 10-25 22-25 14-1 25 10 25 24v192c0 11 10 18 21 15 44-14 79-49 92-94 22 14 37 43 38 75 0 13 10 25 22 25 14 1 25-10 25-24 0-59-33-109-79-127v-40h71z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-p3m6bag5mf";
freezeTemplate(tmpl);
