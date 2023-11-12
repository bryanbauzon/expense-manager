import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom66.css";

import _implicitScopedStylesheets from "./custom66.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M783 553L637 407a59 59 0 00-83 0L407 553a59 59 0 000 83l146 146c23 23 60 23 83 0l146-146c24-22 24-60 1-83zm-276 67a34 34 0 01-49 0 34 34 0 010-49c14-14 36-14 49 0 13 13 13 35 0 49zm113 113a34 34 0 01-49 0 34 34 0 010-49c14-14 36-14 49 0 13 13 13 35 0 49zm0-226a34 34 0 01-49 0 34 34 0 010-49c14-14 36-14 49 0 13 13 13 35 0 49zm113 113a34 34 0 01-49 0 34 34 0 010-49c14-14 36-14 49 0 14 13 14 35 0 49zM530 335v-75c0-33-27-60-60-60H260c-33 0-60 27-60 60v210c0 33 27 60 60 60h75c6 0 12-3 16-7l11-12 148-149 12-11c5-4 8-10 8-16zM285 480c-19 0-35-16-35-35s16-35 35-35 35 16 35 35-16 35-35 35zm80-80c-19 0-35-16-35-35s16-35 35-35 35 16 35 35-16 35-35 35zm80-80c-19 0-35-16-35-35s16-35 35-35 35 16 35 35-16 35-35 35z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-21m11u3mdgo";
freezeTemplate(tmpl);
