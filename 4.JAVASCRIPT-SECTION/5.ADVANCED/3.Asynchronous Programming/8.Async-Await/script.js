//Simulating a Delay

//creating
async function waitAndRun(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 3000);
  });
}

//usage

const getProcessedValue = async () => {
  const result = await waitAndRun("This is my promise");
  console.log(result);
};
// getProcessedValue();

// Fetching Multiple Values in Parallel

const getName = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Alice");
    }, 3000);
  });
};

const getAge = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(30);
    }, 1000);
  });
};

async function getUserDetails() {
  const result = await Promise.all([getName(), getAge()]);
  console.log(result);
}

getUserDetails();
