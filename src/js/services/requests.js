async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    body: data,
  });

  return await response.text();
}

async function getResources(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }

  return await response.json();
}

export {postData, getResources};