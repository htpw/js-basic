const path = "/users/download/index.html"

const isHtml = path => {
  const reqExt = '.html';
  const taskExt = path.slice(-5);

  return reqExt == taskExt
  
  //if (reqExt == taskExt) {
  //  return true;
  //} else {
  //  return false;
  //}
}

console.log(isHtml(path))