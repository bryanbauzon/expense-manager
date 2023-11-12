import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom47.css";

import _implicitScopedStylesheets from "./custom47.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M640 720H300c-33 0-60 27-60 60v1c0 10 9 19 19 19h422c10 0 19-9 19-19v-1c0-33-27-60-60-60zm134-316L615 256l26-39c4-6 1-14-6-15-49-10-79 24-79 24-308 0-258 339-243 418 2 9 10 16 20 16h271c8 0 13-10 8-16-55-67-84-142-102-190-3-8 5-17 13-13 73 37 103-3 152 28 24 15 54 11 74-9l27-27c6-8 6-21-2-29zm-204-34c-17 0-30-13-30-30s13-30 30-30 30 13 30 30-13 30-30 30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-44i0ljct838";
freezeTemplate(tmpl);
