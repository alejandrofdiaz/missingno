import React, { Fragment, useContext } from 'react';
import { StateContext } from 'state/state';
import { monthSortCallback } from 'utils/gallerySortCallback';

import { Container } from './Container/Container';
import { Footer, FooterElement } from './Footer/Footer';
import { FullscreenWithContext } from './Fullscreen/Fullscreen';
import { Gallery } from './Gallery/Gallery';
import { Header } from './Header/Header';
import { useFetchMedia } from './hooks/useFetchMedia';
import { PictureWithContext } from './Picture/Picture';

export const App: React.FunctionComponent = () => {
  const Context = useContext(StateContext);
  useFetchMedia();

  const { pictureData } = Context;

  return (
    <Fragment>
      <Container>
        <Header />
        <Gallery sortCallback={monthSortCallback}>
          {pictureData.map(({ source_url, date_gmt, id, alt_text }, index) => (
            <PictureWithContext
              src={source_url}
              alt={alt_text}
              date={new Date(date_gmt)}
              key={id}
              id={id}
              currentIndex={index}
              rawData={pictureData[index]}
            />
          ))}
        </Gallery>
        <Footer>
          <FooterElement href="https://twitter.com/acurtis_" title="Twitter" />
        </Footer>
      </Container>
      <FullscreenWithContext />
    </Fragment>
  );
};
