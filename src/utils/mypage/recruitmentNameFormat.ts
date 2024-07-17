import { formatDate } from '../formatDate';

export const convertRecruitmentPeriod = (period: {
  startDate: string;
  endDate: string;
}) => {
  const startDate = formatDate(period.startDate);
  const endDate = formatDate(period.endDate);
  return `지원 기간 : ${startDate} ~ ${endDate}`;
};

export const convertRecruitmentName = (name: string) => {
  const [period, round] = name.split(' ');
  const [year, semester] = period.split('-');
  if (year === undefined || semester === undefined) {
    return `${round} 정회원 지원하기`;
  }
  return `${year}년 ${semester}학기 ${round} 정회원 지원하기`;
};
