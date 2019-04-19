import { mediaApi } from 'api/media';
import { useContext, useEffect, useState } from 'react';
import { StateContext } from 'state/state';

export function useFetchMedia() {
  const [initialized, setInitialized] = useState(false);
  const Context = useContext(StateContext);

  const fetchValues = () => {
    Context.toggleLoader(true);
    mediaApi.get().then((response) => {
      Context.setPictureData([...Context.pictureData, ...response]);
      Context.toggleLoader(false);
    });
  };

  useEffect(() => {
    if (!initialized) {
      fetchValues();
      setInitialized(true);
    }
  }, [initialized]);

  return { fetchValues, hasMore: !mediaApi.reachedFinal };
}
