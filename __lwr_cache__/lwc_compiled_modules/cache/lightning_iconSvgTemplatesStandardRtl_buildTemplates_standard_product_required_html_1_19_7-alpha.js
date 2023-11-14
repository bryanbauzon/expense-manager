import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_required.css";

import _implicitScopedStylesheets from "./product_required.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M561 703v40c0 11-9 20-20 20H220c-11 0-20-9-20-20v-40c0-11 9-20 20-20h321c11 0 20 9 20 20z"${3}/><path fill-rule="evenodd" d="M660 763c-10-1-19-10-18-20v-40c0-11 9-20 20-20h40c11 0 20 9 20 20v40c0 11-9 20-20 20zm0-179c-10-1-19-10-18-20v-40c0-11 9-20 20-20h40c11 0 20 9 20 20v40c0 11-9 20-20 20z"${3}/><path d="M561 524v40c0 11-9 20-20 20H220c-11 0-20-9-20-20v-40c0-11 9-20 20-20h321c11 0 20 9 20 20zm-60-178v40c0 11-9 20-20 20H220c-11 0-20-9-20-20v-40c0-11 9-20 20-20h261c11 0 20 9 20 20z"${3}/><path fill-rule="evenodd" d="M858 263l-21-21c-5-6-14-6-20-1l-1 1-132 131-54-52c-5-6-14-6-20-1l-1 1-21 21c-6 5-6 14-1 20l1 1 73 74c12 12 31 12 42 1l1-1 154-152c5-6 5-16 0-22z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-krkhk1mirb";
freezeTemplate(tmpl);
