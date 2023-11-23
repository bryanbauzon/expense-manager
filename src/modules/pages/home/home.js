import { LightningElement } from "lwc";
import { categoryList } from "./categoryList";
import LightningConfirm from "lightning/confirm";
//* constants
const BACKEND_URL = "http://localhost:3002";


const ADD_ACTION = "ADD";
const EDIT_ACTION = "EDIT";

export default class Home extends LightningElement {
  expenseRecords = [];
  hasRecords = false;
  chartData;
  categoryTableData = [];
  showModal = false;
  formData = {};
  action;
  loggedInUser
  showSpinner = false
  backendUrl = BACKEND_URL

  async connectedCallback() {
    try{
      const user = await this.getLoggedInUser()
   
      if(!user.user_id){
        window.location.href = '/login'
      }else{
        this.loggedInUser = user
        await this.fetchExpenseData()
      }
 
    }catch(err){
      console.error("response error: ",err)
    }
  
  }

  async fetchExpenseData(){
    const expenses = await this.getExpenses();
        this.expenseRecords = expenses.totalSize > 0 ? expenses.records : [];
        this.hasRecords = expenses.totalSize > 0;
        this.createChartData();
  }
  //* Method to get loggedIn user data
  async getLoggedInUser(){
    const url = `${BACKEND_URL}/oauth2/whoami`
    return await this.makeApiRequest(url)
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
          "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : null,
      };
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(
          `makeApiRequest - HTTP error! status: ${response.status}`
        );
      }

      return response.json();
    } catch (err) {
      console.error("makeApiRequest - error occured: ", err);
    }finally{
      this.showSpinner = false
    }
  }
  //*method to create chart data based on expenses
  createChartData() {
    const categorySums = {};

    this.expenseRecords.forEach((item) => {
      const { Amount__c, Category__c } = item;
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
        amount: this.formatCurrency(categorySums[item]),
      };
    });

    this.chartData = {
      labels: Object.keys(categorySums),
      results: Object.values(categorySums),
    };
  }

  formatCurrency(number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "PHP",
    });
  }
  //*Handlers
  editHandler(event) {
    this.action = EDIT_ACTION;
    this.showModal = true;
    this.formData = { ...event.detail };
  }

  deleteHandler(event) {
    const url = `${BACKEND_URL}/expenses/${event.detail.Id}`
    this.confirmationDialog(url);
  }

  async confirmationDialog(url) {
    const result = await LightningConfirm.open({
      message:  "Are you sure you want to Delete?",
      variant: "header",
      label:  "Confirmation",
      theme: "error",
    });

    if(result){//*! OK
      const response = await this.makeApiRequest(url, 'DELETE')
      if(response.id){
        await this.fetchExpenseData()
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
        const url = `${BACKEND_URL}/expenses/${this.formData.Id}`
        this.addAndUpdateHandler(url, 'PUT');
      } else {
        const url = `${BACKEND_URL}/expenses`
        this.addAndUpdateHandler(url, 'POST');
      }
    } else {
      console.error("FAILED!");
    }
  
  }

  //** Method to handle transactions of expenses | ADD AND UPDATE
  async addAndUpdateHandler(url, method){
    const response = await this.makeApiRequest(url, method, this.formData)
    if(response.id){
      await this.fetchExpenseData()
      this.showModal = false
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
    const { name, value } = event.target;
    this.formData = {
      ...this.formData,
      [name]: value,
    };
  }

  //*form validator handler

  isFormValid() {
    let isValid = true;
    let inputFields = this.template.querySelectorAll(".validate");
    inputFields.forEach((inputField) => {
      if (!inputField.checkValidity()) {
        inputField.reportValidity();
        isValid = false;
      }
    });

    return isValid;
  }
}
