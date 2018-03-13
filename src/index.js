module.exports = function longestConsecutiveLength( arr ) {

  if ( !arr.length ) {
    return 0;
  }

  const sortArr = arr.slice().sort( ( a, b ) => a - b );

  let count = 0,
    i = 0;
  const arrLength = sortArr.length;
  const countsArr = [];

  while ( i < arrLength ) {
    if ( sortArr[ i ] == sortArr[ i + 1 ] - 1 ) {
      count++;
    } else {
      countsArr.push( count );
      count = 0;
    }
    i++;
  }

  const max = Math.max( ...countsArr ) + 1;

  return max;
}