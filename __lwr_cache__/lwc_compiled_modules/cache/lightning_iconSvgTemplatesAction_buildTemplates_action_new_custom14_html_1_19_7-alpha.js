import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom14.css";

import _implicitScopedStylesheets from "./new_custom14.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M484 117h-48c-10 0-21-5-29-12l-38-33c-8-7-19-12-29-12h-94c-12 0-23 5-32 14l-50 41c-4 3-4 10-1 14l15 15c10 8 24 10 34 2l44-27c6-4 14-2 18 2l138 136c3 3 6 8 6 13v36c0 10 7 20 16 20h48c9 0 16-7 16-17V133c2-10-5-16-14-16zM348 262l-86-85-24 15a74 74 0 01-87-7l-32-25c-7-6-11-12-12-21-2-9-8-14-16-14H36c-9 0-16 5-16 14v147c0 10 7 16 16 16h32c2 0 6-9 9-13 12-16 30-25 49-28 19-2 38 5 53 19l100 92c9 8 15 17 19 28 2 6 9 7 13 3l38-38c19-19 34-65 16-86zm-201 60c-10-10-26-8-34 3-9 11-7 28 3 37l100 91c5 5 11 6 18 6 6-1 12-4 16-10 9-11 7-28-3-37z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2gf2o5dmnp9";
freezeTemplate(tmpl);
