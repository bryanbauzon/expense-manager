import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pause_alt.css";

import _implicitScopedStylesheets from "./pause_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M90 90a242 242 0 01340 0 240 240 0 11-340 0zm170-10a180 180 0 100 360 180 180 0 100-360zm-43 70c10 0 18 9 18 20v180c0 11-8 20-18 20h-34c-10 0-18-9-18-20V170c0-11 8-20 18-20zm120 0c10 0 18 9 18 20v180c0 11-8 20-18 20h-35c-10 0-17-9-17-20V170c0-11 8-20 18-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-17fbt38fspc";
freezeTemplate(tmpl);
