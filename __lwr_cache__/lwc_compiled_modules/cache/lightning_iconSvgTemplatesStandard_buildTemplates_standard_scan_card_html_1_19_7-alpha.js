import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./scan_card.css";

import _implicitScopedStylesheets from "./scan_card.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M740 300H260c-33 0-60 27-60 60v280c0 33 27 60 60 60h480c33 0 60-27 60-60V360c0-33-27-60-60-60zM250 530c-17 0-30-13-30-30s13-30 30-30 30 13 30 30-13 30-30 30zm470 90c0 11-9 20-20 20H320c-11 0-20-9-20-20V380c0-11 9-20 20-20h380c11 0 20 9 20 20zm-80-200H380c-11 0-20 9-20 20v120c0 11 9 20 20 20h260c11 0 20-9 20-20V440c0-11-9-20-20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5f6g8cqarqt";
freezeTemplate(tmpl);
