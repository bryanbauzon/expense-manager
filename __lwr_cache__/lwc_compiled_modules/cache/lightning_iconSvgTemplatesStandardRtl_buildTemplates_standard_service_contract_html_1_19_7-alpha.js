import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_contract.css";

import _implicitScopedStylesheets from "./service_contract.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M306 299c0 8 6 14 14 14h106c22 0 40-18 40-40V167c0-8-6-14-14-14-4 0-7 1-10 4L310 289c-3 3-4 6-4 10zm0 198c-1 17 19 18 31 18s94 4 144 62 44 131 43 148 19 28 19 28h203c33 0 60-27 60-60V213c0-33-27-60-60-60H546c-11 0-20 9-20 20v140c0 33-27 60-60 60H326c-11 0-20 9-20 20zm434-211l-36 35-1 4 8 49c1 3-3 6-6 4l-44-23h-4l-44 23c-3 2-7-1-6-4l8-49-1-4-36-35c-3-2-1-6 2-7l49-7 3-2 22-45c2-3 6-3 8 0l22 45 3 2 49 7c3 1 5 5 4 7zM556 593c0-11 9-20 20-20h130c11 0 20 9 20 20v20c0 11-9 20-20 20H576c-11 0-20-9-20-20zM446 473c0-11 9-20 20-20h240c11 0 20 9 20 20v20c0 11-9 20-20 20H466c-11 0-20-9-20-20zM195 705a143 143 0 10286 0 143 143 0 00-286 0zm70-30l2-12c0-2 3-2 4-1l24 24c2 2 5 2 7 0l17-17c2-1 2-5 0-6l-24-25c-1-2-1-4 1-4l12-2c25 0 45 23 43 48l-2 11 55 55c6 7 6 18 0 24-4 4-7 5-12 5-4 0-8-1-12-5l-55-54-12 2c-26 2-47-18-48-43z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-77usgt8vsbn";
freezeTemplate(tmpl);
