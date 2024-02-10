import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.border};
  text-align: end;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <div>kkkk</div>
    </HeaderWrapper>
  );
};
