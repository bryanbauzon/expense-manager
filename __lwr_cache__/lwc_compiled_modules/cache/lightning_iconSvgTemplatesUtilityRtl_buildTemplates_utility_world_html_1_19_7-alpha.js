import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./world.css";

import _implicitScopedStylesheets from "./world.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 20a240 240 0 100 480 240 240 0 100-480zm20 51h-2zm-20 379A190 190 0 0170 260c0-10 1-21 3-30 13 2 29 7 37 15 17 18 36 39 54 43l-4 4c-2 3-4 9-4 19 0 47 44 19 44 66s53 66 53 28 35-56 35-85-27-28-44-38c-18-9-27-24-61-19-18-17-28-31-20-47 9-17 46-20 46-46s-25-31-43-31c-8 0-25-6-39-13 17-17 38-31 60-41 16 7 43 18 66 18 27 0 41-19 37-31 45 7 85 30 114 62-15 9-35 19-70 19-46 0-46 47-19 56 28 9 56-18 65 0s-65 18-46 64 37-1 56 45 56-7 28-43c-12-16-9-65 19-65h9c4 16 7 33 7 50-3 105-88 190-193 190z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7os99i3dqph";
freezeTemplate(tmpl);
