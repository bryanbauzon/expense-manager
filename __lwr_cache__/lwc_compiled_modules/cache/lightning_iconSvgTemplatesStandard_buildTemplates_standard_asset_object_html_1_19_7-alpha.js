import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_object.css";

import _implicitScopedStylesheets from "./asset_object.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74.2 20.2H25.8A2.9 2.9 0 0023 23v48.4a2.9 2.9 0 002.8 2.8H32V77a2.9 2.9 0 002.8 2.8H38a2.9 2.9 0 002.8-2.8v-2.9h18.4V77a2.9 2.9 0 002.8 2.8h3.2A2.9 2.9 0 0068 77v-2.9h6.2a2.9 2.9 0 002.8-2.8V23a2.9 2.9 0 00-2.8-2.8zM34 39.6a1 1 0 011-1h4a1 1 0 011 1v15a1 1 0 01-1 1h-4a1 1 0 01-1-1zm32 19.9a1 1 0 01-1 1H35a1 1 0 01-1-1v-1a1 1 0 011-1h30a1 1 0 011 1zm-24-4.9v-15a1 1 0 011-1h2a1 1 0 011 1v15a1 1 0 01-1 1h-2a1 1 0 01-1-1zm7 0v-15a1 1 0 011-1h4a1 1 0 011 1v15a1 1 0 01-1 1h-4a1 1 0 01-1-1zm7.9 0v-15a1 1 0 012 0v15a1 1 0 01-2 0zm4.9 0v-15a1 1 0 011-1h2a1 1 0 011 1v15a1 1 0 01-1 1h-2a1 1 0 01-1-1zm4.2-19a1 1 0 01-1 1H35a1 1 0 01-1-1v-1a1 1 0 011-1h30a1 1 0 011 1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-66nt40gvvuh";
freezeTemplate(tmpl);
