import { test } from "@jest/globals";
import { createConnection } from "../../src/database";
//src/database/index.ts
describe('Database module', () => {
  let connection: any;

  test('Check database connection', async () => {
    connection = await createConnection();
    expect(connection).toBeTruthy();
  });

  afterAll(async () => {
    if (connection) {
      await connection.close();
    }
  });
});
