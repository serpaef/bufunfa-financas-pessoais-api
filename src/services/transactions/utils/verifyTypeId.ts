import { GetOneTypeService } from '../../transactionTypes/GetOneTypeService';

async function verifyTypeId(id: number) {
  if (!id) throw new Error('typeId is required');
  if (typeof id !== 'number') throw new Error('typeId must be a number');

  const service = new GetOneTypeService();
  const type = await service.execute({ id: ''+id });

  if (type instanceof Error) throw new Error('Type not found');
}

export default verifyTypeId;
