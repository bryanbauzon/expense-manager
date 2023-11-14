import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./setup_assistant_guide.css";

import _implicitScopedStylesheets from "./setup_assistant_guide.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M115 249c0-4-5-6-8-4l-45 37c-2 2-2 5-2 8v159c0 10 14 15 23 8l73-57c2-2 3-4 1-7a303 303 0 01-42-144zm97 149l6 2h83l6-2c12-8 60-48 60-184 0-63-18-107-39-137-31-44-68-57-68-57s-38 13-69 58a230 230 0 00-38 136c0 136 47 176 59 184zm47-268c33 0 60 27 60 60s-27 60-60 60-60-27-60-60 27-60 60-60zm198 152l-44-37c-3-3-8-1-8 4a327 327 0 01-41 145c-1 2-1 5 1 7l73 57c9 7 22 2 22-8V290c0-3 0-6-3-8zM322 445c-2-3-5-5-8-5H204c-3 0-7 2-8 5-4 6-10 17-14 31-3 12 7 24 20 24h114c13 0 23-12 20-24a90 90 0 00-14-31z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
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
tmpl.stylesheetToken = "lwc-d4rjgr44lb";
freezeTemplate(tmpl);
