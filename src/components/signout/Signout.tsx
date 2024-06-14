import axios, { AxiosResponse } from "axios";
import { SERVER_URL } from "../../Constants";

export const Signout = async () => {
    try {
        const response: AxiosResponse = await axios.get(SERVER_URL + '/auth/signout');
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Handle Axios-specific errors
        
            console.error("Axios error:", error.message);
          } else {
            // Handle general errors
        
            console.error("General error:", error);
          }
    }
};