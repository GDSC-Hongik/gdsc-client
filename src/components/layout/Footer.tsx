import styled from '@emotion/styled';
import { Logo } from '@/assets/LogoIcon';
import { Link } from 'react-router-dom';
import { color } from 'wowds-tokens';
import { Flex, Text } from '../common/Wrapper';
import { FooterLogoIcon } from '@/assets/FooterLogoIcon';
import { FooterGithubIcon, FooterInstagramIcon } from '@/assets/FooterIcons';

const Footer = () => {
  return (
    <Container>
      <Logo />
      <FooterLogoIcon />

      <Flex direction="column" align="start" gap="md">
        <Link to={'https://www.gdschongik.com/developer'}>
          <Text typo="label2" style={{ textDecoration: 'underline' }}>
            와우디벨로퍼스
          </Text>
        </Link>
        <Link to={'https://www.gdschongik.com/onboarding/community-rule'}>
          <Text typo="label2" style={{ textDecoration: 'underline' }}>
            GDGoC Hongik 회칙
          </Text>
        </Link>
        <Link to={'https://www.gdschongik.com/onboarding/community-guideline'}>
          <Text typo="label2" style={{ textDecoration: 'underline' }}>
            GDGoC Hongik 가이드라인{' '}
          </Text>
        </Link>
      </Flex>
      <Flex gap="md" align="start" justify="start" style={{ width: '100%' }}>
        <button
          onClick={() => {
            window.location.href = 'https://github.com/GDSC-Hongik';
          }}>
          <FooterGithubIcon />
        </button>
        <button
          onClick={() => {
            window.location.href = 'https://www.instagram.com/gdsc.hongik/';
          }}>
          <FooterInstagramIcon />
        </button>
      </Flex>
      <Flex direction="column" align="start">
        <Text typo="body3" color="sub">
          와우디벨로퍼스 | 서울특별시 동작구 상도로53길 8, 325동 606호
        </Text>
        <Text typo="body3" color="sub">
          대표 안재현 | TEL 010-2816-5740 | 사업자등록번호 311-82-77953
        </Text>
        <Link to={'https://www.gdschongik.com/privacy-policy'}>
          <Text typo="body3" color="black">
            개인정보처리방침
          </Text>
        </Link>
        <Text typo="body3" color="sub">
          © 2024. 와우디벨로퍼스 all rights reserved.
        </Text>
      </Flex>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  padding: 1.5rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;

  background-color: ${color.backgroundAlternative};
`;

export default Footer;
