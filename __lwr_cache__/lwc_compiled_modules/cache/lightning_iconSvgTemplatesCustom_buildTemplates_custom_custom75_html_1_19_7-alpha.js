import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom75.css";

import _implicitScopedStylesheets from "./custom75.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 200c-17 0-30 13-30 30v540c0 17 13 30 30 30 165 0 300-135 300-300S665 200 500 200zm238 270h-79c-3-71-19-133-43-180 66 37 112 103 122 180zM530 727V530h69c-5 94-35 168-69 197zm0-257V273c34 29 64 103 69 197zm86 240c24-47 39-109 43-180h79c-10 77-56 143-122 180zM335 399c8 6 20 5 27-3l55-62c7-8 7-20-1-27l-55-55c-7-7-17-8-25-3l-11 7a301 301 0 0011 495c8 5 18 4 25-3l55-55c7-7 8-20 1-27l-55-62c-7-8-19-9-27-3l-21 16c-22-34-34-74-34-117s12-83 34-117z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-507ctub8ar7";
freezeTemplate(tmpl);
