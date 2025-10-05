
import axios from "axios"

export const commonAPI = async (httpMethod, url, reqBody) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await axios(reqConfig)
        return response
    } catch (err) {
        return err
    }
}