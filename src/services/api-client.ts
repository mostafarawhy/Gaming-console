import axios from "axios";


export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params : {
        key: "7c67fc293a4c40eaae6c94c2b49ad9ec"
    }
})