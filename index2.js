module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'My nested lambda',
        input: event,
      },
      null,
      2
    ),
  };
};
