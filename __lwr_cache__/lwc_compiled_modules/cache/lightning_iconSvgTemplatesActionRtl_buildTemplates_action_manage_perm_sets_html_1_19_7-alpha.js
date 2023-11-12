import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./manage_perm_sets.css";

import _implicitScopedStylesheets from "./manage_perm_sets.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M450 20H70c-28 0-50 22-50 50v380c0 27 22 50 50 50h380c27 0 50-22 50-50V70c0-28-22-50-50-50zm-16 430H86c-9 0-16-7-16-16V86c0-9 7-16 16-16h348c9 0 16 7 16 16v348c0 9-7 16-16 16zM219 119h-83c-9 0-17 7-17 17v83c0 9 7 17 17 17h83c9 0 17-7 17-17v-83c-1-9-8-17-17-17zm165 0h-83c-9 0-17 7-17 17v83c0 9 7 17 17 17h83c9 0 17-7 17-17v-83c0-9-8-17-17-17zM219 285h-83c-9 0-17 7-17 17v83c0 9 7 17 17 17h83c9 0 17-7 17-17v-83c-1-10-8-17-17-17zm165 0h-83c-9 0-17 7-17 17v83c0 9 7 17 17 17h83c9 0 17-7 17-17v-83c0-10-8-17-17-17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5kf21e4r136";
freezeTemplate(tmpl);
