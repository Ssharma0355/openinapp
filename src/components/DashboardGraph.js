"use client";
import { useEffect } from "react";
export default function DashboardGraph() {
    useEffect(() => {
        const init = async () => {
          const { Chart } = await import("tw-elements");
          const dataChartBarDoubleDatasetsExample = {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2','Week 3','Week 4',],
                datasets: [
                    {
                        label: 'User',
                        data: [500, 350, 200, 400],
                        backgroundColor: '#98D89E',
                        borderColor: '#94DFD7',
                        borderRadius: '10px',
                        width: '10px'
                    },
                    {
                        label: 'Guest',
                        data: [400, 450, 300, 350],
                        backgroundColor: '#EE8484',
                        borderRadius: '10px',
                        width: '10px'
                    }, 
                ],
            },
        };
        // Options
        const optionsChartBarDoubleDatasetsExample = {
            options: {
                scales: {
                    y:
                    {
                        stacked: false,
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                    x:
                    {
                        stacked: false,
                    },
                },
                plugins: {
                    legend: {
                        position: 'top',
                        padding: 4,
                        labels: {
                            pointStyle: 'circle',
                            usePointStyle: true,
                            font: {size: 16}
                        },
                    },
                },
            },
        };
        new Chart(
            document.getElementById('chart-bar-double-datasets'),
            dataChartBarDoubleDatasetsExample,
            optionsChartBarDoubleDatasetsExample
        );
        };
        init();
      }, []);
    
    return (
        <div className=" bg-white rounded-lg p-6 mt-6 max-w-full rounded-md shadow-md shadow-lime-200">
            <div className="flex">  <h3 className="text-black font-bold text-lg">Activities</h3></div>
            <div id="chart-bar-double-datasets" className="w-full" >
            </div>

        </div>
    )
} 