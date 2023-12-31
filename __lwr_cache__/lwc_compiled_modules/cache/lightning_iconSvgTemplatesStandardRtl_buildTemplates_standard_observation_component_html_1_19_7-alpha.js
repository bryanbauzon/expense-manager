import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./observation_component.css";

import _implicitScopedStylesheets from "./observation_component.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M231 327h3l206-30v291a8 8 0 008 9h35a8 8 0 009-9V289l212-32a27 27 0 0023-30 26 26 0 00-30-22l-171 24a85 85 0 00-61-25 88 88 0 00-77 46l-162 24a27 27 0 005 53zm490 199a25 25 0 004-27l-69-165a27 27 0 00-49 0l-70 165a27 27 0 002 25c1 2 28 43 72 53a144 144 0 0185-28h3a203 203 0 0022-23zm-127-25l37-90 38 90zm-204 78a25 25 0 004-27l-70-166a25 25 0 00-23-16 27 27 0 00-25 16l-70 165a27 27 0 002 24c2 3 36 55 90 55 33 1 64-17 92-52zm-127-26l38-90 37 90zm288 141a144 144 0 013-26 219 219 0 00-88-19 210 210 0 00-133 47 18 18 0 00-6 13v1a17 17 0 0017 17h211a143 143 0 01-4-33zm145 102a102 102 0 11102-102 102 102 0 01-102 102zm9-127a10 10 0 00-7 2l-16 11a35 35 0 00-6 6 3 3 0 000 4 3 3 0 004 0l4-1a24 24 0 013-2c2 0 3 0 3 2a22 22 0 010 3l-12 48a9 9 0 005 11 12 12 0 0012-1l15-11a55 55 0 008-8 2 2 0 000-2 3 3 0 00-3-2l-4 2-5 2c-1 0-2 0-2-2a26 26 0 010-4l11-45a10 10 0 00-10-13zm11-21a16 16 0 00-18-15 14 14 0 00-10 20 15 15 0 0017 9 15 15 0 0011-14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4j33g4bqars";
freezeTemplate(tmpl);
