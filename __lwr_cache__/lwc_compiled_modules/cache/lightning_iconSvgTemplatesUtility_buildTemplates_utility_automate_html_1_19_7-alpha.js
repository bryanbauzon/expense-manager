import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./automate.css";

import _implicitScopedStylesheets from "./automate.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M261 164a97 97 0 100 194 97 97 0 000-194zm0 167a71 71 0 01-71-71c0-39 32-71 71-71s71 32 71 71a73 73 0 01-71 71zm232-10a243 243 0 000-122h-27c-4-15-10-29-17-42l19-19c-21-35-50-65-86-86l-19 19c-13-7-27-13-42-17V28a243 243 0 00-122 0v27c-14 4-28 10-41 17l-20-19a244 244 0 00-86 86l19 19c-7 13-13 27-17 42H28a235 235 0 000 121h27c4 15 10 29 17 42l-19 19c21 35 50 65 86 86l19-19c13 7 27 13 42 17v27a243 243 0 00122 0v-27c15-4 29-10 42-17l19 19c35-21 65-50 86-86l-19-19c7-13 13-27 17-42zm-58 65c-7 9-14 18-23 26l-26 23-19-19a184 184 0 01-72 30v26a198 198 0 01-70 0v-26c-26-5-51-15-72-30l-19 19a285 285 0 01-49-49l19-19a184 184 0 01-30-72H48a198 198 0 010-70h27c5-26 15-51 30-72l-19-19a285 285 0 0149-49l19 19c21-15 46-25 72-30V48a198 198 0 0170 0v27c26 5 51 15 72 30l19-19a285 285 0 0149 49l-19 19c15 21 25 46 30 72h27a198 198 0 010 70h-27c-5 26-15 51-30 72z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-h1jscv1v80";
freezeTemplate(tmpl);
