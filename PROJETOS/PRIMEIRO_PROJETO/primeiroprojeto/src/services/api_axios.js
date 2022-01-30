import axios from "axios";

const api_axios = axios.create({

    baseURL: "https://viacep.com.br/ws/"

});

export default api_axios;