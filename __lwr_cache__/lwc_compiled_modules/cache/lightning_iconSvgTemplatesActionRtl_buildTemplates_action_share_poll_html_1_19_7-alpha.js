import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share_poll.css";

import _implicitScopedStylesheets from "./share_poll.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 52v64c0 18 14 32 32 32h416c18 0 32-14 32-32V52c0-18-14-32-32-32H52c-18 0-32 14-32 32zm32 64V52h200v64H52zM20 228v64c0 18 14 32 32 32h416c18 0 32-14 32-32v-64c0-18-14-32-32-32H52c-18 0-32 14-32 32zm32 64v-64h272v64H52zM20 404v64c0 18 14 32 32 32h416c18 0 32-14 32-32v-64c0-18-14-32-32-32H52c-18 0-32 14-32 32zm32 64v-64h128v64H52z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-64b3afr2fph";
freezeTemplate(tmpl);
