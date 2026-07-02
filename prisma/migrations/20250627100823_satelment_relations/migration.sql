-- AddForeignKey
ALTER TABLE "settlements" ADD CONSTRAINT "settlements_currency_code_fkey" FOREIGN KEY ("currency_code") REFERENCES "currencies"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
