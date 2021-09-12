const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { v4: uuidv4 } = require('uuid');

(async () => {
    const client = new DynamoDBClient({
      region: "ap-northeast-1",
      endpoint: "http://localhost:8000"
    });
    const command = new PutItemCommand({
        TableName: 'animals',
        Item: {
            "id": {"S": uuidv4()},
            "Name": {"S": "pug"},
            "AnimalType": {"S": "Dog"}
        }
    });
    try {
      const results = await client.send(command);
      console.log('result:', results);
    } catch (err) {
      console.error(err);
    }
})();