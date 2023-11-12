import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gdoc.css";

import _implicitScopedStylesheets from "./gdoc.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#1b96ff" d="M51 0A51 51 0 000 51v538c0 28 23 51 51 51h458c28 0 51-23 51-51V203L371 0z"${3}/><path fill="#fff" d="M317 395H101v-21h216zm0 48H101v-21h216zm0 48H101v-21h216zm0 48H194v-21h123z"${3}/><path fill="#0b5cab" d="M560 204v10H432s-64-13-62-67c0 0 2 57 60 57z"${3}/><path fill="#aacbff" d="M371 0v146c0 16 11 58 61 58h128z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 560 640",
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
tmpl.stylesheetToken = "lwc-6ds0cmtfvud";
freezeTemplate(tmpl);
