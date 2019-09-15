import axios from "axios";

const fetch = async () => {
  const data = await axios.get(
    "https://api.spacexdata.com/v3/launches/upcoming"
  );
  //const res = data.json();
  return data;
};

export default fetch;
