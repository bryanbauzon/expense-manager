import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./summary.css";

import _implicitScopedStylesheets from "./summary.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 35v50c0 8 7 15 15 15h450c8 0 15-7 15-15V35c0-8-7-15-15-15H35c-8 0-15 7-15 15zm0 120v30c0 8 7 15 15 15h350c8 0 15-7 15-15v-30c0-8-7-15-15-15H35c-8 0-15 7-15 15zm0 200v30c0 8 7 15 15 15h350c8 0 15-7 15-15v-30c0-8-7-15-15-15H35c-8 0-15 7-15 15zm0 100v30c0 8 7 15 15 15h450c8 0 15-7 15-15V355c0-8-7-15-15-15h-30c-8 0-15 7-15 15v70c0 8-7 15-15 15H35c-8 0-15 7-15 15zm0-200v30c0 8 7 15 15 15h450c8 0 15-7 15-15V155c0-8-7-15-15-15h-30c-8 0-15 7-15 15v70c0 8-7 15-15 15H35c-8 0-15 7-15 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4rkqtu8p7tv";
freezeTemplate(tmpl);
