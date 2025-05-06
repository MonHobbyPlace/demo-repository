
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model PetPost
 * 
 */
export type PetPost = $Result.DefaultSelection<Prisma.$PetPostPayload>
/**
 * Model ServicePost
 * 
 */
export type ServicePost = $Result.DefaultSelection<Prisma.$ServicePostPayload>
/**
 * Model Hospital
 * 
 */
export type Hospital = $Result.DefaultSelection<Prisma.$HospitalPayload>
/**
 * Model PetCategory
 * 
 */
export type PetCategory = $Result.DefaultSelection<Prisma.$PetCategoryPayload>
/**
 * Model ServiceCategory
 * 
 */
export type ServiceCategory = $Result.DefaultSelection<Prisma.$ServiceCategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PetPostEnum: {
  SALE: 'SALE',
  ADOPT: 'ADOPT'
};

export type PetPostEnum = (typeof PetPostEnum)[keyof typeof PetPostEnum]


export const PetSizeEnum: {
  SMALL: 'SMALL',
  MIDDLE: 'MIDDLE',
  BIG: 'BIG'
};

export type PetSizeEnum = (typeof PetSizeEnum)[keyof typeof PetSizeEnum]


export const PetGenderEnum: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type PetGenderEnum = (typeof PetGenderEnum)[keyof typeof PetGenderEnum]


export const userRoleEnum: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type userRoleEnum = (typeof userRoleEnum)[keyof typeof userRoleEnum]

}

export type PetPostEnum = $Enums.PetPostEnum

export const PetPostEnum: typeof $Enums.PetPostEnum

export type PetSizeEnum = $Enums.PetSizeEnum

export const PetSizeEnum: typeof $Enums.PetSizeEnum

export type PetGenderEnum = $Enums.PetGenderEnum

export const PetGenderEnum: typeof $Enums.PetGenderEnum

export type userRoleEnum = $Enums.userRoleEnum

