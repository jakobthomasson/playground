export const hej = 'he';

function normalizeCoordinates(coordinates: System.Coordinates, dimensions: System.Dimension): System.Coordinates {
  return {
    x: coordinates.x,
    y: dimensions.height - coordinates.y,
  };
}

export function getSize(itemSize: number, numberOfItems: number, marginBetween: number) {
  itemSize;
}
