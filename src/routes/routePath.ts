import { BASE_URL } from '@/constants/environment';

const RoutePath = {
  Index: '/',
  Home: '/',

  Dashboard: '/dashboard',
  Discord: '/discord',
  DiscordConnect: '/discord/connect',
  DiscordGuide: '/discord/guide',

  GithubSignin: '/auth',
  StudentVerification: '/student-verification',
  Signup: '/signup',

  AuthGithubLoginRedirect: `${BASE_URL}/oauth2/authorization/github`,

  AuthServerRedirect: '/social-login/redirect',
  StudentVerificationServerRedirect: '/onboarding/verify-email',
  GDSCHongikLink: 'https://www.gdschongik.com',
  GDSCHongikDiscord: 'https://discord.gg/dSV6vSEuGU',
  GitHubGuideLink: 'https://www.gdschongik.com/guide/github',
  StudentEmailLinkGuideLink: 'https://www.gdschongik.com/guide/student-email',
  CommunityGuideLink:
    'https://www.gdschongik.com/onboarding/community-guideline',
  TermsLink: 'https://www.gdschongik.com/onboarding/community-rule',
  PersonalPrivacyLink: 'https://www.gdschongik.com/privacy-policy',

  InstagramLink: 'https://www.instagram.com/gdsc.hongik/',
  DiscordRegisterLink: 'https://discord.com/register',
  DiscordCodeLink: 'https://discord.gg/dSV6vSEuGU',

  PaymentsCheckout: '/payments/checkout',
  PaymentsSuccess: '/payments/success',
  PaymentsFail: '/payments/fail'
} as const;

export default RoutePath;
