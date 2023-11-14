import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./remove_formatting.css";

import _implicitScopedStylesheets from "./remove_formatting.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M451 409l46-46c4-4 4-10 0-14l-28-28a10 10 0 00-14 0l-45 47-43-43a10 10 0 00-14 0l-28 28a10 10 0 000 14l43 43-42 42a10 10 0 000 14l28 28c4 4 10 4 14 0l42-42 45 45c4 4 10 4 14 0l28-28c4-4 4-10 0-14zM48 80h108l-41 232c-2 10 5 18 14 18h51c7 0 14-5 15-12l42-238h110c7 0 14-5 15-13l5-30c2-9-5-17-15-17H52c-7 0-13 5-14 13l-5 30c-2 9 5 17 15 17zm232 305c0-8-7-15-15-15H35c-8 0-15 7-15 15v30c0 8 7 15 15 15h230c8 0 15-7 15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4oua5sbvklq";
freezeTemplate(tmpl);
