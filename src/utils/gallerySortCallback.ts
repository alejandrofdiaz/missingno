import { SortCallback } from 'components/Gallery/Gallery';
import { PictureProps } from 'components/Picture/Picture';

export const monthSortCallback: SortCallback = (acc, node) => {
  const { date } = node.props as PictureProps;
  const dateId = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
  if (!acc[dateId]) {
    acc[dateId] = { displayName: dateId, nodes: [] };
  }
  acc[dateId].nodes.push(node);
  return acc;
};

export const defaultSortCallback: SortCallback = (acc, node) => {
  if (!acc.unknown) {
    acc.unknown = { nodes: [], displayName: 'unknown' };
  }
  acc.unknown.nodes.push(node);
  return acc;
};
