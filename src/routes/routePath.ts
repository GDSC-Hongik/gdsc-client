import { BASE_URL } from '@/constants/environment';

const RoutePath = {
  Index: '/',
  Home: '/',

  MyPage: '/mypage',
  Bevy: '/bevy',
  Discord: '/discord',

  OnboardingNotOpened: '/not-opened',

  AuthenticationProcess1_GithubSignin: '/auth',
  AuthenticationProcess2_StudentVerification: '/student-verification',
  AuthenticationProcess2_UpdatedStudentVerification:
    '/updated-student-verification',
  AuthenticationProcess3_Signup: '/signup',

  AuthGithubLoginRedirect: `${BASE_URL}/oauth2/authorization/github`,

  AuthServerRedirect: '/social-login/redirect',
  StudentVerificationServerRedirect: '/onboarding/verify-email',

  GitHubGuideLink: 'https://www.gdschongik.com/guide/github',
  StudentEmailLinkGuideLink: 'https://www.gdschongik.com/guide/student-email',

  CommunityGuideLink:
    'https://www.gdschongik.com/onboarding/community-guideline',
  TermsLink: 'https://www.gdschongik.com/onboarding/community-rule',
  PersonalPrivacyLink: 'https://www.gdschongik.com/privacy-policy'
} as const;

export default RoutePath;
