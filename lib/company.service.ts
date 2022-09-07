import { companyConnection } from './dynamodb/connection';
import { Company } from './dynamodb/entities/company.entity';

export class CompanyService {
  public static async listAll(): Promise<Company[]> {
    const { items: companies = [] } =
      await companyConnection.scanManager.find<Company>(Company, {});
    return companies;
  }
}
