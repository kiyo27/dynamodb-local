# DynamoDB Client - AWS SDK for JavaScript v3

DynamoDB Client - AWS SDK for JavaScript v3

https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/index.html

install client-dynamodb

```
yarn add @aws-sdk/client-dynamodb
```

What's the AWS SDK for JavaScript?
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html


## DynamoDB

AttributeValue
https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/APIReference/API_AttributeValue.html

DynamoDB Low-Level API
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.LowLevelAPI.html


## sample: insert data into dynamodb

PutItemCommand
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/classes/putitemcommand.html

PutItemCommandInput
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/interfaces/putitemcommandinput.html

PutItemCommandOutput
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/interfaces/putitemcommandoutput.html

install uuid

```
npm install uuid
```

```
$ node insert-data.js
result: {
  '$metadata': {
    httpStatusCode: 200,
    requestId: 'c910a473-f2a4-41b2-8aab-5cdb6021d0ef',
    extendedRequestId: undefined,
    cfId: undefined,
    attempts: 1,
    totalRetryDelay: 0
  },
  Attributes: undefined,
  ConsumedCapacity: undefined,
  ItemCollectionMetrics: undefined
}
```