import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./events.css";

import _implicitScopedStylesheets from "./events.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M714 286c-55-55-128-86-205-86-17 0-30 13-30 30s13 30 30 30c61 0 119 24 163 67 43 45 68 103 68 164 0 17 13 30 30 30s30-13 30-30c0-77-30-150-86-205zm-205 35c-17 0-30 13-30 30s13 30 30 30a110 110 0 01110 110c0 17 13 30 30 30s30-13 30-30a170 170 0 00-170-170zm-43 287l26-70c18 7 38 3 53-11 20-20 20-51 0-71a50 50 0 00-71 0 51 51 0 00-10 56l-65 29-117-117c-8-8-22-8-29 1-75 90-70 224 15 309 84 84 218 89 309 15 9-7 9-21 1-29z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6c3jloatkku";
freezeTemplate(tmpl);
