const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

export function languagesList() {
  return fetch(`${endpoint}/knowledgebase/listLocales/`).then((res) => res.json());
}
