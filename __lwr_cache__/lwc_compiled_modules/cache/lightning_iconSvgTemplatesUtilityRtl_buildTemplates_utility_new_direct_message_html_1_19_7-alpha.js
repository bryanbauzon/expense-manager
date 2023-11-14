import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_direct_message.css";

import _implicitScopedStylesheets from "./new_direct_message.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M455 170l-34 35c-6 6-9 13-9 21v174c0 8-7 15-15 15H127c-8 0-15-7-15-15V130c0-8 7-15 15-15h175c8 0 16-3 21-9l34-34c6-6 2-17-7-17H92a40 40 0 00-40 40v340a40 40 0 0040 40h340a40 40 0 0040-40V177c0-9-11-13-17-7zM189 307l37 37c2 2 4 2 6 0l194-199c2-2 2-4 0-6l-36-36c-2-2-4-2-6 0L189 301c-2 2-2 4 0 6zM401 86c-2 2-2 4 0 6l36 36c2 2 4 2 6 0l25-25c7-6 7-16 0-23l-18-18c-7-7-17-7-24 0zM156 369c-1 4 3 8 7 7l19-5 15-4 14-4c2-1 6-5 3-8l-38-38c-3-3-6 0-7 2-3 4-4 10-5 14l-4 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-p6i9b0c5rp";
freezeTemplate(tmpl);
