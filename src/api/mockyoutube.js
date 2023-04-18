import axios from "axios";

export default class MockYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#byKeyword() : this.#byPopular();
  }

  async #byKeyword() {
    try {
      const res = await axios.get("/videos/search.json");
      const filterIdDatas = res.data.items.map((item) => ({
        ...item,
        id: item.id.videoId,
      }));
      return filterIdDatas;
    } catch (err) {
      return err;
    }
  }

  async #byPopular() {
    try {
      const res = await axios.get("/videos/popular.json");
      return res.data.items;
    } catch (err) {
      return err;
    }
  }
}
