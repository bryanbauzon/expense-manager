import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./socialshare.css";

import _implicitScopedStylesheets from "./socialshare.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2 41c0 5 4 9 9 9s9-4 9-9v-.7l15.1-7.5A9 9 0 0050 26c0-5-4-9-9-9-2.3 0-4.3.8-6 2.1l-15.1-7.6v-.6c0-5-4-9-9-9s-9 4-9 9A9 9 0 0017.5 17l14.6 7.3-.1 1.6.1 1.6-14.6 7.3A9 9 0 002 41z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-hvjb51shrv";
freezeTemplate(tmpl);
