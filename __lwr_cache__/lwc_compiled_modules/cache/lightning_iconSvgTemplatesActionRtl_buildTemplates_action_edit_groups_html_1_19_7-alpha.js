import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./edit_groups.css";

import _implicitScopedStylesheets from "./edit_groups.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M394 315c-2-2-6-2-8 0L269 432l-17 58c-2 6 4 11 10 10l59-17 117-117c2-2 2-6 0-8zm100-35l-22-22c-8-8-21-8-29 0l-20 21c-2 2-2 6 0 8l42 42c2 2 6 2 8 0l21-20c8-8 8-21 0-29zM260 137c0 22-6 43-18 61-4 6-2 15 5 19 22 11 47 25 61 49 2 4 7 5 11 5h28c18 0 30-12 30-31-1-28-29-45-59-58-21-9-24-17-24-26s6-17 13-24c12-11 19-27 19-46-1-36-22-66-59-66-22 0-39 11-48 27 25 19 41 51 41 90zm15 166c-1-32-33-46-67-61-23-10-27-19-27-29s6-20 14-27c14-13 21-31 21-52 0-39-23-73-65-73h-4c-42 0-65 34-65 73 0 21 7 39 21 52 8 7 14 17 14 27s-4 19-27 29c-34 15-66 30-67 61 2 21 17 37 37 37h180c20 0 35-16 35-37z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2obs5aar3vo";
freezeTemplate(tmpl);
