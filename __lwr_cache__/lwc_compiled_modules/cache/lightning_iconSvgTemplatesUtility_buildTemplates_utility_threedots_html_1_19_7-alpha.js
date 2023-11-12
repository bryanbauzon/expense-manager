import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./threedots.css";

import _implicitScopedStylesheets from "./threedots.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M80 200c33 0 60 27 60 60s-27 60-60 60-60-27-60-60 27-60 60-60zm180 0c33 0 60 27 60 60s-27 60-60 60-60-27-60-60 27-60 60-60zm180 0c33 0 60 27 60 60s-27 60-60 60-60-27-60-60 27-60 60-60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4r84eivvie6";
freezeTemplate(tmpl);
