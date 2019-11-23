let rows = [["2006,3 stars","2007,3 stars","3"],["2006,3 stars","2007,2 stars","0"],["2006,3 stars","2007,1 star","0"],["2006,3 stars","2007,no star","0"],["2006,3 stars","2007,closed","1"],["2006,2 stars","2007,3 stars","0"],["2006,2 stars","2007,2 stars","3"],["2006,2 stars","2007,1 star","1"],["2006,2 stars","2007,no star","0"],["2006,2 stars","2007,closed","0"],["2006,1 star","2007,3 stars","0"],["2006,1 star","2007,2 stars","0"],["2006,1 star","2007,1 star","25"],["2006,1 star","2007,no star","0"],["2006,1 star","2007,closed","2"],["2006,no star","2007,3 stars","0"],["2006,no star","2007,2 stars","0"],["2006,no star","2007,1 star","0"],["2006,no star","2007,no star","0"],["2006,no star","2007,closed","0"],["2006,closed","2007,3 stars","0"],["2006,closed","2007,2 stars","0"],["2006,closed","2007,1 star","0"],["2006,closed","2007,no star","0"],["2006,closed","2007,closed","0"],["2007,3 stars","2008,3 stars","3"],["2007,3 stars","2008,2 stars","0"],["2007,3 stars","2008,1 star","0"],["2007,3 stars","2008,no star","0"],["2007,3 stars","2008,closed","0"],["2007,2 stars","2008,3 stars","0"],["2007,2 stars","2008,2 stars","4"],["2007,2 stars","2008,1 star","0"],["2007,2 stars","2008,no star","0"],["2007,2 stars","2008,closed","0"],["2007,1 star","2008,3 stars","0"],["2007,1 star","2008,2 stars","1"],["2007,1 star","2008,1 star","27"],["2007,1 star","2008,no star","0"],["2007,1 star","2008,closed","0"],["2007,no star","2008,3 stars","0"],["2007,no star","2008,2 stars","0"],["2007,no star","2008,1 star","0"],["2007,no star","2008,no star","0"],["2007,no star","2008,closed","0"],["2007,closed","2008,3 stars","0"],["2007,closed","2008,2 stars","0"],["2007,closed","2008,1 star","0"],["2007,closed","2008,no star","0"],["2007,closed","2008,closed","0"],["2008,3 stars","2009,3 stars","3"],["2008,3 stars","2009,2 stars","0"],["2008,3 stars","2009,1 star","0"],["2008,3 stars","2009,no star","0"],["2008,3 stars","2009,closed","0"],["2008,2 stars","2009,3 stars","1"],["2008,2 stars","2009,2 stars","4"],["2008,2 stars","2009,1 star","0"],["2008,2 stars","2009,no star","0"],["2008,2 stars","2009,closed","0"],["2008,1 star","2009,3 stars","0"],["2008,1 star","2009,2 stars","1"],["2008,1 star","2009,1 star","24"],["2008,1 star","2009,no star","0"],["2008,1 star","2009,closed","2"],["2008,no star","2009,3 stars","0"],["2008,no star","2009,2 stars","0"],["2008,no star","2009,1 star","0"],["2008,no star","2009,no star","0"],["2008,no star","2009,closed","0"],["2008,closed","2009,3 stars","0"],["2008,closed","2009,2 stars","0"],["2008,closed","2009,1 star","0"],["2008,closed","2009,no star","0"],["2008,closed","2009,closed","0"],["2009,3 stars","2010,3 stars","4"],["2009,3 stars","2010,2 stars","0"],["2009,3 stars","2010,1 star","0"],["2009,3 stars","2010,no star","0"],["2009,3 stars","2010,closed","0"],["2009,2 stars","2010,3 stars","1"],["2009,2 stars","2010,2 stars","4"],["2009,2 stars","2010,1 star","2"],["2009,2 stars","2010,no star","0"],["2009,2 stars","2010,closed","0"],["2009,1 star","2010,3 stars","0"],["2009,1 star","2010,2 stars","1"],["2009,1 star","2010,1 star","25"],["2009,1 star","2010,no star","0"],["2009,1 star","2010,closed","2"],["2009,no star","2010,3 stars","0"],["2009,no star","2010,2 stars","0"],["2009,no star","2010,1 star","0"],["2009,no star","2010,no star","0"],["2009,no star","2010,closed","0"],["2009,closed","2010,3 stars","0"],["2009,closed","2010,2 stars","0"],["2009,closed","2010,1 star","0"],["2009,closed","2010,no star","0"],["2009,closed","2010,closed","0"],["2010,3 stars","2011,3 stars","5"],["2010,3 stars","2011,2 stars","0"],["2010,3 stars","2011,1 star","0"],["2010,3 stars","2011,no star","0"],["2010,3 stars","2011,closed","0"],["2010,2 stars","2011,3 stars","0"],["2010,2 stars","2011,2 stars","6"],["2010,2 stars","2011,1 star","0"],["2010,2 stars","2011,no star","0"],["2010,2 stars","2011,closed","0"],["2010,1 star","2011,3 stars","0"],["2010,1 star","2011,2 stars","3"],["2010,1 star","2011,1 star","36"],["2010,1 star","2011,no star","0"],["2010,1 star","2011,closed","2"],["2010,no star","2011,3 stars","0"],["2010,no star","2011,2 stars","0"],["2010,no star","2011,1 star","0"],["2010,no star","2011,no star","0"],["2010,no star","2011,closed","0"],["2010,closed","2011,3 stars","0"],["2010,closed","2011,2 stars","0"],["2010,closed","2011,1 star","0"],["2010,closed","2011,no star","0"],["2010,closed","2011,closed","0"],["2011,3 stars","2012,3 stars","5"],["2011,3 stars","2012,2 stars","0"],["2011,3 stars","2012,1 star","0"],["2011,3 stars","2012,no star","0"],["2011,3 stars","2012,closed","0"],["2011,2 stars","2012,3 stars","1"],["2011,2 stars","2012,2 stars","7"],["2011,2 stars","2012,1 star","1"],["2011,2 stars","2012,no star","0"],["2011,2 stars","2012,closed","1"],["2011,1 star","2012,3 stars","1"],["2011,1 star","2012,2 stars","2"],["2011,1 star","2012,1 star","36"],["2011,1 star","2012,no star","0"],["2011,1 star","2012,closed","2"],["2011,no star","2012,3 stars","0"],["2011,no star","2012,2 stars","0"],["2011,no star","2012,1 star","0"],["2011,no star","2012,no star","0"],["2011,no star","2012,closed","0"],["2011,closed","2012,3 stars","0"],["2011,closed","2012,2 stars","0"],["2011,closed","2012,1 star","0"],["2011,closed","2012,no star","0"],["2011,closed","2012,closed","0"],["2012,3 stars","2013,3 stars","7"],["2012,3 stars","2013,2 stars","0"],["2012,3 stars","2013,1 star","0"],["2012,3 stars","2013,no star","0"],["2012,3 stars","2013,closed","0"],["2012,2 stars","2013,3 stars","0"],["2012,2 stars","2013,2 stars","6"],["2012,2 stars","2013,1 star","1"],["2012,2 stars","2013,no star","0"],["2012,2 stars","2013,closed","1"],["2012,1 star","2013,3 stars","0"],["2012,1 star","2013,2 stars","0"],["2012,1 star","2013,1 star","42"],["2012,1 star","2013,no star","0"],["2012,1 star","2013,closed","1"],["2012,no star","2013,3 stars","0"],["2012,no star","2013,2 stars","0"],["2012,no star","2013,1 star","0"],["2012,no star","2013,no star","0"],["2012,no star","2013,closed","0"],["2012,closed","2013,3 stars","0"],["2012,closed","2013,2 stars","0"],["2012,closed","2013,1 star","0"],["2012,closed","2013,no star","0"],["2012,closed","2013,closed","0"],["2013,3 stars","2014,3 stars","7"],["2013,3 stars","2014,2 stars","0"],["2013,3 stars","2014,1 star","0"],["2013,3 stars","2014,no star","0"],["2013,3 stars","2014,closed","0"],["2013,2 stars","2014,3 stars","0"],["2013,2 stars","2014,2 stars","4"],["2013,2 stars","2014,1 star","0"],["2013,2 stars","2014,no star","0"],["2013,2 stars","2014,closed","2"],["2013,1 star","2014,3 stars","0"],["2013,1 star","2014,2 stars","1"],["2013,1 star","2014,1 star","46"],["2013,1 star","2014,no star","0"],["2013,1 star","2014,closed","2"],["2013,no star","2014,3 stars","0"],["2013,no star","2014,2 stars","0"],["2013,no star","2014,1 star","0"],["2013,no star","2014,no star","0"],["2013,no star","2014,closed","0"],["2013,closed","2014,3 stars","0"],["2013,closed","2014,2 stars","1"],["2013,closed","2014,1 star","0"],["2013,closed","2014,no star","0"],["2013,closed","2014,closed","0"],["2014,3 stars","2015,3 stars","6"],["2014,3 stars","2015,2 stars","1"],["2014,3 stars","2015,1 star","0"],["2014,3 stars","2015,no star","0"],["2014,3 stars","2015,closed","0"],["2014,2 stars","2015,3 stars","0"],["2014,2 stars","2015,2 stars","6"],["2014,2 stars","2015,1 star","0"],["2014,2 stars","2015,no star","0"],["2014,2 stars","2015,closed","0"],["2014,1 star","2015,3 stars","0"],["2014,1 star","2015,2 stars","3"],["2014,1 star","2015,1 star","41"],["2014,1 star","2015,no star","0"],["2014,1 star","2015,closed","2"],["2014,no star","2015,3 stars","0"],["2014,no star","2015,2 stars","0"],["2014,no star","2015,1 star","0"],["2014,no star","2015,no star","0"],["2014,no star","2015,closed","0"],["2014,closed","2015,3 stars","0"],["2014,closed","2015,2 stars","0"],["2014,closed","2015,1 star","0"],["2014,closed","2015,no star","0"],["2014,closed","2015,closed","0"],["2015,3 stars","2016,3 stars","6"],["2015,3 stars","2016,2 stars","0"],["2015,3 stars","2016,1 star","0"],["2015,3 stars","2016,no star","0"],["2015,3 stars","2016,closed","0"],["2015,2 stars","2016,3 stars","0"],["2015,2 stars","2016,2 stars","9"],["2015,2 stars","2016,1 star","0"],["2015,2 stars","2016,no star","0"],["2015,2 stars","2016,closed","0"],["2015,1 star","2016,3 stars","0"],["2015,1 star","2016,2 stars","1"],["2015,1 star","2016,1 star","50"],["2015,1 star","2016,no star","0"],["2015,1 star","2016,closed","3"],["2015,no star","2016,3 stars","0"],["2015,no star","2016,2 stars","0"],["2015,no star","2016,1 star","0"],["2015,no star","2016,no star","0"],["2015,no star","2016,closed","0"],["2015,closed","2016,3 stars","0"],["2015,closed","2016,2 stars","0"],["2015,closed","2016,1 star","0"],["2015,closed","2016,no star","0"],["2015,closed","2016,closed","0"],["2016,3 stars","2017,3 stars","6"],["2016,3 stars","2017,2 stars","0"],["2016,3 stars","2017,1 star","0"],["2016,3 stars","2017,no star","0"],["2016,3 stars","2017,closed","0"],["2016,2 stars","2017,3 stars","0"],["2016,2 stars","2017,2 stars","9"],["2016,2 stars","2017,1 star","0"],["2016,2 stars","2017,no star","0"],["2016,2 stars","2017,closed","0"],["2016,1 star","2017,3 stars","0"],["2016,1 star","2017,2 stars","0"],["2016,1 star","2017,1 star","49"],["2016,1 star","2017,no star","0"],["2016,1 star","2017,closed","3"],["2016,no star","2017,3 stars","0"],["2016,no star","2017,2 stars","0"],["2016,no star","2017,1 star","0"],["2016,no star","2017,no star","0"],["2016,no star","2017,closed","0"],["2016,closed","2017,3 stars","0"],["2016,closed","2017,2 stars","0"],["2016,closed","2017,1 star","0"],["2016,closed","2017,no star","0"],["2016,closed","2017,closed","0"],["2017,3 stars","2018,3 stars","5"],["2017,3 stars","2018,2 stars","1"],["2017,3 stars","2018,1 star","0"],["2017,3 stars","2018,no star","0"],["2017,3 stars","2018,closed","0"],["2017,2 stars","2018,3 stars","0"],["2017,2 stars","2018,2 stars","9"],["2017,2 stars","2018,1 star","0"],["2017,2 stars","2018,no star","0"],["2017,2 stars","2018,closed","1"],["2017,1 star","2018,3 stars","0"],["2017,1 star","2018,2 stars","1"],["2017,1 star","2018,1 star","50"],["2017,1 star","2018,no star","0"],["2017,1 star","2018,closed","8"],["2017,no star","2018,3 stars","0"],["2017,no star","2018,2 stars","0"],["2017,no star","2018,1 star","0"],["2017,no star","2018,no star","0"],["2017,no star","2018,closed","0"],["2017,closed","2018,3 stars","0"],["2017,closed","2018,2 stars","0"],["2017,closed","2018,1 star","0"],["2017,closed","2018,no star","0"],["2017,closed","2018,closed","0"],["2018,3 stars","2019,3 stars","5"],["2018,3 stars","2019,2 stars","0"],["2018,3 stars","2019,1 star","0"],["2018,3 stars","2019,no star","0"],["2018,3 stars","2019,closed","0"],["2018,2 stars","2019,3 stars","0"],["2018,2 stars","2019,2 stars","11"],["2018,2 stars","2019,1 star","0"],["2018,2 stars","2019,no star","0"],["2018,2 stars","2019,closed","0"],["2018,1 star","2019,3 stars","0"],["2018,1 star","2019,2 stars","1"],["2018,1 star","2019,1 star","43"],["2018,1 star","2019,no star","0"],["2018,1 star","2019,closed","3"],["2018,no star","2019,3 stars","0"],["2018,no star","2019,2 stars","0"],["2018,no star","2019,1 star","0"],["2018,no star","2019,no star","0"],["2018,no star","2019,closed","0"],["2018,closed","2019,3 stars","0"],["2018,closed","2019,2 stars","0"],["2018,closed","2019,1 star","0"],["2018,closed","2019,no star","0"],["2018,closed","2019,closed","0"],["2019,3 stars","2020,3 stars","5"],["2019,3 stars","2020,2 stars","0"],["2019,3 stars","2020,1 star","0"],["2019,3 stars","2020,no star","0"],["2019,3 stars","2020,closed","0"],["2019,2 stars","2020,3 stars","0"],["2019,2 stars","2020,2 stars","11"],["2019,2 stars","2020,1 star","2"],["2019,2 stars","2020,no star","0"],["2019,2 stars","2020,closed","0"],["2019,1 star","2020,3 stars","0"],["2019,1 star","2020,2 stars","1"],["2019,1 star","2020,1 star","47"],["2019,1 star","2020,no star","0"],["2019,1 star","2020,closed","0"],["2019,no star","2020,3 stars","0"],["2019,no star","2020,2 stars","0"],["2019,no star","2020,1 star","0"],["2019,no star","2020,no star","0"],["2019,no star","2020,closed","0"],["2019,closed","2020,3 stars","0"],["2019,closed","2020,2 stars","0"],["2019,closed","2020,1 star","0"],["2019,closed","2020,no star","0"],["2019,closed","2020,closed","0"]];
for (let i = 0; i < rows.length; i++) {
  rows[i][2] = +rows[i][2];
}

google.charts.load("current", {packages:["sankey"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	let data = new google.visualization.DataTable();
	data.addColumn('string', 'From');
	data.addColumn('string', 'To');
  data.addColumn('number', 'Weight');
  data.addColumn({type: 'string', role: 'tooltip'});

  rows.forEach((d, i) => {
    [year0, star0] = d[0].split(',');
    [year1, star1] = d[1].split(',');
    rows[i].push(`${d[2]} restaurants of ${star0} ${(star0 === star1)? "stay":"become"} ${star1} in ${year1}`);
  })
  console.log(rows)
  data.addRows(rows);
  
	let chart = new google.visualization.Sankey(document.getElementById('sankey'));
	chart.draw(data, {
    width: 900,
    height: 500,
    sankey: {
      node: {
        width: 5,
        nodePadding: 10
      },
      link: {
        color: {
          fill: '#ccc', 
          fillOpacity: 0.2
        }
      }
    }
	});
}