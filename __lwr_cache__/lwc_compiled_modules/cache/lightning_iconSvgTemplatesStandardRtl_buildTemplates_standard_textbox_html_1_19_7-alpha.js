import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./textbox.css";

import _implicitScopedStylesheets from "./textbox.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M200 740V260c0-33 27-60 60-60h480c33 0 60 27 60 60v480c0 33-27 60-60 60H260c-33 0-60-27-60-60zm499-460H300c-11 0-20 9-20 20v400c0 11 9 20 20 20h399c11 0 20-9 20-20V300c0-11-9-20-20-20zm-81 359h-40c-11 0-20-9-20-20V381c0-11 9-20 20-20h40c11 0 20 9 20 20v238c0 11-9 20-20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6dikefekm50";
freezeTemplate(tmpl);
