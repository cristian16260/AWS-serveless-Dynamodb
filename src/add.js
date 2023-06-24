const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addtask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { title, description } = JSON.parse(event.body);
  const createdate = new Date();
  const id = v4();

  const newtask = {
    id,
    title,
    description,
    createdate,
    done: false
  };

  await dynamodb
    .put({
      TableName: "userTable",
      Item: newtask,
    })
    .promise();

  return {
    status: 200,
    body: JSON.stringify(newtask),
  };
};

module.exports = {
  addtask,
};
