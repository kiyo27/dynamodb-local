# DynamoDB Local

## docker dynamodb local

https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html

stand up dynamodb-local 

```
docker run --rm -d -p 8000:8000 --name dynamodb amazon/dynamodb-local -jar DynamoDBLocal.jar -sharedDb
```

## docker aws cli

https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/install-cliv2-docker.html#cliv2-docker-aliases

set alias

```
alias aws='docker run --rm -it -v ~/.aws:/root/.aws amazon/aws-cli'
```

check if the alias is set up

```
aws --version
aws-cli/2.2.37 Python/3.8.8 Linux/4.19.128-microsoft-standard docker/x86_64.amzn.2 prompt/off
```

create configure file

```
$ aws configure
AWS Access Key ID [None]: dummy
AWS Secret Access Key [None]: dummy
Default region name [None]: ap-northeast-1
Default output format [None]: json
$ cat .aws/credentials
[default]
aws_access_key_id = dummy
aws_secret_access_key = dummy
```

## operate dynamodb with aws cli

create table

https://docs.aws.amazon.com/cli/latest/reference/dynamodb/create-table.html

```
aws dynamodb create-table \
    --region ap-northeast-1 \
    --endpoint-url http://host.docker.internal:8000 \
    --table-name animals \
    --key-schema AttributeName=id,KeyType=HASH \
    --attribute-definitions AttributeName=id,AttributeType=S \
    --billing-mode PAY_PER_REQUEST
```

list table

https://docs.aws.amazon.com/cli/latest/reference/dynamodb/list-tables.html

```
aws dynamodb list-tables --endpoint-url http://host.docker.internal:8000
```

scan table

https://docs.aws.amazon.com/cli/latest/reference/dynamodb/scan.html

```
aws dynamodb scan --endpoint-url http://host.docker.internal:8000 --table-name animals
```

delete table
https://docs.aws.amazon.com/cli/latest/reference/dynamodb/delete-table.html

```
aws dynamodb delete-table --endpoint-url http://host.docker.internal:8000 --table-name Employee
```

## NoSQL Workbench

NoSQL Workbench for Amazon DynamoDB

https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/workbench.settingup.html
