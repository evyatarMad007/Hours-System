import axios from "axios";
import { apiUrl } from '../config/config.json';


export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
};



// const getUser = axios.get(`${apiUrl}`).then( res => res)
      

// const axiosMethods = {
//     getUser
// }
    


// export default axiosMethods;





