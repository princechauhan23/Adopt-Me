const fetchPet = async ({ queryKey }) => {
  // console.log("queryKey", queryKey);
  const id = queryKey[1];

  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`deatils/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPet;