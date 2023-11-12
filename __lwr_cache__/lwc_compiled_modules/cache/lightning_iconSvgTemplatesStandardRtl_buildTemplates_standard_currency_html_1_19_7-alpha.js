import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./currency.css";

import _implicitScopedStylesheets from "./currency.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M744 308H256c-31 0-56 25-56 56v272c0 31 25 56 56 56h488c31 0 56-25 56-56V364c0-31-25-56-56-56zM322 636c0-37-29-66-66-66V430c37 0 66-29 66-66h356c0 37 29 66 66 66v140c-37 0-66 29-66 66z"${3}/><circle cx="500" cy="495" r="94"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6df9hnrn2o9";
freezeTemplate(tmpl);
