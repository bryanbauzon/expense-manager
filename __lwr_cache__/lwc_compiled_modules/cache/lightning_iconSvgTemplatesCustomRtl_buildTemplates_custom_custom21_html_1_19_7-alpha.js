import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom21.css";

import _implicitScopedStylesheets from "./custom21.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M576 711c-3-7-10-11-18-11H442c-8 0-15 4-18 11l-27 74c-3 7 2 14 9 14h188c7 0 12-8 9-14zm164-511H260c-33 0-60 27-60 60v320c0 33 27 60 60 60h480c33 0 60-27 60-60V260c0-33-27-60-60-60zM500 620c-17 0-30-13-30-30s13-30 30-30 30 13 30 30-13 30-30 30zm240-100c0 11-9 20-20 20H280c-11 0-20-9-20-20V280c0-11 9-20 20-20h440c11 0 20 9 20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7bp1sk8foje";
freezeTemplate(tmpl);
