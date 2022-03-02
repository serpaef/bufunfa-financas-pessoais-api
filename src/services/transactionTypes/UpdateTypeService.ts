import { TransactionType } from '../../entities/TransactionType';
import { getRepository } from 'typeorm';

type TypeUpdateRequest = {
  id: string;
  name: string;
}

export class UpdateTypeService {
  async execute({id, name}: TypeUpdateRequest) {
    const repo = getRepository(TransactionType);

    const type = await repo.findOne(id);

    if(!type) return new Error('Type not found');
    if(!name) return new Error('name is required');
    if(typeof name !== 'string') return new Error('name must be a string');
    if(await repo.findOne({name})) return new Error('This type already exists');

    type.name = name;

    await repo.save(type);

    return type;
  }
}
