"use server";

const apiKey = process.env.RAPIDAPI_KEY;

export async function getFansly(id: string) {
  const url = `https://fansly-api.p.rapidapi.com/users/${id}`;
  const data = await fetch(url, {
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "fansly-api.p.rapidapi.com",
    } as any,
  });
  const json = await data.json();

  if (json && json.followCount) {
    return json.followCount;
  }
  return null;
  // if(json.)
}
export async function getX(id: string) {
  const url = `https://twitter-api45.p.rapidapi.com/followers.php?screenname=${id}`;
  const data = await fetch(url, {
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "twitter-api45.p.rapidapi.com",
    } as any,
  });
  const json = await data.json();

  console.log(json);
  if (json && json.followers_count) {
    return json.followers_count;
  }
  return null;
  // if(json.)
}
