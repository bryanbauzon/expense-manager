import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./selectableHeader.css";

import _implicitScopedStylesheets from "./selectableHeader.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span class="slds-checkbox_faux${0}"${2}></span>`;
const stc0 = {
  "slds-assistive-text": true
};
const stc1 = {
  "slds-th__action": true,
  "slds-th__action_form": true,
  "slds-cell-fixed": true
};
const stc2 = {
  classMap: {
    "slds-checkbox": true
  },
  key: 2
};
const stc3 = {
  "datatable-select-all": true
};
const stc4 = {
  "slds-checkbox__label": true
};
const stc5 = {
  classMap: {
    "slds-form-element__label": true,
    "slds-assistive-text": true
  },
  key: 7
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, d: api_dynamic_text, t: api_text, h: api_element, ti: api_tab_index, b: api_bind, st: api_static_fragment} = $api;
  const {_m0} = $ctx;
  return [api_element("span", {
    classMap: stc0,
    attrs: {
      "id": api_scoped_id("column-group-header"),
      "data-column-header": ""
    },
    key: 0
  }, [api_text(api_dynamic_text($cmp.computedColumnHeaderLabel))]), api_element("div", {
    classMap: stc1,
    style: $cmp.columnStyles,
    key: 1
  }, [$cmp.showCheckbox ? api_element("span", stc2, [api_element("input", {
    classMap: stc3,
    attrs: {
      "type": "checkbox",
      "name": $cmp.computedOptionName,
      "id": api_scoped_id("lgt-dt-header-factory-id"),
      "tabindex": api_tab_index($cmp.internalTabIndex),
      "data-navigation": "enable",
      "disabled": $cmp.def.isBulkSelectionDisabled ? "" : null
    },
    key: 3,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleSelectAllRows))
    }
  }), api_element("label", {
    classMap: stc4,
    attrs: {
      "for": api_scoped_id("lgt-dt-header-factory-id")
    },
    key: 4
  }, [api_static_fragment($fragment1(), 6), api_element("span", stc5, [api_text(api_dynamic_text($cmp.i18n.selectAll))])])]) : null])];
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
tmpl.stylesheetToken = "lwc-5pi77bcd5ae";
freezeTemplate(tmpl);
