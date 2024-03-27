function findMatching(drivers, name) {
    return drivers.filter(drivers => drivers.toLowerCase() === name.toLowerCase());
  }
  

  function fuzzyMatch(drivers, letters) {
    return drivers.filter(drivers => drivers.toLowerCase().startsWith(letters.toLowerCase()));
  }
  

  function matchName(drivers, name) {
    return drivers.filter(drivers => drivers.name.toLowerCase() === name.toLowerCase());
  }