import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_warranty.css";

import _implicitScopedStylesheets from "./asset_warranty.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M71 24a2.5 2.5 0 012.4 2.4V51a7.8 7.8 0 01-1.7-.5 11.9 11.9 0 01-2.3-1.5c-1.1-1-2.4-2-3.9-2a3.9 3.9 0 00-1.7.4v-6.7a.8.8 0 00-.3-.7.8.8 0 00-.6-.2h-1.8a.8.8 0 00-.5.2.8.8 0 00-.3.7v9.1a7.4 7.4 0 01-1 .6 8 8 0 01-1.5.4V40.7a.9.9 0 10-1.7 0V51a16.2 16.2 0 00-1.6.3V40.7a.8.8 0 00-.2-.7.8.8 0 00-.7-.2h-3.5a.8.8 0 00-.5.2.8.8 0 00-.3.7v13a.8.8 0 00.3.5.8.8 0 00.6.2h1.2A13.8 13.8 0 0051 56H37.2a.8.8 0 00-.5.2.8.8 0 00-.3.7v1a.8.8 0 001 .7h13.2l-.2.7a11.9 11.9 0 01-1.5 2.3C48 62.8 47 64 47 65.5s1 2.7 2 4l.6.8h-7.3v2.5a2.5 2.5 0 01-2.4 2.4H37a2.5 2.5 0 01-2.4-2.4v-2.4h-5.3A2.5 2.5 0 0127 68V26.4a2.5 2.5 0 012.4-2.4zM53.6 39.8zm9.3 0zm-22 0h-.1a.8.8 0 01.6.2.8.8 0 01.2.7v12.8a.8.8 0 01-.2.7.8.8 0 01-.7.2h-3.4a.8.8 0 01-.9-.7v-13a.8.8 0 01.3-.7.8.8 0 01.5-.2h3.6zm5.1 0a.8.8 0 01.5.2.8.8 0 01.3.7v12.8a.8.8 0 01-.3.7.8.8 0 01-.6.2h-1.7a.8.8 0 01-.6-.2.8.8 0 01-.3-.5v-13a.8.8 0 01.3-.7.8.8 0 01.5-.2H46zm17-4.3zm.2 0a.8.8 0 01.5.3.8.8 0 01.2.6v.8a.8.8 0 01-.2.7.8.8 0 01-.6.2H37.3a.8.8 0 01-.6-.2.8.8 0 01-.3-.6v-1a.8.8 0 01.3-.6.8.8 0 01.5-.2h26zm5.4 17a5.4 5.4 0 00-3.1-1.5 5.4 5.4 0 00-3 1.5 9 9 0 01-1.9 1.2 9.5 9.5 0 01-2.2.5 5.5 5.5 0 00-3.1 1 5.1 5.1 0 00-1.1 3.2 9.3 9.3 0 01-.5 2.2 9 9 0 01-1.2 1.8 5.4 5.4 0 00-1.5 3.1 5.4 5.4 0 001.5 3 9 9 0 011.2 1.9 9.5 9.5 0 01.5 2.2 5.5 5.5 0 001 3.1 5.1 5.1 0 003.2 1.1 9.3 9.3 0 012.2.5 9 9 0 011.8 1.2 5.4 5.4 0 003.1 1.5 5.4 5.4 0 003-1.5 9 9 0 011.9-1.2 9.5 9.5 0 012.2-.5 5.5 5.5 0 003.1-1 5.1 5.1 0 001.1-3.2 9.3 9.3 0 01.5-2.2 9 9 0 011.2-1.8 5.4 5.4 0 001.5-3.1 5.4 5.4 0 00-1.5-3 9 9 0 01-1.2-1.9 9.5 9.5 0 01-.5-2.2 5.5 5.5 0 00-1-3.1 5.1 5.1 0 00-3.2-1.1 9.3 9.3 0 01-2.2-.5 9 9 0 01-1.8-1.2zm1.3 8.3a.7.7 0 011 0l1 1a.8.8 0 010 1l-6.7 7.4a1.4 1.4 0 01-1 .5 1.5 1.5 0 01-1-.5l-3.7-3.6a.7.7 0 010-1l1-1a.7.7 0 011 0l2.6 2.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ovg5uitsb7";
freezeTemplate(tmpl);
