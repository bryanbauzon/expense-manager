import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text_template.css";

import _implicitScopedStylesheets from "./text_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M425 638v-2c2-34 30-61 65-61h84a65 65 0 019-77l2-2 20-19c11-12 27-19 43-20V250c0-27-22-50-50-50H251c-27 0-50 22-50 50v348c0 27 22 50 50 50h174zM276 277c0-7 5-12 12-12h75c7 0 12 5 12 12v35c0 7-5 12-12 12h-75c-7 0-12-5-12-12zm0 109c0-7 5-12 12-12h273c7 0 12 5 12 12v35c0 7-5 12-12 12H289c-7 0-12-5-12-12v-35zm0 144v-35c0-7 5-12 12-12h224c7 0 12 5 12 12v35c0 7-5 12-12 12H289c-8 1-13-4-13-12zm387-19l-1-1c-6-5-15-5-20 1l-21 20c-5 6-5 15 0 20l55 55c2 2 3 4 3 7 0 6-4 10-10 10H490c-8 0-14 6-15 14v30c1 8 7 14 15 16h179l5 2c4 3 5 10 2 14l-55 55c-5 6-5 15 0 20l20 21c6 5 15 5 20 0l132-132c5-6 5-15 0-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5c3cse6l9ao";
freezeTemplate(tmpl);
