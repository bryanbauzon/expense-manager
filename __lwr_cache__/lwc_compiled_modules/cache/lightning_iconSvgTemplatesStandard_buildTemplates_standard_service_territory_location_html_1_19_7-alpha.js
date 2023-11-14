import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_territory_location.css";

import _implicitScopedStylesheets from "./service_territory_location.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M663 595c-22 0-39-17-40-39 0-22 18-39 40-39s39 17 40 39c0 21-18 39-40 39zm-189 0c-22 0-39-17-40-39 0-22 18-39 40-39s39 17 40 39c-1 21-18 38-40 39zm94 0c-22 0-39-17-40-39 0-22 18-39 40-39s39 17 40 39c0 21-18 39-40 39z"${3}/><path d="M716 202H281c-44-1-81 34-83 78v444c2 44 38 79 82 78h244c-51-45-135-138-135-235 0-96 77-173 173-173s173 77 173 173c0 98-85 190-136 235h118c44 0 80-34 82-78V280c0-43-38-78-83-78zM473 335c-1 15-13 27-28 28H304c-15 0-28-13-28-28v-28c1-15 13-27 28-28h141c15 0 28 13 28 28v28z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6jfl2fd9a39";
freezeTemplate(tmpl);
