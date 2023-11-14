import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dashboard.css";

import _implicitScopedStylesheets from "./dashboard.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 200c-165 0-300 135-300 300s135 300 300 300 300-135 300-300-135-300-300-300zm0 80c121 0 220 99 220 220l-2 30h-89c-10 0-18 7-20 17-8 52-54 93-109 93s-101-41-109-93c-1-10-10-17-20-17h-89l-2-30c0-121 99-220 220-220zm-23 294c24 13 55 3 68-21 19-35 55-189 46-193-9-5-116 111-134 147-14 24-5 54 20 67z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4amh6ms698j";
freezeTemplate(tmpl);
