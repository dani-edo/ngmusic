import http from "../http/axios";
// import Meals, {
//   MealsByFilter,
//   ResArea,
//   ResCategory,
// } from "../types/recipe.type";

class NgMusicService {
  getByKeyword(keyword: string) {
    return http.get<any>(`/search?term=${keyword}`);
  }
}
export default new NgMusicService();
