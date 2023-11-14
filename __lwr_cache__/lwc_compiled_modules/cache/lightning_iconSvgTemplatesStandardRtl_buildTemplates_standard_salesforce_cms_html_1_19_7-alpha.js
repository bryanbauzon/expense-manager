import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./salesforce_cms.css";

import _implicitScopedStylesheets from "./salesforce_cms.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M663 484c3 0 7-1 9-3 8-5 10-16 5-24l-63-96c-1-2-2-3-4-4-7-6-18-4-24 3l-68 88-80-119c-1-2-3-3-5-5-8-5-19-3-24 5l-86 128c-2 3-3 6-3 10 0 9 8 17 17 17zm-331 56h339c9 0 17 8 17 17s-8 17-17 17H332c-9 0-17-8-17-17 0-10 8-17 17-17zm35 85h270c9 0 17 8 17 17s-8 17-17 17H367c-9 0-17-8-17-17s7-17 17-17zm385-286c8-11 13-24 13-39 0-36-29-64-64-64-15 0-28 5-39 13a299.6 299.6 0 00-462 252c0 75 27 143 72 195-3 6-4 13-4 20a47 47 0 0073 39 299.6 299.6 0 00411-416zm-51-70c17 0 31 14 31 31s-14 30-31 30-31-13-31-30 14-31 31-31zM500 767c-51 0-99-14-139-40 1-4 2-8 2-12 0-26-21-47-47-47-7 0-13 1-18 4-39-46-63-106-63-171a265.9 265.9 0 01408-225 63.8 63.8 0 0059 88c8 0 16-2 24-5 26 41 41 90 41 142a268 268 0 01-267 266z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5m82dolmjg";
freezeTemplate(tmpl);
