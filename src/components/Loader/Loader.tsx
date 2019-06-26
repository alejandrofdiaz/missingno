import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import LoaderStylesScss from './Loader.styles.scss';

const LOADER_ROOT_ID = 'loader';

interface LoaderProps {
  isOpen: boolean;
}

export const Loader = ({ isOpen }: LoaderProps) => {
  const rootElement = useRef(document.createElement('div'));

  useEffect(() => {
    rootElement.current.classList.add(LoaderStylesScss.container);
    const loaderRoot = document.getElementById(LOADER_ROOT_ID)!;
    loaderRoot.appendChild(rootElement.current);
    return () => rootElement.current.remove();
  }, []);

  useEffect(() => {
    if (isOpen) {
      rootElement.current.classList.add(LoaderStylesScss.active);
      disableBodyScroll(rootElement.current);
    } else {
      rootElement.current.classList.remove(LoaderStylesScss.active);
      clearAllBodyScrollLocks();
    }
  }, [isOpen]);

  return createPortal(
    <div className={LoaderStylesScss.wrapper}>
      <h2 className={LoaderStylesScss.title}>loading...</h2>
      <div className={LoaderStylesScss.box} />
    </div>,
    rootElement.current,
  );
};
