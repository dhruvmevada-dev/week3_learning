// 04-callbacks-async.js
// Demonstrates: callbacks, Promises, async/await, and execution order
// (synchronous vs asynchronous flow).

// 1. Basic callback
function fetchDataCallback(callback) {
  console.log("Fetching data (callback style)...");
  setTimeout(() => {
    const data = { id: 1, message: "Data loaded via callback" };
    callback(data);
  }, 500);
}

// 2. Callback with error-first pattern (common Node.js convention)
function divideCallback(a, b, callback) {
  if (b === 0) {
    callback(new Error("Cannot divide by zero"), null);
    return;
  }
  callback(null, a / b);
}

// 3. Promise-based version
function fetchDataPromise() {
  console.log("Fetching data (Promise style)...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 2, message: "Data loaded via Promise" });
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 500);
  });
}

// 4. async/await version consuming the Promise
async function loadData() {
  try {
    console.log("Fetching data (async/await style)...");
    const result = await fetchDataPromise();
    console.log("Async/await result:", result);
  } catch (err) {
    console.error("Async/await error:", err.message);
  }
}

// Run demo — shows sync code runs before async callbacks resolve
console.log("Start of script (synchronous)");

fetchDataCallback((data) => {
  console.log("Callback result:", data);
});

divideCallback(10, 2, (err, result) => {
  if (err) console.error(err.message);
  else console.log("Division result:", result);
});

loadData();

console.log("End of script (synchronous) — runs before async results above");

module.exports = { fetchDataCallback, divideCallback, fetchDataPromise, loadData };
