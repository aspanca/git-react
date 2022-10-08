if (window.Worker) {
  const myWorker = new Worker("./worker.js");

  document.getElementById("button").addEventListener("click", () => {
    myWorker.postMessage("Message 1");
  });

  myWorker.onmessage = (e) => {
    console.log(e)
  }
}
