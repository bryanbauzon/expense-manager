import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_order_type.css";

import _implicitScopedStylesheets from "./work_order_type.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M125 269v-19a20 20 0 0119-19h229c10 0 19 9 19 19v19a20 20 0 01-19 19H145a20 20 0 01-19-19h-1zm38 114v-19a20 20 0 0119-19h191c10 0 19 9 19 19v19a20 20 0 01-19 19H183c-10 0-19-9-20-19zm229-229a20 20 0 01-19 19H182a20 20 0 01-19-19v-19a20 20 0 0119-19h191c10 0 19 9 19 19v19zM50 97v324c0 31 26 57 57 57h305c31 0 57-26 57-57V97c0-31-26-57-58-57H107a56 56 0 00-57 57z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1p1o0038d0h";
freezeTemplate(tmpl);
