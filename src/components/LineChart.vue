<script>
import { Line } from "vue-chartjs"
import json from '../data/IndikatorUtangLuarNegeri'

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
            label: json[6]["Indikator"],
            data: [json[6]["2007"], json[6]["2008"], json[6]["2009"], json[6]["2010"], json[6]["2011"], json[6]["2012"], json[6]["2013"], 
                   json[6]["2014"], json[6]["2015"], json[6]["2016"], json[6]["2017"], json[6]["2018"], json[6]["2019"], json[6]["2020"]],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Data"
        }
      }
    );
  }
};
</script>