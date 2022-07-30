import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from './Chart.module.css';
ChartJS.register(ArcElement, Tooltip, Legend);


const Chart = ({ data }) => {
    if (!data) {
        return <h1>Loading...</h1>
    }

    console.log(data)
    const dailyData = [data.TotalConfirmed, data.TotalDeaths]
    console.log(dailyData)

    const do_data = {
        labels: [
            'Total Infected',
            'Total Dead'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [dailyData[0], dailyData[1]],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            hoverOffset: 4
        }]
    };

    const DoughnutChart = (
        data ?
            <Doughnut data={do_data} />
            :
            <h1>Loading...</h1>
    );


    return (
        <div className="styles.container">
            <h1> {DoughnutChart} </h1>
        </div>
    );
}

export default Chart;