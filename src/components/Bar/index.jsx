import React, { useMemo, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import Filter from '../common/filter';

const BarChart = ({ data }) => {
    const chartRef = useRef(null);
    const [activeCountry, setActiveCountry] = useState("All");
    const [activeRegion, setActiveRegion] = useState("All");

    const countries = [...new Set(data.map(d => d.country))].filter((item) => item !== "")
    const regions = useMemo(() => {
        const temp = new Set();
        data.forEach((item) => {
            if ((item.country === activeCountry || activeCountry === "All") && item.region !== "") temp.add(item.region)
        })
        return temp;
    }, [activeCountry, data])

    const filteredData = useMemo(() => {
        return data.filter(item => ((item.country === activeCountry || activeCountry === "All") && (item.region === activeRegion || activeRegion === "All")))
    }, [activeCountry, activeRegion, data])

    const handleCountryFilter = (item) => {
        setActiveRegion("All")
        setActiveCountry(item)
    }

    const handleRegionFilter = (item) => {
        setActiveRegion(item);
    }

    const prepareChartData = () => {
        const labels = [...new Set(filteredData.map(d => d.topic))];
        const intensityData = labels.map(label => {
            const item = filteredData.find(d => d.topic === label);
            return item ? item.intensity : 0;
        });
        const likelihoodData = labels.map(label => {
            const item = filteredData.find(d => d.topic === label);
            return item ? item.likelihood : 0;
        });
        const relevanceData = labels.map(label => {
            const item = filteredData.find(d => d.topic === label);
            return item ? item.relevance : 0;
        });

        return {
            labels: labels,
            datasets: [
                {
                    label: 'Intensity',
                    data: intensityData,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Likelihood',
                    data: likelihoodData,
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Relevance',
                    data: relevanceData,
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }
            ]
        };
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    };

    return (
        <div className="w-full">
            <div className="relative flex justify-end gap-4 flex-wrap">
                <Filter activeOption={activeCountry} options={countries} handleClick={handleCountryFilter} />
                <Filter activeOption={activeRegion} options={regions} handleClick={handleRegionFilter} />
            </div>
            <div>
                <Bar ref={chartRef} data={prepareChartData()} options={options} />
            </div>
        </div>
    );
};

export default BarChart;
