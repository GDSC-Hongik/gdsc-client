const RoutePath = {
  Index: '/',
  Home: '/',

  MyPage: '/mypage',
  MyPageEdit: '/mypage/edit',

  AuthenticationProcess1_GithubSignin: '/auth',
  AuthenticationProcess2_StudentVerification: '/student-verification',
  AuthenticationProcess3_Signup: '/signup',

  GitHubGuideLink: '#'
} as const;

export default RoutePath;
