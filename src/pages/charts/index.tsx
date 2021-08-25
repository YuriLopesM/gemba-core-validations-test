import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic'

interface ChartProps {
    barChart: any;
    areaChart: any
}


export default function Charts({ barChart, areaChart }: ChartProps) {
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
            <section>
                <h3 id="demo">Demo</h3>
                
                    <Chart
                        options={barChart.options}
                        series={barChart.series}
                        type="bar"
                        width="800"
                    />
                    <Chart
                        options={areaChart.options}
                        series={areaChart.series}
                        type="area"
                        width="800"
                    />
                
                <ul>
                    <li><strong>Lorem</strong>: ipsum dolor sit amet;</li>
                </ul>
                <footer className="link-wrapper">
                    <Link href="https://www.braziljs.org/p/implementando-internacionalizacao-i18n-com-javascript">
                        <a target="_blank">lorem lorem lorem</a>
                    </Link>
                </footer>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    const barChart = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            },
            
            title: {
                text: 'Teste',
                align: 'left'
            },
            subtitle: {
                text: '1991-1999',
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
    let total = [];
    let totalDoLg = [];
    let label = [];
    for(let i=0; i < 25; i++) {
          total.push(i * Math.floor(Math.random() * 100));
          totalDoLg.push(i * Math.floor(Math.random() * 50)); 
          label.push(i)
    }

    const areaChart = {
        series: [
            {
                name: "Yuri",
                data: total
            },
            {
                name: "Luiz Gustavo",
                data: totalDoLg
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
                text: 'Teste',
                align: 'left'
            },
            subtitle: {
                text: 'Subtitulo',
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
            areaChart: areaChart
        }
    }
}