function promiseMe(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function load() {
  let yamlDynamic1 = promiseMe(import("/src/lib/data/example2.yaml"));

  const path = "/src/lib/data/example2.yaml";
  let yamlDynamic2 = promiseMe(import(path))

  return {
    yamlDynamic1, yamlDynamic2
  };
}
