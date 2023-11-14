import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./code_set.css";

import _implicitScopedStylesheets from "./code_set.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M746 336L614 204a13 13 0 00-10-4 14 14 0 00-14 13v107a40 40 0 0040 40h106a14 14 0 0014-13v-1a13 13 0 00-4-10zm-16 84H590a60 60 0 01-60-60V220a20 20 0 00-20-20H310a60 60 0 00-60 60v480a60 60 0 0060 60h380a60 60 0 0060-60V440a20 20 0 00-20-20zm-420-6v-1l4-15a6 6 0 017-5h20l8-33h-17a6 6 0 01-7-6v-2l5-16a6 6 0 016-5h21l8-33a6 6 0 017-5h16a6 6 0 016 6v3l-8 30h35l8-34a6 6 0 016-5h17a6 6 0 017 7v1l-8 30h16a9 9 0 015 2l1 1v3l-4 16a6 6 0 01-6 5h-20l-9 33h17a6 6 0 016 7v2l-4 16a6 6 0 01-6 5h-20l-8 33a6 6 0 01-7 5l-16 1a6 6 0 01-7-7v-1l8-30h-34l-9 33a6 6 0 01-6 5h-17a6 6 0 01-6-6v-2l8-31h-17a6 6 0 01-6-7zm300 276a20 20 0 01-20 20H330a20 20 0 01-20-20v-20a20 20 0 0120-20h260a20 20 0 0120 20zm40-120a20 20 0 01-20 20H330a20 20 0 01-20-20v-20a20 20 0 0120-20h300a20 20 0 0120 20zM413 360h-34l-8 33h34z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-43b6jeest9e";
freezeTemplate(tmpl);
