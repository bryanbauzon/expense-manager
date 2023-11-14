import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./learner_program.css";

import _implicitScopedStylesheets from "./learner_program.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M368 253c29 16 58 54 70 83 2 7 9 11 17 12 8 2 15 2 23 2 13 0 23 0 34-4 30-8 55-18 78-36 36-29 48-70 34-105-43-10-94-1-130 28-10 9-18 18-25 28-19-23-41-44-67-57-17-8-39-4-49 10-7 15 0 30 15 39zm364 438c-24-9-28-19-28-29 1-5 2-11 5-15 2-5 6-9 10-12a66 66 0 0022-52c0-40-24-73-66-73s-66 33-66 73c0 10 2 19 5 28 4 9 10 17 17 24a38 38 0 0115 27c-1 10-4 20-28 30-34 16-67 34-68 65 0 21 16 43 36 43h180c20 0 36-22 34-43-1-31-34-52-68-66zm-57-280c-62-35-93-19-128-2-22 10-45 22-77 22s-55-12-77-22c-35-17-66-33-127 2-97 56-69 235-30 303 34 60 117 121 245 62l10-1-1-18v-2c1-38 23-65 43-82 11-9 22-16 34-23a129 129 0 01-18-68c0-31 9-64 31-89a128 128 0 01138-35c-10-20-24-36-44-47z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4001r90q463";
freezeTemplate(tmpl);
