import { BASE_URL } from '@/constants/environment';

const RoutePath = {
  Index: '/',
  Home: '/',

  Dashboard: '/dashboard',
  Bevy: '/bevy',
  Discord: '/discord',
  DiscordConnect: '/discord/connect',
  DiscordGuide: '/discord/guide',

  OnboardingNotOpened: '/not-opened',
  OnboardingClosed: '/closed',

  AuthenticationProcess1_GithubSignin: '/auth',
  AuthenticationProcess2_StudentVerification: '/student-verification',
  AuthenticationProcess2_UpdatedStudentVerification:
    '/updated-student-verification',
  AuthenticationProcess3_Signup: '/signup',

  AuthGithubLoginRedirect: `${BASE_URL}/oauth2/authorization/github`,

  AuthServerRedirect: '/social-login/redirect',
  StudentVerificationServerRedirect: '/onboarding/verify-email',
  GDSCHongikLink: 'https://www.gdschongik.com',
  GitHubGuideLink: 'https://www.gdschongik.com/guide/github',
  StudentEmailLinkGuideLink: 'https://www.gdschongik.com/guide/student-email',
  CommunityGuideLink:
    'https://www.gdschongik.com/onboarding/community-guideline',
  TermsLink: 'https://www.gdschongik.com/onboarding/community-rule',
  PersonalPrivacyLink: 'https://www.gdschongik.com/privacy-policy',

  InstagramLink: 'https://www.instagram.com/gdsc.hongik/',
  DiscordRegisterLink: 'https://discord.com/register',

  PaymentsCheckout: '/payments/checkout',
  PaymentsSuccess: '/payments/success',
  PaymentsFail: '/payments/fail'
} as const;

export default RoutePath;
