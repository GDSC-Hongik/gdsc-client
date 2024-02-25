import apiClient from '@/apis';

export default async function githubLoginApi() {
  return (await apiClient.get(`/oauth2/authorization/github`)).data;
}
