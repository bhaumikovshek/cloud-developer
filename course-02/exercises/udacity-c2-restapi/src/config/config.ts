export const config = {
  "dev": {
    "username": "udacityrds",
    "password": "udacityrds",
    "database": "udacityrds",
    "host": "udacityrds.cjaychvrqkhk.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udacitybucket-test"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "helloworld"
  }
}
