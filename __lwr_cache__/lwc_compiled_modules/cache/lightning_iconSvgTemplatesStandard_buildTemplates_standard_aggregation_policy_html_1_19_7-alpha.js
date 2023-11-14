import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./aggregation_policy.css";

import _implicitScopedStylesheets from "./aggregation_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M79.1 71.3l-9.2-9.2a4.2 4.2 0 00-.4-.3V58h4.9a1 1 0 00.8-1.6l-7.9-9.5-.1-.1a1 1 0 00-1.5.1l-7.9 9.5a1 1 0 00.8 1.6h4.9v3.5a2.9 2.9 0 00-.9.6l-9.2 9.2a3 3 0 104.2 4.3l5.9-5.9V77a3 3 0 006 0v-6.7l5.3 5.3a3 3 0 104.3-4.3zM37.1 20H26a6 6 0 00-6 6v9a6 6 0 006 6h11.1a6 6 0 006-6v-9a6 6 0 00-6-6zm-4.5 15h-2a4.5 4.5 0 010-9h2a4.5 4.5 0 010 9zm33.7 6a6 6 0 006-6v-9a6 6 0 00-6-6H55.2a6 6 0 00-6 6v9a6 6 0 006 6zm-6.5-15h2a4.5 4.5 0 010 9h-2a4.5 4.5 0 010-9zM37.1 47H26a6 6 0 00-6 6v9a6 6 0 006 6h11.1a6 6 0 006-6v-9a6 6 0 00-6-6zm-4.5 15h-2a4.5 4.5 0 010-9h2a4.5 4.5 0 010 9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-47jpn13gk9r";
freezeTemplate(tmpl);
