import {
  Attribute,
  Entity,
} from '@typedorm/common';


@Entity<Company>({
  name: 'Company',
  primaryKey: { partitionKey: '{{id}}' },
})
export class Company {
  @Attribute()
  id: string;

  constructor({
    id,
  }: { id: string }) {
    this.id = id;

  }
}
