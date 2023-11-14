import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./poll.css";

import _implicitScopedStylesheets from "./poll.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M760 200H240c-22 0-40 18-40 40v80c0 22 18 40 40 40h520c22 0 40-18 40-40v-80c0-22-18-40-40-40zM510 320v-80h250v80zm250 100H240c-22 0-40 18-40 40v80c0 22 18 40 40 40h520c22 0 40-18 40-40v-80c0-22-18-40-40-40zM420 540v-80h340v80zm340 100H240c-22 0-40 18-40 40v80c0 22 18 40 40 40h520c22 0 40-18 40-40v-80c0-22-18-40-40-40zM600 760v-80h160v80z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6lfdh04o9r5";
freezeTemplate(tmpl);
