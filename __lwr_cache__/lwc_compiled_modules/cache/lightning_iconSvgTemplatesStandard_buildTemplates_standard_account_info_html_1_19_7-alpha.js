import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./account_info.css";

import _implicitScopedStylesheets from "./account_info.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M639 559a121 121 0 10121 120 121 121 0 00-121-120zm-1 55h1a18 18 0 11-1 0zm31 126a5 5 0 01-6 5h-48a6 6 0 01-6-5v-12a7 7 0 016-7 6 6 0 006-5v-24a7 7 0 00-6-7 6 6 0 01-6-5v-12a7 7 0 016-7h36a7 7 0 016 7v48a5 5 0 006 5 7 7 0 016 7zm-33-224c10 0 27-1 27-16V224a24 24 0 00-24-24H264a24 24 0 00-24 24v497h221c14 0 18-10 17-24s-6-79 37-129 110-52 121-52zM535 283a25 25 0 0121-24h31a25 25 0 0121 24v25a25 25 0 01-24 24h-25a25 25 0 01-24-24zm0 120a25 25 0 0124-24h25a25 25 0 0124 24v25a25 25 0 01-24 24h-25a25 25 0 01-24-24zM368 668a25 25 0 01-24 24h-25a25 25 0 01-24-24v-25a25 25 0 0124-24h25a25 25 0 0124 24zm0-120a25 25 0 01-24 24h-25a25 25 0 01-24-24v-25a25 25 0 0124-24h25a25 25 0 0124 24zm0-120a25 25 0 01-24 24h-25a25 25 0 01-24-24v-25a25 25 0 0124-24h25a25 25 0 0124 24zm0-120a25 25 0 01-24 24h-25a25 25 0 01-24-24v-25a25 25 0 0121-24h31a25 25 0 0121 24zm120 240a25 25 0 01-24 24h-25a25 25 0 01-24-24v-25a25 25 0 0124-24h25a25 25 0 0124 24zm0-120a25 25 0 01-24 24h-25a25 25 0 01-24-24v-25a25 25 0 0124-24h25a25 25 0 0124 24zm0-120a25 25 0 01-24 24h-25a25 25 0 01-24-24v-25a25 25 0 0121-24h31a25 25 0 0121 24z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2r5nn5o813i";
freezeTemplate(tmpl);
