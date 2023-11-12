import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./event_ext.css";

import _implicitScopedStylesheets from "./event_ext.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M498 325a14 14 0 00-14-15H364a14 14 0 00-14 14v16a14 14 0 0014 14h61L315 464a14 14 0 000 20l10 10a15 15 0 0011 5 13 13 0 0010-4l110-110v60a14 14 0 0014 14h15a14 14 0 0015-14zM35 125h319a12 12 0 0012-12v-13a38 38 0 00-38-37h-30V50a24.5 24.5 0 00-49 0v13H140V50a25 25 0 00-50 0v13H59a37 37 0 00-37 37v13a12 12 0 0012 12zm330 126v-78a13 13 0 00-12-12H35a12 12 0 00-13 12v185a37 37 0 0037 37h185a168 168 0 01121-145zm-110-28a12 12 0 0112-13h25a12 12 0 0112 12v25a12 12 0 01-11 13h-26a13 13 0 01-12-12zM133 333a12 12 0 01-13 12H97a12 12 0 01-13-12v-25a13 13 0 0112-12h24a13 13 0 0113 12zm0-86a12 12 0 01-12 13H96a13 13 0 01-13-12v-25a12 12 0 0112-13h25a12 12 0 0113 12zm85 86a13 13 0 01-12 12h-25a12 12 0 01-13-12v-25a12 12 0 0113-12h24a13 13 0 0113 12zm-13-73h-24a13 13 0 01-13-12v-25a12 12 0 0112-13h25a12 12 0 0113 12v25a12 12 0 01-12 13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5vq2sftmnr7";
freezeTemplate(tmpl);
