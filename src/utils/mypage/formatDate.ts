export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' });
};
