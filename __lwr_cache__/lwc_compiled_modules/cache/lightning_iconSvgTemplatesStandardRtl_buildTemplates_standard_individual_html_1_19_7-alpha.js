import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./individual.css";

import _implicitScopedStylesheets from "./individual.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M794 729l-120 68c-6 4-15 4-21 0l-119-68c-5-3-5-9 0-11l28-16h6l73 41a46 46 0 0046 0l73-41h6l28 16c5 2 5 8 0 11zm0-77l-120 68c-6 4-15 4-21 0l-119-68c-5-3-5-9 0-11l28-16h6l73 41a46 46 0 0046 0l73-41h6l28 16c5 2 5 8 0 11zm-140-8l-120-68c-5-3-5-9 0-11l120-68c6-4 15-4 21 0l120 68c5 3 5 9 0 11l-120 68c-6 3-15 3-21 0zm-135-39c5-3 5-9 0-11l-28-16h-1v-13s0-17 15-26l21-11-12-5c-18-9-44-18-52-41-5-12-2-25 4-36 11-11 21-21 30-35l6-10c25-36 28-85 14-126-15-44-54-74-102-75h-7c-48 1-88 31-102 75-15 42-11 90 14 126 1 4 4 6 6 10 9 14 20 23 30 35 5 11 7 23 4 36-7 22-33 32-52 41-42 18-94 44-102 95-9 42 20 84 64 84h221l29-19c5-3 5-9 0-11l-28-16h-1v-32z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-72putjosmm6";
freezeTemplate(tmpl);
