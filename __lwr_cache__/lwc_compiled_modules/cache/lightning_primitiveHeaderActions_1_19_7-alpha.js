import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveHeaderActions.html";
import labelClipText from '@salesforce/label/LightningDatatable.clipText';
import labelShowActions from '@salesforce/label/LightningDatatable.showActions';
import labelWrapText from '@salesforce/label/LightningDatatable.wrapText';
import { deepCopy } from 'lightning/utilsPrivate';
const i18n = {
  clipText: labelClipText,
  showActions: labelShowActions,
  wrapText: labelWrapText
};

/**
 * A header-level action.
 */
class PrimitiveHeaderActions extends LightningElement {
  constructor(...args) {
    super(...args);
    // Tracked objects
    this.containerRect = void 0;
    this._internalActions = [];
    this._customerActions = [];
    this._actionMenuAlignment = void 0;
    /************************** PUBLIC ATTRIBUTES ***************************/
    this.colKeyValue = void 0;
  }
  /**
   * Defines the actions on a header cell
   *
   * @type {Object}
   */
  get actions() {
    return this._actions;
  }
  set actions(value) {
    this._actions = value;
    this.updateActions();
  }

  /************************** PUBLIC METHODS ***************************/

  /**
   * Sets focus on a lightning-button-menu
   */
  focus() {
    const btnMenu = this.template.querySelector('lightning-button-menu');
    if (btnMenu) {
      btnMenu.focus();
    }
  }

  /************************** PRIVATE GETTERS **************************/

  /**
   * Returns the internationalization definition object
   *
   * @return {Object} The i18n definition object
   */
  get i18n() {
    return i18n;
  }

  /**
   * Determines whether or not a header has actions
   *
   * @return {Boolean}
   */
  get hasActions() {
    return this._internalActions.length > 0 || this._customerActions.length > 0;
  }

  /**
   * Determines whether or not a header has an action divider
   *
   * @return {Boolean}
   */
  get hasActionsDivider() {
    return this._internalActions.length > 0 && this._customerActions.length > 0;
  }

  /************************ EVENT DISPATCHERS **************************/

  /**
   * Handles opening a menu
   *
   * @param {Event} event
   */
  handleMenuOpen(event) {
    event.preventDefault();
    event.stopPropagation();
    this.elementRect = this.template.querySelector('lightning-button-menu').getBoundingClientRect();
    this.dispatchEvent(new CustomEvent('privatecellheaderactionmenuopening', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        actionsCount: this._internalActions.length + this._customerActions.length,
        dividersCount: this.hasActionsDivider ? 1 : 0,
        saveContainerPosition: containerRect => {
          this.containerRect = containerRect;
        }
      }
    }));
  }

  /**
   * Handles closing a menu
   */
  handleMenuClose() {
    this.dispatchEvent(new CustomEvent('privatecellheaderactionmenuclosed', {
      bubbles: true,
      composed: true,
      cancelable: true
    }));
  }

  /**
   * Handles selecting an action
   *
   * @param {Event} event
   */
  handleActionSelect(event) {
    const action = event.detail.value;
    this.dispatchEvent(new CustomEvent('privatecellheaderactiontriggered', {
      composed: true,
      bubbles: true,
      cancelable: true,
      detail: {
        action: deepCopy(action._action),
        actionType: action._type,
        colKeyValue: this.colKeyValue
      }
    }));
  }

  /************************* HELPER FUNCTIONS **************************/

  /**
   * Updates the actions object
   */
  updateActions() {
    const actionTypeReducer = type => (actions, action) => {
      const overrides = {
        _type: type,
        _action: action
      };
      actions.push(Object.assign({}, action, overrides));
      return actions;
    };
    this._internalActions = this.getActionsByType('internalActions').reduce(actionTypeReducer('internal'), []);
    this._customerActions = this.getActionsByType('customerActions').reduce(actionTypeReducer('customer'), []);

    // TODO: W-8389508 Refactor so menu is outside of header
    this._actionMenuAlignment = this._actions.menuAlignment && this._actions.menuAlignment.replace('auto-', '');
  }

  /**
   * Returns actions by action type
   *
   * @param {String} type The action type to filter by
   * @return {Array} An array of actions that match the provided type
   */
  getActionsByType(type) {
    return Array.isArray(this._actions[type]) ? this._actions[type] : [];
  }
  /*LWC compiler v3.0.0*/
}
// Private variables
PrimitiveHeaderActions.delegatesFocus = true;
_registerDecorators(PrimitiveHeaderActions, {
  publicProps: {
    colKeyValue: {
      config: 0
    },
    actions: {
      config: 3
    }
  },
  publicMethods: ["focus"],
  track: {
    containerRect: 1,
    _internalActions: 1,
    _customerActions: 1
  },
  fields: ["_actionMenuAlignment"]
});
export default _registerComponent(PrimitiveHeaderActions, {
  tmpl: _tmpl,
  sel: "lightning-primitive-header-actions",
  apiVersion: 59
});