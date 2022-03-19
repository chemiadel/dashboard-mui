const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

//Knowledge API

export function knowledgeBaseList(): Promise<IKnowledge[]> {
  return fetch(`${endpoint}/knowledgebase/listKnowledgeBases`).then((res) => res.json());
}

export function knowledgeBaseRead(id: number | string): Promise<IKnowledge> {
  return fetch(`${endpoint}/knowledgebase/listKnowledgeBases/${id}`).then((res) => res.json());
}

export function knowledgeBaseListWithTranslation(): Promise<IKnowledge> {
  return fetch(`${endpoint}/knowledgebase/listKnowledgeBaseTranslations`).then((res) => res.json());
}

export function knowledgeBaseTranslationsList() {
  return fetch(`${endpoint}/knowledgebase/getKnowledgeBaseTranslations/knowledge_base_id/`).then(
    (res) => res.json(),
  );
}

export function knowledgeBaseCreate(data: IKnowledge): Promise<IKnowledge> {
  return fetch(`${endpoint}/knowledgebase/createKnowledgeBase`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function knowledgeBaseUpdate(id: number | string, data: IKnowledge): Promise<IKnowledge> {
  return fetch(`${endpoint}/forums/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function knowledgeBaseDelete(id: number | string, data: IKnowledge): Promise<IKnowledge> {
  return fetch(`${endpoint}/forums/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

//Category API

export function knowledgeBaseCategoriesList(kbId: number | string): Promise<ICategory[]> {
  return fetch(
    `${endpoint}/knowledgebase/listKnowledgeBaseCategoriesForKnowledgeBase/${kbId}`,
  ).then((res) => res.json());
}

export function categoriesList(): Promise<ICategory[]> {
  return fetch(`${endpoint}/knowledgebase/getCategories`).then((res) => res.json());
}

export function categoryRead(id: number | string): Promise<ICategoryDetails[]> {
  return fetch(
    `${endpoint}/knowledgebase/getKnowledgeBaseCategoryTranslationsByCategoryId/${id}`,
  ).then((res) => res.json());
}

export function categoriesCreate(data: any): Promise<ICategory> {
  return fetch(`${endpoint}/knowledgebase/createKnowledgeBaseCategory`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function categoriesUpdate(id: number | string, data: any): Promise<ICategory> {
  return fetch(`${endpoint}/knowledgebase/updateKnowledgeBaseCategory/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function categoryDelete(id: number | string): Promise<ICategory> {
  return fetch(`${endpoint}/knowledgebase/deleteKnowledgeBaseCategory/${id}`).then((res) =>
    res.json(),
  );
}

//Article APIs

export function knowledgeBaseArticlesList(kbId: number | string) {
  return fetch(
    `${endpoint}/knowledgebase/listKnowledgeBaseCategoriesForKnowledgeBase/${kbId}`,
  ).then((res) => res.json());
}

export function articlesList() {
  return fetch(`${endpoint}/knowledgebase/getCategories`).then((res) => res.json());
}

export function articleRead(id: number | string) {
  return fetch(
    `${endpoint}/knowledgebase/getKnowledgeBaseCategoryTranslationsByCategoryId/${id}`,
  ).then((res) => res.json());
}

export function articleCreate(data: any) {
  return fetch(`${endpoint}/knowledgebase/createKnowledgeBaseCategory`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function articleUpdate(id: number | string, data: any) {
  return fetch(`${endpoint}/knowledgebase/updateKnowledgeBaseCategory/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function articleDelete(id: number | string) {
  return fetch(`${endpoint}/knowledgebase/deleteKnowledgeBaseCategory/${id}`).then((res) =>
    res.json(),
  );
}

export interface IKnowledge {
  id: number | string;
  name: string;
  icon: string;
  footer: string;
  created_at: string;
  homepage_layout: string;
  category_layout: string;
  active: boolean;
  updated_at: string;
  locales: ILocales[];
}

interface ILocales {
  id: number | string;
  alias: string;
  name: string;
  default: boolean;
}

export interface ICategory {
  id: number;
  knowledge_base_id: number;
  parent_id: number;
  position: number;
  created_at: string;
  updated_at: string;
}

export interface ICategoryDetails {
  id: number;
  name: string;
  kb_locale_id: number;
  category_id: number;
  created_at: string;
  updated_at: string;
  ui_color: string;
  category_icon: string;
  title_tag: string;
  footer: string;
  keywords: string;
  meta_description: string;
  publish_now: boolean;
  active: boolean;
  permission: string;
  parent_id: number;
  knowledge_base_id: number;
  position: number;
}
