import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./snippet.css";

import _implicitScopedStylesheets from "./snippet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M360 75v130c0 8 7 15 15 15h110c8 0 15-7 15-15V75c0-8-7-15-15-15H375c-8 0-15 7-15 15zM20 75v30c0 8 7 15 15 15h270c8 0 15-7 15-15V75c0-8-7-15-15-15H35c-8 0-15 7-15 15zm300 130v-30c0-8-7-15-15-15H135c-8 0-15 7-15 15v30c0 8 7 15 15 15h170c8 0 15-7 15-15zm40 110v130c0 8 7 15 15 15h110c8 0 15-7 15-15V315c0-8-7-15-15-15H375c-8 0-15 7-15 15zm-340 0v30c0 8 7 15 15 15h270c8 0 15-7 15-15v-30c0-8-7-15-15-15H35c-8 0-15 7-15 15zm100 100v30c0 8 7 15 15 15h170c8 0 15-7 15-15v-30c0-8-7-15-15-15H135c-8 0-15 7-15 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-29khflrvhpd";
freezeTemplate(tmpl);
