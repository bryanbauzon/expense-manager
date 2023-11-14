import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./task.css";

import _implicitScopedStylesheets from "./task.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M192 360v-40c0-11 9-20 20-20h260c11 0 20 9 20 20v40c0 11-9 20-20 20H212c-10 0-20-9-20-20zm0 180v-40c0-11 9-20 20-20h320c11 0 20 9 20 20v40c0 11-9 20-20 20H212c-10 0-20-9-20-20zm440 0v-40c0-11 9-20 20-20h40c11 0 20 9 20 20v40c0 11-9 20-20 20h-40c-10 0-20-9-20-20zm0 180v-40c0-11 9-20 20-20h40c11 0 20 9 20 20v40c0 11-9 20-20 20h-40c-10 0-20-9-20-20zm-440 0v-40c0-11 9-20 20-20h320c11 0 20 9 20 20v40c0 11-9 20-20 20H212c-10 0-20-9-20-20zm655-483l-21-21c-6-6-15-6-21 0L673 348l-53-53c-6-6-15-6-21 0l-21 21c-6 6-6 15 0 21l74 74a29 29 0 0042 0l153-153c5-5 5-15 0-21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5pmr3bllsdg";
freezeTemplate(tmpl);
