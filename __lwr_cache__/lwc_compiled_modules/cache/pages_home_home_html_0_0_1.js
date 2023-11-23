import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./home.css";

import _implicitScopedStylesheets from "./home.scoped.css?scoped=true";

import _componentsLoader from "components/loader";
import _componentsNavbar from "components/navbar";
import _lightningButton from "lightning/button";
import _lightningLayoutItem from "lightning/layoutItem";
import _componentsDatatable from "components/datatable";
import _lightningCard from "lightning/card";
import _componentsChartbox from "components/chartbox";
import _lightningLayout from "lightning/layout";
import _lightningInput from "lightning/input";
import _lightningCombobox from "lightning/combobox";
import _lightningTextarea from "lightning/textarea";
import _componentsMyModal from "components/myModal";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<thead${3}><tr${3}><th${3}>No</th><th${3}>Category</th><th${3}>Total Amount</th></tr></thead>`;
const $fragment2 = parseFragment`<div class="noData${0}"${2}>No data fetched.</div>`;
const $fragment3 = parseFragment`<button class="slds-button slds-button_neutral${0}"${2}>Cancel</button>`;
const stc0 = {
  key: 1
};
const stc1 = {
  classMap: {
    "slds-p-around_large": true,
    "wrapper": true
  },
  key: 3
};
const stc2 = {
  props: {
    "multipleRows": true
  },
  key: 4
};
const stc3 = {
  props: {
    "size": "12",
    "smallDeviceSize": "12",
    "mediumDeviceSize": "12",
    "largeDeviceSize": "12",
    "padding": "around-small"
  },
  key: 5
};
const stc4 = {
  classMap: {
    "slds-text-align_right": true
  },
  key: 6
};
const stc5 = {
  "variant": "brand",
  "label": "Add Expense",
  "iconName": "utility:add"
};
const stc6 = {
  props: {
    "size": "12",
    "smallDeviceSize": "12",
    "mediumDeviceSize": "12",
    "largeDeviceSize": "12",
    "padding": "around-small"
  },
  key: 9
};
const stc7 = {
  props: {
    "title": "Expense Details"
  },
  key: 10
};
const stc8 = {
  props: {
    "size": "12",
    "smallDeviceSize": "12",
    "mediumDeviceSize": "4",
    "largeDeviceSize": "4",
    "padding": "around-small"
  },
  key: 12
};
const stc9 = {
  props: {
    "title": "Expense By Categories Chart View"
  },
  key: 13
};
const stc10 = {
  props: {
    "size": "12",
    "smallDeviceSize": "12",
    "mediumDeviceSize": "8",
    "largeDeviceSize": "8",
    "padding": "around-small"
  },
  key: 16
};
const stc11 = {
  props: {
    "title": "Expense By Categories Table View"
  },
  key: 17
};
const stc12 = {
  classMap: {
    "slds-p-around_large": true
  },
  key: 18
};
const stc13 = {
  key: 19
};
const stc14 = {
  key: 22
};
const stc15 = {
  key: 24
};
const stc16 = {
  key: 25
};
const stc17 = {
  key: 26
};
const stc18 = {
  key: 31
};
const stc19 = {
  "validate": true
};
const stc20 = {
  attrs: {
    "slot": "footer"
  },
  key: 37
};
const stc21 = {
  "slds-button": true,
  "slds-button_brand": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, fr: api_fragment, b: api_bind, h: api_element, st: api_static_fragment, k: api_key, d: api_dynamic_text, t: api_text, i: api_iterator} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10} = $ctx;
  return [$cmp.showSpinner ? api_fragment(0, [api_custom_element("components-loader", _componentsLoader, stc0)], 0) : null, api_custom_element("components-navbar", _componentsNavbar, {
    props: {
      "loggedInUser": $cmp.loggedInUser,
      "backendUrl": $cmp.backendUrl
    },
    key: 2
  }), api_element("div", stc1, [api_custom_element("lightning-layout", _lightningLayout, stc2, [api_custom_element("lightning-layout-item", _lightningLayoutItem, stc3, [api_element("div", stc4, [api_custom_element("lightning-button", _lightningButton, {
    props: stc5,
    key: 7,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.addExpense))
    }
  })])]), $cmp.hasRecords ? api_fragment(8, [api_custom_element("lightning-layout-item", _lightningLayoutItem, stc6, [api_custom_element("lightning-card", _lightningCard, stc7, [api_custom_element("components-datatable", _componentsDatatable, {
    props: {
      "records": $cmp.expenseRecords
    },
    key: 11,
    on: {
      "edit": _m1 || ($ctx._m1 = api_bind($cmp.editHandler)),
      "delete": _m2 || ($ctx._m2 = api_bind($cmp.deleteHandler))
    }
  })])]), api_custom_element("lightning-layout-item", _lightningLayoutItem, stc8, [api_custom_element("lightning-card", _lightningCard, stc9, [$cmp.chartData ? api_fragment(14, [api_custom_element("components-chartbox", _componentsChartbox, {
    props: {
      "chartRecords": $cmp.chartData
    },
    key: 15
  })], 0) : null])]), api_custom_element("lightning-layout-item", _lightningLayoutItem, stc10, [api_custom_element("lightning-card", _lightningCard, stc11, [api_element("div", stc12, [api_element("table", stc13, [api_static_fragment($fragment1(), 21), api_element("tbody", stc14, api_iterator($cmp.categoryTableData, function (item) {
    return api_element("tr", {
      key: api_key(23, item.id)
    }, [api_element("td", stc15, [api_text(api_dynamic_text(item.id))]), api_element("td", stc16, [api_text(api_dynamic_text(item.category))]), api_element("td", stc17, [api_text(api_dynamic_text(item.amount))])]);
  }))])])])])], 0) : api_fragment(8, [api_static_fragment($fragment2(), 28)], 0)])]), $cmp.showModal ? api_fragment(29, [api_custom_element("components-my-modal", _componentsMyModal, {
    props: {
      "header": $cmp.modalActionLabel
    },
    key: 30
  }, [api_element("form", stc18, [api_custom_element("lightning-input", _lightningInput, {
    classMap: stc19,
    props: {
      "type": "text",
      "label": "Name",
      "required": true,
      "name": "Expense_Name__c",
      "value": $cmp.formData.Expense_Name__c
    },
    key: 32,
    on: {
      "keyup": _m3 || ($ctx._m3 = api_bind($cmp.changeHandler))
    }
  }), api_custom_element("lightning-input", _lightningInput, {
    classMap: stc19,
    props: {
      "type": "number",
      "label": "Amount",
      "required": true,
      "name": "Amount__c",
      "value": $cmp.formData.Amount__c
    },
    key: 33,
    on: {
      "keyup": _m4 || ($ctx._m4 = api_bind($cmp.changeHandler))
    }
  }), api_custom_element("lightning-input", _lightningInput, {
    classMap: stc19,
    props: {
      "type": "date",
      "label": "Expense Date",
      "required": true,
      "name": "Date__c",
      "value": $cmp.formData.Date__c
    },
    key: 34,
    on: {
      "change": _m5 || ($ctx._m5 = api_bind($cmp.changeHandler))
    }
  }), api_custom_element("lightning-combobox", _lightningCombobox, {
    classMap: stc19,
    props: {
      "name": "Category__c",
      "label": "Category",
      "value": $cmp.formData.Category__c,
      "options": $cmp.categoryOptions,
      "required": true
    },
    key: 35,
    on: {
      "change": _m6 || ($ctx._m6 = api_bind($cmp.changeHandler))
    }
  }), api_custom_element("lightning-textarea", _lightningTextarea, {
    classMap: stc19,
    props: {
      "name": "Notes__c",
      "label": "Notes",
      "value": $cmp.formData.Notes__c
    },
    key: 36,
    on: {
      "keyup": _m7 || ($ctx._m7 = api_bind($cmp.changeHandler))
    }
  })]), api_element("div", stc20, [api_static_fragment($fragment3(), 39, {
    on: {
      "click": _m9 || ($ctx._m9 = api_bind($cmp.cancelHandler))
    }
  }), api_element("button", {
    classMap: stc21,
    key: 40,
    on: {
      "click": _m10 || ($ctx._m10 = api_bind($cmp.saveHandler))
    }
  }, [api_text(api_dynamic_text($cmp.modalActionLabel))])])])], 0) : null];
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
tmpl.stylesheetToken = "lwc-6le4c39rot8";
freezeTemplate(tmpl);
