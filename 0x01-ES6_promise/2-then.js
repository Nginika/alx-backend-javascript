export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      const result = {
        status: 200,
        body: 'Success',
      };
      return result;
    })
    .catch(() => {
      console.log('Got a response from the API');
      const emptyError = new Error();
      return emptyError;
    });
}
