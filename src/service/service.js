const url = "http://localhost:5000/";

const getAnswer = async (question) => {
  const config = {
    method: "POST",
    body: question,
  };
  const response = await fetch(url, config);
  return response;
};

export { getAnswer };
