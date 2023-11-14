import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./template.css";

import _implicitScopedStylesheets from "./template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M200 262v476c0 34 28 62 62 62h476c34 0 62-28 62-62V262c0-34-28-62-62-62H262c-34 0-62 28-62 62zm376 429V490c0-8 6-16 14-16h104c8 0 16 6 16 14v201c0 8-6 16-14 16H593c-8 0-16-6-16-14h-1zm-284 2V490c0-8 6-16 14-16h193c8 0 16 6 16 14v203c0 8-6 16-14 16H309c-8 0-16-6-17-14zm-1-384c0-8 6-16 14-16h389c8 0 16 6 16 14v90c0 8-6 16-14 16H307c-8 0-16-6-16-14v-90z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-enlj6pkck0";
freezeTemplate(tmpl);
