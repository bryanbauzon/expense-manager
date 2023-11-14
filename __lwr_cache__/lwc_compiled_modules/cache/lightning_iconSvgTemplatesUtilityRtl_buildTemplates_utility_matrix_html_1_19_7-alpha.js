import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./matrix.css";

import _implicitScopedStylesheets from "./matrix.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M480 35c0-8-7-15-15-15H155c-8 0-15 7-15 15v50c0 8 7 15 15 15h310c8 0 15-7 15-15zM100 155c0-8-7-15-15-15H55c-8 0-15 7-15 15v130c0 8 7 15 15 15h30c8 0 15-7 15-15zm0 200c0-8-7-15-15-15H55c-8 0-15 7-15 15v130c0 8 7 15 15 15h30c8 0 15-7 15-15zm190-200c0-8-7-15-15-15H155c-8 0-15 7-15 15v30c0 8 7 15 15 15h120c8 0 15-7 15-15zm190 0c0-8-7-15-15-15H345c-8 0-15 7-15 15v30c0 8 7 15 15 15h120c8 0 15-7 15-15zM290 255c0-8-7-15-15-15H155c-8 0-15 7-15 15v30c0 8 7 15 15 15h120c8 0 15-7 15-15zm190 0c0-8-7-15-15-15H345c-8 0-15 7-15 15v30c0 8 7 15 15 15h120c8 0 15-7 15-15zM290 355c0-8-7-15-15-15H155c-8 0-15 7-15 15v30c0 8 7 15 15 15h120c8 0 15-7 15-15zm190 0c0-8-7-15-15-15H345c-8 0-15 7-15 15v30c0 8 7 15 15 15h120c8 0 15-7 15-15zM290 455c0-8-7-15-15-15H155c-8 0-15 7-15 15v30c0 8 7 15 15 15h120c8 0 15-7 15-15zm190 0c0-8-7-15-15-15H345c-8 0-15 7-15 15v30c0 8 7 15 15 15h120c8 0 15-7 15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-aqss6u2vts";
freezeTemplate(tmpl);
