import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./metrics.css";

import _implicitScopedStylesheets from "./metrics.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M720 220H280c-33 0-60 27-60 60v440c0 33 27 60 60 60h440c33 0 60-27 60-60V280c0-33-27-60-60-60zM380 660c0 11-9 20-20 20h-20c-11 0-20-9-20-20V550c0-11 9-20 20-20h20c11 0 20 9 20 20zm100 0c0 11-9 20-20 20h-20c-11 0-20-9-20-20V400c0-11 9-20 20-20h20c11 0 20 9 20 20zm100 0c0 11-9 20-20 20h-20c-11 0-20-9-20-20V340c0-11 9-20 20-20h20c11 0 20 9 20 20zm100 0c0 11-9 20-20 20h-20c-11 0-20-9-20-20V470c0-11 9-20 20-20h20c11 0 20 9 20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ubckt8oa7c";
freezeTemplate(tmpl);
