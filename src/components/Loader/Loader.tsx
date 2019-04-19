import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import * as React from 'react';
import ReactDom from 'react-dom';

import LoaderStylesScss from './Loader.styles.scss';

const LOADER_ROOT_ID = 'loader';

interface LoaderProps {
  isOpen: boolean;
}

export class Loader extends React.Component<LoaderProps, {}> {
  public static defaultProps = {
    isOpen: true,
  };
  public static displayName = 'Loader';
  private el: HTMLElement;
  private loaderRoot: HTMLElement;
  constructor(props: LoaderProps) {
    super(props);
    this.el = document.createElement('div');
    this.el.classList.add(LoaderStylesScss.container);
  }

  public componentDidMount() {
    this.loaderRoot = document.getElementById(LOADER_ROOT_ID)!;
    this.loaderRoot.appendChild(this.el);
  }

  public render() {
    const { isOpen } = this.props;

    if (isOpen) {
      this.el.classList.add(LoaderStylesScss.active);
      disableBodyScroll(this.loaderRoot);
    } else {
      this.el.classList.remove(LoaderStylesScss.active);
      clearAllBodyScrollLocks();
    }

    return ReactDom.createPortal(this.loaderMarkup(), this.el);
  }

  private loaderMarkup() {
    return (
      <div className={LoaderStylesScss.wrapper}>
        <h2 className={LoaderStylesScss.title}>loading...</h2>
        <div className={LoaderStylesScss.box} />
      </div>
    );
  }
}
