const Helper = {
  filters: {
    elements: (map, search, key) => {
      const regexp = new RegExp(search, 'i');
      const elements = map.filter(x => regexp.test(x[key]));
      return elements
    }
  }
}

export default Helper