import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./zip.css";

import _implicitScopedStylesheets from "./zip.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#747474" d="M511-3A507 507 0 004 505v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2028L3706-3z"${3}/><path fill="#5c5c5c" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#c9c9c9" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M1844 5391h-758c-38 0-76-35-76-83 0-18 5-36 16-51l668-934h-621c-36 0-65-29-65-69 0-35 29-64 65-64h745c38 0 76 34 76 83 0 18-5 36-16 50l-668 934h634c36 0 64 29 64 65 1 40-28 69-64 69zm401 10c-41 0-74-32-74-73V4251c0-40 33-72 78-72 39 0 72 32 72 72v1077c0 41-33 73-76 73zm884-488l-333 1v414c0 41-33 73-76 73-41 0-74-32-74-73V4298c0-60 49-108 109-108h374c241 0 376 165 376 362s-138 362-376 362zm-18-590h-315v457h315c142 0 239-93 239-229 0-134-97-228-239-228z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 5600 6400",
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
tmpl.stylesheetToken = "lwc-4tbn4l8l0cn";
freezeTemplate(tmpl);
