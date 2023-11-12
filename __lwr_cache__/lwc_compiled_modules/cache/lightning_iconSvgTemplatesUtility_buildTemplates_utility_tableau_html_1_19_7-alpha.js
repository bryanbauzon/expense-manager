import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tableau.css";

import _implicitScopedStylesheets from "./tableau.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M339 272h-66v72h-26v-72h-66v-26h66v-72h26v72h66zm-132 93h-59v-66h-22v66H66v20h60v65h22v-65h59zm248-233h-59V67h-22v65h-59v21h59v65h22v-65h59zM310 436h-40v-45h-19v45h-41v18h41v46h19v-46h40zM207 132h-60V67h-21v65H66v20h60v66h21v-66h60zm293 118h-40v-45h-19v45h-41v18h41v45h19v-45h40zm-45 115h-59v-66h-22v66h-59v20h59v65h22v-65h59zM307 65h-40V20h-14v45h-40v14h40v44h15V79h40zM114 252H74v-44H60v44H20v14h40v44h14v-44h40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1bvkgh6hrrh";
freezeTemplate(tmpl);
