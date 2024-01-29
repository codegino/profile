import APITable from 'apitable';

export const apitable = new APITable({
  token: process.env.AI_TABLE_TOKEN as string,
  fieldKey: 'name',
});
