import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./picklist_type.css";

import _implicitScopedStylesheets from "./picklist_type.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M780 360H380c-11 0-20-9-20-20v-40c0-11 9-20 20-20h400c11 0 20 9 20 20v40c0 11-9 20-20 20zm0 180H380c-11 0-20-9-20-20v-40c0-11 9-20 20-20h400c11 0 20 9 20 20v40c0 11-9 20-20 20zm-520 0h-40c-11 0-20-9-20-20v-40c0-11 9-20 20-20h40c11 0 20 9 20 20v40c0 11-9 20-20 20zm0-180h-40c-11 0-20-9-20-20v-40c0-11 9-20 20-20h40c11 0 20 9 20 20v40c0 11-9 20-20 20zm0 360h-40c-11 0-20-9-20-20v-40c0-11 9-20 20-20h40c11 0 20 9 20 20v40c0 11-9 20-20 20zm520 0H380c-11 0-20-9-20-20v-40c0-11 9-20 20-20h400c11 0 20 9 20 20v40c0 11-9 20-20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-141udsbk2o5";
freezeTemplate(tmpl);
