const API_URL = process.env.TEABLE_API_URL ?? 'https://app.teable.ai/api';
const TABLE_ID = process.env.TEABLE_TABLE_ID as string;

export type SubscriberFields = {
  Email: string;
  'First Name': string;
  'Last Name': string;
};

type TeableRecord = {
  id: string;
  fields: Partial<SubscriberFields>;
};

type ListRecordsResponse = {
  records: TeableRecord[];
};

function getToken() {
  const token = process.env.TEABLE_TOKEN;

  if (!token) {
    throw new Error('TEABLE_TOKEN is not set');
  }

  if (!TABLE_ID) {
    throw new Error('TEABLE_TABLE_ID is not set');
  }

  return token;
}

async function teableFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
      ...init?.headers,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    const body = await response.text();

    throw new Error(`Teable request failed (${response.status}): ${body}`);
  }

  return response.json() as Promise<T>;
}

export async function findSubscriberByEmail(email: string) {
  const filter = {
    conjunction: 'and',
    filterSet: [{fieldId: 'Email', operator: 'is', value: email}],
  };

  const params = new URLSearchParams({
    fieldKeyType: 'name',
    take: '1',
    projection: 'Email',
    filter: JSON.stringify(filter),
  });

  const {records} = await teableFetch<ListRecordsResponse>(
    `/table/${TABLE_ID}/record?${params.toString()}`,
  );

  return records[0] ?? null;
}

export async function createSubscriber(fields: SubscriberFields) {
  return teableFetch<{records: TeableRecord[]}>(
    `/table/${TABLE_ID}/record`,
    {
      method: 'POST',
      body: JSON.stringify({
        fieldKeyType: 'name',
        records: [{fields}],
      }),
    },
  );
}
