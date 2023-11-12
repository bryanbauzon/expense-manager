import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./chartbox.html";
import { Chart } from "chart.js/auto";
class Chartbox extends LightningElement {
  constructor(...args) {
    super(...args);
    this.chart = void 0;
    this.chartLoaded = false;
    this._data = [];
    this._labels = [];
  }
  get chartRecords() {
    return this._data;
  }
  set chartRecords(data) {
    this._data = [...data.results];
    this.labels = [...data.labels];
    if (this.chartLoaded) {
      const elem = this.template.querySelector(".chart");
      elem.innerHTML = '';
      this.chart.destroy(); //remove configurations
      this.renderChart();
    }
  }
  renderedCallback() {
    if (this.chartLoaded) {
      return;
    }
    const elem = this.template.querySelector(".chart");
    if (elem) {
      this.renderChart();
    }
  }
  renderChart() {
    const config = {
      type: "doughnut",
      data: {
        labels: this.labels,
        datasets: [{
          label: "Total Amount",
          data: this._data,
          hoverOffset: 4
        }]
      }
    };
    const elem = this.template.querySelector(".chart");
    const canvas = document.createElement("canvas");
    elem.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    this.chart = new Chart(ctx, config);
    this.chartLoaded = true;
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(Chartbox, {
  publicProps: {
    chartRecords: {
      config: 3
    }
  },
  fields: ["chart", "chartLoaded", "_data", "_labels"]
});
export default _registerComponent(Chartbox, {
  tmpl: _tmpl,
  sel: "components-chartbox",
  apiVersion: 59
});