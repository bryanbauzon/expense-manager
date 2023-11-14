import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact_list.css";

import _implicitScopedStylesheets from "./contact_list.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M263 227c-45 0-82 35-82 78v443c0 43 37 78 82 78h436c45 0 82-35 82-78V305c0-43-37-78-82-78zm109 182c0 14-12 26-27 26h-27c-15 0-27-12-27-26v-26c0-14 12-26 27-26h27c15 0 27 12 27 26zm300 0c0 14-12 26-27 26H454c-15 0-27-12-27-26v-26c0-14 12-26 27-26h191c15 0 27 12 27 26zM372 540c0 14-12 26-27 26h-27c-15 0-27-12-27-26v-26c0-14 12-26 27-26h27c15 0 27 12 27 26zm250 0c0 14-12 26-27 26H454c-15 0-27-12-27-26v-26c0-14 12-26 27-26h141c15 0 27 12 27 26zM372 670c0 14-12 26-27 26h-27c-15 0-27-12-27-26v-26c0-14 12-26 27-26h27c15 0 27 12 27 26zm300 0c0 14-12 26-27 26H454c-15 0-27-12-27-26v-26c0-14 12-26 27-26h191c15 0 27 12 27 26z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4n57qd2pt2s";
freezeTemplate(tmpl);
