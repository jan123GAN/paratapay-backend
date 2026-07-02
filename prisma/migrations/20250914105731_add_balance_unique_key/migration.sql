/*
  Warnings:

  - You are about to drop the column `expense_data` on the `expenses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,group_id,currency_code]` on the table `balances` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expense_date` to the `expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "expense_data",
ADD COLUMN     "expense_date" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "balances_user_id_group_id_currency_code_key" ON "balances"("user_id", "group_id", "currency_code");
