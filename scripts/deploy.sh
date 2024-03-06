echo formatting...

yarn format

echo linting and type checking...

yarn verify

echo Deploying to s3 bucket $AWS_BUCKET_NAME

# Clean the cache, run build and deploy the public directory (AWS_BUCKET_NAME) is an environment variable
yarn run clean && yarn run build && aws s3 sync public s3://$AWS_BUCKET_NAME/ --acl public-read;