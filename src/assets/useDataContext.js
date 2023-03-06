import React, {useContext} from 'react';
import AWS from 'aws-sdk';
import Papa from "papaparse";

const useDataContext = () => {
  //initial access to the AWS S3 bucket

const s3 = new AWS.S3({
  accessKeyId: 'AKIA5FTDEF33XFVTGNSO',
  secretAccessKey: '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',
  region: 'eu-west-2'
});

const rdata = {};
    async function loadDataFromS3() {
        try {            
          s3.getObject({ Bucket: 'my-retail-datasets', Key: 'test.csv' }, function(err, data) {
            if (err) {
              console.log(err);
            } else {
              const csvData = data.Body.toString();
              //console.log(data.Body.toString());
              rdata = Papa.parse(csvData, { header: true }).data;
              console.log(rdata);
            }
          });
          
        } catch (error) {
          console.error('Error loading data from S3:', error);
        }
      }
  return (
    <div>
      
    </div>
  )
}