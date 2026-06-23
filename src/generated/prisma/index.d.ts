
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model groups
 * 
 */
export type groups = $Result.DefaultSelection<Prisma.$groupsPayload>
/**
 * Model group_members
 * 
 */
export type group_members = $Result.DefaultSelection<Prisma.$group_membersPayload>
/**
 * Model reports
 * 
 */
export type reports = $Result.DefaultSelection<Prisma.$reportsPayload>
/**
 * Model currencies
 * 
 */
export type currencies = $Result.DefaultSelection<Prisma.$currenciesPayload>
/**
 * Model exchange_rates
 * 
 */
export type exchange_rates = $Result.DefaultSelection<Prisma.$exchange_ratesPayload>
/**
 * Model settlements
 * 
 */
export type settlements = $Result.DefaultSelection<Prisma.$settlementsPayload>
/**
 * Model expenses
 * 
 */
export type expenses = $Result.DefaultSelection<Prisma.$expensesPayload>
/**
 * Model balances
 * 
 */
export type balances = $Result.DefaultSelection<Prisma.$balancesPayload>
/**
 * Model expense_splits
 * 
 */
export type expense_splits = $Result.DefaultSelection<Prisma.$expense_splitsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const groupType: {
  EQUAL_SPLIT: 'EQUAL_SPLIT',
  CUSTOM_SPLIT: 'CUSTOM_SPLIT'
};

export type groupType = (typeof groupType)[keyof typeof groupType]


export const groupRole: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type groupRole = (typeof groupRole)[keyof typeof groupRole]


export const ReportType: {
  SPENDING_BREAKDOWN: 'SPENDING_BREAKDOWN',
  SUMMARY: 'SUMMARY'
};

export type ReportType = (typeof ReportType)[keyof typeof ReportType]


export const SettlementStatus: {
  SUCUSS: 'SUCUSS',
  IN_PROGRESS: 'IN_PROGRESS',
  FAILED: 'FAILED'
};

export type SettlementStatus = (typeof SettlementStatus)[keyof typeof SettlementStatus]


export const PaymentMethod: {
  CASH: 'CASH',
  BANK: 'BANK',
  ONLINE: 'ONLINE'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const splitType: {
  EQUAL_SPLIT: 'EQUAL_SPLIT',
  CUSTOM_SPLIT: 'CUSTOM_SPLIT'
};

export type splitType = (typeof splitType)[keyof typeof splitType]

}

export type groupType = $Enums.groupType

export const groupType: typeof $Enums.groupType

export type groupRole = $Enums.groupRole

export const groupRole: typeof $Enums.groupRole

export type ReportType = $Enums.ReportType

export const ReportType: typeof $Enums.ReportType

export type SettlementStatus = $Enums.SettlementStatus

export const SettlementStatus: typeof $Enums.SettlementStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type splitType = $Enums.splitType

export const splitType: typeof $Enums.splitType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groups`: Exposes CRUD operations for the **groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.groups.findMany()
    * ```
    */
  get groups(): Prisma.groupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group_members`: Exposes CRUD operations for the **group_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Group_members
    * const group_members = await prisma.group_members.findMany()
    * ```
    */
  get group_members(): Prisma.group_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reports`: Exposes CRUD operations for the **reports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.reports.findMany()
    * ```
    */
  get reports(): Prisma.reportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.currencies`: Exposes CRUD operations for the **currencies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currencies.findMany()
    * ```
    */
  get currencies(): Prisma.currenciesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exchange_rates`: Exposes CRUD operations for the **exchange_rates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exchange_rates
    * const exchange_rates = await prisma.exchange_rates.findMany()
    * ```
    */
  get exchange_rates(): Prisma.exchange_ratesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settlements`: Exposes CRUD operations for the **settlements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settlements
    * const settlements = await prisma.settlements.findMany()
    * ```
    */
  get settlements(): Prisma.settlementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenses`: Exposes CRUD operations for the **expenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expenses.findMany()
    * ```
    */
  get expenses(): Prisma.expensesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balances`: Exposes CRUD operations for the **balances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balances.findMany()
    * ```
    */
  get balances(): Prisma.balancesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense_splits`: Exposes CRUD operations for the **expense_splits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expense_splits
    * const expense_splits = await prisma.expense_splits.findMany()
    * ```
    */
  get expense_splits(): Prisma.expense_splitsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    groups: 'groups',
    group_members: 'group_members',
    reports: 'reports',
    currencies: 'currencies',
    exchange_rates: 'exchange_rates',
    settlements: 'settlements',
    expenses: 'expenses',
    balances: 'balances',
    expense_splits: 'expense_splits'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "groups" | "group_members" | "reports" | "currencies" | "exchange_rates" | "settlements" | "expenses" | "balances" | "expense_splits"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      groups: {
        payload: Prisma.$groupsPayload<ExtArgs>
        fields: Prisma.groupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.groupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.groupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findFirst: {
            args: Prisma.groupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.groupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findMany: {
            args: Prisma.groupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          create: {
            args: Prisma.groupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          createMany: {
            args: Prisma.groupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.groupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          delete: {
            args: Prisma.groupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          update: {
            args: Prisma.groupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          deleteMany: {
            args: Prisma.groupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.groupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.groupsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          upsert: {
            args: Prisma.groupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          aggregate: {
            args: Prisma.GroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroups>
          }
          groupBy: {
            args: Prisma.groupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.groupsCountArgs<ExtArgs>
            result: $Utils.Optional<GroupsCountAggregateOutputType> | number
          }
        }
      }
      group_members: {
        payload: Prisma.$group_membersPayload<ExtArgs>
        fields: Prisma.group_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.group_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.group_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>
          }
          findFirst: {
            args: Prisma.group_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.group_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>
          }
          findMany: {
            args: Prisma.group_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>[]
          }
          create: {
            args: Prisma.group_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>
          }
          createMany: {
            args: Prisma.group_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.group_membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>[]
          }
          delete: {
            args: Prisma.group_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>
          }
          update: {
            args: Prisma.group_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>
          }
          deleteMany: {
            args: Prisma.group_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.group_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.group_membersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>[]
          }
          upsert: {
            args: Prisma.group_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>
          }
          aggregate: {
            args: Prisma.Group_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup_members>
          }
          groupBy: {
            args: Prisma.group_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Group_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.group_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Group_membersCountAggregateOutputType> | number
          }
        }
      }
      reports: {
        payload: Prisma.$reportsPayload<ExtArgs>
        fields: Prisma.reportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          findFirst: {
            args: Prisma.reportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          findMany: {
            args: Prisma.reportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>[]
          }
          create: {
            args: Prisma.reportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          createMany: {
            args: Prisma.reportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reportsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>[]
          }
          delete: {
            args: Prisma.reportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          update: {
            args: Prisma.reportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          deleteMany: {
            args: Prisma.reportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reportsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>[]
          }
          upsert: {
            args: Prisma.reportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportsPayload>
          }
          aggregate: {
            args: Prisma.ReportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReports>
          }
          groupBy: {
            args: Prisma.reportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reportsCountArgs<ExtArgs>
            result: $Utils.Optional<ReportsCountAggregateOutputType> | number
          }
        }
      }
      currencies: {
        payload: Prisma.$currenciesPayload<ExtArgs>
        fields: Prisma.currenciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.currenciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.currenciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>
          }
          findFirst: {
            args: Prisma.currenciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.currenciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>
          }
          findMany: {
            args: Prisma.currenciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>[]
          }
          create: {
            args: Prisma.currenciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>
          }
          createMany: {
            args: Prisma.currenciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.currenciesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>[]
          }
          delete: {
            args: Prisma.currenciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>
          }
          update: {
            args: Prisma.currenciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>
          }
          deleteMany: {
            args: Prisma.currenciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.currenciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.currenciesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>[]
          }
          upsert: {
            args: Prisma.currenciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>
          }
          aggregate: {
            args: Prisma.CurrenciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrencies>
          }
          groupBy: {
            args: Prisma.currenciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrenciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.currenciesCountArgs<ExtArgs>
            result: $Utils.Optional<CurrenciesCountAggregateOutputType> | number
          }
        }
      }
      exchange_rates: {
        payload: Prisma.$exchange_ratesPayload<ExtArgs>
        fields: Prisma.exchange_ratesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exchange_ratesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchange_ratesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exchange_ratesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchange_ratesPayload>
          }
          findFirst: {
            args: Prisma.exchange_ratesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchange_ratesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exchange_ratesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchange_ratesPayload>
          }
          findMany: {
            args: Prisma.exchange_ratesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchange_ratesPayload>[]
          }
          create: {
            args: Prisma.exchange_ratesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchange_ratesPayload>
          }
          createMany: {
            args: Prisma.exchange_ratesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.exchange_ratesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchange_ratesPayload>[]
          }
          delete: {
            args: Prisma.exchange_ratesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchange_ratesPayload>
          }
          update: {
            args: Prisma.exchange_ratesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchange_ratesPayload>
          }
          deleteMany: {
            args: Prisma.exchange_ratesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exchange_ratesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.exchange_ratesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchange_ratesPayload>[]
          }
          upsert: {
            args: Prisma.exchange_ratesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exchange_ratesPayload>
          }
          aggregate: {
            args: Prisma.Exchange_ratesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExchange_rates>
          }
          groupBy: {
            args: Prisma.exchange_ratesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Exchange_ratesGroupByOutputType>[]
          }
          count: {
            args: Prisma.exchange_ratesCountArgs<ExtArgs>
            result: $Utils.Optional<Exchange_ratesCountAggregateOutputType> | number
          }
        }
      }
      settlements: {
        payload: Prisma.$settlementsPayload<ExtArgs>
        fields: Prisma.settlementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settlementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settlementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settlementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settlementsPayload>
          }
          findFirst: {
            args: Prisma.settlementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settlementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settlementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settlementsPayload>
          }
          findMany: {
            args: Prisma.settlementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settlementsPayload>[]
          }
          create: {
            args: Prisma.settlementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settlementsPayload>
          }
          createMany: {
            args: Prisma.settlementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.settlementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settlementsPayload>[]
          }
          delete: {
            args: Prisma.settlementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settlementsPayload>
          }
          update: {
            args: Prisma.settlementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settlementsPayload>
          }
          deleteMany: {
            args: Prisma.settlementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settlementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.settlementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settlementsPayload>[]
          }
          upsert: {
            args: Prisma.settlementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settlementsPayload>
          }
          aggregate: {
            args: Prisma.SettlementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettlements>
          }
          groupBy: {
            args: Prisma.settlementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettlementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.settlementsCountArgs<ExtArgs>
            result: $Utils.Optional<SettlementsCountAggregateOutputType> | number
          }
        }
      }
      expenses: {
        payload: Prisma.$expensesPayload<ExtArgs>
        fields: Prisma.expensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expensesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expensesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          findFirst: {
            args: Prisma.expensesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expensesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          findMany: {
            args: Prisma.expensesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          create: {
            args: Prisma.expensesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          createMany: {
            args: Prisma.expensesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.expensesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          delete: {
            args: Prisma.expensesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          update: {
            args: Prisma.expensesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          deleteMany: {
            args: Prisma.expensesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expensesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.expensesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          upsert: {
            args: Prisma.expensesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          aggregate: {
            args: Prisma.ExpensesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenses>
          }
          groupBy: {
            args: Prisma.expensesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpensesGroupByOutputType>[]
          }
          count: {
            args: Prisma.expensesCountArgs<ExtArgs>
            result: $Utils.Optional<ExpensesCountAggregateOutputType> | number
          }
        }
      }
      balances: {
        payload: Prisma.$balancesPayload<ExtArgs>
        fields: Prisma.balancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.balancesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.balancesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>
          }
          findFirst: {
            args: Prisma.balancesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.balancesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>
          }
          findMany: {
            args: Prisma.balancesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>[]
          }
          create: {
            args: Prisma.balancesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>
          }
          createMany: {
            args: Prisma.balancesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.balancesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>[]
          }
          delete: {
            args: Prisma.balancesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>
          }
          update: {
            args: Prisma.balancesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>
          }
          deleteMany: {
            args: Prisma.balancesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.balancesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.balancesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>[]
          }
          upsert: {
            args: Prisma.balancesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>
          }
          aggregate: {
            args: Prisma.BalancesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalances>
          }
          groupBy: {
            args: Prisma.balancesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.balancesCountArgs<ExtArgs>
            result: $Utils.Optional<BalancesCountAggregateOutputType> | number
          }
        }
      }
      expense_splits: {
        payload: Prisma.$expense_splitsPayload<ExtArgs>
        fields: Prisma.expense_splitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expense_splitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_splitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expense_splitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_splitsPayload>
          }
          findFirst: {
            args: Prisma.expense_splitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_splitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expense_splitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_splitsPayload>
          }
          findMany: {
            args: Prisma.expense_splitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_splitsPayload>[]
          }
          create: {
            args: Prisma.expense_splitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_splitsPayload>
          }
          createMany: {
            args: Prisma.expense_splitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.expense_splitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_splitsPayload>[]
          }
          delete: {
            args: Prisma.expense_splitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_splitsPayload>
          }
          update: {
            args: Prisma.expense_splitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_splitsPayload>
          }
          deleteMany: {
            args: Prisma.expense_splitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expense_splitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.expense_splitsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_splitsPayload>[]
          }
          upsert: {
            args: Prisma.expense_splitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expense_splitsPayload>
          }
          aggregate: {
            args: Prisma.Expense_splitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense_splits>
          }
          groupBy: {
            args: Prisma.expense_splitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Expense_splitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.expense_splitsCountArgs<ExtArgs>
            result: $Utils.Optional<Expense_splitsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    groups?: groupsOmit
    group_members?: group_membersOmit
    reports?: reportsOmit
    currencies?: currenciesOmit
    exchange_rates?: exchange_ratesOmit
    settlements?: settlementsOmit
    expenses?: expensesOmit
    balances?: balancesOmit
    expense_splits?: expense_splitsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    createdGroups: number
    groupmembers: number
    reports: number
    settlements: number
    tosettlements: number
    expenses: number
    paidExpenses: number
    userBalances: number
    splitUserId: number
    splitOwner: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdGroups?: boolean | UsersCountOutputTypeCountCreatedGroupsArgs
    groupmembers?: boolean | UsersCountOutputTypeCountGroupmembersArgs
    reports?: boolean | UsersCountOutputTypeCountReportsArgs
    settlements?: boolean | UsersCountOutputTypeCountSettlementsArgs
    tosettlements?: boolean | UsersCountOutputTypeCountTosettlementsArgs
    expenses?: boolean | UsersCountOutputTypeCountExpensesArgs
    paidExpenses?: boolean | UsersCountOutputTypeCountPaidExpensesArgs
    userBalances?: boolean | UsersCountOutputTypeCountUserBalancesArgs
    splitUserId?: boolean | UsersCountOutputTypeCountSplitUserIdArgs
    splitOwner?: boolean | UsersCountOutputTypeCountSplitOwnerArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCreatedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGroupmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_membersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSettlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settlementsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTosettlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settlementsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPaidExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: balancesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSplitUserIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expense_splitsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSplitOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expense_splitsWhereInput
  }


  /**
   * Count Type GroupsCountOutputType
   */

  export type GroupsCountOutputType = {
    member: number
    reports: number
    settlements: number
    expenses: number
    groupBalances: number
  }

  export type GroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | GroupsCountOutputTypeCountMemberArgs
    reports?: boolean | GroupsCountOutputTypeCountReportsArgs
    settlements?: boolean | GroupsCountOutputTypeCountSettlementsArgs
    expenses?: boolean | GroupsCountOutputTypeCountExpensesArgs
    groupBalances?: boolean | GroupsCountOutputTypeCountGroupBalancesArgs
  }

  // Custom InputTypes
  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsCountOutputType
     */
    select?: GroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_membersWhereInput
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportsWhereInput
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountSettlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settlementsWhereInput
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountGroupBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: balancesWhereInput
  }


  /**
   * Count Type CurrenciesCountOutputType
   */

  export type CurrenciesCountOutputType = {
    fromCurrency: number
    toCurrency: number
    expenses: number
    balance: number
  }

  export type CurrenciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromCurrency?: boolean | CurrenciesCountOutputTypeCountFromCurrencyArgs
    toCurrency?: boolean | CurrenciesCountOutputTypeCountToCurrencyArgs
    expenses?: boolean | CurrenciesCountOutputTypeCountExpensesArgs
    balance?: boolean | CurrenciesCountOutputTypeCountBalanceArgs
  }

  // Custom InputTypes
  /**
   * CurrenciesCountOutputType without action
   */
  export type CurrenciesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesCountOutputType
     */
    select?: CurrenciesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CurrenciesCountOutputType without action
   */
  export type CurrenciesCountOutputTypeCountFromCurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exchange_ratesWhereInput
  }

  /**
   * CurrenciesCountOutputType without action
   */
  export type CurrenciesCountOutputTypeCountToCurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exchange_ratesWhereInput
  }

  /**
   * CurrenciesCountOutputType without action
   */
  export type CurrenciesCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * CurrenciesCountOutputType without action
   */
  export type CurrenciesCountOutputTypeCountBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: balancesWhereInput
  }


  /**
   * Count Type ExpensesCountOutputType
   */

  export type ExpensesCountOutputType = {
    splitExpense: number
  }

  export type ExpensesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    splitExpense?: boolean | ExpensesCountOutputTypeCountSplitExpenseArgs
  }

  // Custom InputTypes
  /**
   * ExpensesCountOutputType without action
   */
  export type ExpensesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpensesCountOutputType
     */
    select?: ExpensesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpensesCountOutputType without action
   */
  export type ExpensesCountOutputTypeCountSplitExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expense_splitsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    displayName: string | null
    avatarUrl: string | null
    mobileNumber: string | null
    social_login_provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    displayName: string | null
    avatarUrl: string | null
    mobileNumber: string | null
    social_login_provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    displayName: number
    avatarUrl: number
    mobileNumber: number
    social_login_provider: number
    contact_list: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    displayName?: true
    avatarUrl?: true
    mobileNumber?: true
    social_login_provider?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    displayName?: true
    avatarUrl?: true
    mobileNumber?: true
    social_login_provider?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    displayName?: true
    avatarUrl?: true
    mobileNumber?: true
    social_login_provider?: true
    contact_list?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list: JsonValue | null
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    deletedAt: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    mobileNumber?: boolean
    social_login_provider?: boolean
    contact_list?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdGroups?: boolean | users$createdGroupsArgs<ExtArgs>
    groupmembers?: boolean | users$groupmembersArgs<ExtArgs>
    reports?: boolean | users$reportsArgs<ExtArgs>
    settlements?: boolean | users$settlementsArgs<ExtArgs>
    tosettlements?: boolean | users$tosettlementsArgs<ExtArgs>
    expenses?: boolean | users$expensesArgs<ExtArgs>
    paidExpenses?: boolean | users$paidExpensesArgs<ExtArgs>
    userBalances?: boolean | users$userBalancesArgs<ExtArgs>
    splitUserId?: boolean | users$splitUserIdArgs<ExtArgs>
    splitOwner?: boolean | users$splitOwnerArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    mobileNumber?: boolean
    social_login_provider?: boolean
    contact_list?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    mobileNumber?: boolean
    social_login_provider?: boolean
    contact_list?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    mobileNumber?: boolean
    social_login_provider?: boolean
    contact_list?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "displayName" | "avatarUrl" | "mobileNumber" | "social_login_provider" | "contact_list" | "createdAt" | "updatedAt" | "isDeleted" | "deletedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdGroups?: boolean | users$createdGroupsArgs<ExtArgs>
    groupmembers?: boolean | users$groupmembersArgs<ExtArgs>
    reports?: boolean | users$reportsArgs<ExtArgs>
    settlements?: boolean | users$settlementsArgs<ExtArgs>
    tosettlements?: boolean | users$tosettlementsArgs<ExtArgs>
    expenses?: boolean | users$expensesArgs<ExtArgs>
    paidExpenses?: boolean | users$paidExpensesArgs<ExtArgs>
    userBalances?: boolean | users$userBalancesArgs<ExtArgs>
    splitUserId?: boolean | users$splitUserIdArgs<ExtArgs>
    splitOwner?: boolean | users$splitOwnerArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      createdGroups: Prisma.$groupsPayload<ExtArgs>[]
      groupmembers: Prisma.$group_membersPayload<ExtArgs>[]
      reports: Prisma.$reportsPayload<ExtArgs>[]
      settlements: Prisma.$settlementsPayload<ExtArgs>[]
      tosettlements: Prisma.$settlementsPayload<ExtArgs>[]
      expenses: Prisma.$expensesPayload<ExtArgs>[]
      paidExpenses: Prisma.$expensesPayload<ExtArgs>[]
      userBalances: Prisma.$balancesPayload<ExtArgs>[]
      splitUserId: Prisma.$expense_splitsPayload<ExtArgs>[]
      splitOwner: Prisma.$expense_splitsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      displayName: string
      avatarUrl: string
      mobileNumber: string
      social_login_provider: string
      contact_list: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdGroups<T extends users$createdGroupsArgs<ExtArgs> = {}>(args?: Subset<T, users$createdGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupmembers<T extends users$groupmembersArgs<ExtArgs> = {}>(args?: Subset<T, users$groupmembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends users$reportsArgs<ExtArgs> = {}>(args?: Subset<T, users$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settlements<T extends users$settlementsArgs<ExtArgs> = {}>(args?: Subset<T, users$settlementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tosettlements<T extends users$tosettlementsArgs<ExtArgs> = {}>(args?: Subset<T, users$tosettlementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends users$expensesArgs<ExtArgs> = {}>(args?: Subset<T, users$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paidExpenses<T extends users$paidExpensesArgs<ExtArgs> = {}>(args?: Subset<T, users$paidExpensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userBalances<T extends users$userBalancesArgs<ExtArgs> = {}>(args?: Subset<T, users$userBalancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    splitUserId<T extends users$splitUserIdArgs<ExtArgs> = {}>(args?: Subset<T, users$splitUserIdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    splitOwner<T extends users$splitOwnerArgs<ExtArgs> = {}>(args?: Subset<T, users$splitOwnerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly displayName: FieldRef<"users", 'String'>
    readonly avatarUrl: FieldRef<"users", 'String'>
    readonly mobileNumber: FieldRef<"users", 'String'>
    readonly social_login_provider: FieldRef<"users", 'String'>
    readonly contact_list: FieldRef<"users", 'Json'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
    readonly isDeleted: FieldRef<"users", 'Boolean'>
    readonly deletedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.createdGroups
   */
  export type users$createdGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    cursor?: groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * users.groupmembers
   */
  export type users$groupmembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    where?: group_membersWhereInput
    orderBy?: group_membersOrderByWithRelationInput | group_membersOrderByWithRelationInput[]
    cursor?: group_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Group_membersScalarFieldEnum | Group_membersScalarFieldEnum[]
  }

  /**
   * users.reports
   */
  export type users$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    where?: reportsWhereInput
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    cursor?: reportsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * users.settlements
   */
  export type users$settlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
    where?: settlementsWhereInput
    orderBy?: settlementsOrderByWithRelationInput | settlementsOrderByWithRelationInput[]
    cursor?: settlementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementsScalarFieldEnum | SettlementsScalarFieldEnum[]
  }

  /**
   * users.tosettlements
   */
  export type users$tosettlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
    where?: settlementsWhereInput
    orderBy?: settlementsOrderByWithRelationInput | settlementsOrderByWithRelationInput[]
    cursor?: settlementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementsScalarFieldEnum | SettlementsScalarFieldEnum[]
  }

  /**
   * users.expenses
   */
  export type users$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * users.paidExpenses
   */
  export type users$paidExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * users.userBalances
   */
  export type users$userBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    where?: balancesWhereInput
    orderBy?: balancesOrderByWithRelationInput | balancesOrderByWithRelationInput[]
    cursor?: balancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * users.splitUserId
   */
  export type users$splitUserIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
    where?: expense_splitsWhereInput
    orderBy?: expense_splitsOrderByWithRelationInput | expense_splitsOrderByWithRelationInput[]
    cursor?: expense_splitsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Expense_splitsScalarFieldEnum | Expense_splitsScalarFieldEnum[]
  }

  /**
   * users.splitOwner
   */
  export type users$splitOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
    where?: expense_splitsWhereInput
    orderBy?: expense_splitsOrderByWithRelationInput | expense_splitsOrderByWithRelationInput[]
    cursor?: expense_splitsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Expense_splitsScalarFieldEnum | Expense_splitsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model groups
   */

  export type AggregateGroups = {
    _count: GroupsCountAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  export type GroupsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    avatarUrl: string | null
    groupType: $Enums.groupType | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type GroupsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    avatarUrl: string | null
    groupType: $Enums.groupType | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
    deletedAt: Date | null
  }

  export type GroupsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    avatarUrl: number
    groupType: number
    createdAt: number
    updatedAt: number
    createdBy: number
    isDeleted: number
    deletedAt: number
    _all: number
  }


  export type GroupsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    avatarUrl?: true
    groupType?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type GroupsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    avatarUrl?: true
    groupType?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    isDeleted?: true
    deletedAt?: true
  }

  export type GroupsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    avatarUrl?: true
    groupType?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    isDeleted?: true
    deletedAt?: true
    _all?: true
  }

  export type GroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to aggregate.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned groups
    **/
    _count?: true | GroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupsMaxAggregateInputType
  }

  export type GetGroupsAggregateType<T extends GroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroups[P]>
      : GetScalarType<T[P], AggregateGroups[P]>
  }




  export type groupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithAggregationInput | groupsOrderByWithAggregationInput[]
    by: GroupsScalarFieldEnum[] | GroupsScalarFieldEnum
    having?: groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupsCountAggregateInputType | true
    _min?: GroupsMinAggregateInputType
    _max?: GroupsMaxAggregateInputType
  }

  export type GroupsGroupByOutputType = {
    id: string
    name: string
    description: string | null
    avatarUrl: string
    groupType: $Enums.groupType
    createdAt: Date
    updatedAt: Date
    createdBy: string
    isDeleted: boolean
    deletedAt: Date | null
    _count: GroupsCountAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  type GetGroupsGroupByPayload<T extends groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupsGroupByOutputType[P]>
        }
      >
    >


  export type groupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    avatarUrl?: boolean
    groupType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    creator?: boolean | usersDefaultArgs<ExtArgs>
    member?: boolean | groups$memberArgs<ExtArgs>
    reports?: boolean | groups$reportsArgs<ExtArgs>
    settlements?: boolean | groups$settlementsArgs<ExtArgs>
    expenses?: boolean | groups$expensesArgs<ExtArgs>
    groupBalances?: boolean | groups$groupBalancesArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    avatarUrl?: boolean
    groupType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    avatarUrl?: boolean
    groupType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    avatarUrl?: boolean
    groupType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
  }

  export type groupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "avatarUrl" | "groupType" | "createdAt" | "updatedAt" | "createdBy" | "isDeleted" | "deletedAt", ExtArgs["result"]["groups"]>
  export type groupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | usersDefaultArgs<ExtArgs>
    member?: boolean | groups$memberArgs<ExtArgs>
    reports?: boolean | groups$reportsArgs<ExtArgs>
    settlements?: boolean | groups$settlementsArgs<ExtArgs>
    expenses?: boolean | groups$expensesArgs<ExtArgs>
    groupBalances?: boolean | groups$groupBalancesArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type groupsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type groupsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $groupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "groups"
    objects: {
      creator: Prisma.$usersPayload<ExtArgs>
      member: Prisma.$group_membersPayload<ExtArgs>[]
      reports: Prisma.$reportsPayload<ExtArgs>[]
      settlements: Prisma.$settlementsPayload<ExtArgs>[]
      expenses: Prisma.$expensesPayload<ExtArgs>[]
      groupBalances: Prisma.$balancesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      avatarUrl: string
      groupType: $Enums.groupType
      createdAt: Date
      updatedAt: Date
      createdBy: string
      isDeleted: boolean
      deletedAt: Date | null
    }, ExtArgs["result"]["groups"]>
    composites: {}
  }

  type groupsGetPayload<S extends boolean | null | undefined | groupsDefaultArgs> = $Result.GetResult<Prisma.$groupsPayload, S>

  type groupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupsCountAggregateInputType | true
    }

  export interface groupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['groups'], meta: { name: 'groups' } }
    /**
     * Find zero or one Groups that matches the filter.
     * @param {groupsFindUniqueArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends groupsFindUniqueArgs>(args: SelectSubset<T, groupsFindUniqueArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Groups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {groupsFindUniqueOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends groupsFindUniqueOrThrowArgs>(args: SelectSubset<T, groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends groupsFindFirstArgs>(args?: SelectSubset<T, groupsFindFirstArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends groupsFindFirstOrThrowArgs>(args?: SelectSubset<T, groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.groups.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.groups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupsWithIdOnly = await prisma.groups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends groupsFindManyArgs>(args?: SelectSubset<T, groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Groups.
     * @param {groupsCreateArgs} args - Arguments to create a Groups.
     * @example
     * // Create one Groups
     * const Groups = await prisma.groups.create({
     *   data: {
     *     // ... data to create a Groups
     *   }
     * })
     * 
     */
    create<T extends groupsCreateArgs>(args: SelectSubset<T, groupsCreateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {groupsCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends groupsCreateManyArgs>(args?: SelectSubset<T, groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {groupsCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupsWithIdOnly = await prisma.groups.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends groupsCreateManyAndReturnArgs>(args?: SelectSubset<T, groupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Groups.
     * @param {groupsDeleteArgs} args - Arguments to delete one Groups.
     * @example
     * // Delete one Groups
     * const Groups = await prisma.groups.delete({
     *   where: {
     *     // ... filter to delete one Groups
     *   }
     * })
     * 
     */
    delete<T extends groupsDeleteArgs>(args: SelectSubset<T, groupsDeleteArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Groups.
     * @param {groupsUpdateArgs} args - Arguments to update one Groups.
     * @example
     * // Update one Groups
     * const groups = await prisma.groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends groupsUpdateArgs>(args: SelectSubset<T, groupsUpdateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {groupsDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends groupsDeleteManyArgs>(args?: SelectSubset<T, groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends groupsUpdateManyArgs>(args: SelectSubset<T, groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {groupsUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupsWithIdOnly = await prisma.groups.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends groupsUpdateManyAndReturnArgs>(args: SelectSubset<T, groupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Groups.
     * @param {groupsUpsertArgs} args - Arguments to update or create a Groups.
     * @example
     * // Update or create a Groups
     * const groups = await prisma.groups.upsert({
     *   create: {
     *     // ... data to create a Groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groups we want to update
     *   }
     * })
     */
    upsert<T extends groupsUpsertArgs>(args: SelectSubset<T, groupsUpsertArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.groups.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends groupsCountArgs>(
      args?: Subset<T, groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupsAggregateArgs>(args: Subset<T, GroupsAggregateArgs>): Prisma.PrismaPromise<GetGroupsAggregateType<T>>

    /**
     * Group by Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupsGroupByArgs['orderBy'] }
        : { orderBy?: groupsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the groups model
   */
  readonly fields: groupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends groups$memberArgs<ExtArgs> = {}>(args?: Subset<T, groups$memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends groups$reportsArgs<ExtArgs> = {}>(args?: Subset<T, groups$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settlements<T extends groups$settlementsArgs<ExtArgs> = {}>(args?: Subset<T, groups$settlementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends groups$expensesArgs<ExtArgs> = {}>(args?: Subset<T, groups$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupBalances<T extends groups$groupBalancesArgs<ExtArgs> = {}>(args?: Subset<T, groups$groupBalancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the groups model
   */
  interface groupsFieldRefs {
    readonly id: FieldRef<"groups", 'String'>
    readonly name: FieldRef<"groups", 'String'>
    readonly description: FieldRef<"groups", 'String'>
    readonly avatarUrl: FieldRef<"groups", 'String'>
    readonly groupType: FieldRef<"groups", 'groupType'>
    readonly createdAt: FieldRef<"groups", 'DateTime'>
    readonly updatedAt: FieldRef<"groups", 'DateTime'>
    readonly createdBy: FieldRef<"groups", 'String'>
    readonly isDeleted: FieldRef<"groups", 'Boolean'>
    readonly deletedAt: FieldRef<"groups", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * groups findUnique
   */
  export type groupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findUniqueOrThrow
   */
  export type groupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findFirst
   */
  export type groupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findFirstOrThrow
   */
  export type groupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findMany
   */
  export type groupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups create
   */
  export type groupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to create a groups.
     */
    data: XOR<groupsCreateInput, groupsUncheckedCreateInput>
  }

  /**
   * groups createMany
   */
  export type groupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groups.
     */
    data: groupsCreateManyInput | groupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * groups createManyAndReturn
   */
  export type groupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * The data used to create many groups.
     */
    data: groupsCreateManyInput | groupsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * groups update
   */
  export type groupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to update a groups.
     */
    data: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
    /**
     * Choose, which groups to update.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups updateMany
   */
  export type groupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groups.
     */
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
  }

  /**
   * groups updateManyAndReturn
   */
  export type groupsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * The data used to update groups.
     */
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * groups upsert
   */
  export type groupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The filter to search for the groups to update in case it exists.
     */
    where: groupsWhereUniqueInput
    /**
     * In case the groups found by the `where` argument doesn't exist, create a new groups with this data.
     */
    create: XOR<groupsCreateInput, groupsUncheckedCreateInput>
    /**
     * In case the groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
  }

  /**
   * groups delete
   */
  export type groupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter which groups to delete.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups deleteMany
   */
  export type groupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to delete
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to delete.
     */
    limit?: number
  }

  /**
   * groups.member
   */
  export type groups$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    where?: group_membersWhereInput
    orderBy?: group_membersOrderByWithRelationInput | group_membersOrderByWithRelationInput[]
    cursor?: group_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Group_membersScalarFieldEnum | Group_membersScalarFieldEnum[]
  }

  /**
   * groups.reports
   */
  export type groups$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    where?: reportsWhereInput
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    cursor?: reportsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * groups.settlements
   */
  export type groups$settlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
    where?: settlementsWhereInput
    orderBy?: settlementsOrderByWithRelationInput | settlementsOrderByWithRelationInput[]
    cursor?: settlementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementsScalarFieldEnum | SettlementsScalarFieldEnum[]
  }

  /**
   * groups.expenses
   */
  export type groups$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * groups.groupBalances
   */
  export type groups$groupBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    where?: balancesWhereInput
    orderBy?: balancesOrderByWithRelationInput | balancesOrderByWithRelationInput[]
    cursor?: balancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * groups without action
   */
  export type groupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
  }


  /**
   * Model group_members
   */

  export type AggregateGroup_members = {
    _count: Group_membersCountAggregateOutputType | null
    _min: Group_membersMinAggregateOutputType | null
    _max: Group_membersMaxAggregateOutputType | null
  }

  export type Group_membersMinAggregateOutputType = {
    id: string | null
    role: $Enums.groupRole | null
    joined_at: Date | null
    group_id: string | null
    user_id: string | null
    isInGroup: boolean | null
    left_at: Date | null
  }

  export type Group_membersMaxAggregateOutputType = {
    id: string | null
    role: $Enums.groupRole | null
    joined_at: Date | null
    group_id: string | null
    user_id: string | null
    isInGroup: boolean | null
    left_at: Date | null
  }

  export type Group_membersCountAggregateOutputType = {
    id: number
    role: number
    joined_at: number
    group_id: number
    user_id: number
    isInGroup: number
    left_at: number
    _all: number
  }


  export type Group_membersMinAggregateInputType = {
    id?: true
    role?: true
    joined_at?: true
    group_id?: true
    user_id?: true
    isInGroup?: true
    left_at?: true
  }

  export type Group_membersMaxAggregateInputType = {
    id?: true
    role?: true
    joined_at?: true
    group_id?: true
    user_id?: true
    isInGroup?: true
    left_at?: true
  }

  export type Group_membersCountAggregateInputType = {
    id?: true
    role?: true
    joined_at?: true
    group_id?: true
    user_id?: true
    isInGroup?: true
    left_at?: true
    _all?: true
  }

  export type Group_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_members to aggregate.
     */
    where?: group_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_members to fetch.
     */
    orderBy?: group_membersOrderByWithRelationInput | group_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: group_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned group_members
    **/
    _count?: true | Group_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Group_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Group_membersMaxAggregateInputType
  }

  export type GetGroup_membersAggregateType<T extends Group_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup_members[P]>
      : GetScalarType<T[P], AggregateGroup_members[P]>
  }




  export type group_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_membersWhereInput
    orderBy?: group_membersOrderByWithAggregationInput | group_membersOrderByWithAggregationInput[]
    by: Group_membersScalarFieldEnum[] | Group_membersScalarFieldEnum
    having?: group_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Group_membersCountAggregateInputType | true
    _min?: Group_membersMinAggregateInputType
    _max?: Group_membersMaxAggregateInputType
  }

  export type Group_membersGroupByOutputType = {
    id: string
    role: $Enums.groupRole
    joined_at: Date
    group_id: string
    user_id: string
    isInGroup: boolean
    left_at: Date | null
    _count: Group_membersCountAggregateOutputType | null
    _min: Group_membersMinAggregateOutputType | null
    _max: Group_membersMaxAggregateOutputType | null
  }

  type GetGroup_membersGroupByPayload<T extends group_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Group_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Group_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Group_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Group_membersGroupByOutputType[P]>
        }
      >
    >


  export type group_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joined_at?: boolean
    group_id?: boolean
    user_id?: boolean
    isInGroup?: boolean
    left_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_members"]>

  export type group_membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joined_at?: boolean
    group_id?: boolean
    user_id?: boolean
    isInGroup?: boolean
    left_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_members"]>

  export type group_membersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joined_at?: boolean
    group_id?: boolean
    user_id?: boolean
    isInGroup?: boolean
    left_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_members"]>

  export type group_membersSelectScalar = {
    id?: boolean
    role?: boolean
    joined_at?: boolean
    group_id?: boolean
    user_id?: boolean
    isInGroup?: boolean
    left_at?: boolean
  }

  export type group_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "joined_at" | "group_id" | "user_id" | "isInGroup" | "left_at", ExtArgs["result"]["group_members"]>
  export type group_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }
  export type group_membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }
  export type group_membersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }

  export type $group_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "group_members"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      group: Prisma.$groupsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.groupRole
      joined_at: Date
      group_id: string
      user_id: string
      isInGroup: boolean
      left_at: Date | null
    }, ExtArgs["result"]["group_members"]>
    composites: {}
  }

  type group_membersGetPayload<S extends boolean | null | undefined | group_membersDefaultArgs> = $Result.GetResult<Prisma.$group_membersPayload, S>

  type group_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<group_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Group_membersCountAggregateInputType | true
    }

  export interface group_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['group_members'], meta: { name: 'group_members' } }
    /**
     * Find zero or one Group_members that matches the filter.
     * @param {group_membersFindUniqueArgs} args - Arguments to find a Group_members
     * @example
     * // Get one Group_members
     * const group_members = await prisma.group_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends group_membersFindUniqueArgs>(args: SelectSubset<T, group_membersFindUniqueArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {group_membersFindUniqueOrThrowArgs} args - Arguments to find a Group_members
     * @example
     * // Get one Group_members
     * const group_members = await prisma.group_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends group_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, group_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_membersFindFirstArgs} args - Arguments to find a Group_members
     * @example
     * // Get one Group_members
     * const group_members = await prisma.group_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends group_membersFindFirstArgs>(args?: SelectSubset<T, group_membersFindFirstArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_membersFindFirstOrThrowArgs} args - Arguments to find a Group_members
     * @example
     * // Get one Group_members
     * const group_members = await prisma.group_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends group_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, group_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Group_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Group_members
     * const group_members = await prisma.group_members.findMany()
     * 
     * // Get first 10 Group_members
     * const group_members = await prisma.group_members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const group_membersWithIdOnly = await prisma.group_members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends group_membersFindManyArgs>(args?: SelectSubset<T, group_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group_members.
     * @param {group_membersCreateArgs} args - Arguments to create a Group_members.
     * @example
     * // Create one Group_members
     * const Group_members = await prisma.group_members.create({
     *   data: {
     *     // ... data to create a Group_members
     *   }
     * })
     * 
     */
    create<T extends group_membersCreateArgs>(args: SelectSubset<T, group_membersCreateArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Group_members.
     * @param {group_membersCreateManyArgs} args - Arguments to create many Group_members.
     * @example
     * // Create many Group_members
     * const group_members = await prisma.group_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends group_membersCreateManyArgs>(args?: SelectSubset<T, group_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Group_members and returns the data saved in the database.
     * @param {group_membersCreateManyAndReturnArgs} args - Arguments to create many Group_members.
     * @example
     * // Create many Group_members
     * const group_members = await prisma.group_members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Group_members and only return the `id`
     * const group_membersWithIdOnly = await prisma.group_members.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends group_membersCreateManyAndReturnArgs>(args?: SelectSubset<T, group_membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group_members.
     * @param {group_membersDeleteArgs} args - Arguments to delete one Group_members.
     * @example
     * // Delete one Group_members
     * const Group_members = await prisma.group_members.delete({
     *   where: {
     *     // ... filter to delete one Group_members
     *   }
     * })
     * 
     */
    delete<T extends group_membersDeleteArgs>(args: SelectSubset<T, group_membersDeleteArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group_members.
     * @param {group_membersUpdateArgs} args - Arguments to update one Group_members.
     * @example
     * // Update one Group_members
     * const group_members = await prisma.group_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends group_membersUpdateArgs>(args: SelectSubset<T, group_membersUpdateArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Group_members.
     * @param {group_membersDeleteManyArgs} args - Arguments to filter Group_members to delete.
     * @example
     * // Delete a few Group_members
     * const { count } = await prisma.group_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends group_membersDeleteManyArgs>(args?: SelectSubset<T, group_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Group_members
     * const group_members = await prisma.group_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends group_membersUpdateManyArgs>(args: SelectSubset<T, group_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group_members and returns the data updated in the database.
     * @param {group_membersUpdateManyAndReturnArgs} args - Arguments to update many Group_members.
     * @example
     * // Update many Group_members
     * const group_members = await prisma.group_members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Group_members and only return the `id`
     * const group_membersWithIdOnly = await prisma.group_members.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends group_membersUpdateManyAndReturnArgs>(args: SelectSubset<T, group_membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group_members.
     * @param {group_membersUpsertArgs} args - Arguments to update or create a Group_members.
     * @example
     * // Update or create a Group_members
     * const group_members = await prisma.group_members.upsert({
     *   create: {
     *     // ... data to create a Group_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group_members we want to update
     *   }
     * })
     */
    upsert<T extends group_membersUpsertArgs>(args: SelectSubset<T, group_membersUpsertArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Group_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_membersCountArgs} args - Arguments to filter Group_members to count.
     * @example
     * // Count the number of Group_members
     * const count = await prisma.group_members.count({
     *   where: {
     *     // ... the filter for the Group_members we want to count
     *   }
     * })
    **/
    count<T extends group_membersCountArgs>(
      args?: Subset<T, group_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Group_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Group_membersAggregateArgs>(args: Subset<T, Group_membersAggregateArgs>): Prisma.PrismaPromise<GetGroup_membersAggregateType<T>>

    /**
     * Group by Group_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_membersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends group_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: group_membersGroupByArgs['orderBy'] }
        : { orderBy?: group_membersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, group_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroup_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the group_members model
   */
  readonly fields: group_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for group_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__group_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupsDefaultArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the group_members model
   */
  interface group_membersFieldRefs {
    readonly id: FieldRef<"group_members", 'String'>
    readonly role: FieldRef<"group_members", 'groupRole'>
    readonly joined_at: FieldRef<"group_members", 'DateTime'>
    readonly group_id: FieldRef<"group_members", 'String'>
    readonly user_id: FieldRef<"group_members", 'String'>
    readonly isInGroup: FieldRef<"group_members", 'Boolean'>
    readonly left_at: FieldRef<"group_members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * group_members findUnique
   */
  export type group_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * Filter, which group_members to fetch.
     */
    where: group_membersWhereUniqueInput
  }

  /**
   * group_members findUniqueOrThrow
   */
  export type group_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * Filter, which group_members to fetch.
     */
    where: group_membersWhereUniqueInput
  }

  /**
   * group_members findFirst
   */
  export type group_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * Filter, which group_members to fetch.
     */
    where?: group_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_members to fetch.
     */
    orderBy?: group_membersOrderByWithRelationInput | group_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_members.
     */
    cursor?: group_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_members.
     */
    distinct?: Group_membersScalarFieldEnum | Group_membersScalarFieldEnum[]
  }

  /**
   * group_members findFirstOrThrow
   */
  export type group_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * Filter, which group_members to fetch.
     */
    where?: group_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_members to fetch.
     */
    orderBy?: group_membersOrderByWithRelationInput | group_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_members.
     */
    cursor?: group_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_members.
     */
    distinct?: Group_membersScalarFieldEnum | Group_membersScalarFieldEnum[]
  }

  /**
   * group_members findMany
   */
  export type group_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * Filter, which group_members to fetch.
     */
    where?: group_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_members to fetch.
     */
    orderBy?: group_membersOrderByWithRelationInput | group_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing group_members.
     */
    cursor?: group_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_members.
     */
    skip?: number
    distinct?: Group_membersScalarFieldEnum | Group_membersScalarFieldEnum[]
  }

  /**
   * group_members create
   */
  export type group_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a group_members.
     */
    data: XOR<group_membersCreateInput, group_membersUncheckedCreateInput>
  }

  /**
   * group_members createMany
   */
  export type group_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many group_members.
     */
    data: group_membersCreateManyInput | group_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * group_members createManyAndReturn
   */
  export type group_membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * The data used to create many group_members.
     */
    data: group_membersCreateManyInput | group_membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * group_members update
   */
  export type group_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a group_members.
     */
    data: XOR<group_membersUpdateInput, group_membersUncheckedUpdateInput>
    /**
     * Choose, which group_members to update.
     */
    where: group_membersWhereUniqueInput
  }

  /**
   * group_members updateMany
   */
  export type group_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update group_members.
     */
    data: XOR<group_membersUpdateManyMutationInput, group_membersUncheckedUpdateManyInput>
    /**
     * Filter which group_members to update
     */
    where?: group_membersWhereInput
    /**
     * Limit how many group_members to update.
     */
    limit?: number
  }

  /**
   * group_members updateManyAndReturn
   */
  export type group_membersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * The data used to update group_members.
     */
    data: XOR<group_membersUpdateManyMutationInput, group_membersUncheckedUpdateManyInput>
    /**
     * Filter which group_members to update
     */
    where?: group_membersWhereInput
    /**
     * Limit how many group_members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * group_members upsert
   */
  export type group_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the group_members to update in case it exists.
     */
    where: group_membersWhereUniqueInput
    /**
     * In case the group_members found by the `where` argument doesn't exist, create a new group_members with this data.
     */
    create: XOR<group_membersCreateInput, group_membersUncheckedCreateInput>
    /**
     * In case the group_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<group_membersUpdateInput, group_membersUncheckedUpdateInput>
  }

  /**
   * group_members delete
   */
  export type group_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * Filter which group_members to delete.
     */
    where: group_membersWhereUniqueInput
  }

  /**
   * group_members deleteMany
   */
  export type group_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_members to delete
     */
    where?: group_membersWhereInput
    /**
     * Limit how many group_members to delete.
     */
    limit?: number
  }

  /**
   * group_members without action
   */
  export type group_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
  }


  /**
   * Model reports
   */

  export type AggregateReports = {
    _count: ReportsCountAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  export type ReportsMinAggregateOutputType = {
    id: string | null
    report_type: $Enums.ReportType | null
    period_start: Date | null
    period_end: Date | null
    createdAt: Date | null
    group_id: string | null
    user_id: string | null
  }

  export type ReportsMaxAggregateOutputType = {
    id: string | null
    report_type: $Enums.ReportType | null
    period_start: Date | null
    period_end: Date | null
    createdAt: Date | null
    group_id: string | null
    user_id: string | null
  }

  export type ReportsCountAggregateOutputType = {
    id: number
    report_type: number
    period_start: number
    period_end: number
    data: number
    createdAt: number
    group_id: number
    user_id: number
    _all: number
  }


  export type ReportsMinAggregateInputType = {
    id?: true
    report_type?: true
    period_start?: true
    period_end?: true
    createdAt?: true
    group_id?: true
    user_id?: true
  }

  export type ReportsMaxAggregateInputType = {
    id?: true
    report_type?: true
    period_start?: true
    period_end?: true
    createdAt?: true
    group_id?: true
    user_id?: true
  }

  export type ReportsCountAggregateInputType = {
    id?: true
    report_type?: true
    period_start?: true
    period_end?: true
    data?: true
    createdAt?: true
    group_id?: true
    user_id?: true
    _all?: true
  }

  export type ReportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to aggregate.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reports
    **/
    _count?: true | ReportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportsMaxAggregateInputType
  }

  export type GetReportsAggregateType<T extends ReportsAggregateArgs> = {
        [P in keyof T & keyof AggregateReports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReports[P]>
      : GetScalarType<T[P], AggregateReports[P]>
  }




  export type reportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportsWhereInput
    orderBy?: reportsOrderByWithAggregationInput | reportsOrderByWithAggregationInput[]
    by: ReportsScalarFieldEnum[] | ReportsScalarFieldEnum
    having?: reportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportsCountAggregateInputType | true
    _min?: ReportsMinAggregateInputType
    _max?: ReportsMaxAggregateInputType
  }

  export type ReportsGroupByOutputType = {
    id: string
    report_type: $Enums.ReportType
    period_start: Date
    period_end: Date
    data: JsonValue
    createdAt: Date
    group_id: string
    user_id: string
    _count: ReportsCountAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  type GetReportsGroupByPayload<T extends reportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportsGroupByOutputType[P]>
            : GetScalarType<T[P], ReportsGroupByOutputType[P]>
        }
      >
    >


  export type reportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_type?: boolean
    period_start?: boolean
    period_end?: boolean
    data?: boolean
    createdAt?: boolean
    group_id?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reports"]>

  export type reportsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_type?: boolean
    period_start?: boolean
    period_end?: boolean
    data?: boolean
    createdAt?: boolean
    group_id?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reports"]>

  export type reportsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_type?: boolean
    period_start?: boolean
    period_end?: boolean
    data?: boolean
    createdAt?: boolean
    group_id?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reports"]>

  export type reportsSelectScalar = {
    id?: boolean
    report_type?: boolean
    period_start?: boolean
    period_end?: boolean
    data?: boolean
    createdAt?: boolean
    group_id?: boolean
    user_id?: boolean
  }

  export type reportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "report_type" | "period_start" | "period_end" | "data" | "createdAt" | "group_id" | "user_id", ExtArgs["result"]["reports"]>
  export type reportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }
  export type reportsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }
  export type reportsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }

  export type $reportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reports"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      group: Prisma.$groupsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      report_type: $Enums.ReportType
      period_start: Date
      period_end: Date
      data: Prisma.JsonValue
      createdAt: Date
      group_id: string
      user_id: string
    }, ExtArgs["result"]["reports"]>
    composites: {}
  }

  type reportsGetPayload<S extends boolean | null | undefined | reportsDefaultArgs> = $Result.GetResult<Prisma.$reportsPayload, S>

  type reportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportsCountAggregateInputType | true
    }

  export interface reportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reports'], meta: { name: 'reports' } }
    /**
     * Find zero or one Reports that matches the filter.
     * @param {reportsFindUniqueArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportsFindUniqueArgs>(args: SelectSubset<T, reportsFindUniqueArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportsFindUniqueOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportsFindUniqueOrThrowArgs>(args: SelectSubset<T, reportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsFindFirstArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportsFindFirstArgs>(args?: SelectSubset<T, reportsFindFirstArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsFindFirstOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportsFindFirstOrThrowArgs>(args?: SelectSubset<T, reportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.reports.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.reports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportsWithIdOnly = await prisma.reports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reportsFindManyArgs>(args?: SelectSubset<T, reportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reports.
     * @param {reportsCreateArgs} args - Arguments to create a Reports.
     * @example
     * // Create one Reports
     * const Reports = await prisma.reports.create({
     *   data: {
     *     // ... data to create a Reports
     *   }
     * })
     * 
     */
    create<T extends reportsCreateArgs>(args: SelectSubset<T, reportsCreateArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {reportsCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const reports = await prisma.reports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reportsCreateManyArgs>(args?: SelectSubset<T, reportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {reportsCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const reports = await prisma.reports.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportsWithIdOnly = await prisma.reports.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reportsCreateManyAndReturnArgs>(args?: SelectSubset<T, reportsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reports.
     * @param {reportsDeleteArgs} args - Arguments to delete one Reports.
     * @example
     * // Delete one Reports
     * const Reports = await prisma.reports.delete({
     *   where: {
     *     // ... filter to delete one Reports
     *   }
     * })
     * 
     */
    delete<T extends reportsDeleteArgs>(args: SelectSubset<T, reportsDeleteArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reports.
     * @param {reportsUpdateArgs} args - Arguments to update one Reports.
     * @example
     * // Update one Reports
     * const reports = await prisma.reports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reportsUpdateArgs>(args: SelectSubset<T, reportsUpdateArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {reportsDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.reports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reportsDeleteManyArgs>(args?: SelectSubset<T, reportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const reports = await prisma.reports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reportsUpdateManyArgs>(args: SelectSubset<T, reportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {reportsUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const reports = await prisma.reports.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportsWithIdOnly = await prisma.reports.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reportsUpdateManyAndReturnArgs>(args: SelectSubset<T, reportsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reports.
     * @param {reportsUpsertArgs} args - Arguments to update or create a Reports.
     * @example
     * // Update or create a Reports
     * const reports = await prisma.reports.upsert({
     *   create: {
     *     // ... data to create a Reports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reports we want to update
     *   }
     * })
     */
    upsert<T extends reportsUpsertArgs>(args: SelectSubset<T, reportsUpsertArgs<ExtArgs>>): Prisma__reportsClient<$Result.GetResult<Prisma.$reportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.reports.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends reportsCountArgs>(
      args?: Subset<T, reportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportsAggregateArgs>(args: Subset<T, ReportsAggregateArgs>): Prisma.PrismaPromise<GetReportsAggregateType<T>>

    /**
     * Group by Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reportsGroupByArgs['orderBy'] }
        : { orderBy?: reportsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reports model
   */
  readonly fields: reportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupsDefaultArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reports model
   */
  interface reportsFieldRefs {
    readonly id: FieldRef<"reports", 'String'>
    readonly report_type: FieldRef<"reports", 'ReportType'>
    readonly period_start: FieldRef<"reports", 'DateTime'>
    readonly period_end: FieldRef<"reports", 'DateTime'>
    readonly data: FieldRef<"reports", 'Json'>
    readonly createdAt: FieldRef<"reports", 'DateTime'>
    readonly group_id: FieldRef<"reports", 'String'>
    readonly user_id: FieldRef<"reports", 'String'>
  }
    

  // Custom InputTypes
  /**
   * reports findUnique
   */
  export type reportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports findUniqueOrThrow
   */
  export type reportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports findFirst
   */
  export type reportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * reports findFirstOrThrow
   */
  export type reportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * reports findMany
   */
  export type reportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportsOrderByWithRelationInput | reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reports.
     */
    cursor?: reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * reports create
   */
  export type reportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * The data needed to create a reports.
     */
    data: XOR<reportsCreateInput, reportsUncheckedCreateInput>
  }

  /**
   * reports createMany
   */
  export type reportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reports.
     */
    data: reportsCreateManyInput | reportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reports createManyAndReturn
   */
  export type reportsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * The data used to create many reports.
     */
    data: reportsCreateManyInput | reportsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reports update
   */
  export type reportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * The data needed to update a reports.
     */
    data: XOR<reportsUpdateInput, reportsUncheckedUpdateInput>
    /**
     * Choose, which reports to update.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports updateMany
   */
  export type reportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reports.
     */
    data: XOR<reportsUpdateManyMutationInput, reportsUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportsWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
  }

  /**
   * reports updateManyAndReturn
   */
  export type reportsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * The data used to update reports.
     */
    data: XOR<reportsUpdateManyMutationInput, reportsUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportsWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reports upsert
   */
  export type reportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * The filter to search for the reports to update in case it exists.
     */
    where: reportsWhereUniqueInput
    /**
     * In case the reports found by the `where` argument doesn't exist, create a new reports with this data.
     */
    create: XOR<reportsCreateInput, reportsUncheckedCreateInput>
    /**
     * In case the reports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reportsUpdateInput, reportsUncheckedUpdateInput>
  }

  /**
   * reports delete
   */
  export type reportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
    /**
     * Filter which reports to delete.
     */
    where: reportsWhereUniqueInput
  }

  /**
   * reports deleteMany
   */
  export type reportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to delete
     */
    where?: reportsWhereInput
    /**
     * Limit how many reports to delete.
     */
    limit?: number
  }

  /**
   * reports without action
   */
  export type reportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reports
     */
    select?: reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reports
     */
    omit?: reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportsInclude<ExtArgs> | null
  }


  /**
   * Model currencies
   */

  export type AggregateCurrencies = {
    _count: CurrenciesCountAggregateOutputType | null
    _min: CurrenciesMinAggregateOutputType | null
    _max: CurrenciesMaxAggregateOutputType | null
  }

  export type CurrenciesMinAggregateOutputType = {
    code: string | null
    name: string | null
    symbol: string | null
  }

  export type CurrenciesMaxAggregateOutputType = {
    code: string | null
    name: string | null
    symbol: string | null
  }

  export type CurrenciesCountAggregateOutputType = {
    code: number
    name: number
    symbol: number
    _all: number
  }


  export type CurrenciesMinAggregateInputType = {
    code?: true
    name?: true
    symbol?: true
  }

  export type CurrenciesMaxAggregateInputType = {
    code?: true
    name?: true
    symbol?: true
  }

  export type CurrenciesCountAggregateInputType = {
    code?: true
    name?: true
    symbol?: true
    _all?: true
  }

  export type CurrenciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which currencies to aggregate.
     */
    where?: currenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currenciesOrderByWithRelationInput | currenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: currenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned currencies
    **/
    _count?: true | CurrenciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrenciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrenciesMaxAggregateInputType
  }

  export type GetCurrenciesAggregateType<T extends CurrenciesAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrencies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrencies[P]>
      : GetScalarType<T[P], AggregateCurrencies[P]>
  }




  export type currenciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: currenciesWhereInput
    orderBy?: currenciesOrderByWithAggregationInput | currenciesOrderByWithAggregationInput[]
    by: CurrenciesScalarFieldEnum[] | CurrenciesScalarFieldEnum
    having?: currenciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrenciesCountAggregateInputType | true
    _min?: CurrenciesMinAggregateInputType
    _max?: CurrenciesMaxAggregateInputType
  }

  export type CurrenciesGroupByOutputType = {
    code: string
    name: string
    symbol: string
    _count: CurrenciesCountAggregateOutputType | null
    _min: CurrenciesMinAggregateOutputType | null
    _max: CurrenciesMaxAggregateOutputType | null
  }

  type GetCurrenciesGroupByPayload<T extends currenciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrenciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrenciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrenciesGroupByOutputType[P]>
            : GetScalarType<T[P], CurrenciesGroupByOutputType[P]>
        }
      >
    >


  export type currenciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    symbol?: boolean
    fromCurrency?: boolean | currencies$fromCurrencyArgs<ExtArgs>
    toCurrency?: boolean | currencies$toCurrencyArgs<ExtArgs>
    expenses?: boolean | currencies$expensesArgs<ExtArgs>
    balance?: boolean | currencies$balanceArgs<ExtArgs>
    _count?: boolean | CurrenciesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currencies"]>

  export type currenciesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    symbol?: boolean
  }, ExtArgs["result"]["currencies"]>

  export type currenciesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    symbol?: boolean
  }, ExtArgs["result"]["currencies"]>

  export type currenciesSelectScalar = {
    code?: boolean
    name?: boolean
    symbol?: boolean
  }

  export type currenciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "name" | "symbol", ExtArgs["result"]["currencies"]>
  export type currenciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromCurrency?: boolean | currencies$fromCurrencyArgs<ExtArgs>
    toCurrency?: boolean | currencies$toCurrencyArgs<ExtArgs>
    expenses?: boolean | currencies$expensesArgs<ExtArgs>
    balance?: boolean | currencies$balanceArgs<ExtArgs>
    _count?: boolean | CurrenciesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type currenciesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type currenciesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $currenciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "currencies"
    objects: {
      fromCurrency: Prisma.$exchange_ratesPayload<ExtArgs>[]
      toCurrency: Prisma.$exchange_ratesPayload<ExtArgs>[]
      expenses: Prisma.$expensesPayload<ExtArgs>[]
      balance: Prisma.$balancesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string
      symbol: string
    }, ExtArgs["result"]["currencies"]>
    composites: {}
  }

  type currenciesGetPayload<S extends boolean | null | undefined | currenciesDefaultArgs> = $Result.GetResult<Prisma.$currenciesPayload, S>

  type currenciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<currenciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrenciesCountAggregateInputType | true
    }

  export interface currenciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['currencies'], meta: { name: 'currencies' } }
    /**
     * Find zero or one Currencies that matches the filter.
     * @param {currenciesFindUniqueArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends currenciesFindUniqueArgs>(args: SelectSubset<T, currenciesFindUniqueArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Currencies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {currenciesFindUniqueOrThrowArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends currenciesFindUniqueOrThrowArgs>(args: SelectSubset<T, currenciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currenciesFindFirstArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends currenciesFindFirstArgs>(args?: SelectSubset<T, currenciesFindFirstArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currencies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currenciesFindFirstOrThrowArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends currenciesFindFirstOrThrowArgs>(args?: SelectSubset<T, currenciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currenciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currencies.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currencies.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const currenciesWithCodeOnly = await prisma.currencies.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends currenciesFindManyArgs>(args?: SelectSubset<T, currenciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Currencies.
     * @param {currenciesCreateArgs} args - Arguments to create a Currencies.
     * @example
     * // Create one Currencies
     * const Currencies = await prisma.currencies.create({
     *   data: {
     *     // ... data to create a Currencies
     *   }
     * })
     * 
     */
    create<T extends currenciesCreateArgs>(args: SelectSubset<T, currenciesCreateArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Currencies.
     * @param {currenciesCreateManyArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currencies = await prisma.currencies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends currenciesCreateManyArgs>(args?: SelectSubset<T, currenciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Currencies and returns the data saved in the database.
     * @param {currenciesCreateManyAndReturnArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currencies = await prisma.currencies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Currencies and only return the `code`
     * const currenciesWithCodeOnly = await prisma.currencies.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends currenciesCreateManyAndReturnArgs>(args?: SelectSubset<T, currenciesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Currencies.
     * @param {currenciesDeleteArgs} args - Arguments to delete one Currencies.
     * @example
     * // Delete one Currencies
     * const Currencies = await prisma.currencies.delete({
     *   where: {
     *     // ... filter to delete one Currencies
     *   }
     * })
     * 
     */
    delete<T extends currenciesDeleteArgs>(args: SelectSubset<T, currenciesDeleteArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Currencies.
     * @param {currenciesUpdateArgs} args - Arguments to update one Currencies.
     * @example
     * // Update one Currencies
     * const currencies = await prisma.currencies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends currenciesUpdateArgs>(args: SelectSubset<T, currenciesUpdateArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Currencies.
     * @param {currenciesDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currencies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends currenciesDeleteManyArgs>(args?: SelectSubset<T, currenciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currenciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currencies = await prisma.currencies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends currenciesUpdateManyArgs>(args: SelectSubset<T, currenciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies and returns the data updated in the database.
     * @param {currenciesUpdateManyAndReturnArgs} args - Arguments to update many Currencies.
     * @example
     * // Update many Currencies
     * const currencies = await prisma.currencies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Currencies and only return the `code`
     * const currenciesWithCodeOnly = await prisma.currencies.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends currenciesUpdateManyAndReturnArgs>(args: SelectSubset<T, currenciesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Currencies.
     * @param {currenciesUpsertArgs} args - Arguments to update or create a Currencies.
     * @example
     * // Update or create a Currencies
     * const currencies = await prisma.currencies.upsert({
     *   create: {
     *     // ... data to create a Currencies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currencies we want to update
     *   }
     * })
     */
    upsert<T extends currenciesUpsertArgs>(args: SelectSubset<T, currenciesUpsertArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currenciesCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currencies.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends currenciesCountArgs>(
      args?: Subset<T, currenciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrenciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrenciesAggregateArgs>(args: Subset<T, CurrenciesAggregateArgs>): Prisma.PrismaPromise<GetCurrenciesAggregateType<T>>

    /**
     * Group by Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currenciesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends currenciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: currenciesGroupByArgs['orderBy'] }
        : { orderBy?: currenciesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, currenciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrenciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the currencies model
   */
  readonly fields: currenciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for currencies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__currenciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromCurrency<T extends currencies$fromCurrencyArgs<ExtArgs> = {}>(args?: Subset<T, currencies$fromCurrencyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    toCurrency<T extends currencies$toCurrencyArgs<ExtArgs> = {}>(args?: Subset<T, currencies$toCurrencyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends currencies$expensesArgs<ExtArgs> = {}>(args?: Subset<T, currencies$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    balance<T extends currencies$balanceArgs<ExtArgs> = {}>(args?: Subset<T, currencies$balanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the currencies model
   */
  interface currenciesFieldRefs {
    readonly code: FieldRef<"currencies", 'String'>
    readonly name: FieldRef<"currencies", 'String'>
    readonly symbol: FieldRef<"currencies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * currencies findUnique
   */
  export type currenciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * Filter, which currencies to fetch.
     */
    where: currenciesWhereUniqueInput
  }

  /**
   * currencies findUniqueOrThrow
   */
  export type currenciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * Filter, which currencies to fetch.
     */
    where: currenciesWhereUniqueInput
  }

  /**
   * currencies findFirst
   */
  export type currenciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * Filter, which currencies to fetch.
     */
    where?: currenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currenciesOrderByWithRelationInput | currenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for currencies.
     */
    cursor?: currenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of currencies.
     */
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * currencies findFirstOrThrow
   */
  export type currenciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * Filter, which currencies to fetch.
     */
    where?: currenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currenciesOrderByWithRelationInput | currenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for currencies.
     */
    cursor?: currenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of currencies.
     */
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * currencies findMany
   */
  export type currenciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * Filter, which currencies to fetch.
     */
    where?: currenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currenciesOrderByWithRelationInput | currenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing currencies.
     */
    cursor?: currenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * currencies create
   */
  export type currenciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * The data needed to create a currencies.
     */
    data?: XOR<currenciesCreateInput, currenciesUncheckedCreateInput>
  }

  /**
   * currencies createMany
   */
  export type currenciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many currencies.
     */
    data: currenciesCreateManyInput | currenciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * currencies createManyAndReturn
   */
  export type currenciesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * The data used to create many currencies.
     */
    data: currenciesCreateManyInput | currenciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * currencies update
   */
  export type currenciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * The data needed to update a currencies.
     */
    data: XOR<currenciesUpdateInput, currenciesUncheckedUpdateInput>
    /**
     * Choose, which currencies to update.
     */
    where: currenciesWhereUniqueInput
  }

  /**
   * currencies updateMany
   */
  export type currenciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update currencies.
     */
    data: XOR<currenciesUpdateManyMutationInput, currenciesUncheckedUpdateManyInput>
    /**
     * Filter which currencies to update
     */
    where?: currenciesWhereInput
    /**
     * Limit how many currencies to update.
     */
    limit?: number
  }

  /**
   * currencies updateManyAndReturn
   */
  export type currenciesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * The data used to update currencies.
     */
    data: XOR<currenciesUpdateManyMutationInput, currenciesUncheckedUpdateManyInput>
    /**
     * Filter which currencies to update
     */
    where?: currenciesWhereInput
    /**
     * Limit how many currencies to update.
     */
    limit?: number
  }

  /**
   * currencies upsert
   */
  export type currenciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * The filter to search for the currencies to update in case it exists.
     */
    where: currenciesWhereUniqueInput
    /**
     * In case the currencies found by the `where` argument doesn't exist, create a new currencies with this data.
     */
    create: XOR<currenciesCreateInput, currenciesUncheckedCreateInput>
    /**
     * In case the currencies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<currenciesUpdateInput, currenciesUncheckedUpdateInput>
  }

  /**
   * currencies delete
   */
  export type currenciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * Filter which currencies to delete.
     */
    where: currenciesWhereUniqueInput
  }

  /**
   * currencies deleteMany
   */
  export type currenciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which currencies to delete
     */
    where?: currenciesWhereInput
    /**
     * Limit how many currencies to delete.
     */
    limit?: number
  }

  /**
   * currencies.fromCurrency
   */
  export type currencies$fromCurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesInclude<ExtArgs> | null
    where?: exchange_ratesWhereInput
    orderBy?: exchange_ratesOrderByWithRelationInput | exchange_ratesOrderByWithRelationInput[]
    cursor?: exchange_ratesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Exchange_ratesScalarFieldEnum | Exchange_ratesScalarFieldEnum[]
  }

  /**
   * currencies.toCurrency
   */
  export type currencies$toCurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesInclude<ExtArgs> | null
    where?: exchange_ratesWhereInput
    orderBy?: exchange_ratesOrderByWithRelationInput | exchange_ratesOrderByWithRelationInput[]
    cursor?: exchange_ratesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Exchange_ratesScalarFieldEnum | Exchange_ratesScalarFieldEnum[]
  }

  /**
   * currencies.expenses
   */
  export type currencies$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * currencies.balance
   */
  export type currencies$balanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    where?: balancesWhereInput
    orderBy?: balancesOrderByWithRelationInput | balancesOrderByWithRelationInput[]
    cursor?: balancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * currencies without action
   */
  export type currenciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
  }


  /**
   * Model exchange_rates
   */

  export type AggregateExchange_rates = {
    _count: Exchange_ratesCountAggregateOutputType | null
    _min: Exchange_ratesMinAggregateOutputType | null
    _max: Exchange_ratesMaxAggregateOutputType | null
  }

  export type Exchange_ratesMinAggregateOutputType = {
    id: string | null
    from_currency: string | null
    to_currency: string | null
    rate_date: Date | null
  }

  export type Exchange_ratesMaxAggregateOutputType = {
    id: string | null
    from_currency: string | null
    to_currency: string | null
    rate_date: Date | null
  }

  export type Exchange_ratesCountAggregateOutputType = {
    id: number
    from_currency: number
    to_currency: number
    rate_date: number
    _all: number
  }


  export type Exchange_ratesMinAggregateInputType = {
    id?: true
    from_currency?: true
    to_currency?: true
    rate_date?: true
  }

  export type Exchange_ratesMaxAggregateInputType = {
    id?: true
    from_currency?: true
    to_currency?: true
    rate_date?: true
  }

  export type Exchange_ratesCountAggregateInputType = {
    id?: true
    from_currency?: true
    to_currency?: true
    rate_date?: true
    _all?: true
  }

  export type Exchange_ratesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exchange_rates to aggregate.
     */
    where?: exchange_ratesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exchange_rates to fetch.
     */
    orderBy?: exchange_ratesOrderByWithRelationInput | exchange_ratesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exchange_ratesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exchange_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exchange_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exchange_rates
    **/
    _count?: true | Exchange_ratesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Exchange_ratesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Exchange_ratesMaxAggregateInputType
  }

  export type GetExchange_ratesAggregateType<T extends Exchange_ratesAggregateArgs> = {
        [P in keyof T & keyof AggregateExchange_rates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchange_rates[P]>
      : GetScalarType<T[P], AggregateExchange_rates[P]>
  }




  export type exchange_ratesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exchange_ratesWhereInput
    orderBy?: exchange_ratesOrderByWithAggregationInput | exchange_ratesOrderByWithAggregationInput[]
    by: Exchange_ratesScalarFieldEnum[] | Exchange_ratesScalarFieldEnum
    having?: exchange_ratesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Exchange_ratesCountAggregateInputType | true
    _min?: Exchange_ratesMinAggregateInputType
    _max?: Exchange_ratesMaxAggregateInputType
  }

  export type Exchange_ratesGroupByOutputType = {
    id: string
    from_currency: string
    to_currency: string
    rate_date: Date
    _count: Exchange_ratesCountAggregateOutputType | null
    _min: Exchange_ratesMinAggregateOutputType | null
    _max: Exchange_ratesMaxAggregateOutputType | null
  }

  type GetExchange_ratesGroupByPayload<T extends exchange_ratesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Exchange_ratesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Exchange_ratesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Exchange_ratesGroupByOutputType[P]>
            : GetScalarType<T[P], Exchange_ratesGroupByOutputType[P]>
        }
      >
    >


  export type exchange_ratesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_currency?: boolean
    to_currency?: boolean
    rate_date?: boolean
    fromCurrency?: boolean | currenciesDefaultArgs<ExtArgs>
    toCurrency?: boolean | currenciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchange_rates"]>

  export type exchange_ratesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_currency?: boolean
    to_currency?: boolean
    rate_date?: boolean
    fromCurrency?: boolean | currenciesDefaultArgs<ExtArgs>
    toCurrency?: boolean | currenciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchange_rates"]>

  export type exchange_ratesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_currency?: boolean
    to_currency?: boolean
    rate_date?: boolean
    fromCurrency?: boolean | currenciesDefaultArgs<ExtArgs>
    toCurrency?: boolean | currenciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchange_rates"]>

  export type exchange_ratesSelectScalar = {
    id?: boolean
    from_currency?: boolean
    to_currency?: boolean
    rate_date?: boolean
  }

  export type exchange_ratesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "from_currency" | "to_currency" | "rate_date", ExtArgs["result"]["exchange_rates"]>
  export type exchange_ratesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromCurrency?: boolean | currenciesDefaultArgs<ExtArgs>
    toCurrency?: boolean | currenciesDefaultArgs<ExtArgs>
  }
  export type exchange_ratesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromCurrency?: boolean | currenciesDefaultArgs<ExtArgs>
    toCurrency?: boolean | currenciesDefaultArgs<ExtArgs>
  }
  export type exchange_ratesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromCurrency?: boolean | currenciesDefaultArgs<ExtArgs>
    toCurrency?: boolean | currenciesDefaultArgs<ExtArgs>
  }

  export type $exchange_ratesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exchange_rates"
    objects: {
      fromCurrency: Prisma.$currenciesPayload<ExtArgs>
      toCurrency: Prisma.$currenciesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      from_currency: string
      to_currency: string
      rate_date: Date
    }, ExtArgs["result"]["exchange_rates"]>
    composites: {}
  }

  type exchange_ratesGetPayload<S extends boolean | null | undefined | exchange_ratesDefaultArgs> = $Result.GetResult<Prisma.$exchange_ratesPayload, S>

  type exchange_ratesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exchange_ratesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Exchange_ratesCountAggregateInputType | true
    }

  export interface exchange_ratesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exchange_rates'], meta: { name: 'exchange_rates' } }
    /**
     * Find zero or one Exchange_rates that matches the filter.
     * @param {exchange_ratesFindUniqueArgs} args - Arguments to find a Exchange_rates
     * @example
     * // Get one Exchange_rates
     * const exchange_rates = await prisma.exchange_rates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exchange_ratesFindUniqueArgs>(args: SelectSubset<T, exchange_ratesFindUniqueArgs<ExtArgs>>): Prisma__exchange_ratesClient<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exchange_rates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exchange_ratesFindUniqueOrThrowArgs} args - Arguments to find a Exchange_rates
     * @example
     * // Get one Exchange_rates
     * const exchange_rates = await prisma.exchange_rates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exchange_ratesFindUniqueOrThrowArgs>(args: SelectSubset<T, exchange_ratesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exchange_ratesClient<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exchange_rates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchange_ratesFindFirstArgs} args - Arguments to find a Exchange_rates
     * @example
     * // Get one Exchange_rates
     * const exchange_rates = await prisma.exchange_rates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exchange_ratesFindFirstArgs>(args?: SelectSubset<T, exchange_ratesFindFirstArgs<ExtArgs>>): Prisma__exchange_ratesClient<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exchange_rates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchange_ratesFindFirstOrThrowArgs} args - Arguments to find a Exchange_rates
     * @example
     * // Get one Exchange_rates
     * const exchange_rates = await prisma.exchange_rates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exchange_ratesFindFirstOrThrowArgs>(args?: SelectSubset<T, exchange_ratesFindFirstOrThrowArgs<ExtArgs>>): Prisma__exchange_ratesClient<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exchange_rates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchange_ratesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exchange_rates
     * const exchange_rates = await prisma.exchange_rates.findMany()
     * 
     * // Get first 10 Exchange_rates
     * const exchange_rates = await prisma.exchange_rates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exchange_ratesWithIdOnly = await prisma.exchange_rates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends exchange_ratesFindManyArgs>(args?: SelectSubset<T, exchange_ratesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exchange_rates.
     * @param {exchange_ratesCreateArgs} args - Arguments to create a Exchange_rates.
     * @example
     * // Create one Exchange_rates
     * const Exchange_rates = await prisma.exchange_rates.create({
     *   data: {
     *     // ... data to create a Exchange_rates
     *   }
     * })
     * 
     */
    create<T extends exchange_ratesCreateArgs>(args: SelectSubset<T, exchange_ratesCreateArgs<ExtArgs>>): Prisma__exchange_ratesClient<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exchange_rates.
     * @param {exchange_ratesCreateManyArgs} args - Arguments to create many Exchange_rates.
     * @example
     * // Create many Exchange_rates
     * const exchange_rates = await prisma.exchange_rates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exchange_ratesCreateManyArgs>(args?: SelectSubset<T, exchange_ratesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exchange_rates and returns the data saved in the database.
     * @param {exchange_ratesCreateManyAndReturnArgs} args - Arguments to create many Exchange_rates.
     * @example
     * // Create many Exchange_rates
     * const exchange_rates = await prisma.exchange_rates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exchange_rates and only return the `id`
     * const exchange_ratesWithIdOnly = await prisma.exchange_rates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends exchange_ratesCreateManyAndReturnArgs>(args?: SelectSubset<T, exchange_ratesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exchange_rates.
     * @param {exchange_ratesDeleteArgs} args - Arguments to delete one Exchange_rates.
     * @example
     * // Delete one Exchange_rates
     * const Exchange_rates = await prisma.exchange_rates.delete({
     *   where: {
     *     // ... filter to delete one Exchange_rates
     *   }
     * })
     * 
     */
    delete<T extends exchange_ratesDeleteArgs>(args: SelectSubset<T, exchange_ratesDeleteArgs<ExtArgs>>): Prisma__exchange_ratesClient<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exchange_rates.
     * @param {exchange_ratesUpdateArgs} args - Arguments to update one Exchange_rates.
     * @example
     * // Update one Exchange_rates
     * const exchange_rates = await prisma.exchange_rates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exchange_ratesUpdateArgs>(args: SelectSubset<T, exchange_ratesUpdateArgs<ExtArgs>>): Prisma__exchange_ratesClient<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exchange_rates.
     * @param {exchange_ratesDeleteManyArgs} args - Arguments to filter Exchange_rates to delete.
     * @example
     * // Delete a few Exchange_rates
     * const { count } = await prisma.exchange_rates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exchange_ratesDeleteManyArgs>(args?: SelectSubset<T, exchange_ratesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exchange_rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchange_ratesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exchange_rates
     * const exchange_rates = await prisma.exchange_rates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exchange_ratesUpdateManyArgs>(args: SelectSubset<T, exchange_ratesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exchange_rates and returns the data updated in the database.
     * @param {exchange_ratesUpdateManyAndReturnArgs} args - Arguments to update many Exchange_rates.
     * @example
     * // Update many Exchange_rates
     * const exchange_rates = await prisma.exchange_rates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exchange_rates and only return the `id`
     * const exchange_ratesWithIdOnly = await prisma.exchange_rates.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends exchange_ratesUpdateManyAndReturnArgs>(args: SelectSubset<T, exchange_ratesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exchange_rates.
     * @param {exchange_ratesUpsertArgs} args - Arguments to update or create a Exchange_rates.
     * @example
     * // Update or create a Exchange_rates
     * const exchange_rates = await prisma.exchange_rates.upsert({
     *   create: {
     *     // ... data to create a Exchange_rates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exchange_rates we want to update
     *   }
     * })
     */
    upsert<T extends exchange_ratesUpsertArgs>(args: SelectSubset<T, exchange_ratesUpsertArgs<ExtArgs>>): Prisma__exchange_ratesClient<$Result.GetResult<Prisma.$exchange_ratesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exchange_rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchange_ratesCountArgs} args - Arguments to filter Exchange_rates to count.
     * @example
     * // Count the number of Exchange_rates
     * const count = await prisma.exchange_rates.count({
     *   where: {
     *     // ... the filter for the Exchange_rates we want to count
     *   }
     * })
    **/
    count<T extends exchange_ratesCountArgs>(
      args?: Subset<T, exchange_ratesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Exchange_ratesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exchange_rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exchange_ratesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Exchange_ratesAggregateArgs>(args: Subset<T, Exchange_ratesAggregateArgs>): Prisma.PrismaPromise<GetExchange_ratesAggregateType<T>>

    /**
     * Group by Exchange_rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exchange_ratesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exchange_ratesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exchange_ratesGroupByArgs['orderBy'] }
        : { orderBy?: exchange_ratesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exchange_ratesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchange_ratesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exchange_rates model
   */
  readonly fields: exchange_ratesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exchange_rates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exchange_ratesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromCurrency<T extends currenciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, currenciesDefaultArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toCurrency<T extends currenciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, currenciesDefaultArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exchange_rates model
   */
  interface exchange_ratesFieldRefs {
    readonly id: FieldRef<"exchange_rates", 'String'>
    readonly from_currency: FieldRef<"exchange_rates", 'String'>
    readonly to_currency: FieldRef<"exchange_rates", 'String'>
    readonly rate_date: FieldRef<"exchange_rates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * exchange_rates findUnique
   */
  export type exchange_ratesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesInclude<ExtArgs> | null
    /**
     * Filter, which exchange_rates to fetch.
     */
    where: exchange_ratesWhereUniqueInput
  }

  /**
   * exchange_rates findUniqueOrThrow
   */
  export type exchange_ratesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesInclude<ExtArgs> | null
    /**
     * Filter, which exchange_rates to fetch.
     */
    where: exchange_ratesWhereUniqueInput
  }

  /**
   * exchange_rates findFirst
   */
  export type exchange_ratesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesInclude<ExtArgs> | null
    /**
     * Filter, which exchange_rates to fetch.
     */
    where?: exchange_ratesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exchange_rates to fetch.
     */
    orderBy?: exchange_ratesOrderByWithRelationInput | exchange_ratesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exchange_rates.
     */
    cursor?: exchange_ratesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exchange_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exchange_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exchange_rates.
     */
    distinct?: Exchange_ratesScalarFieldEnum | Exchange_ratesScalarFieldEnum[]
  }

  /**
   * exchange_rates findFirstOrThrow
   */
  export type exchange_ratesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesInclude<ExtArgs> | null
    /**
     * Filter, which exchange_rates to fetch.
     */
    where?: exchange_ratesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exchange_rates to fetch.
     */
    orderBy?: exchange_ratesOrderByWithRelationInput | exchange_ratesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exchange_rates.
     */
    cursor?: exchange_ratesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exchange_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exchange_rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exchange_rates.
     */
    distinct?: Exchange_ratesScalarFieldEnum | Exchange_ratesScalarFieldEnum[]
  }

  /**
   * exchange_rates findMany
   */
  export type exchange_ratesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesInclude<ExtArgs> | null
    /**
     * Filter, which exchange_rates to fetch.
     */
    where?: exchange_ratesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exchange_rates to fetch.
     */
    orderBy?: exchange_ratesOrderByWithRelationInput | exchange_ratesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exchange_rates.
     */
    cursor?: exchange_ratesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exchange_rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exchange_rates.
     */
    skip?: number
    distinct?: Exchange_ratesScalarFieldEnum | Exchange_ratesScalarFieldEnum[]
  }

  /**
   * exchange_rates create
   */
  export type exchange_ratesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesInclude<ExtArgs> | null
    /**
     * The data needed to create a exchange_rates.
     */
    data: XOR<exchange_ratesCreateInput, exchange_ratesUncheckedCreateInput>
  }

  /**
   * exchange_rates createMany
   */
  export type exchange_ratesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exchange_rates.
     */
    data: exchange_ratesCreateManyInput | exchange_ratesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exchange_rates createManyAndReturn
   */
  export type exchange_ratesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * The data used to create many exchange_rates.
     */
    data: exchange_ratesCreateManyInput | exchange_ratesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * exchange_rates update
   */
  export type exchange_ratesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesInclude<ExtArgs> | null
    /**
     * The data needed to update a exchange_rates.
     */
    data: XOR<exchange_ratesUpdateInput, exchange_ratesUncheckedUpdateInput>
    /**
     * Choose, which exchange_rates to update.
     */
    where: exchange_ratesWhereUniqueInput
  }

  /**
   * exchange_rates updateMany
   */
  export type exchange_ratesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exchange_rates.
     */
    data: XOR<exchange_ratesUpdateManyMutationInput, exchange_ratesUncheckedUpdateManyInput>
    /**
     * Filter which exchange_rates to update
     */
    where?: exchange_ratesWhereInput
    /**
     * Limit how many exchange_rates to update.
     */
    limit?: number
  }

  /**
   * exchange_rates updateManyAndReturn
   */
  export type exchange_ratesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * The data used to update exchange_rates.
     */
    data: XOR<exchange_ratesUpdateManyMutationInput, exchange_ratesUncheckedUpdateManyInput>
    /**
     * Filter which exchange_rates to update
     */
    where?: exchange_ratesWhereInput
    /**
     * Limit how many exchange_rates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * exchange_rates upsert
   */
  export type exchange_ratesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesInclude<ExtArgs> | null
    /**
     * The filter to search for the exchange_rates to update in case it exists.
     */
    where: exchange_ratesWhereUniqueInput
    /**
     * In case the exchange_rates found by the `where` argument doesn't exist, create a new exchange_rates with this data.
     */
    create: XOR<exchange_ratesCreateInput, exchange_ratesUncheckedCreateInput>
    /**
     * In case the exchange_rates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exchange_ratesUpdateInput, exchange_ratesUncheckedUpdateInput>
  }

  /**
   * exchange_rates delete
   */
  export type exchange_ratesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesInclude<ExtArgs> | null
    /**
     * Filter which exchange_rates to delete.
     */
    where: exchange_ratesWhereUniqueInput
  }

  /**
   * exchange_rates deleteMany
   */
  export type exchange_ratesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exchange_rates to delete
     */
    where?: exchange_ratesWhereInput
    /**
     * Limit how many exchange_rates to delete.
     */
    limit?: number
  }

  /**
   * exchange_rates without action
   */
  export type exchange_ratesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exchange_rates
     */
    select?: exchange_ratesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exchange_rates
     */
    omit?: exchange_ratesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exchange_ratesInclude<ExtArgs> | null
  }


  /**
   * Model settlements
   */

  export type AggregateSettlements = {
    _count: SettlementsCountAggregateOutputType | null
    _avg: SettlementsAvgAggregateOutputType | null
    _sum: SettlementsSumAggregateOutputType | null
    _min: SettlementsMinAggregateOutputType | null
    _max: SettlementsMaxAggregateOutputType | null
  }

  export type SettlementsAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type SettlementsSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type SettlementsMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    status: $Enums.SettlementStatus | null
    method: $Enums.PaymentMethod | null
    settled_at: Date | null
    created_at: Date | null
    currency_code: string | null
    from_user_id: string | null
    to_user_id: string | null
    group_id: string | null
  }

  export type SettlementsMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    status: $Enums.SettlementStatus | null
    method: $Enums.PaymentMethod | null
    settled_at: Date | null
    created_at: Date | null
    currency_code: string | null
    from_user_id: string | null
    to_user_id: string | null
    group_id: string | null
  }

  export type SettlementsCountAggregateOutputType = {
    id: number
    amount: number
    status: number
    method: number
    settled_at: number
    created_at: number
    currency_code: number
    from_user_id: number
    to_user_id: number
    group_id: number
    _all: number
  }


  export type SettlementsAvgAggregateInputType = {
    amount?: true
  }

  export type SettlementsSumAggregateInputType = {
    amount?: true
  }

  export type SettlementsMinAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    method?: true
    settled_at?: true
    created_at?: true
    currency_code?: true
    from_user_id?: true
    to_user_id?: true
    group_id?: true
  }

  export type SettlementsMaxAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    method?: true
    settled_at?: true
    created_at?: true
    currency_code?: true
    from_user_id?: true
    to_user_id?: true
    group_id?: true
  }

  export type SettlementsCountAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    method?: true
    settled_at?: true
    created_at?: true
    currency_code?: true
    from_user_id?: true
    to_user_id?: true
    group_id?: true
    _all?: true
  }

  export type SettlementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settlements to aggregate.
     */
    where?: settlementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settlements to fetch.
     */
    orderBy?: settlementsOrderByWithRelationInput | settlementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settlementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settlements
    **/
    _count?: true | SettlementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettlementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettlementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettlementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettlementsMaxAggregateInputType
  }

  export type GetSettlementsAggregateType<T extends SettlementsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettlements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettlements[P]>
      : GetScalarType<T[P], AggregateSettlements[P]>
  }




  export type settlementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settlementsWhereInput
    orderBy?: settlementsOrderByWithAggregationInput | settlementsOrderByWithAggregationInput[]
    by: SettlementsScalarFieldEnum[] | SettlementsScalarFieldEnum
    having?: settlementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettlementsCountAggregateInputType | true
    _avg?: SettlementsAvgAggregateInputType
    _sum?: SettlementsSumAggregateInputType
    _min?: SettlementsMinAggregateInputType
    _max?: SettlementsMaxAggregateInputType
  }

  export type SettlementsGroupByOutputType = {
    id: string
    amount: Decimal
    status: $Enums.SettlementStatus
    method: $Enums.PaymentMethod
    settled_at: Date
    created_at: Date
    currency_code: string
    from_user_id: string
    to_user_id: string
    group_id: string
    _count: SettlementsCountAggregateOutputType | null
    _avg: SettlementsAvgAggregateOutputType | null
    _sum: SettlementsSumAggregateOutputType | null
    _min: SettlementsMinAggregateOutputType | null
    _max: SettlementsMaxAggregateOutputType | null
  }

  type GetSettlementsGroupByPayload<T extends settlementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettlementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettlementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettlementsGroupByOutputType[P]>
            : GetScalarType<T[P], SettlementsGroupByOutputType[P]>
        }
      >
    >


  export type settlementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    method?: boolean
    settled_at?: boolean
    created_at?: boolean
    currency_code?: boolean
    from_user_id?: boolean
    to_user_id?: boolean
    group_id?: boolean
    fromUser?: boolean | usersDefaultArgs<ExtArgs>
    toUser?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlements"]>

  export type settlementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    method?: boolean
    settled_at?: boolean
    created_at?: boolean
    currency_code?: boolean
    from_user_id?: boolean
    to_user_id?: boolean
    group_id?: boolean
    fromUser?: boolean | usersDefaultArgs<ExtArgs>
    toUser?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlements"]>

  export type settlementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    method?: boolean
    settled_at?: boolean
    created_at?: boolean
    currency_code?: boolean
    from_user_id?: boolean
    to_user_id?: boolean
    group_id?: boolean
    fromUser?: boolean | usersDefaultArgs<ExtArgs>
    toUser?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settlements"]>

  export type settlementsSelectScalar = {
    id?: boolean
    amount?: boolean
    status?: boolean
    method?: boolean
    settled_at?: boolean
    created_at?: boolean
    currency_code?: boolean
    from_user_id?: boolean
    to_user_id?: boolean
    group_id?: boolean
  }

  export type settlementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "status" | "method" | "settled_at" | "created_at" | "currency_code" | "from_user_id" | "to_user_id" | "group_id", ExtArgs["result"]["settlements"]>
  export type settlementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | usersDefaultArgs<ExtArgs>
    toUser?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }
  export type settlementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | usersDefaultArgs<ExtArgs>
    toUser?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }
  export type settlementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | usersDefaultArgs<ExtArgs>
    toUser?: boolean | usersDefaultArgs<ExtArgs>
    group?: boolean | groupsDefaultArgs<ExtArgs>
  }

  export type $settlementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "settlements"
    objects: {
      fromUser: Prisma.$usersPayload<ExtArgs>
      toUser: Prisma.$usersPayload<ExtArgs>
      group: Prisma.$groupsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      status: $Enums.SettlementStatus
      method: $Enums.PaymentMethod
      settled_at: Date
      created_at: Date
      currency_code: string
      from_user_id: string
      to_user_id: string
      group_id: string
    }, ExtArgs["result"]["settlements"]>
    composites: {}
  }

  type settlementsGetPayload<S extends boolean | null | undefined | settlementsDefaultArgs> = $Result.GetResult<Prisma.$settlementsPayload, S>

  type settlementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<settlementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettlementsCountAggregateInputType | true
    }

  export interface settlementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['settlements'], meta: { name: 'settlements' } }
    /**
     * Find zero or one Settlements that matches the filter.
     * @param {settlementsFindUniqueArgs} args - Arguments to find a Settlements
     * @example
     * // Get one Settlements
     * const settlements = await prisma.settlements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settlementsFindUniqueArgs>(args: SelectSubset<T, settlementsFindUniqueArgs<ExtArgs>>): Prisma__settlementsClient<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settlements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {settlementsFindUniqueOrThrowArgs} args - Arguments to find a Settlements
     * @example
     * // Get one Settlements
     * const settlements = await prisma.settlements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settlementsFindUniqueOrThrowArgs>(args: SelectSubset<T, settlementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settlementsClient<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settlements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settlementsFindFirstArgs} args - Arguments to find a Settlements
     * @example
     * // Get one Settlements
     * const settlements = await prisma.settlements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settlementsFindFirstArgs>(args?: SelectSubset<T, settlementsFindFirstArgs<ExtArgs>>): Prisma__settlementsClient<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settlements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settlementsFindFirstOrThrowArgs} args - Arguments to find a Settlements
     * @example
     * // Get one Settlements
     * const settlements = await prisma.settlements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settlementsFindFirstOrThrowArgs>(args?: SelectSubset<T, settlementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__settlementsClient<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settlements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settlementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settlements
     * const settlements = await prisma.settlements.findMany()
     * 
     * // Get first 10 Settlements
     * const settlements = await prisma.settlements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settlementsWithIdOnly = await prisma.settlements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends settlementsFindManyArgs>(args?: SelectSubset<T, settlementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settlements.
     * @param {settlementsCreateArgs} args - Arguments to create a Settlements.
     * @example
     * // Create one Settlements
     * const Settlements = await prisma.settlements.create({
     *   data: {
     *     // ... data to create a Settlements
     *   }
     * })
     * 
     */
    create<T extends settlementsCreateArgs>(args: SelectSubset<T, settlementsCreateArgs<ExtArgs>>): Prisma__settlementsClient<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settlements.
     * @param {settlementsCreateManyArgs} args - Arguments to create many Settlements.
     * @example
     * // Create many Settlements
     * const settlements = await prisma.settlements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settlementsCreateManyArgs>(args?: SelectSubset<T, settlementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settlements and returns the data saved in the database.
     * @param {settlementsCreateManyAndReturnArgs} args - Arguments to create many Settlements.
     * @example
     * // Create many Settlements
     * const settlements = await prisma.settlements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settlements and only return the `id`
     * const settlementsWithIdOnly = await prisma.settlements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends settlementsCreateManyAndReturnArgs>(args?: SelectSubset<T, settlementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settlements.
     * @param {settlementsDeleteArgs} args - Arguments to delete one Settlements.
     * @example
     * // Delete one Settlements
     * const Settlements = await prisma.settlements.delete({
     *   where: {
     *     // ... filter to delete one Settlements
     *   }
     * })
     * 
     */
    delete<T extends settlementsDeleteArgs>(args: SelectSubset<T, settlementsDeleteArgs<ExtArgs>>): Prisma__settlementsClient<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settlements.
     * @param {settlementsUpdateArgs} args - Arguments to update one Settlements.
     * @example
     * // Update one Settlements
     * const settlements = await prisma.settlements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settlementsUpdateArgs>(args: SelectSubset<T, settlementsUpdateArgs<ExtArgs>>): Prisma__settlementsClient<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settlements.
     * @param {settlementsDeleteManyArgs} args - Arguments to filter Settlements to delete.
     * @example
     * // Delete a few Settlements
     * const { count } = await prisma.settlements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settlementsDeleteManyArgs>(args?: SelectSubset<T, settlementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settlementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settlements
     * const settlements = await prisma.settlements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settlementsUpdateManyArgs>(args: SelectSubset<T, settlementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settlements and returns the data updated in the database.
     * @param {settlementsUpdateManyAndReturnArgs} args - Arguments to update many Settlements.
     * @example
     * // Update many Settlements
     * const settlements = await prisma.settlements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settlements and only return the `id`
     * const settlementsWithIdOnly = await prisma.settlements.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends settlementsUpdateManyAndReturnArgs>(args: SelectSubset<T, settlementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settlements.
     * @param {settlementsUpsertArgs} args - Arguments to update or create a Settlements.
     * @example
     * // Update or create a Settlements
     * const settlements = await prisma.settlements.upsert({
     *   create: {
     *     // ... data to create a Settlements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settlements we want to update
     *   }
     * })
     */
    upsert<T extends settlementsUpsertArgs>(args: SelectSubset<T, settlementsUpsertArgs<ExtArgs>>): Prisma__settlementsClient<$Result.GetResult<Prisma.$settlementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settlementsCountArgs} args - Arguments to filter Settlements to count.
     * @example
     * // Count the number of Settlements
     * const count = await prisma.settlements.count({
     *   where: {
     *     // ... the filter for the Settlements we want to count
     *   }
     * })
    **/
    count<T extends settlementsCountArgs>(
      args?: Subset<T, settlementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettlementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettlementsAggregateArgs>(args: Subset<T, SettlementsAggregateArgs>): Prisma.PrismaPromise<GetSettlementsAggregateType<T>>

    /**
     * Group by Settlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settlementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends settlementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settlementsGroupByArgs['orderBy'] }
        : { orderBy?: settlementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, settlementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettlementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the settlements model
   */
  readonly fields: settlementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for settlements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settlementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromUser<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toUser<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupsDefaultArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the settlements model
   */
  interface settlementsFieldRefs {
    readonly id: FieldRef<"settlements", 'String'>
    readonly amount: FieldRef<"settlements", 'Decimal'>
    readonly status: FieldRef<"settlements", 'SettlementStatus'>
    readonly method: FieldRef<"settlements", 'PaymentMethod'>
    readonly settled_at: FieldRef<"settlements", 'DateTime'>
    readonly created_at: FieldRef<"settlements", 'DateTime'>
    readonly currency_code: FieldRef<"settlements", 'String'>
    readonly from_user_id: FieldRef<"settlements", 'String'>
    readonly to_user_id: FieldRef<"settlements", 'String'>
    readonly group_id: FieldRef<"settlements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * settlements findUnique
   */
  export type settlementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
    /**
     * Filter, which settlements to fetch.
     */
    where: settlementsWhereUniqueInput
  }

  /**
   * settlements findUniqueOrThrow
   */
  export type settlementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
    /**
     * Filter, which settlements to fetch.
     */
    where: settlementsWhereUniqueInput
  }

  /**
   * settlements findFirst
   */
  export type settlementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
    /**
     * Filter, which settlements to fetch.
     */
    where?: settlementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settlements to fetch.
     */
    orderBy?: settlementsOrderByWithRelationInput | settlementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settlements.
     */
    cursor?: settlementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settlements.
     */
    distinct?: SettlementsScalarFieldEnum | SettlementsScalarFieldEnum[]
  }

  /**
   * settlements findFirstOrThrow
   */
  export type settlementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
    /**
     * Filter, which settlements to fetch.
     */
    where?: settlementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settlements to fetch.
     */
    orderBy?: settlementsOrderByWithRelationInput | settlementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settlements.
     */
    cursor?: settlementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settlements.
     */
    distinct?: SettlementsScalarFieldEnum | SettlementsScalarFieldEnum[]
  }

  /**
   * settlements findMany
   */
  export type settlementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
    /**
     * Filter, which settlements to fetch.
     */
    where?: settlementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settlements to fetch.
     */
    orderBy?: settlementsOrderByWithRelationInput | settlementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settlements.
     */
    cursor?: settlementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settlements.
     */
    skip?: number
    distinct?: SettlementsScalarFieldEnum | SettlementsScalarFieldEnum[]
  }

  /**
   * settlements create
   */
  export type settlementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
    /**
     * The data needed to create a settlements.
     */
    data: XOR<settlementsCreateInput, settlementsUncheckedCreateInput>
  }

  /**
   * settlements createMany
   */
  export type settlementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settlements.
     */
    data: settlementsCreateManyInput | settlementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settlements createManyAndReturn
   */
  export type settlementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * The data used to create many settlements.
     */
    data: settlementsCreateManyInput | settlementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * settlements update
   */
  export type settlementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
    /**
     * The data needed to update a settlements.
     */
    data: XOR<settlementsUpdateInput, settlementsUncheckedUpdateInput>
    /**
     * Choose, which settlements to update.
     */
    where: settlementsWhereUniqueInput
  }

  /**
   * settlements updateMany
   */
  export type settlementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settlements.
     */
    data: XOR<settlementsUpdateManyMutationInput, settlementsUncheckedUpdateManyInput>
    /**
     * Filter which settlements to update
     */
    where?: settlementsWhereInput
    /**
     * Limit how many settlements to update.
     */
    limit?: number
  }

  /**
   * settlements updateManyAndReturn
   */
  export type settlementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * The data used to update settlements.
     */
    data: XOR<settlementsUpdateManyMutationInput, settlementsUncheckedUpdateManyInput>
    /**
     * Filter which settlements to update
     */
    where?: settlementsWhereInput
    /**
     * Limit how many settlements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * settlements upsert
   */
  export type settlementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
    /**
     * The filter to search for the settlements to update in case it exists.
     */
    where: settlementsWhereUniqueInput
    /**
     * In case the settlements found by the `where` argument doesn't exist, create a new settlements with this data.
     */
    create: XOR<settlementsCreateInput, settlementsUncheckedCreateInput>
    /**
     * In case the settlements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settlementsUpdateInput, settlementsUncheckedUpdateInput>
  }

  /**
   * settlements delete
   */
  export type settlementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
    /**
     * Filter which settlements to delete.
     */
    where: settlementsWhereUniqueInput
  }

  /**
   * settlements deleteMany
   */
  export type settlementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settlements to delete
     */
    where?: settlementsWhereInput
    /**
     * Limit how many settlements to delete.
     */
    limit?: number
  }

  /**
   * settlements without action
   */
  export type settlementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settlements
     */
    select?: settlementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settlements
     */
    omit?: settlementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: settlementsInclude<ExtArgs> | null
  }


  /**
   * Model expenses
   */

  export type AggregateExpenses = {
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  export type ExpensesAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpensesSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpensesMinAggregateOutputType = {
    id: string | null
    group_id: string | null
    created_by: string | null
    paid_by: string | null
    amount: Decimal | null
    description: string | null
    category: string | null
    expense_data: Date | null
    split_type: $Enums.splitType | null
    currency_code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpensesMaxAggregateOutputType = {
    id: string | null
    group_id: string | null
    created_by: string | null
    paid_by: string | null
    amount: Decimal | null
    description: string | null
    category: string | null
    expense_data: Date | null
    split_type: $Enums.splitType | null
    currency_code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpensesCountAggregateOutputType = {
    id: number
    group_id: number
    created_by: number
    paid_by: number
    amount: number
    description: number
    category: number
    expense_data: number
    split_type: number
    currency_code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpensesAvgAggregateInputType = {
    amount?: true
  }

  export type ExpensesSumAggregateInputType = {
    amount?: true
  }

  export type ExpensesMinAggregateInputType = {
    id?: true
    group_id?: true
    created_by?: true
    paid_by?: true
    amount?: true
    description?: true
    category?: true
    expense_data?: true
    split_type?: true
    currency_code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpensesMaxAggregateInputType = {
    id?: true
    group_id?: true
    created_by?: true
    paid_by?: true
    amount?: true
    description?: true
    category?: true
    expense_data?: true
    split_type?: true
    currency_code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpensesCountAggregateInputType = {
    id?: true
    group_id?: true
    created_by?: true
    paid_by?: true
    amount?: true
    description?: true
    category?: true
    expense_data?: true
    split_type?: true
    currency_code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to aggregate.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expenses
    **/
    _count?: true | ExpensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpensesMaxAggregateInputType
  }

  export type GetExpensesAggregateType<T extends ExpensesAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenses[P]>
      : GetScalarType<T[P], AggregateExpenses[P]>
  }




  export type expensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithAggregationInput | expensesOrderByWithAggregationInput[]
    by: ExpensesScalarFieldEnum[] | ExpensesScalarFieldEnum
    having?: expensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpensesCountAggregateInputType | true
    _avg?: ExpensesAvgAggregateInputType
    _sum?: ExpensesSumAggregateInputType
    _min?: ExpensesMinAggregateInputType
    _max?: ExpensesMaxAggregateInputType
  }

  export type ExpensesGroupByOutputType = {
    id: string
    group_id: string
    created_by: string
    paid_by: string
    amount: Decimal
    description: string
    category: string
    expense_data: Date
    split_type: $Enums.splitType
    currency_code: string
    createdAt: Date
    updatedAt: Date
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  type GetExpensesGroupByPayload<T extends expensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
            : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
        }
      >
    >


  export type expensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    created_by?: boolean
    paid_by?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    expense_data?: boolean
    split_type?: boolean
    currency_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | groupsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    paid?: boolean | usersDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
    splitExpense?: boolean | expenses$splitExpenseArgs<ExtArgs>
    _count?: boolean | ExpensesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type expensesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    created_by?: boolean
    paid_by?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    expense_data?: boolean
    split_type?: boolean
    currency_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | groupsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    paid?: boolean | usersDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type expensesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_id?: boolean
    created_by?: boolean
    paid_by?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    expense_data?: boolean
    split_type?: boolean
    currency_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | groupsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    paid?: boolean | usersDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type expensesSelectScalar = {
    id?: boolean
    group_id?: boolean
    created_by?: boolean
    paid_by?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    expense_data?: boolean
    split_type?: boolean
    currency_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type expensesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "group_id" | "created_by" | "paid_by" | "amount" | "description" | "category" | "expense_data" | "split_type" | "currency_code" | "createdAt" | "updatedAt", ExtArgs["result"]["expenses"]>
  export type expensesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | groupsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    paid?: boolean | usersDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
    splitExpense?: boolean | expenses$splitExpenseArgs<ExtArgs>
    _count?: boolean | ExpensesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type expensesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | groupsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    paid?: boolean | usersDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
  }
  export type expensesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | groupsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    paid?: boolean | usersDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
  }

  export type $expensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expenses"
    objects: {
      group: Prisma.$groupsPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
      paid: Prisma.$usersPayload<ExtArgs>
      currency: Prisma.$currenciesPayload<ExtArgs>
      splitExpense: Prisma.$expense_splitsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      group_id: string
      created_by: string
      paid_by: string
      amount: Prisma.Decimal
      description: string
      category: string
      expense_data: Date
      split_type: $Enums.splitType
      currency_code: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expenses"]>
    composites: {}
  }

  type expensesGetPayload<S extends boolean | null | undefined | expensesDefaultArgs> = $Result.GetResult<Prisma.$expensesPayload, S>

  type expensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expensesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpensesCountAggregateInputType | true
    }

  export interface expensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expenses'], meta: { name: 'expenses' } }
    /**
     * Find zero or one Expenses that matches the filter.
     * @param {expensesFindUniqueArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expensesFindUniqueArgs>(args: SelectSubset<T, expensesFindUniqueArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expenses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expensesFindUniqueOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expensesFindUniqueOrThrowArgs>(args: SelectSubset<T, expensesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindFirstArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expensesFindFirstArgs>(args?: SelectSubset<T, expensesFindFirstArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindFirstOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expensesFindFirstOrThrowArgs>(args?: SelectSubset<T, expensesFindFirstOrThrowArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expenses.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expenses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expensesWithIdOnly = await prisma.expenses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expensesFindManyArgs>(args?: SelectSubset<T, expensesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expenses.
     * @param {expensesCreateArgs} args - Arguments to create a Expenses.
     * @example
     * // Create one Expenses
     * const Expenses = await prisma.expenses.create({
     *   data: {
     *     // ... data to create a Expenses
     *   }
     * })
     * 
     */
    create<T extends expensesCreateArgs>(args: SelectSubset<T, expensesCreateArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {expensesCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expensesCreateManyArgs>(args?: SelectSubset<T, expensesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {expensesCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expensesWithIdOnly = await prisma.expenses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends expensesCreateManyAndReturnArgs>(args?: SelectSubset<T, expensesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expenses.
     * @param {expensesDeleteArgs} args - Arguments to delete one Expenses.
     * @example
     * // Delete one Expenses
     * const Expenses = await prisma.expenses.delete({
     *   where: {
     *     // ... filter to delete one Expenses
     *   }
     * })
     * 
     */
    delete<T extends expensesDeleteArgs>(args: SelectSubset<T, expensesDeleteArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expenses.
     * @param {expensesUpdateArgs} args - Arguments to update one Expenses.
     * @example
     * // Update one Expenses
     * const expenses = await prisma.expenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expensesUpdateArgs>(args: SelectSubset<T, expensesUpdateArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {expensesDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expensesDeleteManyArgs>(args?: SelectSubset<T, expensesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expensesUpdateManyArgs>(args: SelectSubset<T, expensesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {expensesUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expensesWithIdOnly = await prisma.expenses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends expensesUpdateManyAndReturnArgs>(args: SelectSubset<T, expensesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expenses.
     * @param {expensesUpsertArgs} args - Arguments to update or create a Expenses.
     * @example
     * // Update or create a Expenses
     * const expenses = await prisma.expenses.upsert({
     *   create: {
     *     // ... data to create a Expenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenses we want to update
     *   }
     * })
     */
    upsert<T extends expensesUpsertArgs>(args: SelectSubset<T, expensesUpsertArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expenses.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends expensesCountArgs>(
      args?: Subset<T, expensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpensesAggregateArgs>(args: Subset<T, ExpensesAggregateArgs>): Prisma.PrismaPromise<GetExpensesAggregateType<T>>

    /**
     * Group by Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends expensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expensesGroupByArgs['orderBy'] }
        : { orderBy?: expensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, expensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expenses model
   */
  readonly fields: expensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupsDefaultArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paid<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currency<T extends currenciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, currenciesDefaultArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    splitExpense<T extends expenses$splitExpenseArgs<ExtArgs> = {}>(args?: Subset<T, expenses$splitExpenseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the expenses model
   */
  interface expensesFieldRefs {
    readonly id: FieldRef<"expenses", 'String'>
    readonly group_id: FieldRef<"expenses", 'String'>
    readonly created_by: FieldRef<"expenses", 'String'>
    readonly paid_by: FieldRef<"expenses", 'String'>
    readonly amount: FieldRef<"expenses", 'Decimal'>
    readonly description: FieldRef<"expenses", 'String'>
    readonly category: FieldRef<"expenses", 'String'>
    readonly expense_data: FieldRef<"expenses", 'DateTime'>
    readonly split_type: FieldRef<"expenses", 'splitType'>
    readonly currency_code: FieldRef<"expenses", 'String'>
    readonly createdAt: FieldRef<"expenses", 'DateTime'>
    readonly updatedAt: FieldRef<"expenses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * expenses findUnique
   */
  export type expensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses findUniqueOrThrow
   */
  export type expensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses findFirst
   */
  export type expensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses findFirstOrThrow
   */
  export type expensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses findMany
   */
  export type expensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses create
   */
  export type expensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The data needed to create a expenses.
     */
    data: XOR<expensesCreateInput, expensesUncheckedCreateInput>
  }

  /**
   * expenses createMany
   */
  export type expensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expenses.
     */
    data: expensesCreateManyInput | expensesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expenses createManyAndReturn
   */
  export type expensesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * The data used to create many expenses.
     */
    data: expensesCreateManyInput | expensesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * expenses update
   */
  export type expensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The data needed to update a expenses.
     */
    data: XOR<expensesUpdateInput, expensesUncheckedUpdateInput>
    /**
     * Choose, which expenses to update.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses updateMany
   */
  export type expensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expenses.
     */
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
  }

  /**
   * expenses updateManyAndReturn
   */
  export type expensesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * The data used to update expenses.
     */
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * expenses upsert
   */
  export type expensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The filter to search for the expenses to update in case it exists.
     */
    where: expensesWhereUniqueInput
    /**
     * In case the expenses found by the `where` argument doesn't exist, create a new expenses with this data.
     */
    create: XOR<expensesCreateInput, expensesUncheckedCreateInput>
    /**
     * In case the expenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expensesUpdateInput, expensesUncheckedUpdateInput>
  }

  /**
   * expenses delete
   */
  export type expensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter which expenses to delete.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses deleteMany
   */
  export type expensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to delete
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to delete.
     */
    limit?: number
  }

  /**
   * expenses.splitExpense
   */
  export type expenses$splitExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
    where?: expense_splitsWhereInput
    orderBy?: expense_splitsOrderByWithRelationInput | expense_splitsOrderByWithRelationInput[]
    cursor?: expense_splitsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Expense_splitsScalarFieldEnum | Expense_splitsScalarFieldEnum[]
  }

  /**
   * expenses without action
   */
  export type expensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
  }


  /**
   * Model balances
   */

  export type AggregateBalances = {
    _count: BalancesCountAggregateOutputType | null
    _avg: BalancesAvgAggregateOutputType | null
    _sum: BalancesSumAggregateOutputType | null
    _min: BalancesMinAggregateOutputType | null
    _max: BalancesMaxAggregateOutputType | null
  }

  export type BalancesAvgAggregateOutputType = {
    balance: Decimal | null
  }

  export type BalancesSumAggregateOutputType = {
    balance: Decimal | null
  }

  export type BalancesMinAggregateOutputType = {
    id: string | null
    balance: Decimal | null
    last_update: Date | null
    group_id: string | null
    user_id: string | null
    currency_code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BalancesMaxAggregateOutputType = {
    id: string | null
    balance: Decimal | null
    last_update: Date | null
    group_id: string | null
    user_id: string | null
    currency_code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BalancesCountAggregateOutputType = {
    id: number
    balance: number
    last_update: number
    group_id: number
    user_id: number
    currency_code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BalancesAvgAggregateInputType = {
    balance?: true
  }

  export type BalancesSumAggregateInputType = {
    balance?: true
  }

  export type BalancesMinAggregateInputType = {
    id?: true
    balance?: true
    last_update?: true
    group_id?: true
    user_id?: true
    currency_code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BalancesMaxAggregateInputType = {
    id?: true
    balance?: true
    last_update?: true
    group_id?: true
    user_id?: true
    currency_code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BalancesCountAggregateInputType = {
    id?: true
    balance?: true
    last_update?: true
    group_id?: true
    user_id?: true
    currency_code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BalancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which balances to aggregate.
     */
    where?: balancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balancesOrderByWithRelationInput | balancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: balancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned balances
    **/
    _count?: true | BalancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalancesMaxAggregateInputType
  }

  export type GetBalancesAggregateType<T extends BalancesAggregateArgs> = {
        [P in keyof T & keyof AggregateBalances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalances[P]>
      : GetScalarType<T[P], AggregateBalances[P]>
  }




  export type balancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: balancesWhereInput
    orderBy?: balancesOrderByWithAggregationInput | balancesOrderByWithAggregationInput[]
    by: BalancesScalarFieldEnum[] | BalancesScalarFieldEnum
    having?: balancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalancesCountAggregateInputType | true
    _avg?: BalancesAvgAggregateInputType
    _sum?: BalancesSumAggregateInputType
    _min?: BalancesMinAggregateInputType
    _max?: BalancesMaxAggregateInputType
  }

  export type BalancesGroupByOutputType = {
    id: string
    balance: Decimal
    last_update: Date
    group_id: string
    user_id: string
    currency_code: string
    createdAt: Date
    updatedAt: Date
    _count: BalancesCountAggregateOutputType | null
    _avg: BalancesAvgAggregateOutputType | null
    _sum: BalancesSumAggregateOutputType | null
    _min: BalancesMinAggregateOutputType | null
    _max: BalancesMaxAggregateOutputType | null
  }

  type GetBalancesGroupByPayload<T extends balancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalancesGroupByOutputType[P]>
            : GetScalarType<T[P], BalancesGroupByOutputType[P]>
        }
      >
    >


  export type balancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    last_update?: boolean
    group_id?: boolean
    user_id?: boolean
    currency_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupBalances?: boolean | groupsDefaultArgs<ExtArgs>
    userBalances?: boolean | usersDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balances"]>

  export type balancesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    last_update?: boolean
    group_id?: boolean
    user_id?: boolean
    currency_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupBalances?: boolean | groupsDefaultArgs<ExtArgs>
    userBalances?: boolean | usersDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balances"]>

  export type balancesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    last_update?: boolean
    group_id?: boolean
    user_id?: boolean
    currency_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupBalances?: boolean | groupsDefaultArgs<ExtArgs>
    userBalances?: boolean | usersDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balances"]>

  export type balancesSelectScalar = {
    id?: boolean
    balance?: boolean
    last_update?: boolean
    group_id?: boolean
    user_id?: boolean
    currency_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type balancesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "balance" | "last_update" | "group_id" | "user_id" | "currency_code" | "createdAt" | "updatedAt", ExtArgs["result"]["balances"]>
  export type balancesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupBalances?: boolean | groupsDefaultArgs<ExtArgs>
    userBalances?: boolean | usersDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
  }
  export type balancesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupBalances?: boolean | groupsDefaultArgs<ExtArgs>
    userBalances?: boolean | usersDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
  }
  export type balancesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupBalances?: boolean | groupsDefaultArgs<ExtArgs>
    userBalances?: boolean | usersDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
  }

  export type $balancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "balances"
    objects: {
      groupBalances: Prisma.$groupsPayload<ExtArgs>
      userBalances: Prisma.$usersPayload<ExtArgs>
      currency: Prisma.$currenciesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      balance: Prisma.Decimal
      last_update: Date
      group_id: string
      user_id: string
      currency_code: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["balances"]>
    composites: {}
  }

  type balancesGetPayload<S extends boolean | null | undefined | balancesDefaultArgs> = $Result.GetResult<Prisma.$balancesPayload, S>

  type balancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<balancesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalancesCountAggregateInputType | true
    }

  export interface balancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['balances'], meta: { name: 'balances' } }
    /**
     * Find zero or one Balances that matches the filter.
     * @param {balancesFindUniqueArgs} args - Arguments to find a Balances
     * @example
     * // Get one Balances
     * const balances = await prisma.balances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends balancesFindUniqueArgs>(args: SelectSubset<T, balancesFindUniqueArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Balances that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {balancesFindUniqueOrThrowArgs} args - Arguments to find a Balances
     * @example
     * // Get one Balances
     * const balances = await prisma.balances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends balancesFindUniqueOrThrowArgs>(args: SelectSubset<T, balancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balancesFindFirstArgs} args - Arguments to find a Balances
     * @example
     * // Get one Balances
     * const balances = await prisma.balances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends balancesFindFirstArgs>(args?: SelectSubset<T, balancesFindFirstArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balancesFindFirstOrThrowArgs} args - Arguments to find a Balances
     * @example
     * // Get one Balances
     * const balances = await prisma.balances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends balancesFindFirstOrThrowArgs>(args?: SelectSubset<T, balancesFindFirstOrThrowArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balancesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balances.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balances.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balancesWithIdOnly = await prisma.balances.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends balancesFindManyArgs>(args?: SelectSubset<T, balancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Balances.
     * @param {balancesCreateArgs} args - Arguments to create a Balances.
     * @example
     * // Create one Balances
     * const Balances = await prisma.balances.create({
     *   data: {
     *     // ... data to create a Balances
     *   }
     * })
     * 
     */
    create<T extends balancesCreateArgs>(args: SelectSubset<T, balancesCreateArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Balances.
     * @param {balancesCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balances = await prisma.balances.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends balancesCreateManyArgs>(args?: SelectSubset<T, balancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {balancesCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balances = await prisma.balances.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `id`
     * const balancesWithIdOnly = await prisma.balances.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends balancesCreateManyAndReturnArgs>(args?: SelectSubset<T, balancesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Balances.
     * @param {balancesDeleteArgs} args - Arguments to delete one Balances.
     * @example
     * // Delete one Balances
     * const Balances = await prisma.balances.delete({
     *   where: {
     *     // ... filter to delete one Balances
     *   }
     * })
     * 
     */
    delete<T extends balancesDeleteArgs>(args: SelectSubset<T, balancesDeleteArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Balances.
     * @param {balancesUpdateArgs} args - Arguments to update one Balances.
     * @example
     * // Update one Balances
     * const balances = await prisma.balances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends balancesUpdateArgs>(args: SelectSubset<T, balancesUpdateArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Balances.
     * @param {balancesDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends balancesDeleteManyArgs>(args?: SelectSubset<T, balancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balances = await prisma.balances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends balancesUpdateManyArgs>(args: SelectSubset<T, balancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances and returns the data updated in the database.
     * @param {balancesUpdateManyAndReturnArgs} args - Arguments to update many Balances.
     * @example
     * // Update many Balances
     * const balances = await prisma.balances.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Balances and only return the `id`
     * const balancesWithIdOnly = await prisma.balances.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends balancesUpdateManyAndReturnArgs>(args: SelectSubset<T, balancesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Balances.
     * @param {balancesUpsertArgs} args - Arguments to update or create a Balances.
     * @example
     * // Update or create a Balances
     * const balances = await prisma.balances.upsert({
     *   create: {
     *     // ... data to create a Balances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balances we want to update
     *   }
     * })
     */
    upsert<T extends balancesUpsertArgs>(args: SelectSubset<T, balancesUpsertArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balancesCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balances.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends balancesCountArgs>(
      args?: Subset<T, balancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalancesAggregateArgs>(args: Subset<T, BalancesAggregateArgs>): Prisma.PrismaPromise<GetBalancesAggregateType<T>>

    /**
     * Group by Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balancesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends balancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: balancesGroupByArgs['orderBy'] }
        : { orderBy?: balancesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, balancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the balances model
   */
  readonly fields: balancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for balances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__balancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupBalances<T extends groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupsDefaultArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userBalances<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currency<T extends currenciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, currenciesDefaultArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the balances model
   */
  interface balancesFieldRefs {
    readonly id: FieldRef<"balances", 'String'>
    readonly balance: FieldRef<"balances", 'Decimal'>
    readonly last_update: FieldRef<"balances", 'DateTime'>
    readonly group_id: FieldRef<"balances", 'String'>
    readonly user_id: FieldRef<"balances", 'String'>
    readonly currency_code: FieldRef<"balances", 'String'>
    readonly createdAt: FieldRef<"balances", 'DateTime'>
    readonly updatedAt: FieldRef<"balances", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * balances findUnique
   */
  export type balancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where: balancesWhereUniqueInput
  }

  /**
   * balances findUniqueOrThrow
   */
  export type balancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where: balancesWhereUniqueInput
  }

  /**
   * balances findFirst
   */
  export type balancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where?: balancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balancesOrderByWithRelationInput | balancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for balances.
     */
    cursor?: balancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of balances.
     */
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * balances findFirstOrThrow
   */
  export type balancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where?: balancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balancesOrderByWithRelationInput | balancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for balances.
     */
    cursor?: balancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of balances.
     */
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * balances findMany
   */
  export type balancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where?: balancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balancesOrderByWithRelationInput | balancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing balances.
     */
    cursor?: balancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * balances create
   */
  export type balancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * The data needed to create a balances.
     */
    data: XOR<balancesCreateInput, balancesUncheckedCreateInput>
  }

  /**
   * balances createMany
   */
  export type balancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many balances.
     */
    data: balancesCreateManyInput | balancesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * balances createManyAndReturn
   */
  export type balancesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * The data used to create many balances.
     */
    data: balancesCreateManyInput | balancesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * balances update
   */
  export type balancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * The data needed to update a balances.
     */
    data: XOR<balancesUpdateInput, balancesUncheckedUpdateInput>
    /**
     * Choose, which balances to update.
     */
    where: balancesWhereUniqueInput
  }

  /**
   * balances updateMany
   */
  export type balancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update balances.
     */
    data: XOR<balancesUpdateManyMutationInput, balancesUncheckedUpdateManyInput>
    /**
     * Filter which balances to update
     */
    where?: balancesWhereInput
    /**
     * Limit how many balances to update.
     */
    limit?: number
  }

  /**
   * balances updateManyAndReturn
   */
  export type balancesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * The data used to update balances.
     */
    data: XOR<balancesUpdateManyMutationInput, balancesUncheckedUpdateManyInput>
    /**
     * Filter which balances to update
     */
    where?: balancesWhereInput
    /**
     * Limit how many balances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * balances upsert
   */
  export type balancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * The filter to search for the balances to update in case it exists.
     */
    where: balancesWhereUniqueInput
    /**
     * In case the balances found by the `where` argument doesn't exist, create a new balances with this data.
     */
    create: XOR<balancesCreateInput, balancesUncheckedCreateInput>
    /**
     * In case the balances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<balancesUpdateInput, balancesUncheckedUpdateInput>
  }

  /**
   * balances delete
   */
  export type balancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * Filter which balances to delete.
     */
    where: balancesWhereUniqueInput
  }

  /**
   * balances deleteMany
   */
  export type balancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which balances to delete
     */
    where?: balancesWhereInput
    /**
     * Limit how many balances to delete.
     */
    limit?: number
  }

  /**
   * balances without action
   */
  export type balancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balances
     */
    omit?: balancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
  }


  /**
   * Model expense_splits
   */

  export type AggregateExpense_splits = {
    _count: Expense_splitsCountAggregateOutputType | null
    _avg: Expense_splitsAvgAggregateOutputType | null
    _sum: Expense_splitsSumAggregateOutputType | null
    _min: Expense_splitsMinAggregateOutputType | null
    _max: Expense_splitsMaxAggregateOutputType | null
  }

  export type Expense_splitsAvgAggregateOutputType = {
    amount: Decimal | null
    percentage: Decimal | null
    exact_amount: Decimal | null
  }

  export type Expense_splitsSumAggregateOutputType = {
    amount: Decimal | null
    percentage: Decimal | null
    exact_amount: Decimal | null
  }

  export type Expense_splitsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    own_by: string | null
    amount: Decimal | null
    percentage: Decimal | null
    expense_id: string | null
    exact_amount: Decimal | null
  }

  export type Expense_splitsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    own_by: string | null
    amount: Decimal | null
    percentage: Decimal | null
    expense_id: string | null
    exact_amount: Decimal | null
  }

  export type Expense_splitsCountAggregateOutputType = {
    id: number
    user_id: number
    own_by: number
    amount: number
    percentage: number
    expense_id: number
    exact_amount: number
    _all: number
  }


  export type Expense_splitsAvgAggregateInputType = {
    amount?: true
    percentage?: true
    exact_amount?: true
  }

  export type Expense_splitsSumAggregateInputType = {
    amount?: true
    percentage?: true
    exact_amount?: true
  }

  export type Expense_splitsMinAggregateInputType = {
    id?: true
    user_id?: true
    own_by?: true
    amount?: true
    percentage?: true
    expense_id?: true
    exact_amount?: true
  }

  export type Expense_splitsMaxAggregateInputType = {
    id?: true
    user_id?: true
    own_by?: true
    amount?: true
    percentage?: true
    expense_id?: true
    exact_amount?: true
  }

  export type Expense_splitsCountAggregateInputType = {
    id?: true
    user_id?: true
    own_by?: true
    amount?: true
    percentage?: true
    expense_id?: true
    exact_amount?: true
    _all?: true
  }

  export type Expense_splitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expense_splits to aggregate.
     */
    where?: expense_splitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expense_splits to fetch.
     */
    orderBy?: expense_splitsOrderByWithRelationInput | expense_splitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expense_splitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expense_splits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expense_splits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expense_splits
    **/
    _count?: true | Expense_splitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Expense_splitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Expense_splitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Expense_splitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Expense_splitsMaxAggregateInputType
  }

  export type GetExpense_splitsAggregateType<T extends Expense_splitsAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense_splits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense_splits[P]>
      : GetScalarType<T[P], AggregateExpense_splits[P]>
  }




  export type expense_splitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expense_splitsWhereInput
    orderBy?: expense_splitsOrderByWithAggregationInput | expense_splitsOrderByWithAggregationInput[]
    by: Expense_splitsScalarFieldEnum[] | Expense_splitsScalarFieldEnum
    having?: expense_splitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Expense_splitsCountAggregateInputType | true
    _avg?: Expense_splitsAvgAggregateInputType
    _sum?: Expense_splitsSumAggregateInputType
    _min?: Expense_splitsMinAggregateInputType
    _max?: Expense_splitsMaxAggregateInputType
  }

  export type Expense_splitsGroupByOutputType = {
    id: string
    user_id: string
    own_by: string
    amount: Decimal
    percentage: Decimal
    expense_id: string
    exact_amount: Decimal
    _count: Expense_splitsCountAggregateOutputType | null
    _avg: Expense_splitsAvgAggregateOutputType | null
    _sum: Expense_splitsSumAggregateOutputType | null
    _min: Expense_splitsMinAggregateOutputType | null
    _max: Expense_splitsMaxAggregateOutputType | null
  }

  type GetExpense_splitsGroupByPayload<T extends expense_splitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Expense_splitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Expense_splitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Expense_splitsGroupByOutputType[P]>
            : GetScalarType<T[P], Expense_splitsGroupByOutputType[P]>
        }
      >
    >


  export type expense_splitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    own_by?: boolean
    amount?: boolean
    percentage?: boolean
    expense_id?: boolean
    exact_amount?: boolean
    splitUserId?: boolean | usersDefaultArgs<ExtArgs>
    splitOwner?: boolean | usersDefaultArgs<ExtArgs>
    expenseId?: boolean | expensesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense_splits"]>

  export type expense_splitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    own_by?: boolean
    amount?: boolean
    percentage?: boolean
    expense_id?: boolean
    exact_amount?: boolean
    splitUserId?: boolean | usersDefaultArgs<ExtArgs>
    splitOwner?: boolean | usersDefaultArgs<ExtArgs>
    expenseId?: boolean | expensesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense_splits"]>

  export type expense_splitsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    own_by?: boolean
    amount?: boolean
    percentage?: boolean
    expense_id?: boolean
    exact_amount?: boolean
    splitUserId?: boolean | usersDefaultArgs<ExtArgs>
    splitOwner?: boolean | usersDefaultArgs<ExtArgs>
    expenseId?: boolean | expensesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense_splits"]>

  export type expense_splitsSelectScalar = {
    id?: boolean
    user_id?: boolean
    own_by?: boolean
    amount?: boolean
    percentage?: boolean
    expense_id?: boolean
    exact_amount?: boolean
  }

  export type expense_splitsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "own_by" | "amount" | "percentage" | "expense_id" | "exact_amount", ExtArgs["result"]["expense_splits"]>
  export type expense_splitsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    splitUserId?: boolean | usersDefaultArgs<ExtArgs>
    splitOwner?: boolean | usersDefaultArgs<ExtArgs>
    expenseId?: boolean | expensesDefaultArgs<ExtArgs>
  }
  export type expense_splitsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    splitUserId?: boolean | usersDefaultArgs<ExtArgs>
    splitOwner?: boolean | usersDefaultArgs<ExtArgs>
    expenseId?: boolean | expensesDefaultArgs<ExtArgs>
  }
  export type expense_splitsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    splitUserId?: boolean | usersDefaultArgs<ExtArgs>
    splitOwner?: boolean | usersDefaultArgs<ExtArgs>
    expenseId?: boolean | expensesDefaultArgs<ExtArgs>
  }

  export type $expense_splitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expense_splits"
    objects: {
      splitUserId: Prisma.$usersPayload<ExtArgs>
      splitOwner: Prisma.$usersPayload<ExtArgs>
      expenseId: Prisma.$expensesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      own_by: string
      amount: Prisma.Decimal
      percentage: Prisma.Decimal
      expense_id: string
      exact_amount: Prisma.Decimal
    }, ExtArgs["result"]["expense_splits"]>
    composites: {}
  }

  type expense_splitsGetPayload<S extends boolean | null | undefined | expense_splitsDefaultArgs> = $Result.GetResult<Prisma.$expense_splitsPayload, S>

  type expense_splitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expense_splitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Expense_splitsCountAggregateInputType | true
    }

  export interface expense_splitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expense_splits'], meta: { name: 'expense_splits' } }
    /**
     * Find zero or one Expense_splits that matches the filter.
     * @param {expense_splitsFindUniqueArgs} args - Arguments to find a Expense_splits
     * @example
     * // Get one Expense_splits
     * const expense_splits = await prisma.expense_splits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expense_splitsFindUniqueArgs>(args: SelectSubset<T, expense_splitsFindUniqueArgs<ExtArgs>>): Prisma__expense_splitsClient<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense_splits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expense_splitsFindUniqueOrThrowArgs} args - Arguments to find a Expense_splits
     * @example
     * // Get one Expense_splits
     * const expense_splits = await prisma.expense_splits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expense_splitsFindUniqueOrThrowArgs>(args: SelectSubset<T, expense_splitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expense_splitsClient<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense_splits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_splitsFindFirstArgs} args - Arguments to find a Expense_splits
     * @example
     * // Get one Expense_splits
     * const expense_splits = await prisma.expense_splits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expense_splitsFindFirstArgs>(args?: SelectSubset<T, expense_splitsFindFirstArgs<ExtArgs>>): Prisma__expense_splitsClient<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense_splits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_splitsFindFirstOrThrowArgs} args - Arguments to find a Expense_splits
     * @example
     * // Get one Expense_splits
     * const expense_splits = await prisma.expense_splits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expense_splitsFindFirstOrThrowArgs>(args?: SelectSubset<T, expense_splitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__expense_splitsClient<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expense_splits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_splitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expense_splits
     * const expense_splits = await prisma.expense_splits.findMany()
     * 
     * // Get first 10 Expense_splits
     * const expense_splits = await prisma.expense_splits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expense_splitsWithIdOnly = await prisma.expense_splits.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expense_splitsFindManyArgs>(args?: SelectSubset<T, expense_splitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense_splits.
     * @param {expense_splitsCreateArgs} args - Arguments to create a Expense_splits.
     * @example
     * // Create one Expense_splits
     * const Expense_splits = await prisma.expense_splits.create({
     *   data: {
     *     // ... data to create a Expense_splits
     *   }
     * })
     * 
     */
    create<T extends expense_splitsCreateArgs>(args: SelectSubset<T, expense_splitsCreateArgs<ExtArgs>>): Prisma__expense_splitsClient<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expense_splits.
     * @param {expense_splitsCreateManyArgs} args - Arguments to create many Expense_splits.
     * @example
     * // Create many Expense_splits
     * const expense_splits = await prisma.expense_splits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expense_splitsCreateManyArgs>(args?: SelectSubset<T, expense_splitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expense_splits and returns the data saved in the database.
     * @param {expense_splitsCreateManyAndReturnArgs} args - Arguments to create many Expense_splits.
     * @example
     * // Create many Expense_splits
     * const expense_splits = await prisma.expense_splits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expense_splits and only return the `id`
     * const expense_splitsWithIdOnly = await prisma.expense_splits.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends expense_splitsCreateManyAndReturnArgs>(args?: SelectSubset<T, expense_splitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense_splits.
     * @param {expense_splitsDeleteArgs} args - Arguments to delete one Expense_splits.
     * @example
     * // Delete one Expense_splits
     * const Expense_splits = await prisma.expense_splits.delete({
     *   where: {
     *     // ... filter to delete one Expense_splits
     *   }
     * })
     * 
     */
    delete<T extends expense_splitsDeleteArgs>(args: SelectSubset<T, expense_splitsDeleteArgs<ExtArgs>>): Prisma__expense_splitsClient<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense_splits.
     * @param {expense_splitsUpdateArgs} args - Arguments to update one Expense_splits.
     * @example
     * // Update one Expense_splits
     * const expense_splits = await prisma.expense_splits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expense_splitsUpdateArgs>(args: SelectSubset<T, expense_splitsUpdateArgs<ExtArgs>>): Prisma__expense_splitsClient<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expense_splits.
     * @param {expense_splitsDeleteManyArgs} args - Arguments to filter Expense_splits to delete.
     * @example
     * // Delete a few Expense_splits
     * const { count } = await prisma.expense_splits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expense_splitsDeleteManyArgs>(args?: SelectSubset<T, expense_splitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expense_splits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_splitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expense_splits
     * const expense_splits = await prisma.expense_splits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expense_splitsUpdateManyArgs>(args: SelectSubset<T, expense_splitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expense_splits and returns the data updated in the database.
     * @param {expense_splitsUpdateManyAndReturnArgs} args - Arguments to update many Expense_splits.
     * @example
     * // Update many Expense_splits
     * const expense_splits = await prisma.expense_splits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expense_splits and only return the `id`
     * const expense_splitsWithIdOnly = await prisma.expense_splits.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends expense_splitsUpdateManyAndReturnArgs>(args: SelectSubset<T, expense_splitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense_splits.
     * @param {expense_splitsUpsertArgs} args - Arguments to update or create a Expense_splits.
     * @example
     * // Update or create a Expense_splits
     * const expense_splits = await prisma.expense_splits.upsert({
     *   create: {
     *     // ... data to create a Expense_splits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense_splits we want to update
     *   }
     * })
     */
    upsert<T extends expense_splitsUpsertArgs>(args: SelectSubset<T, expense_splitsUpsertArgs<ExtArgs>>): Prisma__expense_splitsClient<$Result.GetResult<Prisma.$expense_splitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expense_splits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_splitsCountArgs} args - Arguments to filter Expense_splits to count.
     * @example
     * // Count the number of Expense_splits
     * const count = await prisma.expense_splits.count({
     *   where: {
     *     // ... the filter for the Expense_splits we want to count
     *   }
     * })
    **/
    count<T extends expense_splitsCountArgs>(
      args?: Subset<T, expense_splitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Expense_splitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense_splits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Expense_splitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Expense_splitsAggregateArgs>(args: Subset<T, Expense_splitsAggregateArgs>): Prisma.PrismaPromise<GetExpense_splitsAggregateType<T>>

    /**
     * Group by Expense_splits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expense_splitsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends expense_splitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expense_splitsGroupByArgs['orderBy'] }
        : { orderBy?: expense_splitsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, expense_splitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpense_splitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expense_splits model
   */
  readonly fields: expense_splitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expense_splits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expense_splitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    splitUserId<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    splitOwner<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expenseId<T extends expensesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, expensesDefaultArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the expense_splits model
   */
  interface expense_splitsFieldRefs {
    readonly id: FieldRef<"expense_splits", 'String'>
    readonly user_id: FieldRef<"expense_splits", 'String'>
    readonly own_by: FieldRef<"expense_splits", 'String'>
    readonly amount: FieldRef<"expense_splits", 'Decimal'>
    readonly percentage: FieldRef<"expense_splits", 'Decimal'>
    readonly expense_id: FieldRef<"expense_splits", 'String'>
    readonly exact_amount: FieldRef<"expense_splits", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * expense_splits findUnique
   */
  export type expense_splitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
    /**
     * Filter, which expense_splits to fetch.
     */
    where: expense_splitsWhereUniqueInput
  }

  /**
   * expense_splits findUniqueOrThrow
   */
  export type expense_splitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
    /**
     * Filter, which expense_splits to fetch.
     */
    where: expense_splitsWhereUniqueInput
  }

  /**
   * expense_splits findFirst
   */
  export type expense_splitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
    /**
     * Filter, which expense_splits to fetch.
     */
    where?: expense_splitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expense_splits to fetch.
     */
    orderBy?: expense_splitsOrderByWithRelationInput | expense_splitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expense_splits.
     */
    cursor?: expense_splitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expense_splits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expense_splits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expense_splits.
     */
    distinct?: Expense_splitsScalarFieldEnum | Expense_splitsScalarFieldEnum[]
  }

  /**
   * expense_splits findFirstOrThrow
   */
  export type expense_splitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
    /**
     * Filter, which expense_splits to fetch.
     */
    where?: expense_splitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expense_splits to fetch.
     */
    orderBy?: expense_splitsOrderByWithRelationInput | expense_splitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expense_splits.
     */
    cursor?: expense_splitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expense_splits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expense_splits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expense_splits.
     */
    distinct?: Expense_splitsScalarFieldEnum | Expense_splitsScalarFieldEnum[]
  }

  /**
   * expense_splits findMany
   */
  export type expense_splitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
    /**
     * Filter, which expense_splits to fetch.
     */
    where?: expense_splitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expense_splits to fetch.
     */
    orderBy?: expense_splitsOrderByWithRelationInput | expense_splitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expense_splits.
     */
    cursor?: expense_splitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expense_splits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expense_splits.
     */
    skip?: number
    distinct?: Expense_splitsScalarFieldEnum | Expense_splitsScalarFieldEnum[]
  }

  /**
   * expense_splits create
   */
  export type expense_splitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
    /**
     * The data needed to create a expense_splits.
     */
    data: XOR<expense_splitsCreateInput, expense_splitsUncheckedCreateInput>
  }

  /**
   * expense_splits createMany
   */
  export type expense_splitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expense_splits.
     */
    data: expense_splitsCreateManyInput | expense_splitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expense_splits createManyAndReturn
   */
  export type expense_splitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * The data used to create many expense_splits.
     */
    data: expense_splitsCreateManyInput | expense_splitsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * expense_splits update
   */
  export type expense_splitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
    /**
     * The data needed to update a expense_splits.
     */
    data: XOR<expense_splitsUpdateInput, expense_splitsUncheckedUpdateInput>
    /**
     * Choose, which expense_splits to update.
     */
    where: expense_splitsWhereUniqueInput
  }

  /**
   * expense_splits updateMany
   */
  export type expense_splitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expense_splits.
     */
    data: XOR<expense_splitsUpdateManyMutationInput, expense_splitsUncheckedUpdateManyInput>
    /**
     * Filter which expense_splits to update
     */
    where?: expense_splitsWhereInput
    /**
     * Limit how many expense_splits to update.
     */
    limit?: number
  }

  /**
   * expense_splits updateManyAndReturn
   */
  export type expense_splitsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * The data used to update expense_splits.
     */
    data: XOR<expense_splitsUpdateManyMutationInput, expense_splitsUncheckedUpdateManyInput>
    /**
     * Filter which expense_splits to update
     */
    where?: expense_splitsWhereInput
    /**
     * Limit how many expense_splits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * expense_splits upsert
   */
  export type expense_splitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
    /**
     * The filter to search for the expense_splits to update in case it exists.
     */
    where: expense_splitsWhereUniqueInput
    /**
     * In case the expense_splits found by the `where` argument doesn't exist, create a new expense_splits with this data.
     */
    create: XOR<expense_splitsCreateInput, expense_splitsUncheckedCreateInput>
    /**
     * In case the expense_splits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expense_splitsUpdateInput, expense_splitsUncheckedUpdateInput>
  }

  /**
   * expense_splits delete
   */
  export type expense_splitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
    /**
     * Filter which expense_splits to delete.
     */
    where: expense_splitsWhereUniqueInput
  }

  /**
   * expense_splits deleteMany
   */
  export type expense_splitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expense_splits to delete
     */
    where?: expense_splitsWhereInput
    /**
     * Limit how many expense_splits to delete.
     */
    limit?: number
  }

  /**
   * expense_splits without action
   */
  export type expense_splitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense_splits
     */
    select?: expense_splitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense_splits
     */
    omit?: expense_splitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expense_splitsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    displayName: 'displayName',
    avatarUrl: 'avatarUrl',
    mobileNumber: 'mobileNumber',
    social_login_provider: 'social_login_provider',
    contact_list: 'contact_list',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const GroupsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    avatarUrl: 'avatarUrl',
    groupType: 'groupType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt'
  };

  export type GroupsScalarFieldEnum = (typeof GroupsScalarFieldEnum)[keyof typeof GroupsScalarFieldEnum]


  export const Group_membersScalarFieldEnum: {
    id: 'id',
    role: 'role',
    joined_at: 'joined_at',
    group_id: 'group_id',
    user_id: 'user_id',
    isInGroup: 'isInGroup',
    left_at: 'left_at'
  };

  export type Group_membersScalarFieldEnum = (typeof Group_membersScalarFieldEnum)[keyof typeof Group_membersScalarFieldEnum]


  export const ReportsScalarFieldEnum: {
    id: 'id',
    report_type: 'report_type',
    period_start: 'period_start',
    period_end: 'period_end',
    data: 'data',
    createdAt: 'createdAt',
    group_id: 'group_id',
    user_id: 'user_id'
  };

  export type ReportsScalarFieldEnum = (typeof ReportsScalarFieldEnum)[keyof typeof ReportsScalarFieldEnum]


  export const CurrenciesScalarFieldEnum: {
    code: 'code',
    name: 'name',
    symbol: 'symbol'
  };

  export type CurrenciesScalarFieldEnum = (typeof CurrenciesScalarFieldEnum)[keyof typeof CurrenciesScalarFieldEnum]


  export const Exchange_ratesScalarFieldEnum: {
    id: 'id',
    from_currency: 'from_currency',
    to_currency: 'to_currency',
    rate_date: 'rate_date'
  };

  export type Exchange_ratesScalarFieldEnum = (typeof Exchange_ratesScalarFieldEnum)[keyof typeof Exchange_ratesScalarFieldEnum]


  export const SettlementsScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    status: 'status',
    method: 'method',
    settled_at: 'settled_at',
    created_at: 'created_at',
    currency_code: 'currency_code',
    from_user_id: 'from_user_id',
    to_user_id: 'to_user_id',
    group_id: 'group_id'
  };

  export type SettlementsScalarFieldEnum = (typeof SettlementsScalarFieldEnum)[keyof typeof SettlementsScalarFieldEnum]


  export const ExpensesScalarFieldEnum: {
    id: 'id',
    group_id: 'group_id',
    created_by: 'created_by',
    paid_by: 'paid_by',
    amount: 'amount',
    description: 'description',
    category: 'category',
    expense_data: 'expense_data',
    split_type: 'split_type',
    currency_code: 'currency_code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpensesScalarFieldEnum = (typeof ExpensesScalarFieldEnum)[keyof typeof ExpensesScalarFieldEnum]


  export const BalancesScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    last_update: 'last_update',
    group_id: 'group_id',
    user_id: 'user_id',
    currency_code: 'currency_code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BalancesScalarFieldEnum = (typeof BalancesScalarFieldEnum)[keyof typeof BalancesScalarFieldEnum]


  export const Expense_splitsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    own_by: 'own_by',
    amount: 'amount',
    percentage: 'percentage',
    expense_id: 'expense_id',
    exact_amount: 'exact_amount'
  };

  export type Expense_splitsScalarFieldEnum = (typeof Expense_splitsScalarFieldEnum)[keyof typeof Expense_splitsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'groupType'
   */
  export type EnumgroupTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'groupType'>
    


  /**
   * Reference to a field of type 'groupType[]'
   */
  export type ListEnumgroupTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'groupType[]'>
    


  /**
   * Reference to a field of type 'groupRole'
   */
  export type EnumgroupRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'groupRole'>
    


  /**
   * Reference to a field of type 'groupRole[]'
   */
  export type ListEnumgroupRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'groupRole[]'>
    


  /**
   * Reference to a field of type 'ReportType'
   */
  export type EnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType'>
    


  /**
   * Reference to a field of type 'ReportType[]'
   */
  export type ListEnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'SettlementStatus'
   */
  export type EnumSettlementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SettlementStatus'>
    


  /**
   * Reference to a field of type 'SettlementStatus[]'
   */
  export type ListEnumSettlementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SettlementStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'splitType'
   */
  export type EnumsplitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'splitType'>
    


  /**
   * Reference to a field of type 'splitType[]'
   */
  export type ListEnumsplitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'splitType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    displayName?: StringFilter<"users"> | string
    avatarUrl?: StringFilter<"users"> | string
    mobileNumber?: StringFilter<"users"> | string
    social_login_provider?: StringFilter<"users"> | string
    contact_list?: JsonNullableFilter<"users">
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    isDeleted?: BoolFilter<"users"> | boolean
    deletedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    createdGroups?: GroupsListRelationFilter
    groupmembers?: Group_membersListRelationFilter
    reports?: ReportsListRelationFilter
    settlements?: SettlementsListRelationFilter
    tosettlements?: SettlementsListRelationFilter
    expenses?: ExpensesListRelationFilter
    paidExpenses?: ExpensesListRelationFilter
    userBalances?: BalancesListRelationFilter
    splitUserId?: Expense_splitsListRelationFilter
    splitOwner?: Expense_splitsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    mobileNumber?: SortOrder
    social_login_provider?: SortOrder
    contact_list?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdGroups?: groupsOrderByRelationAggregateInput
    groupmembers?: group_membersOrderByRelationAggregateInput
    reports?: reportsOrderByRelationAggregateInput
    settlements?: settlementsOrderByRelationAggregateInput
    tosettlements?: settlementsOrderByRelationAggregateInput
    expenses?: expensesOrderByRelationAggregateInput
    paidExpenses?: expensesOrderByRelationAggregateInput
    userBalances?: balancesOrderByRelationAggregateInput
    splitUserId?: expense_splitsOrderByRelationAggregateInput
    splitOwner?: expense_splitsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    displayName?: string
    mobileNumber?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    avatarUrl?: StringFilter<"users"> | string
    social_login_provider?: StringFilter<"users"> | string
    contact_list?: JsonNullableFilter<"users">
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    isDeleted?: BoolFilter<"users"> | boolean
    deletedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    createdGroups?: GroupsListRelationFilter
    groupmembers?: Group_membersListRelationFilter
    reports?: ReportsListRelationFilter
    settlements?: SettlementsListRelationFilter
    tosettlements?: SettlementsListRelationFilter
    expenses?: ExpensesListRelationFilter
    paidExpenses?: ExpensesListRelationFilter
    userBalances?: BalancesListRelationFilter
    splitUserId?: Expense_splitsListRelationFilter
    splitOwner?: Expense_splitsListRelationFilter
  }, "id" | "email" | "displayName" | "mobileNumber">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    mobileNumber?: SortOrder
    social_login_provider?: SortOrder
    contact_list?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    displayName?: StringWithAggregatesFilter<"users"> | string
    avatarUrl?: StringWithAggregatesFilter<"users"> | string
    mobileNumber?: StringWithAggregatesFilter<"users"> | string
    social_login_provider?: StringWithAggregatesFilter<"users"> | string
    contact_list?: JsonNullableWithAggregatesFilter<"users">
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"users"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type groupsWhereInput = {
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    id?: StringFilter<"groups"> | string
    name?: StringFilter<"groups"> | string
    description?: StringNullableFilter<"groups"> | string | null
    avatarUrl?: StringFilter<"groups"> | string
    groupType?: EnumgroupTypeFilter<"groups"> | $Enums.groupType
    createdAt?: DateTimeFilter<"groups"> | Date | string
    updatedAt?: DateTimeFilter<"groups"> | Date | string
    createdBy?: StringFilter<"groups"> | string
    isDeleted?: BoolFilter<"groups"> | boolean
    deletedAt?: DateTimeNullableFilter<"groups"> | Date | string | null
    creator?: XOR<UsersScalarRelationFilter, usersWhereInput>
    member?: Group_membersListRelationFilter
    reports?: ReportsListRelationFilter
    settlements?: SettlementsListRelationFilter
    expenses?: ExpensesListRelationFilter
    groupBalances?: BalancesListRelationFilter
  }

  export type groupsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    avatarUrl?: SortOrder
    groupType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    creator?: usersOrderByWithRelationInput
    member?: group_membersOrderByRelationAggregateInput
    reports?: reportsOrderByRelationAggregateInput
    settlements?: settlementsOrderByRelationAggregateInput
    expenses?: expensesOrderByRelationAggregateInput
    groupBalances?: balancesOrderByRelationAggregateInput
  }

  export type groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    description?: StringNullableFilter<"groups"> | string | null
    avatarUrl?: StringFilter<"groups"> | string
    groupType?: EnumgroupTypeFilter<"groups"> | $Enums.groupType
    createdAt?: DateTimeFilter<"groups"> | Date | string
    updatedAt?: DateTimeFilter<"groups"> | Date | string
    createdBy?: StringFilter<"groups"> | string
    isDeleted?: BoolFilter<"groups"> | boolean
    deletedAt?: DateTimeNullableFilter<"groups"> | Date | string | null
    creator?: XOR<UsersScalarRelationFilter, usersWhereInput>
    member?: Group_membersListRelationFilter
    reports?: ReportsListRelationFilter
    settlements?: SettlementsListRelationFilter
    expenses?: ExpensesListRelationFilter
    groupBalances?: BalancesListRelationFilter
  }, "id" | "name">

  export type groupsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    avatarUrl?: SortOrder
    groupType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: groupsCountOrderByAggregateInput
    _max?: groupsMaxOrderByAggregateInput
    _min?: groupsMinOrderByAggregateInput
  }

  export type groupsScalarWhereWithAggregatesInput = {
    AND?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    OR?: groupsScalarWhereWithAggregatesInput[]
    NOT?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"groups"> | string
    name?: StringWithAggregatesFilter<"groups"> | string
    description?: StringNullableWithAggregatesFilter<"groups"> | string | null
    avatarUrl?: StringWithAggregatesFilter<"groups"> | string
    groupType?: EnumgroupTypeWithAggregatesFilter<"groups"> | $Enums.groupType
    createdAt?: DateTimeWithAggregatesFilter<"groups"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"groups"> | Date | string
    createdBy?: StringWithAggregatesFilter<"groups"> | string
    isDeleted?: BoolWithAggregatesFilter<"groups"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"groups"> | Date | string | null
  }

  export type group_membersWhereInput = {
    AND?: group_membersWhereInput | group_membersWhereInput[]
    OR?: group_membersWhereInput[]
    NOT?: group_membersWhereInput | group_membersWhereInput[]
    id?: StringFilter<"group_members"> | string
    role?: EnumgroupRoleFilter<"group_members"> | $Enums.groupRole
    joined_at?: DateTimeFilter<"group_members"> | Date | string
    group_id?: StringFilter<"group_members"> | string
    user_id?: StringFilter<"group_members"> | string
    isInGroup?: BoolFilter<"group_members"> | boolean
    left_at?: DateTimeNullableFilter<"group_members"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    group?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
  }

  export type group_membersOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    isInGroup?: SortOrder
    left_at?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    group?: groupsOrderByWithRelationInput
  }

  export type group_membersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_group_id?: group_membersUser_idGroup_idCompoundUniqueInput
    AND?: group_membersWhereInput | group_membersWhereInput[]
    OR?: group_membersWhereInput[]
    NOT?: group_membersWhereInput | group_membersWhereInput[]
    role?: EnumgroupRoleFilter<"group_members"> | $Enums.groupRole
    joined_at?: DateTimeFilter<"group_members"> | Date | string
    group_id?: StringFilter<"group_members"> | string
    user_id?: StringFilter<"group_members"> | string
    isInGroup?: BoolFilter<"group_members"> | boolean
    left_at?: DateTimeNullableFilter<"group_members"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    group?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
  }, "id" | "user_id_group_id">

  export type group_membersOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    isInGroup?: SortOrder
    left_at?: SortOrderInput | SortOrder
    _count?: group_membersCountOrderByAggregateInput
    _max?: group_membersMaxOrderByAggregateInput
    _min?: group_membersMinOrderByAggregateInput
  }

  export type group_membersScalarWhereWithAggregatesInput = {
    AND?: group_membersScalarWhereWithAggregatesInput | group_membersScalarWhereWithAggregatesInput[]
    OR?: group_membersScalarWhereWithAggregatesInput[]
    NOT?: group_membersScalarWhereWithAggregatesInput | group_membersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"group_members"> | string
    role?: EnumgroupRoleWithAggregatesFilter<"group_members"> | $Enums.groupRole
    joined_at?: DateTimeWithAggregatesFilter<"group_members"> | Date | string
    group_id?: StringWithAggregatesFilter<"group_members"> | string
    user_id?: StringWithAggregatesFilter<"group_members"> | string
    isInGroup?: BoolWithAggregatesFilter<"group_members"> | boolean
    left_at?: DateTimeNullableWithAggregatesFilter<"group_members"> | Date | string | null
  }

  export type reportsWhereInput = {
    AND?: reportsWhereInput | reportsWhereInput[]
    OR?: reportsWhereInput[]
    NOT?: reportsWhereInput | reportsWhereInput[]
    id?: StringFilter<"reports"> | string
    report_type?: EnumReportTypeFilter<"reports"> | $Enums.ReportType
    period_start?: DateTimeFilter<"reports"> | Date | string
    period_end?: DateTimeFilter<"reports"> | Date | string
    data?: JsonFilter<"reports">
    createdAt?: DateTimeFilter<"reports"> | Date | string
    group_id?: StringFilter<"reports"> | string
    user_id?: StringFilter<"reports"> | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    group?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
  }

  export type reportsOrderByWithRelationInput = {
    id?: SortOrder
    report_type?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    user?: usersOrderByWithRelationInput
    group?: groupsOrderByWithRelationInput
  }

  export type reportsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: reportsWhereInput | reportsWhereInput[]
    OR?: reportsWhereInput[]
    NOT?: reportsWhereInput | reportsWhereInput[]
    report_type?: EnumReportTypeFilter<"reports"> | $Enums.ReportType
    period_start?: DateTimeFilter<"reports"> | Date | string
    period_end?: DateTimeFilter<"reports"> | Date | string
    data?: JsonFilter<"reports">
    createdAt?: DateTimeFilter<"reports"> | Date | string
    group_id?: StringFilter<"reports"> | string
    user_id?: StringFilter<"reports"> | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    group?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
  }, "id">

  export type reportsOrderByWithAggregationInput = {
    id?: SortOrder
    report_type?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    _count?: reportsCountOrderByAggregateInput
    _max?: reportsMaxOrderByAggregateInput
    _min?: reportsMinOrderByAggregateInput
  }

  export type reportsScalarWhereWithAggregatesInput = {
    AND?: reportsScalarWhereWithAggregatesInput | reportsScalarWhereWithAggregatesInput[]
    OR?: reportsScalarWhereWithAggregatesInput[]
    NOT?: reportsScalarWhereWithAggregatesInput | reportsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"reports"> | string
    report_type?: EnumReportTypeWithAggregatesFilter<"reports"> | $Enums.ReportType
    period_start?: DateTimeWithAggregatesFilter<"reports"> | Date | string
    period_end?: DateTimeWithAggregatesFilter<"reports"> | Date | string
    data?: JsonWithAggregatesFilter<"reports">
    createdAt?: DateTimeWithAggregatesFilter<"reports"> | Date | string
    group_id?: StringWithAggregatesFilter<"reports"> | string
    user_id?: StringWithAggregatesFilter<"reports"> | string
  }

  export type currenciesWhereInput = {
    AND?: currenciesWhereInput | currenciesWhereInput[]
    OR?: currenciesWhereInput[]
    NOT?: currenciesWhereInput | currenciesWhereInput[]
    code?: StringFilter<"currencies"> | string
    name?: StringFilter<"currencies"> | string
    symbol?: StringFilter<"currencies"> | string
    fromCurrency?: Exchange_ratesListRelationFilter
    toCurrency?: Exchange_ratesListRelationFilter
    expenses?: ExpensesListRelationFilter
    balance?: BalancesListRelationFilter
  }

  export type currenciesOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    fromCurrency?: exchange_ratesOrderByRelationAggregateInput
    toCurrency?: exchange_ratesOrderByRelationAggregateInput
    expenses?: expensesOrderByRelationAggregateInput
    balance?: balancesOrderByRelationAggregateInput
  }

  export type currenciesWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    name_code?: currenciesNameCodeCompoundUniqueInput
    AND?: currenciesWhereInput | currenciesWhereInput[]
    OR?: currenciesWhereInput[]
    NOT?: currenciesWhereInput | currenciesWhereInput[]
    name?: StringFilter<"currencies"> | string
    symbol?: StringFilter<"currencies"> | string
    fromCurrency?: Exchange_ratesListRelationFilter
    toCurrency?: Exchange_ratesListRelationFilter
    expenses?: ExpensesListRelationFilter
    balance?: BalancesListRelationFilter
  }, "code" | "name_code">

  export type currenciesOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    _count?: currenciesCountOrderByAggregateInput
    _max?: currenciesMaxOrderByAggregateInput
    _min?: currenciesMinOrderByAggregateInput
  }

  export type currenciesScalarWhereWithAggregatesInput = {
    AND?: currenciesScalarWhereWithAggregatesInput | currenciesScalarWhereWithAggregatesInput[]
    OR?: currenciesScalarWhereWithAggregatesInput[]
    NOT?: currenciesScalarWhereWithAggregatesInput | currenciesScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"currencies"> | string
    name?: StringWithAggregatesFilter<"currencies"> | string
    symbol?: StringWithAggregatesFilter<"currencies"> | string
  }

  export type exchange_ratesWhereInput = {
    AND?: exchange_ratesWhereInput | exchange_ratesWhereInput[]
    OR?: exchange_ratesWhereInput[]
    NOT?: exchange_ratesWhereInput | exchange_ratesWhereInput[]
    id?: StringFilter<"exchange_rates"> | string
    from_currency?: StringFilter<"exchange_rates"> | string
    to_currency?: StringFilter<"exchange_rates"> | string
    rate_date?: DateTimeFilter<"exchange_rates"> | Date | string
    fromCurrency?: XOR<CurrenciesScalarRelationFilter, currenciesWhereInput>
    toCurrency?: XOR<CurrenciesScalarRelationFilter, currenciesWhereInput>
  }

  export type exchange_ratesOrderByWithRelationInput = {
    id?: SortOrder
    from_currency?: SortOrder
    to_currency?: SortOrder
    rate_date?: SortOrder
    fromCurrency?: currenciesOrderByWithRelationInput
    toCurrency?: currenciesOrderByWithRelationInput
  }

  export type exchange_ratesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: exchange_ratesWhereInput | exchange_ratesWhereInput[]
    OR?: exchange_ratesWhereInput[]
    NOT?: exchange_ratesWhereInput | exchange_ratesWhereInput[]
    from_currency?: StringFilter<"exchange_rates"> | string
    to_currency?: StringFilter<"exchange_rates"> | string
    rate_date?: DateTimeFilter<"exchange_rates"> | Date | string
    fromCurrency?: XOR<CurrenciesScalarRelationFilter, currenciesWhereInput>
    toCurrency?: XOR<CurrenciesScalarRelationFilter, currenciesWhereInput>
  }, "id">

  export type exchange_ratesOrderByWithAggregationInput = {
    id?: SortOrder
    from_currency?: SortOrder
    to_currency?: SortOrder
    rate_date?: SortOrder
    _count?: exchange_ratesCountOrderByAggregateInput
    _max?: exchange_ratesMaxOrderByAggregateInput
    _min?: exchange_ratesMinOrderByAggregateInput
  }

  export type exchange_ratesScalarWhereWithAggregatesInput = {
    AND?: exchange_ratesScalarWhereWithAggregatesInput | exchange_ratesScalarWhereWithAggregatesInput[]
    OR?: exchange_ratesScalarWhereWithAggregatesInput[]
    NOT?: exchange_ratesScalarWhereWithAggregatesInput | exchange_ratesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"exchange_rates"> | string
    from_currency?: StringWithAggregatesFilter<"exchange_rates"> | string
    to_currency?: StringWithAggregatesFilter<"exchange_rates"> | string
    rate_date?: DateTimeWithAggregatesFilter<"exchange_rates"> | Date | string
  }

  export type settlementsWhereInput = {
    AND?: settlementsWhereInput | settlementsWhereInput[]
    OR?: settlementsWhereInput[]
    NOT?: settlementsWhereInput | settlementsWhereInput[]
    id?: StringFilter<"settlements"> | string
    amount?: DecimalFilter<"settlements"> | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFilter<"settlements"> | $Enums.SettlementStatus
    method?: EnumPaymentMethodFilter<"settlements"> | $Enums.PaymentMethod
    settled_at?: DateTimeFilter<"settlements"> | Date | string
    created_at?: DateTimeFilter<"settlements"> | Date | string
    currency_code?: StringFilter<"settlements"> | string
    from_user_id?: StringFilter<"settlements"> | string
    to_user_id?: StringFilter<"settlements"> | string
    group_id?: StringFilter<"settlements"> | string
    fromUser?: XOR<UsersScalarRelationFilter, usersWhereInput>
    toUser?: XOR<UsersScalarRelationFilter, usersWhereInput>
    group?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
  }

  export type settlementsOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    method?: SortOrder
    settled_at?: SortOrder
    created_at?: SortOrder
    currency_code?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    group_id?: SortOrder
    fromUser?: usersOrderByWithRelationInput
    toUser?: usersOrderByWithRelationInput
    group?: groupsOrderByWithRelationInput
  }

  export type settlementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: settlementsWhereInput | settlementsWhereInput[]
    OR?: settlementsWhereInput[]
    NOT?: settlementsWhereInput | settlementsWhereInput[]
    amount?: DecimalFilter<"settlements"> | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFilter<"settlements"> | $Enums.SettlementStatus
    method?: EnumPaymentMethodFilter<"settlements"> | $Enums.PaymentMethod
    settled_at?: DateTimeFilter<"settlements"> | Date | string
    created_at?: DateTimeFilter<"settlements"> | Date | string
    currency_code?: StringFilter<"settlements"> | string
    from_user_id?: StringFilter<"settlements"> | string
    to_user_id?: StringFilter<"settlements"> | string
    group_id?: StringFilter<"settlements"> | string
    fromUser?: XOR<UsersScalarRelationFilter, usersWhereInput>
    toUser?: XOR<UsersScalarRelationFilter, usersWhereInput>
    group?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
  }, "id">

  export type settlementsOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    method?: SortOrder
    settled_at?: SortOrder
    created_at?: SortOrder
    currency_code?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    group_id?: SortOrder
    _count?: settlementsCountOrderByAggregateInput
    _avg?: settlementsAvgOrderByAggregateInput
    _max?: settlementsMaxOrderByAggregateInput
    _min?: settlementsMinOrderByAggregateInput
    _sum?: settlementsSumOrderByAggregateInput
  }

  export type settlementsScalarWhereWithAggregatesInput = {
    AND?: settlementsScalarWhereWithAggregatesInput | settlementsScalarWhereWithAggregatesInput[]
    OR?: settlementsScalarWhereWithAggregatesInput[]
    NOT?: settlementsScalarWhereWithAggregatesInput | settlementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"settlements"> | string
    amount?: DecimalWithAggregatesFilter<"settlements"> | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusWithAggregatesFilter<"settlements"> | $Enums.SettlementStatus
    method?: EnumPaymentMethodWithAggregatesFilter<"settlements"> | $Enums.PaymentMethod
    settled_at?: DateTimeWithAggregatesFilter<"settlements"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"settlements"> | Date | string
    currency_code?: StringWithAggregatesFilter<"settlements"> | string
    from_user_id?: StringWithAggregatesFilter<"settlements"> | string
    to_user_id?: StringWithAggregatesFilter<"settlements"> | string
    group_id?: StringWithAggregatesFilter<"settlements"> | string
  }

  export type expensesWhereInput = {
    AND?: expensesWhereInput | expensesWhereInput[]
    OR?: expensesWhereInput[]
    NOT?: expensesWhereInput | expensesWhereInput[]
    id?: StringFilter<"expenses"> | string
    group_id?: StringFilter<"expenses"> | string
    created_by?: StringFilter<"expenses"> | string
    paid_by?: StringFilter<"expenses"> | string
    amount?: DecimalFilter<"expenses"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"expenses"> | string
    category?: StringFilter<"expenses"> | string
    expense_data?: DateTimeFilter<"expenses"> | Date | string
    split_type?: EnumsplitTypeFilter<"expenses"> | $Enums.splitType
    currency_code?: StringFilter<"expenses"> | string
    createdAt?: DateTimeFilter<"expenses"> | Date | string
    updatedAt?: DateTimeFilter<"expenses"> | Date | string
    group?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    paid?: XOR<UsersScalarRelationFilter, usersWhereInput>
    currency?: XOR<CurrenciesScalarRelationFilter, currenciesWhereInput>
    splitExpense?: Expense_splitsListRelationFilter
  }

  export type expensesOrderByWithRelationInput = {
    id?: SortOrder
    group_id?: SortOrder
    created_by?: SortOrder
    paid_by?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    expense_data?: SortOrder
    split_type?: SortOrder
    currency_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: groupsOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
    paid?: usersOrderByWithRelationInput
    currency?: currenciesOrderByWithRelationInput
    splitExpense?: expense_splitsOrderByRelationAggregateInput
  }

  export type expensesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: expensesWhereInput | expensesWhereInput[]
    OR?: expensesWhereInput[]
    NOT?: expensesWhereInput | expensesWhereInput[]
    group_id?: StringFilter<"expenses"> | string
    created_by?: StringFilter<"expenses"> | string
    paid_by?: StringFilter<"expenses"> | string
    amount?: DecimalFilter<"expenses"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"expenses"> | string
    category?: StringFilter<"expenses"> | string
    expense_data?: DateTimeFilter<"expenses"> | Date | string
    split_type?: EnumsplitTypeFilter<"expenses"> | $Enums.splitType
    currency_code?: StringFilter<"expenses"> | string
    createdAt?: DateTimeFilter<"expenses"> | Date | string
    updatedAt?: DateTimeFilter<"expenses"> | Date | string
    group?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    paid?: XOR<UsersScalarRelationFilter, usersWhereInput>
    currency?: XOR<CurrenciesScalarRelationFilter, currenciesWhereInput>
    splitExpense?: Expense_splitsListRelationFilter
  }, "id">

  export type expensesOrderByWithAggregationInput = {
    id?: SortOrder
    group_id?: SortOrder
    created_by?: SortOrder
    paid_by?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    expense_data?: SortOrder
    split_type?: SortOrder
    currency_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: expensesCountOrderByAggregateInput
    _avg?: expensesAvgOrderByAggregateInput
    _max?: expensesMaxOrderByAggregateInput
    _min?: expensesMinOrderByAggregateInput
    _sum?: expensesSumOrderByAggregateInput
  }

  export type expensesScalarWhereWithAggregatesInput = {
    AND?: expensesScalarWhereWithAggregatesInput | expensesScalarWhereWithAggregatesInput[]
    OR?: expensesScalarWhereWithAggregatesInput[]
    NOT?: expensesScalarWhereWithAggregatesInput | expensesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"expenses"> | string
    group_id?: StringWithAggregatesFilter<"expenses"> | string
    created_by?: StringWithAggregatesFilter<"expenses"> | string
    paid_by?: StringWithAggregatesFilter<"expenses"> | string
    amount?: DecimalWithAggregatesFilter<"expenses"> | Decimal | DecimalJsLike | number | string
    description?: StringWithAggregatesFilter<"expenses"> | string
    category?: StringWithAggregatesFilter<"expenses"> | string
    expense_data?: DateTimeWithAggregatesFilter<"expenses"> | Date | string
    split_type?: EnumsplitTypeWithAggregatesFilter<"expenses"> | $Enums.splitType
    currency_code?: StringWithAggregatesFilter<"expenses"> | string
    createdAt?: DateTimeWithAggregatesFilter<"expenses"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"expenses"> | Date | string
  }

  export type balancesWhereInput = {
    AND?: balancesWhereInput | balancesWhereInput[]
    OR?: balancesWhereInput[]
    NOT?: balancesWhereInput | balancesWhereInput[]
    id?: StringFilter<"balances"> | string
    balance?: DecimalFilter<"balances"> | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFilter<"balances"> | Date | string
    group_id?: StringFilter<"balances"> | string
    user_id?: StringFilter<"balances"> | string
    currency_code?: StringFilter<"balances"> | string
    createdAt?: DateTimeFilter<"balances"> | Date | string
    updatedAt?: DateTimeFilter<"balances"> | Date | string
    groupBalances?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    userBalances?: XOR<UsersScalarRelationFilter, usersWhereInput>
    currency?: XOR<CurrenciesScalarRelationFilter, currenciesWhereInput>
  }

  export type balancesOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    last_update?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    currency_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupBalances?: groupsOrderByWithRelationInput
    userBalances?: usersOrderByWithRelationInput
    currency?: currenciesOrderByWithRelationInput
  }

  export type balancesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: balancesWhereInput | balancesWhereInput[]
    OR?: balancesWhereInput[]
    NOT?: balancesWhereInput | balancesWhereInput[]
    balance?: DecimalFilter<"balances"> | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFilter<"balances"> | Date | string
    group_id?: StringFilter<"balances"> | string
    user_id?: StringFilter<"balances"> | string
    currency_code?: StringFilter<"balances"> | string
    createdAt?: DateTimeFilter<"balances"> | Date | string
    updatedAt?: DateTimeFilter<"balances"> | Date | string
    groupBalances?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    userBalances?: XOR<UsersScalarRelationFilter, usersWhereInput>
    currency?: XOR<CurrenciesScalarRelationFilter, currenciesWhereInput>
  }, "id">

  export type balancesOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    last_update?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    currency_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: balancesCountOrderByAggregateInput
    _avg?: balancesAvgOrderByAggregateInput
    _max?: balancesMaxOrderByAggregateInput
    _min?: balancesMinOrderByAggregateInput
    _sum?: balancesSumOrderByAggregateInput
  }

  export type balancesScalarWhereWithAggregatesInput = {
    AND?: balancesScalarWhereWithAggregatesInput | balancesScalarWhereWithAggregatesInput[]
    OR?: balancesScalarWhereWithAggregatesInput[]
    NOT?: balancesScalarWhereWithAggregatesInput | balancesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"balances"> | string
    balance?: DecimalWithAggregatesFilter<"balances"> | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeWithAggregatesFilter<"balances"> | Date | string
    group_id?: StringWithAggregatesFilter<"balances"> | string
    user_id?: StringWithAggregatesFilter<"balances"> | string
    currency_code?: StringWithAggregatesFilter<"balances"> | string
    createdAt?: DateTimeWithAggregatesFilter<"balances"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"balances"> | Date | string
  }

  export type expense_splitsWhereInput = {
    AND?: expense_splitsWhereInput | expense_splitsWhereInput[]
    OR?: expense_splitsWhereInput[]
    NOT?: expense_splitsWhereInput | expense_splitsWhereInput[]
    id?: StringFilter<"expense_splits"> | string
    user_id?: StringFilter<"expense_splits"> | string
    own_by?: StringFilter<"expense_splits"> | string
    amount?: DecimalFilter<"expense_splits"> | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFilter<"expense_splits"> | Decimal | DecimalJsLike | number | string
    expense_id?: StringFilter<"expense_splits"> | string
    exact_amount?: DecimalFilter<"expense_splits"> | Decimal | DecimalJsLike | number | string
    splitUserId?: XOR<UsersScalarRelationFilter, usersWhereInput>
    splitOwner?: XOR<UsersScalarRelationFilter, usersWhereInput>
    expenseId?: XOR<ExpensesScalarRelationFilter, expensesWhereInput>
  }

  export type expense_splitsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    own_by?: SortOrder
    amount?: SortOrder
    percentage?: SortOrder
    expense_id?: SortOrder
    exact_amount?: SortOrder
    splitUserId?: usersOrderByWithRelationInput
    splitOwner?: usersOrderByWithRelationInput
    expenseId?: expensesOrderByWithRelationInput
  }

  export type expense_splitsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: expense_splitsWhereInput | expense_splitsWhereInput[]
    OR?: expense_splitsWhereInput[]
    NOT?: expense_splitsWhereInput | expense_splitsWhereInput[]
    user_id?: StringFilter<"expense_splits"> | string
    own_by?: StringFilter<"expense_splits"> | string
    amount?: DecimalFilter<"expense_splits"> | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFilter<"expense_splits"> | Decimal | DecimalJsLike | number | string
    expense_id?: StringFilter<"expense_splits"> | string
    exact_amount?: DecimalFilter<"expense_splits"> | Decimal | DecimalJsLike | number | string
    splitUserId?: XOR<UsersScalarRelationFilter, usersWhereInput>
    splitOwner?: XOR<UsersScalarRelationFilter, usersWhereInput>
    expenseId?: XOR<ExpensesScalarRelationFilter, expensesWhereInput>
  }, "id">

  export type expense_splitsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    own_by?: SortOrder
    amount?: SortOrder
    percentage?: SortOrder
    expense_id?: SortOrder
    exact_amount?: SortOrder
    _count?: expense_splitsCountOrderByAggregateInput
    _avg?: expense_splitsAvgOrderByAggregateInput
    _max?: expense_splitsMaxOrderByAggregateInput
    _min?: expense_splitsMinOrderByAggregateInput
    _sum?: expense_splitsSumOrderByAggregateInput
  }

  export type expense_splitsScalarWhereWithAggregatesInput = {
    AND?: expense_splitsScalarWhereWithAggregatesInput | expense_splitsScalarWhereWithAggregatesInput[]
    OR?: expense_splitsScalarWhereWithAggregatesInput[]
    NOT?: expense_splitsScalarWhereWithAggregatesInput | expense_splitsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"expense_splits"> | string
    user_id?: StringWithAggregatesFilter<"expense_splits"> | string
    own_by?: StringWithAggregatesFilter<"expense_splits"> | string
    amount?: DecimalWithAggregatesFilter<"expense_splits"> | Decimal | DecimalJsLike | number | string
    percentage?: DecimalWithAggregatesFilter<"expense_splits"> | Decimal | DecimalJsLike | number | string
    expense_id?: StringWithAggregatesFilter<"expense_splits"> | string
    exact_amount?: DecimalWithAggregatesFilter<"expense_splits"> | Decimal | DecimalJsLike | number | string
  }

  export type usersCreateInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersCreateNestedManyWithoutUserInput
    reports?: reportsCreateNestedManyWithoutUserInput
    settlements?: settlementsCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsCreateNestedManyWithoutToUserInput
    expenses?: expensesCreateNestedManyWithoutUserInput
    paidExpenses?: expensesCreateNestedManyWithoutPaidInput
    userBalances?: balancesCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersUncheckedCreateNestedManyWithoutUserInput
    reports?: reportsUncheckedCreateNestedManyWithoutUserInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsUncheckedCreateNestedManyWithoutToUserInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
    paidExpenses?: expensesUncheckedCreateNestedManyWithoutPaidInput
    userBalances?: balancesUncheckedCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsUncheckedCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsUncheckedCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUpdateManyWithoutUserNestedInput
    reports?: reportsUpdateManyWithoutUserNestedInput
    settlements?: settlementsUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUpdateManyWithoutToUserNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    reports?: reportsUncheckedUpdateManyWithoutUserNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUncheckedUpdateManyWithoutToUserNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUncheckedUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUncheckedUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUncheckedUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUncheckedUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupsCreateInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    creator: usersCreateNestedOneWithoutCreatedGroupsInput
    member?: group_membersCreateNestedManyWithoutGroupInput
    reports?: reportsCreateNestedManyWithoutGroupInput
    settlements?: settlementsCreateNestedManyWithoutGroupInput
    expenses?: expensesCreateNestedManyWithoutGroupInput
    groupBalances?: balancesCreateNestedManyWithoutGroupBalancesInput
  }

  export type groupsUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    member?: group_membersUncheckedCreateNestedManyWithoutGroupInput
    reports?: reportsUncheckedCreateNestedManyWithoutGroupInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutGroupInput
    expenses?: expensesUncheckedCreateNestedManyWithoutGroupInput
    groupBalances?: balancesUncheckedCreateNestedManyWithoutGroupBalancesInput
  }

  export type groupsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: usersUpdateOneRequiredWithoutCreatedGroupsNestedInput
    member?: group_membersUpdateManyWithoutGroupNestedInput
    reports?: reportsUpdateManyWithoutGroupNestedInput
    settlements?: settlementsUpdateManyWithoutGroupNestedInput
    expenses?: expensesUpdateManyWithoutGroupNestedInput
    groupBalances?: balancesUpdateManyWithoutGroupBalancesNestedInput
  }

  export type groupsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: group_membersUncheckedUpdateManyWithoutGroupNestedInput
    reports?: reportsUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutGroupNestedInput
    groupBalances?: balancesUncheckedUpdateManyWithoutGroupBalancesNestedInput
  }

  export type groupsCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type groupsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_membersCreateInput = {
    id?: string
    role?: $Enums.groupRole
    joined_at?: Date | string
    isInGroup?: boolean
    left_at?: Date | string | null
    user: usersCreateNestedOneWithoutGroupmembersInput
    group: groupsCreateNestedOneWithoutMemberInput
  }

  export type group_membersUncheckedCreateInput = {
    id?: string
    role?: $Enums.groupRole
    joined_at?: Date | string
    group_id: string
    user_id: string
    isInGroup?: boolean
    left_at?: Date | string | null
  }

  export type group_membersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumgroupRoleFieldUpdateOperationsInput | $Enums.groupRole
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isInGroup?: BoolFieldUpdateOperationsInput | boolean
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutGroupmembersNestedInput
    group?: groupsUpdateOneRequiredWithoutMemberNestedInput
  }

  export type group_membersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumgroupRoleFieldUpdateOperationsInput | $Enums.groupRole
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    isInGroup?: BoolFieldUpdateOperationsInput | boolean
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_membersCreateManyInput = {
    id?: string
    role?: $Enums.groupRole
    joined_at?: Date | string
    group_id: string
    user_id: string
    isInGroup?: boolean
    left_at?: Date | string | null
  }

  export type group_membersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumgroupRoleFieldUpdateOperationsInput | $Enums.groupRole
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isInGroup?: BoolFieldUpdateOperationsInput | boolean
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_membersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumgroupRoleFieldUpdateOperationsInput | $Enums.groupRole
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    isInGroup?: BoolFieldUpdateOperationsInput | boolean
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportsCreateInput = {
    id?: string
    report_type?: $Enums.ReportType
    period_start: Date | string
    period_end: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutReportsInput
    group: groupsCreateNestedOneWithoutReportsInput
  }

  export type reportsUncheckedCreateInput = {
    id?: string
    report_type?: $Enums.ReportType
    period_start: Date | string
    period_end: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    group_id: string
    user_id: string
  }

  export type reportsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutReportsNestedInput
    group?: groupsUpdateOneRequiredWithoutReportsNestedInput
  }

  export type reportsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type reportsCreateManyInput = {
    id?: string
    report_type?: $Enums.ReportType
    period_start: Date | string
    period_end: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    group_id: string
    user_id: string
  }

  export type reportsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reportsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type currenciesCreateInput = {
    code?: string
    name?: string
    symbol?: string
    fromCurrency?: exchange_ratesCreateNestedManyWithoutFromCurrencyInput
    toCurrency?: exchange_ratesCreateNestedManyWithoutToCurrencyInput
    expenses?: expensesCreateNestedManyWithoutCurrencyInput
    balance?: balancesCreateNestedManyWithoutCurrencyInput
  }

  export type currenciesUncheckedCreateInput = {
    code?: string
    name?: string
    symbol?: string
    fromCurrency?: exchange_ratesUncheckedCreateNestedManyWithoutFromCurrencyInput
    toCurrency?: exchange_ratesUncheckedCreateNestedManyWithoutToCurrencyInput
    expenses?: expensesUncheckedCreateNestedManyWithoutCurrencyInput
    balance?: balancesUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type currenciesUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    fromCurrency?: exchange_ratesUpdateManyWithoutFromCurrencyNestedInput
    toCurrency?: exchange_ratesUpdateManyWithoutToCurrencyNestedInput
    expenses?: expensesUpdateManyWithoutCurrencyNestedInput
    balance?: balancesUpdateManyWithoutCurrencyNestedInput
  }

  export type currenciesUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    fromCurrency?: exchange_ratesUncheckedUpdateManyWithoutFromCurrencyNestedInput
    toCurrency?: exchange_ratesUncheckedUpdateManyWithoutToCurrencyNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutCurrencyNestedInput
    balance?: balancesUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type currenciesCreateManyInput = {
    code?: string
    name?: string
    symbol?: string
  }

  export type currenciesUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type currenciesUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type exchange_ratesCreateInput = {
    id?: string
    rate_date: Date | string
    fromCurrency: currenciesCreateNestedOneWithoutFromCurrencyInput
    toCurrency: currenciesCreateNestedOneWithoutToCurrencyInput
  }

  export type exchange_ratesUncheckedCreateInput = {
    id?: string
    from_currency: string
    to_currency: string
    rate_date: Date | string
  }

  export type exchange_ratesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate_date?: DateTimeFieldUpdateOperationsInput | Date | string
    fromCurrency?: currenciesUpdateOneRequiredWithoutFromCurrencyNestedInput
    toCurrency?: currenciesUpdateOneRequiredWithoutToCurrencyNestedInput
  }

  export type exchange_ratesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_currency?: StringFieldUpdateOperationsInput | string
    to_currency?: StringFieldUpdateOperationsInput | string
    rate_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type exchange_ratesCreateManyInput = {
    id?: string
    from_currency: string
    to_currency: string
    rate_date: Date | string
  }

  export type exchange_ratesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type exchange_ratesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_currency?: StringFieldUpdateOperationsInput | string
    to_currency?: StringFieldUpdateOperationsInput | string
    rate_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settlementsCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    method?: $Enums.PaymentMethod
    settled_at: Date | string
    created_at?: Date | string
    currency_code: string
    fromUser: usersCreateNestedOneWithoutSettlementsInput
    toUser: usersCreateNestedOneWithoutTosettlementsInput
    group: groupsCreateNestedOneWithoutSettlementsInput
  }

  export type settlementsUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    method?: $Enums.PaymentMethod
    settled_at: Date | string
    created_at?: Date | string
    currency_code: string
    from_user_id: string
    to_user_id: string
    group_id: string
  }

  export type settlementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
    fromUser?: usersUpdateOneRequiredWithoutSettlementsNestedInput
    toUser?: usersUpdateOneRequiredWithoutTosettlementsNestedInput
    group?: groupsUpdateOneRequiredWithoutSettlementsNestedInput
  }

  export type settlementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
    from_user_id?: StringFieldUpdateOperationsInput | string
    to_user_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
  }

  export type settlementsCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    method?: $Enums.PaymentMethod
    settled_at: Date | string
    created_at?: Date | string
    currency_code: string
    from_user_id: string
    to_user_id: string
    group_id: string
  }

  export type settlementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
  }

  export type settlementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
    from_user_id?: StringFieldUpdateOperationsInput | string
    to_user_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
  }

  export type expensesCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    createdAt?: Date | string
    updatedAt?: Date | string
    group: groupsCreateNestedOneWithoutExpensesInput
    user: usersCreateNestedOneWithoutExpensesInput
    paid: usersCreateNestedOneWithoutPaidExpensesInput
    currency: currenciesCreateNestedOneWithoutExpensesInput
    splitExpense?: expense_splitsCreateNestedManyWithoutExpenseIdInput
  }

  export type expensesUncheckedCreateInput = {
    id?: string
    group_id: string
    created_by: string
    paid_by: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    splitExpense?: expense_splitsUncheckedCreateNestedManyWithoutExpenseIdInput
  }

  export type expensesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: groupsUpdateOneRequiredWithoutExpensesNestedInput
    user?: usersUpdateOneRequiredWithoutExpensesNestedInput
    paid?: usersUpdateOneRequiredWithoutPaidExpensesNestedInput
    currency?: currenciesUpdateOneRequiredWithoutExpensesNestedInput
    splitExpense?: expense_splitsUpdateManyWithoutExpenseIdNestedInput
  }

  export type expensesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    paid_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    splitExpense?: expense_splitsUncheckedUpdateManyWithoutExpenseIdNestedInput
  }

  export type expensesCreateManyInput = {
    id?: string
    group_id: string
    created_by: string
    paid_by: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type expensesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    paid_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balancesCreateInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    last_update: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupBalances: groupsCreateNestedOneWithoutGroupBalancesInput
    userBalances: usersCreateNestedOneWithoutUserBalancesInput
    currency: currenciesCreateNestedOneWithoutBalanceInput
  }

  export type balancesUncheckedCreateInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    last_update: Date | string
    group_id: string
    user_id: string
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type balancesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupBalances?: groupsUpdateOneRequiredWithoutGroupBalancesNestedInput
    userBalances?: usersUpdateOneRequiredWithoutUserBalancesNestedInput
    currency?: currenciesUpdateOneRequiredWithoutBalanceNestedInput
  }

  export type balancesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balancesCreateManyInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    last_update: Date | string
    group_id: string
    user_id: string
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type balancesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balancesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expense_splitsCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    percentage: Decimal | DecimalJsLike | number | string
    exact_amount: Decimal | DecimalJsLike | number | string
    splitUserId: usersCreateNestedOneWithoutSplitUserIdInput
    splitOwner: usersCreateNestedOneWithoutSplitOwnerInput
    expenseId: expensesCreateNestedOneWithoutSplitExpenseInput
  }

  export type expense_splitsUncheckedCreateInput = {
    id?: string
    user_id: string
    own_by: string
    amount: Decimal | DecimalJsLike | number | string
    percentage: Decimal | DecimalJsLike | number | string
    expense_id: string
    exact_amount: Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitUserId?: usersUpdateOneRequiredWithoutSplitUserIdNestedInput
    splitOwner?: usersUpdateOneRequiredWithoutSplitOwnerNestedInput
    expenseId?: expensesUpdateOneRequiredWithoutSplitExpenseNestedInput
  }

  export type expense_splitsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    own_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expense_id?: StringFieldUpdateOperationsInput | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsCreateManyInput = {
    id?: string
    user_id: string
    own_by: string
    amount: Decimal | DecimalJsLike | number | string
    percentage: Decimal | DecimalJsLike | number | string
    expense_id: string
    exact_amount: Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    own_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expense_id?: StringFieldUpdateOperationsInput | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type GroupsListRelationFilter = {
    every?: groupsWhereInput
    some?: groupsWhereInput
    none?: groupsWhereInput
  }

  export type Group_membersListRelationFilter = {
    every?: group_membersWhereInput
    some?: group_membersWhereInput
    none?: group_membersWhereInput
  }

  export type ReportsListRelationFilter = {
    every?: reportsWhereInput
    some?: reportsWhereInput
    none?: reportsWhereInput
  }

  export type SettlementsListRelationFilter = {
    every?: settlementsWhereInput
    some?: settlementsWhereInput
    none?: settlementsWhereInput
  }

  export type ExpensesListRelationFilter = {
    every?: expensesWhereInput
    some?: expensesWhereInput
    none?: expensesWhereInput
  }

  export type BalancesListRelationFilter = {
    every?: balancesWhereInput
    some?: balancesWhereInput
    none?: balancesWhereInput
  }

  export type Expense_splitsListRelationFilter = {
    every?: expense_splitsWhereInput
    some?: expense_splitsWhereInput
    none?: expense_splitsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type groupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type group_membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reportsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type settlementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type expensesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type balancesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type expense_splitsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    mobileNumber?: SortOrder
    social_login_provider?: SortOrder
    contact_list?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    mobileNumber?: SortOrder
    social_login_provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    mobileNumber?: SortOrder
    social_login_provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumgroupTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.groupType | EnumgroupTypeFieldRefInput<$PrismaModel>
    in?: $Enums.groupType[] | ListEnumgroupTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.groupType[] | ListEnumgroupTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumgroupTypeFilter<$PrismaModel> | $Enums.groupType
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type groupsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    avatarUrl?: SortOrder
    groupType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type groupsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    avatarUrl?: SortOrder
    groupType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type groupsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    avatarUrl?: SortOrder
    groupType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumgroupTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groupType | EnumgroupTypeFieldRefInput<$PrismaModel>
    in?: $Enums.groupType[] | ListEnumgroupTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.groupType[] | ListEnumgroupTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumgroupTypeWithAggregatesFilter<$PrismaModel> | $Enums.groupType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroupTypeFilter<$PrismaModel>
    _max?: NestedEnumgroupTypeFilter<$PrismaModel>
  }

  export type EnumgroupRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.groupRole | EnumgroupRoleFieldRefInput<$PrismaModel>
    in?: $Enums.groupRole[] | ListEnumgroupRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.groupRole[] | ListEnumgroupRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumgroupRoleFilter<$PrismaModel> | $Enums.groupRole
  }

  export type GroupsScalarRelationFilter = {
    is?: groupsWhereInput
    isNot?: groupsWhereInput
  }

  export type group_membersUser_idGroup_idCompoundUniqueInput = {
    user_id: string
    group_id: string
  }

  export type group_membersCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    isInGroup?: SortOrder
    left_at?: SortOrder
  }

  export type group_membersMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    isInGroup?: SortOrder
    left_at?: SortOrder
  }

  export type group_membersMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    isInGroup?: SortOrder
    left_at?: SortOrder
  }

  export type EnumgroupRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groupRole | EnumgroupRoleFieldRefInput<$PrismaModel>
    in?: $Enums.groupRole[] | ListEnumgroupRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.groupRole[] | ListEnumgroupRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumgroupRoleWithAggregatesFilter<$PrismaModel> | $Enums.groupRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroupRoleFilter<$PrismaModel>
    _max?: NestedEnumgroupRoleFilter<$PrismaModel>
  }

  export type EnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type reportsCountOrderByAggregateInput = {
    id?: SortOrder
    report_type?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
  }

  export type reportsMaxOrderByAggregateInput = {
    id?: SortOrder
    report_type?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
    createdAt?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
  }

  export type reportsMinOrderByAggregateInput = {
    id?: SortOrder
    report_type?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
    createdAt?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type Exchange_ratesListRelationFilter = {
    every?: exchange_ratesWhereInput
    some?: exchange_ratesWhereInput
    none?: exchange_ratesWhereInput
  }

  export type exchange_ratesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type currenciesNameCodeCompoundUniqueInput = {
    name: string
    code: string
  }

  export type currenciesCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type currenciesMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type currenciesMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type CurrenciesScalarRelationFilter = {
    is?: currenciesWhereInput
    isNot?: currenciesWhereInput
  }

  export type exchange_ratesCountOrderByAggregateInput = {
    id?: SortOrder
    from_currency?: SortOrder
    to_currency?: SortOrder
    rate_date?: SortOrder
  }

  export type exchange_ratesMaxOrderByAggregateInput = {
    id?: SortOrder
    from_currency?: SortOrder
    to_currency?: SortOrder
    rate_date?: SortOrder
  }

  export type exchange_ratesMinOrderByAggregateInput = {
    id?: SortOrder
    from_currency?: SortOrder
    to_currency?: SortOrder
    rate_date?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumSettlementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementStatus | EnumSettlementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSettlementStatusFilter<$PrismaModel> | $Enums.SettlementStatus
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type settlementsCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    method?: SortOrder
    settled_at?: SortOrder
    created_at?: SortOrder
    currency_code?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    group_id?: SortOrder
  }

  export type settlementsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type settlementsMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    method?: SortOrder
    settled_at?: SortOrder
    created_at?: SortOrder
    currency_code?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    group_id?: SortOrder
  }

  export type settlementsMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    method?: SortOrder
    settled_at?: SortOrder
    created_at?: SortOrder
    currency_code?: SortOrder
    from_user_id?: SortOrder
    to_user_id?: SortOrder
    group_id?: SortOrder
  }

  export type settlementsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumSettlementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementStatus | EnumSettlementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSettlementStatusWithAggregatesFilter<$PrismaModel> | $Enums.SettlementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSettlementStatusFilter<$PrismaModel>
    _max?: NestedEnumSettlementStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumsplitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.splitType | EnumsplitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.splitType[] | ListEnumsplitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.splitType[] | ListEnumsplitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumsplitTypeFilter<$PrismaModel> | $Enums.splitType
  }

  export type expensesCountOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    created_by?: SortOrder
    paid_by?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    expense_data?: SortOrder
    split_type?: SortOrder
    currency_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type expensesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type expensesMaxOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    created_by?: SortOrder
    paid_by?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    expense_data?: SortOrder
    split_type?: SortOrder
    currency_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type expensesMinOrderByAggregateInput = {
    id?: SortOrder
    group_id?: SortOrder
    created_by?: SortOrder
    paid_by?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    expense_data?: SortOrder
    split_type?: SortOrder
    currency_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type expensesSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumsplitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.splitType | EnumsplitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.splitType[] | ListEnumsplitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.splitType[] | ListEnumsplitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumsplitTypeWithAggregatesFilter<$PrismaModel> | $Enums.splitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsplitTypeFilter<$PrismaModel>
    _max?: NestedEnumsplitTypeFilter<$PrismaModel>
  }

  export type balancesCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    last_update?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    currency_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type balancesAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type balancesMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    last_update?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    currency_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type balancesMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    last_update?: SortOrder
    group_id?: SortOrder
    user_id?: SortOrder
    currency_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type balancesSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type ExpensesScalarRelationFilter = {
    is?: expensesWhereInput
    isNot?: expensesWhereInput
  }

  export type expense_splitsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    own_by?: SortOrder
    amount?: SortOrder
    percentage?: SortOrder
    expense_id?: SortOrder
    exact_amount?: SortOrder
  }

  export type expense_splitsAvgOrderByAggregateInput = {
    amount?: SortOrder
    percentage?: SortOrder
    exact_amount?: SortOrder
  }

  export type expense_splitsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    own_by?: SortOrder
    amount?: SortOrder
    percentage?: SortOrder
    expense_id?: SortOrder
    exact_amount?: SortOrder
  }

  export type expense_splitsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    own_by?: SortOrder
    amount?: SortOrder
    percentage?: SortOrder
    expense_id?: SortOrder
    exact_amount?: SortOrder
  }

  export type expense_splitsSumOrderByAggregateInput = {
    amount?: SortOrder
    percentage?: SortOrder
    exact_amount?: SortOrder
  }

  export type groupsCreateNestedManyWithoutCreatorInput = {
    create?: XOR<groupsCreateWithoutCreatorInput, groupsUncheckedCreateWithoutCreatorInput> | groupsCreateWithoutCreatorInput[] | groupsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutCreatorInput | groupsCreateOrConnectWithoutCreatorInput[]
    createMany?: groupsCreateManyCreatorInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type group_membersCreateNestedManyWithoutUserInput = {
    create?: XOR<group_membersCreateWithoutUserInput, group_membersUncheckedCreateWithoutUserInput> | group_membersCreateWithoutUserInput[] | group_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutUserInput | group_membersCreateOrConnectWithoutUserInput[]
    createMany?: group_membersCreateManyUserInputEnvelope
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
  }

  export type reportsCreateNestedManyWithoutUserInput = {
    create?: XOR<reportsCreateWithoutUserInput, reportsUncheckedCreateWithoutUserInput> | reportsCreateWithoutUserInput[] | reportsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUserInput | reportsCreateOrConnectWithoutUserInput[]
    createMany?: reportsCreateManyUserInputEnvelope
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
  }

  export type settlementsCreateNestedManyWithoutFromUserInput = {
    create?: XOR<settlementsCreateWithoutFromUserInput, settlementsUncheckedCreateWithoutFromUserInput> | settlementsCreateWithoutFromUserInput[] | settlementsUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: settlementsCreateOrConnectWithoutFromUserInput | settlementsCreateOrConnectWithoutFromUserInput[]
    createMany?: settlementsCreateManyFromUserInputEnvelope
    connect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
  }

  export type settlementsCreateNestedManyWithoutToUserInput = {
    create?: XOR<settlementsCreateWithoutToUserInput, settlementsUncheckedCreateWithoutToUserInput> | settlementsCreateWithoutToUserInput[] | settlementsUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: settlementsCreateOrConnectWithoutToUserInput | settlementsCreateOrConnectWithoutToUserInput[]
    createMany?: settlementsCreateManyToUserInputEnvelope
    connect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
  }

  export type expensesCreateNestedManyWithoutUserInput = {
    create?: XOR<expensesCreateWithoutUserInput, expensesUncheckedCreateWithoutUserInput> | expensesCreateWithoutUserInput[] | expensesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUserInput | expensesCreateOrConnectWithoutUserInput[]
    createMany?: expensesCreateManyUserInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type expensesCreateNestedManyWithoutPaidInput = {
    create?: XOR<expensesCreateWithoutPaidInput, expensesUncheckedCreateWithoutPaidInput> | expensesCreateWithoutPaidInput[] | expensesUncheckedCreateWithoutPaidInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutPaidInput | expensesCreateOrConnectWithoutPaidInput[]
    createMany?: expensesCreateManyPaidInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type balancesCreateNestedManyWithoutUserBalancesInput = {
    create?: XOR<balancesCreateWithoutUserBalancesInput, balancesUncheckedCreateWithoutUserBalancesInput> | balancesCreateWithoutUserBalancesInput[] | balancesUncheckedCreateWithoutUserBalancesInput[]
    connectOrCreate?: balancesCreateOrConnectWithoutUserBalancesInput | balancesCreateOrConnectWithoutUserBalancesInput[]
    createMany?: balancesCreateManyUserBalancesInputEnvelope
    connect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
  }

  export type expense_splitsCreateNestedManyWithoutSplitUserIdInput = {
    create?: XOR<expense_splitsCreateWithoutSplitUserIdInput, expense_splitsUncheckedCreateWithoutSplitUserIdInput> | expense_splitsCreateWithoutSplitUserIdInput[] | expense_splitsUncheckedCreateWithoutSplitUserIdInput[]
    connectOrCreate?: expense_splitsCreateOrConnectWithoutSplitUserIdInput | expense_splitsCreateOrConnectWithoutSplitUserIdInput[]
    createMany?: expense_splitsCreateManySplitUserIdInputEnvelope
    connect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
  }

  export type expense_splitsCreateNestedManyWithoutSplitOwnerInput = {
    create?: XOR<expense_splitsCreateWithoutSplitOwnerInput, expense_splitsUncheckedCreateWithoutSplitOwnerInput> | expense_splitsCreateWithoutSplitOwnerInput[] | expense_splitsUncheckedCreateWithoutSplitOwnerInput[]
    connectOrCreate?: expense_splitsCreateOrConnectWithoutSplitOwnerInput | expense_splitsCreateOrConnectWithoutSplitOwnerInput[]
    createMany?: expense_splitsCreateManySplitOwnerInputEnvelope
    connect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
  }

  export type groupsUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<groupsCreateWithoutCreatorInput, groupsUncheckedCreateWithoutCreatorInput> | groupsCreateWithoutCreatorInput[] | groupsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutCreatorInput | groupsCreateOrConnectWithoutCreatorInput[]
    createMany?: groupsCreateManyCreatorInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type group_membersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<group_membersCreateWithoutUserInput, group_membersUncheckedCreateWithoutUserInput> | group_membersCreateWithoutUserInput[] | group_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutUserInput | group_membersCreateOrConnectWithoutUserInput[]
    createMany?: group_membersCreateManyUserInputEnvelope
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
  }

  export type reportsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<reportsCreateWithoutUserInput, reportsUncheckedCreateWithoutUserInput> | reportsCreateWithoutUserInput[] | reportsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUserInput | reportsCreateOrConnectWithoutUserInput[]
    createMany?: reportsCreateManyUserInputEnvelope
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
  }

  export type settlementsUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<settlementsCreateWithoutFromUserInput, settlementsUncheckedCreateWithoutFromUserInput> | settlementsCreateWithoutFromUserInput[] | settlementsUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: settlementsCreateOrConnectWithoutFromUserInput | settlementsCreateOrConnectWithoutFromUserInput[]
    createMany?: settlementsCreateManyFromUserInputEnvelope
    connect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
  }

  export type settlementsUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<settlementsCreateWithoutToUserInput, settlementsUncheckedCreateWithoutToUserInput> | settlementsCreateWithoutToUserInput[] | settlementsUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: settlementsCreateOrConnectWithoutToUserInput | settlementsCreateOrConnectWithoutToUserInput[]
    createMany?: settlementsCreateManyToUserInputEnvelope
    connect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
  }

  export type expensesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<expensesCreateWithoutUserInput, expensesUncheckedCreateWithoutUserInput> | expensesCreateWithoutUserInput[] | expensesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUserInput | expensesCreateOrConnectWithoutUserInput[]
    createMany?: expensesCreateManyUserInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type expensesUncheckedCreateNestedManyWithoutPaidInput = {
    create?: XOR<expensesCreateWithoutPaidInput, expensesUncheckedCreateWithoutPaidInput> | expensesCreateWithoutPaidInput[] | expensesUncheckedCreateWithoutPaidInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutPaidInput | expensesCreateOrConnectWithoutPaidInput[]
    createMany?: expensesCreateManyPaidInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type balancesUncheckedCreateNestedManyWithoutUserBalancesInput = {
    create?: XOR<balancesCreateWithoutUserBalancesInput, balancesUncheckedCreateWithoutUserBalancesInput> | balancesCreateWithoutUserBalancesInput[] | balancesUncheckedCreateWithoutUserBalancesInput[]
    connectOrCreate?: balancesCreateOrConnectWithoutUserBalancesInput | balancesCreateOrConnectWithoutUserBalancesInput[]
    createMany?: balancesCreateManyUserBalancesInputEnvelope
    connect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
  }

  export type expense_splitsUncheckedCreateNestedManyWithoutSplitUserIdInput = {
    create?: XOR<expense_splitsCreateWithoutSplitUserIdInput, expense_splitsUncheckedCreateWithoutSplitUserIdInput> | expense_splitsCreateWithoutSplitUserIdInput[] | expense_splitsUncheckedCreateWithoutSplitUserIdInput[]
    connectOrCreate?: expense_splitsCreateOrConnectWithoutSplitUserIdInput | expense_splitsCreateOrConnectWithoutSplitUserIdInput[]
    createMany?: expense_splitsCreateManySplitUserIdInputEnvelope
    connect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
  }

  export type expense_splitsUncheckedCreateNestedManyWithoutSplitOwnerInput = {
    create?: XOR<expense_splitsCreateWithoutSplitOwnerInput, expense_splitsUncheckedCreateWithoutSplitOwnerInput> | expense_splitsCreateWithoutSplitOwnerInput[] | expense_splitsUncheckedCreateWithoutSplitOwnerInput[]
    connectOrCreate?: expense_splitsCreateOrConnectWithoutSplitOwnerInput | expense_splitsCreateOrConnectWithoutSplitOwnerInput[]
    createMany?: expense_splitsCreateManySplitOwnerInputEnvelope
    connect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type groupsUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<groupsCreateWithoutCreatorInput, groupsUncheckedCreateWithoutCreatorInput> | groupsCreateWithoutCreatorInput[] | groupsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutCreatorInput | groupsCreateOrConnectWithoutCreatorInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutCreatorInput | groupsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: groupsCreateManyCreatorInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutCreatorInput | groupsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutCreatorInput | groupsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type group_membersUpdateManyWithoutUserNestedInput = {
    create?: XOR<group_membersCreateWithoutUserInput, group_membersUncheckedCreateWithoutUserInput> | group_membersCreateWithoutUserInput[] | group_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutUserInput | group_membersCreateOrConnectWithoutUserInput[]
    upsert?: group_membersUpsertWithWhereUniqueWithoutUserInput | group_membersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: group_membersCreateManyUserInputEnvelope
    set?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    disconnect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    delete?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    update?: group_membersUpdateWithWhereUniqueWithoutUserInput | group_membersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: group_membersUpdateManyWithWhereWithoutUserInput | group_membersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: group_membersScalarWhereInput | group_membersScalarWhereInput[]
  }

  export type reportsUpdateManyWithoutUserNestedInput = {
    create?: XOR<reportsCreateWithoutUserInput, reportsUncheckedCreateWithoutUserInput> | reportsCreateWithoutUserInput[] | reportsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUserInput | reportsCreateOrConnectWithoutUserInput[]
    upsert?: reportsUpsertWithWhereUniqueWithoutUserInput | reportsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reportsCreateManyUserInputEnvelope
    set?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    disconnect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    delete?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    update?: reportsUpdateWithWhereUniqueWithoutUserInput | reportsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reportsUpdateManyWithWhereWithoutUserInput | reportsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reportsScalarWhereInput | reportsScalarWhereInput[]
  }

  export type settlementsUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<settlementsCreateWithoutFromUserInput, settlementsUncheckedCreateWithoutFromUserInput> | settlementsCreateWithoutFromUserInput[] | settlementsUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: settlementsCreateOrConnectWithoutFromUserInput | settlementsCreateOrConnectWithoutFromUserInput[]
    upsert?: settlementsUpsertWithWhereUniqueWithoutFromUserInput | settlementsUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: settlementsCreateManyFromUserInputEnvelope
    set?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    disconnect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    delete?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    connect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    update?: settlementsUpdateWithWhereUniqueWithoutFromUserInput | settlementsUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: settlementsUpdateManyWithWhereWithoutFromUserInput | settlementsUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: settlementsScalarWhereInput | settlementsScalarWhereInput[]
  }

  export type settlementsUpdateManyWithoutToUserNestedInput = {
    create?: XOR<settlementsCreateWithoutToUserInput, settlementsUncheckedCreateWithoutToUserInput> | settlementsCreateWithoutToUserInput[] | settlementsUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: settlementsCreateOrConnectWithoutToUserInput | settlementsCreateOrConnectWithoutToUserInput[]
    upsert?: settlementsUpsertWithWhereUniqueWithoutToUserInput | settlementsUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: settlementsCreateManyToUserInputEnvelope
    set?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    disconnect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    delete?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    connect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    update?: settlementsUpdateWithWhereUniqueWithoutToUserInput | settlementsUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: settlementsUpdateManyWithWhereWithoutToUserInput | settlementsUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: settlementsScalarWhereInput | settlementsScalarWhereInput[]
  }

  export type expensesUpdateManyWithoutUserNestedInput = {
    create?: XOR<expensesCreateWithoutUserInput, expensesUncheckedCreateWithoutUserInput> | expensesCreateWithoutUserInput[] | expensesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUserInput | expensesCreateOrConnectWithoutUserInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutUserInput | expensesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: expensesCreateManyUserInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutUserInput | expensesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutUserInput | expensesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type expensesUpdateManyWithoutPaidNestedInput = {
    create?: XOR<expensesCreateWithoutPaidInput, expensesUncheckedCreateWithoutPaidInput> | expensesCreateWithoutPaidInput[] | expensesUncheckedCreateWithoutPaidInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutPaidInput | expensesCreateOrConnectWithoutPaidInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutPaidInput | expensesUpsertWithWhereUniqueWithoutPaidInput[]
    createMany?: expensesCreateManyPaidInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutPaidInput | expensesUpdateWithWhereUniqueWithoutPaidInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutPaidInput | expensesUpdateManyWithWhereWithoutPaidInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type balancesUpdateManyWithoutUserBalancesNestedInput = {
    create?: XOR<balancesCreateWithoutUserBalancesInput, balancesUncheckedCreateWithoutUserBalancesInput> | balancesCreateWithoutUserBalancesInput[] | balancesUncheckedCreateWithoutUserBalancesInput[]
    connectOrCreate?: balancesCreateOrConnectWithoutUserBalancesInput | balancesCreateOrConnectWithoutUserBalancesInput[]
    upsert?: balancesUpsertWithWhereUniqueWithoutUserBalancesInput | balancesUpsertWithWhereUniqueWithoutUserBalancesInput[]
    createMany?: balancesCreateManyUserBalancesInputEnvelope
    set?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    disconnect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    delete?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    connect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    update?: balancesUpdateWithWhereUniqueWithoutUserBalancesInput | balancesUpdateWithWhereUniqueWithoutUserBalancesInput[]
    updateMany?: balancesUpdateManyWithWhereWithoutUserBalancesInput | balancesUpdateManyWithWhereWithoutUserBalancesInput[]
    deleteMany?: balancesScalarWhereInput | balancesScalarWhereInput[]
  }

  export type expense_splitsUpdateManyWithoutSplitUserIdNestedInput = {
    create?: XOR<expense_splitsCreateWithoutSplitUserIdInput, expense_splitsUncheckedCreateWithoutSplitUserIdInput> | expense_splitsCreateWithoutSplitUserIdInput[] | expense_splitsUncheckedCreateWithoutSplitUserIdInput[]
    connectOrCreate?: expense_splitsCreateOrConnectWithoutSplitUserIdInput | expense_splitsCreateOrConnectWithoutSplitUserIdInput[]
    upsert?: expense_splitsUpsertWithWhereUniqueWithoutSplitUserIdInput | expense_splitsUpsertWithWhereUniqueWithoutSplitUserIdInput[]
    createMany?: expense_splitsCreateManySplitUserIdInputEnvelope
    set?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    disconnect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    delete?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    connect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    update?: expense_splitsUpdateWithWhereUniqueWithoutSplitUserIdInput | expense_splitsUpdateWithWhereUniqueWithoutSplitUserIdInput[]
    updateMany?: expense_splitsUpdateManyWithWhereWithoutSplitUserIdInput | expense_splitsUpdateManyWithWhereWithoutSplitUserIdInput[]
    deleteMany?: expense_splitsScalarWhereInput | expense_splitsScalarWhereInput[]
  }

  export type expense_splitsUpdateManyWithoutSplitOwnerNestedInput = {
    create?: XOR<expense_splitsCreateWithoutSplitOwnerInput, expense_splitsUncheckedCreateWithoutSplitOwnerInput> | expense_splitsCreateWithoutSplitOwnerInput[] | expense_splitsUncheckedCreateWithoutSplitOwnerInput[]
    connectOrCreate?: expense_splitsCreateOrConnectWithoutSplitOwnerInput | expense_splitsCreateOrConnectWithoutSplitOwnerInput[]
    upsert?: expense_splitsUpsertWithWhereUniqueWithoutSplitOwnerInput | expense_splitsUpsertWithWhereUniqueWithoutSplitOwnerInput[]
    createMany?: expense_splitsCreateManySplitOwnerInputEnvelope
    set?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    disconnect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    delete?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    connect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    update?: expense_splitsUpdateWithWhereUniqueWithoutSplitOwnerInput | expense_splitsUpdateWithWhereUniqueWithoutSplitOwnerInput[]
    updateMany?: expense_splitsUpdateManyWithWhereWithoutSplitOwnerInput | expense_splitsUpdateManyWithWhereWithoutSplitOwnerInput[]
    deleteMany?: expense_splitsScalarWhereInput | expense_splitsScalarWhereInput[]
  }

  export type groupsUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<groupsCreateWithoutCreatorInput, groupsUncheckedCreateWithoutCreatorInput> | groupsCreateWithoutCreatorInput[] | groupsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutCreatorInput | groupsCreateOrConnectWithoutCreatorInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutCreatorInput | groupsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: groupsCreateManyCreatorInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutCreatorInput | groupsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutCreatorInput | groupsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type group_membersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<group_membersCreateWithoutUserInput, group_membersUncheckedCreateWithoutUserInput> | group_membersCreateWithoutUserInput[] | group_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutUserInput | group_membersCreateOrConnectWithoutUserInput[]
    upsert?: group_membersUpsertWithWhereUniqueWithoutUserInput | group_membersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: group_membersCreateManyUserInputEnvelope
    set?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    disconnect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    delete?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    update?: group_membersUpdateWithWhereUniqueWithoutUserInput | group_membersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: group_membersUpdateManyWithWhereWithoutUserInput | group_membersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: group_membersScalarWhereInput | group_membersScalarWhereInput[]
  }

  export type reportsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<reportsCreateWithoutUserInput, reportsUncheckedCreateWithoutUserInput> | reportsCreateWithoutUserInput[] | reportsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutUserInput | reportsCreateOrConnectWithoutUserInput[]
    upsert?: reportsUpsertWithWhereUniqueWithoutUserInput | reportsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: reportsCreateManyUserInputEnvelope
    set?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    disconnect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    delete?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    update?: reportsUpdateWithWhereUniqueWithoutUserInput | reportsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: reportsUpdateManyWithWhereWithoutUserInput | reportsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: reportsScalarWhereInput | reportsScalarWhereInput[]
  }

  export type settlementsUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<settlementsCreateWithoutFromUserInput, settlementsUncheckedCreateWithoutFromUserInput> | settlementsCreateWithoutFromUserInput[] | settlementsUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: settlementsCreateOrConnectWithoutFromUserInput | settlementsCreateOrConnectWithoutFromUserInput[]
    upsert?: settlementsUpsertWithWhereUniqueWithoutFromUserInput | settlementsUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: settlementsCreateManyFromUserInputEnvelope
    set?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    disconnect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    delete?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    connect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    update?: settlementsUpdateWithWhereUniqueWithoutFromUserInput | settlementsUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: settlementsUpdateManyWithWhereWithoutFromUserInput | settlementsUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: settlementsScalarWhereInput | settlementsScalarWhereInput[]
  }

  export type settlementsUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<settlementsCreateWithoutToUserInput, settlementsUncheckedCreateWithoutToUserInput> | settlementsCreateWithoutToUserInput[] | settlementsUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: settlementsCreateOrConnectWithoutToUserInput | settlementsCreateOrConnectWithoutToUserInput[]
    upsert?: settlementsUpsertWithWhereUniqueWithoutToUserInput | settlementsUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: settlementsCreateManyToUserInputEnvelope
    set?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    disconnect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    delete?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    connect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    update?: settlementsUpdateWithWhereUniqueWithoutToUserInput | settlementsUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: settlementsUpdateManyWithWhereWithoutToUserInput | settlementsUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: settlementsScalarWhereInput | settlementsScalarWhereInput[]
  }

  export type expensesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<expensesCreateWithoutUserInput, expensesUncheckedCreateWithoutUserInput> | expensesCreateWithoutUserInput[] | expensesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUserInput | expensesCreateOrConnectWithoutUserInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutUserInput | expensesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: expensesCreateManyUserInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutUserInput | expensesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutUserInput | expensesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type expensesUncheckedUpdateManyWithoutPaidNestedInput = {
    create?: XOR<expensesCreateWithoutPaidInput, expensesUncheckedCreateWithoutPaidInput> | expensesCreateWithoutPaidInput[] | expensesUncheckedCreateWithoutPaidInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutPaidInput | expensesCreateOrConnectWithoutPaidInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutPaidInput | expensesUpsertWithWhereUniqueWithoutPaidInput[]
    createMany?: expensesCreateManyPaidInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutPaidInput | expensesUpdateWithWhereUniqueWithoutPaidInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutPaidInput | expensesUpdateManyWithWhereWithoutPaidInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type balancesUncheckedUpdateManyWithoutUserBalancesNestedInput = {
    create?: XOR<balancesCreateWithoutUserBalancesInput, balancesUncheckedCreateWithoutUserBalancesInput> | balancesCreateWithoutUserBalancesInput[] | balancesUncheckedCreateWithoutUserBalancesInput[]
    connectOrCreate?: balancesCreateOrConnectWithoutUserBalancesInput | balancesCreateOrConnectWithoutUserBalancesInput[]
    upsert?: balancesUpsertWithWhereUniqueWithoutUserBalancesInput | balancesUpsertWithWhereUniqueWithoutUserBalancesInput[]
    createMany?: balancesCreateManyUserBalancesInputEnvelope
    set?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    disconnect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    delete?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    connect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    update?: balancesUpdateWithWhereUniqueWithoutUserBalancesInput | balancesUpdateWithWhereUniqueWithoutUserBalancesInput[]
    updateMany?: balancesUpdateManyWithWhereWithoutUserBalancesInput | balancesUpdateManyWithWhereWithoutUserBalancesInput[]
    deleteMany?: balancesScalarWhereInput | balancesScalarWhereInput[]
  }

  export type expense_splitsUncheckedUpdateManyWithoutSplitUserIdNestedInput = {
    create?: XOR<expense_splitsCreateWithoutSplitUserIdInput, expense_splitsUncheckedCreateWithoutSplitUserIdInput> | expense_splitsCreateWithoutSplitUserIdInput[] | expense_splitsUncheckedCreateWithoutSplitUserIdInput[]
    connectOrCreate?: expense_splitsCreateOrConnectWithoutSplitUserIdInput | expense_splitsCreateOrConnectWithoutSplitUserIdInput[]
    upsert?: expense_splitsUpsertWithWhereUniqueWithoutSplitUserIdInput | expense_splitsUpsertWithWhereUniqueWithoutSplitUserIdInput[]
    createMany?: expense_splitsCreateManySplitUserIdInputEnvelope
    set?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    disconnect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    delete?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    connect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    update?: expense_splitsUpdateWithWhereUniqueWithoutSplitUserIdInput | expense_splitsUpdateWithWhereUniqueWithoutSplitUserIdInput[]
    updateMany?: expense_splitsUpdateManyWithWhereWithoutSplitUserIdInput | expense_splitsUpdateManyWithWhereWithoutSplitUserIdInput[]
    deleteMany?: expense_splitsScalarWhereInput | expense_splitsScalarWhereInput[]
  }

  export type expense_splitsUncheckedUpdateManyWithoutSplitOwnerNestedInput = {
    create?: XOR<expense_splitsCreateWithoutSplitOwnerInput, expense_splitsUncheckedCreateWithoutSplitOwnerInput> | expense_splitsCreateWithoutSplitOwnerInput[] | expense_splitsUncheckedCreateWithoutSplitOwnerInput[]
    connectOrCreate?: expense_splitsCreateOrConnectWithoutSplitOwnerInput | expense_splitsCreateOrConnectWithoutSplitOwnerInput[]
    upsert?: expense_splitsUpsertWithWhereUniqueWithoutSplitOwnerInput | expense_splitsUpsertWithWhereUniqueWithoutSplitOwnerInput[]
    createMany?: expense_splitsCreateManySplitOwnerInputEnvelope
    set?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    disconnect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    delete?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    connect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    update?: expense_splitsUpdateWithWhereUniqueWithoutSplitOwnerInput | expense_splitsUpdateWithWhereUniqueWithoutSplitOwnerInput[]
    updateMany?: expense_splitsUpdateManyWithWhereWithoutSplitOwnerInput | expense_splitsUpdateManyWithWhereWithoutSplitOwnerInput[]
    deleteMany?: expense_splitsScalarWhereInput | expense_splitsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutCreatedGroupsInput = {
    create?: XOR<usersCreateWithoutCreatedGroupsInput, usersUncheckedCreateWithoutCreatedGroupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCreatedGroupsInput
    connect?: usersWhereUniqueInput
  }

  export type group_membersCreateNestedManyWithoutGroupInput = {
    create?: XOR<group_membersCreateWithoutGroupInput, group_membersUncheckedCreateWithoutGroupInput> | group_membersCreateWithoutGroupInput[] | group_membersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutGroupInput | group_membersCreateOrConnectWithoutGroupInput[]
    createMany?: group_membersCreateManyGroupInputEnvelope
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
  }

  export type reportsCreateNestedManyWithoutGroupInput = {
    create?: XOR<reportsCreateWithoutGroupInput, reportsUncheckedCreateWithoutGroupInput> | reportsCreateWithoutGroupInput[] | reportsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutGroupInput | reportsCreateOrConnectWithoutGroupInput[]
    createMany?: reportsCreateManyGroupInputEnvelope
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
  }

  export type settlementsCreateNestedManyWithoutGroupInput = {
    create?: XOR<settlementsCreateWithoutGroupInput, settlementsUncheckedCreateWithoutGroupInput> | settlementsCreateWithoutGroupInput[] | settlementsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: settlementsCreateOrConnectWithoutGroupInput | settlementsCreateOrConnectWithoutGroupInput[]
    createMany?: settlementsCreateManyGroupInputEnvelope
    connect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
  }

  export type expensesCreateNestedManyWithoutGroupInput = {
    create?: XOR<expensesCreateWithoutGroupInput, expensesUncheckedCreateWithoutGroupInput> | expensesCreateWithoutGroupInput[] | expensesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutGroupInput | expensesCreateOrConnectWithoutGroupInput[]
    createMany?: expensesCreateManyGroupInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type balancesCreateNestedManyWithoutGroupBalancesInput = {
    create?: XOR<balancesCreateWithoutGroupBalancesInput, balancesUncheckedCreateWithoutGroupBalancesInput> | balancesCreateWithoutGroupBalancesInput[] | balancesUncheckedCreateWithoutGroupBalancesInput[]
    connectOrCreate?: balancesCreateOrConnectWithoutGroupBalancesInput | balancesCreateOrConnectWithoutGroupBalancesInput[]
    createMany?: balancesCreateManyGroupBalancesInputEnvelope
    connect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
  }

  export type group_membersUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<group_membersCreateWithoutGroupInput, group_membersUncheckedCreateWithoutGroupInput> | group_membersCreateWithoutGroupInput[] | group_membersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutGroupInput | group_membersCreateOrConnectWithoutGroupInput[]
    createMany?: group_membersCreateManyGroupInputEnvelope
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
  }

  export type reportsUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<reportsCreateWithoutGroupInput, reportsUncheckedCreateWithoutGroupInput> | reportsCreateWithoutGroupInput[] | reportsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutGroupInput | reportsCreateOrConnectWithoutGroupInput[]
    createMany?: reportsCreateManyGroupInputEnvelope
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
  }

  export type settlementsUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<settlementsCreateWithoutGroupInput, settlementsUncheckedCreateWithoutGroupInput> | settlementsCreateWithoutGroupInput[] | settlementsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: settlementsCreateOrConnectWithoutGroupInput | settlementsCreateOrConnectWithoutGroupInput[]
    createMany?: settlementsCreateManyGroupInputEnvelope
    connect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
  }

  export type expensesUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<expensesCreateWithoutGroupInput, expensesUncheckedCreateWithoutGroupInput> | expensesCreateWithoutGroupInput[] | expensesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutGroupInput | expensesCreateOrConnectWithoutGroupInput[]
    createMany?: expensesCreateManyGroupInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type balancesUncheckedCreateNestedManyWithoutGroupBalancesInput = {
    create?: XOR<balancesCreateWithoutGroupBalancesInput, balancesUncheckedCreateWithoutGroupBalancesInput> | balancesCreateWithoutGroupBalancesInput[] | balancesUncheckedCreateWithoutGroupBalancesInput[]
    connectOrCreate?: balancesCreateOrConnectWithoutGroupBalancesInput | balancesCreateOrConnectWithoutGroupBalancesInput[]
    createMany?: balancesCreateManyGroupBalancesInputEnvelope
    connect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumgroupTypeFieldUpdateOperationsInput = {
    set?: $Enums.groupType
  }

  export type usersUpdateOneRequiredWithoutCreatedGroupsNestedInput = {
    create?: XOR<usersCreateWithoutCreatedGroupsInput, usersUncheckedCreateWithoutCreatedGroupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCreatedGroupsInput
    upsert?: usersUpsertWithoutCreatedGroupsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCreatedGroupsInput, usersUpdateWithoutCreatedGroupsInput>, usersUncheckedUpdateWithoutCreatedGroupsInput>
  }

  export type group_membersUpdateManyWithoutGroupNestedInput = {
    create?: XOR<group_membersCreateWithoutGroupInput, group_membersUncheckedCreateWithoutGroupInput> | group_membersCreateWithoutGroupInput[] | group_membersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutGroupInput | group_membersCreateOrConnectWithoutGroupInput[]
    upsert?: group_membersUpsertWithWhereUniqueWithoutGroupInput | group_membersUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: group_membersCreateManyGroupInputEnvelope
    set?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    disconnect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    delete?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    update?: group_membersUpdateWithWhereUniqueWithoutGroupInput | group_membersUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: group_membersUpdateManyWithWhereWithoutGroupInput | group_membersUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: group_membersScalarWhereInput | group_membersScalarWhereInput[]
  }

  export type reportsUpdateManyWithoutGroupNestedInput = {
    create?: XOR<reportsCreateWithoutGroupInput, reportsUncheckedCreateWithoutGroupInput> | reportsCreateWithoutGroupInput[] | reportsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutGroupInput | reportsCreateOrConnectWithoutGroupInput[]
    upsert?: reportsUpsertWithWhereUniqueWithoutGroupInput | reportsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: reportsCreateManyGroupInputEnvelope
    set?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    disconnect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    delete?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    update?: reportsUpdateWithWhereUniqueWithoutGroupInput | reportsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: reportsUpdateManyWithWhereWithoutGroupInput | reportsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: reportsScalarWhereInput | reportsScalarWhereInput[]
  }

  export type settlementsUpdateManyWithoutGroupNestedInput = {
    create?: XOR<settlementsCreateWithoutGroupInput, settlementsUncheckedCreateWithoutGroupInput> | settlementsCreateWithoutGroupInput[] | settlementsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: settlementsCreateOrConnectWithoutGroupInput | settlementsCreateOrConnectWithoutGroupInput[]
    upsert?: settlementsUpsertWithWhereUniqueWithoutGroupInput | settlementsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: settlementsCreateManyGroupInputEnvelope
    set?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    disconnect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    delete?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    connect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    update?: settlementsUpdateWithWhereUniqueWithoutGroupInput | settlementsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: settlementsUpdateManyWithWhereWithoutGroupInput | settlementsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: settlementsScalarWhereInput | settlementsScalarWhereInput[]
  }

  export type expensesUpdateManyWithoutGroupNestedInput = {
    create?: XOR<expensesCreateWithoutGroupInput, expensesUncheckedCreateWithoutGroupInput> | expensesCreateWithoutGroupInput[] | expensesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutGroupInput | expensesCreateOrConnectWithoutGroupInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutGroupInput | expensesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: expensesCreateManyGroupInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutGroupInput | expensesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutGroupInput | expensesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type balancesUpdateManyWithoutGroupBalancesNestedInput = {
    create?: XOR<balancesCreateWithoutGroupBalancesInput, balancesUncheckedCreateWithoutGroupBalancesInput> | balancesCreateWithoutGroupBalancesInput[] | balancesUncheckedCreateWithoutGroupBalancesInput[]
    connectOrCreate?: balancesCreateOrConnectWithoutGroupBalancesInput | balancesCreateOrConnectWithoutGroupBalancesInput[]
    upsert?: balancesUpsertWithWhereUniqueWithoutGroupBalancesInput | balancesUpsertWithWhereUniqueWithoutGroupBalancesInput[]
    createMany?: balancesCreateManyGroupBalancesInputEnvelope
    set?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    disconnect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    delete?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    connect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    update?: balancesUpdateWithWhereUniqueWithoutGroupBalancesInput | balancesUpdateWithWhereUniqueWithoutGroupBalancesInput[]
    updateMany?: balancesUpdateManyWithWhereWithoutGroupBalancesInput | balancesUpdateManyWithWhereWithoutGroupBalancesInput[]
    deleteMany?: balancesScalarWhereInput | balancesScalarWhereInput[]
  }

  export type group_membersUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<group_membersCreateWithoutGroupInput, group_membersUncheckedCreateWithoutGroupInput> | group_membersCreateWithoutGroupInput[] | group_membersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutGroupInput | group_membersCreateOrConnectWithoutGroupInput[]
    upsert?: group_membersUpsertWithWhereUniqueWithoutGroupInput | group_membersUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: group_membersCreateManyGroupInputEnvelope
    set?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    disconnect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    delete?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    update?: group_membersUpdateWithWhereUniqueWithoutGroupInput | group_membersUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: group_membersUpdateManyWithWhereWithoutGroupInput | group_membersUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: group_membersScalarWhereInput | group_membersScalarWhereInput[]
  }

  export type reportsUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<reportsCreateWithoutGroupInput, reportsUncheckedCreateWithoutGroupInput> | reportsCreateWithoutGroupInput[] | reportsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: reportsCreateOrConnectWithoutGroupInput | reportsCreateOrConnectWithoutGroupInput[]
    upsert?: reportsUpsertWithWhereUniqueWithoutGroupInput | reportsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: reportsCreateManyGroupInputEnvelope
    set?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    disconnect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    delete?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    connect?: reportsWhereUniqueInput | reportsWhereUniqueInput[]
    update?: reportsUpdateWithWhereUniqueWithoutGroupInput | reportsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: reportsUpdateManyWithWhereWithoutGroupInput | reportsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: reportsScalarWhereInput | reportsScalarWhereInput[]
  }

  export type settlementsUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<settlementsCreateWithoutGroupInput, settlementsUncheckedCreateWithoutGroupInput> | settlementsCreateWithoutGroupInput[] | settlementsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: settlementsCreateOrConnectWithoutGroupInput | settlementsCreateOrConnectWithoutGroupInput[]
    upsert?: settlementsUpsertWithWhereUniqueWithoutGroupInput | settlementsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: settlementsCreateManyGroupInputEnvelope
    set?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    disconnect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    delete?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    connect?: settlementsWhereUniqueInput | settlementsWhereUniqueInput[]
    update?: settlementsUpdateWithWhereUniqueWithoutGroupInput | settlementsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: settlementsUpdateManyWithWhereWithoutGroupInput | settlementsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: settlementsScalarWhereInput | settlementsScalarWhereInput[]
  }

  export type expensesUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<expensesCreateWithoutGroupInput, expensesUncheckedCreateWithoutGroupInput> | expensesCreateWithoutGroupInput[] | expensesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutGroupInput | expensesCreateOrConnectWithoutGroupInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutGroupInput | expensesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: expensesCreateManyGroupInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutGroupInput | expensesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutGroupInput | expensesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type balancesUncheckedUpdateManyWithoutGroupBalancesNestedInput = {
    create?: XOR<balancesCreateWithoutGroupBalancesInput, balancesUncheckedCreateWithoutGroupBalancesInput> | balancesCreateWithoutGroupBalancesInput[] | balancesUncheckedCreateWithoutGroupBalancesInput[]
    connectOrCreate?: balancesCreateOrConnectWithoutGroupBalancesInput | balancesCreateOrConnectWithoutGroupBalancesInput[]
    upsert?: balancesUpsertWithWhereUniqueWithoutGroupBalancesInput | balancesUpsertWithWhereUniqueWithoutGroupBalancesInput[]
    createMany?: balancesCreateManyGroupBalancesInputEnvelope
    set?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    disconnect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    delete?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    connect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    update?: balancesUpdateWithWhereUniqueWithoutGroupBalancesInput | balancesUpdateWithWhereUniqueWithoutGroupBalancesInput[]
    updateMany?: balancesUpdateManyWithWhereWithoutGroupBalancesInput | balancesUpdateManyWithWhereWithoutGroupBalancesInput[]
    deleteMany?: balancesScalarWhereInput | balancesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutGroupmembersInput = {
    create?: XOR<usersCreateWithoutGroupmembersInput, usersUncheckedCreateWithoutGroupmembersInput>
    connectOrCreate?: usersCreateOrConnectWithoutGroupmembersInput
    connect?: usersWhereUniqueInput
  }

  export type groupsCreateNestedOneWithoutMemberInput = {
    create?: XOR<groupsCreateWithoutMemberInput, groupsUncheckedCreateWithoutMemberInput>
    connectOrCreate?: groupsCreateOrConnectWithoutMemberInput
    connect?: groupsWhereUniqueInput
  }

  export type EnumgroupRoleFieldUpdateOperationsInput = {
    set?: $Enums.groupRole
  }

  export type usersUpdateOneRequiredWithoutGroupmembersNestedInput = {
    create?: XOR<usersCreateWithoutGroupmembersInput, usersUncheckedCreateWithoutGroupmembersInput>
    connectOrCreate?: usersCreateOrConnectWithoutGroupmembersInput
    upsert?: usersUpsertWithoutGroupmembersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGroupmembersInput, usersUpdateWithoutGroupmembersInput>, usersUncheckedUpdateWithoutGroupmembersInput>
  }

  export type groupsUpdateOneRequiredWithoutMemberNestedInput = {
    create?: XOR<groupsCreateWithoutMemberInput, groupsUncheckedCreateWithoutMemberInput>
    connectOrCreate?: groupsCreateOrConnectWithoutMemberInput
    upsert?: groupsUpsertWithoutMemberInput
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutMemberInput, groupsUpdateWithoutMemberInput>, groupsUncheckedUpdateWithoutMemberInput>
  }

  export type usersCreateNestedOneWithoutReportsInput = {
    create?: XOR<usersCreateWithoutReportsInput, usersUncheckedCreateWithoutReportsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReportsInput
    connect?: usersWhereUniqueInput
  }

  export type groupsCreateNestedOneWithoutReportsInput = {
    create?: XOR<groupsCreateWithoutReportsInput, groupsUncheckedCreateWithoutReportsInput>
    connectOrCreate?: groupsCreateOrConnectWithoutReportsInput
    connect?: groupsWhereUniqueInput
  }

  export type EnumReportTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReportType
  }

  export type usersUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<usersCreateWithoutReportsInput, usersUncheckedCreateWithoutReportsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReportsInput
    upsert?: usersUpsertWithoutReportsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReportsInput, usersUpdateWithoutReportsInput>, usersUncheckedUpdateWithoutReportsInput>
  }

  export type groupsUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<groupsCreateWithoutReportsInput, groupsUncheckedCreateWithoutReportsInput>
    connectOrCreate?: groupsCreateOrConnectWithoutReportsInput
    upsert?: groupsUpsertWithoutReportsInput
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutReportsInput, groupsUpdateWithoutReportsInput>, groupsUncheckedUpdateWithoutReportsInput>
  }

  export type exchange_ratesCreateNestedManyWithoutFromCurrencyInput = {
    create?: XOR<exchange_ratesCreateWithoutFromCurrencyInput, exchange_ratesUncheckedCreateWithoutFromCurrencyInput> | exchange_ratesCreateWithoutFromCurrencyInput[] | exchange_ratesUncheckedCreateWithoutFromCurrencyInput[]
    connectOrCreate?: exchange_ratesCreateOrConnectWithoutFromCurrencyInput | exchange_ratesCreateOrConnectWithoutFromCurrencyInput[]
    createMany?: exchange_ratesCreateManyFromCurrencyInputEnvelope
    connect?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
  }

  export type exchange_ratesCreateNestedManyWithoutToCurrencyInput = {
    create?: XOR<exchange_ratesCreateWithoutToCurrencyInput, exchange_ratesUncheckedCreateWithoutToCurrencyInput> | exchange_ratesCreateWithoutToCurrencyInput[] | exchange_ratesUncheckedCreateWithoutToCurrencyInput[]
    connectOrCreate?: exchange_ratesCreateOrConnectWithoutToCurrencyInput | exchange_ratesCreateOrConnectWithoutToCurrencyInput[]
    createMany?: exchange_ratesCreateManyToCurrencyInputEnvelope
    connect?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
  }

  export type expensesCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<expensesCreateWithoutCurrencyInput, expensesUncheckedCreateWithoutCurrencyInput> | expensesCreateWithoutCurrencyInput[] | expensesUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutCurrencyInput | expensesCreateOrConnectWithoutCurrencyInput[]
    createMany?: expensesCreateManyCurrencyInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type balancesCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<balancesCreateWithoutCurrencyInput, balancesUncheckedCreateWithoutCurrencyInput> | balancesCreateWithoutCurrencyInput[] | balancesUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: balancesCreateOrConnectWithoutCurrencyInput | balancesCreateOrConnectWithoutCurrencyInput[]
    createMany?: balancesCreateManyCurrencyInputEnvelope
    connect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
  }

  export type exchange_ratesUncheckedCreateNestedManyWithoutFromCurrencyInput = {
    create?: XOR<exchange_ratesCreateWithoutFromCurrencyInput, exchange_ratesUncheckedCreateWithoutFromCurrencyInput> | exchange_ratesCreateWithoutFromCurrencyInput[] | exchange_ratesUncheckedCreateWithoutFromCurrencyInput[]
    connectOrCreate?: exchange_ratesCreateOrConnectWithoutFromCurrencyInput | exchange_ratesCreateOrConnectWithoutFromCurrencyInput[]
    createMany?: exchange_ratesCreateManyFromCurrencyInputEnvelope
    connect?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
  }

  export type exchange_ratesUncheckedCreateNestedManyWithoutToCurrencyInput = {
    create?: XOR<exchange_ratesCreateWithoutToCurrencyInput, exchange_ratesUncheckedCreateWithoutToCurrencyInput> | exchange_ratesCreateWithoutToCurrencyInput[] | exchange_ratesUncheckedCreateWithoutToCurrencyInput[]
    connectOrCreate?: exchange_ratesCreateOrConnectWithoutToCurrencyInput | exchange_ratesCreateOrConnectWithoutToCurrencyInput[]
    createMany?: exchange_ratesCreateManyToCurrencyInputEnvelope
    connect?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
  }

  export type expensesUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<expensesCreateWithoutCurrencyInput, expensesUncheckedCreateWithoutCurrencyInput> | expensesCreateWithoutCurrencyInput[] | expensesUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutCurrencyInput | expensesCreateOrConnectWithoutCurrencyInput[]
    createMany?: expensesCreateManyCurrencyInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type balancesUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<balancesCreateWithoutCurrencyInput, balancesUncheckedCreateWithoutCurrencyInput> | balancesCreateWithoutCurrencyInput[] | balancesUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: balancesCreateOrConnectWithoutCurrencyInput | balancesCreateOrConnectWithoutCurrencyInput[]
    createMany?: balancesCreateManyCurrencyInputEnvelope
    connect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
  }

  export type exchange_ratesUpdateManyWithoutFromCurrencyNestedInput = {
    create?: XOR<exchange_ratesCreateWithoutFromCurrencyInput, exchange_ratesUncheckedCreateWithoutFromCurrencyInput> | exchange_ratesCreateWithoutFromCurrencyInput[] | exchange_ratesUncheckedCreateWithoutFromCurrencyInput[]
    connectOrCreate?: exchange_ratesCreateOrConnectWithoutFromCurrencyInput | exchange_ratesCreateOrConnectWithoutFromCurrencyInput[]
    upsert?: exchange_ratesUpsertWithWhereUniqueWithoutFromCurrencyInput | exchange_ratesUpsertWithWhereUniqueWithoutFromCurrencyInput[]
    createMany?: exchange_ratesCreateManyFromCurrencyInputEnvelope
    set?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    disconnect?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    delete?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    connect?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    update?: exchange_ratesUpdateWithWhereUniqueWithoutFromCurrencyInput | exchange_ratesUpdateWithWhereUniqueWithoutFromCurrencyInput[]
    updateMany?: exchange_ratesUpdateManyWithWhereWithoutFromCurrencyInput | exchange_ratesUpdateManyWithWhereWithoutFromCurrencyInput[]
    deleteMany?: exchange_ratesScalarWhereInput | exchange_ratesScalarWhereInput[]
  }

  export type exchange_ratesUpdateManyWithoutToCurrencyNestedInput = {
    create?: XOR<exchange_ratesCreateWithoutToCurrencyInput, exchange_ratesUncheckedCreateWithoutToCurrencyInput> | exchange_ratesCreateWithoutToCurrencyInput[] | exchange_ratesUncheckedCreateWithoutToCurrencyInput[]
    connectOrCreate?: exchange_ratesCreateOrConnectWithoutToCurrencyInput | exchange_ratesCreateOrConnectWithoutToCurrencyInput[]
    upsert?: exchange_ratesUpsertWithWhereUniqueWithoutToCurrencyInput | exchange_ratesUpsertWithWhereUniqueWithoutToCurrencyInput[]
    createMany?: exchange_ratesCreateManyToCurrencyInputEnvelope
    set?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    disconnect?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    delete?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    connect?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    update?: exchange_ratesUpdateWithWhereUniqueWithoutToCurrencyInput | exchange_ratesUpdateWithWhereUniqueWithoutToCurrencyInput[]
    updateMany?: exchange_ratesUpdateManyWithWhereWithoutToCurrencyInput | exchange_ratesUpdateManyWithWhereWithoutToCurrencyInput[]
    deleteMany?: exchange_ratesScalarWhereInput | exchange_ratesScalarWhereInput[]
  }

  export type expensesUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<expensesCreateWithoutCurrencyInput, expensesUncheckedCreateWithoutCurrencyInput> | expensesCreateWithoutCurrencyInput[] | expensesUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutCurrencyInput | expensesCreateOrConnectWithoutCurrencyInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutCurrencyInput | expensesUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: expensesCreateManyCurrencyInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutCurrencyInput | expensesUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutCurrencyInput | expensesUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type balancesUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<balancesCreateWithoutCurrencyInput, balancesUncheckedCreateWithoutCurrencyInput> | balancesCreateWithoutCurrencyInput[] | balancesUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: balancesCreateOrConnectWithoutCurrencyInput | balancesCreateOrConnectWithoutCurrencyInput[]
    upsert?: balancesUpsertWithWhereUniqueWithoutCurrencyInput | balancesUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: balancesCreateManyCurrencyInputEnvelope
    set?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    disconnect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    delete?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    connect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    update?: balancesUpdateWithWhereUniqueWithoutCurrencyInput | balancesUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: balancesUpdateManyWithWhereWithoutCurrencyInput | balancesUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: balancesScalarWhereInput | balancesScalarWhereInput[]
  }

  export type exchange_ratesUncheckedUpdateManyWithoutFromCurrencyNestedInput = {
    create?: XOR<exchange_ratesCreateWithoutFromCurrencyInput, exchange_ratesUncheckedCreateWithoutFromCurrencyInput> | exchange_ratesCreateWithoutFromCurrencyInput[] | exchange_ratesUncheckedCreateWithoutFromCurrencyInput[]
    connectOrCreate?: exchange_ratesCreateOrConnectWithoutFromCurrencyInput | exchange_ratesCreateOrConnectWithoutFromCurrencyInput[]
    upsert?: exchange_ratesUpsertWithWhereUniqueWithoutFromCurrencyInput | exchange_ratesUpsertWithWhereUniqueWithoutFromCurrencyInput[]
    createMany?: exchange_ratesCreateManyFromCurrencyInputEnvelope
    set?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    disconnect?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    delete?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    connect?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    update?: exchange_ratesUpdateWithWhereUniqueWithoutFromCurrencyInput | exchange_ratesUpdateWithWhereUniqueWithoutFromCurrencyInput[]
    updateMany?: exchange_ratesUpdateManyWithWhereWithoutFromCurrencyInput | exchange_ratesUpdateManyWithWhereWithoutFromCurrencyInput[]
    deleteMany?: exchange_ratesScalarWhereInput | exchange_ratesScalarWhereInput[]
  }

  export type exchange_ratesUncheckedUpdateManyWithoutToCurrencyNestedInput = {
    create?: XOR<exchange_ratesCreateWithoutToCurrencyInput, exchange_ratesUncheckedCreateWithoutToCurrencyInput> | exchange_ratesCreateWithoutToCurrencyInput[] | exchange_ratesUncheckedCreateWithoutToCurrencyInput[]
    connectOrCreate?: exchange_ratesCreateOrConnectWithoutToCurrencyInput | exchange_ratesCreateOrConnectWithoutToCurrencyInput[]
    upsert?: exchange_ratesUpsertWithWhereUniqueWithoutToCurrencyInput | exchange_ratesUpsertWithWhereUniqueWithoutToCurrencyInput[]
    createMany?: exchange_ratesCreateManyToCurrencyInputEnvelope
    set?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    disconnect?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    delete?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    connect?: exchange_ratesWhereUniqueInput | exchange_ratesWhereUniqueInput[]
    update?: exchange_ratesUpdateWithWhereUniqueWithoutToCurrencyInput | exchange_ratesUpdateWithWhereUniqueWithoutToCurrencyInput[]
    updateMany?: exchange_ratesUpdateManyWithWhereWithoutToCurrencyInput | exchange_ratesUpdateManyWithWhereWithoutToCurrencyInput[]
    deleteMany?: exchange_ratesScalarWhereInput | exchange_ratesScalarWhereInput[]
  }

  export type expensesUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<expensesCreateWithoutCurrencyInput, expensesUncheckedCreateWithoutCurrencyInput> | expensesCreateWithoutCurrencyInput[] | expensesUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutCurrencyInput | expensesCreateOrConnectWithoutCurrencyInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutCurrencyInput | expensesUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: expensesCreateManyCurrencyInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutCurrencyInput | expensesUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutCurrencyInput | expensesUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type balancesUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<balancesCreateWithoutCurrencyInput, balancesUncheckedCreateWithoutCurrencyInput> | balancesCreateWithoutCurrencyInput[] | balancesUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: balancesCreateOrConnectWithoutCurrencyInput | balancesCreateOrConnectWithoutCurrencyInput[]
    upsert?: balancesUpsertWithWhereUniqueWithoutCurrencyInput | balancesUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: balancesCreateManyCurrencyInputEnvelope
    set?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    disconnect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    delete?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    connect?: balancesWhereUniqueInput | balancesWhereUniqueInput[]
    update?: balancesUpdateWithWhereUniqueWithoutCurrencyInput | balancesUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: balancesUpdateManyWithWhereWithoutCurrencyInput | balancesUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: balancesScalarWhereInput | balancesScalarWhereInput[]
  }

  export type currenciesCreateNestedOneWithoutFromCurrencyInput = {
    create?: XOR<currenciesCreateWithoutFromCurrencyInput, currenciesUncheckedCreateWithoutFromCurrencyInput>
    connectOrCreate?: currenciesCreateOrConnectWithoutFromCurrencyInput
    connect?: currenciesWhereUniqueInput
  }

  export type currenciesCreateNestedOneWithoutToCurrencyInput = {
    create?: XOR<currenciesCreateWithoutToCurrencyInput, currenciesUncheckedCreateWithoutToCurrencyInput>
    connectOrCreate?: currenciesCreateOrConnectWithoutToCurrencyInput
    connect?: currenciesWhereUniqueInput
  }

  export type currenciesUpdateOneRequiredWithoutFromCurrencyNestedInput = {
    create?: XOR<currenciesCreateWithoutFromCurrencyInput, currenciesUncheckedCreateWithoutFromCurrencyInput>
    connectOrCreate?: currenciesCreateOrConnectWithoutFromCurrencyInput
    upsert?: currenciesUpsertWithoutFromCurrencyInput
    connect?: currenciesWhereUniqueInput
    update?: XOR<XOR<currenciesUpdateToOneWithWhereWithoutFromCurrencyInput, currenciesUpdateWithoutFromCurrencyInput>, currenciesUncheckedUpdateWithoutFromCurrencyInput>
  }

  export type currenciesUpdateOneRequiredWithoutToCurrencyNestedInput = {
    create?: XOR<currenciesCreateWithoutToCurrencyInput, currenciesUncheckedCreateWithoutToCurrencyInput>
    connectOrCreate?: currenciesCreateOrConnectWithoutToCurrencyInput
    upsert?: currenciesUpsertWithoutToCurrencyInput
    connect?: currenciesWhereUniqueInput
    update?: XOR<XOR<currenciesUpdateToOneWithWhereWithoutToCurrencyInput, currenciesUpdateWithoutToCurrencyInput>, currenciesUncheckedUpdateWithoutToCurrencyInput>
  }

  export type usersCreateNestedOneWithoutSettlementsInput = {
    create?: XOR<usersCreateWithoutSettlementsInput, usersUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSettlementsInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTosettlementsInput = {
    create?: XOR<usersCreateWithoutTosettlementsInput, usersUncheckedCreateWithoutTosettlementsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTosettlementsInput
    connect?: usersWhereUniqueInput
  }

  export type groupsCreateNestedOneWithoutSettlementsInput = {
    create?: XOR<groupsCreateWithoutSettlementsInput, groupsUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: groupsCreateOrConnectWithoutSettlementsInput
    connect?: groupsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumSettlementStatusFieldUpdateOperationsInput = {
    set?: $Enums.SettlementStatus
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type usersUpdateOneRequiredWithoutSettlementsNestedInput = {
    create?: XOR<usersCreateWithoutSettlementsInput, usersUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSettlementsInput
    upsert?: usersUpsertWithoutSettlementsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSettlementsInput, usersUpdateWithoutSettlementsInput>, usersUncheckedUpdateWithoutSettlementsInput>
  }

  export type usersUpdateOneRequiredWithoutTosettlementsNestedInput = {
    create?: XOR<usersCreateWithoutTosettlementsInput, usersUncheckedCreateWithoutTosettlementsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTosettlementsInput
    upsert?: usersUpsertWithoutTosettlementsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTosettlementsInput, usersUpdateWithoutTosettlementsInput>, usersUncheckedUpdateWithoutTosettlementsInput>
  }

  export type groupsUpdateOneRequiredWithoutSettlementsNestedInput = {
    create?: XOR<groupsCreateWithoutSettlementsInput, groupsUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: groupsCreateOrConnectWithoutSettlementsInput
    upsert?: groupsUpsertWithoutSettlementsInput
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutSettlementsInput, groupsUpdateWithoutSettlementsInput>, groupsUncheckedUpdateWithoutSettlementsInput>
  }

  export type groupsCreateNestedOneWithoutExpensesInput = {
    create?: XOR<groupsCreateWithoutExpensesInput, groupsUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutExpensesInput
    connect?: groupsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutExpensesInput = {
    create?: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: usersCreateOrConnectWithoutExpensesInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutPaidExpensesInput = {
    create?: XOR<usersCreateWithoutPaidExpensesInput, usersUncheckedCreateWithoutPaidExpensesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPaidExpensesInput
    connect?: usersWhereUniqueInput
  }

  export type currenciesCreateNestedOneWithoutExpensesInput = {
    create?: XOR<currenciesCreateWithoutExpensesInput, currenciesUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: currenciesCreateOrConnectWithoutExpensesInput
    connect?: currenciesWhereUniqueInput
  }

  export type expense_splitsCreateNestedManyWithoutExpenseIdInput = {
    create?: XOR<expense_splitsCreateWithoutExpenseIdInput, expense_splitsUncheckedCreateWithoutExpenseIdInput> | expense_splitsCreateWithoutExpenseIdInput[] | expense_splitsUncheckedCreateWithoutExpenseIdInput[]
    connectOrCreate?: expense_splitsCreateOrConnectWithoutExpenseIdInput | expense_splitsCreateOrConnectWithoutExpenseIdInput[]
    createMany?: expense_splitsCreateManyExpenseIdInputEnvelope
    connect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
  }

  export type expense_splitsUncheckedCreateNestedManyWithoutExpenseIdInput = {
    create?: XOR<expense_splitsCreateWithoutExpenseIdInput, expense_splitsUncheckedCreateWithoutExpenseIdInput> | expense_splitsCreateWithoutExpenseIdInput[] | expense_splitsUncheckedCreateWithoutExpenseIdInput[]
    connectOrCreate?: expense_splitsCreateOrConnectWithoutExpenseIdInput | expense_splitsCreateOrConnectWithoutExpenseIdInput[]
    createMany?: expense_splitsCreateManyExpenseIdInputEnvelope
    connect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
  }

  export type EnumsplitTypeFieldUpdateOperationsInput = {
    set?: $Enums.splitType
  }

  export type groupsUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<groupsCreateWithoutExpensesInput, groupsUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutExpensesInput
    upsert?: groupsUpsertWithoutExpensesInput
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutExpensesInput, groupsUpdateWithoutExpensesInput>, groupsUncheckedUpdateWithoutExpensesInput>
  }

  export type usersUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: usersCreateOrConnectWithoutExpensesInput
    upsert?: usersUpsertWithoutExpensesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutExpensesInput, usersUpdateWithoutExpensesInput>, usersUncheckedUpdateWithoutExpensesInput>
  }

  export type usersUpdateOneRequiredWithoutPaidExpensesNestedInput = {
    create?: XOR<usersCreateWithoutPaidExpensesInput, usersUncheckedCreateWithoutPaidExpensesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPaidExpensesInput
    upsert?: usersUpsertWithoutPaidExpensesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPaidExpensesInput, usersUpdateWithoutPaidExpensesInput>, usersUncheckedUpdateWithoutPaidExpensesInput>
  }

  export type currenciesUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<currenciesCreateWithoutExpensesInput, currenciesUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: currenciesCreateOrConnectWithoutExpensesInput
    upsert?: currenciesUpsertWithoutExpensesInput
    connect?: currenciesWhereUniqueInput
    update?: XOR<XOR<currenciesUpdateToOneWithWhereWithoutExpensesInput, currenciesUpdateWithoutExpensesInput>, currenciesUncheckedUpdateWithoutExpensesInput>
  }

  export type expense_splitsUpdateManyWithoutExpenseIdNestedInput = {
    create?: XOR<expense_splitsCreateWithoutExpenseIdInput, expense_splitsUncheckedCreateWithoutExpenseIdInput> | expense_splitsCreateWithoutExpenseIdInput[] | expense_splitsUncheckedCreateWithoutExpenseIdInput[]
    connectOrCreate?: expense_splitsCreateOrConnectWithoutExpenseIdInput | expense_splitsCreateOrConnectWithoutExpenseIdInput[]
    upsert?: expense_splitsUpsertWithWhereUniqueWithoutExpenseIdInput | expense_splitsUpsertWithWhereUniqueWithoutExpenseIdInput[]
    createMany?: expense_splitsCreateManyExpenseIdInputEnvelope
    set?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    disconnect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    delete?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    connect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    update?: expense_splitsUpdateWithWhereUniqueWithoutExpenseIdInput | expense_splitsUpdateWithWhereUniqueWithoutExpenseIdInput[]
    updateMany?: expense_splitsUpdateManyWithWhereWithoutExpenseIdInput | expense_splitsUpdateManyWithWhereWithoutExpenseIdInput[]
    deleteMany?: expense_splitsScalarWhereInput | expense_splitsScalarWhereInput[]
  }

  export type expense_splitsUncheckedUpdateManyWithoutExpenseIdNestedInput = {
    create?: XOR<expense_splitsCreateWithoutExpenseIdInput, expense_splitsUncheckedCreateWithoutExpenseIdInput> | expense_splitsCreateWithoutExpenseIdInput[] | expense_splitsUncheckedCreateWithoutExpenseIdInput[]
    connectOrCreate?: expense_splitsCreateOrConnectWithoutExpenseIdInput | expense_splitsCreateOrConnectWithoutExpenseIdInput[]
    upsert?: expense_splitsUpsertWithWhereUniqueWithoutExpenseIdInput | expense_splitsUpsertWithWhereUniqueWithoutExpenseIdInput[]
    createMany?: expense_splitsCreateManyExpenseIdInputEnvelope
    set?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    disconnect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    delete?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    connect?: expense_splitsWhereUniqueInput | expense_splitsWhereUniqueInput[]
    update?: expense_splitsUpdateWithWhereUniqueWithoutExpenseIdInput | expense_splitsUpdateWithWhereUniqueWithoutExpenseIdInput[]
    updateMany?: expense_splitsUpdateManyWithWhereWithoutExpenseIdInput | expense_splitsUpdateManyWithWhereWithoutExpenseIdInput[]
    deleteMany?: expense_splitsScalarWhereInput | expense_splitsScalarWhereInput[]
  }

  export type groupsCreateNestedOneWithoutGroupBalancesInput = {
    create?: XOR<groupsCreateWithoutGroupBalancesInput, groupsUncheckedCreateWithoutGroupBalancesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutGroupBalancesInput
    connect?: groupsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUserBalancesInput = {
    create?: XOR<usersCreateWithoutUserBalancesInput, usersUncheckedCreateWithoutUserBalancesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUserBalancesInput
    connect?: usersWhereUniqueInput
  }

  export type currenciesCreateNestedOneWithoutBalanceInput = {
    create?: XOR<currenciesCreateWithoutBalanceInput, currenciesUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: currenciesCreateOrConnectWithoutBalanceInput
    connect?: currenciesWhereUniqueInput
  }

  export type groupsUpdateOneRequiredWithoutGroupBalancesNestedInput = {
    create?: XOR<groupsCreateWithoutGroupBalancesInput, groupsUncheckedCreateWithoutGroupBalancesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutGroupBalancesInput
    upsert?: groupsUpsertWithoutGroupBalancesInput
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutGroupBalancesInput, groupsUpdateWithoutGroupBalancesInput>, groupsUncheckedUpdateWithoutGroupBalancesInput>
  }

  export type usersUpdateOneRequiredWithoutUserBalancesNestedInput = {
    create?: XOR<usersCreateWithoutUserBalancesInput, usersUncheckedCreateWithoutUserBalancesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUserBalancesInput
    upsert?: usersUpsertWithoutUserBalancesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUserBalancesInput, usersUpdateWithoutUserBalancesInput>, usersUncheckedUpdateWithoutUserBalancesInput>
  }

  export type currenciesUpdateOneRequiredWithoutBalanceNestedInput = {
    create?: XOR<currenciesCreateWithoutBalanceInput, currenciesUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: currenciesCreateOrConnectWithoutBalanceInput
    upsert?: currenciesUpsertWithoutBalanceInput
    connect?: currenciesWhereUniqueInput
    update?: XOR<XOR<currenciesUpdateToOneWithWhereWithoutBalanceInput, currenciesUpdateWithoutBalanceInput>, currenciesUncheckedUpdateWithoutBalanceInput>
  }

  export type usersCreateNestedOneWithoutSplitUserIdInput = {
    create?: XOR<usersCreateWithoutSplitUserIdInput, usersUncheckedCreateWithoutSplitUserIdInput>
    connectOrCreate?: usersCreateOrConnectWithoutSplitUserIdInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSplitOwnerInput = {
    create?: XOR<usersCreateWithoutSplitOwnerInput, usersUncheckedCreateWithoutSplitOwnerInput>
    connectOrCreate?: usersCreateOrConnectWithoutSplitOwnerInput
    connect?: usersWhereUniqueInput
  }

  export type expensesCreateNestedOneWithoutSplitExpenseInput = {
    create?: XOR<expensesCreateWithoutSplitExpenseInput, expensesUncheckedCreateWithoutSplitExpenseInput>
    connectOrCreate?: expensesCreateOrConnectWithoutSplitExpenseInput
    connect?: expensesWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutSplitUserIdNestedInput = {
    create?: XOR<usersCreateWithoutSplitUserIdInput, usersUncheckedCreateWithoutSplitUserIdInput>
    connectOrCreate?: usersCreateOrConnectWithoutSplitUserIdInput
    upsert?: usersUpsertWithoutSplitUserIdInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSplitUserIdInput, usersUpdateWithoutSplitUserIdInput>, usersUncheckedUpdateWithoutSplitUserIdInput>
  }

  export type usersUpdateOneRequiredWithoutSplitOwnerNestedInput = {
    create?: XOR<usersCreateWithoutSplitOwnerInput, usersUncheckedCreateWithoutSplitOwnerInput>
    connectOrCreate?: usersCreateOrConnectWithoutSplitOwnerInput
    upsert?: usersUpsertWithoutSplitOwnerInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSplitOwnerInput, usersUpdateWithoutSplitOwnerInput>, usersUncheckedUpdateWithoutSplitOwnerInput>
  }

  export type expensesUpdateOneRequiredWithoutSplitExpenseNestedInput = {
    create?: XOR<expensesCreateWithoutSplitExpenseInput, expensesUncheckedCreateWithoutSplitExpenseInput>
    connectOrCreate?: expensesCreateOrConnectWithoutSplitExpenseInput
    upsert?: expensesUpsertWithoutSplitExpenseInput
    connect?: expensesWhereUniqueInput
    update?: XOR<XOR<expensesUpdateToOneWithWhereWithoutSplitExpenseInput, expensesUpdateWithoutSplitExpenseInput>, expensesUncheckedUpdateWithoutSplitExpenseInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumgroupTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.groupType | EnumgroupTypeFieldRefInput<$PrismaModel>
    in?: $Enums.groupType[] | ListEnumgroupTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.groupType[] | ListEnumgroupTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumgroupTypeFilter<$PrismaModel> | $Enums.groupType
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumgroupTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groupType | EnumgroupTypeFieldRefInput<$PrismaModel>
    in?: $Enums.groupType[] | ListEnumgroupTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.groupType[] | ListEnumgroupTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumgroupTypeWithAggregatesFilter<$PrismaModel> | $Enums.groupType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroupTypeFilter<$PrismaModel>
    _max?: NestedEnumgroupTypeFilter<$PrismaModel>
  }

  export type NestedEnumgroupRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.groupRole | EnumgroupRoleFieldRefInput<$PrismaModel>
    in?: $Enums.groupRole[] | ListEnumgroupRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.groupRole[] | ListEnumgroupRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumgroupRoleFilter<$PrismaModel> | $Enums.groupRole
  }

  export type NestedEnumgroupRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groupRole | EnumgroupRoleFieldRefInput<$PrismaModel>
    in?: $Enums.groupRole[] | ListEnumgroupRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.groupRole[] | ListEnumgroupRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumgroupRoleWithAggregatesFilter<$PrismaModel> | $Enums.groupRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroupRoleFilter<$PrismaModel>
    _max?: NestedEnumgroupRoleFilter<$PrismaModel>
  }

  export type NestedEnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type NestedEnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumSettlementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementStatus | EnumSettlementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSettlementStatusFilter<$PrismaModel> | $Enums.SettlementStatus
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumSettlementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SettlementStatus | EnumSettlementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettlementStatus[] | ListEnumSettlementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSettlementStatusWithAggregatesFilter<$PrismaModel> | $Enums.SettlementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSettlementStatusFilter<$PrismaModel>
    _max?: NestedEnumSettlementStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumsplitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.splitType | EnumsplitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.splitType[] | ListEnumsplitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.splitType[] | ListEnumsplitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumsplitTypeFilter<$PrismaModel> | $Enums.splitType
  }

  export type NestedEnumsplitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.splitType | EnumsplitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.splitType[] | ListEnumsplitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.splitType[] | ListEnumsplitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumsplitTypeWithAggregatesFilter<$PrismaModel> | $Enums.splitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsplitTypeFilter<$PrismaModel>
    _max?: NestedEnumsplitTypeFilter<$PrismaModel>
  }

  export type groupsCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    member?: group_membersCreateNestedManyWithoutGroupInput
    reports?: reportsCreateNestedManyWithoutGroupInput
    settlements?: settlementsCreateNestedManyWithoutGroupInput
    expenses?: expensesCreateNestedManyWithoutGroupInput
    groupBalances?: balancesCreateNestedManyWithoutGroupBalancesInput
  }

  export type groupsUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    member?: group_membersUncheckedCreateNestedManyWithoutGroupInput
    reports?: reportsUncheckedCreateNestedManyWithoutGroupInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutGroupInput
    expenses?: expensesUncheckedCreateNestedManyWithoutGroupInput
    groupBalances?: balancesUncheckedCreateNestedManyWithoutGroupBalancesInput
  }

  export type groupsCreateOrConnectWithoutCreatorInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutCreatorInput, groupsUncheckedCreateWithoutCreatorInput>
  }

  export type groupsCreateManyCreatorInputEnvelope = {
    data: groupsCreateManyCreatorInput | groupsCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type group_membersCreateWithoutUserInput = {
    id?: string
    role?: $Enums.groupRole
    joined_at?: Date | string
    isInGroup?: boolean
    left_at?: Date | string | null
    group: groupsCreateNestedOneWithoutMemberInput
  }

  export type group_membersUncheckedCreateWithoutUserInput = {
    id?: string
    role?: $Enums.groupRole
    joined_at?: Date | string
    group_id: string
    isInGroup?: boolean
    left_at?: Date | string | null
  }

  export type group_membersCreateOrConnectWithoutUserInput = {
    where: group_membersWhereUniqueInput
    create: XOR<group_membersCreateWithoutUserInput, group_membersUncheckedCreateWithoutUserInput>
  }

  export type group_membersCreateManyUserInputEnvelope = {
    data: group_membersCreateManyUserInput | group_membersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type reportsCreateWithoutUserInput = {
    id?: string
    report_type?: $Enums.ReportType
    period_start: Date | string
    period_end: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    group: groupsCreateNestedOneWithoutReportsInput
  }

  export type reportsUncheckedCreateWithoutUserInput = {
    id?: string
    report_type?: $Enums.ReportType
    period_start: Date | string
    period_end: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    group_id: string
  }

  export type reportsCreateOrConnectWithoutUserInput = {
    where: reportsWhereUniqueInput
    create: XOR<reportsCreateWithoutUserInput, reportsUncheckedCreateWithoutUserInput>
  }

  export type reportsCreateManyUserInputEnvelope = {
    data: reportsCreateManyUserInput | reportsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type settlementsCreateWithoutFromUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    method?: $Enums.PaymentMethod
    settled_at: Date | string
    created_at?: Date | string
    currency_code: string
    toUser: usersCreateNestedOneWithoutTosettlementsInput
    group: groupsCreateNestedOneWithoutSettlementsInput
  }

  export type settlementsUncheckedCreateWithoutFromUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    method?: $Enums.PaymentMethod
    settled_at: Date | string
    created_at?: Date | string
    currency_code: string
    to_user_id: string
    group_id: string
  }

  export type settlementsCreateOrConnectWithoutFromUserInput = {
    where: settlementsWhereUniqueInput
    create: XOR<settlementsCreateWithoutFromUserInput, settlementsUncheckedCreateWithoutFromUserInput>
  }

  export type settlementsCreateManyFromUserInputEnvelope = {
    data: settlementsCreateManyFromUserInput | settlementsCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type settlementsCreateWithoutToUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    method?: $Enums.PaymentMethod
    settled_at: Date | string
    created_at?: Date | string
    currency_code: string
    fromUser: usersCreateNestedOneWithoutSettlementsInput
    group: groupsCreateNestedOneWithoutSettlementsInput
  }

  export type settlementsUncheckedCreateWithoutToUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    method?: $Enums.PaymentMethod
    settled_at: Date | string
    created_at?: Date | string
    currency_code: string
    from_user_id: string
    group_id: string
  }

  export type settlementsCreateOrConnectWithoutToUserInput = {
    where: settlementsWhereUniqueInput
    create: XOR<settlementsCreateWithoutToUserInput, settlementsUncheckedCreateWithoutToUserInput>
  }

  export type settlementsCreateManyToUserInputEnvelope = {
    data: settlementsCreateManyToUserInput | settlementsCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type expensesCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    createdAt?: Date | string
    updatedAt?: Date | string
    group: groupsCreateNestedOneWithoutExpensesInput
    paid: usersCreateNestedOneWithoutPaidExpensesInput
    currency: currenciesCreateNestedOneWithoutExpensesInput
    splitExpense?: expense_splitsCreateNestedManyWithoutExpenseIdInput
  }

  export type expensesUncheckedCreateWithoutUserInput = {
    id?: string
    group_id: string
    paid_by: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    splitExpense?: expense_splitsUncheckedCreateNestedManyWithoutExpenseIdInput
  }

  export type expensesCreateOrConnectWithoutUserInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutUserInput, expensesUncheckedCreateWithoutUserInput>
  }

  export type expensesCreateManyUserInputEnvelope = {
    data: expensesCreateManyUserInput | expensesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type expensesCreateWithoutPaidInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    createdAt?: Date | string
    updatedAt?: Date | string
    group: groupsCreateNestedOneWithoutExpensesInput
    user: usersCreateNestedOneWithoutExpensesInput
    currency: currenciesCreateNestedOneWithoutExpensesInput
    splitExpense?: expense_splitsCreateNestedManyWithoutExpenseIdInput
  }

  export type expensesUncheckedCreateWithoutPaidInput = {
    id?: string
    group_id: string
    created_by: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    splitExpense?: expense_splitsUncheckedCreateNestedManyWithoutExpenseIdInput
  }

  export type expensesCreateOrConnectWithoutPaidInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutPaidInput, expensesUncheckedCreateWithoutPaidInput>
  }

  export type expensesCreateManyPaidInputEnvelope = {
    data: expensesCreateManyPaidInput | expensesCreateManyPaidInput[]
    skipDuplicates?: boolean
  }

  export type balancesCreateWithoutUserBalancesInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    last_update: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupBalances: groupsCreateNestedOneWithoutGroupBalancesInput
    currency: currenciesCreateNestedOneWithoutBalanceInput
  }

  export type balancesUncheckedCreateWithoutUserBalancesInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    last_update: Date | string
    group_id: string
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type balancesCreateOrConnectWithoutUserBalancesInput = {
    where: balancesWhereUniqueInput
    create: XOR<balancesCreateWithoutUserBalancesInput, balancesUncheckedCreateWithoutUserBalancesInput>
  }

  export type balancesCreateManyUserBalancesInputEnvelope = {
    data: balancesCreateManyUserBalancesInput | balancesCreateManyUserBalancesInput[]
    skipDuplicates?: boolean
  }

  export type expense_splitsCreateWithoutSplitUserIdInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    percentage: Decimal | DecimalJsLike | number | string
    exact_amount: Decimal | DecimalJsLike | number | string
    splitOwner: usersCreateNestedOneWithoutSplitOwnerInput
    expenseId: expensesCreateNestedOneWithoutSplitExpenseInput
  }

  export type expense_splitsUncheckedCreateWithoutSplitUserIdInput = {
    id?: string
    own_by: string
    amount: Decimal | DecimalJsLike | number | string
    percentage: Decimal | DecimalJsLike | number | string
    expense_id: string
    exact_amount: Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsCreateOrConnectWithoutSplitUserIdInput = {
    where: expense_splitsWhereUniqueInput
    create: XOR<expense_splitsCreateWithoutSplitUserIdInput, expense_splitsUncheckedCreateWithoutSplitUserIdInput>
  }

  export type expense_splitsCreateManySplitUserIdInputEnvelope = {
    data: expense_splitsCreateManySplitUserIdInput | expense_splitsCreateManySplitUserIdInput[]
    skipDuplicates?: boolean
  }

  export type expense_splitsCreateWithoutSplitOwnerInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    percentage: Decimal | DecimalJsLike | number | string
    exact_amount: Decimal | DecimalJsLike | number | string
    splitUserId: usersCreateNestedOneWithoutSplitUserIdInput
    expenseId: expensesCreateNestedOneWithoutSplitExpenseInput
  }

  export type expense_splitsUncheckedCreateWithoutSplitOwnerInput = {
    id?: string
    user_id: string
    amount: Decimal | DecimalJsLike | number | string
    percentage: Decimal | DecimalJsLike | number | string
    expense_id: string
    exact_amount: Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsCreateOrConnectWithoutSplitOwnerInput = {
    where: expense_splitsWhereUniqueInput
    create: XOR<expense_splitsCreateWithoutSplitOwnerInput, expense_splitsUncheckedCreateWithoutSplitOwnerInput>
  }

  export type expense_splitsCreateManySplitOwnerInputEnvelope = {
    data: expense_splitsCreateManySplitOwnerInput | expense_splitsCreateManySplitOwnerInput[]
    skipDuplicates?: boolean
  }

  export type groupsUpsertWithWhereUniqueWithoutCreatorInput = {
    where: groupsWhereUniqueInput
    update: XOR<groupsUpdateWithoutCreatorInput, groupsUncheckedUpdateWithoutCreatorInput>
    create: XOR<groupsCreateWithoutCreatorInput, groupsUncheckedCreateWithoutCreatorInput>
  }

  export type groupsUpdateWithWhereUniqueWithoutCreatorInput = {
    where: groupsWhereUniqueInput
    data: XOR<groupsUpdateWithoutCreatorInput, groupsUncheckedUpdateWithoutCreatorInput>
  }

  export type groupsUpdateManyWithWhereWithoutCreatorInput = {
    where: groupsScalarWhereInput
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyWithoutCreatorInput>
  }

  export type groupsScalarWhereInput = {
    AND?: groupsScalarWhereInput | groupsScalarWhereInput[]
    OR?: groupsScalarWhereInput[]
    NOT?: groupsScalarWhereInput | groupsScalarWhereInput[]
    id?: StringFilter<"groups"> | string
    name?: StringFilter<"groups"> | string
    description?: StringNullableFilter<"groups"> | string | null
    avatarUrl?: StringFilter<"groups"> | string
    groupType?: EnumgroupTypeFilter<"groups"> | $Enums.groupType
    createdAt?: DateTimeFilter<"groups"> | Date | string
    updatedAt?: DateTimeFilter<"groups"> | Date | string
    createdBy?: StringFilter<"groups"> | string
    isDeleted?: BoolFilter<"groups"> | boolean
    deletedAt?: DateTimeNullableFilter<"groups"> | Date | string | null
  }

  export type group_membersUpsertWithWhereUniqueWithoutUserInput = {
    where: group_membersWhereUniqueInput
    update: XOR<group_membersUpdateWithoutUserInput, group_membersUncheckedUpdateWithoutUserInput>
    create: XOR<group_membersCreateWithoutUserInput, group_membersUncheckedCreateWithoutUserInput>
  }

  export type group_membersUpdateWithWhereUniqueWithoutUserInput = {
    where: group_membersWhereUniqueInput
    data: XOR<group_membersUpdateWithoutUserInput, group_membersUncheckedUpdateWithoutUserInput>
  }

  export type group_membersUpdateManyWithWhereWithoutUserInput = {
    where: group_membersScalarWhereInput
    data: XOR<group_membersUpdateManyMutationInput, group_membersUncheckedUpdateManyWithoutUserInput>
  }

  export type group_membersScalarWhereInput = {
    AND?: group_membersScalarWhereInput | group_membersScalarWhereInput[]
    OR?: group_membersScalarWhereInput[]
    NOT?: group_membersScalarWhereInput | group_membersScalarWhereInput[]
    id?: StringFilter<"group_members"> | string
    role?: EnumgroupRoleFilter<"group_members"> | $Enums.groupRole
    joined_at?: DateTimeFilter<"group_members"> | Date | string
    group_id?: StringFilter<"group_members"> | string
    user_id?: StringFilter<"group_members"> | string
    isInGroup?: BoolFilter<"group_members"> | boolean
    left_at?: DateTimeNullableFilter<"group_members"> | Date | string | null
  }

  export type reportsUpsertWithWhereUniqueWithoutUserInput = {
    where: reportsWhereUniqueInput
    update: XOR<reportsUpdateWithoutUserInput, reportsUncheckedUpdateWithoutUserInput>
    create: XOR<reportsCreateWithoutUserInput, reportsUncheckedCreateWithoutUserInput>
  }

  export type reportsUpdateWithWhereUniqueWithoutUserInput = {
    where: reportsWhereUniqueInput
    data: XOR<reportsUpdateWithoutUserInput, reportsUncheckedUpdateWithoutUserInput>
  }

  export type reportsUpdateManyWithWhereWithoutUserInput = {
    where: reportsScalarWhereInput
    data: XOR<reportsUpdateManyMutationInput, reportsUncheckedUpdateManyWithoutUserInput>
  }

  export type reportsScalarWhereInput = {
    AND?: reportsScalarWhereInput | reportsScalarWhereInput[]
    OR?: reportsScalarWhereInput[]
    NOT?: reportsScalarWhereInput | reportsScalarWhereInput[]
    id?: StringFilter<"reports"> | string
    report_type?: EnumReportTypeFilter<"reports"> | $Enums.ReportType
    period_start?: DateTimeFilter<"reports"> | Date | string
    period_end?: DateTimeFilter<"reports"> | Date | string
    data?: JsonFilter<"reports">
    createdAt?: DateTimeFilter<"reports"> | Date | string
    group_id?: StringFilter<"reports"> | string
    user_id?: StringFilter<"reports"> | string
  }

  export type settlementsUpsertWithWhereUniqueWithoutFromUserInput = {
    where: settlementsWhereUniqueInput
    update: XOR<settlementsUpdateWithoutFromUserInput, settlementsUncheckedUpdateWithoutFromUserInput>
    create: XOR<settlementsCreateWithoutFromUserInput, settlementsUncheckedCreateWithoutFromUserInput>
  }

  export type settlementsUpdateWithWhereUniqueWithoutFromUserInput = {
    where: settlementsWhereUniqueInput
    data: XOR<settlementsUpdateWithoutFromUserInput, settlementsUncheckedUpdateWithoutFromUserInput>
  }

  export type settlementsUpdateManyWithWhereWithoutFromUserInput = {
    where: settlementsScalarWhereInput
    data: XOR<settlementsUpdateManyMutationInput, settlementsUncheckedUpdateManyWithoutFromUserInput>
  }

  export type settlementsScalarWhereInput = {
    AND?: settlementsScalarWhereInput | settlementsScalarWhereInput[]
    OR?: settlementsScalarWhereInput[]
    NOT?: settlementsScalarWhereInput | settlementsScalarWhereInput[]
    id?: StringFilter<"settlements"> | string
    amount?: DecimalFilter<"settlements"> | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFilter<"settlements"> | $Enums.SettlementStatus
    method?: EnumPaymentMethodFilter<"settlements"> | $Enums.PaymentMethod
    settled_at?: DateTimeFilter<"settlements"> | Date | string
    created_at?: DateTimeFilter<"settlements"> | Date | string
    currency_code?: StringFilter<"settlements"> | string
    from_user_id?: StringFilter<"settlements"> | string
    to_user_id?: StringFilter<"settlements"> | string
    group_id?: StringFilter<"settlements"> | string
  }

  export type settlementsUpsertWithWhereUniqueWithoutToUserInput = {
    where: settlementsWhereUniqueInput
    update: XOR<settlementsUpdateWithoutToUserInput, settlementsUncheckedUpdateWithoutToUserInput>
    create: XOR<settlementsCreateWithoutToUserInput, settlementsUncheckedCreateWithoutToUserInput>
  }

  export type settlementsUpdateWithWhereUniqueWithoutToUserInput = {
    where: settlementsWhereUniqueInput
    data: XOR<settlementsUpdateWithoutToUserInput, settlementsUncheckedUpdateWithoutToUserInput>
  }

  export type settlementsUpdateManyWithWhereWithoutToUserInput = {
    where: settlementsScalarWhereInput
    data: XOR<settlementsUpdateManyMutationInput, settlementsUncheckedUpdateManyWithoutToUserInput>
  }

  export type expensesUpsertWithWhereUniqueWithoutUserInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutUserInput, expensesUncheckedUpdateWithoutUserInput>
    create: XOR<expensesCreateWithoutUserInput, expensesUncheckedCreateWithoutUserInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutUserInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutUserInput, expensesUncheckedUpdateWithoutUserInput>
  }

  export type expensesUpdateManyWithWhereWithoutUserInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutUserInput>
  }

  export type expensesScalarWhereInput = {
    AND?: expensesScalarWhereInput | expensesScalarWhereInput[]
    OR?: expensesScalarWhereInput[]
    NOT?: expensesScalarWhereInput | expensesScalarWhereInput[]
    id?: StringFilter<"expenses"> | string
    group_id?: StringFilter<"expenses"> | string
    created_by?: StringFilter<"expenses"> | string
    paid_by?: StringFilter<"expenses"> | string
    amount?: DecimalFilter<"expenses"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"expenses"> | string
    category?: StringFilter<"expenses"> | string
    expense_data?: DateTimeFilter<"expenses"> | Date | string
    split_type?: EnumsplitTypeFilter<"expenses"> | $Enums.splitType
    currency_code?: StringFilter<"expenses"> | string
    createdAt?: DateTimeFilter<"expenses"> | Date | string
    updatedAt?: DateTimeFilter<"expenses"> | Date | string
  }

  export type expensesUpsertWithWhereUniqueWithoutPaidInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutPaidInput, expensesUncheckedUpdateWithoutPaidInput>
    create: XOR<expensesCreateWithoutPaidInput, expensesUncheckedCreateWithoutPaidInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutPaidInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutPaidInput, expensesUncheckedUpdateWithoutPaidInput>
  }

  export type expensesUpdateManyWithWhereWithoutPaidInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutPaidInput>
  }

  export type balancesUpsertWithWhereUniqueWithoutUserBalancesInput = {
    where: balancesWhereUniqueInput
    update: XOR<balancesUpdateWithoutUserBalancesInput, balancesUncheckedUpdateWithoutUserBalancesInput>
    create: XOR<balancesCreateWithoutUserBalancesInput, balancesUncheckedCreateWithoutUserBalancesInput>
  }

  export type balancesUpdateWithWhereUniqueWithoutUserBalancesInput = {
    where: balancesWhereUniqueInput
    data: XOR<balancesUpdateWithoutUserBalancesInput, balancesUncheckedUpdateWithoutUserBalancesInput>
  }

  export type balancesUpdateManyWithWhereWithoutUserBalancesInput = {
    where: balancesScalarWhereInput
    data: XOR<balancesUpdateManyMutationInput, balancesUncheckedUpdateManyWithoutUserBalancesInput>
  }

  export type balancesScalarWhereInput = {
    AND?: balancesScalarWhereInput | balancesScalarWhereInput[]
    OR?: balancesScalarWhereInput[]
    NOT?: balancesScalarWhereInput | balancesScalarWhereInput[]
    id?: StringFilter<"balances"> | string
    balance?: DecimalFilter<"balances"> | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFilter<"balances"> | Date | string
    group_id?: StringFilter<"balances"> | string
    user_id?: StringFilter<"balances"> | string
    currency_code?: StringFilter<"balances"> | string
    createdAt?: DateTimeFilter<"balances"> | Date | string
    updatedAt?: DateTimeFilter<"balances"> | Date | string
  }

  export type expense_splitsUpsertWithWhereUniqueWithoutSplitUserIdInput = {
    where: expense_splitsWhereUniqueInput
    update: XOR<expense_splitsUpdateWithoutSplitUserIdInput, expense_splitsUncheckedUpdateWithoutSplitUserIdInput>
    create: XOR<expense_splitsCreateWithoutSplitUserIdInput, expense_splitsUncheckedCreateWithoutSplitUserIdInput>
  }

  export type expense_splitsUpdateWithWhereUniqueWithoutSplitUserIdInput = {
    where: expense_splitsWhereUniqueInput
    data: XOR<expense_splitsUpdateWithoutSplitUserIdInput, expense_splitsUncheckedUpdateWithoutSplitUserIdInput>
  }

  export type expense_splitsUpdateManyWithWhereWithoutSplitUserIdInput = {
    where: expense_splitsScalarWhereInput
    data: XOR<expense_splitsUpdateManyMutationInput, expense_splitsUncheckedUpdateManyWithoutSplitUserIdInput>
  }

  export type expense_splitsScalarWhereInput = {
    AND?: expense_splitsScalarWhereInput | expense_splitsScalarWhereInput[]
    OR?: expense_splitsScalarWhereInput[]
    NOT?: expense_splitsScalarWhereInput | expense_splitsScalarWhereInput[]
    id?: StringFilter<"expense_splits"> | string
    user_id?: StringFilter<"expense_splits"> | string
    own_by?: StringFilter<"expense_splits"> | string
    amount?: DecimalFilter<"expense_splits"> | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFilter<"expense_splits"> | Decimal | DecimalJsLike | number | string
    expense_id?: StringFilter<"expense_splits"> | string
    exact_amount?: DecimalFilter<"expense_splits"> | Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsUpsertWithWhereUniqueWithoutSplitOwnerInput = {
    where: expense_splitsWhereUniqueInput
    update: XOR<expense_splitsUpdateWithoutSplitOwnerInput, expense_splitsUncheckedUpdateWithoutSplitOwnerInput>
    create: XOR<expense_splitsCreateWithoutSplitOwnerInput, expense_splitsUncheckedCreateWithoutSplitOwnerInput>
  }

  export type expense_splitsUpdateWithWhereUniqueWithoutSplitOwnerInput = {
    where: expense_splitsWhereUniqueInput
    data: XOR<expense_splitsUpdateWithoutSplitOwnerInput, expense_splitsUncheckedUpdateWithoutSplitOwnerInput>
  }

  export type expense_splitsUpdateManyWithWhereWithoutSplitOwnerInput = {
    where: expense_splitsScalarWhereInput
    data: XOR<expense_splitsUpdateManyMutationInput, expense_splitsUncheckedUpdateManyWithoutSplitOwnerInput>
  }

  export type usersCreateWithoutCreatedGroupsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    groupmembers?: group_membersCreateNestedManyWithoutUserInput
    reports?: reportsCreateNestedManyWithoutUserInput
    settlements?: settlementsCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsCreateNestedManyWithoutToUserInput
    expenses?: expensesCreateNestedManyWithoutUserInput
    paidExpenses?: expensesCreateNestedManyWithoutPaidInput
    userBalances?: balancesCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersUncheckedCreateWithoutCreatedGroupsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    groupmembers?: group_membersUncheckedCreateNestedManyWithoutUserInput
    reports?: reportsUncheckedCreateNestedManyWithoutUserInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsUncheckedCreateNestedManyWithoutToUserInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
    paidExpenses?: expensesUncheckedCreateNestedManyWithoutPaidInput
    userBalances?: balancesUncheckedCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsUncheckedCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsUncheckedCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersCreateOrConnectWithoutCreatedGroupsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCreatedGroupsInput, usersUncheckedCreateWithoutCreatedGroupsInput>
  }

  export type group_membersCreateWithoutGroupInput = {
    id?: string
    role?: $Enums.groupRole
    joined_at?: Date | string
    isInGroup?: boolean
    left_at?: Date | string | null
    user: usersCreateNestedOneWithoutGroupmembersInput
  }

  export type group_membersUncheckedCreateWithoutGroupInput = {
    id?: string
    role?: $Enums.groupRole
    joined_at?: Date | string
    user_id: string
    isInGroup?: boolean
    left_at?: Date | string | null
  }

  export type group_membersCreateOrConnectWithoutGroupInput = {
    where: group_membersWhereUniqueInput
    create: XOR<group_membersCreateWithoutGroupInput, group_membersUncheckedCreateWithoutGroupInput>
  }

  export type group_membersCreateManyGroupInputEnvelope = {
    data: group_membersCreateManyGroupInput | group_membersCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type reportsCreateWithoutGroupInput = {
    id?: string
    report_type?: $Enums.ReportType
    period_start: Date | string
    period_end: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutReportsInput
  }

  export type reportsUncheckedCreateWithoutGroupInput = {
    id?: string
    report_type?: $Enums.ReportType
    period_start: Date | string
    period_end: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user_id: string
  }

  export type reportsCreateOrConnectWithoutGroupInput = {
    where: reportsWhereUniqueInput
    create: XOR<reportsCreateWithoutGroupInput, reportsUncheckedCreateWithoutGroupInput>
  }

  export type reportsCreateManyGroupInputEnvelope = {
    data: reportsCreateManyGroupInput | reportsCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type settlementsCreateWithoutGroupInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    method?: $Enums.PaymentMethod
    settled_at: Date | string
    created_at?: Date | string
    currency_code: string
    fromUser: usersCreateNestedOneWithoutSettlementsInput
    toUser: usersCreateNestedOneWithoutTosettlementsInput
  }

  export type settlementsUncheckedCreateWithoutGroupInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    method?: $Enums.PaymentMethod
    settled_at: Date | string
    created_at?: Date | string
    currency_code: string
    from_user_id: string
    to_user_id: string
  }

  export type settlementsCreateOrConnectWithoutGroupInput = {
    where: settlementsWhereUniqueInput
    create: XOR<settlementsCreateWithoutGroupInput, settlementsUncheckedCreateWithoutGroupInput>
  }

  export type settlementsCreateManyGroupInputEnvelope = {
    data: settlementsCreateManyGroupInput | settlementsCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type expensesCreateWithoutGroupInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutExpensesInput
    paid: usersCreateNestedOneWithoutPaidExpensesInput
    currency: currenciesCreateNestedOneWithoutExpensesInput
    splitExpense?: expense_splitsCreateNestedManyWithoutExpenseIdInput
  }

  export type expensesUncheckedCreateWithoutGroupInput = {
    id?: string
    created_by: string
    paid_by: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    splitExpense?: expense_splitsUncheckedCreateNestedManyWithoutExpenseIdInput
  }

  export type expensesCreateOrConnectWithoutGroupInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutGroupInput, expensesUncheckedCreateWithoutGroupInput>
  }

  export type expensesCreateManyGroupInputEnvelope = {
    data: expensesCreateManyGroupInput | expensesCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type balancesCreateWithoutGroupBalancesInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    last_update: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userBalances: usersCreateNestedOneWithoutUserBalancesInput
    currency: currenciesCreateNestedOneWithoutBalanceInput
  }

  export type balancesUncheckedCreateWithoutGroupBalancesInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    last_update: Date | string
    user_id: string
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type balancesCreateOrConnectWithoutGroupBalancesInput = {
    where: balancesWhereUniqueInput
    create: XOR<balancesCreateWithoutGroupBalancesInput, balancesUncheckedCreateWithoutGroupBalancesInput>
  }

  export type balancesCreateManyGroupBalancesInputEnvelope = {
    data: balancesCreateManyGroupBalancesInput | balancesCreateManyGroupBalancesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCreatedGroupsInput = {
    update: XOR<usersUpdateWithoutCreatedGroupsInput, usersUncheckedUpdateWithoutCreatedGroupsInput>
    create: XOR<usersCreateWithoutCreatedGroupsInput, usersUncheckedCreateWithoutCreatedGroupsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCreatedGroupsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCreatedGroupsInput, usersUncheckedUpdateWithoutCreatedGroupsInput>
  }

  export type usersUpdateWithoutCreatedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupmembers?: group_membersUpdateManyWithoutUserNestedInput
    reports?: reportsUpdateManyWithoutUserNestedInput
    settlements?: settlementsUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUpdateManyWithoutToUserNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUncheckedUpdateWithoutCreatedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupmembers?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    reports?: reportsUncheckedUpdateManyWithoutUserNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUncheckedUpdateManyWithoutToUserNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUncheckedUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUncheckedUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUncheckedUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUncheckedUpdateManyWithoutSplitOwnerNestedInput
  }

  export type group_membersUpsertWithWhereUniqueWithoutGroupInput = {
    where: group_membersWhereUniqueInput
    update: XOR<group_membersUpdateWithoutGroupInput, group_membersUncheckedUpdateWithoutGroupInput>
    create: XOR<group_membersCreateWithoutGroupInput, group_membersUncheckedCreateWithoutGroupInput>
  }

  export type group_membersUpdateWithWhereUniqueWithoutGroupInput = {
    where: group_membersWhereUniqueInput
    data: XOR<group_membersUpdateWithoutGroupInput, group_membersUncheckedUpdateWithoutGroupInput>
  }

  export type group_membersUpdateManyWithWhereWithoutGroupInput = {
    where: group_membersScalarWhereInput
    data: XOR<group_membersUpdateManyMutationInput, group_membersUncheckedUpdateManyWithoutGroupInput>
  }

  export type reportsUpsertWithWhereUniqueWithoutGroupInput = {
    where: reportsWhereUniqueInput
    update: XOR<reportsUpdateWithoutGroupInput, reportsUncheckedUpdateWithoutGroupInput>
    create: XOR<reportsCreateWithoutGroupInput, reportsUncheckedCreateWithoutGroupInput>
  }

  export type reportsUpdateWithWhereUniqueWithoutGroupInput = {
    where: reportsWhereUniqueInput
    data: XOR<reportsUpdateWithoutGroupInput, reportsUncheckedUpdateWithoutGroupInput>
  }

  export type reportsUpdateManyWithWhereWithoutGroupInput = {
    where: reportsScalarWhereInput
    data: XOR<reportsUpdateManyMutationInput, reportsUncheckedUpdateManyWithoutGroupInput>
  }

  export type settlementsUpsertWithWhereUniqueWithoutGroupInput = {
    where: settlementsWhereUniqueInput
    update: XOR<settlementsUpdateWithoutGroupInput, settlementsUncheckedUpdateWithoutGroupInput>
    create: XOR<settlementsCreateWithoutGroupInput, settlementsUncheckedCreateWithoutGroupInput>
  }

  export type settlementsUpdateWithWhereUniqueWithoutGroupInput = {
    where: settlementsWhereUniqueInput
    data: XOR<settlementsUpdateWithoutGroupInput, settlementsUncheckedUpdateWithoutGroupInput>
  }

  export type settlementsUpdateManyWithWhereWithoutGroupInput = {
    where: settlementsScalarWhereInput
    data: XOR<settlementsUpdateManyMutationInput, settlementsUncheckedUpdateManyWithoutGroupInput>
  }

  export type expensesUpsertWithWhereUniqueWithoutGroupInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutGroupInput, expensesUncheckedUpdateWithoutGroupInput>
    create: XOR<expensesCreateWithoutGroupInput, expensesUncheckedCreateWithoutGroupInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutGroupInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutGroupInput, expensesUncheckedUpdateWithoutGroupInput>
  }

  export type expensesUpdateManyWithWhereWithoutGroupInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutGroupInput>
  }

  export type balancesUpsertWithWhereUniqueWithoutGroupBalancesInput = {
    where: balancesWhereUniqueInput
    update: XOR<balancesUpdateWithoutGroupBalancesInput, balancesUncheckedUpdateWithoutGroupBalancesInput>
    create: XOR<balancesCreateWithoutGroupBalancesInput, balancesUncheckedCreateWithoutGroupBalancesInput>
  }

  export type balancesUpdateWithWhereUniqueWithoutGroupBalancesInput = {
    where: balancesWhereUniqueInput
    data: XOR<balancesUpdateWithoutGroupBalancesInput, balancesUncheckedUpdateWithoutGroupBalancesInput>
  }

  export type balancesUpdateManyWithWhereWithoutGroupBalancesInput = {
    where: balancesScalarWhereInput
    data: XOR<balancesUpdateManyMutationInput, balancesUncheckedUpdateManyWithoutGroupBalancesInput>
  }

  export type usersCreateWithoutGroupmembersInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    reports?: reportsCreateNestedManyWithoutUserInput
    settlements?: settlementsCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsCreateNestedManyWithoutToUserInput
    expenses?: expensesCreateNestedManyWithoutUserInput
    paidExpenses?: expensesCreateNestedManyWithoutPaidInput
    userBalances?: balancesCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersUncheckedCreateWithoutGroupmembersInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    reports?: reportsUncheckedCreateNestedManyWithoutUserInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsUncheckedCreateNestedManyWithoutToUserInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
    paidExpenses?: expensesUncheckedCreateNestedManyWithoutPaidInput
    userBalances?: balancesUncheckedCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsUncheckedCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsUncheckedCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersCreateOrConnectWithoutGroupmembersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGroupmembersInput, usersUncheckedCreateWithoutGroupmembersInput>
  }

  export type groupsCreateWithoutMemberInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    creator: usersCreateNestedOneWithoutCreatedGroupsInput
    reports?: reportsCreateNestedManyWithoutGroupInput
    settlements?: settlementsCreateNestedManyWithoutGroupInput
    expenses?: expensesCreateNestedManyWithoutGroupInput
    groupBalances?: balancesCreateNestedManyWithoutGroupBalancesInput
  }

  export type groupsUncheckedCreateWithoutMemberInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    reports?: reportsUncheckedCreateNestedManyWithoutGroupInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutGroupInput
    expenses?: expensesUncheckedCreateNestedManyWithoutGroupInput
    groupBalances?: balancesUncheckedCreateNestedManyWithoutGroupBalancesInput
  }

  export type groupsCreateOrConnectWithoutMemberInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutMemberInput, groupsUncheckedCreateWithoutMemberInput>
  }

  export type usersUpsertWithoutGroupmembersInput = {
    update: XOR<usersUpdateWithoutGroupmembersInput, usersUncheckedUpdateWithoutGroupmembersInput>
    create: XOR<usersCreateWithoutGroupmembersInput, usersUncheckedCreateWithoutGroupmembersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGroupmembersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGroupmembersInput, usersUncheckedUpdateWithoutGroupmembersInput>
  }

  export type usersUpdateWithoutGroupmembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    reports?: reportsUpdateManyWithoutUserNestedInput
    settlements?: settlementsUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUpdateManyWithoutToUserNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUncheckedUpdateWithoutGroupmembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    reports?: reportsUncheckedUpdateManyWithoutUserNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUncheckedUpdateManyWithoutToUserNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUncheckedUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUncheckedUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUncheckedUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUncheckedUpdateManyWithoutSplitOwnerNestedInput
  }

  export type groupsUpsertWithoutMemberInput = {
    update: XOR<groupsUpdateWithoutMemberInput, groupsUncheckedUpdateWithoutMemberInput>
    create: XOR<groupsCreateWithoutMemberInput, groupsUncheckedCreateWithoutMemberInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutMemberInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutMemberInput, groupsUncheckedUpdateWithoutMemberInput>
  }

  export type groupsUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: usersUpdateOneRequiredWithoutCreatedGroupsNestedInput
    reports?: reportsUpdateManyWithoutGroupNestedInput
    settlements?: settlementsUpdateManyWithoutGroupNestedInput
    expenses?: expensesUpdateManyWithoutGroupNestedInput
    groupBalances?: balancesUpdateManyWithoutGroupBalancesNestedInput
  }

  export type groupsUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: reportsUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutGroupNestedInput
    groupBalances?: balancesUncheckedUpdateManyWithoutGroupBalancesNestedInput
  }

  export type usersCreateWithoutReportsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersCreateNestedManyWithoutUserInput
    settlements?: settlementsCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsCreateNestedManyWithoutToUserInput
    expenses?: expensesCreateNestedManyWithoutUserInput
    paidExpenses?: expensesCreateNestedManyWithoutPaidInput
    userBalances?: balancesCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersUncheckedCreateWithoutReportsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersUncheckedCreateNestedManyWithoutUserInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsUncheckedCreateNestedManyWithoutToUserInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
    paidExpenses?: expensesUncheckedCreateNestedManyWithoutPaidInput
    userBalances?: balancesUncheckedCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsUncheckedCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsUncheckedCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersCreateOrConnectWithoutReportsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReportsInput, usersUncheckedCreateWithoutReportsInput>
  }

  export type groupsCreateWithoutReportsInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    creator: usersCreateNestedOneWithoutCreatedGroupsInput
    member?: group_membersCreateNestedManyWithoutGroupInput
    settlements?: settlementsCreateNestedManyWithoutGroupInput
    expenses?: expensesCreateNestedManyWithoutGroupInput
    groupBalances?: balancesCreateNestedManyWithoutGroupBalancesInput
  }

  export type groupsUncheckedCreateWithoutReportsInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    member?: group_membersUncheckedCreateNestedManyWithoutGroupInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutGroupInput
    expenses?: expensesUncheckedCreateNestedManyWithoutGroupInput
    groupBalances?: balancesUncheckedCreateNestedManyWithoutGroupBalancesInput
  }

  export type groupsCreateOrConnectWithoutReportsInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutReportsInput, groupsUncheckedCreateWithoutReportsInput>
  }

  export type usersUpsertWithoutReportsInput = {
    update: XOR<usersUpdateWithoutReportsInput, usersUncheckedUpdateWithoutReportsInput>
    create: XOR<usersCreateWithoutReportsInput, usersUncheckedCreateWithoutReportsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReportsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReportsInput, usersUncheckedUpdateWithoutReportsInput>
  }

  export type usersUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUpdateManyWithoutUserNestedInput
    settlements?: settlementsUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUpdateManyWithoutToUserNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUncheckedUpdateManyWithoutToUserNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUncheckedUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUncheckedUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUncheckedUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUncheckedUpdateManyWithoutSplitOwnerNestedInput
  }

  export type groupsUpsertWithoutReportsInput = {
    update: XOR<groupsUpdateWithoutReportsInput, groupsUncheckedUpdateWithoutReportsInput>
    create: XOR<groupsCreateWithoutReportsInput, groupsUncheckedCreateWithoutReportsInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutReportsInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutReportsInput, groupsUncheckedUpdateWithoutReportsInput>
  }

  export type groupsUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: usersUpdateOneRequiredWithoutCreatedGroupsNestedInput
    member?: group_membersUpdateManyWithoutGroupNestedInput
    settlements?: settlementsUpdateManyWithoutGroupNestedInput
    expenses?: expensesUpdateManyWithoutGroupNestedInput
    groupBalances?: balancesUpdateManyWithoutGroupBalancesNestedInput
  }

  export type groupsUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: group_membersUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutGroupNestedInput
    groupBalances?: balancesUncheckedUpdateManyWithoutGroupBalancesNestedInput
  }

  export type exchange_ratesCreateWithoutFromCurrencyInput = {
    id?: string
    rate_date: Date | string
    toCurrency: currenciesCreateNestedOneWithoutToCurrencyInput
  }

  export type exchange_ratesUncheckedCreateWithoutFromCurrencyInput = {
    id?: string
    to_currency: string
    rate_date: Date | string
  }

  export type exchange_ratesCreateOrConnectWithoutFromCurrencyInput = {
    where: exchange_ratesWhereUniqueInput
    create: XOR<exchange_ratesCreateWithoutFromCurrencyInput, exchange_ratesUncheckedCreateWithoutFromCurrencyInput>
  }

  export type exchange_ratesCreateManyFromCurrencyInputEnvelope = {
    data: exchange_ratesCreateManyFromCurrencyInput | exchange_ratesCreateManyFromCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type exchange_ratesCreateWithoutToCurrencyInput = {
    id?: string
    rate_date: Date | string
    fromCurrency: currenciesCreateNestedOneWithoutFromCurrencyInput
  }

  export type exchange_ratesUncheckedCreateWithoutToCurrencyInput = {
    id?: string
    from_currency: string
    rate_date: Date | string
  }

  export type exchange_ratesCreateOrConnectWithoutToCurrencyInput = {
    where: exchange_ratesWhereUniqueInput
    create: XOR<exchange_ratesCreateWithoutToCurrencyInput, exchange_ratesUncheckedCreateWithoutToCurrencyInput>
  }

  export type exchange_ratesCreateManyToCurrencyInputEnvelope = {
    data: exchange_ratesCreateManyToCurrencyInput | exchange_ratesCreateManyToCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type expensesCreateWithoutCurrencyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    createdAt?: Date | string
    updatedAt?: Date | string
    group: groupsCreateNestedOneWithoutExpensesInput
    user: usersCreateNestedOneWithoutExpensesInput
    paid: usersCreateNestedOneWithoutPaidExpensesInput
    splitExpense?: expense_splitsCreateNestedManyWithoutExpenseIdInput
  }

  export type expensesUncheckedCreateWithoutCurrencyInput = {
    id?: string
    group_id: string
    created_by: string
    paid_by: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    createdAt?: Date | string
    updatedAt?: Date | string
    splitExpense?: expense_splitsUncheckedCreateNestedManyWithoutExpenseIdInput
  }

  export type expensesCreateOrConnectWithoutCurrencyInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutCurrencyInput, expensesUncheckedCreateWithoutCurrencyInput>
  }

  export type expensesCreateManyCurrencyInputEnvelope = {
    data: expensesCreateManyCurrencyInput | expensesCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type balancesCreateWithoutCurrencyInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    last_update: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupBalances: groupsCreateNestedOneWithoutGroupBalancesInput
    userBalances: usersCreateNestedOneWithoutUserBalancesInput
  }

  export type balancesUncheckedCreateWithoutCurrencyInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    last_update: Date | string
    group_id: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type balancesCreateOrConnectWithoutCurrencyInput = {
    where: balancesWhereUniqueInput
    create: XOR<balancesCreateWithoutCurrencyInput, balancesUncheckedCreateWithoutCurrencyInput>
  }

  export type balancesCreateManyCurrencyInputEnvelope = {
    data: balancesCreateManyCurrencyInput | balancesCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type exchange_ratesUpsertWithWhereUniqueWithoutFromCurrencyInput = {
    where: exchange_ratesWhereUniqueInput
    update: XOR<exchange_ratesUpdateWithoutFromCurrencyInput, exchange_ratesUncheckedUpdateWithoutFromCurrencyInput>
    create: XOR<exchange_ratesCreateWithoutFromCurrencyInput, exchange_ratesUncheckedCreateWithoutFromCurrencyInput>
  }

  export type exchange_ratesUpdateWithWhereUniqueWithoutFromCurrencyInput = {
    where: exchange_ratesWhereUniqueInput
    data: XOR<exchange_ratesUpdateWithoutFromCurrencyInput, exchange_ratesUncheckedUpdateWithoutFromCurrencyInput>
  }

  export type exchange_ratesUpdateManyWithWhereWithoutFromCurrencyInput = {
    where: exchange_ratesScalarWhereInput
    data: XOR<exchange_ratesUpdateManyMutationInput, exchange_ratesUncheckedUpdateManyWithoutFromCurrencyInput>
  }

  export type exchange_ratesScalarWhereInput = {
    AND?: exchange_ratesScalarWhereInput | exchange_ratesScalarWhereInput[]
    OR?: exchange_ratesScalarWhereInput[]
    NOT?: exchange_ratesScalarWhereInput | exchange_ratesScalarWhereInput[]
    id?: StringFilter<"exchange_rates"> | string
    from_currency?: StringFilter<"exchange_rates"> | string
    to_currency?: StringFilter<"exchange_rates"> | string
    rate_date?: DateTimeFilter<"exchange_rates"> | Date | string
  }

  export type exchange_ratesUpsertWithWhereUniqueWithoutToCurrencyInput = {
    where: exchange_ratesWhereUniqueInput
    update: XOR<exchange_ratesUpdateWithoutToCurrencyInput, exchange_ratesUncheckedUpdateWithoutToCurrencyInput>
    create: XOR<exchange_ratesCreateWithoutToCurrencyInput, exchange_ratesUncheckedCreateWithoutToCurrencyInput>
  }

  export type exchange_ratesUpdateWithWhereUniqueWithoutToCurrencyInput = {
    where: exchange_ratesWhereUniqueInput
    data: XOR<exchange_ratesUpdateWithoutToCurrencyInput, exchange_ratesUncheckedUpdateWithoutToCurrencyInput>
  }

  export type exchange_ratesUpdateManyWithWhereWithoutToCurrencyInput = {
    where: exchange_ratesScalarWhereInput
    data: XOR<exchange_ratesUpdateManyMutationInput, exchange_ratesUncheckedUpdateManyWithoutToCurrencyInput>
  }

  export type expensesUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutCurrencyInput, expensesUncheckedUpdateWithoutCurrencyInput>
    create: XOR<expensesCreateWithoutCurrencyInput, expensesUncheckedCreateWithoutCurrencyInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutCurrencyInput, expensesUncheckedUpdateWithoutCurrencyInput>
  }

  export type expensesUpdateManyWithWhereWithoutCurrencyInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type balancesUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: balancesWhereUniqueInput
    update: XOR<balancesUpdateWithoutCurrencyInput, balancesUncheckedUpdateWithoutCurrencyInput>
    create: XOR<balancesCreateWithoutCurrencyInput, balancesUncheckedCreateWithoutCurrencyInput>
  }

  export type balancesUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: balancesWhereUniqueInput
    data: XOR<balancesUpdateWithoutCurrencyInput, balancesUncheckedUpdateWithoutCurrencyInput>
  }

  export type balancesUpdateManyWithWhereWithoutCurrencyInput = {
    where: balancesScalarWhereInput
    data: XOR<balancesUpdateManyMutationInput, balancesUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type currenciesCreateWithoutFromCurrencyInput = {
    code?: string
    name?: string
    symbol?: string
    toCurrency?: exchange_ratesCreateNestedManyWithoutToCurrencyInput
    expenses?: expensesCreateNestedManyWithoutCurrencyInput
    balance?: balancesCreateNestedManyWithoutCurrencyInput
  }

  export type currenciesUncheckedCreateWithoutFromCurrencyInput = {
    code?: string
    name?: string
    symbol?: string
    toCurrency?: exchange_ratesUncheckedCreateNestedManyWithoutToCurrencyInput
    expenses?: expensesUncheckedCreateNestedManyWithoutCurrencyInput
    balance?: balancesUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type currenciesCreateOrConnectWithoutFromCurrencyInput = {
    where: currenciesWhereUniqueInput
    create: XOR<currenciesCreateWithoutFromCurrencyInput, currenciesUncheckedCreateWithoutFromCurrencyInput>
  }

  export type currenciesCreateWithoutToCurrencyInput = {
    code?: string
    name?: string
    symbol?: string
    fromCurrency?: exchange_ratesCreateNestedManyWithoutFromCurrencyInput
    expenses?: expensesCreateNestedManyWithoutCurrencyInput
    balance?: balancesCreateNestedManyWithoutCurrencyInput
  }

  export type currenciesUncheckedCreateWithoutToCurrencyInput = {
    code?: string
    name?: string
    symbol?: string
    fromCurrency?: exchange_ratesUncheckedCreateNestedManyWithoutFromCurrencyInput
    expenses?: expensesUncheckedCreateNestedManyWithoutCurrencyInput
    balance?: balancesUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type currenciesCreateOrConnectWithoutToCurrencyInput = {
    where: currenciesWhereUniqueInput
    create: XOR<currenciesCreateWithoutToCurrencyInput, currenciesUncheckedCreateWithoutToCurrencyInput>
  }

  export type currenciesUpsertWithoutFromCurrencyInput = {
    update: XOR<currenciesUpdateWithoutFromCurrencyInput, currenciesUncheckedUpdateWithoutFromCurrencyInput>
    create: XOR<currenciesCreateWithoutFromCurrencyInput, currenciesUncheckedCreateWithoutFromCurrencyInput>
    where?: currenciesWhereInput
  }

  export type currenciesUpdateToOneWithWhereWithoutFromCurrencyInput = {
    where?: currenciesWhereInput
    data: XOR<currenciesUpdateWithoutFromCurrencyInput, currenciesUncheckedUpdateWithoutFromCurrencyInput>
  }

  export type currenciesUpdateWithoutFromCurrencyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    toCurrency?: exchange_ratesUpdateManyWithoutToCurrencyNestedInput
    expenses?: expensesUpdateManyWithoutCurrencyNestedInput
    balance?: balancesUpdateManyWithoutCurrencyNestedInput
  }

  export type currenciesUncheckedUpdateWithoutFromCurrencyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    toCurrency?: exchange_ratesUncheckedUpdateManyWithoutToCurrencyNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutCurrencyNestedInput
    balance?: balancesUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type currenciesUpsertWithoutToCurrencyInput = {
    update: XOR<currenciesUpdateWithoutToCurrencyInput, currenciesUncheckedUpdateWithoutToCurrencyInput>
    create: XOR<currenciesCreateWithoutToCurrencyInput, currenciesUncheckedCreateWithoutToCurrencyInput>
    where?: currenciesWhereInput
  }

  export type currenciesUpdateToOneWithWhereWithoutToCurrencyInput = {
    where?: currenciesWhereInput
    data: XOR<currenciesUpdateWithoutToCurrencyInput, currenciesUncheckedUpdateWithoutToCurrencyInput>
  }

  export type currenciesUpdateWithoutToCurrencyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    fromCurrency?: exchange_ratesUpdateManyWithoutFromCurrencyNestedInput
    expenses?: expensesUpdateManyWithoutCurrencyNestedInput
    balance?: balancesUpdateManyWithoutCurrencyNestedInput
  }

  export type currenciesUncheckedUpdateWithoutToCurrencyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    fromCurrency?: exchange_ratesUncheckedUpdateManyWithoutFromCurrencyNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutCurrencyNestedInput
    balance?: balancesUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type usersCreateWithoutSettlementsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersCreateNestedManyWithoutUserInput
    reports?: reportsCreateNestedManyWithoutUserInput
    tosettlements?: settlementsCreateNestedManyWithoutToUserInput
    expenses?: expensesCreateNestedManyWithoutUserInput
    paidExpenses?: expensesCreateNestedManyWithoutPaidInput
    userBalances?: balancesCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersUncheckedCreateWithoutSettlementsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersUncheckedCreateNestedManyWithoutUserInput
    reports?: reportsUncheckedCreateNestedManyWithoutUserInput
    tosettlements?: settlementsUncheckedCreateNestedManyWithoutToUserInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
    paidExpenses?: expensesUncheckedCreateNestedManyWithoutPaidInput
    userBalances?: balancesUncheckedCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsUncheckedCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsUncheckedCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersCreateOrConnectWithoutSettlementsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSettlementsInput, usersUncheckedCreateWithoutSettlementsInput>
  }

  export type usersCreateWithoutTosettlementsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersCreateNestedManyWithoutUserInput
    reports?: reportsCreateNestedManyWithoutUserInput
    settlements?: settlementsCreateNestedManyWithoutFromUserInput
    expenses?: expensesCreateNestedManyWithoutUserInput
    paidExpenses?: expensesCreateNestedManyWithoutPaidInput
    userBalances?: balancesCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersUncheckedCreateWithoutTosettlementsInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersUncheckedCreateNestedManyWithoutUserInput
    reports?: reportsUncheckedCreateNestedManyWithoutUserInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutFromUserInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
    paidExpenses?: expensesUncheckedCreateNestedManyWithoutPaidInput
    userBalances?: balancesUncheckedCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsUncheckedCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsUncheckedCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersCreateOrConnectWithoutTosettlementsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTosettlementsInput, usersUncheckedCreateWithoutTosettlementsInput>
  }

  export type groupsCreateWithoutSettlementsInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    creator: usersCreateNestedOneWithoutCreatedGroupsInput
    member?: group_membersCreateNestedManyWithoutGroupInput
    reports?: reportsCreateNestedManyWithoutGroupInput
    expenses?: expensesCreateNestedManyWithoutGroupInput
    groupBalances?: balancesCreateNestedManyWithoutGroupBalancesInput
  }

  export type groupsUncheckedCreateWithoutSettlementsInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    member?: group_membersUncheckedCreateNestedManyWithoutGroupInput
    reports?: reportsUncheckedCreateNestedManyWithoutGroupInput
    expenses?: expensesUncheckedCreateNestedManyWithoutGroupInput
    groupBalances?: balancesUncheckedCreateNestedManyWithoutGroupBalancesInput
  }

  export type groupsCreateOrConnectWithoutSettlementsInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutSettlementsInput, groupsUncheckedCreateWithoutSettlementsInput>
  }

  export type usersUpsertWithoutSettlementsInput = {
    update: XOR<usersUpdateWithoutSettlementsInput, usersUncheckedUpdateWithoutSettlementsInput>
    create: XOR<usersCreateWithoutSettlementsInput, usersUncheckedCreateWithoutSettlementsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSettlementsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSettlementsInput, usersUncheckedUpdateWithoutSettlementsInput>
  }

  export type usersUpdateWithoutSettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUpdateManyWithoutUserNestedInput
    reports?: reportsUpdateManyWithoutUserNestedInput
    tosettlements?: settlementsUpdateManyWithoutToUserNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUncheckedUpdateWithoutSettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    reports?: reportsUncheckedUpdateManyWithoutUserNestedInput
    tosettlements?: settlementsUncheckedUpdateManyWithoutToUserNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUncheckedUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUncheckedUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUncheckedUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUncheckedUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUpsertWithoutTosettlementsInput = {
    update: XOR<usersUpdateWithoutTosettlementsInput, usersUncheckedUpdateWithoutTosettlementsInput>
    create: XOR<usersCreateWithoutTosettlementsInput, usersUncheckedCreateWithoutTosettlementsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTosettlementsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTosettlementsInput, usersUncheckedUpdateWithoutTosettlementsInput>
  }

  export type usersUpdateWithoutTosettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUpdateManyWithoutUserNestedInput
    reports?: reportsUpdateManyWithoutUserNestedInput
    settlements?: settlementsUpdateManyWithoutFromUserNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUncheckedUpdateWithoutTosettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    reports?: reportsUncheckedUpdateManyWithoutUserNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutFromUserNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUncheckedUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUncheckedUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUncheckedUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUncheckedUpdateManyWithoutSplitOwnerNestedInput
  }

  export type groupsUpsertWithoutSettlementsInput = {
    update: XOR<groupsUpdateWithoutSettlementsInput, groupsUncheckedUpdateWithoutSettlementsInput>
    create: XOR<groupsCreateWithoutSettlementsInput, groupsUncheckedCreateWithoutSettlementsInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutSettlementsInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutSettlementsInput, groupsUncheckedUpdateWithoutSettlementsInput>
  }

  export type groupsUpdateWithoutSettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: usersUpdateOneRequiredWithoutCreatedGroupsNestedInput
    member?: group_membersUpdateManyWithoutGroupNestedInput
    reports?: reportsUpdateManyWithoutGroupNestedInput
    expenses?: expensesUpdateManyWithoutGroupNestedInput
    groupBalances?: balancesUpdateManyWithoutGroupBalancesNestedInput
  }

  export type groupsUncheckedUpdateWithoutSettlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: group_membersUncheckedUpdateManyWithoutGroupNestedInput
    reports?: reportsUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutGroupNestedInput
    groupBalances?: balancesUncheckedUpdateManyWithoutGroupBalancesNestedInput
  }

  export type groupsCreateWithoutExpensesInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    creator: usersCreateNestedOneWithoutCreatedGroupsInput
    member?: group_membersCreateNestedManyWithoutGroupInput
    reports?: reportsCreateNestedManyWithoutGroupInput
    settlements?: settlementsCreateNestedManyWithoutGroupInput
    groupBalances?: balancesCreateNestedManyWithoutGroupBalancesInput
  }

  export type groupsUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    member?: group_membersUncheckedCreateNestedManyWithoutGroupInput
    reports?: reportsUncheckedCreateNestedManyWithoutGroupInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutGroupInput
    groupBalances?: balancesUncheckedCreateNestedManyWithoutGroupBalancesInput
  }

  export type groupsCreateOrConnectWithoutExpensesInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutExpensesInput, groupsUncheckedCreateWithoutExpensesInput>
  }

  export type usersCreateWithoutExpensesInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersCreateNestedManyWithoutUserInput
    reports?: reportsCreateNestedManyWithoutUserInput
    settlements?: settlementsCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsCreateNestedManyWithoutToUserInput
    paidExpenses?: expensesCreateNestedManyWithoutPaidInput
    userBalances?: balancesCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersUncheckedCreateWithoutExpensesInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersUncheckedCreateNestedManyWithoutUserInput
    reports?: reportsUncheckedCreateNestedManyWithoutUserInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsUncheckedCreateNestedManyWithoutToUserInput
    paidExpenses?: expensesUncheckedCreateNestedManyWithoutPaidInput
    userBalances?: balancesUncheckedCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsUncheckedCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsUncheckedCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersCreateOrConnectWithoutExpensesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
  }

  export type usersCreateWithoutPaidExpensesInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersCreateNestedManyWithoutUserInput
    reports?: reportsCreateNestedManyWithoutUserInput
    settlements?: settlementsCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsCreateNestedManyWithoutToUserInput
    expenses?: expensesCreateNestedManyWithoutUserInput
    userBalances?: balancesCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersUncheckedCreateWithoutPaidExpensesInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersUncheckedCreateNestedManyWithoutUserInput
    reports?: reportsUncheckedCreateNestedManyWithoutUserInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsUncheckedCreateNestedManyWithoutToUserInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
    userBalances?: balancesUncheckedCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsUncheckedCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsUncheckedCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersCreateOrConnectWithoutPaidExpensesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPaidExpensesInput, usersUncheckedCreateWithoutPaidExpensesInput>
  }

  export type currenciesCreateWithoutExpensesInput = {
    code?: string
    name?: string
    symbol?: string
    fromCurrency?: exchange_ratesCreateNestedManyWithoutFromCurrencyInput
    toCurrency?: exchange_ratesCreateNestedManyWithoutToCurrencyInput
    balance?: balancesCreateNestedManyWithoutCurrencyInput
  }

  export type currenciesUncheckedCreateWithoutExpensesInput = {
    code?: string
    name?: string
    symbol?: string
    fromCurrency?: exchange_ratesUncheckedCreateNestedManyWithoutFromCurrencyInput
    toCurrency?: exchange_ratesUncheckedCreateNestedManyWithoutToCurrencyInput
    balance?: balancesUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type currenciesCreateOrConnectWithoutExpensesInput = {
    where: currenciesWhereUniqueInput
    create: XOR<currenciesCreateWithoutExpensesInput, currenciesUncheckedCreateWithoutExpensesInput>
  }

  export type expense_splitsCreateWithoutExpenseIdInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    percentage: Decimal | DecimalJsLike | number | string
    exact_amount: Decimal | DecimalJsLike | number | string
    splitUserId: usersCreateNestedOneWithoutSplitUserIdInput
    splitOwner: usersCreateNestedOneWithoutSplitOwnerInput
  }

  export type expense_splitsUncheckedCreateWithoutExpenseIdInput = {
    id?: string
    user_id: string
    own_by: string
    amount: Decimal | DecimalJsLike | number | string
    percentage: Decimal | DecimalJsLike | number | string
    exact_amount: Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsCreateOrConnectWithoutExpenseIdInput = {
    where: expense_splitsWhereUniqueInput
    create: XOR<expense_splitsCreateWithoutExpenseIdInput, expense_splitsUncheckedCreateWithoutExpenseIdInput>
  }

  export type expense_splitsCreateManyExpenseIdInputEnvelope = {
    data: expense_splitsCreateManyExpenseIdInput | expense_splitsCreateManyExpenseIdInput[]
    skipDuplicates?: boolean
  }

  export type groupsUpsertWithoutExpensesInput = {
    update: XOR<groupsUpdateWithoutExpensesInput, groupsUncheckedUpdateWithoutExpensesInput>
    create: XOR<groupsCreateWithoutExpensesInput, groupsUncheckedCreateWithoutExpensesInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutExpensesInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutExpensesInput, groupsUncheckedUpdateWithoutExpensesInput>
  }

  export type groupsUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: usersUpdateOneRequiredWithoutCreatedGroupsNestedInput
    member?: group_membersUpdateManyWithoutGroupNestedInput
    reports?: reportsUpdateManyWithoutGroupNestedInput
    settlements?: settlementsUpdateManyWithoutGroupNestedInput
    groupBalances?: balancesUpdateManyWithoutGroupBalancesNestedInput
  }

  export type groupsUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: group_membersUncheckedUpdateManyWithoutGroupNestedInput
    reports?: reportsUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutGroupNestedInput
    groupBalances?: balancesUncheckedUpdateManyWithoutGroupBalancesNestedInput
  }

  export type usersUpsertWithoutExpensesInput = {
    update: XOR<usersUpdateWithoutExpensesInput, usersUncheckedUpdateWithoutExpensesInput>
    create: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutExpensesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutExpensesInput, usersUncheckedUpdateWithoutExpensesInput>
  }

  export type usersUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUpdateManyWithoutUserNestedInput
    reports?: reportsUpdateManyWithoutUserNestedInput
    settlements?: settlementsUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUpdateManyWithoutToUserNestedInput
    paidExpenses?: expensesUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    reports?: reportsUncheckedUpdateManyWithoutUserNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUncheckedUpdateManyWithoutToUserNestedInput
    paidExpenses?: expensesUncheckedUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUncheckedUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUncheckedUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUncheckedUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUpsertWithoutPaidExpensesInput = {
    update: XOR<usersUpdateWithoutPaidExpensesInput, usersUncheckedUpdateWithoutPaidExpensesInput>
    create: XOR<usersCreateWithoutPaidExpensesInput, usersUncheckedCreateWithoutPaidExpensesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPaidExpensesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPaidExpensesInput, usersUncheckedUpdateWithoutPaidExpensesInput>
  }

  export type usersUpdateWithoutPaidExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUpdateManyWithoutUserNestedInput
    reports?: reportsUpdateManyWithoutUserNestedInput
    settlements?: settlementsUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUpdateManyWithoutToUserNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
    userBalances?: balancesUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUncheckedUpdateWithoutPaidExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    reports?: reportsUncheckedUpdateManyWithoutUserNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUncheckedUpdateManyWithoutToUserNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
    userBalances?: balancesUncheckedUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUncheckedUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUncheckedUpdateManyWithoutSplitOwnerNestedInput
  }

  export type currenciesUpsertWithoutExpensesInput = {
    update: XOR<currenciesUpdateWithoutExpensesInput, currenciesUncheckedUpdateWithoutExpensesInput>
    create: XOR<currenciesCreateWithoutExpensesInput, currenciesUncheckedCreateWithoutExpensesInput>
    where?: currenciesWhereInput
  }

  export type currenciesUpdateToOneWithWhereWithoutExpensesInput = {
    where?: currenciesWhereInput
    data: XOR<currenciesUpdateWithoutExpensesInput, currenciesUncheckedUpdateWithoutExpensesInput>
  }

  export type currenciesUpdateWithoutExpensesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    fromCurrency?: exchange_ratesUpdateManyWithoutFromCurrencyNestedInput
    toCurrency?: exchange_ratesUpdateManyWithoutToCurrencyNestedInput
    balance?: balancesUpdateManyWithoutCurrencyNestedInput
  }

  export type currenciesUncheckedUpdateWithoutExpensesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    fromCurrency?: exchange_ratesUncheckedUpdateManyWithoutFromCurrencyNestedInput
    toCurrency?: exchange_ratesUncheckedUpdateManyWithoutToCurrencyNestedInput
    balance?: balancesUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type expense_splitsUpsertWithWhereUniqueWithoutExpenseIdInput = {
    where: expense_splitsWhereUniqueInput
    update: XOR<expense_splitsUpdateWithoutExpenseIdInput, expense_splitsUncheckedUpdateWithoutExpenseIdInput>
    create: XOR<expense_splitsCreateWithoutExpenseIdInput, expense_splitsUncheckedCreateWithoutExpenseIdInput>
  }

  export type expense_splitsUpdateWithWhereUniqueWithoutExpenseIdInput = {
    where: expense_splitsWhereUniqueInput
    data: XOR<expense_splitsUpdateWithoutExpenseIdInput, expense_splitsUncheckedUpdateWithoutExpenseIdInput>
  }

  export type expense_splitsUpdateManyWithWhereWithoutExpenseIdInput = {
    where: expense_splitsScalarWhereInput
    data: XOR<expense_splitsUpdateManyMutationInput, expense_splitsUncheckedUpdateManyWithoutExpenseIdInput>
  }

  export type groupsCreateWithoutGroupBalancesInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    creator: usersCreateNestedOneWithoutCreatedGroupsInput
    member?: group_membersCreateNestedManyWithoutGroupInput
    reports?: reportsCreateNestedManyWithoutGroupInput
    settlements?: settlementsCreateNestedManyWithoutGroupInput
    expenses?: expensesCreateNestedManyWithoutGroupInput
  }

  export type groupsUncheckedCreateWithoutGroupBalancesInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    member?: group_membersUncheckedCreateNestedManyWithoutGroupInput
    reports?: reportsUncheckedCreateNestedManyWithoutGroupInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutGroupInput
    expenses?: expensesUncheckedCreateNestedManyWithoutGroupInput
  }

  export type groupsCreateOrConnectWithoutGroupBalancesInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutGroupBalancesInput, groupsUncheckedCreateWithoutGroupBalancesInput>
  }

  export type usersCreateWithoutUserBalancesInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersCreateNestedManyWithoutUserInput
    reports?: reportsCreateNestedManyWithoutUserInput
    settlements?: settlementsCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsCreateNestedManyWithoutToUserInput
    expenses?: expensesCreateNestedManyWithoutUserInput
    paidExpenses?: expensesCreateNestedManyWithoutPaidInput
    splitUserId?: expense_splitsCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersUncheckedCreateWithoutUserBalancesInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersUncheckedCreateNestedManyWithoutUserInput
    reports?: reportsUncheckedCreateNestedManyWithoutUserInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsUncheckedCreateNestedManyWithoutToUserInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
    paidExpenses?: expensesUncheckedCreateNestedManyWithoutPaidInput
    splitUserId?: expense_splitsUncheckedCreateNestedManyWithoutSplitUserIdInput
    splitOwner?: expense_splitsUncheckedCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersCreateOrConnectWithoutUserBalancesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUserBalancesInput, usersUncheckedCreateWithoutUserBalancesInput>
  }

  export type currenciesCreateWithoutBalanceInput = {
    code?: string
    name?: string
    symbol?: string
    fromCurrency?: exchange_ratesCreateNestedManyWithoutFromCurrencyInput
    toCurrency?: exchange_ratesCreateNestedManyWithoutToCurrencyInput
    expenses?: expensesCreateNestedManyWithoutCurrencyInput
  }

  export type currenciesUncheckedCreateWithoutBalanceInput = {
    code?: string
    name?: string
    symbol?: string
    fromCurrency?: exchange_ratesUncheckedCreateNestedManyWithoutFromCurrencyInput
    toCurrency?: exchange_ratesUncheckedCreateNestedManyWithoutToCurrencyInput
    expenses?: expensesUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type currenciesCreateOrConnectWithoutBalanceInput = {
    where: currenciesWhereUniqueInput
    create: XOR<currenciesCreateWithoutBalanceInput, currenciesUncheckedCreateWithoutBalanceInput>
  }

  export type groupsUpsertWithoutGroupBalancesInput = {
    update: XOR<groupsUpdateWithoutGroupBalancesInput, groupsUncheckedUpdateWithoutGroupBalancesInput>
    create: XOR<groupsCreateWithoutGroupBalancesInput, groupsUncheckedCreateWithoutGroupBalancesInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutGroupBalancesInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutGroupBalancesInput, groupsUncheckedUpdateWithoutGroupBalancesInput>
  }

  export type groupsUpdateWithoutGroupBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: usersUpdateOneRequiredWithoutCreatedGroupsNestedInput
    member?: group_membersUpdateManyWithoutGroupNestedInput
    reports?: reportsUpdateManyWithoutGroupNestedInput
    settlements?: settlementsUpdateManyWithoutGroupNestedInput
    expenses?: expensesUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateWithoutGroupBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: group_membersUncheckedUpdateManyWithoutGroupNestedInput
    reports?: reportsUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type usersUpsertWithoutUserBalancesInput = {
    update: XOR<usersUpdateWithoutUserBalancesInput, usersUncheckedUpdateWithoutUserBalancesInput>
    create: XOR<usersCreateWithoutUserBalancesInput, usersUncheckedCreateWithoutUserBalancesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUserBalancesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUserBalancesInput, usersUncheckedUpdateWithoutUserBalancesInput>
  }

  export type usersUpdateWithoutUserBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUpdateManyWithoutUserNestedInput
    reports?: reportsUpdateManyWithoutUserNestedInput
    settlements?: settlementsUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUpdateManyWithoutToUserNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUpdateManyWithoutPaidNestedInput
    splitUserId?: expense_splitsUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUncheckedUpdateWithoutUserBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    reports?: reportsUncheckedUpdateManyWithoutUserNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUncheckedUpdateManyWithoutToUserNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUncheckedUpdateManyWithoutPaidNestedInput
    splitUserId?: expense_splitsUncheckedUpdateManyWithoutSplitUserIdNestedInput
    splitOwner?: expense_splitsUncheckedUpdateManyWithoutSplitOwnerNestedInput
  }

  export type currenciesUpsertWithoutBalanceInput = {
    update: XOR<currenciesUpdateWithoutBalanceInput, currenciesUncheckedUpdateWithoutBalanceInput>
    create: XOR<currenciesCreateWithoutBalanceInput, currenciesUncheckedCreateWithoutBalanceInput>
    where?: currenciesWhereInput
  }

  export type currenciesUpdateToOneWithWhereWithoutBalanceInput = {
    where?: currenciesWhereInput
    data: XOR<currenciesUpdateWithoutBalanceInput, currenciesUncheckedUpdateWithoutBalanceInput>
  }

  export type currenciesUpdateWithoutBalanceInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    fromCurrency?: exchange_ratesUpdateManyWithoutFromCurrencyNestedInput
    toCurrency?: exchange_ratesUpdateManyWithoutToCurrencyNestedInput
    expenses?: expensesUpdateManyWithoutCurrencyNestedInput
  }

  export type currenciesUncheckedUpdateWithoutBalanceInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    fromCurrency?: exchange_ratesUncheckedUpdateManyWithoutFromCurrencyNestedInput
    toCurrency?: exchange_ratesUncheckedUpdateManyWithoutToCurrencyNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type usersCreateWithoutSplitUserIdInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersCreateNestedManyWithoutUserInput
    reports?: reportsCreateNestedManyWithoutUserInput
    settlements?: settlementsCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsCreateNestedManyWithoutToUserInput
    expenses?: expensesCreateNestedManyWithoutUserInput
    paidExpenses?: expensesCreateNestedManyWithoutPaidInput
    userBalances?: balancesCreateNestedManyWithoutUserBalancesInput
    splitOwner?: expense_splitsCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersUncheckedCreateWithoutSplitUserIdInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersUncheckedCreateNestedManyWithoutUserInput
    reports?: reportsUncheckedCreateNestedManyWithoutUserInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsUncheckedCreateNestedManyWithoutToUserInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
    paidExpenses?: expensesUncheckedCreateNestedManyWithoutPaidInput
    userBalances?: balancesUncheckedCreateNestedManyWithoutUserBalancesInput
    splitOwner?: expense_splitsUncheckedCreateNestedManyWithoutSplitOwnerInput
  }

  export type usersCreateOrConnectWithoutSplitUserIdInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSplitUserIdInput, usersUncheckedCreateWithoutSplitUserIdInput>
  }

  export type usersCreateWithoutSplitOwnerInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersCreateNestedManyWithoutUserInput
    reports?: reportsCreateNestedManyWithoutUserInput
    settlements?: settlementsCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsCreateNestedManyWithoutToUserInput
    expenses?: expensesCreateNestedManyWithoutUserInput
    paidExpenses?: expensesCreateNestedManyWithoutPaidInput
    userBalances?: balancesCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsCreateNestedManyWithoutSplitUserIdInput
  }

  export type usersUncheckedCreateWithoutSplitOwnerInput = {
    id?: string
    email: string
    password: string
    displayName: string
    avatarUrl: string
    mobileNumber: string
    social_login_provider: string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    groupmembers?: group_membersUncheckedCreateNestedManyWithoutUserInput
    reports?: reportsUncheckedCreateNestedManyWithoutUserInput
    settlements?: settlementsUncheckedCreateNestedManyWithoutFromUserInput
    tosettlements?: settlementsUncheckedCreateNestedManyWithoutToUserInput
    expenses?: expensesUncheckedCreateNestedManyWithoutUserInput
    paidExpenses?: expensesUncheckedCreateNestedManyWithoutPaidInput
    userBalances?: balancesUncheckedCreateNestedManyWithoutUserBalancesInput
    splitUserId?: expense_splitsUncheckedCreateNestedManyWithoutSplitUserIdInput
  }

  export type usersCreateOrConnectWithoutSplitOwnerInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSplitOwnerInput, usersUncheckedCreateWithoutSplitOwnerInput>
  }

  export type expensesCreateWithoutSplitExpenseInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    createdAt?: Date | string
    updatedAt?: Date | string
    group: groupsCreateNestedOneWithoutExpensesInput
    user: usersCreateNestedOneWithoutExpensesInput
    paid: usersCreateNestedOneWithoutPaidExpensesInput
    currency: currenciesCreateNestedOneWithoutExpensesInput
  }

  export type expensesUncheckedCreateWithoutSplitExpenseInput = {
    id?: string
    group_id: string
    created_by: string
    paid_by: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type expensesCreateOrConnectWithoutSplitExpenseInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutSplitExpenseInput, expensesUncheckedCreateWithoutSplitExpenseInput>
  }

  export type usersUpsertWithoutSplitUserIdInput = {
    update: XOR<usersUpdateWithoutSplitUserIdInput, usersUncheckedUpdateWithoutSplitUserIdInput>
    create: XOR<usersCreateWithoutSplitUserIdInput, usersUncheckedCreateWithoutSplitUserIdInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSplitUserIdInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSplitUserIdInput, usersUncheckedUpdateWithoutSplitUserIdInput>
  }

  export type usersUpdateWithoutSplitUserIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUpdateManyWithoutUserNestedInput
    reports?: reportsUpdateManyWithoutUserNestedInput
    settlements?: settlementsUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUpdateManyWithoutToUserNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUpdateManyWithoutUserBalancesNestedInput
    splitOwner?: expense_splitsUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUncheckedUpdateWithoutSplitUserIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    reports?: reportsUncheckedUpdateManyWithoutUserNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUncheckedUpdateManyWithoutToUserNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUncheckedUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUncheckedUpdateManyWithoutUserBalancesNestedInput
    splitOwner?: expense_splitsUncheckedUpdateManyWithoutSplitOwnerNestedInput
  }

  export type usersUpsertWithoutSplitOwnerInput = {
    update: XOR<usersUpdateWithoutSplitOwnerInput, usersUncheckedUpdateWithoutSplitOwnerInput>
    create: XOR<usersCreateWithoutSplitOwnerInput, usersUncheckedCreateWithoutSplitOwnerInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSplitOwnerInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSplitOwnerInput, usersUncheckedUpdateWithoutSplitOwnerInput>
  }

  export type usersUpdateWithoutSplitOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUpdateManyWithoutUserNestedInput
    reports?: reportsUpdateManyWithoutUserNestedInput
    settlements?: settlementsUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUpdateManyWithoutToUserNestedInput
    expenses?: expensesUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUpdateManyWithoutSplitUserIdNestedInput
  }

  export type usersUncheckedUpdateWithoutSplitOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    social_login_provider?: StringFieldUpdateOperationsInput | string
    contact_list?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    groupmembers?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    reports?: reportsUncheckedUpdateManyWithoutUserNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutFromUserNestedInput
    tosettlements?: settlementsUncheckedUpdateManyWithoutToUserNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutUserNestedInput
    paidExpenses?: expensesUncheckedUpdateManyWithoutPaidNestedInput
    userBalances?: balancesUncheckedUpdateManyWithoutUserBalancesNestedInput
    splitUserId?: expense_splitsUncheckedUpdateManyWithoutSplitUserIdNestedInput
  }

  export type expensesUpsertWithoutSplitExpenseInput = {
    update: XOR<expensesUpdateWithoutSplitExpenseInput, expensesUncheckedUpdateWithoutSplitExpenseInput>
    create: XOR<expensesCreateWithoutSplitExpenseInput, expensesUncheckedCreateWithoutSplitExpenseInput>
    where?: expensesWhereInput
  }

  export type expensesUpdateToOneWithWhereWithoutSplitExpenseInput = {
    where?: expensesWhereInput
    data: XOR<expensesUpdateWithoutSplitExpenseInput, expensesUncheckedUpdateWithoutSplitExpenseInput>
  }

  export type expensesUpdateWithoutSplitExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: groupsUpdateOneRequiredWithoutExpensesNestedInput
    user?: usersUpdateOneRequiredWithoutExpensesNestedInput
    paid?: usersUpdateOneRequiredWithoutPaidExpensesNestedInput
    currency?: currenciesUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateWithoutSplitExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    paid_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type groupsCreateManyCreatorInput = {
    id?: string
    name: string
    description?: string | null
    avatarUrl: string
    groupType?: $Enums.groupType
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    deletedAt?: Date | string | null
  }

  export type group_membersCreateManyUserInput = {
    id?: string
    role?: $Enums.groupRole
    joined_at?: Date | string
    group_id: string
    isInGroup?: boolean
    left_at?: Date | string | null
  }

  export type reportsCreateManyUserInput = {
    id?: string
    report_type?: $Enums.ReportType
    period_start: Date | string
    period_end: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    group_id: string
  }

  export type settlementsCreateManyFromUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    method?: $Enums.PaymentMethod
    settled_at: Date | string
    created_at?: Date | string
    currency_code: string
    to_user_id: string
    group_id: string
  }

  export type settlementsCreateManyToUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    method?: $Enums.PaymentMethod
    settled_at: Date | string
    created_at?: Date | string
    currency_code: string
    from_user_id: string
    group_id: string
  }

  export type expensesCreateManyUserInput = {
    id?: string
    group_id: string
    paid_by: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type expensesCreateManyPaidInput = {
    id?: string
    group_id: string
    created_by: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type balancesCreateManyUserBalancesInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    last_update: Date | string
    group_id: string
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type expense_splitsCreateManySplitUserIdInput = {
    id?: string
    own_by: string
    amount: Decimal | DecimalJsLike | number | string
    percentage: Decimal | DecimalJsLike | number | string
    expense_id: string
    exact_amount: Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsCreateManySplitOwnerInput = {
    id?: string
    user_id: string
    amount: Decimal | DecimalJsLike | number | string
    percentage: Decimal | DecimalJsLike | number | string
    expense_id: string
    exact_amount: Decimal | DecimalJsLike | number | string
  }

  export type groupsUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: group_membersUpdateManyWithoutGroupNestedInput
    reports?: reportsUpdateManyWithoutGroupNestedInput
    settlements?: settlementsUpdateManyWithoutGroupNestedInput
    expenses?: expensesUpdateManyWithoutGroupNestedInput
    groupBalances?: balancesUpdateManyWithoutGroupBalancesNestedInput
  }

  export type groupsUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: group_membersUncheckedUpdateManyWithoutGroupNestedInput
    reports?: reportsUncheckedUpdateManyWithoutGroupNestedInput
    settlements?: settlementsUncheckedUpdateManyWithoutGroupNestedInput
    expenses?: expensesUncheckedUpdateManyWithoutGroupNestedInput
    groupBalances?: balancesUncheckedUpdateManyWithoutGroupBalancesNestedInput
  }

  export type groupsUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: StringFieldUpdateOperationsInput | string
    groupType?: EnumgroupTypeFieldUpdateOperationsInput | $Enums.groupType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_membersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumgroupRoleFieldUpdateOperationsInput | $Enums.groupRole
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isInGroup?: BoolFieldUpdateOperationsInput | boolean
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: groupsUpdateOneRequiredWithoutMemberNestedInput
  }

  export type group_membersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumgroupRoleFieldUpdateOperationsInput | $Enums.groupRole
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
    isInGroup?: BoolFieldUpdateOperationsInput | boolean
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_membersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumgroupRoleFieldUpdateOperationsInput | $Enums.groupRole
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
    isInGroup?: BoolFieldUpdateOperationsInput | boolean
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: groupsUpdateOneRequiredWithoutReportsNestedInput
  }

  export type reportsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
  }

  export type reportsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
  }

  export type settlementsUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
    toUser?: usersUpdateOneRequiredWithoutTosettlementsNestedInput
    group?: groupsUpdateOneRequiredWithoutSettlementsNestedInput
  }

  export type settlementsUncheckedUpdateWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
    to_user_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
  }

  export type settlementsUncheckedUpdateManyWithoutFromUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
    to_user_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
  }

  export type settlementsUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
    fromUser?: usersUpdateOneRequiredWithoutSettlementsNestedInput
    group?: groupsUpdateOneRequiredWithoutSettlementsNestedInput
  }

  export type settlementsUncheckedUpdateWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
    from_user_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
  }

  export type settlementsUncheckedUpdateManyWithoutToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
    from_user_id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
  }

  export type expensesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: groupsUpdateOneRequiredWithoutExpensesNestedInput
    paid?: usersUpdateOneRequiredWithoutPaidExpensesNestedInput
    currency?: currenciesUpdateOneRequiredWithoutExpensesNestedInput
    splitExpense?: expense_splitsUpdateManyWithoutExpenseIdNestedInput
  }

  export type expensesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    paid_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    splitExpense?: expense_splitsUncheckedUpdateManyWithoutExpenseIdNestedInput
  }

  export type expensesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    paid_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesUpdateWithoutPaidInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: groupsUpdateOneRequiredWithoutExpensesNestedInput
    user?: usersUpdateOneRequiredWithoutExpensesNestedInput
    currency?: currenciesUpdateOneRequiredWithoutExpensesNestedInput
    splitExpense?: expense_splitsUpdateManyWithoutExpenseIdNestedInput
  }

  export type expensesUncheckedUpdateWithoutPaidInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    splitExpense?: expense_splitsUncheckedUpdateManyWithoutExpenseIdNestedInput
  }

  export type expensesUncheckedUpdateManyWithoutPaidInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balancesUpdateWithoutUserBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupBalances?: groupsUpdateOneRequiredWithoutGroupBalancesNestedInput
    currency?: currenciesUpdateOneRequiredWithoutBalanceNestedInput
  }

  export type balancesUncheckedUpdateWithoutUserBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balancesUncheckedUpdateManyWithoutUserBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expense_splitsUpdateWithoutSplitUserIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitOwner?: usersUpdateOneRequiredWithoutSplitOwnerNestedInput
    expenseId?: expensesUpdateOneRequiredWithoutSplitExpenseNestedInput
  }

  export type expense_splitsUncheckedUpdateWithoutSplitUserIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    own_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expense_id?: StringFieldUpdateOperationsInput | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsUncheckedUpdateManyWithoutSplitUserIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    own_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expense_id?: StringFieldUpdateOperationsInput | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsUpdateWithoutSplitOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitUserId?: usersUpdateOneRequiredWithoutSplitUserIdNestedInput
    expenseId?: expensesUpdateOneRequiredWithoutSplitExpenseNestedInput
  }

  export type expense_splitsUncheckedUpdateWithoutSplitOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expense_id?: StringFieldUpdateOperationsInput | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsUncheckedUpdateManyWithoutSplitOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expense_id?: StringFieldUpdateOperationsInput | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type group_membersCreateManyGroupInput = {
    id?: string
    role?: $Enums.groupRole
    joined_at?: Date | string
    user_id: string
    isInGroup?: boolean
    left_at?: Date | string | null
  }

  export type reportsCreateManyGroupInput = {
    id?: string
    report_type?: $Enums.ReportType
    period_start: Date | string
    period_end: Date | string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user_id: string
  }

  export type settlementsCreateManyGroupInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    status?: $Enums.SettlementStatus
    method?: $Enums.PaymentMethod
    settled_at: Date | string
    created_at?: Date | string
    currency_code: string
    from_user_id: string
    to_user_id: string
  }

  export type expensesCreateManyGroupInput = {
    id?: string
    created_by: string
    paid_by: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type balancesCreateManyGroupBalancesInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    last_update: Date | string
    user_id: string
    currency_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type group_membersUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumgroupRoleFieldUpdateOperationsInput | $Enums.groupRole
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isInGroup?: BoolFieldUpdateOperationsInput | boolean
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutGroupmembersNestedInput
  }

  export type group_membersUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumgroupRoleFieldUpdateOperationsInput | $Enums.groupRole
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    isInGroup?: BoolFieldUpdateOperationsInput | boolean
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_membersUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumgroupRoleFieldUpdateOperationsInput | $Enums.groupRole
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    isInGroup?: BoolFieldUpdateOperationsInput | boolean
    left_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reportsUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutReportsNestedInput
  }

  export type reportsUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type reportsUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type settlementsUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
    fromUser?: usersUpdateOneRequiredWithoutSettlementsNestedInput
    toUser?: usersUpdateOneRequiredWithoutTosettlementsNestedInput
  }

  export type settlementsUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
    from_user_id?: StringFieldUpdateOperationsInput | string
    to_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type settlementsUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSettlementStatusFieldUpdateOperationsInput | $Enums.SettlementStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    settled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_code?: StringFieldUpdateOperationsInput | string
    from_user_id?: StringFieldUpdateOperationsInput | string
    to_user_id?: StringFieldUpdateOperationsInput | string
  }

  export type expensesUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutExpensesNestedInput
    paid?: usersUpdateOneRequiredWithoutPaidExpensesNestedInput
    currency?: currenciesUpdateOneRequiredWithoutExpensesNestedInput
    splitExpense?: expense_splitsUpdateManyWithoutExpenseIdNestedInput
  }

  export type expensesUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    paid_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    splitExpense?: expense_splitsUncheckedUpdateManyWithoutExpenseIdNestedInput
  }

  export type expensesUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    paid_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balancesUpdateWithoutGroupBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBalances?: usersUpdateOneRequiredWithoutUserBalancesNestedInput
    currency?: currenciesUpdateOneRequiredWithoutBalanceNestedInput
  }

  export type balancesUncheckedUpdateWithoutGroupBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balancesUncheckedUpdateManyWithoutGroupBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    currency_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type exchange_ratesCreateManyFromCurrencyInput = {
    id?: string
    to_currency: string
    rate_date: Date | string
  }

  export type exchange_ratesCreateManyToCurrencyInput = {
    id?: string
    from_currency: string
    rate_date: Date | string
  }

  export type expensesCreateManyCurrencyInput = {
    id?: string
    group_id: string
    created_by: string
    paid_by: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    category: string
    expense_data: Date | string
    split_type?: $Enums.splitType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type balancesCreateManyCurrencyInput = {
    id?: string
    balance: Decimal | DecimalJsLike | number | string
    last_update: Date | string
    group_id: string
    user_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type exchange_ratesUpdateWithoutFromCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate_date?: DateTimeFieldUpdateOperationsInput | Date | string
    toCurrency?: currenciesUpdateOneRequiredWithoutToCurrencyNestedInput
  }

  export type exchange_ratesUncheckedUpdateWithoutFromCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    to_currency?: StringFieldUpdateOperationsInput | string
    rate_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type exchange_ratesUncheckedUpdateManyWithoutFromCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    to_currency?: StringFieldUpdateOperationsInput | string
    rate_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type exchange_ratesUpdateWithoutToCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rate_date?: DateTimeFieldUpdateOperationsInput | Date | string
    fromCurrency?: currenciesUpdateOneRequiredWithoutFromCurrencyNestedInput
  }

  export type exchange_ratesUncheckedUpdateWithoutToCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_currency?: StringFieldUpdateOperationsInput | string
    rate_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type exchange_ratesUncheckedUpdateManyWithoutToCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_currency?: StringFieldUpdateOperationsInput | string
    rate_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expensesUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: groupsUpdateOneRequiredWithoutExpensesNestedInput
    user?: usersUpdateOneRequiredWithoutExpensesNestedInput
    paid?: usersUpdateOneRequiredWithoutPaidExpensesNestedInput
    splitExpense?: expense_splitsUpdateManyWithoutExpenseIdNestedInput
  }

  export type expensesUncheckedUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    paid_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    splitExpense?: expense_splitsUncheckedUpdateManyWithoutExpenseIdNestedInput
  }

  export type expensesUncheckedUpdateManyWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    paid_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    expense_data?: DateTimeFieldUpdateOperationsInput | Date | string
    split_type?: EnumsplitTypeFieldUpdateOperationsInput | $Enums.splitType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balancesUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupBalances?: groupsUpdateOneRequiredWithoutGroupBalancesNestedInput
    userBalances?: usersUpdateOneRequiredWithoutUserBalancesNestedInput
  }

  export type balancesUncheckedUpdateWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balancesUncheckedUpdateManyWithoutCurrencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    group_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type expense_splitsCreateManyExpenseIdInput = {
    id?: string
    user_id: string
    own_by: string
    amount: Decimal | DecimalJsLike | number | string
    percentage: Decimal | DecimalJsLike | number | string
    exact_amount: Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsUpdateWithoutExpenseIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    splitUserId?: usersUpdateOneRequiredWithoutSplitUserIdNestedInput
    splitOwner?: usersUpdateOneRequiredWithoutSplitOwnerNestedInput
  }

  export type expense_splitsUncheckedUpdateWithoutExpenseIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    own_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type expense_splitsUncheckedUpdateManyWithoutExpenseIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    own_by?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    percentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exact_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}