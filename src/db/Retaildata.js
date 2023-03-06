import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    // configure authentication
  },
  Storage: {
    // configure storage
    AWSS3: {
      bucketName: 'my-retail-datasets',
      region: 'eu-west-2',
    }
  }
});
