import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./template.css";

import _implicitScopedStylesheets from "./template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M738 200H262c-34 0-62 28-62 62v476c0 34 28 62 62 62h476c34 0 62-28 62-62V262c0-34-28-62-62-62zM423 691c0 8-8 14-16 14H304c-8 0-14-8-14-16V488c0-8 8-14 16-14h104c8 0 14 8 14 16v201zm284 2c0 8-8 14-16 14H499c-8 0-14-8-14-16V488c0-8 8-14 16-14h193c8 0 14 8 14 16v203zm2-294c0 8-8 14-16 14H304c-8 0-14-8-14-16v-90c0-8 8-14 16-14h389c8 0 14 8 14 16v90z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4209tr2m38c";
freezeTemplate(tmpl);
