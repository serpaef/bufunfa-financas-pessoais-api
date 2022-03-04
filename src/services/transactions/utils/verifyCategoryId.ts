import { GetOneCategoryService } from '../..//categories/GetOneCategoryService';

async function verifyCategoryId(id: number) {
  if (!id) throw new Error('categoryId is required');
  if (typeof id !== 'number') throw new Error('categoryId must be a number');

  const service = new GetOneCategoryService();
  const category = await service.execute({ id: ''+id });

  if (category instanceof Error) throw category;
}

export default verifyCategoryId;
