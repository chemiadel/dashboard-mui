const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

export function forumsList() {
  return fetch(`${endpoint}/forums`, {
    method: 'get',
  }).then((res) => res.json());
}

export function forumsRead(id: number) {
  return fetch(`${endpoint}/forums/${id}`, {
    method: 'get',
  }).then((res) => res.json());
}

export function forumsCreate(data: any) {
  return fetch(`${endpoint}/forums`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function forumsPatch(id: number, data: any) {
  return fetch(`${endpoint}/forums/${id}`, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function forumsDelete(id: number) {
  return fetch(`${endpoint}/forums/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
}
