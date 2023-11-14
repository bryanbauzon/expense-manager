import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./budget_period.css";

import _implicitScopedStylesheets from "./budget_period.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M710 200H237c-4 0-9 2-12 5-3 4-5 8-5 13v59c0 5 2 9 5 13 3 3 8 5 12 5h473c4 0 8-2 12-5s5-8 5-13v-59c0-5-2-9-5-13-4-3-8-5-12-5zM341 342H237c-4 0-8 2-12 6-3 3-5 7-5 12v36a17 17 0 0017 18l104-1c5 0 9-2 12-5s5-8 5-12v-36c0-5-2-9-5-12s-7-5-12-6zm184 0H422c-5 0-9 2-12 6-4 3-5 7-6 12v36c1 4 2 9 6 12s7 5 12 5h103c5 0 9-2 12-5 4-3 6-8 6-12v-36c0-5-2-9-6-12-3-4-7-6-12-6zm185 0H606c-5 0-9 2-12 6s-5 7-5 12v36c0 4 2 9 5 12s7 5 12 5h104c4 0 9-2 12-5s5-8 5-12v-36a18 18 0 00-17-18zM341 461H237c-4 0-8 2-12 5-3 3-5 8-5 13v35c0 5 2 9 5 13 4 3 8 5 12 5h104c5 0 9-2 12-6 3-3 5-7 5-12v-36a18 18 0 00-17-18zm184 0c-4 0 0 0 0 0zm0 0H422c-5 0-9 2-12 5s-5 8-5 13v35c0 5 2 9 5 13 3 3 7 5 12 5h103c5 0 9-2 13-6 3-3 5-7 5-12v-35a17 17 0 00-17-18zm185 0H606c-5 0-9 2-12 5s-5 8-5 13v35c0 5 2 9 5 13 3 3 10 6 12 5h1c4-2 24-11 53-11 25 0 40 7 47 10l3 1c3 1 9-2 12-5 3-4 5-8 5-13v-35c0-5-2-9-5-13-3-3-7-5-12-5zM341 579H238c-5 0-9 2-13 6-3 3-5 7-5 12v36a17 17 0 0017 18l104-1c5 0 9-2 12-5 4-3 5-8 6-12v-36c-1-5-2-9-6-12-3-4-7-5-12-6zm0 119H238c-5 0-9 2-13 5-3 3-5 8-5 12v36c0 5 2 9 5 13 4 3 8 5 13 5h103c5 0 9-2 12-6 4-3 5-7 6-12v-36c-1-4-2-9-6-12-3-3-7-5-12-5zm81-119c-5 0-9 2-12 6-3 3-5 7-5 12v36a17 17 0 0017 18l82-1s1-16 11-36c5-11 12-19 16-23 4-5 6-7 5-8-4-4-6-4-11-4H422zm-12 185c3 3 7 5 12 5h104c4 0 6-2 9-5l1-1c1-1-1-3-4-6-4-4-11-11-17-23-10-20-11-36-11-36h-82c-5 0-9 2-12 5s-5 8-5 12v36c0 5 2 9 5 12zm263-92l2 6 30 28c2 1 3 3 3 5l-3 6-11 12-2 1-3 1a7 7 0 01-5-2l-38-39-3-6v-62l2-6 6-2h15a8 8 0 018 8v50zm-62-111a123 123 0 01136 27 124 124 0 11-136-27zm-4 192a93 93 0 10104-155 93 93 0 00-104 155z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-44g5ksdrh27";
freezeTemplate(tmpl);
