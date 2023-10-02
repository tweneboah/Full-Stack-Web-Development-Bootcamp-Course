const url = "https://jsonplaceholder.typicode.com/posts";

//Using Promise based
const fetchData = () => {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
};

// fetchData();

//Using async await

const fetchData2 = async () => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData2();
