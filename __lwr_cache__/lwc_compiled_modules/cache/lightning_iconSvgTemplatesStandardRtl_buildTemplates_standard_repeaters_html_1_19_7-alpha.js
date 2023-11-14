import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./repeaters.css";

import _implicitScopedStylesheets from "./repeaters.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M200 269c0-20 16-36 36-36h528c20 0 36 16 36 36v240c0 20-16 36-36 36H236c-20 0-36-16-36-36zm90 360c0-16 13-30 30-30h348a30 30 0 110 60H320c-16 0-30-13-30-30zm102 78a30 30 0 100 60h204a30 30 0 100-60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ne5dhvb1po";
freezeTemplate(tmpl);
