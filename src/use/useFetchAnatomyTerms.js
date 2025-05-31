/* Fetches the anatomical terms from the remote JSON file */
import { anatomyTermsFile } from "../config/projectConfig.js";

export async function useFetchAnatomyTerms() {
  const url = anatomyTermsFile.baseUrl;
  console.log("Fetching anatomical terms from:", url);

  const response = await fetch(url); // 👈 no headers here

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}
