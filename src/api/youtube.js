import axios from "axios";

export const search = async (keyword) => {
  try {
    const res = await axios.get(
      `/videos/${keyword ? "search" : "popular"}.json`
    );
    return res.data.items;
  } catch (err) {
    return err;
  }
};
