
var randomScalingFactor = function() {
		 return Math.round(Math.random() * 100);
		};

		Chart.defaults.global.defaultFontFamily = "Verdana";

		var config = {
		 type: "radialGauge",
		 data: {
		  labels: ["Metrics"],
		  datasets: [
		   {
			data: [randomScalingFactor()],
			backgroundColor: 'rgb(255, 0, 0)',
			borderWidth: 0,
		   }
		  ]
		 },
		 options: {
		  responsive: false,
		  legend: {},
		  title: {
		   display: true,
		   text: "Radial gauge chart"
		  },
		  //this is where we can comment in/out features from Chart.RadialGauge.umd.js
		  centerPercentage: 80, //how big the inner circle space is
		  roundedCorners: false,
		  trackColor: 'rgb(255, 255, 255)', //circle behind gauge circle
		 }
		};

		window.onload = function() {
		 var ctx = document.getElementById("chart-area").getContext("2d");
		 window.myRadialGauge = new Chart(ctx, config);
		};

		setInterval(function () {document.getElementById("randomizeData").click();}, 1000);
		document.getElementById("randomizeData").addEventListener("click", function() {

		 config.data.datasets.forEach(function(dataset) {
		  dataset.data = dataset.data.map(function() {
		   return randomScalingFactor();
		  });
		 });

		 window.myRadialGauge.update();
		});
