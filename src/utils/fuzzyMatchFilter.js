const fuzzyMatchFilter = (filter, list, property) => {
  if (filter !== '') {
    const patternString = filter.split('').join('.*');
    const filterPattern = new RegExp(patternString, 'i');

    return list.filter(item => filterPattern.test(item[property]));
  } else {
    return list;
  }
};

export default fuzzyMatchFilter;
