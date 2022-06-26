const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}];

  const getWorthyWorkers = workersarr => {
    const worthyworkers = [];
    workersarr.forEach(currentworker => {
      if (currentworker.salary > 1000) {
        worthyworkers.push(currentworker.name)
      }
    });

    return worthyworkers;
  }

  console.log(getWorthyWorkers(workers))