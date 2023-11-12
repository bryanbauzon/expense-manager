import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recipe.css";

import _implicitScopedStylesheets from "./recipe.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M312 42a22 22 0 11-22-22 22 22 0 0122 22zm-82 84a30 30 0 10-30-30 30 30 0 0030 30zm194 310L324 282v-82a21 21 0 0024-22 20 20 0 00-18-22H192a20 20 0 00-20 20 20 20 0 000 3 22 22 0 0024 22v83L96 436a43 43 0 00-2 42 40 40 0 0035 22h261a39 39 0 0035-22 40 40 0 00-1-42zM236 296v-92h48v93l48 75H189z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1p4p4f2186j";
freezeTemplate(tmpl);
