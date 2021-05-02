<script>
import { Line } from "vue-chartjs"
import json from '../data/IndikatorUtangLuarNegeri'

function findId(data, indicator) {
    var categoryArray = data;
    for (var i = 0; i < categoryArray.length; i++) {
        if (categoryArray[i]["Indikator"] == indicator) {
            return(categoryArray[i]);
        }
    }
}

var dataGraph = findId(json, "Rasio Utang terhadap PDB")

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020"
        ],
        datasets: [
          {
            label: dataGraph["Indikator"],
            data: [dataGraph["2007"], dataGraph["2008"], dataGraph["2009"], dataGraph["2010"], dataGraph["2011"], dataGraph["2012"], dataGraph["2013"], 
                   dataGraph["2014"], dataGraph["2015"], dataGraph["2016"], dataGraph["2017"], dataGraph["2018"], dataGraph["2019"], dataGraph["2020"]],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            tension: 0.0,
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: "Rasio Utang Luar Negeri Terhadap PDB",
          fontSize: 16,
          padding: 10
        },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Rasio Utang Luar Negeri Terhadap GDP',
                fontSize: 12
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Tahun',
                fontSize: 12
              }
            }]
          } 
      }
    );
  }
};
</script>