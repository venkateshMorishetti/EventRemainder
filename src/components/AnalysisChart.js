import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const AnalysisChart = ()=>{

    const options  =  {
        chart: {
          type: 'pie',
          backgroundColor: null
        },
        credits: {
          enabled: false
        },
        title: {
            text: '<span style="font-size:18px; font-weight:600; color:white"><span style="font-size:35px">'+ 11 +'</span><br> Total Remainders</span>',
            verticalAlign: 'middle',
            x:-10
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        exporting: { enabled: false },
        plotOptions: {
          pie: {
            
              allowPointSelect: false,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false,
              },
              series: {
                allowPointSelect: false,
                states: {
                  inactive: {
                    enabled: false
                  },
                  select: {
                    enabled: false
                  }
                }
              }
          }
        },
        legend:{
          labelFormat: '<div style="font-size:15px; color:white">{name} <b>{y}</b></div>',
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          itemMarginTop: 0
        },
        series: [
          {
            name: '',
            data: [{
              name:"Completed Remainders",
              y:10,
              color: "#3DED97"
            },
            {
                name:"Pending Remainders",
                y:1,
                color: "#40E0D0"
            }],
            type: 'pie',
            size: '100%',
            innerSize: '80%',
            showInLegend:true,
            dataLabels: {
                enabled: false
            }
          }
        ] 
        
      }

    return(
        <div className='min-width-580'>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default AnalysisChart;