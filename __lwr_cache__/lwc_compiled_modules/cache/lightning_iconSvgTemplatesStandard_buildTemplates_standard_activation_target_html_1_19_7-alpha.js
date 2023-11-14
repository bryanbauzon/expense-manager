import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./activation_target.css";

import _implicitScopedStylesheets from "./activation_target.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M750 204H578a50 50 0 00-50 50v170a50 50 0 0050 50h172a50 50 0 0050-50V254a50 50 0 00-50-50zm-10 60v150H588V264zM280 510a16 16 0 00-16 17v35a16 16 0 0016 16h62a11 11 0 018 4 12 12 0 011 17L205 743a17 17 0 00-1 24l25 25a21 21 0 0026 0l146-145a9 9 0 016-3 13 13 0 0114 11l1 52a16 16 0 0016 17h36a17 17 0 0016-16V528a17 17 0 00-17-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3sps0r9kcqk";
freezeTemplate(tmpl);
