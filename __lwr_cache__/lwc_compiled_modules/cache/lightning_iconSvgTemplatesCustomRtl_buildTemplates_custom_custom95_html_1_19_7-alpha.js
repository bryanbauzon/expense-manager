import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom95.css";

import _implicitScopedStylesheets from "./custom95.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M53 30.2V26h1a3 3 0 100-6h-8a3 3 0 100 6h1v4.2a25 25 0 106 0zM50 74a19 19 0 110-38 19 19 0 010 38zm6.6-29.2L52 49.4c-.6-.2-1.3-.4-2-.4a6 6 0 106 6c0-.7-.1-1.4-.4-2l4.6-4.6c1-1 1-2.6 0-3.6a2.4 2.4 0 00-3.6 0z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-4iak8367tde";
freezeTemplate(tmpl);
