import styled from '@emotion/styled';
import { theme } from './theme';
// import { Button } from '@mantine/core';
import { UnstyledButton } from '@mantine/core';
import { ReactComponent as GithubIcon } from '../assets/github.svg';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid ${theme.color.border};

  & > div {
    margin: 0 auto;
    max-width: calc(100% - 600px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

const Button = styled(UnstyledButton)`
  padding: 0 16px;
  border: 1px solid ${theme.color.border};
  height: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  margin-left: 16px;
` as unknown as typeof UnstyledButton;

export const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <Button>Preview</Button>
        <Button>Ask AI</Button>
        <Button>
          <GithubIcon width={30} height={30} />
        </Button>
      </div>
    </HeaderWrapper>
  );
};
