import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_territory.css";

import _implicitScopedStylesheets from "./service_territory.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M566.3 621.1a73.9 73.9 0 01-74.2-72.2 72.7 72.7 0 0174.2-72.2 72.2 72.2 0 110 144.3zM718 200H283a81 81 0 00-83 78v444a81 81 0 0082 78h244c-51-45-136-138-136-235a173.5 173.5 0 01347 0c0 98-86 190-137 235h118a81 81 0 0082-78V278c1-42-36-78-82-78zM476 334a29 29 0 01-27 27H308a29 29 0 01-28-27v-28a29 29 0 0128-27h141a29 29 0 0127 27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-37be9jaujah";
freezeTemplate(tmpl);
