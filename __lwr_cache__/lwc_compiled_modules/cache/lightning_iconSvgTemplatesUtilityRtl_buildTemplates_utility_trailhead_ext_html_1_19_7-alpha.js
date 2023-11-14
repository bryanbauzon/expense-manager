import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./trailhead_ext.css";

import _implicitScopedStylesheets from "./trailhead_ext.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M498 325a14 14 0 00-14-14H364a14 14 0 00-14 14v14a14 14 0 0014 14h61L315 463a15 15 0 000 20l10 10a16 16 0 0011 5 10 10 0 009-4l110-110v60a14 14 0 0014 14h15a14 14 0 0014-14zm-280-74h77l-39-57zm-50-126l3-3a14 14 0 0118 3l42 60 15-21 3-3a14 14 0 0118 3l60 86h39a105 105 0 0117-4A290 290 0 00208 23a10 10 0 00-11 0A290 290 0 0023 250h58zm10 29l-33 49-31 47h73l29-41zM21 322a16 16 0 005 11 329 329 0 00160 54l16-25 11-20a6 6 0 00-3-10l-12-5-4-2a34 34 0 01-13-46l1-2H21zm215 37l-14 28 25-3a156 156 0 0165-108h-95l-11 16a7 7 0 004 10l11 5 4 1a34 34 0 0113 47z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6vkqc18qdt7";
freezeTemplate(tmpl);
