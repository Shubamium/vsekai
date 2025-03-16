"use server";

import { fetchData } from "./sanity";

export async function getTalent(id: string) {
  const td = await fetchData<any>(`
			*[_type == 'talent' && s.current == '${id}']{
			...}[0]
		`);
  return id;
}
