import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom48.css";

import _implicitScopedStylesheets from "./custom48.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78 24H68v-2a2 2 0 00-2-2H34a2 2 0 00-2 2v2H22a2 2 0 00-2 2v13c0 5 4 9 9 9h4.6a18 18 0 0016.3 11c7.6.1 14-4.5 16.7-11H71c5 0 9-4 9-9V26a2 2 0 00-2-2zM29 42a3 3 0 01-3-3v-9h6v10.6l.1 1.4H29zm45-3a3 3 0 01-3 3h-3.1l.1-1.3V30h6v9zM60 74h-1a6 6 0 01-6-6v-2c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v2a6 6 0 01-6 6h-1a2 2 0 00-2 2v2c0 1.1.9 2 2 2h20a2 2 0 002-2v-2a2 2 0 00-2-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3fheq0ivf2f";
freezeTemplate(tmpl);
