import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_step_template.css";

import _implicitScopedStylesheets from "./work_step_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M285 685V345h-16a49 49 0 00-48 49v354a49 49 0 0048 49h356a49 49 0 0048-49v-14H333a49 49 0 01-48-49zm179-383h177a16 16 0 0016-16v-33a49 49 0 00-48-49H496a48 48 0 00-48 49v33a16 16 0 0016 16zm266-58h-16a7 7 0 00-8 8v33a66 66 0 01-65 66H464a66 66 0 01-65-66v-33a7 7 0 00-8-8h-16a48 48 0 00-48 49v353a49 49 0 0048 49h355a48 48 0 0048-49V294a49 49 0 00-48-50zM609 555a16 16 0 01-16 16H431a16 16 0 01-16-16v-16a16 16 0 0116-16h162a16 16 0 0116 16zm81-82a16 16 0 01-16 16H431a16 16 0 01-16-16v-16a16 16 0 0116-16h243a16 16 0 0116 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-55hvedetsqf";
freezeTemplate(tmpl);
