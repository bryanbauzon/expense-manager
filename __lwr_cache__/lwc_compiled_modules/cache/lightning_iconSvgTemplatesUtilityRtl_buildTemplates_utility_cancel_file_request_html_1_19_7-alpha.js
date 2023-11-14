import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./cancel_file_request.css";

import _implicitScopedStylesheets from "./cancel_file_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M286 114h51c6 0 11-5 11-11 0-3-1-5-3-8l-72-71a10 10 0 00-7-3c-6 0-11 5-11 11v51c0 17 14 31 31 31zm-40 292a160 160 0 01102-149v-81c0-9-7-16-16-16h-78a47 47 0 01-47-46V36c1-8-6-15-15-15H68a47 47 0 00-47 46v294c0 26 21 46 47 46h178v-1zm72-60l60 60-60 60c-6 6-6 16 0 21l7 7c6 6 16 6 21 0l60-60 60 60c6 6 16 6 21 0l7-7c6-6 6-16 0-21l-60-60 60-60c6-6 6-16 0-21l-7-7c-6-6-16-6-21 0l-60 60-60-60c-6-6-16-6-21 0l-7 7c-6 5-6 15 0 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7e3uokilbeo";
freezeTemplate(tmpl);
