import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

import { GetServerSideProps } from 'next';
import { useState } from 'react';

interface IChart {
    options: any;
    series: any[];
}


interface ChartProps {
    barChart: IChart;
    areaChart: IChart;
}


export default function Charts({ barChart, areaChart }: ChartProps) {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const [barData, setBarData] = useState<IChart>(barChart);

    function updateBarChartData() {
        let data: number[] = [];

        for (let i = 0; i < 8; i++) {
            data.push(Math.floor(Math.random() * 100))
        }

        setBarData(prevState => {
            return {
                options: { ...prevState.options },
                series: [
                    {
                        name: "series-1",
                        data: data
                    }
                    
                ]
            }
        })
    }
    
    return (
        <>
            <Head>
                <title>Tests | Charts</title>
            </Head>
            <header>
                <h1>Charts</h1>
            </header>
            <section> {/* Gráficos*/}
            
                <h3 id="demo">Demo</h3>
                <button onClick={updateBarChartData}>Update Bar Chart</button>
                <main>
                    <Chart
                        options={barData.options}
                        series={barData.series}
                        type="bar"
                        width="500"
                        height="300"
                    />
                    <Chart
                        options={areaChart.options}
                        series={areaChart.series}
                        type="area"
                        width="500"
                        height="300"
                    />
                </main>
    
           </section>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let series1 = [];
    let series2 = [];
    let label = [];
    
    for(let i=0; i < 25; i++) {
        series1.push(i * Math.floor(Math.random() * 100));
        series2.push(i * Math.floor(Math.random() * 50)); 
        label.push(i)
    }
    
    const barChart = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            },
            
            title: {
                text: 'Bar chart',
                align: 'left'
            },
            legend: {
                horizontalAlign: 'left'
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
            
        ]
    };

    const areaChart = {
        series: [
            {
                name: "Series 1",
                data: series1
            },
            {
                name: "Series 2",
                data: series2
            }
        ],
        options: {
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },

            title: {
                text: 'Line chart',
                align: 'left'
            },
            labels: label,
            xaxis: {
                type: 'number',
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            }
        },
    }

    
    return {
        props: {
            barChart: barChart,
            areaChart: areaChart,
        }
    }
}