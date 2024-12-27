import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get(
      "https://randomuser.me/api/?page=1&results=1&seed=abc"
    );
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
}

export default fetchData;
