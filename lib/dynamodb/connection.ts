import { createConnection } from '@typedorm/core';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DocumentClientV3 } from '@typedorm/document-client';
import { Table } from '@typedorm/common';
import { Company } from './entities/company.entity';

const DYNAMODB_TABLE_PK = 'id';

const config = {
  aws: {
    options: {
      credentials:{
        accessKeyId: 'nosecret',
        secretAccessKey: 'nosecret',
      }
    },
  },
  dynamodb: {
    tables: {
      company: 'company',
    },
  },
} as const;

const documentClient = new DocumentClientV3(
  new DynamoDBClient(config.aws.options)
);

export const companyConnection = createConnection({
  name: config.dynamodb.tables.company,
  table: new Table({
    name: config.dynamodb.tables.company,
    partitionKey: DYNAMODB_TABLE_PK,
  }),
  entities: [Company],
  documentClient: documentClient,
});
