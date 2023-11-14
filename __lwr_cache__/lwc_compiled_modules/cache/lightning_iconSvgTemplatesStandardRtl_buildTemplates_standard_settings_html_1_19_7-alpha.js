import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./settings.css";

import _implicitScopedStylesheets from "./settings.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M501 413c-49 0-88 39-88 88s39 88 88 88 88-39 88-88-39-88-88-88zm263 167l-46-39a209 209 0 000-86l46-39c15-13 20-35 10-53l-20-35c-8-13-21-20-36-20-5 0-10 1-14 3l-58 21c-23-20-48-34-74-43l-10-59c-4-20-21-31-41-31h-40c-20 0-38 11-41 31l-10 58c-28 9-53 24-75 43l-59-21c-5-1-9-3-14-3-15 0-29 8-36 20l-20 35c-10 18-6 40 10 53l46 39a209 209 0 000 86l-46 39a43 43 0 00-10 53l20 35c8 13 21 20 36 20 5 0 10-1 14-3l58-21c23 20 48 34 74 43l10 60c4 20 20 34 41 34h40c20 0 38-15 41-35l10-60c29-10 55-25 78-46l54 21 15 3c15 0 29-8 36-20l19-33c12-15 7-37-8-50zm-263 59a138 138 0 11138-138c0 76-62 138-138 138z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2lo0fm3sfus";
freezeTemplate(tmpl);
