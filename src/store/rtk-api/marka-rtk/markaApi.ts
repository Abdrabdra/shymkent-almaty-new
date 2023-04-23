import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery } from "../rtkApi"

export default createApi({
	reducerPath: "markaApi",
	baseQuery: baseQuery,
	tagTypes: ["marka", "model", "body", "description"],
	endpoints: () => ({})
})
