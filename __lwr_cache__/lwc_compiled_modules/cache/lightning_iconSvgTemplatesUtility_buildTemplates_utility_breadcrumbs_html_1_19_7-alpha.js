import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./breadcrumbs.css";

import _implicitScopedStylesheets from "./breadcrumbs.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M84 420a10 10 0 01-10-10V109a10 10 0 0110-10h81c4 0 9 2 12 5l116 146c4 5 4 13 0 19L176 415c-3 4-8 6-13 6zm359-170L326 105c-5-6-14-8-21-2l-23 19c-7 5-8 15-2 21l95 117-95 118c-5 6-4 16 2 21l23 19c7 5 15 4 21-2l117-146c4-8 4-15 0-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7j83cu2ha80";
freezeTemplate(tmpl);
