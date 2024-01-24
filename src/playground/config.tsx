import styled from '@emotion/styled';
import { usePlaygroundContext } from './context';

const CofigWrapper = styled.div`
  border-left: 1px solid ${(props) => props.theme.color.border};
  width: 300px;
`;

export const Config = () => {
  const { list } = usePlaygroundContext();

  return <CofigWrapper></CofigWrapper>;
};
