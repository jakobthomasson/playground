import * as R from 'remeda';

function getUniqueString() {
  const timestamp = new Date().getTime().toString();
  return timestamp;
}

// function getMockPath(type: System.PathType): System.Path {

// }

export default { getUniqueString };
