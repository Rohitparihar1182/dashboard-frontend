import { useEffect, useState } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";

const headers = [
	"title",
	"topic",
	"sector",
	"region",
	"country",
	"intensity",
	"insight",
	"likelihood",
	"relevance",
	"pestle",
	"source",
	"added",
	"published"
]

export default function Table({ data }) {
	const [search, setSearch] = useState("");
	const [filteredData, setFilteredData] = useState(data);
	const [noDataFound, setNoDataFound] = useState(false);
	
	useEffect(() => {
		const filtered = data.filter((item) =>
		  (item.title+"").toLowerCase().includes(search.toLowerCase())
		);
		if(filtered.length === 0) {
			setNoDataFound(true);
		}else{
			setNoDataFound(false);
			setFilteredData(filtered);
		}
		
	  }, [search, data]
	);
	return (
		<div>
			<div className="flex gap-4 items-center flex-wrap mb-4">
				<div className="w-[300px] bg-neutral-800 relative rounded-lg flex items-center px-4 py-2 text-sm">
					<FiSearch className="mr-2" />
					<input
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="Search"
						className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
					/>
					<span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-700 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
						<FiCommand />K
					</span>
				</div>
				{noDataFound && <div className="text-red-500">No Data found</div>}
			</div>
			<div className="max-h-[90vh] overflow-auto">

				<table className="text-center">
					<thead className="sticky border-b top-0 bg-neutral-900">
						<tr className="">
							{
								headers.map((item, idx) => {
									return (<th className="p-4 first-letter:capitalize" key={idx}>{item}</th>)
								})
							}
						</tr>
					</thead>
					<tbody className="text-gray-200">
						{
							filteredData.map((item, idx) => (
								<tr key={idx} className={`border-b border-gray-50 ${idx % 2 === 0 ? "bg-neutral-800" : "bg-neutral-900"}`}>
									{
										headers.map((key, idx) => (
											<td className="p-4 text-sm font-semibold min-w-40 first-letter:capitalize" key={idx}>{key === "title" ? <a href={item["url"]} target="_blank" rel="noreferrer">{item[key] + "".slice(30)}...</a> : item[key]}</td>
										))
									}
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}