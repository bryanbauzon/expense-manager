import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./case_transcript.css";

import _implicitScopedStylesheets from "./case_transcript.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M380 300h40c6 0 10-4 10-10v-30h140v30c0 6 4 10 10 10h40c6 0 10-4 10-10v-30c0-33-27-60-60-60H430c-33 0-60 27-60 60v30c0 6 4 10 10 10zm360 60H260c-33 0-60 27-60 60v320c0 33 27 60 60 60h480c33 0 60-27 60-60V420c0-33-27-60-60-60zM610 670c0 17-13 30-30 30H440c-17 0-30-13-30-30V480c0-17 13-30 30-30h70c6 0 10 4 10 10v60c0 11 9 20 20 20h60c6 0 10 4 10 10zm0-157c0 4-3 7-7 7h-43c-11 0-20-9-20-20v-43c0-4 3-7 7-7l5 2 56 56z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-441paratq7e";
freezeTemplate(tmpl);
