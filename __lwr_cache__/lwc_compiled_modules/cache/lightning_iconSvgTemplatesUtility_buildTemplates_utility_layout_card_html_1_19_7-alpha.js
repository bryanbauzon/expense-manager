import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./layout_card.css";

import _implicitScopedStylesheets from "./layout_card.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M51 33a31 31 0 00-31 31v392a31 31 0 0031 31h186a31 31 0 0031-31V64a31 31 0 00-31-31zm268 108a26 26 0 100 52h155a26 26 0 000-52zm-25 119a26 26 0 0125-26h155a26 26 0 010 52H319a26 26 0 01-26-26zm25 67a26 26 0 100 52h155a26 26 0 000-52z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7s727iquhiv";
freezeTemplate(tmpl);
