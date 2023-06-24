const AWS = require("aws-sdk");

const deletetask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  await dynamodb
    .delete({
      TableName: "userTable",
      Key: {
        id,
      },
    })
    .promise();

  return {
    status: 200,
    body: {
      message: "task delete",
    },
  };
};

module.exports = {
  deletetask,
};
