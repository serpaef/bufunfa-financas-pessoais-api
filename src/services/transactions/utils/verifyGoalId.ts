import { GetOneGoalService } from '../../goals/GetOneGoalService';

async function verifyGoalId(id: number) {
  if (!id) throw new Error('goalId is required');
  if (typeof id !== 'number') throw new Error('goalId must be a number');

  const service = new GetOneGoalService();
  const goal = await service.execute({ id: ''+id });

  if (goal instanceof Error) throw goal;
}

export default verifyGoalId;
