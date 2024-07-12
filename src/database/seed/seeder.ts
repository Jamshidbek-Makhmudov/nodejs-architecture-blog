import mongoose from 'mongoose';
import '../../database';
import { ApiKeyModel, Permission } from '../model/ApiKey';
import { RoleCode, RoleModel } from '../model/Role';

const rolesData = [
  { code: RoleCode.LEARNER, createdAt: new Date(), updatedAt: new Date() },
  { code: RoleCode.WRITER, createdAt: new Date(), updatedAt: new Date() },
  { code: RoleCode.EDITOR, createdAt: new Date(), updatedAt: new Date() },
  { code: RoleCode.ADMIN, createdAt: new Date(), updatedAt: new Date() },
];
const apiKeysData = [
  {
    key: `GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj`,
    version: 1,
    permissions: [Permission.GENERAL],
    comments: ['Public key'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    key: `GCMUDiuY5a7WvyUNt9n3QztToSHzK7Ujamshid`,
    version: 1,
    permissions: [Permission.GENERAL],
    comments: ['Private key'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

async function seedDatabase() {
  try {

    await RoleModel.deleteMany({});
    await ApiKeyModel.deleteMany({});

    // Insert rolesData into database
    await RoleModel.insertMany(rolesData);
    await ApiKeyModel.insertMany(apiKeysData);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();
