async function getUser(userId, token) {
  const url = `${import.meta.env.VITE_API_URL}/users/${userId}`;

  const response = await fetch(url, { 
    method: "GET", 
    headers: {
      Authorization: `Token ${token}`,
    }, 
  });

  if (!response.ok) {
    const fallbackError = `Error fetching user with id ${userId}`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });
    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await response.json();
}

export default getUser;