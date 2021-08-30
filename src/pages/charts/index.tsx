import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

interface ChartProps {
    barChart: any;
    areaChart: any;
    heatMap: any;
    scatterPlot: any
}


export default function Charts({ barChart, areaChart, heatMap, scatterPlot }: ChartProps) {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
    return (
        <>
            <Head>
                <title>Tests | Charts</title>
            </Head>
            <header>
                <h1>Gráficos</h1>
                <p>Demo, casos de usos, pesquisas e bibliotecas</p>
            </header>
            <section> {/* Gráficos*/}
            
                <h3 id="demo">Demo</h3>
                <main>
                    <Chart
                        options={barChart.options}
                        series={barChart.series}
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
                    <Chart
                        options={heatMap.options}
                        series={heatMap.series}
                        type="heatmap"
                        width="500"
                        height="300"
                    />
                    <Chart
                        options={scatterPlot.options}
                        series={scatterPlot.series}
                        type="scatter"
                        width="500"
                        height="300"
                    />
                </main>
                    
                <footer className="link-wrapper">
                    <Link href="https://apexcharts.com/react-chart-demos/">
                        <a target="_blank">ApexCharts React Demos</a>
                    </Link>
                    <Link href="https://apexcharts.com/docs/installation/#">
                        <a target="_blank">ApexCharts Documentation</a>
                    </Link>
                </footer>
            </section>
            <section> 
                <h3 id="libs">Bibliotecas</h3>
                <p></p>
                <table>
                    <thead>
                    <tr>
                        <th>Tipo de Gráfico</th>
                        <th>ApexCharts</th>
                        <th>Nivo</th>
                        <th>Recharts</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Bar/Column</td>
                        <td>&#9679;</td>
                        <td>&#9679;</td>
                        <td>&#9679;</td>
                    </tr>
                    <tr>
                        <td>Line/Area</td>
                        <td>&#9679;</td>
                        <td>&#9679;</td>
                        <td>&#9679;</td>
                    </tr>
                    <tr>
                        <td>Pie</td>
                        <td>&#9679;</td>
                        <td>&#9679;</td>
                        <td>&#9679;</td>
                    </tr>
                    <tr>
                        <td>Scatter</td>
                        <td>&#9679;</td>
                        <td>&#9679;</td>
                        <td>&#9679;</td>
                    </tr>
                    <tr>
                        <td>Heat Map</td>
                        <td>&#9679;</td>
                        <td>&#9679;</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Gauge</td>
                        <td>&#9679;</td>
                        <td></td>
                        <td>&#9679;</td>
                    </tr>
                    <tr>
                        <td>Bullet</td>
                        <td></td>
                        <td>&#9679;</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Histogram</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Box Plot</td>
                        <td>&#9679;</td>
                        <td></td>
                        <td>&#9679;</td>
                    </tr>
                    <tr>
                        <td>Timeline</td>
                        <td>&#9679;</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>   
                <footer className="link-wrapper">
                    <Link href="https://apexcharts.com/">
                        <a target="_blank">ApexCharts</a>
                    </Link>
                    <Link href="https://nivo.rocks/">
                        <a target="_blank">Nivo</a>
                    </Link>
                    <Link href="https://recharts.org/">
                        <a target="_blank">Recharts</a>
                    </Link>
                </footer>
            </section>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['@core:token']: token } = parseCookies(ctx);
    destroyCookie(ctx, '@core:redirect_pathname');
    
    if (!token) {
        setCookie(ctx, '@core:redirect_pathname', `http://${ctx.req.headers.host}/${ctx.locale}/${ctx.resolvedUrl}`, {
            maxAge: 60 * 60 * 2 
        })
        return {
            redirect: {
                destination: 'http://vancouver:3000/',
                permanent: false
            }
        }
    }

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

    const heatMap = {
        series: [
            {
                name: "Series 1",
                data: [{
                x: 'W1',
                y: 22
                },
                {
                x: 'W3',
                y: 13
                }, {
                x: 'W4',
                y: 32
                }]
            },
            {
                name: "Series 2",
                data: [{
                x: 'W1',
                y: 43
                }, {
                x: 'W2',
                y: 43
                }, {
                x: 'W3',
                y: 43
                }, {
                x: 'W4',
                y: 43
                }]
            },
            {
                name: "Series 3",
                data: [{
                x: 'W1',
                y: 56
                }, {
                x: 'W2',
                y: 22
                }, {
                x: 'W3',
                y: 34
                }, {
                x: 'W4',
                y: 12
                }]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'heatmap',
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#008FFB"],
            title: {
                text: 'HeatMap Chart (Single color)'
            },
        },
    };

    const scatterPlot = {
        series: [{
            name: "Series 1",
            data: [
            [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1]]
          },{
            name: "Series 2",
            data: [
            [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4]]
          },{
            name: "Series 3",
            data: [
            [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3]]
          }],
        options: {
            chart: {
                height: 350,
                type: 'scatter',
                zoom: {
                    enabled: false,
                }
            },
            xaxis: {
                tickAmount: 10,
            },
            yaxis: {
                tickAmount: 7
            }
        
        },
    }



    return {
        props: {
            barChart: barChart,
            areaChart: areaChart,
            heatMap: heatMap,
            scatterPlot: scatterPlot
        }
    }
}