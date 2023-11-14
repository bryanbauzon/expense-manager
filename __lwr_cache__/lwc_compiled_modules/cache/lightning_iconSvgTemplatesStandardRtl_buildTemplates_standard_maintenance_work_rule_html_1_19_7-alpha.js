import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./maintenance_work_rule.css";

import _implicitScopedStylesheets from "./maintenance_work_rule.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M797 492L697 392a14 14 0 00-19 0l-18 19a13 13 0 000 19l30 30a9 9 0 01-6 15H410l163-163a9 9 0 0115 7v44a12 12 0 0011 13h27a12 12 0 0013-11V220a12 12 0 00-11-12H485a14 14 0 00-12 13v25a12 12 0 0011 13h46a9 9 0 019 9 9 9 0 01-3 5L335 474H212a13 13 0 00-12 13v26a15 15 0 0014 14h124l200 200a9 9 0 01-6 15h-45a12 12 0 00-13 11 3 3 0 000 1v25a15 15 0 0013 14h141a12 12 0 0012-11V637a12 12 0 00-11-12h-27a12 12 0 00-13 11v46a9 9 0 01-9 9 9 9 0 01-5-3L411 527h274a9 9 0 016 15l-32 31a14 14 0 000 18l19 19a13 13 0 0018 0l100-99a14 14 0 001-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7nlgkcp74ei";
freezeTemplate(tmpl);
