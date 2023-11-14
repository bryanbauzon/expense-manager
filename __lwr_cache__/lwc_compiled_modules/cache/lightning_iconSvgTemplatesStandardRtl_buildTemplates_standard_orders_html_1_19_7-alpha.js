import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./orders.css";

import _implicitScopedStylesheets from "./orders.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M788 621l-36-17c-5-3-12-3-17 0L520 706c-12 6-27 6-39 0L265 604c-5-3-12-3-17 0l-36 17c-16 8-16 29 0 37l268 127c12 6 27 6 39 0l268-127c17-8 17-30 1-37zm0-140l-37-17c-5-3-12-3-17 0L520 566c-12 6-27 6-39 0L266 464c-5-3-12-3-17 0l-37 17c-16 8-16 29 0 37l268 128c12 6 27 6 39 0l268-127c17-8 17-30 1-38zM212 378l268 127c12 6 27 6 39 0l268-127c16-8 16-29 0-37L519 214c-12-6-27-6-39 0L212 342c-16 7-16 29 0 36z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1m2gme9k5jm";
freezeTemplate(tmpl);
