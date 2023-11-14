import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom.css";

import _implicitScopedStylesheets from "./custom.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M792 328c-2-7-11-9-17-4L674 425c-8 8-20 8-28 0l-71-71c-8-8-8-20 0-28l102-102c5-5 3-14-4-17-17-4-35-7-53-7a180 180 0 00-167 247L220 681a71 71 0 0050 120c18 0 36-7 50-21l233-233a180 180 0 00239-219z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6c1r9ujbfkv";
freezeTemplate(tmpl);
