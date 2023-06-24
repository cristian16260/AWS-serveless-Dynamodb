const AWS = require("aws-sdk");

const gettasks = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const result = await dynamodb
    .scan({
      TableName: "userTable",
    })
    .promise();

  const tasks = result.Items;

  return {
    status: 200,
    body: { tasks },
  };
};

module.exports = {
  gettasks,
};
