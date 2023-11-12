import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom83.css";

import _implicitScopedStylesheets from "./custom83.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M746 393c4 4 10 4 14 0l14-14c34-34 35-86 2-119l-44-44c-34-28-81-15-108 12l-14 14c-4 4-4 10 0 14zm-180-95c-4-4-10-4-14 0L277 571c-15 15-26 33-33 54l-42 135c-3 8-2 18 2 25 6 10 16 15 26 15l9-1 137-43c20-6 38-17 53-32l274-274c4-4 4-10 0-14zM358 699l-82 26 26-82c3-11 9-20 17-28l67 67c-8 8-18 14-28 17z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1hm7qumra7n";
freezeTemplate(tmpl);
