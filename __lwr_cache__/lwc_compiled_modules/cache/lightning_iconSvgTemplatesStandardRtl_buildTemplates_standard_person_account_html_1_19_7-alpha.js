import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./person_account.css";

import _implicitScopedStylesheets from "./person_account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M69.5 59c-3.6-1.5-4.2-2.9-4.2-4.4s1-2.9 2.2-4c2.1-1.9 3.3-4.6 3.3-7.8 0-5.8-3.7-10.9-10.2-10.9s-10.2 5-10.2 10.9c0 3.2 1.2 5.8 3.3 7.8 1.2 1.1 2.2 2.5 2.2 4s-.6 2.9-4.2 4.4c-5.3 2.2-10.4 5-10.5 9.8 0 3.1 2.4 6.2 5.4 6.2h27.8c3.1 0 5.4-3.1 5.4-6.2.1-4.7-5-7.5-10.3-9.8zm-22.9-7.6c-.4-.5-2.4-3-2.2-9.7.1-6.6 3-8.3 3-8.3v-6.5c0-1.1-1.1-1.9-1.9-1.9H21.9c-.9 0-1.9.9-1.9 2v43.6h13.5c.3-11.1 13-15.6 13-15.6 1.9-1 .5-3.1.1-3.6zM30.7 65.1a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-9.9a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-9.9a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-9.9a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm11.2 19.8a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-9.9a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2zm0-9.9a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h2a2 2 0 012 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5c0ac22m4l8";
freezeTemplate(tmpl);
