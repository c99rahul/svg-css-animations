let icon = document.querySelector("#drawable-illustration");

if (icon) {
  let paths = icon.querySelectorAll("path");
  if (paths.length) {
    for ([index, path] of paths.entries()) {
      let pathLength = path.getTotalLength();
      console.log(`Path #${index + 1}: ${pathLength}`);
    }
  }
}
