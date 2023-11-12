import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./branch_merge.css";

import _implicitScopedStylesheets from "./branch_merge.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M742 716l38-16c12-5 13-16 8-27-36-77-93-136-162-173 68-37 126-96 162-172 6-11 3-22-8-27l-38-16c-10-4-22 0-26 10-34 70-95 119-163 145-24 9-52 16-79 19h-44V322c0-10-14-16-22-10L196 485c-8 5-8 19 0 25l212 177c10 7 22 1 22-10V541h44c26 3 53 9 79 19 69 25 129 75 163 145 4 10 16 15 26 11z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7k0eoj6vjh7";
freezeTemplate(tmpl);
