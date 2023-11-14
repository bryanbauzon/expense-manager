import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./metrics.css";

import _implicitScopedStylesheets from "./metrics.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M449 20H71a51 51 0 00-51 51v377c0 29 23 52 51 52h377c28 0 51-23 51-51V71a50 50 0 00-50-51zM157 397c0 9-8 17-17 17h-17c-9 0-17-8-17-17v-94c0-9 8-17 17-17h17c9 0 17 8 17 17zm86 0c0 9-8 17-17 17h-17c-9 0-17-8-17-17V174c0-9 8-17 17-17h17c9 0 17 8 17 17zm86 0c0 9-8 17-17 17h-17c-9 0-17-8-17-17V123c0-9 8-17 17-17h17c9 0 17 8 17 17zm85 0c0 9-8 17-17 17h-17c-9 0-17-8-17-17V234c0-9 8-17 17-17h17c9 0 17 8 17 17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2t8p1eq32e2";
freezeTemplate(tmpl);
