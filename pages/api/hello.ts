// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { CompanyService } from '../../lib/company.service';
import { Company } from '../../lib/dynamodb/entities/company.entity';

type Data = {
  companies: Company[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const companies = await CompanyService.listAll();

  res.status(200).json({ companies })
}
