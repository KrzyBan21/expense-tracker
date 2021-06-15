import axios from "axios";

const url = "https://daily-budget-cbd99.firebaseio.com";

export default axios.create({
  baseURL: url,
});
