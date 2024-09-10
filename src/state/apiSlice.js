import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashboardApi = createApi({
	reducerPath: "dashboardApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
	endpoints: (builder) => ({
		getEverything: builder.query({
			query: () => `api/data`,
		})
	}),
});

export const { 
    useGetEverythingQuery
} = dashboardApi