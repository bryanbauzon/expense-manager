import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./med_rec_statement_recommendation.css";

import _implicitScopedStylesheets from "./med_rec_statement_recommendation.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M515 694a65 65 0 00100 85l49-59-100-84zm213-150a65 65 0 00-92 8l-49 58 99 84 50-58a65 65 0 00-8-92zM605 200H297a48 48 0 00-47 48v402a48 48 0 0048 48h156a16 16 0 0014-9 115 115 0 0117-22l118-142a112 112 0 0140-33 16 16 0 0010-15V248a48 48 0 00-48-48zM465 330a7 7 0 017-6h21a7 7 0 017 6v100a7 7 0 01-6 6h-12a17 17 0 01-17-17zm-165 48v-32a17 17 0 0117-18h26a17 17 0 0018-17v-43a17 17 0 0117-18h11a7 7 0 016 7v26c0 23 16 45 37 45a7 7 0 017 7v86a6 6 0 01-6 7c-30 1-40 13-70 13-33 0-63-4-63-41zm109 245a17 17 0 01-17 16h-74a17 17 0 01-17-16v-17a17 17 0 0117-16h74a17 17 0 0117 16zm91-99a17 17 0 01-16 16H319a17 17 0 01-17-16v-17a17 17 0 0117-16h164a17 17 0 0117 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4nngqjso08k";
freezeTemplate(tmpl);
