async function randomOutcome() {
  return new Promise((reslove, reject) => {
    if (Math.random() > 0.5) {
      reslove("Succcess");
    } else {
      reject("failed");
    }
  });
}

const handleOutcome = async () => {
  try {
    const result = await randomOutcome();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
handleOutcome();
