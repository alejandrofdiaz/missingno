import { useFetchMedia } from 'components/hooks/useFetchMedia';
import React, { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { StateContext } from 'state/state';

interface InfiniteScrollProps {
  // tslint:disable-next-line: no-any
  children: any;
}

export const InfiniteScrollWithContext = ({
  children,
}: InfiniteScrollProps) => {
  const Context = useContext(StateContext);
  const { pictureData } = Context;
  const { fetchValues, hasMore } = useFetchMedia();

  return (
    <InfiniteScroll
      dataLength={pictureData.length}
      next={fetchValues}
      hasMore={hasMore}
      loader={<h4>Loading</h4>}
    >
      {children}
    </InfiniteScroll>
  );
};
InfiniteScrollWithContext.displayName = 'InfiniteScrollWithContext';
