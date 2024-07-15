//TODO: 추후, TO_DASHBOARD 제외하고 모두 제거
const enum LandingStatus {
  StudentAuthentication = 'TO_STUDENT_AUTHENTICATION',
  Signup = 'TO_REGISTRATION',
  MyPage = 'TO_DASHBOARD',
  OnboardingNotOpened = 'ONBOARDING_NOT_OPENED',
  OnboardingClosed = 'ONBOARDING_CLOSED'
}

export default LandingStatus;
