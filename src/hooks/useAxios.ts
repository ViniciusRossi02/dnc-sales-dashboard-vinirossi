import {useState} from 'react'
import axios, {type AxiosRequestConfig} from 'axios'

const axioInstance = axios.create ({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/`
})

export const usePost = <T, P> (endpoint: string) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setloading ] = useState(false)
    const [error, setError] = useState<number | null>(null)

    const postData = async (postData: P, config?: AxiosRequestConfig) => {
        setData(null)
        setloading(true)
        setError(null)

        try{
            console.log("URL final:", `${axioInstance.defaults.baseURL}${endpoint}`);
            const response = await axioInstance({
                url: endpoint,
                method: 'POST',
                data: postData,
                headers:{
                    'Content-Type' : 'application/json',
                    ...config?.headers
                },
                ...config
            })
            setData(response.data)
        }catch (e: any){
            setError(e.response.status ?? 500)
        }finally {
            setloading(false)
        }
    }

    return {data,loading,error,postData}
}