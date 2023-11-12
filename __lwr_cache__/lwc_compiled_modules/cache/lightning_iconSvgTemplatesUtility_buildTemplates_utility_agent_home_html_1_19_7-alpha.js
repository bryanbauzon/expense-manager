import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./agent_home.css";

import _implicitScopedStylesheets from "./agent_home.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M267 23l230 230a11 11 0 013 11c0 4-6 7-10 7h-50v219a10 10 0 01-10 10H90a10 10 0 01-10-9V270H30a8 8 0 01-9-6 9 9 0 013-11L254 23a10 10 0 0113 0zm-84 357h-43a9 9 0 00-8 9v54a9 9 0 009 9h42a9 9 0 009-9v-53a9 9 0 00-10-9zm96-72h-43a9 9 0 00-8 9v126a9 9 0 008 9h44a9 9 0 009-9V317a9 9 0 00-10-9zm96-72h-43a9 9 0 00-8 9v198a9 9 0 008 9h43a9 9 0 008-9V245a9 9 0 00-8-9z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
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
tmpl.stylesheetToken = "lwc-2brrs6o434s";
freezeTemplate(tmpl);
