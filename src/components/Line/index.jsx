import React, { useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Filter from '../common/filter';

const LineChart = ({ data }) => {

    const [activeSector, setActiveSector] = useState("All");

    const sectors = [...new Set(data.map(item => item.sector))].filter((item) => item !== "");

    const filteredData = useMemo(() => {
        if(activeSector === "All") return data;
        return data.filter(item => item.sector === activeSector)
    }, [data, activeSector])

    const processData = (data) => {
        const yearData = {};

        data.forEach(item => {
            if (item.published) {
                const year = new Date(item.published).getFullYear();
                if (!yearData[year]) {
                    yearData[year] = {
                        intensity: 0,
                        likelihood: 0,
                        relevance: 0,
                        count: 0
                    };
                }
                yearData[year].intensity += item.intensity || 0;
                yearData[year].likelihood += item.likelihood || 0;
                yearData[year].relevance += item.relevance || 0;
                yearData[year].count += 1;
            }

        });

        const labels = Object.keys(yearData).sort();
        const intensityData = labels.map(year => yearData[year].intensity / yearData[year].count);
        const likelihoodData = labels.map(year => yearData[year].likelihood / yearData[year].count);
        const relevanceData = labels.map(year => yearData[year].relevance / yearData[year].count);

        return {
            labels,
            datasets: [
                {
                    label: 'Average Intensity',
                    data: intensityData,
                    fill: false,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    tension: 0.1
                },
                {
                    label: 'Average Likelihood',
                    data: likelihoodData,
                    fill: false,
                    borderColor: 'rgba(255, 159, 64, 1)',
                    tension: 0.1
                },
                {
                    label: 'Average Relevance',
                    data: relevanceData,
                    fill: false,
                    borderColor: 'rgba(153, 102, 255, 1)',
                    tension: 0.1
                }
            ]
        };
    };

    const chartData = processData(filteredData);

    return (
        <div >
            <div className="relative flex justify-end gap-4 flex-wrap">
                <Filter activeOption={activeSector} options={sectors} handleClick={(item) => {setActiveSector(item)}}/>
            </div>
            <Line data={chartData} />
        </div>
    );
};

export default LineChart;
