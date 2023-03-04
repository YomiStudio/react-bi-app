import { Storage } from 'aws-amplify';

async function fetchDataFromS3() {
  try {
    const data = await Storage.get('path/to/my-retail-datasets.csv');
    console.log(data); // handle the data
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}
