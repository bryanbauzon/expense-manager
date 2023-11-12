import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./budget_category_value.css";

import _implicitScopedStylesheets from "./budget_category_value.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M680 202H237c-4 0-8 2-12 5-3 3-4 7-4 12v55c0 5 1 9 4 12s8 5 12 5h443c4 0 8-2 11-5s5-7 5-12v-55c0-4-2-9-5-12s-7-5-11-5zM334 336h-97c-4 0-8 1-12 5-3 3-4 7-4 11v33c0 5 1 9 4 12s8 5 12 5h97c4 0 8-2 11-5s5-7 5-11v-34c0-4-2-8-5-11-3-4-7-5-11-5zm173 0h-97c-5 0-9 1-12 5-3 3-5 7-5 11v33c0 5 2 9 5 12s7 5 12 5h97c4 0 8-2 11-5s5-7 5-12v-33c0-4-2-8-5-12-3-3-7-4-11-4zm173 0h-98c-4 0-8 1-11 5-3 3-5 7-5 11v33c0 5 2 9 5 12s7 5 11 5h98c4 0 8-2 11-5s5-7 5-11v-34c0-4-2-8-5-12-3-3-7-4-11-4zM334 447h-97c-4 0-9 2-12 5s-4 7-4 11v34c0 4 1 8 4 11s8 5 12 5h97c4 0 8-2 11-5s5-7 5-11v-34c0-4-2-8-5-11s-7-5-11-5zm173 0h-97c-5 0-9 2-12 5s-5 7-5 11v34c0 4 2 8 5 11s7 5 12 5h97c4 0 8-2 11-5s5-7 5-11v-34c0-4-2-8-5-11-3-4-7-5-11-5zm173 0h-98c-4 0-8 2-11 5s-5 7-5 11v34c0 4 2 8 5 11s7 5 11 5h98c4 0 8-2 11-5s5-7 5-11v-34c0-4-2-8-5-11s-7-5-11-5zM334 558h-97c-4 0-8 2-12 5-3 3-4 7-4 11v34c0 4 1 8 4 11 3 4 8 5 12 5h97c4 0 8-1 11-5 3-3 5-7 5-11v-33c0-5-2-9-5-12s-7-5-11-5zm0 111h-97c-4 0-8 2-11 5s-5 7-5 11v34c0 4 2 8 5 12 3 3 7 4 11 5h97c4-1 8-2 11-5 3-4 5-8 5-12v-33c0-5-2-9-5-12s-7-5-11-5zm409-115H428c-20 0-36 16-36 36v176c0 20 16 36 36 36h315c20 0 36-16 36-36V590c0-20-16-36-36-36zM470 766c0-24-18-43-42-43v-90c24 0 42-19 42-43h230c0 24 19 43 43 43v90c-24 0-43 19-43 43H470zm176-91a60.8 60.8 0 11-122 0 60.8 60.8 0 01122 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-24ma4mj6cqj";
freezeTemplate(tmpl);
