import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveTreegridCellToggle.html";
import labelCollapseBranch from '@salesforce/label/LightningPrimitiveCellTree.collapseBranch';
import labelExpandBranch from '@salesforce/label/LightningPrimitiveCellTree.expandBranch';
import { classSet, formatLabel } from 'lightning/utils';
import { normalizeString, normalizeBoolean } from 'lightning/utilsPrivate';
const i18n = {
  collapseBranch: labelCollapseBranch,
  expandBranch: labelExpandBranch
};
class PrivateTreeGridCellToggle extends LightningElement {
  constructor(...args) {
    super(...args);
    this.rowKeyValue = void 0;
    this.colKeyValue = void 0;
    this.value = void 0;
    this.displayValue = void 0;
    this._expanded = false;
    this._hasChildren = false;
    this._tabindex = 0;
  }
  get computedButtonClass() {
    return classSet('slds-button slds-button_icon slds-m-right_x-small').add({
      'slds-is-disabled': !this.hasChildren
    }).toString();
  }
  get tabIndex() {
    return -1;
  }
  set tabIndex(newValue) {
    this.setAttribute('tabindex', newValue);
    this._tabindex = newValue;
  }
  get buttonTabIndex() {
    return this._tabindex;
  }
  get hasChildren() {
    return this._hasChildren;
  }
  set hasChildren(value) {
    this._hasChildren = normalizeBoolean(value);
  }
  get isExpanded() {
    return this._expanded;
  }
  set isExpanded(value) {
    this._expanded = normalizeBoolean(value);
  }
  get buttonTitle() {
    let title = normalizeString(this.displayValue) !== '' ? this.displayValue : this.value;
    if (this.isExpanded) {
      return formatLabel(i18n.collapseBranch, title);
    }
    return formatLabel(i18n.expandBranch, title);
  }
  handleChevronClick() {
    const customEvent = new CustomEvent('privatetogglecell', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        name: this.rowKeyValue,
        nextState: this.isExpanded ? false : true // True = expanded, False = collapsed
      }
    });

    this.dispatchEvent(customEvent);
  }
  focus() {
    this.template.querySelector('button').focus();
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(PrivateTreeGridCellToggle, {
  publicProps: {
    rowKeyValue: {
      config: 0
    },
    colKeyValue: {
      config: 0
    },
    value: {
      config: 0
    },
    displayValue: {
      config: 0
    },
    tabIndex: {
      config: 3
    },
    hasChildren: {
      config: 3
    },
    isExpanded: {
      config: 3
    }
  },
  publicMethods: ["focus"],
  fields: ["_expanded", "_hasChildren", "_tabindex"]
});
export default _registerComponent(PrivateTreeGridCellToggle, {
  tmpl: _tmpl,
  sel: "lightning-primitive-treegrid-cell-toggle",
  apiVersion: 59
});