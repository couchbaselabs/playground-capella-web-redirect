window.onload = function () {
  const counter = document.querySelector(".counter");
  let count = 5;

  const interval = setInterval(() => {
    count--;
    counter.textContent = count;

    if (count === 0) {
      clearInterval(interval);
      window.location.href = "https://cloud.couchbase.com/sign-in";
    }
  }, 1000);
};
