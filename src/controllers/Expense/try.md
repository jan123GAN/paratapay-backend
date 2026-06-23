```
## you know 

✨ Yeh dekh tumhara mindset bilkul sahi hai:

Kaun kaun se records target karne hain?

Kaunsa data insert/update karna hai?

Kis model/table mein karna hai?

Yahi backend development ka asli logic hota hai.

```
```
## You need to learn

✅ Bas ab next level skill:

Typos dhyan se avoid karo.

Prisma ka documentation refer karo.

Loop + transaction kab use karna hai, aur kab createMany chalana hai — yeh practice se aur pakka ho jayega. {
  agr tumhe hr ek user ka amound dicrement krna h to ye value chenge ho rhi h esliye esko transation m wrap krna hoga
}

```



```

| Scenario                                              | Use                    |
| ----------------------------------------------------- | ---------------------- |
| Sab records ek jaise data insert karna                | **createMany**         |
| Sab records same condition pe ek saath update karna   | **updateMany**         |
| Har record ka data alag calculate hota hai            | **Loop + transaction** |
| Chahte ho sab operations ek saath succeed/rollback ho | **Loop + transaction** |

````




```


hume group m jitne member h sb ka balence defalt dena h jo group ka balence h

create balance api do this wrok

when user live from the group then we can remove the balence of that group from the user 

add the balcne in the ueser modle so that we can track the user balcne 





```
   const user = await prisma.users.findUnique({
            where: { id: created_by }
        });
        const paidUser = await prisma.users.findUnique({
            where: { id: paid_by }
        })

        if (!user || !paidUser) {
            return res.status(404).json(errorResponse("User not found"));
        }

```
```




```
import { Request, Response } from "express";
import { successResponse, errorResponse } from "../../utils/response";
import { PrismaClient } from "@prisma/client";
import { createExpence } from "../../validators/expense.validator"
import { currency } from "../../validators/currency.validator";


const prisma = new PrismaClient();

export const createExpens = async (req: Request, res: Response) => {


    const validExpence = createExpence.safeParse(req.body)

    if (!validExpence.success) {
        return res.status(404).json(errorResponse("Validation error", validExpence.error.issues));
    }
    const { group_id, created_by, paid_by, amount, description, category, currency_code, expence_data, split_type } = validExpence.data;
    try {

        const currency = await prisma.currencies.findFirst({
            where: { code: currency_code },
        })
        if (!currency) {
            return res.status(404).json(errorResponse("Currency not found"));
        }

     
        const groupmember = await prisma.group_members.findMany({
            where: {
                OR: [
                    { group_id: group_id },
                    { user_id: created_by },
                    {id: paid_by }
                ]
            }
        });
        if (groupmember) {
            return res.status(400).json(errorResponse("Group has no members"));
        }

        await prisma.$transaction(async (tx) => {
            const newExpence = await tx.expenses.create({
                data: {
                    created_by: created_by,
                    group_id: group_id,
                    amount: amount,
                    description: description,
                    category: category,
                    currency_code: currency_code,
                    expense_data: expence_data,
                    split_type: split_type,
                    paid_by: paid_by
                }
            });

            if (split_type == "EQUAL_SPLIT") {
                const split_amount = 100 / groupmember.length;
                await tx.expense_splits.createMany({
                    data: groupmember.map((member) => ({
                        user_id: member.user_id,
                        own_by: paid_by,
                        percentage: 100 / groupmember.length,
                        exact_amount: split_amount,
                        amount: split_amount,
                        expense_id: newExpence.id
                    }))
                });
            }
        });

        // Calculate balances based on group members and split amounts
        if (split_type == "EQUAL_SPLIT") {
            const split_amount = amount / groupmember.length;
            const balances = groupmember.map((member) => ({
                user_id: member.user_id,
                group_id: group_id,
                exact_amount: split_amount
            }));

            for (const b of balances) {
                await prisma.balances.updateMany({
                    where: {
                        user_id: b.user_id,
                        group_id: b.group_id
                    },
                    data: {
                        balance: {
                            decrement: b.exact_amount
                        }
                    }
                });
            }
        }

        return res.status(201).json(successResponse("Expnece Created sucessfully", ));
    } catch (error) {
        return res.status(500).json(errorResponse("Interal server Error", error));
    }


}

```