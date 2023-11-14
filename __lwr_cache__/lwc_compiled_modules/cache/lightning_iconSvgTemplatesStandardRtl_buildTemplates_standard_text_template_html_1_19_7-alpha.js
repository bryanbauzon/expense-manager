import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text_template.css";

import _implicitScopedStylesheets from "./text_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M573 648h174c28 0 50-23 50-50V250c0-28-23-50-50-50H400c-28 0-50 23-50 50v207c16 1 32 8 43 20l20 19 2 2c20 22 23 53 9 77h84c35 0 63 27 65 61zm149-336c0 7-5 12-12 12h-75c-7 0-12-5-12-12v-35c0-7 5-12 12-12h75c7 0 12 5 12 12zm-1 74v35c0 7-5 12-12 12H437c-7 0-12-5-12-12v-35c0-7 5-12 12-12h273c7 0 12 5 11 12zm-12 156H486c-7 0-12-5-12-12v-35c0-7 5-12 12-12h224c7 0 12 5 12 12v35c0 8-5 13-13 12zM205 643c-5 5-5 14 0 20l132 132c5 5 14 5 20 0l20-21c5-5 5-14 0-20l-55-55c-3-4-2-11 2-14l5-2h179c8-2 14-8 15-16v-30c-1-8-7-14-15-14H329c-6 0-10-4-10-10 0-3 1-5 3-7l55-55c5-5 5-14 0-20l-21-20c-5-6-14-6-20-1l-1 1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-25vj0pf1qmi";
freezeTemplate(tmpl);
