import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./script.css";

import _implicitScopedStylesheets from "./script.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 68c-88 0-156 69-156 157v211c0 8 7 15 15 15h167c8 0 15-7 15-15V270c0-8-7-15-15-15H342v-29c0-49 48-98 97-98h26c8 0 15-7 15-15V83c0-8-7-15-15-15zm-244 0c-88 0-156 69-156 158v211c0 8 7 15 15 15h167c8 0 15-7 15-15V270c0-8-7-15-15-15H99v-29c0-49 48-98 97-98h26c8 0 15-7 15-15V83c0-8-7-15-15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5h6o0922g0q";
freezeTemplate(tmpl);
