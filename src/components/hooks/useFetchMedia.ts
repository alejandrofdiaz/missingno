import { mediaApi } from 'api/media';
import { useContext, useEffect, useState } from 'react';
import { StateContext } from 'state/state';

export function useFetchMedia(): () => void {
  const [initialized, setInitialized] = useState(false);
  const Context = useContext(StateContext);

  const fetchValues = () => {
    mediaApi.get().then((response) => {
      Context.setPictureData([...Context.pictureData, ...response]);
    });
  };

  useEffect(() => {
    if (!initialized) {
      fetchValues();
      setInitialized(true);
    }
  }, [initialized]);

  return fetchValues;
}
