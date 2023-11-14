import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./volume_discounts.css";

import _implicitScopedStylesheets from "./volume_discounts.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M633 290c0-44-97-80-216-80s-217 36-217 80v27c0 44 97 80 217 80s216-36 216-80zm-433 92c0 35 97 62 217 62s216-27 216-62v56c0 44-97 80-216 80s-217-36-217-80zm0 121c0 35 97 62 217 62h14c24 0 40 1 63-3l-2 21c0 10-5 20-11 28l-15 18-6 10-26 1-17-1c-120 0-217-34-217-78zm238 185h33l5 7c5 6 9 15 9 24l2 25c0 5 1 12 4 16-34 2-41 2-74 2-120 0-217-36-217-80v-56c0 34 97 62 217 62zm338-74l16 21a34 34 0 010 43l-13 16c-7 8-12 19-13 30l-1 21c-1 8-4 15-10 21-5 5-13 9-20 9l-25 2c-8 1-15 4-21 9l-19 16a31 31 0 01-42 0l-17-15c-7-7-16-11-26-11l-22-2c-8-1-15-5-20-10s-9-13-9-21l-2-25c0-9-3-17-9-23l-15-20a34 34 0 010-43l14-17c7-8 11-17 11-28l2-21c1-8 4-16 10-21 5-6 12-9 20-10l23-1c9-1 17-5 24-10l18-16a31 31 0 0142 0l17 15c7 7 16 11 26 12l22 1c7 1 14 4 20 10 5 6 8 13 9 21l2 26c0 8 3 15 8 21zm-203-17a39 39 0 005 47c3 4 7 6 11 8s9 3 14 3c7 0 14-3 20-7s11-10 14-17 3-14 2-21c-2-8-5-14-10-19-5-6-12-9-19-11s-14 0-21 3c-6 2-12 7-16 13zm45 132l1-1 76-144v-2l-1-2h-12l-1 1-1 1-76 143v3l1 1 1 1h11zm109-16c4-6 6-13 6-21h-1c1-9-3-19-10-26a35 35 0 00-59 12c-3 7-4 15-2 22a37 37 0 0029 29c7 2 14 1 21-2 6-3 12-8 16-14zM603 597c-4 0-8 1-11 4a21 21 0 00-3 30 19 19 0 0022 5c3-2 6-4 8-8a21 21 0 002-19l-4-6-6-5zm93 75c-4 0-8 1-11 4l-7 9a21 21 0 005 22l10 5c4 1 7 1 11-1 3-2 6-4 8-8a21 21 0 002-18l-4-7-6-4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6s273tgbh9a";
freezeTemplate(tmpl);
