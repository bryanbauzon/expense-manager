import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom32.css";

import _implicitScopedStylesheets from "./custom32.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78.5 35.3L55.1 48.6c-.5.3-1 .4-1.5.4a3 3 0 01-2.7-1.7c-.7-1.4 0-3.2 1.4-4l7.8-4.4v-7.7c0-.8-.8-1.2-1.5-.9L30.1 46.6c-.5.3-1 .4-1.5.4-1 0-2.1-.5-2.6-1.5a3 3 0 011.1-4.1l4.9-2.8V22a2 2 0 00-2-2h-8a2 2 0 00-2 2v52a6 6 0 006 6h17a2 2 0 002-2v-7c0-1.1.9-2 2-2h6a2 2 0 012 2v7c0 1.1.9 2 2 2h17a6 6 0 006-6V36.2c0-.8-.8-1.3-1.5-.9zM35 63a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6c0-1.1.9-2 2-2h2a2 2 0 012 2v6zm12 0a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6c0-1.1.9-2 2-2h2a2 2 0 012 2v6zm12 0a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6c0-1.1.9-2 2-2h2a2 2 0 012 2v6zm12 0a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6c0-1.1.9-2 2-2h2a2 2 0 012 2v6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4vobaf4hnpk";
freezeTemplate(tmpl);