export const userRoleEnum: typeof $Enums.userRoleEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petPost`: Exposes CRUD operations for the **PetPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PetPosts
    * const petPosts = await prisma.petPost.findMany()
    * ```
    */
  get petPost(): Prisma.PetPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicePost`: Exposes CRUD operations for the **ServicePost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicePosts
    * const servicePosts = await prisma.servicePost.findMany()
    * ```
    */
  get servicePost(): Prisma.ServicePostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **Hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.HospitalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petCategory`: Exposes CRUD operations for the **PetCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PetCategories
    * const petCategories = await prisma.petCategory.findMany()
    * ```
    */
  get petCategory(): Prisma.PetCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceCategory`: Exposes CRUD operations for the **ServiceCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceCategories
    * const serviceCategories = await prisma.serviceCategory.findMany()
    * ```
    */
  get serviceCategory(): Prisma.ServiceCategoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Message: 'Message',
    PetPost: 'PetPost',
    ServicePost: 'ServicePost',
    Hospital: 'Hospital',
    PetCategory: 'PetCategory',
    ServiceCategory: 'ServiceCategory'
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
      modelProps: "user" | "message" | "petPost" | "servicePost" | "hospital" | "petCategory" | "serviceCategory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      PetPost: {
        payload: Prisma.$PetPostPayload<ExtArgs>
        fields: Prisma.PetPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>
          }
          findFirst: {
            args: Prisma.PetPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>
          }
          findMany: {
            args: Prisma.PetPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>[]
          }
          create: {
            args: Prisma.PetPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>
          }
          createMany: {
            args: Prisma.PetPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>[]
          }
          delete: {
            args: Prisma.PetPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>
          }
          update: {
            args: Prisma.PetPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>
          }
          deleteMany: {
            args: Prisma.PetPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>[]
          }
          upsert: {
            args: Prisma.PetPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPostPayload>
          }
          aggregate: {
            args: Prisma.PetPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetPost>
          }
          groupBy: {
            args: Prisma.PetPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetPostCountArgs<ExtArgs>
            result: $Utils.Optional<PetPostCountAggregateOutputType> | number
          }
        }
      }
      ServicePost: {
        payload: Prisma.$ServicePostPayload<ExtArgs>
        fields: Prisma.ServicePostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicePostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicePostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePostPayload>
          }
          findFirst: {
            args: Prisma.ServicePostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicePostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePostPayload>
          }
          findMany: {
            args: Prisma.ServicePostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePostPayload>[]
          }
          create: {
            args: Prisma.ServicePostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePostPayload>
          }
          createMany: {
            args: Prisma.ServicePostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicePostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePostPayload>[]
          }
          delete: {
            args: Prisma.ServicePostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePostPayload>
          }
          update: {
            args: Prisma.ServicePostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePostPayload>
          }
          deleteMany: {
            args: Prisma.ServicePostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicePostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicePostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePostPayload>[]
          }
          upsert: {
            args: Prisma.ServicePostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePostPayload>
          }
          aggregate: {
            args: Prisma.ServicePostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicePost>
          }
          groupBy: {
            args: Prisma.ServicePostGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicePostGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicePostCountArgs<ExtArgs>
            result: $Utils.Optional<ServicePostCountAggregateOutputType> | number
          }
        }
      }
      Hospital: {
        payload: Prisma.$HospitalPayload<ExtArgs>
        fields: Prisma.HospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findFirst: {
            args: Prisma.HospitalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findMany: {
            args: Prisma.HospitalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          create: {
            args: Prisma.HospitalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          createMany: {
            args: Prisma.HospitalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          delete: {
            args: Prisma.HospitalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          update: {
            args: Prisma.HospitalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          deleteMany: {
            args: Prisma.HospitalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospitalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          upsert: {
            args: Prisma.HospitalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospital>
          }
          groupBy: {
            args: Prisma.HospitalGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number
          }
        }
      }
      PetCategory: {
        payload: Prisma.$PetCategoryPayload<ExtArgs>
        fields: Prisma.PetCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetCategoryPayload>
          }
          findFirst: {
            args: Prisma.PetCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetCategoryPayload>
          }
          findMany: {
            args: Prisma.PetCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetCategoryPayload>[]
          }
          create: {
            args: Prisma.PetCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetCategoryPayload>
          }
          createMany: {
            args: Prisma.PetCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetCategoryPayload>[]
          }
          delete: {
            args: Prisma.PetCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetCategoryPayload>
          }
          update: {
            args: Prisma.PetCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PetCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetCategoryPayload>[]
          }
          upsert: {
            args: Prisma.PetCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetCategoryPayload>
          }
          aggregate: {
            args: Prisma.PetCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetCategory>
          }
          groupBy: {
            args: Prisma.PetCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PetCategoryCountAggregateOutputType> | number
          }
        }
      }
      ServiceCategory: {
        payload: Prisma.$ServiceCategoryPayload<ExtArgs>
        fields: Prisma.ServiceCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          findFirst: {
            args: Prisma.ServiceCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          findMany: {
            args: Prisma.ServiceCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          create: {
            args: Prisma.ServiceCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          createMany: {
            args: Prisma.ServiceCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          delete: {
            args: Prisma.ServiceCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          update: {
            args: Prisma.ServiceCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ServiceCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ServiceCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCategoryPayload>
          }
          aggregate: {
            args: Prisma.ServiceCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceCategory>
          }
          groupBy: {
            args: Prisma.ServiceCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCategoryCountAggregateOutputType> | number
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
    user?: UserOmit
    message?: MessageOmit
    petPost?: PetPostOmit
    servicePost?: ServicePostOmit
    hospital?: HospitalOmit
    petCategory?: PetCategoryOmit
    serviceCategory?: ServiceCategoryOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    PetPost: number
    ServicePost: number
    messages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PetPost?: boolean | UserCountOutputTypeCountPetPostArgs
    ServicePost?: boolean | UserCountOutputTypeCountServicePostArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPetPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServicePostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type PetCategoryCountOutputType
   */

  export type PetCategoryCountOutputType = {
    PetPost: number
    ServicePost: number
  }

  export type PetCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PetPost?: boolean | PetCategoryCountOutputTypeCountPetPostArgs
    ServicePost?: boolean | PetCategoryCountOutputTypeCountServicePostArgs
  }

  // Custom InputTypes
  /**
   * PetCategoryCountOutputType without action
   */
  export type PetCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategoryCountOutputType
     */
    select?: PetCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCategoryCountOutputType without action
   */
  export type PetCategoryCountOutputTypeCountPetPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetPostWhereInput
  }

  /**
   * PetCategoryCountOutputType without action
   */
  export type PetCategoryCountOutputTypeCountServicePostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePostWhereInput
  }


  /**
   * Count Type ServiceCategoryCountOutputType
   */

  export type ServiceCategoryCountOutputType = {
    ServicePost: number
  }

  export type ServiceCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ServicePost?: boolean | ServiceCategoryCountOutputTypeCountServicePostArgs
  }

  // Custom InputTypes
  /**
   * ServiceCategoryCountOutputType without action
   */
  export type ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategoryCountOutputType
     */
    select?: ServiceCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCategoryCountOutputType without action
   */
  export type ServiceCategoryCountOutputTypeCountServicePostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.userRoleEnum | null
    location: string | null
    profileImage: string | null
    backgroundImage: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.userRoleEnum | null
    location: string | null
    profileImage: string | null
    backgroundImage: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    createdAt: number
    updatedAt: number
    role: number
    location: number
    profileImage: number
    backgroundImage: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    location?: true
    profileImage?: true
    backgroundImage?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    location?: true
    profileImage?: true
    backgroundImage?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    location?: true
    profileImage?: true
    backgroundImage?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    username: string
    createdAt: Date
    updatedAt: Date
    role: $Enums.userRoleEnum
    location: string | null
    profileImage: string | null
    backgroundImage: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    location?: boolean
    profileImage?: boolean
    backgroundImage?: boolean
    PetPost?: boolean | User$PetPostArgs<ExtArgs>
    ServicePost?: boolean | User$ServicePostArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    location?: boolean
    profileImage?: boolean
    backgroundImage?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    location?: boolean
    profileImage?: boolean
    backgroundImage?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    location?: boolean
    profileImage?: boolean
    backgroundImage?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "username" | "createdAt" | "updatedAt" | "role" | "location" | "profileImage" | "backgroundImage", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PetPost?: boolean | User$PetPostArgs<ExtArgs>
    ServicePost?: boolean | User$ServicePostArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      PetPost: Prisma.$PetPostPayload<ExtArgs>[]
      ServicePost: Prisma.$ServicePostPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      username: string
      createdAt: Date
      updatedAt: Date
      role: $Enums.userRoleEnum
      location: string | null
      profileImage: string | null
      backgroundImage: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PetPost<T extends User$PetPostArgs<ExtArgs> = {}>(args?: Subset<T, User$PetPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ServicePost<T extends User$ServicePostArgs<ExtArgs> = {}>(args?: Subset<T, User$ServicePostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'userRoleEnum'>
    readonly location: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly backgroundImage: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.PetPost
   */
  export type User$PetPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    where?: PetPostWhereInput
    orderBy?: PetPostOrderByWithRelationInput | PetPostOrderByWithRelationInput[]
    cursor?: PetPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetPostScalarFieldEnum | PetPostScalarFieldEnum[]
  }

  /**
   * User.ServicePost
   */
  export type User$ServicePostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
    where?: ServicePostWhereInput
    orderBy?: ServicePostOrderByWithRelationInput | ServicePostOrderByWithRelationInput[]
    cursor?: ServicePostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicePostScalarFieldEnum | ServicePostScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    senderId: number | null
  }

  export type MessageSumAggregateOutputType = {
    senderId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    timestamp: Date | null
    senderId: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    timestamp: Date | null
    senderId: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    timestamp: number
    senderId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    senderId?: true
  }

  export type MessageSumAggregateInputType = {
    senderId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    timestamp?: true
    senderId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    timestamp?: true
    senderId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    timestamp?: true
    senderId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    timestamp: Date
    senderId: number
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    timestamp?: boolean
    senderId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    timestamp?: boolean
    senderId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    timestamp?: boolean
    senderId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    timestamp?: boolean
    senderId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "timestamp" | "senderId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      timestamp: Date
      senderId: number
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly timestamp: FieldRef<"Message", 'DateTime'>
    readonly senderId: FieldRef<"Message", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model PetPost
   */

  export type AggregatePetPost = {
    _count: PetPostCountAggregateOutputType | null
    _avg: PetPostAvgAggregateOutputType | null
    _sum: PetPostSumAggregateOutputType | null
    _min: PetPostMinAggregateOutputType | null
    _max: PetPostMaxAggregateOutputType | null
  }

  export type PetPostAvgAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
    userId: number | null
    age: number | null
    price: number | null
    petCategoryId: number | null
  }

  export type PetPostSumAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
    userId: number | null
    age: number | null
    price: number | null
    petCategoryId: number | null
  }

  export type PetPostMinAggregateOutputType = {
    id: number | null
    petName: string | null
    address: string | null
    image: string | null
    phoneNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    age: number | null
    breed: string | null
    size: $Enums.PetSizeEnum | null
    gender: $Enums.PetGenderEnum | null
    price: number | null
    purpose: $Enums.PetPostEnum | null
    petCategoryId: number | null
    video: string | null
  }

  export type PetPostMaxAggregateOutputType = {
    id: number | null
    petName: string | null
    address: string | null
    image: string | null
    phoneNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    age: number | null
    breed: string | null
    size: $Enums.PetSizeEnum | null
    gender: $Enums.PetGenderEnum | null
    price: number | null
    purpose: $Enums.PetPostEnum | null
    petCategoryId: number | null
    video: string | null
  }

  export type PetPostCountAggregateOutputType = {
    id: number
    petName: number
    address: number
    about: number
    image: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    userId: number
    age: number
    breed: number
    size: number
    gender: number
    price: number
    purpose: number
    petCategoryId: number
    video: number
    _all: number
  }


  export type PetPostAvgAggregateInputType = {
    id?: true
    phoneNumber?: true
    userId?: true
    age?: true
    price?: true
    petCategoryId?: true
  }

  export type PetPostSumAggregateInputType = {
    id?: true
    phoneNumber?: true
    userId?: true
    age?: true
    price?: true
    petCategoryId?: true
  }

  export type PetPostMinAggregateInputType = {
    id?: true
    petName?: true
    address?: true
    image?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    age?: true
    breed?: true
    size?: true
    gender?: true
    price?: true
    purpose?: true
    petCategoryId?: true
    video?: true
  }

  export type PetPostMaxAggregateInputType = {
    id?: true
    petName?: true
    address?: true
    image?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    age?: true
    breed?: true
    size?: true
    gender?: true
    price?: true
    purpose?: true
    petCategoryId?: true
    video?: true
  }

  export type PetPostCountAggregateInputType = {
    id?: true
    petName?: true
    address?: true
    about?: true
    image?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    age?: true
    breed?: true
    size?: true
    gender?: true
    price?: true
    purpose?: true
    petCategoryId?: true
    video?: true
    _all?: true
  }

  export type PetPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetPost to aggregate.
     */
    where?: PetPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetPosts to fetch.
     */
    orderBy?: PetPostOrderByWithRelationInput | PetPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PetPosts
    **/
    _count?: true | PetPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetPostMaxAggregateInputType
  }

  export type GetPetPostAggregateType<T extends PetPostAggregateArgs> = {
        [P in keyof T & keyof AggregatePetPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetPost[P]>
      : GetScalarType<T[P], AggregatePetPost[P]>
  }




  export type PetPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetPostWhereInput
    orderBy?: PetPostOrderByWithAggregationInput | PetPostOrderByWithAggregationInput[]
    by: PetPostScalarFieldEnum[] | PetPostScalarFieldEnum
    having?: PetPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetPostCountAggregateInputType | true
    _avg?: PetPostAvgAggregateInputType
    _sum?: PetPostSumAggregateInputType
    _min?: PetPostMinAggregateInputType
    _max?: PetPostMaxAggregateInputType
  }

  export type PetPostGroupByOutputType = {
    id: number
    petName: string
    address: string
    about: string[]
    image: string
    phoneNumber: number
    createdAt: Date
    updatedAt: Date
    userId: number
    age: number
    breed: string
    size: $Enums.PetSizeEnum
    gender: $Enums.PetGenderEnum
    price: number
    purpose: $Enums.PetPostEnum
    petCategoryId: number
    video: string
    _count: PetPostCountAggregateOutputType | null
    _avg: PetPostAvgAggregateOutputType | null
    _sum: PetPostSumAggregateOutputType | null
    _min: PetPostMinAggregateOutputType | null
    _max: PetPostMaxAggregateOutputType | null
  }

  type GetPetPostGroupByPayload<T extends PetPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetPostGroupByOutputType[P]>
            : GetScalarType<T[P], PetPostGroupByOutputType[P]>
        }
      >
    >


  export type PetPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petName?: boolean
    address?: boolean
    about?: boolean
    image?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    age?: boolean
    breed?: boolean
    size?: boolean
    gender?: boolean
    price?: boolean
    purpose?: boolean
    petCategoryId?: boolean
    video?: boolean
    category?: boolean | PetCategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petPost"]>

  export type PetPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petName?: boolean
    address?: boolean
    about?: boolean
    image?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    age?: boolean
    breed?: boolean
    size?: boolean
    gender?: boolean
    price?: boolean
    purpose?: boolean
    petCategoryId?: boolean
    video?: boolean
    category?: boolean | PetCategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petPost"]>

  export type PetPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petName?: boolean
    address?: boolean
    about?: boolean
    image?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    age?: boolean
    breed?: boolean
    size?: boolean
    gender?: boolean
    price?: boolean
    purpose?: boolean
    petCategoryId?: boolean
    video?: boolean
    category?: boolean | PetCategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petPost"]>

  export type PetPostSelectScalar = {
    id?: boolean
    petName?: boolean
    address?: boolean
    about?: boolean
    image?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    age?: boolean
    breed?: boolean
    size?: boolean
    gender?: boolean
    price?: boolean
    purpose?: boolean
    petCategoryId?: boolean
    video?: boolean
  }

  export type PetPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "petName" | "address" | "about" | "image" | "phoneNumber" | "createdAt" | "updatedAt" | "userId" | "age" | "breed" | "size" | "gender" | "price" | "purpose" | "petCategoryId" | "video", ExtArgs["result"]["petPost"]>
  export type PetPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PetCategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PetPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PetCategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PetPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PetCategoryDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PetPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PetPost"
    objects: {
      category: Prisma.$PetCategoryPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      petName: string
      address: string
      about: string[]
      image: string
      phoneNumber: number
      createdAt: Date
      updatedAt: Date
      userId: number
      age: number
      breed: string
      size: $Enums.PetSizeEnum
      gender: $Enums.PetGenderEnum
      price: number
      purpose: $Enums.PetPostEnum
      petCategoryId: number
      video: string
    }, ExtArgs["result"]["petPost"]>
    composites: {}
  }

  type PetPostGetPayload<S extends boolean | null | undefined | PetPostDefaultArgs> = $Result.GetResult<Prisma.$PetPostPayload, S>

  type PetPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetPostCountAggregateInputType | true
    }

  export interface PetPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PetPost'], meta: { name: 'PetPost' } }
    /**
     * Find zero or one PetPost that matches the filter.
     * @param {PetPostFindUniqueArgs} args - Arguments to find a PetPost
     * @example
     * // Get one PetPost
     * const petPost = await prisma.petPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetPostFindUniqueArgs>(args: SelectSubset<T, PetPostFindUniqueArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PetPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetPostFindUniqueOrThrowArgs} args - Arguments to find a PetPost
     * @example
     * // Get one PetPost
     * const petPost = await prisma.petPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetPostFindUniqueOrThrowArgs>(args: SelectSubset<T, PetPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostFindFirstArgs} args - Arguments to find a PetPost
     * @example
     * // Get one PetPost
     * const petPost = await prisma.petPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetPostFindFirstArgs>(args?: SelectSubset<T, PetPostFindFirstArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostFindFirstOrThrowArgs} args - Arguments to find a PetPost
     * @example
     * // Get one PetPost
     * const petPost = await prisma.petPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetPostFindFirstOrThrowArgs>(args?: SelectSubset<T, PetPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PetPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PetPosts
     * const petPosts = await prisma.petPost.findMany()
     * 
     * // Get first 10 PetPosts
     * const petPosts = await prisma.petPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petPostWithIdOnly = await prisma.petPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetPostFindManyArgs>(args?: SelectSubset<T, PetPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PetPost.
     * @param {PetPostCreateArgs} args - Arguments to create a PetPost.
     * @example
     * // Create one PetPost
     * const PetPost = await prisma.petPost.create({
     *   data: {
     *     // ... data to create a PetPost
     *   }
     * })
     * 
     */
    create<T extends PetPostCreateArgs>(args: SelectSubset<T, PetPostCreateArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PetPosts.
     * @param {PetPostCreateManyArgs} args - Arguments to create many PetPosts.
     * @example
     * // Create many PetPosts
     * const petPost = await prisma.petPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetPostCreateManyArgs>(args?: SelectSubset<T, PetPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PetPosts and returns the data saved in the database.
     * @param {PetPostCreateManyAndReturnArgs} args - Arguments to create many PetPosts.
     * @example
     * // Create many PetPosts
     * const petPost = await prisma.petPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PetPosts and only return the `id`
     * const petPostWithIdOnly = await prisma.petPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetPostCreateManyAndReturnArgs>(args?: SelectSubset<T, PetPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PetPost.
     * @param {PetPostDeleteArgs} args - Arguments to delete one PetPost.
     * @example
     * // Delete one PetPost
     * const PetPost = await prisma.petPost.delete({
     *   where: {
     *     // ... filter to delete one PetPost
     *   }
     * })
     * 
     */
    delete<T extends PetPostDeleteArgs>(args: SelectSubset<T, PetPostDeleteArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PetPost.
     * @param {PetPostUpdateArgs} args - Arguments to update one PetPost.
     * @example
     * // Update one PetPost
     * const petPost = await prisma.petPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetPostUpdateArgs>(args: SelectSubset<T, PetPostUpdateArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PetPosts.
     * @param {PetPostDeleteManyArgs} args - Arguments to filter PetPosts to delete.
     * @example
     * // Delete a few PetPosts
     * const { count } = await prisma.petPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetPostDeleteManyArgs>(args?: SelectSubset<T, PetPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PetPosts
     * const petPost = await prisma.petPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetPostUpdateManyArgs>(args: SelectSubset<T, PetPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetPosts and returns the data updated in the database.
     * @param {PetPostUpdateManyAndReturnArgs} args - Arguments to update many PetPosts.
     * @example
     * // Update many PetPosts
     * const petPost = await prisma.petPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PetPosts and only return the `id`
     * const petPostWithIdOnly = await prisma.petPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends PetPostUpdateManyAndReturnArgs>(args: SelectSubset<T, PetPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PetPost.
     * @param {PetPostUpsertArgs} args - Arguments to update or create a PetPost.
     * @example
     * // Update or create a PetPost
     * const petPost = await prisma.petPost.upsert({
     *   create: {
     *     // ... data to create a PetPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PetPost we want to update
     *   }
     * })
     */
    upsert<T extends PetPostUpsertArgs>(args: SelectSubset<T, PetPostUpsertArgs<ExtArgs>>): Prisma__PetPostClient<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PetPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostCountArgs} args - Arguments to filter PetPosts to count.
     * @example
     * // Count the number of PetPosts
     * const count = await prisma.petPost.count({
     *   where: {
     *     // ... the filter for the PetPosts we want to count
     *   }
     * })
    **/
    count<T extends PetPostCountArgs>(
      args?: Subset<T, PetPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PetPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetPostAggregateArgs>(args: Subset<T, PetPostAggregateArgs>): Prisma.PrismaPromise<GetPetPostAggregateType<T>>

    /**
     * Group by PetPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetPostGroupByArgs} args - Group by arguments.
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
      T extends PetPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetPostGroupByArgs['orderBy'] }
        : { orderBy?: PetPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PetPost model
   */
  readonly fields: PetPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PetPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends PetCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetCategoryDefaultArgs<ExtArgs>>): Prisma__PetCategoryClient<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PetPost model
   */
  interface PetPostFieldRefs {
    readonly id: FieldRef<"PetPost", 'Int'>
    readonly petName: FieldRef<"PetPost", 'String'>
    readonly address: FieldRef<"PetPost", 'String'>
    readonly about: FieldRef<"PetPost", 'String[]'>
    readonly image: FieldRef<"PetPost", 'String'>
    readonly phoneNumber: FieldRef<"PetPost", 'Int'>
    readonly createdAt: FieldRef<"PetPost", 'DateTime'>
    readonly updatedAt: FieldRef<"PetPost", 'DateTime'>
    readonly userId: FieldRef<"PetPost", 'Int'>
    readonly age: FieldRef<"PetPost", 'Int'>
    readonly breed: FieldRef<"PetPost", 'String'>
    readonly size: FieldRef<"PetPost", 'PetSizeEnum'>
    readonly gender: FieldRef<"PetPost", 'PetGenderEnum'>
    readonly price: FieldRef<"PetPost", 'Int'>
    readonly purpose: FieldRef<"PetPost", 'PetPostEnum'>
    readonly petCategoryId: FieldRef<"PetPost", 'Int'>
    readonly video: FieldRef<"PetPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PetPost findUnique
   */
  export type PetPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * Filter, which PetPost to fetch.
     */
    where: PetPostWhereUniqueInput
  }

  /**
   * PetPost findUniqueOrThrow
   */
  export type PetPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * Filter, which PetPost to fetch.
     */
    where: PetPostWhereUniqueInput
  }

  /**
   * PetPost findFirst
   */
  export type PetPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * Filter, which PetPost to fetch.
     */
    where?: PetPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetPosts to fetch.
     */
    orderBy?: PetPostOrderByWithRelationInput | PetPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetPosts.
     */
    cursor?: PetPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetPosts.
     */
    distinct?: PetPostScalarFieldEnum | PetPostScalarFieldEnum[]
  }

  /**
   * PetPost findFirstOrThrow
   */
  export type PetPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * Filter, which PetPost to fetch.
     */
    where?: PetPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetPosts to fetch.
     */
    orderBy?: PetPostOrderByWithRelationInput | PetPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetPosts.
     */
    cursor?: PetPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetPosts.
     */
    distinct?: PetPostScalarFieldEnum | PetPostScalarFieldEnum[]
  }

  /**
   * PetPost findMany
   */
  export type PetPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * Filter, which PetPosts to fetch.
     */
    where?: PetPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetPosts to fetch.
     */
    orderBy?: PetPostOrderByWithRelationInput | PetPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PetPosts.
     */
    cursor?: PetPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetPosts.
     */
    skip?: number
    distinct?: PetPostScalarFieldEnum | PetPostScalarFieldEnum[]
  }

  /**
   * PetPost create
   */
  export type PetPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * The data needed to create a PetPost.
     */
    data: XOR<PetPostCreateInput, PetPostUncheckedCreateInput>
  }

  /**
   * PetPost createMany
   */
  export type PetPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PetPosts.
     */
    data: PetPostCreateManyInput | PetPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PetPost createManyAndReturn
   */
  export type PetPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * The data used to create many PetPosts.
     */
    data: PetPostCreateManyInput | PetPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PetPost update
   */
  export type PetPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * The data needed to update a PetPost.
     */
    data: XOR<PetPostUpdateInput, PetPostUncheckedUpdateInput>
    /**
     * Choose, which PetPost to update.
     */
    where: PetPostWhereUniqueInput
  }

  /**
   * PetPost updateMany
   */
  export type PetPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PetPosts.
     */
    data: XOR<PetPostUpdateManyMutationInput, PetPostUncheckedUpdateManyInput>
    /**
     * Filter which PetPosts to update
     */
    where?: PetPostWhereInput
    /**
     * Limit how many PetPosts to update.
     */
    limit?: number
  }

  /**
   * PetPost updateManyAndReturn
   */
  export type PetPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * The data used to update PetPosts.
     */
    data: XOR<PetPostUpdateManyMutationInput, PetPostUncheckedUpdateManyInput>
    /**
     * Filter which PetPosts to update
     */
    where?: PetPostWhereInput
    /**
     * Limit how many PetPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PetPost upsert
   */
  export type PetPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * The filter to search for the PetPost to update in case it exists.
     */
    where: PetPostWhereUniqueInput
    /**
     * In case the PetPost found by the `where` argument doesn't exist, create a new PetPost with this data.
     */
    create: XOR<PetPostCreateInput, PetPostUncheckedCreateInput>
    /**
     * In case the PetPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetPostUpdateInput, PetPostUncheckedUpdateInput>
  }

  /**
   * PetPost delete
   */
  export type PetPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    /**
     * Filter which PetPost to delete.
     */
    where: PetPostWhereUniqueInput
  }

  /**
   * PetPost deleteMany
   */
  export type PetPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetPosts to delete
     */
    where?: PetPostWhereInput
    /**
     * Limit how many PetPosts to delete.
     */
    limit?: number
  }

  /**
   * PetPost without action
   */
  export type PetPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
  }


  /**
   * Model ServicePost
   */

  export type AggregateServicePost = {
    _count: ServicePostCountAggregateOutputType | null
    _avg: ServicePostAvgAggregateOutputType | null
    _sum: ServicePostSumAggregateOutputType | null
    _min: ServicePostMinAggregateOutputType | null
    _max: ServicePostMaxAggregateOutputType | null
  }

  export type ServicePostAvgAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
    userId: number | null
    age: number | null
    petCategoryId: number | null
    serviceId: number | null
    cost: number | null
  }

  export type ServicePostSumAggregateOutputType = {
    id: number | null
    phoneNumber: number | null
    userId: number | null
    age: number | null
    petCategoryId: number | null
    serviceId: number | null
    cost: number | null
  }

  export type ServicePostMinAggregateOutputType = {
    id: number | null
    address: string | null
    about: string | null
    image: string | null
    phoneNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    age: number | null
    purpose: $Enums.PetPostEnum | null
    petCategoryId: number | null
    serviceId: number | null
    cost: number | null
  }

  export type ServicePostMaxAggregateOutputType = {
    id: number | null
    address: string | null
    about: string | null
    image: string | null
    phoneNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    age: number | null
    purpose: $Enums.PetPostEnum | null
    petCategoryId: number | null
    serviceId: number | null
    cost: number | null
  }

  export type ServicePostCountAggregateOutputType = {
    id: number
    address: number
    about: number
    image: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    userId: number
    age: number
    purpose: number
    petCategoryId: number
    serviceId: number
    cost: number
    skill: number
    _all: number
  }


  export type ServicePostAvgAggregateInputType = {
    id?: true
    phoneNumber?: true
    userId?: true
    age?: true
    petCategoryId?: true
    serviceId?: true
    cost?: true
  }

  export type ServicePostSumAggregateInputType = {
    id?: true
    phoneNumber?: true
    userId?: true
    age?: true
    petCategoryId?: true
    serviceId?: true
    cost?: true
  }

  export type ServicePostMinAggregateInputType = {
    id?: true
    address?: true
    about?: true
    image?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    age?: true
    purpose?: true
    petCategoryId?: true
    serviceId?: true
    cost?: true
  }

  export type ServicePostMaxAggregateInputType = {
    id?: true
    address?: true
    about?: true
    image?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    age?: true
    purpose?: true
    petCategoryId?: true
    serviceId?: true
    cost?: true
  }

  export type ServicePostCountAggregateInputType = {
    id?: true
    address?: true
    about?: true
    image?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    age?: true
    purpose?: true
    petCategoryId?: true
    serviceId?: true
    cost?: true
    skill?: true
    _all?: true
  }

  export type ServicePostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicePost to aggregate.
     */
    where?: ServicePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePosts to fetch.
     */
    orderBy?: ServicePostOrderByWithRelationInput | ServicePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicePosts
    **/
    _count?: true | ServicePostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicePostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicePostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicePostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicePostMaxAggregateInputType
  }

  export type GetServicePostAggregateType<T extends ServicePostAggregateArgs> = {
        [P in keyof T & keyof AggregateServicePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicePost[P]>
      : GetScalarType<T[P], AggregateServicePost[P]>
  }




  export type ServicePostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicePostWhereInput
    orderBy?: ServicePostOrderByWithAggregationInput | ServicePostOrderByWithAggregationInput[]
    by: ServicePostScalarFieldEnum[] | ServicePostScalarFieldEnum
    having?: ServicePostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicePostCountAggregateInputType | true
    _avg?: ServicePostAvgAggregateInputType
    _sum?: ServicePostSumAggregateInputType
    _min?: ServicePostMinAggregateInputType
    _max?: ServicePostMaxAggregateInputType
  }

  export type ServicePostGroupByOutputType = {
    id: number
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt: Date
    updatedAt: Date
    userId: number
    age: number
    purpose: $Enums.PetPostEnum
    petCategoryId: number
    serviceId: number
    cost: number
    skill: string[]
    _count: ServicePostCountAggregateOutputType | null
    _avg: ServicePostAvgAggregateOutputType | null
    _sum: ServicePostSumAggregateOutputType | null
    _min: ServicePostMinAggregateOutputType | null
    _max: ServicePostMaxAggregateOutputType | null
  }

  type GetServicePostGroupByPayload<T extends ServicePostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicePostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicePostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicePostGroupByOutputType[P]>
            : GetScalarType<T[P], ServicePostGroupByOutputType[P]>
        }
      >
    >


  export type ServicePostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    about?: boolean
    image?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    age?: boolean
    purpose?: boolean
    petCategoryId?: boolean
    serviceId?: boolean
    cost?: boolean
    skill?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | PetCategoryDefaultArgs<ExtArgs>
    serviceCategory?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePost"]>

  export type ServicePostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    about?: boolean
    image?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    age?: boolean
    purpose?: boolean
    petCategoryId?: boolean
    serviceId?: boolean
    cost?: boolean
    skill?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | PetCategoryDefaultArgs<ExtArgs>
    serviceCategory?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePost"]>

  export type ServicePostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    about?: boolean
    image?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    age?: boolean
    purpose?: boolean
    petCategoryId?: boolean
    serviceId?: boolean
    cost?: boolean
    skill?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | PetCategoryDefaultArgs<ExtArgs>
    serviceCategory?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicePost"]>

  export type ServicePostSelectScalar = {
    id?: boolean
    address?: boolean
    about?: boolean
    image?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    age?: boolean
    purpose?: boolean
    petCategoryId?: boolean
    serviceId?: boolean
    cost?: boolean
    skill?: boolean
  }

  export type ServicePostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "about" | "image" | "phoneNumber" | "createdAt" | "updatedAt" | "userId" | "age" | "purpose" | "petCategoryId" | "serviceId" | "cost" | "skill", ExtArgs["result"]["servicePost"]>
  export type ServicePostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | PetCategoryDefaultArgs<ExtArgs>
    serviceCategory?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }
  export type ServicePostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | PetCategoryDefaultArgs<ExtArgs>
    serviceCategory?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }
  export type ServicePostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | PetCategoryDefaultArgs<ExtArgs>
    serviceCategory?: boolean | ServiceCategoryDefaultArgs<ExtArgs>
  }

  export type $ServicePostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicePost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$PetCategoryPayload<ExtArgs>
      serviceCategory: Prisma.$ServiceCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      about: string
      image: string
      phoneNumber: number
      createdAt: Date
      updatedAt: Date
      userId: number
      age: number
      purpose: $Enums.PetPostEnum
      petCategoryId: number
      serviceId: number
      cost: number
      skill: string[]
    }, ExtArgs["result"]["servicePost"]>
    composites: {}
  }

  type ServicePostGetPayload<S extends boolean | null | undefined | ServicePostDefaultArgs> = $Result.GetResult<Prisma.$ServicePostPayload, S>

  type ServicePostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicePostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicePostCountAggregateInputType | true
    }

  export interface ServicePostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicePost'], meta: { name: 'ServicePost' } }
    /**
     * Find zero or one ServicePost that matches the filter.
     * @param {ServicePostFindUniqueArgs} args - Arguments to find a ServicePost
     * @example
     * // Get one ServicePost
     * const servicePost = await prisma.servicePost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicePostFindUniqueArgs>(args: SelectSubset<T, ServicePostFindUniqueArgs<ExtArgs>>): Prisma__ServicePostClient<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServicePost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicePostFindUniqueOrThrowArgs} args - Arguments to find a ServicePost
     * @example
     * // Get one ServicePost
     * const servicePost = await prisma.servicePost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicePostFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicePostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicePostClient<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicePost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePostFindFirstArgs} args - Arguments to find a ServicePost
     * @example
     * // Get one ServicePost
     * const servicePost = await prisma.servicePost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicePostFindFirstArgs>(args?: SelectSubset<T, ServicePostFindFirstArgs<ExtArgs>>): Prisma__ServicePostClient<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicePost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePostFindFirstOrThrowArgs} args - Arguments to find a ServicePost
     * @example
     * // Get one ServicePost
     * const servicePost = await prisma.servicePost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicePostFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicePostFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicePostClient<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServicePosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicePosts
     * const servicePosts = await prisma.servicePost.findMany()
     * 
     * // Get first 10 ServicePosts
     * const servicePosts = await prisma.servicePost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicePostWithIdOnly = await prisma.servicePost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicePostFindManyArgs>(args?: SelectSubset<T, ServicePostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServicePost.
     * @param {ServicePostCreateArgs} args - Arguments to create a ServicePost.
     * @example
     * // Create one ServicePost
     * const ServicePost = await prisma.servicePost.create({
     *   data: {
     *     // ... data to create a ServicePost
     *   }
     * })
     * 
     */
    create<T extends ServicePostCreateArgs>(args: SelectSubset<T, ServicePostCreateArgs<ExtArgs>>): Prisma__ServicePostClient<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServicePosts.
     * @param {ServicePostCreateManyArgs} args - Arguments to create many ServicePosts.
     * @example
     * // Create many ServicePosts
     * const servicePost = await prisma.servicePost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicePostCreateManyArgs>(args?: SelectSubset<T, ServicePostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServicePosts and returns the data saved in the database.
     * @param {ServicePostCreateManyAndReturnArgs} args - Arguments to create many ServicePosts.
     * @example
     * // Create many ServicePosts
     * const servicePost = await prisma.servicePost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServicePosts and only return the `id`
     * const servicePostWithIdOnly = await prisma.servicePost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicePostCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicePostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServicePost.
     * @param {ServicePostDeleteArgs} args - Arguments to delete one ServicePost.
     * @example
     * // Delete one ServicePost
     * const ServicePost = await prisma.servicePost.delete({
     *   where: {
     *     // ... filter to delete one ServicePost
     *   }
     * })
     * 
     */
    delete<T extends ServicePostDeleteArgs>(args: SelectSubset<T, ServicePostDeleteArgs<ExtArgs>>): Prisma__ServicePostClient<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServicePost.
     * @param {ServicePostUpdateArgs} args - Arguments to update one ServicePost.
     * @example
     * // Update one ServicePost
     * const servicePost = await prisma.servicePost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicePostUpdateArgs>(args: SelectSubset<T, ServicePostUpdateArgs<ExtArgs>>): Prisma__ServicePostClient<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServicePosts.
     * @param {ServicePostDeleteManyArgs} args - Arguments to filter ServicePosts to delete.
     * @example
     * // Delete a few ServicePosts
     * const { count } = await prisma.servicePost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicePostDeleteManyArgs>(args?: SelectSubset<T, ServicePostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicePosts
     * const servicePost = await prisma.servicePost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicePostUpdateManyArgs>(args: SelectSubset<T, ServicePostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicePosts and returns the data updated in the database.
     * @param {ServicePostUpdateManyAndReturnArgs} args - Arguments to update many ServicePosts.
     * @example
     * // Update many ServicePosts
     * const servicePost = await prisma.servicePost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServicePosts and only return the `id`
     * const servicePostWithIdOnly = await prisma.servicePost.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServicePostUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicePostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServicePost.
     * @param {ServicePostUpsertArgs} args - Arguments to update or create a ServicePost.
     * @example
     * // Update or create a ServicePost
     * const servicePost = await prisma.servicePost.upsert({
     *   create: {
     *     // ... data to create a ServicePost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicePost we want to update
     *   }
     * })
     */
    upsert<T extends ServicePostUpsertArgs>(args: SelectSubset<T, ServicePostUpsertArgs<ExtArgs>>): Prisma__ServicePostClient<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServicePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePostCountArgs} args - Arguments to filter ServicePosts to count.
     * @example
     * // Count the number of ServicePosts
     * const count = await prisma.servicePost.count({
     *   where: {
     *     // ... the filter for the ServicePosts we want to count
     *   }
     * })
    **/
    count<T extends ServicePostCountArgs>(
      args?: Subset<T, ServicePostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicePostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicePostAggregateArgs>(args: Subset<T, ServicePostAggregateArgs>): Prisma.PrismaPromise<GetServicePostAggregateType<T>>

    /**
     * Group by ServicePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicePostGroupByArgs} args - Group by arguments.
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
      T extends ServicePostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicePostGroupByArgs['orderBy'] }
        : { orderBy?: ServicePostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicePostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicePostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicePost model
   */
  readonly fields: ServicePostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicePost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicePostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends PetCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetCategoryDefaultArgs<ExtArgs>>): Prisma__PetCategoryClient<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    serviceCategory<T extends ServiceCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceCategoryDefaultArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ServicePost model
   */
  interface ServicePostFieldRefs {
    readonly id: FieldRef<"ServicePost", 'Int'>
    readonly address: FieldRef<"ServicePost", 'String'>
    readonly about: FieldRef<"ServicePost", 'String'>
    readonly image: FieldRef<"ServicePost", 'String'>
    readonly phoneNumber: FieldRef<"ServicePost", 'Int'>
    readonly createdAt: FieldRef<"ServicePost", 'DateTime'>
    readonly updatedAt: FieldRef<"ServicePost", 'DateTime'>
    readonly userId: FieldRef<"ServicePost", 'Int'>
    readonly age: FieldRef<"ServicePost", 'Int'>
    readonly purpose: FieldRef<"ServicePost", 'PetPostEnum'>
    readonly petCategoryId: FieldRef<"ServicePost", 'Int'>
    readonly serviceId: FieldRef<"ServicePost", 'Int'>
    readonly cost: FieldRef<"ServicePost", 'Int'>
    readonly skill: FieldRef<"ServicePost", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * ServicePost findUnique
   */
  export type ServicePostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
    /**
     * Filter, which ServicePost to fetch.
     */
    where: ServicePostWhereUniqueInput
  }

  /**
   * ServicePost findUniqueOrThrow
   */
  export type ServicePostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
    /**
     * Filter, which ServicePost to fetch.
     */
    where: ServicePostWhereUniqueInput
  }

  /**
   * ServicePost findFirst
   */
  export type ServicePostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
    /**
     * Filter, which ServicePost to fetch.
     */
    where?: ServicePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePosts to fetch.
     */
    orderBy?: ServicePostOrderByWithRelationInput | ServicePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicePosts.
     */
    cursor?: ServicePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePosts.
     */
    distinct?: ServicePostScalarFieldEnum | ServicePostScalarFieldEnum[]
  }

  /**
   * ServicePost findFirstOrThrow
   */
  export type ServicePostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
    /**
     * Filter, which ServicePost to fetch.
     */
    where?: ServicePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePosts to fetch.
     */
    orderBy?: ServicePostOrderByWithRelationInput | ServicePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicePosts.
     */
    cursor?: ServicePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicePosts.
     */
    distinct?: ServicePostScalarFieldEnum | ServicePostScalarFieldEnum[]
  }

  /**
   * ServicePost findMany
   */
  export type ServicePostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
    /**
     * Filter, which ServicePosts to fetch.
     */
    where?: ServicePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicePosts to fetch.
     */
    orderBy?: ServicePostOrderByWithRelationInput | ServicePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicePosts.
     */
    cursor?: ServicePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicePosts.
     */
    skip?: number
    distinct?: ServicePostScalarFieldEnum | ServicePostScalarFieldEnum[]
  }

  /**
   * ServicePost create
   */
  export type ServicePostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
    /**
     * The data needed to create a ServicePost.
     */
    data: XOR<ServicePostCreateInput, ServicePostUncheckedCreateInput>
  }

  /**
   * ServicePost createMany
   */
  export type ServicePostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicePosts.
     */
    data: ServicePostCreateManyInput | ServicePostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServicePost createManyAndReturn
   */
  export type ServicePostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * The data used to create many ServicePosts.
     */
    data: ServicePostCreateManyInput | ServicePostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicePost update
   */
  export type ServicePostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
    /**
     * The data needed to update a ServicePost.
     */
    data: XOR<ServicePostUpdateInput, ServicePostUncheckedUpdateInput>
    /**
     * Choose, which ServicePost to update.
     */
    where: ServicePostWhereUniqueInput
  }

  /**
   * ServicePost updateMany
   */
  export type ServicePostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicePosts.
     */
    data: XOR<ServicePostUpdateManyMutationInput, ServicePostUncheckedUpdateManyInput>
    /**
     * Filter which ServicePosts to update
     */
    where?: ServicePostWhereInput
    /**
     * Limit how many ServicePosts to update.
     */
    limit?: number
  }

  /**
   * ServicePost updateManyAndReturn
   */
  export type ServicePostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * The data used to update ServicePosts.
     */
    data: XOR<ServicePostUpdateManyMutationInput, ServicePostUncheckedUpdateManyInput>
    /**
     * Filter which ServicePosts to update
     */
    where?: ServicePostWhereInput
    /**
     * Limit how many ServicePosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicePost upsert
   */
  export type ServicePostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
    /**
     * The filter to search for the ServicePost to update in case it exists.
     */
    where: ServicePostWhereUniqueInput
    /**
     * In case the ServicePost found by the `where` argument doesn't exist, create a new ServicePost with this data.
     */
    create: XOR<ServicePostCreateInput, ServicePostUncheckedCreateInput>
    /**
     * In case the ServicePost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicePostUpdateInput, ServicePostUncheckedUpdateInput>
  }

  /**
   * ServicePost delete
   */
  export type ServicePostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
    /**
     * Filter which ServicePost to delete.
     */
    where: ServicePostWhereUniqueInput
  }

  /**
   * ServicePost deleteMany
   */
  export type ServicePostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicePosts to delete
     */
    where?: ServicePostWhereInput
    /**
     * Limit how many ServicePosts to delete.
     */
    limit?: number
  }

  /**
   * ServicePost without action
   */
  export type ServicePostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
  }


  /**
   * Model Hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    phoneNumber: number | null
    views: number | null
  }

  export type HospitalSumAggregateOutputType = {
    id: number | null
    rating: number | null
    phoneNumber: number | null
    views: number | null
  }

  export type HospitalMinAggregateOutputType = {
    id: number | null
    name: string | null
    about: string | null
    email: string | null
    backgroundImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    rating: number | null
    location: string | null
    phoneNumber: number | null
    workTime: string | null
    views: number | null
  }

  export type HospitalMaxAggregateOutputType = {
    id: number | null
    name: string | null
    about: string | null
    email: string | null
    backgroundImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    rating: number | null
    location: string | null
    phoneNumber: number | null
    workTime: string | null
    views: number | null
  }

  export type HospitalCountAggregateOutputType = {
    id: number
    name: number
    about: number
    avatarImage: number
    email: number
    backgroundImage: number
    createdAt: number
    updatedAt: number
    rating: number
    location: number
    phoneNumber: number
    workTime: number
    category: number
    views: number
    _all: number
  }


  export type HospitalAvgAggregateInputType = {
    id?: true
    rating?: true
    phoneNumber?: true
    views?: true
  }

  export type HospitalSumAggregateInputType = {
    id?: true
    rating?: true
    phoneNumber?: true
    views?: true
  }

  export type HospitalMinAggregateInputType = {
    id?: true
    name?: true
    about?: true
    email?: true
    backgroundImage?: true
    createdAt?: true
    updatedAt?: true
    rating?: true
    location?: true
    phoneNumber?: true
    workTime?: true
    views?: true
  }

  export type HospitalMaxAggregateInputType = {
    id?: true
    name?: true
    about?: true
    email?: true
    backgroundImage?: true
    createdAt?: true
    updatedAt?: true
    rating?: true
    location?: true
    phoneNumber?: true
    workTime?: true
    views?: true
  }

  export type HospitalCountAggregateInputType = {
    id?: true
    name?: true
    about?: true
    avatarImage?: true
    email?: true
    backgroundImage?: true
    createdAt?: true
    updatedAt?: true
    rating?: true
    location?: true
    phoneNumber?: true
    workTime?: true
    category?: true
    views?: true
    _all?: true
  }

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospitalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }




  export type HospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalWhereInput
    orderBy?: HospitalOrderByWithAggregationInput | HospitalOrderByWithAggregationInput[]
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum
    having?: HospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _avg?: HospitalAvgAggregateInputType
    _sum?: HospitalSumAggregateInputType
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }

  export type HospitalGroupByOutputType = {
    id: number
    name: string
    about: string
    avatarImage: string[]
    email: string
    backgroundImage: string
    createdAt: Date
    updatedAt: Date
    rating: number
    location: string
    phoneNumber: number
    workTime: string
    category: string[]
    views: number
    _count: HospitalCountAggregateOutputType | null
    _avg: HospitalAvgAggregateOutputType | null
    _sum: HospitalSumAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      >
    >


  export type HospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    about?: boolean
    avatarImage?: boolean
    email?: boolean
    backgroundImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rating?: boolean
    location?: boolean
    phoneNumber?: boolean
    workTime?: boolean
    category?: boolean
    views?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    about?: boolean
    avatarImage?: boolean
    email?: boolean
    backgroundImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rating?: boolean
    location?: boolean
    phoneNumber?: boolean
    workTime?: boolean
    category?: boolean
    views?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    about?: boolean
    avatarImage?: boolean
    email?: boolean
    backgroundImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rating?: boolean
    location?: boolean
    phoneNumber?: boolean
    workTime?: boolean
    category?: boolean
    views?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectScalar = {
    id?: boolean
    name?: boolean
    about?: boolean
    avatarImage?: boolean
    email?: boolean
    backgroundImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rating?: boolean
    location?: boolean
    phoneNumber?: boolean
    workTime?: boolean
    category?: boolean
    views?: boolean
  }

  export type HospitalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "about" | "avatarImage" | "email" | "backgroundImage" | "createdAt" | "updatedAt" | "rating" | "location" | "phoneNumber" | "workTime" | "category" | "views", ExtArgs["result"]["hospital"]>

  export type $HospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospital"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      about: string
      avatarImage: string[]
      email: string
      backgroundImage: string
      createdAt: Date
      updatedAt: Date
      rating: number
      location: string
      phoneNumber: number
      workTime: string
      category: string[]
      views: number
    }, ExtArgs["result"]["hospital"]>
    composites: {}
  }

  type HospitalGetPayload<S extends boolean | null | undefined | HospitalDefaultArgs> = $Result.GetResult<Prisma.$HospitalPayload, S>

  type HospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalCountAggregateInputType | true
    }

  export interface HospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospital'], meta: { name: 'Hospital' } }
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalFindUniqueArgs>(args: SelectSubset<T, HospitalFindUniqueArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalFindFirstArgs>(args?: SelectSubset<T, HospitalFindFirstArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospitalFindManyArgs>(args?: SelectSubset<T, HospitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
     */
    create<T extends HospitalCreateArgs>(args: SelectSubset<T, HospitalCreateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospitals.
     * @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalCreateManyArgs>(args?: SelectSubset<T, HospitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitals and returns the data saved in the database.
     * @param {HospitalCreateManyAndReturnArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
     */
    delete<T extends HospitalDeleteArgs>(args: SelectSubset<T, HospitalDeleteArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalUpdateArgs>(args: SelectSubset<T, HospitalUpdateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalDeleteManyArgs>(args?: SelectSubset<T, HospitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalUpdateManyArgs>(args: SelectSubset<T, HospitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals and returns the data updated in the database.
     * @param {HospitalUpdateManyAndReturnArgs} args - Arguments to update many Hospitals.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.updateManyAndReturn({
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
    updateManyAndReturn<T extends HospitalUpdateManyAndReturnArgs>(args: SelectSubset<T, HospitalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
     */
    upsert<T extends HospitalUpsertArgs>(args: SelectSubset<T, HospitalUpsertArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(
      args?: Subset<T, HospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
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
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospital model
   */
  readonly fields: HospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Hospital model
   */
  interface HospitalFieldRefs {
    readonly id: FieldRef<"Hospital", 'Int'>
    readonly name: FieldRef<"Hospital", 'String'>
    readonly about: FieldRef<"Hospital", 'String'>
    readonly avatarImage: FieldRef<"Hospital", 'String[]'>
    readonly email: FieldRef<"Hospital", 'String'>
    readonly backgroundImage: FieldRef<"Hospital", 'String'>
    readonly createdAt: FieldRef<"Hospital", 'DateTime'>
    readonly updatedAt: FieldRef<"Hospital", 'DateTime'>
    readonly rating: FieldRef<"Hospital", 'Float'>
    readonly location: FieldRef<"Hospital", 'String'>
    readonly phoneNumber: FieldRef<"Hospital", 'Int'>
    readonly workTime: FieldRef<"Hospital", 'String'>
    readonly category: FieldRef<"Hospital", 'String[]'>
    readonly views: FieldRef<"Hospital", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Hospital findUnique
   */
  export type HospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findUniqueOrThrow
   */
  export type HospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findFirst
   */
  export type HospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findFirstOrThrow
   */
  export type HospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findMany
   */
  export type HospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital create
   */
  export type HospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data needed to create a Hospital.
     */
    data: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
  }

  /**
   * Hospital createMany
   */
  export type HospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital createManyAndReturn
   */
  export type HospitalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital update
   */
  export type HospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data needed to update a Hospital.
     */
    data: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
    /**
     * Choose, which Hospital to update.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital updateMany
   */
  export type HospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital updateManyAndReturn
   */
  export type HospitalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital upsert
   */
  export type HospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: HospitalWhereUniqueInput
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
  }

  /**
   * Hospital delete
   */
  export type HospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Filter which Hospital to delete.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital deleteMany
   */
  export type HospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitals to delete
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to delete.
     */
    limit?: number
  }

  /**
   * Hospital without action
   */
  export type HospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
  }


  /**
   * Model PetCategory
   */

  export type AggregatePetCategory = {
    _count: PetCategoryCountAggregateOutputType | null
    _avg: PetCategoryAvgAggregateOutputType | null
    _sum: PetCategorySumAggregateOutputType | null
    _min: PetCategoryMinAggregateOutputType | null
    _max: PetCategoryMaxAggregateOutputType | null
  }

  export type PetCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type PetCategorySumAggregateOutputType = {
    id: number | null
  }

  export type PetCategoryMinAggregateOutputType = {
    id: number | null
    image: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetCategoryMaxAggregateOutputType = {
    id: number | null
    image: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetCategoryCountAggregateOutputType = {
    id: number
    image: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PetCategoryAvgAggregateInputType = {
    id?: true
  }

  export type PetCategorySumAggregateInputType = {
    id?: true
  }

  export type PetCategoryMinAggregateInputType = {
    id?: true
    image?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetCategoryMaxAggregateInputType = {
    id?: true
    image?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetCategoryCountAggregateInputType = {
    id?: true
    image?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PetCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetCategory to aggregate.
     */
    where?: PetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetCategories to fetch.
     */
    orderBy?: PetCategoryOrderByWithRelationInput | PetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PetCategories
    **/
    _count?: true | PetCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetCategoryMaxAggregateInputType
  }

  export type GetPetCategoryAggregateType<T extends PetCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePetCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetCategory[P]>
      : GetScalarType<T[P], AggregatePetCategory[P]>
  }




  export type PetCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetCategoryWhereInput
    orderBy?: PetCategoryOrderByWithAggregationInput | PetCategoryOrderByWithAggregationInput[]
    by: PetCategoryScalarFieldEnum[] | PetCategoryScalarFieldEnum
    having?: PetCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCategoryCountAggregateInputType | true
    _avg?: PetCategoryAvgAggregateInputType
    _sum?: PetCategorySumAggregateInputType
    _min?: PetCategoryMinAggregateInputType
    _max?: PetCategoryMaxAggregateInputType
  }

  export type PetCategoryGroupByOutputType = {
    id: number
    image: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PetCategoryCountAggregateOutputType | null
    _avg: PetCategoryAvgAggregateOutputType | null
    _sum: PetCategorySumAggregateOutputType | null
    _min: PetCategoryMinAggregateOutputType | null
    _max: PetCategoryMaxAggregateOutputType | null
  }

  type GetPetCategoryGroupByPayload<T extends PetCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PetCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PetCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PetPost?: boolean | PetCategory$PetPostArgs<ExtArgs>
    ServicePost?: boolean | PetCategory$ServicePostArgs<ExtArgs>
    _count?: boolean | PetCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petCategory"]>

  export type PetCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["petCategory"]>

  export type PetCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["petCategory"]>

  export type PetCategorySelectScalar = {
    id?: boolean
    image?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PetCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["petCategory"]>
  export type PetCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PetPost?: boolean | PetCategory$PetPostArgs<ExtArgs>
    ServicePost?: boolean | PetCategory$ServicePostArgs<ExtArgs>
    _count?: boolean | PetCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PetCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PetCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PetCategory"
    objects: {
      PetPost: Prisma.$PetPostPayload<ExtArgs>[]
      ServicePost: Prisma.$ServicePostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["petCategory"]>
    composites: {}
  }

  type PetCategoryGetPayload<S extends boolean | null | undefined | PetCategoryDefaultArgs> = $Result.GetResult<Prisma.$PetCategoryPayload, S>

  type PetCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCategoryCountAggregateInputType | true
    }

  export interface PetCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PetCategory'], meta: { name: 'PetCategory' } }
    /**
     * Find zero or one PetCategory that matches the filter.
     * @param {PetCategoryFindUniqueArgs} args - Arguments to find a PetCategory
     * @example
     * // Get one PetCategory
     * const petCategory = await prisma.petCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetCategoryFindUniqueArgs>(args: SelectSubset<T, PetCategoryFindUniqueArgs<ExtArgs>>): Prisma__PetCategoryClient<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PetCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetCategoryFindUniqueOrThrowArgs} args - Arguments to find a PetCategory
     * @example
     * // Get one PetCategory
     * const petCategory = await prisma.petCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PetCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetCategoryClient<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCategoryFindFirstArgs} args - Arguments to find a PetCategory
     * @example
     * // Get one PetCategory
     * const petCategory = await prisma.petCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetCategoryFindFirstArgs>(args?: SelectSubset<T, PetCategoryFindFirstArgs<ExtArgs>>): Prisma__PetCategoryClient<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCategoryFindFirstOrThrowArgs} args - Arguments to find a PetCategory
     * @example
     * // Get one PetCategory
     * const petCategory = await prisma.petCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PetCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetCategoryClient<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PetCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PetCategories
     * const petCategories = await prisma.petCategory.findMany()
     * 
     * // Get first 10 PetCategories
     * const petCategories = await prisma.petCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petCategoryWithIdOnly = await prisma.petCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetCategoryFindManyArgs>(args?: SelectSubset<T, PetCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PetCategory.
     * @param {PetCategoryCreateArgs} args - Arguments to create a PetCategory.
     * @example
     * // Create one PetCategory
     * const PetCategory = await prisma.petCategory.create({
     *   data: {
     *     // ... data to create a PetCategory
     *   }
     * })
     * 
     */
    create<T extends PetCategoryCreateArgs>(args: SelectSubset<T, PetCategoryCreateArgs<ExtArgs>>): Prisma__PetCategoryClient<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PetCategories.
     * @param {PetCategoryCreateManyArgs} args - Arguments to create many PetCategories.
     * @example
     * // Create many PetCategories
     * const petCategory = await prisma.petCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCategoryCreateManyArgs>(args?: SelectSubset<T, PetCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PetCategories and returns the data saved in the database.
     * @param {PetCategoryCreateManyAndReturnArgs} args - Arguments to create many PetCategories.
     * @example
     * // Create many PetCategories
     * const petCategory = await prisma.petCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PetCategories and only return the `id`
     * const petCategoryWithIdOnly = await prisma.petCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PetCategory.
     * @param {PetCategoryDeleteArgs} args - Arguments to delete one PetCategory.
     * @example
     * // Delete one PetCategory
     * const PetCategory = await prisma.petCategory.delete({
     *   where: {
     *     // ... filter to delete one PetCategory
     *   }
     * })
     * 
     */
    delete<T extends PetCategoryDeleteArgs>(args: SelectSubset<T, PetCategoryDeleteArgs<ExtArgs>>): Prisma__PetCategoryClient<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PetCategory.
     * @param {PetCategoryUpdateArgs} args - Arguments to update one PetCategory.
     * @example
     * // Update one PetCategory
     * const petCategory = await prisma.petCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetCategoryUpdateArgs>(args: SelectSubset<T, PetCategoryUpdateArgs<ExtArgs>>): Prisma__PetCategoryClient<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PetCategories.
     * @param {PetCategoryDeleteManyArgs} args - Arguments to filter PetCategories to delete.
     * @example
     * // Delete a few PetCategories
     * const { count } = await prisma.petCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetCategoryDeleteManyArgs>(args?: SelectSubset<T, PetCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PetCategories
     * const petCategory = await prisma.petCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetCategoryUpdateManyArgs>(args: SelectSubset<T, PetCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetCategories and returns the data updated in the database.
     * @param {PetCategoryUpdateManyAndReturnArgs} args - Arguments to update many PetCategories.
     * @example
     * // Update many PetCategories
     * const petCategory = await prisma.petCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PetCategories and only return the `id`
     * const petCategoryWithIdOnly = await prisma.petCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends PetCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PetCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PetCategory.
     * @param {PetCategoryUpsertArgs} args - Arguments to update or create a PetCategory.
     * @example
     * // Update or create a PetCategory
     * const petCategory = await prisma.petCategory.upsert({
     *   create: {
     *     // ... data to create a PetCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PetCategory we want to update
     *   }
     * })
     */
    upsert<T extends PetCategoryUpsertArgs>(args: SelectSubset<T, PetCategoryUpsertArgs<ExtArgs>>): Prisma__PetCategoryClient<$Result.GetResult<Prisma.$PetCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCategoryCountArgs} args - Arguments to filter PetCategories to count.
     * @example
     * // Count the number of PetCategories
     * const count = await prisma.petCategory.count({
     *   where: {
     *     // ... the filter for the PetCategories we want to count
     *   }
     * })
    **/
    count<T extends PetCategoryCountArgs>(
      args?: Subset<T, PetCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PetCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetCategoryAggregateArgs>(args: Subset<T, PetCategoryAggregateArgs>): Prisma.PrismaPromise<GetPetCategoryAggregateType<T>>

    /**
     * Group by PetCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCategoryGroupByArgs} args - Group by arguments.
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
      T extends PetCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PetCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PetCategory model
   */
  readonly fields: PetCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PetCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PetPost<T extends PetCategory$PetPostArgs<ExtArgs> = {}>(args?: Subset<T, PetCategory$PetPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ServicePost<T extends PetCategory$ServicePostArgs<ExtArgs> = {}>(args?: Subset<T, PetCategory$ServicePostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PetCategory model
   */
  interface PetCategoryFieldRefs {
    readonly id: FieldRef<"PetCategory", 'Int'>
    readonly image: FieldRef<"PetCategory", 'String'>
    readonly name: FieldRef<"PetCategory", 'String'>
    readonly createdAt: FieldRef<"PetCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"PetCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PetCategory findUnique
   */
  export type PetCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategory
     */
    select?: PetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetCategory
     */
    omit?: PetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PetCategory to fetch.
     */
    where: PetCategoryWhereUniqueInput
  }

  /**
   * PetCategory findUniqueOrThrow
   */
  export type PetCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategory
     */
    select?: PetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetCategory
     */
    omit?: PetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PetCategory to fetch.
     */
    where: PetCategoryWhereUniqueInput
  }

  /**
   * PetCategory findFirst
   */
  export type PetCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategory
     */
    select?: PetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetCategory
     */
    omit?: PetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PetCategory to fetch.
     */
    where?: PetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetCategories to fetch.
     */
    orderBy?: PetCategoryOrderByWithRelationInput | PetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetCategories.
     */
    cursor?: PetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetCategories.
     */
    distinct?: PetCategoryScalarFieldEnum | PetCategoryScalarFieldEnum[]
  }

  /**
   * PetCategory findFirstOrThrow
   */
  export type PetCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategory
     */
    select?: PetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetCategory
     */
    omit?: PetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PetCategory to fetch.
     */
    where?: PetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetCategories to fetch.
     */
    orderBy?: PetCategoryOrderByWithRelationInput | PetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetCategories.
     */
    cursor?: PetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetCategories.
     */
    distinct?: PetCategoryScalarFieldEnum | PetCategoryScalarFieldEnum[]
  }

  /**
   * PetCategory findMany
   */
  export type PetCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategory
     */
    select?: PetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetCategory
     */
    omit?: PetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PetCategories to fetch.
     */
    where?: PetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetCategories to fetch.
     */
    orderBy?: PetCategoryOrderByWithRelationInput | PetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PetCategories.
     */
    cursor?: PetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetCategories.
     */
    skip?: number
    distinct?: PetCategoryScalarFieldEnum | PetCategoryScalarFieldEnum[]
  }

  /**
   * PetCategory create
   */
  export type PetCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategory
     */
    select?: PetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetCategory
     */
    omit?: PetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PetCategory.
     */
    data: XOR<PetCategoryCreateInput, PetCategoryUncheckedCreateInput>
  }

  /**
   * PetCategory createMany
   */
  export type PetCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PetCategories.
     */
    data: PetCategoryCreateManyInput | PetCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PetCategory createManyAndReturn
   */
  export type PetCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategory
     */
    select?: PetCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetCategory
     */
    omit?: PetCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many PetCategories.
     */
    data: PetCategoryCreateManyInput | PetCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PetCategory update
   */
  export type PetCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategory
     */
    select?: PetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetCategory
     */
    omit?: PetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PetCategory.
     */
    data: XOR<PetCategoryUpdateInput, PetCategoryUncheckedUpdateInput>
    /**
     * Choose, which PetCategory to update.
     */
    where: PetCategoryWhereUniqueInput
  }

  /**
   * PetCategory updateMany
   */
  export type PetCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PetCategories.
     */
    data: XOR<PetCategoryUpdateManyMutationInput, PetCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PetCategories to update
     */
    where?: PetCategoryWhereInput
    /**
     * Limit how many PetCategories to update.
     */
    limit?: number
  }

  /**
   * PetCategory updateManyAndReturn
   */
  export type PetCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategory
     */
    select?: PetCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetCategory
     */
    omit?: PetCategoryOmit<ExtArgs> | null
    /**
     * The data used to update PetCategories.
     */
    data: XOR<PetCategoryUpdateManyMutationInput, PetCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PetCategories to update
     */
    where?: PetCategoryWhereInput
    /**
     * Limit how many PetCategories to update.
     */
    limit?: number
  }

  /**
   * PetCategory upsert
   */
  export type PetCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategory
     */
    select?: PetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetCategory
     */
    omit?: PetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PetCategory to update in case it exists.
     */
    where: PetCategoryWhereUniqueInput
    /**
     * In case the PetCategory found by the `where` argument doesn't exist, create a new PetCategory with this data.
     */
    create: XOR<PetCategoryCreateInput, PetCategoryUncheckedCreateInput>
    /**
     * In case the PetCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetCategoryUpdateInput, PetCategoryUncheckedUpdateInput>
  }

  /**
   * PetCategory delete
   */
  export type PetCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategory
     */
    select?: PetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetCategory
     */
    omit?: PetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetCategoryInclude<ExtArgs> | null
    /**
     * Filter which PetCategory to delete.
     */
    where: PetCategoryWhereUniqueInput
  }

  /**
   * PetCategory deleteMany
   */
  export type PetCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetCategories to delete
     */
    where?: PetCategoryWhereInput
    /**
     * Limit how many PetCategories to delete.
     */
    limit?: number
  }

  /**
   * PetCategory.PetPost
   */
  export type PetCategory$PetPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetPost
     */
    select?: PetPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetPost
     */
    omit?: PetPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetPostInclude<ExtArgs> | null
    where?: PetPostWhereInput
    orderBy?: PetPostOrderByWithRelationInput | PetPostOrderByWithRelationInput[]
    cursor?: PetPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetPostScalarFieldEnum | PetPostScalarFieldEnum[]
  }

  /**
   * PetCategory.ServicePost
   */
  export type PetCategory$ServicePostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
    where?: ServicePostWhereInput
    orderBy?: ServicePostOrderByWithRelationInput | ServicePostOrderByWithRelationInput[]
    cursor?: ServicePostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicePostScalarFieldEnum | ServicePostScalarFieldEnum[]
  }

  /**
   * PetCategory without action
   */
  export type PetCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCategory
     */
    select?: PetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetCategory
     */
    omit?: PetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ServiceCategory
   */

  export type AggregateServiceCategory = {
    _count: ServiceCategoryCountAggregateOutputType | null
    _avg: ServiceCategoryAvgAggregateOutputType | null
    _sum: ServiceCategorySumAggregateOutputType | null
    _min: ServiceCategoryMinAggregateOutputType | null
    _max: ServiceCategoryMaxAggregateOutputType | null
  }

  export type ServiceCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type ServiceCategorySumAggregateOutputType = {
    id: number | null
  }

  export type ServiceCategoryMinAggregateOutputType = {
    id: number | null
    image: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCategoryMaxAggregateOutputType = {
    id: number | null
    image: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCategoryCountAggregateOutputType = {
    id: number
    image: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceCategoryAvgAggregateInputType = {
    id?: true
  }

  export type ServiceCategorySumAggregateInputType = {
    id?: true
  }

  export type ServiceCategoryMinAggregateInputType = {
    id?: true
    image?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCategoryMaxAggregateInputType = {
    id?: true
    image?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCategoryCountAggregateInputType = {
    id?: true
    image?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCategory to aggregate.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceCategories
    **/
    _count?: true | ServiceCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceCategoryMaxAggregateInputType
  }

  export type GetServiceCategoryAggregateType<T extends ServiceCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceCategory[P]>
      : GetScalarType<T[P], AggregateServiceCategory[P]>
  }




  export type ServiceCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceCategoryWhereInput
    orderBy?: ServiceCategoryOrderByWithAggregationInput | ServiceCategoryOrderByWithAggregationInput[]
    by: ServiceCategoryScalarFieldEnum[] | ServiceCategoryScalarFieldEnum
    having?: ServiceCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCategoryCountAggregateInputType | true
    _avg?: ServiceCategoryAvgAggregateInputType
    _sum?: ServiceCategorySumAggregateInputType
    _min?: ServiceCategoryMinAggregateInputType
    _max?: ServiceCategoryMaxAggregateInputType
  }

  export type ServiceCategoryGroupByOutputType = {
    id: number
    image: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ServiceCategoryCountAggregateOutputType | null
    _avg: ServiceCategoryAvgAggregateOutputType | null
    _sum: ServiceCategorySumAggregateOutputType | null
    _min: ServiceCategoryMinAggregateOutputType | null
    _max: ServiceCategoryMaxAggregateOutputType | null
  }

  type GetServiceCategoryGroupByPayload<T extends ServiceCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ServiceCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ServicePost?: boolean | ServiceCategory$ServicePostArgs<ExtArgs>
    _count?: boolean | ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceCategory"]>

  export type ServiceCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serviceCategory"]>

  export type ServiceCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serviceCategory"]>

  export type ServiceCategorySelectScalar = {
    id?: boolean
    image?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceCategory"]>
  export type ServiceCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ServicePost?: boolean | ServiceCategory$ServicePostArgs<ExtArgs>
    _count?: boolean | ServiceCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServiceCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceCategory"
    objects: {
      ServicePost: Prisma.$ServicePostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceCategory"]>
    composites: {}
  }

  type ServiceCategoryGetPayload<S extends boolean | null | undefined | ServiceCategoryDefaultArgs> = $Result.GetResult<Prisma.$ServiceCategoryPayload, S>

  type ServiceCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCategoryCountAggregateInputType | true
    }

  export interface ServiceCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceCategory'], meta: { name: 'ServiceCategory' } }
    /**
     * Find zero or one ServiceCategory that matches the filter.
     * @param {ServiceCategoryFindUniqueArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceCategoryFindUniqueArgs>(args: SelectSubset<T, ServiceCategoryFindUniqueArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceCategoryFindUniqueOrThrowArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindFirstArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceCategoryFindFirstArgs>(args?: SelectSubset<T, ServiceCategoryFindFirstArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindFirstOrThrowArgs} args - Arguments to find a ServiceCategory
     * @example
     * // Get one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceCategories
     * const serviceCategories = await prisma.serviceCategory.findMany()
     * 
     * // Get first 10 ServiceCategories
     * const serviceCategories = await prisma.serviceCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceCategoryFindManyArgs>(args?: SelectSubset<T, ServiceCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceCategory.
     * @param {ServiceCategoryCreateArgs} args - Arguments to create a ServiceCategory.
     * @example
     * // Create one ServiceCategory
     * const ServiceCategory = await prisma.serviceCategory.create({
     *   data: {
     *     // ... data to create a ServiceCategory
     *   }
     * })
     * 
     */
    create<T extends ServiceCategoryCreateArgs>(args: SelectSubset<T, ServiceCategoryCreateArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceCategories.
     * @param {ServiceCategoryCreateManyArgs} args - Arguments to create many ServiceCategories.
     * @example
     * // Create many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCategoryCreateManyArgs>(args?: SelectSubset<T, ServiceCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceCategories and returns the data saved in the database.
     * @param {ServiceCategoryCreateManyAndReturnArgs} args - Arguments to create many ServiceCategories.
     * @example
     * // Create many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceCategories and only return the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceCategory.
     * @param {ServiceCategoryDeleteArgs} args - Arguments to delete one ServiceCategory.
     * @example
     * // Delete one ServiceCategory
     * const ServiceCategory = await prisma.serviceCategory.delete({
     *   where: {
     *     // ... filter to delete one ServiceCategory
     *   }
     * })
     * 
     */
    delete<T extends ServiceCategoryDeleteArgs>(args: SelectSubset<T, ServiceCategoryDeleteArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceCategory.
     * @param {ServiceCategoryUpdateArgs} args - Arguments to update one ServiceCategory.
     * @example
     * // Update one ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceCategoryUpdateArgs>(args: SelectSubset<T, ServiceCategoryUpdateArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceCategories.
     * @param {ServiceCategoryDeleteManyArgs} args - Arguments to filter ServiceCategories to delete.
     * @example
     * // Delete a few ServiceCategories
     * const { count } = await prisma.serviceCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceCategoryDeleteManyArgs>(args?: SelectSubset<T, ServiceCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceCategoryUpdateManyArgs>(args: SelectSubset<T, ServiceCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCategories and returns the data updated in the database.
     * @param {ServiceCategoryUpdateManyAndReturnArgs} args - Arguments to update many ServiceCategories.
     * @example
     * // Update many ServiceCategories
     * const serviceCategory = await prisma.serviceCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceCategories and only return the `id`
     * const serviceCategoryWithIdOnly = await prisma.serviceCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceCategory.
     * @param {ServiceCategoryUpsertArgs} args - Arguments to update or create a ServiceCategory.
     * @example
     * // Update or create a ServiceCategory
     * const serviceCategory = await prisma.serviceCategory.upsert({
     *   create: {
     *     // ... data to create a ServiceCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceCategory we want to update
     *   }
     * })
     */
    upsert<T extends ServiceCategoryUpsertArgs>(args: SelectSubset<T, ServiceCategoryUpsertArgs<ExtArgs>>): Prisma__ServiceCategoryClient<$Result.GetResult<Prisma.$ServiceCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryCountArgs} args - Arguments to filter ServiceCategories to count.
     * @example
     * // Count the number of ServiceCategories
     * const count = await prisma.serviceCategory.count({
     *   where: {
     *     // ... the filter for the ServiceCategories we want to count
     *   }
     * })
    **/
    count<T extends ServiceCategoryCountArgs>(
      args?: Subset<T, ServiceCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceCategoryAggregateArgs>(args: Subset<T, ServiceCategoryAggregateArgs>): Prisma.PrismaPromise<GetServiceCategoryAggregateType<T>>

    /**
     * Group by ServiceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCategoryGroupByArgs} args - Group by arguments.
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
      T extends ServiceCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ServiceCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceCategory model
   */
  readonly fields: ServiceCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ServicePost<T extends ServiceCategory$ServicePostArgs<ExtArgs> = {}>(args?: Subset<T, ServiceCategory$ServicePostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServiceCategory model
   */
  interface ServiceCategoryFieldRefs {
    readonly id: FieldRef<"ServiceCategory", 'Int'>
    readonly image: FieldRef<"ServiceCategory", 'String'>
    readonly name: FieldRef<"ServiceCategory", 'String'>
    readonly createdAt: FieldRef<"ServiceCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceCategory findUnique
   */
  export type ServiceCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory findUniqueOrThrow
   */
  export type ServiceCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory findFirst
   */
  export type ServiceCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCategories.
     */
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory findFirstOrThrow
   */
  export type ServiceCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategory to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCategories.
     */
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory findMany
   */
  export type ServiceCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCategories to fetch.
     */
    where?: ServiceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCategories to fetch.
     */
    orderBy?: ServiceCategoryOrderByWithRelationInput | ServiceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceCategories.
     */
    cursor?: ServiceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCategories.
     */
    skip?: number
    distinct?: ServiceCategoryScalarFieldEnum | ServiceCategoryScalarFieldEnum[]
  }

  /**
   * ServiceCategory create
   */
  export type ServiceCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceCategory.
     */
    data: XOR<ServiceCategoryCreateInput, ServiceCategoryUncheckedCreateInput>
  }

  /**
   * ServiceCategory createMany
   */
  export type ServiceCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceCategories.
     */
    data: ServiceCategoryCreateManyInput | ServiceCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceCategory createManyAndReturn
   */
  export type ServiceCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceCategories.
     */
    data: ServiceCategoryCreateManyInput | ServiceCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceCategory update
   */
  export type ServiceCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceCategory.
     */
    data: XOR<ServiceCategoryUpdateInput, ServiceCategoryUncheckedUpdateInput>
    /**
     * Choose, which ServiceCategory to update.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory updateMany
   */
  export type ServiceCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceCategories.
     */
    data: XOR<ServiceCategoryUpdateManyMutationInput, ServiceCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCategories to update
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to update.
     */
    limit?: number
  }

  /**
   * ServiceCategory updateManyAndReturn
   */
  export type ServiceCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ServiceCategories.
     */
    data: XOR<ServiceCategoryUpdateManyMutationInput, ServiceCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCategories to update
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to update.
     */
    limit?: number
  }

  /**
   * ServiceCategory upsert
   */
  export type ServiceCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceCategory to update in case it exists.
     */
    where: ServiceCategoryWhereUniqueInput
    /**
     * In case the ServiceCategory found by the `where` argument doesn't exist, create a new ServiceCategory with this data.
     */
    create: XOR<ServiceCategoryCreateInput, ServiceCategoryUncheckedCreateInput>
    /**
     * In case the ServiceCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceCategoryUpdateInput, ServiceCategoryUncheckedUpdateInput>
  }

  /**
   * ServiceCategory delete
   */
  export type ServiceCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
    /**
     * Filter which ServiceCategory to delete.
     */
    where: ServiceCategoryWhereUniqueInput
  }

  /**
   * ServiceCategory deleteMany
   */
  export type ServiceCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCategories to delete
     */
    where?: ServiceCategoryWhereInput
    /**
     * Limit how many ServiceCategories to delete.
     */
    limit?: number
  }

  /**
   * ServiceCategory.ServicePost
   */
  export type ServiceCategory$ServicePostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicePost
     */
    select?: ServicePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicePost
     */
    omit?: ServicePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicePostInclude<ExtArgs> | null
    where?: ServicePostWhereInput
    orderBy?: ServicePostOrderByWithRelationInput | ServicePostOrderByWithRelationInput[]
    cursor?: ServicePostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicePostScalarFieldEnum | ServicePostScalarFieldEnum[]
  }

  /**
   * ServiceCategory without action
   */
  export type ServiceCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCategory
     */
    select?: ServiceCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceCategory
     */
    omit?: ServiceCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCategoryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    location: 'location',
    profileImage: 'profileImage',
    backgroundImage: 'backgroundImage'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    timestamp: 'timestamp',
    senderId: 'senderId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const PetPostScalarFieldEnum: {
    id: 'id',
    petName: 'petName',
    address: 'address',
    about: 'about',
    image: 'image',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    age: 'age',
    breed: 'breed',
    size: 'size',
    gender: 'gender',
    price: 'price',
    purpose: 'purpose',
    petCategoryId: 'petCategoryId',
    video: 'video'
  };

  export type PetPostScalarFieldEnum = (typeof PetPostScalarFieldEnum)[keyof typeof PetPostScalarFieldEnum]


  export const ServicePostScalarFieldEnum: {
    id: 'id',
    address: 'address',
    about: 'about',
    image: 'image',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    age: 'age',
    purpose: 'purpose',
    petCategoryId: 'petCategoryId',
    serviceId: 'serviceId',
    cost: 'cost',
    skill: 'skill'
  };

  export type ServicePostScalarFieldEnum = (typeof ServicePostScalarFieldEnum)[keyof typeof ServicePostScalarFieldEnum]


  export const HospitalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    about: 'about',
    avatarImage: 'avatarImage',
    email: 'email',
    backgroundImage: 'backgroundImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    rating: 'rating',
    location: 'location',
    phoneNumber: 'phoneNumber',
    workTime: 'workTime',
    category: 'category',
    views: 'views'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const PetCategoryScalarFieldEnum: {
    id: 'id',
    image: 'image',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PetCategoryScalarFieldEnum = (typeof PetCategoryScalarFieldEnum)[keyof typeof PetCategoryScalarFieldEnum]


  export const ServiceCategoryScalarFieldEnum: {
    id: 'id',
    image: 'image',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceCategoryScalarFieldEnum = (typeof ServiceCategoryScalarFieldEnum)[keyof typeof ServiceCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'userRoleEnum'
   */
  export type EnumuserRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userRoleEnum'>
    


  /**
   * Reference to a field of type 'userRoleEnum[]'
   */
  export type ListEnumuserRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userRoleEnum[]'>
    


  /**
   * Reference to a field of type 'PetSizeEnum'
   */
  export type EnumPetSizeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetSizeEnum'>
    


  /**
   * Reference to a field of type 'PetSizeEnum[]'
   */
  export type ListEnumPetSizeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetSizeEnum[]'>
    


  /**
   * Reference to a field of type 'PetGenderEnum'
   */
  export type EnumPetGenderEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetGenderEnum'>
    


  /**
   * Reference to a field of type 'PetGenderEnum[]'
   */
  export type ListEnumPetGenderEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetGenderEnum[]'>
    


  /**
   * Reference to a field of type 'PetPostEnum'
   */
  export type EnumPetPostEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetPostEnum'>
    


  /**
   * Reference to a field of type 'PetPostEnum[]'
   */
  export type ListEnumPetPostEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetPostEnum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumuserRoleEnumFilter<"User"> | $Enums.userRoleEnum
    location?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    backgroundImage?: StringFilter<"User"> | string
    PetPost?: PetPostListRelationFilter
    ServicePost?: ServicePostListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    location?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    backgroundImage?: SortOrder
    PetPost?: PetPostOrderByRelationAggregateInput
    ServicePost?: ServicePostOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumuserRoleEnumFilter<"User"> | $Enums.userRoleEnum
    location?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    backgroundImage?: StringFilter<"User"> | string
    PetPost?: PetPostListRelationFilter
    ServicePost?: ServicePostListRelationFilter
    messages?: MessageListRelationFilter
  }, "id" | "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    location?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    backgroundImage?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumuserRoleEnumWithAggregatesFilter<"User"> | $Enums.userRoleEnum
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    backgroundImage?: StringWithAggregatesFilter<"User"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    senderId?: IntFilter<"Message"> | number
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    senderId?: SortOrder
    sender?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    senderId?: IntFilter<"Message"> | number
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    senderId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    senderId?: IntWithAggregatesFilter<"Message"> | number
  }

  export type PetPostWhereInput = {
    AND?: PetPostWhereInput | PetPostWhereInput[]
    OR?: PetPostWhereInput[]
    NOT?: PetPostWhereInput | PetPostWhereInput[]
    id?: IntFilter<"PetPost"> | number
    petName?: StringFilter<"PetPost"> | string
    address?: StringFilter<"PetPost"> | string
    about?: StringNullableListFilter<"PetPost">
    image?: StringFilter<"PetPost"> | string
    phoneNumber?: IntFilter<"PetPost"> | number
    createdAt?: DateTimeFilter<"PetPost"> | Date | string
    updatedAt?: DateTimeFilter<"PetPost"> | Date | string
    userId?: IntFilter<"PetPost"> | number
    age?: IntFilter<"PetPost"> | number
    breed?: StringFilter<"PetPost"> | string
    size?: EnumPetSizeEnumFilter<"PetPost"> | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFilter<"PetPost"> | $Enums.PetGenderEnum
    price?: IntFilter<"PetPost"> | number
    purpose?: EnumPetPostEnumFilter<"PetPost"> | $Enums.PetPostEnum
    petCategoryId?: IntFilter<"PetPost"> | number
    video?: StringFilter<"PetPost"> | string
    category?: XOR<PetCategoryScalarRelationFilter, PetCategoryWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PetPostOrderByWithRelationInput = {
    id?: SortOrder
    petName?: SortOrder
    address?: SortOrder
    about?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    size?: SortOrder
    gender?: SortOrder
    price?: SortOrder
    purpose?: SortOrder
    petCategoryId?: SortOrder
    video?: SortOrder
    category?: PetCategoryOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type PetPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PetPostWhereInput | PetPostWhereInput[]
    OR?: PetPostWhereInput[]
    NOT?: PetPostWhereInput | PetPostWhereInput[]
    petName?: StringFilter<"PetPost"> | string
    address?: StringFilter<"PetPost"> | string
    about?: StringNullableListFilter<"PetPost">
    image?: StringFilter<"PetPost"> | string
    phoneNumber?: IntFilter<"PetPost"> | number
    createdAt?: DateTimeFilter<"PetPost"> | Date | string
    updatedAt?: DateTimeFilter<"PetPost"> | Date | string
    userId?: IntFilter<"PetPost"> | number
    age?: IntFilter<"PetPost"> | number
    breed?: StringFilter<"PetPost"> | string
    size?: EnumPetSizeEnumFilter<"PetPost"> | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFilter<"PetPost"> | $Enums.PetGenderEnum
    price?: IntFilter<"PetPost"> | number
    purpose?: EnumPetPostEnumFilter<"PetPost"> | $Enums.PetPostEnum
    petCategoryId?: IntFilter<"PetPost"> | number
    video?: StringFilter<"PetPost"> | string
    category?: XOR<PetCategoryScalarRelationFilter, PetCategoryWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PetPostOrderByWithAggregationInput = {
    id?: SortOrder
    petName?: SortOrder
    address?: SortOrder
    about?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    size?: SortOrder
    gender?: SortOrder
    price?: SortOrder
    purpose?: SortOrder
    petCategoryId?: SortOrder
    video?: SortOrder
    _count?: PetPostCountOrderByAggregateInput
    _avg?: PetPostAvgOrderByAggregateInput
    _max?: PetPostMaxOrderByAggregateInput
    _min?: PetPostMinOrderByAggregateInput
    _sum?: PetPostSumOrderByAggregateInput
  }

  export type PetPostScalarWhereWithAggregatesInput = {
    AND?: PetPostScalarWhereWithAggregatesInput | PetPostScalarWhereWithAggregatesInput[]
    OR?: PetPostScalarWhereWithAggregatesInput[]
    NOT?: PetPostScalarWhereWithAggregatesInput | PetPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PetPost"> | number
    petName?: StringWithAggregatesFilter<"PetPost"> | string
    address?: StringWithAggregatesFilter<"PetPost"> | string
    about?: StringNullableListFilter<"PetPost">
    image?: StringWithAggregatesFilter<"PetPost"> | string
    phoneNumber?: IntWithAggregatesFilter<"PetPost"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PetPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PetPost"> | Date | string
    userId?: IntWithAggregatesFilter<"PetPost"> | number
    age?: IntWithAggregatesFilter<"PetPost"> | number
    breed?: StringWithAggregatesFilter<"PetPost"> | string
    size?: EnumPetSizeEnumWithAggregatesFilter<"PetPost"> | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumWithAggregatesFilter<"PetPost"> | $Enums.PetGenderEnum
    price?: IntWithAggregatesFilter<"PetPost"> | number
    purpose?: EnumPetPostEnumWithAggregatesFilter<"PetPost"> | $Enums.PetPostEnum
    petCategoryId?: IntWithAggregatesFilter<"PetPost"> | number
    video?: StringWithAggregatesFilter<"PetPost"> | string
  }

  export type ServicePostWhereInput = {
    AND?: ServicePostWhereInput | ServicePostWhereInput[]
    OR?: ServicePostWhereInput[]
    NOT?: ServicePostWhereInput | ServicePostWhereInput[]
    id?: IntFilter<"ServicePost"> | number
    address?: StringFilter<"ServicePost"> | string
    about?: StringFilter<"ServicePost"> | string
    image?: StringFilter<"ServicePost"> | string
    phoneNumber?: IntFilter<"ServicePost"> | number
    createdAt?: DateTimeFilter<"ServicePost"> | Date | string
    updatedAt?: DateTimeFilter<"ServicePost"> | Date | string
    userId?: IntFilter<"ServicePost"> | number
    age?: IntFilter<"ServicePost"> | number
    purpose?: EnumPetPostEnumFilter<"ServicePost"> | $Enums.PetPostEnum
    petCategoryId?: IntFilter<"ServicePost"> | number
    serviceId?: IntFilter<"ServicePost"> | number
    cost?: IntFilter<"ServicePost"> | number
    skill?: StringNullableListFilter<"ServicePost">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<PetCategoryScalarRelationFilter, PetCategoryWhereInput>
    serviceCategory?: XOR<ServiceCategoryScalarRelationFilter, ServiceCategoryWhereInput>
  }

  export type ServicePostOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    about?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    purpose?: SortOrder
    petCategoryId?: SortOrder
    serviceId?: SortOrder
    cost?: SortOrder
    skill?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: PetCategoryOrderByWithRelationInput
    serviceCategory?: ServiceCategoryOrderByWithRelationInput
  }

  export type ServicePostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicePostWhereInput | ServicePostWhereInput[]
    OR?: ServicePostWhereInput[]
    NOT?: ServicePostWhereInput | ServicePostWhereInput[]
    address?: StringFilter<"ServicePost"> | string
    about?: StringFilter<"ServicePost"> | string
    image?: StringFilter<"ServicePost"> | string
    phoneNumber?: IntFilter<"ServicePost"> | number
    createdAt?: DateTimeFilter<"ServicePost"> | Date | string
    updatedAt?: DateTimeFilter<"ServicePost"> | Date | string
    userId?: IntFilter<"ServicePost"> | number
    age?: IntFilter<"ServicePost"> | number
    purpose?: EnumPetPostEnumFilter<"ServicePost"> | $Enums.PetPostEnum
    petCategoryId?: IntFilter<"ServicePost"> | number
    serviceId?: IntFilter<"ServicePost"> | number
    cost?: IntFilter<"ServicePost"> | number
    skill?: StringNullableListFilter<"ServicePost">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<PetCategoryScalarRelationFilter, PetCategoryWhereInput>
    serviceCategory?: XOR<ServiceCategoryScalarRelationFilter, ServiceCategoryWhereInput>
  }, "id">

  export type ServicePostOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    about?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    purpose?: SortOrder
    petCategoryId?: SortOrder
    serviceId?: SortOrder
    cost?: SortOrder
    skill?: SortOrder
    _count?: ServicePostCountOrderByAggregateInput
    _avg?: ServicePostAvgOrderByAggregateInput
    _max?: ServicePostMaxOrderByAggregateInput
    _min?: ServicePostMinOrderByAggregateInput
    _sum?: ServicePostSumOrderByAggregateInput
  }

  export type ServicePostScalarWhereWithAggregatesInput = {
    AND?: ServicePostScalarWhereWithAggregatesInput | ServicePostScalarWhereWithAggregatesInput[]
    OR?: ServicePostScalarWhereWithAggregatesInput[]
    NOT?: ServicePostScalarWhereWithAggregatesInput | ServicePostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServicePost"> | number
    address?: StringWithAggregatesFilter<"ServicePost"> | string
    about?: StringWithAggregatesFilter<"ServicePost"> | string
    image?: StringWithAggregatesFilter<"ServicePost"> | string
    phoneNumber?: IntWithAggregatesFilter<"ServicePost"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ServicePost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServicePost"> | Date | string
    userId?: IntWithAggregatesFilter<"ServicePost"> | number
    age?: IntWithAggregatesFilter<"ServicePost"> | number
    purpose?: EnumPetPostEnumWithAggregatesFilter<"ServicePost"> | $Enums.PetPostEnum
    petCategoryId?: IntWithAggregatesFilter<"ServicePost"> | number
    serviceId?: IntWithAggregatesFilter<"ServicePost"> | number
    cost?: IntWithAggregatesFilter<"ServicePost"> | number
    skill?: StringNullableListFilter<"ServicePost">
  }

  export type HospitalWhereInput = {
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    id?: IntFilter<"Hospital"> | number
    name?: StringFilter<"Hospital"> | string
    about?: StringFilter<"Hospital"> | string
    avatarImage?: StringNullableListFilter<"Hospital">
    email?: StringFilter<"Hospital"> | string
    backgroundImage?: StringFilter<"Hospital"> | string
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    rating?: FloatFilter<"Hospital"> | number
    location?: StringFilter<"Hospital"> | string
    phoneNumber?: IntFilter<"Hospital"> | number
    workTime?: StringFilter<"Hospital"> | string
    category?: StringNullableListFilter<"Hospital">
    views?: IntFilter<"Hospital"> | number
  }

  export type HospitalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    avatarImage?: SortOrder
    email?: SortOrder
    backgroundImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    location?: SortOrder
    phoneNumber?: SortOrder
    workTime?: SortOrder
    category?: SortOrder
    views?: SortOrder
  }

  export type HospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    name?: StringFilter<"Hospital"> | string
    about?: StringFilter<"Hospital"> | string
    avatarImage?: StringNullableListFilter<"Hospital">
    email?: StringFilter<"Hospital"> | string
    backgroundImage?: StringFilter<"Hospital"> | string
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    rating?: FloatFilter<"Hospital"> | number
    location?: StringFilter<"Hospital"> | string
    phoneNumber?: IntFilter<"Hospital"> | number
    workTime?: StringFilter<"Hospital"> | string
    category?: StringNullableListFilter<"Hospital">
    views?: IntFilter<"Hospital"> | number
  }, "id">

  export type HospitalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    avatarImage?: SortOrder
    email?: SortOrder
    backgroundImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    location?: SortOrder
    phoneNumber?: SortOrder
    workTime?: SortOrder
    category?: SortOrder
    views?: SortOrder
    _count?: HospitalCountOrderByAggregateInput
    _avg?: HospitalAvgOrderByAggregateInput
    _max?: HospitalMaxOrderByAggregateInput
    _min?: HospitalMinOrderByAggregateInput
    _sum?: HospitalSumOrderByAggregateInput
  }

  export type HospitalScalarWhereWithAggregatesInput = {
    AND?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    OR?: HospitalScalarWhereWithAggregatesInput[]
    NOT?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hospital"> | number
    name?: StringWithAggregatesFilter<"Hospital"> | string
    about?: StringWithAggregatesFilter<"Hospital"> | string
    avatarImage?: StringNullableListFilter<"Hospital">
    email?: StringWithAggregatesFilter<"Hospital"> | string
    backgroundImage?: StringWithAggregatesFilter<"Hospital"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hospital"> | Date | string
    rating?: FloatWithAggregatesFilter<"Hospital"> | number
    location?: StringWithAggregatesFilter<"Hospital"> | string
    phoneNumber?: IntWithAggregatesFilter<"Hospital"> | number
    workTime?: StringWithAggregatesFilter<"Hospital"> | string
    category?: StringNullableListFilter<"Hospital">
    views?: IntWithAggregatesFilter<"Hospital"> | number
  }

  export type PetCategoryWhereInput = {
    AND?: PetCategoryWhereInput | PetCategoryWhereInput[]
    OR?: PetCategoryWhereInput[]
    NOT?: PetCategoryWhereInput | PetCategoryWhereInput[]
    id?: IntFilter<"PetCategory"> | number
    image?: StringFilter<"PetCategory"> | string
    name?: StringFilter<"PetCategory"> | string
    createdAt?: DateTimeFilter<"PetCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PetCategory"> | Date | string
    PetPost?: PetPostListRelationFilter
    ServicePost?: ServicePostListRelationFilter
  }

  export type PetCategoryOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PetPost?: PetPostOrderByRelationAggregateInput
    ServicePost?: ServicePostOrderByRelationAggregateInput
  }

  export type PetCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PetCategoryWhereInput | PetCategoryWhereInput[]
    OR?: PetCategoryWhereInput[]
    NOT?: PetCategoryWhereInput | PetCategoryWhereInput[]
    image?: StringFilter<"PetCategory"> | string
    createdAt?: DateTimeFilter<"PetCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PetCategory"> | Date | string
    PetPost?: PetPostListRelationFilter
    ServicePost?: ServicePostListRelationFilter
  }, "id" | "name">

  export type PetCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PetCategoryCountOrderByAggregateInput
    _avg?: PetCategoryAvgOrderByAggregateInput
    _max?: PetCategoryMaxOrderByAggregateInput
    _min?: PetCategoryMinOrderByAggregateInput
    _sum?: PetCategorySumOrderByAggregateInput
  }

  export type PetCategoryScalarWhereWithAggregatesInput = {
    AND?: PetCategoryScalarWhereWithAggregatesInput | PetCategoryScalarWhereWithAggregatesInput[]
    OR?: PetCategoryScalarWhereWithAggregatesInput[]
    NOT?: PetCategoryScalarWhereWithAggregatesInput | PetCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PetCategory"> | number
    image?: StringWithAggregatesFilter<"PetCategory"> | string
    name?: StringWithAggregatesFilter<"PetCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PetCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PetCategory"> | Date | string
  }

  export type ServiceCategoryWhereInput = {
    AND?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    OR?: ServiceCategoryWhereInput[]
    NOT?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    id?: IntFilter<"ServiceCategory"> | number
    image?: StringFilter<"ServiceCategory"> | string
    name?: StringFilter<"ServiceCategory"> | string
    createdAt?: DateTimeFilter<"ServiceCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceCategory"> | Date | string
    ServicePost?: ServicePostListRelationFilter
  }

  export type ServiceCategoryOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ServicePost?: ServicePostOrderByRelationAggregateInput
  }

  export type ServiceCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    OR?: ServiceCategoryWhereInput[]
    NOT?: ServiceCategoryWhereInput | ServiceCategoryWhereInput[]
    image?: StringFilter<"ServiceCategory"> | string
    createdAt?: DateTimeFilter<"ServiceCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceCategory"> | Date | string
    ServicePost?: ServicePostListRelationFilter
  }, "id" | "name">

  export type ServiceCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCategoryCountOrderByAggregateInput
    _avg?: ServiceCategoryAvgOrderByAggregateInput
    _max?: ServiceCategoryMaxOrderByAggregateInput
    _min?: ServiceCategoryMinOrderByAggregateInput
    _sum?: ServiceCategorySumOrderByAggregateInput
  }

  export type ServiceCategoryScalarWhereWithAggregatesInput = {
    AND?: ServiceCategoryScalarWhereWithAggregatesInput | ServiceCategoryScalarWhereWithAggregatesInput[]
    OR?: ServiceCategoryScalarWhereWithAggregatesInput[]
    NOT?: ServiceCategoryScalarWhereWithAggregatesInput | ServiceCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceCategory"> | number
    image?: StringWithAggregatesFilter<"ServiceCategory"> | string
    name?: StringWithAggregatesFilter<"ServiceCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ServiceCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceCategory"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.userRoleEnum
    location?: string | null
    profileImage?: string | null
    backgroundImage?: string
    PetPost?: PetPostCreateNestedManyWithoutUserInput
    ServicePost?: ServicePostCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.userRoleEnum
    location?: string | null
    profileImage?: string | null
    backgroundImage?: string
    PetPost?: PetPostUncheckedCreateNestedManyWithoutUserInput
    ServicePost?: ServicePostUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumuserRoleEnumFieldUpdateOperationsInput | $Enums.userRoleEnum
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: StringFieldUpdateOperationsInput | string
    PetPost?: PetPostUpdateManyWithoutUserNestedInput
    ServicePost?: ServicePostUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumuserRoleEnumFieldUpdateOperationsInput | $Enums.userRoleEnum
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: StringFieldUpdateOperationsInput | string
    PetPost?: PetPostUncheckedUpdateManyWithoutUserNestedInput
    ServicePost?: ServicePostUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.userRoleEnum
    location?: string | null
    profileImage?: string | null
    backgroundImage?: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumuserRoleEnumFieldUpdateOperationsInput | $Enums.userRoleEnum
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumuserRoleEnumFieldUpdateOperationsInput | $Enums.userRoleEnum
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    timestamp?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    timestamp?: Date | string
    senderId: number
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    timestamp?: Date | string
    senderId: number
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: IntFieldUpdateOperationsInput | number
  }

  export type PetPostCreateInput = {
    petName: string
    address: string
    about?: PetPostCreateaboutInput | string[]
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    age: number
    breed: string
    size: $Enums.PetSizeEnum
    gender: $Enums.PetGenderEnum
    price: number
    purpose: $Enums.PetPostEnum
    video: string
    category: PetCategoryCreateNestedOneWithoutPetPostInput
    User: UserCreateNestedOneWithoutPetPostInput
  }

  export type PetPostUncheckedCreateInput = {
    id?: number
    petName: string
    address: string
    about?: PetPostCreateaboutInput | string[]
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    age: number
    breed: string
    size: $Enums.PetSizeEnum
    gender: $Enums.PetGenderEnum
    price: number
    purpose: $Enums.PetPostEnum
    petCategoryId: number
    video: string
  }

  export type PetPostUpdateInput = {
    petName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: PetPostUpdateaboutInput | string[]
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    size?: EnumPetSizeEnumFieldUpdateOperationsInput | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFieldUpdateOperationsInput | $Enums.PetGenderEnum
    price?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    video?: StringFieldUpdateOperationsInput | string
    category?: PetCategoryUpdateOneRequiredWithoutPetPostNestedInput
    User?: UserUpdateOneRequiredWithoutPetPostNestedInput
  }

  export type PetPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    petName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: PetPostUpdateaboutInput | string[]
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    size?: EnumPetSizeEnumFieldUpdateOperationsInput | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFieldUpdateOperationsInput | $Enums.PetGenderEnum
    price?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    petCategoryId?: IntFieldUpdateOperationsInput | number
    video?: StringFieldUpdateOperationsInput | string
  }

  export type PetPostCreateManyInput = {
    id?: number
    petName: string
    address: string
    about?: PetPostCreateaboutInput | string[]
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    age: number
    breed: string
    size: $Enums.PetSizeEnum
    gender: $Enums.PetGenderEnum
    price: number
    purpose: $Enums.PetPostEnum
    petCategoryId: number
    video: string
  }

  export type PetPostUpdateManyMutationInput = {
    petName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: PetPostUpdateaboutInput | string[]
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    size?: EnumPetSizeEnumFieldUpdateOperationsInput | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFieldUpdateOperationsInput | $Enums.PetGenderEnum
    price?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    video?: StringFieldUpdateOperationsInput | string
  }

  export type PetPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    petName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: PetPostUpdateaboutInput | string[]
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    size?: EnumPetSizeEnumFieldUpdateOperationsInput | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFieldUpdateOperationsInput | $Enums.PetGenderEnum
    price?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    petCategoryId?: IntFieldUpdateOperationsInput | number
    video?: StringFieldUpdateOperationsInput | string
  }

  export type ServicePostCreateInput = {
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    age: number
    purpose: $Enums.PetPostEnum
    cost: number
    skill?: ServicePostCreateskillInput | string[]
    user: UserCreateNestedOneWithoutServicePostInput
    category: PetCategoryCreateNestedOneWithoutServicePostInput
    serviceCategory: ServiceCategoryCreateNestedOneWithoutServicePostInput
  }

  export type ServicePostUncheckedCreateInput = {
    id?: number
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    age: number
    purpose: $Enums.PetPostEnum
    petCategoryId: number
    serviceId: number
    cost: number
    skill?: ServicePostCreateskillInput | string[]
  }

  export type ServicePostUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
    user?: UserUpdateOneRequiredWithoutServicePostNestedInput
    category?: PetCategoryUpdateOneRequiredWithoutServicePostNestedInput
    serviceCategory?: ServiceCategoryUpdateOneRequiredWithoutServicePostNestedInput
  }

  export type ServicePostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    petCategoryId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
  }

  export type ServicePostCreateManyInput = {
    id?: number
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    age: number
    purpose: $Enums.PetPostEnum
    petCategoryId: number
    serviceId: number
    cost: number
    skill?: ServicePostCreateskillInput | string[]
  }

  export type ServicePostUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
  }

  export type ServicePostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    petCategoryId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
  }

  export type HospitalCreateInput = {
    name: string
    about: string
    avatarImage?: HospitalCreateavatarImageInput | string[]
    email: string
    backgroundImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    location: string
    phoneNumber: number
    workTime: string
    category?: HospitalCreatecategoryInput | string[]
    views?: number
  }

  export type HospitalUncheckedCreateInput = {
    id?: number
    name: string
    about: string
    avatarImage?: HospitalCreateavatarImageInput | string[]
    email: string
    backgroundImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    location: string
    phoneNumber: number
    workTime: string
    category?: HospitalCreatecategoryInput | string[]
    views?: number
  }

  export type HospitalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    avatarImage?: HospitalUpdateavatarImageInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    backgroundImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    workTime?: StringFieldUpdateOperationsInput | string
    category?: HospitalUpdatecategoryInput | string[]
    views?: IntFieldUpdateOperationsInput | number
  }

  export type HospitalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    avatarImage?: HospitalUpdateavatarImageInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    backgroundImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    workTime?: StringFieldUpdateOperationsInput | string
    category?: HospitalUpdatecategoryInput | string[]
    views?: IntFieldUpdateOperationsInput | number
  }

  export type HospitalCreateManyInput = {
    id?: number
    name: string
    about: string
    avatarImage?: HospitalCreateavatarImageInput | string[]
    email: string
    backgroundImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    location: string
    phoneNumber: number
    workTime: string
    category?: HospitalCreatecategoryInput | string[]
    views?: number
  }

  export type HospitalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    avatarImage?: HospitalUpdateavatarImageInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    backgroundImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    workTime?: StringFieldUpdateOperationsInput | string
    category?: HospitalUpdatecategoryInput | string[]
    views?: IntFieldUpdateOperationsInput | number
  }

  export type HospitalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    avatarImage?: HospitalUpdateavatarImageInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    backgroundImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    workTime?: StringFieldUpdateOperationsInput | string
    category?: HospitalUpdatecategoryInput | string[]
    views?: IntFieldUpdateOperationsInput | number
  }

  export type PetCategoryCreateInput = {
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PetPost?: PetPostCreateNestedManyWithoutCategoryInput
    ServicePost?: ServicePostCreateNestedManyWithoutCategoryInput
  }

  export type PetCategoryUncheckedCreateInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PetPost?: PetPostUncheckedCreateNestedManyWithoutCategoryInput
    ServicePost?: ServicePostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PetCategoryUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PetPost?: PetPostUpdateManyWithoutCategoryNestedInput
    ServicePost?: ServicePostUpdateManyWithoutCategoryNestedInput
  }

  export type PetCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PetPost?: PetPostUncheckedUpdateManyWithoutCategoryNestedInput
    ServicePost?: ServicePostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PetCategoryCreateManyInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetCategoryUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCategoryCreateInput = {
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ServicePost?: ServicePostCreateNestedManyWithoutServiceCategoryInput
  }

  export type ServiceCategoryUncheckedCreateInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ServicePost?: ServicePostUncheckedCreateNestedManyWithoutServiceCategoryInput
  }

  export type ServiceCategoryUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ServicePost?: ServicePostUpdateManyWithoutServiceCategoryNestedInput
  }

  export type ServiceCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ServicePost?: ServicePostUncheckedUpdateManyWithoutServiceCategoryNestedInput
  }

  export type ServiceCategoryCreateManyInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCategoryUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type EnumuserRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.userRoleEnum | EnumuserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.userRoleEnum[] | ListEnumuserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRoleEnum[] | ListEnumuserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleEnumFilter<$PrismaModel> | $Enums.userRoleEnum
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

  export type PetPostListRelationFilter = {
    every?: PetPostWhereInput
    some?: PetPostWhereInput
    none?: PetPostWhereInput
  }

  export type ServicePostListRelationFilter = {
    every?: ServicePostWhereInput
    some?: ServicePostWhereInput
    none?: ServicePostWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PetPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicePostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    location?: SortOrder
    profileImage?: SortOrder
    backgroundImage?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    location?: SortOrder
    profileImage?: SortOrder
    backgroundImage?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    location?: SortOrder
    profileImage?: SortOrder
    backgroundImage?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type EnumuserRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRoleEnum | EnumuserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.userRoleEnum[] | ListEnumuserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRoleEnum[] | ListEnumuserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.userRoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumuserRoleEnumFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPetSizeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSizeEnum | EnumPetSizeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PetSizeEnum[] | ListEnumPetSizeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetSizeEnum[] | ListEnumPetSizeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPetSizeEnumFilter<$PrismaModel> | $Enums.PetSizeEnum
  }

  export type EnumPetGenderEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PetGenderEnum | EnumPetGenderEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PetGenderEnum[] | ListEnumPetGenderEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetGenderEnum[] | ListEnumPetGenderEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPetGenderEnumFilter<$PrismaModel> | $Enums.PetGenderEnum
  }

  export type EnumPetPostEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PetPostEnum | EnumPetPostEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PetPostEnum[] | ListEnumPetPostEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetPostEnum[] | ListEnumPetPostEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPetPostEnumFilter<$PrismaModel> | $Enums.PetPostEnum
  }

  export type PetCategoryScalarRelationFilter = {
    is?: PetCategoryWhereInput
    isNot?: PetCategoryWhereInput
  }

  export type PetPostCountOrderByAggregateInput = {
    id?: SortOrder
    petName?: SortOrder
    address?: SortOrder
    about?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    size?: SortOrder
    gender?: SortOrder
    price?: SortOrder
    purpose?: SortOrder
    petCategoryId?: SortOrder
    video?: SortOrder
  }

  export type PetPostAvgOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    price?: SortOrder
    petCategoryId?: SortOrder
  }

  export type PetPostMaxOrderByAggregateInput = {
    id?: SortOrder
    petName?: SortOrder
    address?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    size?: SortOrder
    gender?: SortOrder
    price?: SortOrder
    purpose?: SortOrder
    petCategoryId?: SortOrder
    video?: SortOrder
  }

  export type PetPostMinOrderByAggregateInput = {
    id?: SortOrder
    petName?: SortOrder
    address?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    size?: SortOrder
    gender?: SortOrder
    price?: SortOrder
    purpose?: SortOrder
    petCategoryId?: SortOrder
    video?: SortOrder
  }

  export type PetPostSumOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    price?: SortOrder
    petCategoryId?: SortOrder
  }

  export type EnumPetSizeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSizeEnum | EnumPetSizeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PetSizeEnum[] | ListEnumPetSizeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetSizeEnum[] | ListEnumPetSizeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPetSizeEnumWithAggregatesFilter<$PrismaModel> | $Enums.PetSizeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetSizeEnumFilter<$PrismaModel>
    _max?: NestedEnumPetSizeEnumFilter<$PrismaModel>
  }

  export type EnumPetGenderEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetGenderEnum | EnumPetGenderEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PetGenderEnum[] | ListEnumPetGenderEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetGenderEnum[] | ListEnumPetGenderEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPetGenderEnumWithAggregatesFilter<$PrismaModel> | $Enums.PetGenderEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetGenderEnumFilter<$PrismaModel>
    _max?: NestedEnumPetGenderEnumFilter<$PrismaModel>
  }

  export type EnumPetPostEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetPostEnum | EnumPetPostEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PetPostEnum[] | ListEnumPetPostEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetPostEnum[] | ListEnumPetPostEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPetPostEnumWithAggregatesFilter<$PrismaModel> | $Enums.PetPostEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetPostEnumFilter<$PrismaModel>
    _max?: NestedEnumPetPostEnumFilter<$PrismaModel>
  }

  export type ServiceCategoryScalarRelationFilter = {
    is?: ServiceCategoryWhereInput
    isNot?: ServiceCategoryWhereInput
  }

  export type ServicePostCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    about?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    purpose?: SortOrder
    petCategoryId?: SortOrder
    serviceId?: SortOrder
    cost?: SortOrder
    skill?: SortOrder
  }

  export type ServicePostAvgOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    petCategoryId?: SortOrder
    serviceId?: SortOrder
    cost?: SortOrder
  }

  export type ServicePostMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    about?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    purpose?: SortOrder
    petCategoryId?: SortOrder
    serviceId?: SortOrder
    cost?: SortOrder
  }

  export type ServicePostMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    about?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    purpose?: SortOrder
    petCategoryId?: SortOrder
    serviceId?: SortOrder
    cost?: SortOrder
  }

  export type ServicePostSumOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    userId?: SortOrder
    age?: SortOrder
    petCategoryId?: SortOrder
    serviceId?: SortOrder
    cost?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type HospitalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    avatarImage?: SortOrder
    email?: SortOrder
    backgroundImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    location?: SortOrder
    phoneNumber?: SortOrder
    workTime?: SortOrder
    category?: SortOrder
    views?: SortOrder
  }

  export type HospitalAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    phoneNumber?: SortOrder
    views?: SortOrder
  }

  export type HospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    email?: SortOrder
    backgroundImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    location?: SortOrder
    phoneNumber?: SortOrder
    workTime?: SortOrder
    views?: SortOrder
  }

  export type HospitalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    email?: SortOrder
    backgroundImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    location?: SortOrder
    phoneNumber?: SortOrder
    workTime?: SortOrder
    views?: SortOrder
  }

  export type HospitalSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    phoneNumber?: SortOrder
    views?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PetCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PetCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PetPostCreateNestedManyWithoutUserInput = {
    create?: XOR<PetPostCreateWithoutUserInput, PetPostUncheckedCreateWithoutUserInput> | PetPostCreateWithoutUserInput[] | PetPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetPostCreateOrConnectWithoutUserInput | PetPostCreateOrConnectWithoutUserInput[]
    createMany?: PetPostCreateManyUserInputEnvelope
    connect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
  }

  export type ServicePostCreateNestedManyWithoutUserInput = {
    create?: XOR<ServicePostCreateWithoutUserInput, ServicePostUncheckedCreateWithoutUserInput> | ServicePostCreateWithoutUserInput[] | ServicePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServicePostCreateOrConnectWithoutUserInput | ServicePostCreateOrConnectWithoutUserInput[]
    createMany?: ServicePostCreateManyUserInputEnvelope
    connect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PetPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PetPostCreateWithoutUserInput, PetPostUncheckedCreateWithoutUserInput> | PetPostCreateWithoutUserInput[] | PetPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetPostCreateOrConnectWithoutUserInput | PetPostCreateOrConnectWithoutUserInput[]
    createMany?: PetPostCreateManyUserInputEnvelope
    connect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
  }

  export type ServicePostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ServicePostCreateWithoutUserInput, ServicePostUncheckedCreateWithoutUserInput> | ServicePostCreateWithoutUserInput[] | ServicePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServicePostCreateOrConnectWithoutUserInput | ServicePostCreateOrConnectWithoutUserInput[]
    createMany?: ServicePostCreateManyUserInputEnvelope
    connect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumuserRoleEnumFieldUpdateOperationsInput = {
    set?: $Enums.userRoleEnum
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PetPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetPostCreateWithoutUserInput, PetPostUncheckedCreateWithoutUserInput> | PetPostCreateWithoutUserInput[] | PetPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetPostCreateOrConnectWithoutUserInput | PetPostCreateOrConnectWithoutUserInput[]
    upsert?: PetPostUpsertWithWhereUniqueWithoutUserInput | PetPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetPostCreateManyUserInputEnvelope
    set?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    disconnect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    delete?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    connect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    update?: PetPostUpdateWithWhereUniqueWithoutUserInput | PetPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetPostUpdateManyWithWhereWithoutUserInput | PetPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetPostScalarWhereInput | PetPostScalarWhereInput[]
  }

  export type ServicePostUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServicePostCreateWithoutUserInput, ServicePostUncheckedCreateWithoutUserInput> | ServicePostCreateWithoutUserInput[] | ServicePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServicePostCreateOrConnectWithoutUserInput | ServicePostCreateOrConnectWithoutUserInput[]
    upsert?: ServicePostUpsertWithWhereUniqueWithoutUserInput | ServicePostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServicePostCreateManyUserInputEnvelope
    set?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    disconnect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    delete?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    connect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    update?: ServicePostUpdateWithWhereUniqueWithoutUserInput | ServicePostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServicePostUpdateManyWithWhereWithoutUserInput | ServicePostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServicePostScalarWhereInput | ServicePostScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PetPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetPostCreateWithoutUserInput, PetPostUncheckedCreateWithoutUserInput> | PetPostCreateWithoutUserInput[] | PetPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetPostCreateOrConnectWithoutUserInput | PetPostCreateOrConnectWithoutUserInput[]
    upsert?: PetPostUpsertWithWhereUniqueWithoutUserInput | PetPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetPostCreateManyUserInputEnvelope
    set?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    disconnect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    delete?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    connect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    update?: PetPostUpdateWithWhereUniqueWithoutUserInput | PetPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetPostUpdateManyWithWhereWithoutUserInput | PetPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetPostScalarWhereInput | PetPostScalarWhereInput[]
  }

  export type ServicePostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServicePostCreateWithoutUserInput, ServicePostUncheckedCreateWithoutUserInput> | ServicePostCreateWithoutUserInput[] | ServicePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServicePostCreateOrConnectWithoutUserInput | ServicePostCreateOrConnectWithoutUserInput[]
    upsert?: ServicePostUpsertWithWhereUniqueWithoutUserInput | ServicePostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServicePostCreateManyUserInputEnvelope
    set?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    disconnect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    delete?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    connect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    update?: ServicePostUpdateWithWhereUniqueWithoutUserInput | ServicePostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServicePostUpdateManyWithWhereWithoutUserInput | ServicePostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServicePostScalarWhereInput | ServicePostScalarWhereInput[]
  }

  export type PetPostCreateaboutInput = {
    set: string[]
  }

  export type PetCategoryCreateNestedOneWithoutPetPostInput = {
    create?: XOR<PetCategoryCreateWithoutPetPostInput, PetCategoryUncheckedCreateWithoutPetPostInput>
    connectOrCreate?: PetCategoryCreateOrConnectWithoutPetPostInput
    connect?: PetCategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPetPostInput = {
    create?: XOR<UserCreateWithoutPetPostInput, UserUncheckedCreateWithoutPetPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetPostInput
    connect?: UserWhereUniqueInput
  }

  export type PetPostUpdateaboutInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumPetSizeEnumFieldUpdateOperationsInput = {
    set?: $Enums.PetSizeEnum
  }

  export type EnumPetGenderEnumFieldUpdateOperationsInput = {
    set?: $Enums.PetGenderEnum
  }

  export type EnumPetPostEnumFieldUpdateOperationsInput = {
    set?: $Enums.PetPostEnum
  }

  export type PetCategoryUpdateOneRequiredWithoutPetPostNestedInput = {
    create?: XOR<PetCategoryCreateWithoutPetPostInput, PetCategoryUncheckedCreateWithoutPetPostInput>
    connectOrCreate?: PetCategoryCreateOrConnectWithoutPetPostInput
    upsert?: PetCategoryUpsertWithoutPetPostInput
    connect?: PetCategoryWhereUniqueInput
    update?: XOR<XOR<PetCategoryUpdateToOneWithWhereWithoutPetPostInput, PetCategoryUpdateWithoutPetPostInput>, PetCategoryUncheckedUpdateWithoutPetPostInput>
  }

  export type UserUpdateOneRequiredWithoutPetPostNestedInput = {
    create?: XOR<UserCreateWithoutPetPostInput, UserUncheckedCreateWithoutPetPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetPostInput
    upsert?: UserUpsertWithoutPetPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPetPostInput, UserUpdateWithoutPetPostInput>, UserUncheckedUpdateWithoutPetPostInput>
  }

  export type ServicePostCreateskillInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutServicePostInput = {
    create?: XOR<UserCreateWithoutServicePostInput, UserUncheckedCreateWithoutServicePostInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicePostInput
    connect?: UserWhereUniqueInput
  }

  export type PetCategoryCreateNestedOneWithoutServicePostInput = {
    create?: XOR<PetCategoryCreateWithoutServicePostInput, PetCategoryUncheckedCreateWithoutServicePostInput>
    connectOrCreate?: PetCategoryCreateOrConnectWithoutServicePostInput
    connect?: PetCategoryWhereUniqueInput
  }

  export type ServiceCategoryCreateNestedOneWithoutServicePostInput = {
    create?: XOR<ServiceCategoryCreateWithoutServicePostInput, ServiceCategoryUncheckedCreateWithoutServicePostInput>
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutServicePostInput
    connect?: ServiceCategoryWhereUniqueInput
  }

  export type ServicePostUpdateskillInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutServicePostNestedInput = {
    create?: XOR<UserCreateWithoutServicePostInput, UserUncheckedCreateWithoutServicePostInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicePostInput
    upsert?: UserUpsertWithoutServicePostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServicePostInput, UserUpdateWithoutServicePostInput>, UserUncheckedUpdateWithoutServicePostInput>
  }

  export type PetCategoryUpdateOneRequiredWithoutServicePostNestedInput = {
    create?: XOR<PetCategoryCreateWithoutServicePostInput, PetCategoryUncheckedCreateWithoutServicePostInput>
    connectOrCreate?: PetCategoryCreateOrConnectWithoutServicePostInput
    upsert?: PetCategoryUpsertWithoutServicePostInput
    connect?: PetCategoryWhereUniqueInput
    update?: XOR<XOR<PetCategoryUpdateToOneWithWhereWithoutServicePostInput, PetCategoryUpdateWithoutServicePostInput>, PetCategoryUncheckedUpdateWithoutServicePostInput>
  }

  export type ServiceCategoryUpdateOneRequiredWithoutServicePostNestedInput = {
    create?: XOR<ServiceCategoryCreateWithoutServicePostInput, ServiceCategoryUncheckedCreateWithoutServicePostInput>
    connectOrCreate?: ServiceCategoryCreateOrConnectWithoutServicePostInput
    upsert?: ServiceCategoryUpsertWithoutServicePostInput
    connect?: ServiceCategoryWhereUniqueInput
    update?: XOR<XOR<ServiceCategoryUpdateToOneWithWhereWithoutServicePostInput, ServiceCategoryUpdateWithoutServicePostInput>, ServiceCategoryUncheckedUpdateWithoutServicePostInput>
  }

  export type HospitalCreateavatarImageInput = {
    set: string[]
  }

  export type HospitalCreatecategoryInput = {
    set: string[]
  }

  export type HospitalUpdateavatarImageInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HospitalUpdatecategoryInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PetPostCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PetPostCreateWithoutCategoryInput, PetPostUncheckedCreateWithoutCategoryInput> | PetPostCreateWithoutCategoryInput[] | PetPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PetPostCreateOrConnectWithoutCategoryInput | PetPostCreateOrConnectWithoutCategoryInput[]
    createMany?: PetPostCreateManyCategoryInputEnvelope
    connect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
  }

  export type ServicePostCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServicePostCreateWithoutCategoryInput, ServicePostUncheckedCreateWithoutCategoryInput> | ServicePostCreateWithoutCategoryInput[] | ServicePostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServicePostCreateOrConnectWithoutCategoryInput | ServicePostCreateOrConnectWithoutCategoryInput[]
    createMany?: ServicePostCreateManyCategoryInputEnvelope
    connect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
  }

  export type PetPostUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PetPostCreateWithoutCategoryInput, PetPostUncheckedCreateWithoutCategoryInput> | PetPostCreateWithoutCategoryInput[] | PetPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PetPostCreateOrConnectWithoutCategoryInput | PetPostCreateOrConnectWithoutCategoryInput[]
    createMany?: PetPostCreateManyCategoryInputEnvelope
    connect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
  }

  export type ServicePostUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServicePostCreateWithoutCategoryInput, ServicePostUncheckedCreateWithoutCategoryInput> | ServicePostCreateWithoutCategoryInput[] | ServicePostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServicePostCreateOrConnectWithoutCategoryInput | ServicePostCreateOrConnectWithoutCategoryInput[]
    createMany?: ServicePostCreateManyCategoryInputEnvelope
    connect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
  }

  export type PetPostUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PetPostCreateWithoutCategoryInput, PetPostUncheckedCreateWithoutCategoryInput> | PetPostCreateWithoutCategoryInput[] | PetPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PetPostCreateOrConnectWithoutCategoryInput | PetPostCreateOrConnectWithoutCategoryInput[]
    upsert?: PetPostUpsertWithWhereUniqueWithoutCategoryInput | PetPostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PetPostCreateManyCategoryInputEnvelope
    set?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    disconnect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    delete?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    connect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    update?: PetPostUpdateWithWhereUniqueWithoutCategoryInput | PetPostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PetPostUpdateManyWithWhereWithoutCategoryInput | PetPostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PetPostScalarWhereInput | PetPostScalarWhereInput[]
  }

  export type ServicePostUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServicePostCreateWithoutCategoryInput, ServicePostUncheckedCreateWithoutCategoryInput> | ServicePostCreateWithoutCategoryInput[] | ServicePostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServicePostCreateOrConnectWithoutCategoryInput | ServicePostCreateOrConnectWithoutCategoryInput[]
    upsert?: ServicePostUpsertWithWhereUniqueWithoutCategoryInput | ServicePostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServicePostCreateManyCategoryInputEnvelope
    set?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    disconnect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    delete?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    connect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    update?: ServicePostUpdateWithWhereUniqueWithoutCategoryInput | ServicePostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServicePostUpdateManyWithWhereWithoutCategoryInput | ServicePostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServicePostScalarWhereInput | ServicePostScalarWhereInput[]
  }

  export type PetPostUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PetPostCreateWithoutCategoryInput, PetPostUncheckedCreateWithoutCategoryInput> | PetPostCreateWithoutCategoryInput[] | PetPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PetPostCreateOrConnectWithoutCategoryInput | PetPostCreateOrConnectWithoutCategoryInput[]
    upsert?: PetPostUpsertWithWhereUniqueWithoutCategoryInput | PetPostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PetPostCreateManyCategoryInputEnvelope
    set?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    disconnect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    delete?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    connect?: PetPostWhereUniqueInput | PetPostWhereUniqueInput[]
    update?: PetPostUpdateWithWhereUniqueWithoutCategoryInput | PetPostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PetPostUpdateManyWithWhereWithoutCategoryInput | PetPostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PetPostScalarWhereInput | PetPostScalarWhereInput[]
  }

  export type ServicePostUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServicePostCreateWithoutCategoryInput, ServicePostUncheckedCreateWithoutCategoryInput> | ServicePostCreateWithoutCategoryInput[] | ServicePostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServicePostCreateOrConnectWithoutCategoryInput | ServicePostCreateOrConnectWithoutCategoryInput[]
    upsert?: ServicePostUpsertWithWhereUniqueWithoutCategoryInput | ServicePostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServicePostCreateManyCategoryInputEnvelope
    set?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    disconnect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    delete?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    connect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    update?: ServicePostUpdateWithWhereUniqueWithoutCategoryInput | ServicePostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServicePostUpdateManyWithWhereWithoutCategoryInput | ServicePostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServicePostScalarWhereInput | ServicePostScalarWhereInput[]
  }

  export type ServicePostCreateNestedManyWithoutServiceCategoryInput = {
    create?: XOR<ServicePostCreateWithoutServiceCategoryInput, ServicePostUncheckedCreateWithoutServiceCategoryInput> | ServicePostCreateWithoutServiceCategoryInput[] | ServicePostUncheckedCreateWithoutServiceCategoryInput[]
    connectOrCreate?: ServicePostCreateOrConnectWithoutServiceCategoryInput | ServicePostCreateOrConnectWithoutServiceCategoryInput[]
    createMany?: ServicePostCreateManyServiceCategoryInputEnvelope
    connect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
  }

  export type ServicePostUncheckedCreateNestedManyWithoutServiceCategoryInput = {
    create?: XOR<ServicePostCreateWithoutServiceCategoryInput, ServicePostUncheckedCreateWithoutServiceCategoryInput> | ServicePostCreateWithoutServiceCategoryInput[] | ServicePostUncheckedCreateWithoutServiceCategoryInput[]
    connectOrCreate?: ServicePostCreateOrConnectWithoutServiceCategoryInput | ServicePostCreateOrConnectWithoutServiceCategoryInput[]
    createMany?: ServicePostCreateManyServiceCategoryInputEnvelope
    connect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
  }

  export type ServicePostUpdateManyWithoutServiceCategoryNestedInput = {
    create?: XOR<ServicePostCreateWithoutServiceCategoryInput, ServicePostUncheckedCreateWithoutServiceCategoryInput> | ServicePostCreateWithoutServiceCategoryInput[] | ServicePostUncheckedCreateWithoutServiceCategoryInput[]
    connectOrCreate?: ServicePostCreateOrConnectWithoutServiceCategoryInput | ServicePostCreateOrConnectWithoutServiceCategoryInput[]
    upsert?: ServicePostUpsertWithWhereUniqueWithoutServiceCategoryInput | ServicePostUpsertWithWhereUniqueWithoutServiceCategoryInput[]
    createMany?: ServicePostCreateManyServiceCategoryInputEnvelope
    set?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    disconnect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    delete?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    connect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    update?: ServicePostUpdateWithWhereUniqueWithoutServiceCategoryInput | ServicePostUpdateWithWhereUniqueWithoutServiceCategoryInput[]
    updateMany?: ServicePostUpdateManyWithWhereWithoutServiceCategoryInput | ServicePostUpdateManyWithWhereWithoutServiceCategoryInput[]
    deleteMany?: ServicePostScalarWhereInput | ServicePostScalarWhereInput[]
  }

  export type ServicePostUncheckedUpdateManyWithoutServiceCategoryNestedInput = {
    create?: XOR<ServicePostCreateWithoutServiceCategoryInput, ServicePostUncheckedCreateWithoutServiceCategoryInput> | ServicePostCreateWithoutServiceCategoryInput[] | ServicePostUncheckedCreateWithoutServiceCategoryInput[]
    connectOrCreate?: ServicePostCreateOrConnectWithoutServiceCategoryInput | ServicePostCreateOrConnectWithoutServiceCategoryInput[]
    upsert?: ServicePostUpsertWithWhereUniqueWithoutServiceCategoryInput | ServicePostUpsertWithWhereUniqueWithoutServiceCategoryInput[]
    createMany?: ServicePostCreateManyServiceCategoryInputEnvelope
    set?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    disconnect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    delete?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    connect?: ServicePostWhereUniqueInput | ServicePostWhereUniqueInput[]
    update?: ServicePostUpdateWithWhereUniqueWithoutServiceCategoryInput | ServicePostUpdateWithWhereUniqueWithoutServiceCategoryInput[]
    updateMany?: ServicePostUpdateManyWithWhereWithoutServiceCategoryInput | ServicePostUpdateManyWithWhereWithoutServiceCategoryInput[]
    deleteMany?: ServicePostScalarWhereInput | ServicePostScalarWhereInput[]
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

  export type NestedEnumuserRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.userRoleEnum | EnumuserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.userRoleEnum[] | ListEnumuserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRoleEnum[] | ListEnumuserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleEnumFilter<$PrismaModel> | $Enums.userRoleEnum
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumuserRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userRoleEnum | EnumuserRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.userRoleEnum[] | ListEnumuserRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.userRoleEnum[] | ListEnumuserRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumuserRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.userRoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumuserRoleEnumFilter<$PrismaModel>
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

  export type NestedEnumPetSizeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSizeEnum | EnumPetSizeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PetSizeEnum[] | ListEnumPetSizeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetSizeEnum[] | ListEnumPetSizeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPetSizeEnumFilter<$PrismaModel> | $Enums.PetSizeEnum
  }

  export type NestedEnumPetGenderEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PetGenderEnum | EnumPetGenderEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PetGenderEnum[] | ListEnumPetGenderEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetGenderEnum[] | ListEnumPetGenderEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPetGenderEnumFilter<$PrismaModel> | $Enums.PetGenderEnum
  }

  export type NestedEnumPetPostEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PetPostEnum | EnumPetPostEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PetPostEnum[] | ListEnumPetPostEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetPostEnum[] | ListEnumPetPostEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPetPostEnumFilter<$PrismaModel> | $Enums.PetPostEnum
  }

  export type NestedEnumPetSizeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSizeEnum | EnumPetSizeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PetSizeEnum[] | ListEnumPetSizeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetSizeEnum[] | ListEnumPetSizeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPetSizeEnumWithAggregatesFilter<$PrismaModel> | $Enums.PetSizeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetSizeEnumFilter<$PrismaModel>
    _max?: NestedEnumPetSizeEnumFilter<$PrismaModel>
  }

  export type NestedEnumPetGenderEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetGenderEnum | EnumPetGenderEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PetGenderEnum[] | ListEnumPetGenderEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetGenderEnum[] | ListEnumPetGenderEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPetGenderEnumWithAggregatesFilter<$PrismaModel> | $Enums.PetGenderEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetGenderEnumFilter<$PrismaModel>
    _max?: NestedEnumPetGenderEnumFilter<$PrismaModel>
  }

  export type NestedEnumPetPostEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetPostEnum | EnumPetPostEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PetPostEnum[] | ListEnumPetPostEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetPostEnum[] | ListEnumPetPostEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPetPostEnumWithAggregatesFilter<$PrismaModel> | $Enums.PetPostEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetPostEnumFilter<$PrismaModel>
    _max?: NestedEnumPetPostEnumFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PetPostCreateWithoutUserInput = {
    petName: string
    address: string
    about?: PetPostCreateaboutInput | string[]
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    age: number
    breed: string
    size: $Enums.PetSizeEnum
    gender: $Enums.PetGenderEnum
    price: number
    purpose: $Enums.PetPostEnum
    video: string
    category: PetCategoryCreateNestedOneWithoutPetPostInput
  }

  export type PetPostUncheckedCreateWithoutUserInput = {
    id?: number
    petName: string
    address: string
    about?: PetPostCreateaboutInput | string[]
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    age: number
    breed: string
    size: $Enums.PetSizeEnum
    gender: $Enums.PetGenderEnum
    price: number
    purpose: $Enums.PetPostEnum
    petCategoryId: number
    video: string
  }

  export type PetPostCreateOrConnectWithoutUserInput = {
    where: PetPostWhereUniqueInput
    create: XOR<PetPostCreateWithoutUserInput, PetPostUncheckedCreateWithoutUserInput>
  }

  export type PetPostCreateManyUserInputEnvelope = {
    data: PetPostCreateManyUserInput | PetPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ServicePostCreateWithoutUserInput = {
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    age: number
    purpose: $Enums.PetPostEnum
    cost: number
    skill?: ServicePostCreateskillInput | string[]
    category: PetCategoryCreateNestedOneWithoutServicePostInput
    serviceCategory: ServiceCategoryCreateNestedOneWithoutServicePostInput
  }

  export type ServicePostUncheckedCreateWithoutUserInput = {
    id?: number
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    age: number
    purpose: $Enums.PetPostEnum
    petCategoryId: number
    serviceId: number
    cost: number
    skill?: ServicePostCreateskillInput | string[]
  }

  export type ServicePostCreateOrConnectWithoutUserInput = {
    where: ServicePostWhereUniqueInput
    create: XOR<ServicePostCreateWithoutUserInput, ServicePostUncheckedCreateWithoutUserInput>
  }

  export type ServicePostCreateManyUserInputEnvelope = {
    data: ServicePostCreateManyUserInput | ServicePostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    timestamp?: Date | string
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    timestamp?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PetPostUpsertWithWhereUniqueWithoutUserInput = {
    where: PetPostWhereUniqueInput
    update: XOR<PetPostUpdateWithoutUserInput, PetPostUncheckedUpdateWithoutUserInput>
    create: XOR<PetPostCreateWithoutUserInput, PetPostUncheckedCreateWithoutUserInput>
  }

  export type PetPostUpdateWithWhereUniqueWithoutUserInput = {
    where: PetPostWhereUniqueInput
    data: XOR<PetPostUpdateWithoutUserInput, PetPostUncheckedUpdateWithoutUserInput>
  }

  export type PetPostUpdateManyWithWhereWithoutUserInput = {
    where: PetPostScalarWhereInput
    data: XOR<PetPostUpdateManyMutationInput, PetPostUncheckedUpdateManyWithoutUserInput>
  }

  export type PetPostScalarWhereInput = {
    AND?: PetPostScalarWhereInput | PetPostScalarWhereInput[]
    OR?: PetPostScalarWhereInput[]
    NOT?: PetPostScalarWhereInput | PetPostScalarWhereInput[]
    id?: IntFilter<"PetPost"> | number
    petName?: StringFilter<"PetPost"> | string
    address?: StringFilter<"PetPost"> | string
    about?: StringNullableListFilter<"PetPost">
    image?: StringFilter<"PetPost"> | string
    phoneNumber?: IntFilter<"PetPost"> | number
    createdAt?: DateTimeFilter<"PetPost"> | Date | string
    updatedAt?: DateTimeFilter<"PetPost"> | Date | string
    userId?: IntFilter<"PetPost"> | number
    age?: IntFilter<"PetPost"> | number
    breed?: StringFilter<"PetPost"> | string
    size?: EnumPetSizeEnumFilter<"PetPost"> | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFilter<"PetPost"> | $Enums.PetGenderEnum
    price?: IntFilter<"PetPost"> | number
    purpose?: EnumPetPostEnumFilter<"PetPost"> | $Enums.PetPostEnum
    petCategoryId?: IntFilter<"PetPost"> | number
    video?: StringFilter<"PetPost"> | string
  }

  export type ServicePostUpsertWithWhereUniqueWithoutUserInput = {
    where: ServicePostWhereUniqueInput
    update: XOR<ServicePostUpdateWithoutUserInput, ServicePostUncheckedUpdateWithoutUserInput>
    create: XOR<ServicePostCreateWithoutUserInput, ServicePostUncheckedCreateWithoutUserInput>
  }

  export type ServicePostUpdateWithWhereUniqueWithoutUserInput = {
    where: ServicePostWhereUniqueInput
    data: XOR<ServicePostUpdateWithoutUserInput, ServicePostUncheckedUpdateWithoutUserInput>
  }

  export type ServicePostUpdateManyWithWhereWithoutUserInput = {
    where: ServicePostScalarWhereInput
    data: XOR<ServicePostUpdateManyMutationInput, ServicePostUncheckedUpdateManyWithoutUserInput>
  }

  export type ServicePostScalarWhereInput = {
    AND?: ServicePostScalarWhereInput | ServicePostScalarWhereInput[]
    OR?: ServicePostScalarWhereInput[]
    NOT?: ServicePostScalarWhereInput | ServicePostScalarWhereInput[]
    id?: IntFilter<"ServicePost"> | number
    address?: StringFilter<"ServicePost"> | string
    about?: StringFilter<"ServicePost"> | string
    image?: StringFilter<"ServicePost"> | string
    phoneNumber?: IntFilter<"ServicePost"> | number
    createdAt?: DateTimeFilter<"ServicePost"> | Date | string
    updatedAt?: DateTimeFilter<"ServicePost"> | Date | string
    userId?: IntFilter<"ServicePost"> | number
    age?: IntFilter<"ServicePost"> | number
    purpose?: EnumPetPostEnumFilter<"ServicePost"> | $Enums.PetPostEnum
    petCategoryId?: IntFilter<"ServicePost"> | number
    serviceId?: IntFilter<"ServicePost"> | number
    cost?: IntFilter<"ServicePost"> | number
    skill?: StringNullableListFilter<"ServicePost">
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    senderId?: IntFilter<"Message"> | number
  }

  export type UserCreateWithoutMessagesInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.userRoleEnum
    location?: string | null
    profileImage?: string | null
    backgroundImage?: string
    PetPost?: PetPostCreateNestedManyWithoutUserInput
    ServicePost?: ServicePostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.userRoleEnum
    location?: string | null
    profileImage?: string | null
    backgroundImage?: string
    PetPost?: PetPostUncheckedCreateNestedManyWithoutUserInput
    ServicePost?: ServicePostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumuserRoleEnumFieldUpdateOperationsInput | $Enums.userRoleEnum
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: StringFieldUpdateOperationsInput | string
    PetPost?: PetPostUpdateManyWithoutUserNestedInput
    ServicePost?: ServicePostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumuserRoleEnumFieldUpdateOperationsInput | $Enums.userRoleEnum
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: StringFieldUpdateOperationsInput | string
    PetPost?: PetPostUncheckedUpdateManyWithoutUserNestedInput
    ServicePost?: ServicePostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PetCategoryCreateWithoutPetPostInput = {
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ServicePost?: ServicePostCreateNestedManyWithoutCategoryInput
  }

  export type PetCategoryUncheckedCreateWithoutPetPostInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ServicePost?: ServicePostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PetCategoryCreateOrConnectWithoutPetPostInput = {
    where: PetCategoryWhereUniqueInput
    create: XOR<PetCategoryCreateWithoutPetPostInput, PetCategoryUncheckedCreateWithoutPetPostInput>
  }

  export type UserCreateWithoutPetPostInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.userRoleEnum
    location?: string | null
    profileImage?: string | null
    backgroundImage?: string
    ServicePost?: ServicePostCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutPetPostInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.userRoleEnum
    location?: string | null
    profileImage?: string | null
    backgroundImage?: string
    ServicePost?: ServicePostUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutPetPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPetPostInput, UserUncheckedCreateWithoutPetPostInput>
  }

  export type PetCategoryUpsertWithoutPetPostInput = {
    update: XOR<PetCategoryUpdateWithoutPetPostInput, PetCategoryUncheckedUpdateWithoutPetPostInput>
    create: XOR<PetCategoryCreateWithoutPetPostInput, PetCategoryUncheckedCreateWithoutPetPostInput>
    where?: PetCategoryWhereInput
  }

  export type PetCategoryUpdateToOneWithWhereWithoutPetPostInput = {
    where?: PetCategoryWhereInput
    data: XOR<PetCategoryUpdateWithoutPetPostInput, PetCategoryUncheckedUpdateWithoutPetPostInput>
  }

  export type PetCategoryUpdateWithoutPetPostInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ServicePost?: ServicePostUpdateManyWithoutCategoryNestedInput
  }

  export type PetCategoryUncheckedUpdateWithoutPetPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ServicePost?: ServicePostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserUpsertWithoutPetPostInput = {
    update: XOR<UserUpdateWithoutPetPostInput, UserUncheckedUpdateWithoutPetPostInput>
    create: XOR<UserCreateWithoutPetPostInput, UserUncheckedCreateWithoutPetPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPetPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPetPostInput, UserUncheckedUpdateWithoutPetPostInput>
  }

  export type UserUpdateWithoutPetPostInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumuserRoleEnumFieldUpdateOperationsInput | $Enums.userRoleEnum
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: StringFieldUpdateOperationsInput | string
    ServicePost?: ServicePostUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutPetPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumuserRoleEnumFieldUpdateOperationsInput | $Enums.userRoleEnum
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: StringFieldUpdateOperationsInput | string
    ServicePost?: ServicePostUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutServicePostInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.userRoleEnum
    location?: string | null
    profileImage?: string | null
    backgroundImage?: string
    PetPost?: PetPostCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutServicePostInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.userRoleEnum
    location?: string | null
    profileImage?: string | null
    backgroundImage?: string
    PetPost?: PetPostUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutServicePostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServicePostInput, UserUncheckedCreateWithoutServicePostInput>
  }

  export type PetCategoryCreateWithoutServicePostInput = {
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PetPost?: PetPostCreateNestedManyWithoutCategoryInput
  }

  export type PetCategoryUncheckedCreateWithoutServicePostInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PetPost?: PetPostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PetCategoryCreateOrConnectWithoutServicePostInput = {
    where: PetCategoryWhereUniqueInput
    create: XOR<PetCategoryCreateWithoutServicePostInput, PetCategoryUncheckedCreateWithoutServicePostInput>
  }

  export type ServiceCategoryCreateWithoutServicePostInput = {
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCategoryUncheckedCreateWithoutServicePostInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCategoryCreateOrConnectWithoutServicePostInput = {
    where: ServiceCategoryWhereUniqueInput
    create: XOR<ServiceCategoryCreateWithoutServicePostInput, ServiceCategoryUncheckedCreateWithoutServicePostInput>
  }

  export type UserUpsertWithoutServicePostInput = {
    update: XOR<UserUpdateWithoutServicePostInput, UserUncheckedUpdateWithoutServicePostInput>
    create: XOR<UserCreateWithoutServicePostInput, UserUncheckedCreateWithoutServicePostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServicePostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServicePostInput, UserUncheckedUpdateWithoutServicePostInput>
  }

  export type UserUpdateWithoutServicePostInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumuserRoleEnumFieldUpdateOperationsInput | $Enums.userRoleEnum
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: StringFieldUpdateOperationsInput | string
    PetPost?: PetPostUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutServicePostInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumuserRoleEnumFieldUpdateOperationsInput | $Enums.userRoleEnum
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: StringFieldUpdateOperationsInput | string
    PetPost?: PetPostUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type PetCategoryUpsertWithoutServicePostInput = {
    update: XOR<PetCategoryUpdateWithoutServicePostInput, PetCategoryUncheckedUpdateWithoutServicePostInput>
    create: XOR<PetCategoryCreateWithoutServicePostInput, PetCategoryUncheckedCreateWithoutServicePostInput>
    where?: PetCategoryWhereInput
  }

  export type PetCategoryUpdateToOneWithWhereWithoutServicePostInput = {
    where?: PetCategoryWhereInput
    data: XOR<PetCategoryUpdateWithoutServicePostInput, PetCategoryUncheckedUpdateWithoutServicePostInput>
  }

  export type PetCategoryUpdateWithoutServicePostInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PetPost?: PetPostUpdateManyWithoutCategoryNestedInput
  }

  export type PetCategoryUncheckedUpdateWithoutServicePostInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PetPost?: PetPostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ServiceCategoryUpsertWithoutServicePostInput = {
    update: XOR<ServiceCategoryUpdateWithoutServicePostInput, ServiceCategoryUncheckedUpdateWithoutServicePostInput>
    create: XOR<ServiceCategoryCreateWithoutServicePostInput, ServiceCategoryUncheckedCreateWithoutServicePostInput>
    where?: ServiceCategoryWhereInput
  }

  export type ServiceCategoryUpdateToOneWithWhereWithoutServicePostInput = {
    where?: ServiceCategoryWhereInput
    data: XOR<ServiceCategoryUpdateWithoutServicePostInput, ServiceCategoryUncheckedUpdateWithoutServicePostInput>
  }

  export type ServiceCategoryUpdateWithoutServicePostInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCategoryUncheckedUpdateWithoutServicePostInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetPostCreateWithoutCategoryInput = {
    petName: string
    address: string
    about?: PetPostCreateaboutInput | string[]
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    age: number
    breed: string
    size: $Enums.PetSizeEnum
    gender: $Enums.PetGenderEnum
    price: number
    purpose: $Enums.PetPostEnum
    video: string
    User: UserCreateNestedOneWithoutPetPostInput
  }

  export type PetPostUncheckedCreateWithoutCategoryInput = {
    id?: number
    petName: string
    address: string
    about?: PetPostCreateaboutInput | string[]
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    age: number
    breed: string
    size: $Enums.PetSizeEnum
    gender: $Enums.PetGenderEnum
    price: number
    purpose: $Enums.PetPostEnum
    video: string
  }

  export type PetPostCreateOrConnectWithoutCategoryInput = {
    where: PetPostWhereUniqueInput
    create: XOR<PetPostCreateWithoutCategoryInput, PetPostUncheckedCreateWithoutCategoryInput>
  }

  export type PetPostCreateManyCategoryInputEnvelope = {
    data: PetPostCreateManyCategoryInput | PetPostCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ServicePostCreateWithoutCategoryInput = {
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    age: number
    purpose: $Enums.PetPostEnum
    cost: number
    skill?: ServicePostCreateskillInput | string[]
    user: UserCreateNestedOneWithoutServicePostInput
    serviceCategory: ServiceCategoryCreateNestedOneWithoutServicePostInput
  }

  export type ServicePostUncheckedCreateWithoutCategoryInput = {
    id?: number
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    age: number
    purpose: $Enums.PetPostEnum
    serviceId: number
    cost: number
    skill?: ServicePostCreateskillInput | string[]
  }

  export type ServicePostCreateOrConnectWithoutCategoryInput = {
    where: ServicePostWhereUniqueInput
    create: XOR<ServicePostCreateWithoutCategoryInput, ServicePostUncheckedCreateWithoutCategoryInput>
  }

  export type ServicePostCreateManyCategoryInputEnvelope = {
    data: ServicePostCreateManyCategoryInput | ServicePostCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PetPostUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PetPostWhereUniqueInput
    update: XOR<PetPostUpdateWithoutCategoryInput, PetPostUncheckedUpdateWithoutCategoryInput>
    create: XOR<PetPostCreateWithoutCategoryInput, PetPostUncheckedCreateWithoutCategoryInput>
  }

  export type PetPostUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PetPostWhereUniqueInput
    data: XOR<PetPostUpdateWithoutCategoryInput, PetPostUncheckedUpdateWithoutCategoryInput>
  }

  export type PetPostUpdateManyWithWhereWithoutCategoryInput = {
    where: PetPostScalarWhereInput
    data: XOR<PetPostUpdateManyMutationInput, PetPostUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ServicePostUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ServicePostWhereUniqueInput
    update: XOR<ServicePostUpdateWithoutCategoryInput, ServicePostUncheckedUpdateWithoutCategoryInput>
    create: XOR<ServicePostCreateWithoutCategoryInput, ServicePostUncheckedCreateWithoutCategoryInput>
  }

  export type ServicePostUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ServicePostWhereUniqueInput
    data: XOR<ServicePostUpdateWithoutCategoryInput, ServicePostUncheckedUpdateWithoutCategoryInput>
  }

  export type ServicePostUpdateManyWithWhereWithoutCategoryInput = {
    where: ServicePostScalarWhereInput
    data: XOR<ServicePostUpdateManyMutationInput, ServicePostUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ServicePostCreateWithoutServiceCategoryInput = {
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    age: number
    purpose: $Enums.PetPostEnum
    cost: number
    skill?: ServicePostCreateskillInput | string[]
    user: UserCreateNestedOneWithoutServicePostInput
    category: PetCategoryCreateNestedOneWithoutServicePostInput
  }

  export type ServicePostUncheckedCreateWithoutServiceCategoryInput = {
    id?: number
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    age: number
    purpose: $Enums.PetPostEnum
    petCategoryId: number
    cost: number
    skill?: ServicePostCreateskillInput | string[]
  }

  export type ServicePostCreateOrConnectWithoutServiceCategoryInput = {
    where: ServicePostWhereUniqueInput
    create: XOR<ServicePostCreateWithoutServiceCategoryInput, ServicePostUncheckedCreateWithoutServiceCategoryInput>
  }

  export type ServicePostCreateManyServiceCategoryInputEnvelope = {
    data: ServicePostCreateManyServiceCategoryInput | ServicePostCreateManyServiceCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ServicePostUpsertWithWhereUniqueWithoutServiceCategoryInput = {
    where: ServicePostWhereUniqueInput
    update: XOR<ServicePostUpdateWithoutServiceCategoryInput, ServicePostUncheckedUpdateWithoutServiceCategoryInput>
    create: XOR<ServicePostCreateWithoutServiceCategoryInput, ServicePostUncheckedCreateWithoutServiceCategoryInput>
  }

  export type ServicePostUpdateWithWhereUniqueWithoutServiceCategoryInput = {
    where: ServicePostWhereUniqueInput
    data: XOR<ServicePostUpdateWithoutServiceCategoryInput, ServicePostUncheckedUpdateWithoutServiceCategoryInput>
  }

  export type ServicePostUpdateManyWithWhereWithoutServiceCategoryInput = {
    where: ServicePostScalarWhereInput
    data: XOR<ServicePostUpdateManyMutationInput, ServicePostUncheckedUpdateManyWithoutServiceCategoryInput>
  }

  export type PetPostCreateManyUserInput = {
    id?: number
    petName: string
    address: string
    about?: PetPostCreateaboutInput | string[]
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    age: number
    breed: string
    size: $Enums.PetSizeEnum
    gender: $Enums.PetGenderEnum
    price: number
    purpose: $Enums.PetPostEnum
    petCategoryId: number
    video: string
  }

  export type ServicePostCreateManyUserInput = {
    id?: number
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    age: number
    purpose: $Enums.PetPostEnum
    petCategoryId: number
    serviceId: number
    cost: number
    skill?: ServicePostCreateskillInput | string[]
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    timestamp?: Date | string
  }

  export type PetPostUpdateWithoutUserInput = {
    petName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: PetPostUpdateaboutInput | string[]
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    size?: EnumPetSizeEnumFieldUpdateOperationsInput | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFieldUpdateOperationsInput | $Enums.PetGenderEnum
    price?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    video?: StringFieldUpdateOperationsInput | string
    category?: PetCategoryUpdateOneRequiredWithoutPetPostNestedInput
  }

  export type PetPostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    petName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: PetPostUpdateaboutInput | string[]
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    size?: EnumPetSizeEnumFieldUpdateOperationsInput | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFieldUpdateOperationsInput | $Enums.PetGenderEnum
    price?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    petCategoryId?: IntFieldUpdateOperationsInput | number
    video?: StringFieldUpdateOperationsInput | string
  }

  export type PetPostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    petName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: PetPostUpdateaboutInput | string[]
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    size?: EnumPetSizeEnumFieldUpdateOperationsInput | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFieldUpdateOperationsInput | $Enums.PetGenderEnum
    price?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    petCategoryId?: IntFieldUpdateOperationsInput | number
    video?: StringFieldUpdateOperationsInput | string
  }

  export type ServicePostUpdateWithoutUserInput = {
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
    category?: PetCategoryUpdateOneRequiredWithoutServicePostNestedInput
    serviceCategory?: ServiceCategoryUpdateOneRequiredWithoutServicePostNestedInput
  }

  export type ServicePostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    petCategoryId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
  }

  export type ServicePostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    petCategoryId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetPostCreateManyCategoryInput = {
    id?: number
    petName: string
    address: string
    about?: PetPostCreateaboutInput | string[]
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    age: number
    breed: string
    size: $Enums.PetSizeEnum
    gender: $Enums.PetGenderEnum
    price: number
    purpose: $Enums.PetPostEnum
    video: string
  }

  export type ServicePostCreateManyCategoryInput = {
    id?: number
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    age: number
    purpose: $Enums.PetPostEnum
    serviceId: number
    cost: number
    skill?: ServicePostCreateskillInput | string[]
  }

  export type PetPostUpdateWithoutCategoryInput = {
    petName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: PetPostUpdateaboutInput | string[]
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    size?: EnumPetSizeEnumFieldUpdateOperationsInput | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFieldUpdateOperationsInput | $Enums.PetGenderEnum
    price?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    video?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutPetPostNestedInput
  }

  export type PetPostUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    petName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: PetPostUpdateaboutInput | string[]
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    size?: EnumPetSizeEnumFieldUpdateOperationsInput | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFieldUpdateOperationsInput | $Enums.PetGenderEnum
    price?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    video?: StringFieldUpdateOperationsInput | string
  }

  export type PetPostUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    petName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    about?: PetPostUpdateaboutInput | string[]
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    size?: EnumPetSizeEnumFieldUpdateOperationsInput | $Enums.PetSizeEnum
    gender?: EnumPetGenderEnumFieldUpdateOperationsInput | $Enums.PetGenderEnum
    price?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    video?: StringFieldUpdateOperationsInput | string
  }

  export type ServicePostUpdateWithoutCategoryInput = {
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
    user?: UserUpdateOneRequiredWithoutServicePostNestedInput
    serviceCategory?: ServiceCategoryUpdateOneRequiredWithoutServicePostNestedInput
  }

  export type ServicePostUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    serviceId?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
  }

  export type ServicePostUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    serviceId?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
  }

  export type ServicePostCreateManyServiceCategoryInput = {
    id?: number
    address: string
    about: string
    image: string
    phoneNumber: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    age: number
    purpose: $Enums.PetPostEnum
    petCategoryId: number
    cost: number
    skill?: ServicePostCreateskillInput | string[]
  }

  export type ServicePostUpdateWithoutServiceCategoryInput = {
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
    user?: UserUpdateOneRequiredWithoutServicePostNestedInput
    category?: PetCategoryUpdateOneRequiredWithoutServicePostNestedInput
  }

  export type ServicePostUncheckedUpdateWithoutServiceCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    petCategoryId?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
  }

  export type ServicePostUncheckedUpdateManyWithoutServiceCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    phoneNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    purpose?: EnumPetPostEnumFieldUpdateOperationsInput | $Enums.PetPostEnum
    petCategoryId?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    skill?: ServicePostUpdateskillInput | string[]
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