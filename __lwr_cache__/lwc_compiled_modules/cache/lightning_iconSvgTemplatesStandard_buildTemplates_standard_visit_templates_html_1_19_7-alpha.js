import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./visit_templates.css";

import _implicitScopedStylesheets from "./visit_templates.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M300 580c-11 0-20-9-20-20v-20c0-11 9-20 20-20h200c5 0 9 2 13 5 32-35 77-59 127-64V260c0-33-27-60-60-60H260c-33 0-60 27-60 60v340c0 33 27 60 60 60h200c0-28 6-55 17-80zm-20-280c0-11 9-20 20-20h200c11 0 20 9 20 20v20c0 11-9 20-20 20H300c-11 0-20-9-20-20zm0 120c0-11 9-20 20-20h240c11 0 20 9 20 20v20c0 11-9 20-20 20H300c-11 0-20-9-20-20zm380 100c-77 0-140 63-140 140s63 140 140 140 140-63 140-140-63-140-140-140zm79 105l-89 97c-4 4-8 6-14 6-5 0-10-2-14-6l-48-47c-4-4-4-10 0-13l14-13c4-4 10-4 14 0l34 34 75-84c4-4 10-4 14 0l14 13c3 3 3 10 0 13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1g61d25u5vs";
freezeTemplate(tmpl);
