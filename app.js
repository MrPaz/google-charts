    google.charts.load('current', {'packages':['corechart', 'line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Days');
      data.addColumn('number', 'Value of Transactions (USD)');
      data.addRows([
        [1, 284111987], 
        [2, 223086857], 
        [3, 603725515], 
        [4, 496604734], 
        [5, 743780976], 
        [6, 579810864], 
        [7, 618378474], 
        [8, 318342886], 
        [9, 266813709], 
        [10, 356869592], 
        [11, 418050739], 
        [12, 501479974], 
        [13, 481191906], 
        [14, 551468789], 
        [15, 293155590], 
        [16, 275674445], 
        [17, 513494445], 
        [18, 481671692], 
        [19, 687343679], 
        [20, 459745145], 
        [21, 481121941], 
        [22, 367074313], 
        [23, 241392404], 
        [24, 684285821], 
        [25, 724485362], 
        [26, 702618790], 
        [27, 659403093], 
        [28, 601384560], 
        [29, 493717540], 
        [30, 436629767], 
    ]);

    var options = {
        legend: {position: 'bottom'},
        chart: {title: 'Bitcoin Daily Transaction Value (USD)', subtitle: 'Past 30 Days'},   
        titleTextStyle: { fontSize: 24, bold: true},        
        width: 900,
        height: 500,
        axes: {
          x: {
            0: {side: 'bottom'}
          }
        },     
      };

      var chart = new google.charts.Line(document.getElementById('line_top_x'));
      
      chart.draw(data, google.charts.Line.convertOptions(options));
    }
