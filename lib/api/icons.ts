const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

export function uploadIcon(data: any) {
  return fetch(`${endpoint}/upload`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function deleteIcon(filename: string) {
  return fetch(`${endpoint}/deleteObject?filename=${filename}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
}
