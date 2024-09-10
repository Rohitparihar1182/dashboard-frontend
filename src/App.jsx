import React, { useEffect, useState } from 'react'
import "./App.css";
import BarChart from './components/Bar';
import Table from './components/DataTable';
import LineChart from './components/Line';
import InitialLoader from './components/Loading/initialLoader'
import dummyData from './data.json'
import { ActivityGraph } from './components/Graph';
import { UsageRadar } from './components/Radar';

// ! its the code for fetching data from the backend

// import { useGetEverythingQuery } from './state/apiSlice'

// export default function App() {
// 	const {
// 		data,
// 		isLoading,
// 		isError,
// 		error,
// 		isSuccess
// 	} = useGetEverythingQuery();

// 	if (isLoading) {
// 		return (
// 			<InitialLoader />
// 		)
// 	}

// 	if (isSuccess) {
// 		return (
// 			<div className='p-4 md:p-6 lg:p-8'>
// 				<div className='grid md:grid-cols-2 gap-8'>
// 					<LineChart data={data} />
// 					<BarChart data={data} />
// 				</div>
// 				<div className='mt-16' />
// 				<Table data={data} />
// 			</div>
// 		)
// 	}

// 	if (isError) {
// 		return (
// 			<div>Some error occured: {error.message}</div>
// 		)
// 	}
// }

export default function App() {
	const data = dummyData;
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500)
	}, [])

	if (isLoading) {
		return (
			<InitialLoader />
		)
	}

	return (
		<div className='p-4 md:p-6 lg:p-8'>
			<div className='grid md:grid-cols-2 gap-8'>
				<LineChart data={data} />
				<BarChart data={data} />
				<ActivityGraph />
				<UsageRadar />
			</div>
			<div className='mt-16' />
			<Table data={data} />
		</div>
	)

}

