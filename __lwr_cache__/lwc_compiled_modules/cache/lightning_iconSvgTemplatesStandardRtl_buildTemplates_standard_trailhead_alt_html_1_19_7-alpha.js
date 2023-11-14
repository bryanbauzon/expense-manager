import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./trailhead_alt.css";

import _implicitScopedStylesheets from "./trailhead_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M453 628l-2 3a86 86 0 0030 98c20 15 24 22 22 36a94 94 0 01-14 35 559 559 0 01-289-92v-46l1-34h252zm346 0l1 34v46a563 563 0 01-254 90 122 122 0 007-25c6-47-23-70-41-84a36 36 0 01-14-40 99 99 0 0112-21h289zM456 420l55 81-52 77H349zm44-220a490 490 0 01294 377h-74L610 416a26 26 0 00-42 0l-27 40-64-95a26 26 0 00-42 0L288 577h-81a490 490 0 01293-377zm90 275l70 102H520z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5smtvmqe6i3";
freezeTemplate(tmpl);
