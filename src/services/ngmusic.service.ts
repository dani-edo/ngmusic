import http from "../http/axios";
import { Itunes } from "../types/itunes.type";

class NgMusicService {
  getByKeyword(keyword: string) {
    return http.get<Itunes>(`/search?term=${keyword}`);
  }
}
export default new NgMusicService();
