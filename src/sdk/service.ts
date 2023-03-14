type InnerResponse<T> = {
  id: string;
  attributes: T;
};

export interface Response<T> {
  data: InnerResponse<T>;
  error: string;
}

export interface ArrayResponse<T> {
  data: InnerResponse<T>[];
}

export function transformResponse<T>(response: Response<T>): T {
  return response.data.attributes;
}

export function transformArrayResponse<T>(response: ArrayResponse<T>): T[] {
  const items: T[] = [];
  response.data.forEach((item) => {
    items.push(item.attributes);
  });

  return items;
}
