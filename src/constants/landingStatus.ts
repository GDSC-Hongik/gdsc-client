//TODO: 추후, TO_DASHBOARD 제외하고 모두 제거
const enum LandingStatus {
  //TO_DASHBOARD 이외 모든 페이지 서버에서 삭제된 상태임
  StudentAuthentication = 'TO_STUDENT_AUTHENTICATION',
  Signup = 'TO_REGISTRATION',
  Dashboard = 'TO_DASHBOARD',
  OnboardingNotOpened = 'ONBOARDING_NOT_OPENED',
  OnboardingClosed = 'ONBOARDING_CLOSED'
}

export default LandingStatus;
