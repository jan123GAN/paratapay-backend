/*
  Warnings:

  - The values [SUCUSS] on the enum `SettlementStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SettlementStatus_new" AS ENUM ('SUCCESS', 'IN_PROGRESS', 'FAILED');
ALTER TABLE "settlements" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "settlements" ALTER COLUMN "status" TYPE "SettlementStatus_new" USING ("status"::text::"SettlementStatus_new");
ALTER TYPE "SettlementStatus" RENAME TO "SettlementStatus_old";
ALTER TYPE "SettlementStatus_new" RENAME TO "SettlementStatus";
DROP TYPE "SettlementStatus_old";
ALTER TABLE "settlements" ALTER COLUMN "status" SET DEFAULT 'IN_PROGRESS';
COMMIT;
