const RoutePath = {
  Index: '/',
  Home: '/',

  MyPage: '/mypage',
  Bevy: '/bevy',
  Discord: '/discord',

  AuthenticationProcess1_GithubSignin: '/auth',
  AuthenticationProcess2_StudentVerification: '/student-verification',
  AuthenticationProcess3_Signup: '/signup',

  AuthServerRedirect: '/social-login/redirect',
  StudentVerificationServerRedirect: '/onboarding/verify-email',

  GitHubGuideLink:
    'https://childlike-kumquat-540.notion.site/GitHub-0b7f5fa12fd84bd39c0a1ba732af04da?pvs=4',
  StudentEmailLinkGuideLink:
    'https://childlike-kumquat-540.notion.site/af30789ee9f940ab95cb19ffe18f2e44?pvs=74',

  Terms:
    'https://childlike-kumquat-540.notion.site/GDSC-Bevy-64588c93dbc147ebbd01fe7971af07df?pvs=4',
  PersonalPrivacy:
    'https://childlike-kumquat-540.notion.site/af30789ee9f940ab95cb19ffe18f2e44?pvs=74'
} as const;

export default RoutePath;
