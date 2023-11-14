import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./datadotcom.css";

import _implicitScopedStylesheets from "./datadotcom.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M711 800h-68c-4-24-6-46-6-65h-1c-32 51-84 77-156 77-61 0-109-20-142-63-33-42-49-97-49-163 0-43 8-82 24-116a194 194 0 01177-113c59 0 106 19 142 56V200h72v506c0 30 3 62 7 94zm-79-185V478c-17-22-36-37-57-49-22-10-46-15-74-15-42 0-75 15-100 47s-36 73-36 123c0 52 11 93 34 124s56 46 97 46 74-13 98-40c26-25 38-58 38-99z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-404i3qvg9hn";
freezeTemplate(tmpl);
