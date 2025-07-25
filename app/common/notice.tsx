import { createPortal } from 'react-dom'
import styled from '@emotion/styled'
import { Notification } from '@mantine/core';
import { useEffect, useState } from 'react';

const NoticeWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 50%;
  transform: translateX(50%);
  z-index: 9999;

  .mantine-Notification-root {
    min-width: 250px;
    max-height: 200px;
    transform: translateX(-50%);
    opacity: 0;

    &.animate {
      opacity: 1;
      transform: translateX(0px);
      transition-duration: 250ms, 250ms, 250ms;
      transition-timing-function: cubic-bezier(0.51, 0.3, 0, 1.21), cubic-bezier(0.51, 0.3, 0, 1.21), linear;
      transition-property: opacity, transform, max-height;
    }
  }
`;

export function Notice({ noticeParams }: { noticeParams: { msg: string; title: string } }) {
  const [showNotice, setShowNotice] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { msg, title } = noticeParams;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const { msg } = noticeParams
    let aniTimer = null;
    let closeTimer = null;
    if (msg) {
      // 如果原本就有要覆蓋掉原本的，並重跑動畫
      if (showNotice) {
        setShowNotice(false);
        aniTimer = setTimeout(() => {
          setShowNotice(true);
        }, 250);
      } else {
        setShowNotice(true);
      }
      closeTimer = setTimeout(() => {
        setShowNotice(false);
      }, 3000);
    }

    return () => {
      if (aniTimer) {
        clearTimeout(aniTimer);
      };
      if (closeTimer) {
        clearTimeout(closeTimer);
      };
    }
  }, [noticeParams]);

  useEffect(() => {
    if (showNotice) {
      setShowAnimation(true);
    } else {
      setShowAnimation(false);
    }
  }, [showNotice]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <NoticeWrapper>
      {
        showNotice ? (
          <Notification className={`${showAnimation ? 'animate' : ''}`} title={title} color='red' onClose={() => setShowNotice(false)}>
            {msg}
          </Notification>
        ) : null
      }
    </NoticeWrapper>,
    document.body
  );
}