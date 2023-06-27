export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = 'Api response';
      resolve(response);
      reject(new Error('API request failed'));
    }, 2000);
  });
}
