import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./impact_strategy.css";

import _implicitScopedStylesheets from "./impact_strategy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M770 200H230c-17 0-30 13-30 30v119c0 17 13 30 30 30h540c17 0 30-13 30-30V230c0-17-13-30-30-30zm-221 90c0 27-22 49-49 49a50 50 0 1149-51zm221 120H230c-17 0-30 13-30 30v119c0 17 13 30 30 30h540c17 0 30-13 30-30V440c0-17-13-30-30-30zm-301 89c1 27-20 49-46 50h-3a50 50 0 1149-51zm150 0c1 27-20 49-46 50h-3a50 50 0 1149-51zm151 121H230c-17 0-30 13-30 30v120c0 17 13 30 30 30h540c17 0 30-13 30-30V650c0-17-13-30-30-30zm-371 89c1 27-20 49-46 50h-3a50 50 0 1149-51zm150 0c1 27-20 49-46 50h-3a50 50 0 1149-51zm150 0c1 27-20 49-46 50h-3a50 50 0 1149-51z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-38eunonhv1a";
freezeTemplate(tmpl);
