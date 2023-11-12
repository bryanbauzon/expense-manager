import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./box_notes.css";

import _implicitScopedStylesheets from "./box_notes.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#056764" d="M51 0A51 51 0 000 51v538c0 28 23 51 51 51h458c28 0 51-23 51-51V203L371 0z"${3}/><path fill="#024d4c" d="M560 204v10H432s-64-13-62-67c0 0 2 57 60 57z"${3}/><path fill="#acf3e4" d="M371 0v146c0 16 11 58 61 58h128z"${3}/><path fill="#fff" d="M326 393c2 0 4-1 4-3v-14c0-4-4-4-4-4H139l21 21zm0 73c2 0 4-4 4-4v-13c0-4-4-4-4-4H212l21 21zm0 73c2 0 4-2 4-4v-13c0-4-4-4-4-4h-45l3 21zm-54-21c0-1 0-3-3-5L139 383s4 5-4 14c-11 11-16 7-16 7l131 131 5 3 20 1zM118 366a34 34 0 00-16 15c-2 5 0 7 0 7l11 10c3 3 6 2 6 2 9-3 15-13 16-16 1-4 0-5-1-6l-10-11s-2-3-6-1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5hbk8b9128";
freezeTemplate(tmpl);
