import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom93.css";

import _implicitScopedStylesheets from "./custom93.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M424 500h295c9 0 17-6 19-15l54-190c4-13-6-25-19-25H317l-8-28c-4-13-16-22-29-22h-48c-16 0-31 12-32 28-1 17 13 32 30 32h28l94 318c4 13 15 22 29 22h348c16 0 31-12 32-28 1-17-13-32-30-32H425c-13 0-25-9-28-21v-1c-7-19 8-38 27-38z"${3}/><circle cx="430" cy="730" r="50"${3}/><circle cx="670" cy="730" r="50"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4pbmje4ledd";
freezeTemplate(tmpl);
