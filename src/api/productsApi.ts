import { ProductResponse } from "../types/product";
import apiClienttt from "./apiClient";


export const productApii = {
    fetchProducts: async (limit: number, skip: number): Promise<ProductResponse> => {
        const resp = await apiClienttt.get<ProductResponse>("/products", {
            params: { limit, skip }
        })
        return resp.data
    },

    searchProducts: async (query: string): Promise<ProductResponse> => {
        const res = await apiClienttt.get<ProductResponse>("/products/search", {
            params: { q: query }
        })
        return res.data
    },

    fetchProductById: async (id: number): Promise<any> => {
        const resp = await apiClienttt.get(`/products/${id}`)
        return resp.data
    }
}