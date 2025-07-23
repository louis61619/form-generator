import styled from '@emotion/styled';
import { theme } from './theme';
// import { Button } from '@mantine/core';
import { UnstyledButton } from '@mantine/core';
import GithubIcon from '../assets/github.svg';
import packageJSON from '../../package.json';

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

    @media screen and (max-width: 1000px) {
      max-width: 400px;
    }
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

  &.primary {
    background-color: ${theme.color.primary};
    color: #fff;
    border: 1px solid ${theme.color.primary};
  }

  &.gradients {
    border: none;
    background: linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251));
    color: #fff;
  }
` as unknown as typeof UnstyledButton;

export const Header: React.FC<{ openPreviewModal: () => void; openAskAIModal: () => void }> = ({
  openPreviewModal,
  openAskAIModal,
}) => {
  return (
    <HeaderWrapper>
      <div>
        <Button className="primary" onClick={openPreviewModal}>
          Preview
        </Button>
        <Button className="gradients" onClick={openAskAIModal}>
          Ask AI
        </Button>
        <Button component="a" href={packageJSON.repository.url} target="_blank">
          <GithubIcon width={30} height={30} />
        </Button>
      </div>
    </HeaderWrapper>
  );
};
