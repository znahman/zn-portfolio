# Get the AWS_BUCKET_NAME value as a variable $AWS_BUCKET_NAME
AWS_BUCKET_NAME=$(grep AWS_BUCKET_NAME .env | cut -d '=' -f2);

echo formatting...

yarn format

echo linting and type checking...

yarn test

echo Deploying to s3 bucket $AWS_BUCKET_NAME

# Clean the cache, run build and deploy the public directory
yarn run clean && yarn run build && aws s3 sync public s3://$AWS_BUCKET_NAME/ --acl public-read;