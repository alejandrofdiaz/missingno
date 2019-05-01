import { DefaultCopies } from 'lib/const';
import { Env } from 'lib/env';
import React, { Fragment, useContext } from 'react';
import { StateContext } from 'state/state';
import { monthSortCallback } from 'utils/gallerySortCallback';

import { Container } from './Container/Container';
import { DarkThemeToggle } from './DarkThemeToggle/DarkThemeToggle';
import { Footer, FooterElement } from './Footer/Footer';
import { FullscreenWithContext } from './Fullscreen/Fullscreen';
import { Gallery } from './Gallery/Gallery';
import { Header } from './Header/Header';
import { InfiniteScrollWithContext } from './InfiniteScroll/InfiniteScroll';
import { Loader } from './Loader/Loader';
import { PictureWithContext } from './Picture/Picture';

export const App: React.FunctionComponent = () => {
  const Context = useContext(StateContext);

  const { pictureData } = Context;

  return (
    <Fragment>
      <InfiniteScrollWithContext>
        <Container>
          <Header />
          <Gallery sortCallback={monthSortCallback}>
            {pictureData.map(
              ({ source_url, date_gmt, id, alt_text }, index) => (
                <PictureWithContext
                  src={source_url}
                  alt={alt_text || DefaultCopies.ALT_DESCRIPTION}
                  date={new Date(date_gmt)}
                  key={id}
                  id={id}
                  currentIndex={index}
                  rawData={pictureData[index]}
                />
              ),
            )}
          </Gallery>
        </Container>
        <FullscreenWithContext />
        <Loader isOpen={Context.loaderOpened} />
      </InfiniteScrollWithContext>
      <Footer>
        <FooterElement href="https://twitter.com/acurtis_" title="Twitter" />
        <FooterElement title={Env.VERSION} />
        <DarkThemeToggle />
      </Footer>
    </Fragment>
  );
};

App.displayName = 'App';
