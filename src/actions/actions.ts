import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createTask(title: string, description?: string) {
  try {
    const task = await prisma.task.create({
      data: {
        title,
        description
      }
    });
    return task;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
}
