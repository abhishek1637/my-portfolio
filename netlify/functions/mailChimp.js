exports.handler = async function (event, context) {
    const envVariables = {
      MAILCHIMP_URL: process.env.MAILCHIMP_URL,
      MAILCHIMP_U: process.env.MAILCHIMP_U,
      MAILCHIMP_ID: process.env.MAILCHIMP_ID,
      // Add more environment variables as needed
    };
  
    return {
      statusCode: 200,
      body: JSON.stringify({ envVariables }),
    };
  };
  