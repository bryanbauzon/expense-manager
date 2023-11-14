import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./today.css";

import _implicitScopedStylesheets from "./today.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 200c-165 0-300 135-300 300s135 300 300 300 300-135 300-300-135-300-300-300zm0 540c-132 0-240-108-240-240s108-240 240-240 240 108 240 240-108 240-240 240zm30-252V360c0-11-9-20-20-20h-20c-11 0-20 9-20 20v140c0 8 3 16 9 21l96 96c8 8 20 8 28 0l14-14c8-8 8-20 0-28z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3371nhiev46";
freezeTemplate(tmpl);
