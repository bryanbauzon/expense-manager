import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bold.css";

import _implicitScopedStylesheets from "./bold.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M410 190c0-60-48-110-105-110H140a20 20 0 00-20 20v330c0 11 9 20 20 20h165c57 0 105-50 105-110 0-29-11-55-29-75 18-20 29-46 29-75zM305 380H190v-80h115c19 0 36 19 36 40s-17 40-36 40zm0-150H190v-80h115c19 0 36 19 36 40s-17 40-36 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3dub44env56";
freezeTemplate(tmpl);
