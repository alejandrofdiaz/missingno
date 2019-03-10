import React, { Fragment, useEffect, useState } from 'react';

import { api } from '../api/base';

import { Gallery } from './Gallery/Gallery';
import { Picture } from './Picture/Picture';

export const App: React.FunctionComponent = () => {
  const [initialized, setInitialized] = useState(false);
  // tslint:disable-next-line:no-any
  const [pictureData, setPictureData] = useState<any[]>([]);

  useEffect(() => {
    if (!initialized) {
      api.media().then((response) => {
        setPictureData(response);
      });
    }
    setInitialized(true);
  }, [initialized]);

  return (
    <Fragment>
      <h1>My App</h1>
      <Gallery>
        {pictureData.map((data) => (
          <Picture src={data.source_url} />
        ))}
      </Gallery>
    </Fragment>
  );
};
