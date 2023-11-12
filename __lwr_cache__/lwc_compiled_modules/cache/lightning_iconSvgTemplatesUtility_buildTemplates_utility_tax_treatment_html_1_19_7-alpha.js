import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tax_treatment.css";

import _implicitScopedStylesheets from "./tax_treatment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M376 485h46a10 10 0 006-10V300a10 10 0 00-10-7h-42l-4 1a10 10 0 00-7 10v170a10 10 0 0011 10zm95 0h25a10 10 0 007-10V305l-1-4a10 10 0 00-10-7h-21l-4 1a10 10 0 00-7 10v170a10 10 0 007 10h4zm-144 0h4l4-3a10 10 0 003-8V301a10 10 0 00-10-7l-5 1a10 10 0 00-6 10v173l2 4 4 2h4zm-60 0h15a10 10 0 007-10V305l-1-4a10 10 0 00-10-7h-10l-4 1a10 10 0 00-7 10v173l3 4a10 10 0 008 3zm-90 0h45a10 10 0 006-10V300a10 10 0 00-10-7h-43l-4 1a10 10 0 00-6 10v170a10 10 0 003 7l3 2h4zm6-448l131 72c3 2 5 5 5 10v9c0 5-4 10-10 10H33a10 10 0 01-10-10v-10c0-4 2-7 5-10l130-72c5-2 9-4 13-4s8 2 12 4zm-39 53c0 14 12 26 27 26s26-12 26-26-11-27-26-27-27 12-27 27zm7 260v-46c0-3 0-7 2-10l2-4V180c0-6-5-10-10-10h-11a10 10 0 00-10 10v116H90V181c0-6-4-10-10-10H70a10 10 0 00-10 9v116h-6a32 32 0 00-31 34v10c0 7 4 12 10 12h118zm69-70V180c0-5-5-10-10-10h-11a10 10 0 00-11 10v100h32zm32 2h2c3-2 6-3 9-2h9a27 27 0 0111 2V180c0-6-4-10-10-10h-10a10 10 0 00-11 10v101z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ijc85e93l6";
freezeTemplate(tmpl);
