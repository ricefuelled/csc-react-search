import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID g_KPN6y0vS9GFS-Jj2nt8H3TNwRHMuLOt5ZkNiaoHLM"
  }
});