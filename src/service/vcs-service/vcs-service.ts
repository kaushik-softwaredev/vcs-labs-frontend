import { vcs_service } from "../../constants/backend"
import { axiosInstance } from "../axios"

const fetchExpertises = async () => {
    const expertises = await axiosInstance.get(vcs_service.ALL_EXPERTISE);
    return expertises.data;
}

export { fetchExpertises }