import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./home.html";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { categoryList } from "./categoryList";
import LightningConfirm from "lightning/confirm";
//* constants
const BACKEND_URL = "http://localhost:3002";
const ADD_ACTION = "ADD";
const EDIT_ACTION = "EDIT";
class Home extends LightningElement {
  constructor(...args) {
    super(...args);
    this.expenseRecords = [];
    this.hasRecords = false;
    this.chartData = void 0;
    this.categoryTableData = [];
    this.showModal = false;
    this.formData = {};
    this.action = void 0;
    this.loggedInUser = void 0;
    this.showSpinner = false;
    this.backendUrl = BACKEND_URL;
  }
  async connectedCallback() {
    try {
      const user = await this.getLoggedInUser();
      if (!user.user_id) {
        window.location.href = '/login';
      } else {
        this.loggedInUser = user;
        await this.fetchExpenseData();
      }
    } catch (err) {
      console.error("response error: ", err);
    }
  }
  async fetchExpenseData() {
    const expenses = await this.getExpenses();
    this.expenseRecords = expenses.totalSize > 0 ? expenses.records : [];
    this.hasRecords = expenses.totalSize > 0;
    this.createChartData();
  }
  //* Method to get loggedIn user data
  async getLoggedInUser() {
    const url = `${BACKEND_URL}/oauth2/whoami`;
    return await this.makeApiRequest(url);
  }

  //*define a category options
  get categoryOptions() {
    return categoryList;
  }
  get modalActionLabel() {
    return this.action === EDIT_ACTION ? "Update Expense" : "Add Expense";
  }

  //*Method to get expenses data
  async getExpenses() {
    const url = `${BACKEND_URL}/expenses`;
    return await this.makeApiRequest(url);
  }

  //*generic API method
  async makeApiRequest(url, method = "GET", data = null) {
    try {
      this.showSpinner = true;
      const requestOptions = {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: data ? JSON.stringify(data) : null
      };
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`makeApiRequest - HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (err) {
      console.error("makeApiRequest - error occured: ", err);
    } finally {
      this.showSpinner = false;
    }
  }
  //*method to create chart data based on expenses
  createChartData() {
    const categorySums = {};
    this.expenseRecords.forEach(item => {
      const {
        Amount__c,
        Category__c
      } = item;
      //* check if category already exists in the sums object
      if (categorySums[Category__c]) {
        categorySums[Category__c] += Amount__c;
      } else {
        categorySums[Category__c] = Amount__c;
      }
    });
    this.categoryTableData = Object.keys(categorySums).map((item, index) => {
      return {
        id: index + 1,
        category: item,
        amount: this.formatCurrency(categorySums[item])
      };
    });
    this.chartData = {
      labels: Object.keys(categorySums),
      results: Object.values(categorySums)
    };
  }
  formatCurrency(number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "PHP"
    });
  }
  //*Handlers
  editHandler(event) {
    this.action = EDIT_ACTION;
    this.showModal = true;
    this.formData = _objectSpread({}, event.detail);
  }
  deleteHandler(event) {
    const url = `${BACKEND_URL}/expenses/${event.detail.Id}`;
    this.confirmationDialog(url);
  }
  async confirmationDialog(url) {
    const result = await LightningConfirm.open({
      message: "Are you sure you want to Delete?",
      variant: "header",
      label: "Confirmation",
      theme: "error"
    });
    if (result) {
      //*! OK
      const response = await this.makeApiRequest(url, 'DELETE');
      if (response.id) {
        await this.fetchExpenseData();
      }
    }
  }

  //*Modal Handlers
  cancelHandler() {
    this.showModal = false;
    this.action = null;
  }
  saveHandler() {
    if (this.isFormValid()) {
      //*  this.showModal = false;
      if (this.formData.Id) {
        const url = `${BACKEND_URL}/expenses/${this.formData.Id}`;
        this.addAndUpdateHandler(url, 'PUT');
      } else {
        const url = `${BACKEND_URL}/expenses`;
        this.addAndUpdateHandler(url, 'POST');
      }
    } else {
      console.error("FAILED!");
    }
  }

  //** Method to handle transactions of expenses | ADD AND UPDATE
  async addAndUpdateHandler(url, method) {
    const response = await this.makeApiRequest(url, method, this.formData);
    if (response.id) {
      await this.fetchExpenseData();
      this.showModal = false;
      this.action = null;
    }
  }
  addExpense() {
    this.action = ADD_ACTION;
    this.showModal = true;
    this.formData = {};
  }

  //*form change handler
  changeHandler(event) {
    const {
      name,
      value
    } = event.target;
    this.formData = _objectSpread(_objectSpread({}, this.formData), {}, {
      [name]: value
    });
  }

  //*form validator handler

  isFormValid() {
    let isValid = true;
    let inputFields = this.template.querySelectorAll(".validate");
    inputFields.forEach(inputField => {
      if (!inputField.checkValidity()) {
        inputField.reportValidity();
        isValid = false;
      }
    });
    return isValid;
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(Home, {
  fields: ["expenseRecords", "hasRecords", "chartData", "categoryTableData", "showModal", "formData", "action", "loggedInUser", "showSpinner", "backendUrl"]
});
export default _registerComponent(Home, {
  tmpl: _tmpl,
  sel: "pages-home",
  apiVersion: 59
});