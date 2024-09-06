import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { usePlaygroundContext } from './context';
import { useMemo } from 'react';
import { ConfigCompProps } from '../types/schema';

const CofigWrapper = styled.div`
  border-left: 1px solid ${(props) => props.theme.color.border};
  width: 300px;
  padding: 0 10px;

  .MuiFormControl-root {
    width: 100%;
    margin-bottom: 8px !important;
  }
`;

const NoConfigComp = () => {
  return <div></div>;
};

export const Config = () => {
  const { list, currentId, compsMap, keyToContentMap, updateConfigValueById, initId, setInitId } =
    usePlaygroundContext();
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    if (initId === currentId) {
      setIsInit(true);
    } else {
      setIsInit(false);
    }
    setInitId('');
  }, [initId, currentId, setInitId]);

  const { Comp, props, type } = useMemo(() => {
    const props = keyToContentMap[currentId];

    if (!props) {
      return {
        props: null,
        Comp: null,
      };
    }

    return {
      props,
      Comp: compsMap[props.type].config,
      type: props.type,
    };
  }, [currentId, keyToContentMap, compsMap]);

  if (!Comp) {
    return (
      <CofigWrapper>
        <NoConfigComp />
      </CofigWrapper>
    );
  }

  return (
    <CofigWrapper>
      <Comp
        key={currentId}
        type={type}
        configValue={props.configValue || {}}
        onUpdate={(d) => updateConfigValueById(d, currentId)}
        isInit={isInit}
      />
    </CofigWrapper>
  );
};
