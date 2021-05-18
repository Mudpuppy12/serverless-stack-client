const config = {
  STRIPE_KEY: "pk_test_51IrqxzAidkenA2Qvz2QAL4wneF0WAdU7OCtP1Vtb6ufS8ZUyHpWfsdnjENGZYNjMm20ZcFYelkVKNW1loSHPZ4WA006MzssM7n",	
  MAX_ATTACHMENT_SIZE: 5000000,	
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-storagebucket",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.withoutaclue.lol",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7bYjhGcDD",
    APP_CLIENT_ID: "3m3e8gnhjv3rcb3gsfun75ljbd",
    IDENTITY_POOL_ID: "us-east-1:00908b0a-4901-4067-85df-a743af122498",
  },
};

export default config;
