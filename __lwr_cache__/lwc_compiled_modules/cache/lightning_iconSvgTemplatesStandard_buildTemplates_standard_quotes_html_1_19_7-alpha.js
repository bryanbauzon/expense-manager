import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quotes.css";

import _implicitScopedStylesheets from "./quotes.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M720 220H501c-14-1-26 6-36 16L197 505a61 61 0 000 85l212 212c23 23 61 23 85 0l271-272c10-10 16-26 15-40V280c0-33-27-60-60-60zM504 660l-14 14c-8 8-20 8-28 0L326 538c-8-8-8-20 0-28l14-14c8-8 20-8 28 0l136 136c8 8 8 20 0 28zm80-80l-14 14c-8 8-20 8-28 0L406 458c-8-8-8-20 0-28l14-14c8-8 20-8 28 0l136 136c8 8 8 20 0 28zm56-170c-28 0-50-22-50-50s22-50 50-50 50 22 50 50-22 50-50 50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-18vjjodp2ie";
freezeTemplate(tmpl);
