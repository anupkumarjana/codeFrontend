// codeWorker.js

self.onmessage = function (event) {
  const code = event.data;
  let result;
  try {
    result = eval(code); // Only evaluates code within the Web Worker
    self.postMessage({ output: result });
  } catch (error) {
    self.postMessage({ error: error.message });
  }
};
