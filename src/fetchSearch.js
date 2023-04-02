async function fetchSearch({ queryKey }) {
  try {
  // console.log(queryKey)
  const { animal, location, breed } = queryKey[1];
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  console.log("res", res)
  if (!res.ok) {
    throw new Error(`pet search not okay ${animal}, ${location}, ${breed}`);
  }
  return res.json();
}catch (error) {
  console.log("error",error)
}
}

export default fetchSearch;
