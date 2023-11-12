import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom53.css";

import _implicitScopedStylesheets from "./new_custom53.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M454 316h-5c-18 0-32-14-32-33V177c0-93-82-167-175-156-80 9-139 80-139 163v95c0 20-17 37-36 37h-1c-14 0-26 12-26 26v19c0 14 12 26 26 26h388c14 0 26-12 26-26v-19c0-14-12-26-26-26zM312 436H208c-6 0-12 5-10 11 6 30 31 53 63 53s57-22 63-53c0-6-5-11-12-11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6indigkrh5v";
freezeTemplate(tmpl);
