import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./goal.css";

import _implicitScopedStylesheets from "./goal.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 50v420c0 17 14 30 30 30 17 0 30-14 30-30V50c0-17-13-30-30-30s-30 13-30 30zM20 72v236c0 6 4 11 9 14 128 70 230-41 348-6 11 3 23-5 23-16V76c0-7-6-13-12-15-123-45-226 72-356 4-5-3-12 1-12 7zm39 220v-57c18 8 39 15 58 15h2v-64h-4c-19 0-38-2-56-7v-60l12 4c20 3 31 7 47 7h2v55c16 0 43-2 60-5v-57c21-3 42-9 60-14v58l4-1 56-13V95c11-3 41-5 51-4l9 1v62c-10-3-49-3-60-1v60c11-2 12-3 25-3s25 0 35 2v58l-16-1-16-1c-13 0-16 1-28 3v-57c-17 4-43 9-60 14v55l-14 4-46 9v-53c-18 4-45 7-60 7v50h-2c-27 0-43-1-53-6l-5-2zm121-111v62c17-3 33-8 48-12l12-4v-60l-60 14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-59mf1km2757";
freezeTemplate(tmpl);
