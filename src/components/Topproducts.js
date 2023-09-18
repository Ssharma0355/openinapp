
"use client";
import { useEffect } from "react";

export default function Topproducts() {

    useEffect(() => {
        const init = async () => {
            const { Chart } = await import("tw-elements");
            const dataDoughnut = {
                labels: ["Basic Tees", "Python", "Ruby"],
                position: 'right',
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [300, 50, 100],
                        backgroundColor: [
                            "rgba(152, 216, 158, 1)",
                            "rgba(238, 132, 132, 1)",
                            "rgba(246, 220, 125, 1)",
                        ],
                        hoverOffset: 4,
                    },
                ],
            };

            const configDoughnut = {
                type: "doughnut",
                data: dataDoughnut,
            };

            new Chart(
                document.getElementById("chartDoughnut"),
                configDoughnut, {
                options: {
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: {
                                pointStyle: 'circle',
                                usePointStyle: true,
                                font: {size: 20}, 
                            },
                        },
                    },
                }
            }
            );


        };
        init();
    }, []);


    return (
        <div className="bg-white rounded-lg p-6 mr-6 mt-6 w-1/2 rounded-md shadow-md shadow-lime-200">
            <div className="flex">  <h3 className="text-black font-bold text-lg">Top Products</h3></div>
            <div id="chartDoughnut" className="w-full" >
            </div>

        </div>
    )
} 