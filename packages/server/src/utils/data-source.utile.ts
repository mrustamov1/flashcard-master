import {
  DeepPartial,
  EntityTarget,
  FindManyOptions,
  FindOptionsWhere,
} from "typeorm"
import { AppDataSource } from "../setup.js"
export const DataSourceUtils = {
  async create<T>(model: EntityTarget<T>, value: DeepPartial<T>): Promise<T> {
    return AppDataSource.getRepository<any>(model).create(value)
  },

  async insert<T>(
    model: EntityTarget<T>,
    value: DeepPartial<T> | DeepPartial<T>[],
  ): Promise<T> {
    return AppDataSource.getRepository<any>(model).save(
      AppDataSource.getRepository<any>(model).create(value),
    )
  },

  async update<T extends { id: string }>(
    model: EntityTarget<T>,
    value: DeepPartial<T>,
  ): Promise<T> {
    return AppDataSource.getRepository<T>(model).save(
      AppDataSource.getRepository<T>(model).create(value),
    )
  },

  async delete<T extends { id: string }>(model: EntityTarget<T>, id: string) {
    const remove: T = await AppDataSource.getRepository<T>(
      model,
    ).findOneByOrFail({
      id: id,
    } as any)

    await AppDataSource.getRepository<T>(model).remove(remove)
  },

  async findOneBy<T>(
    model: EntityTarget<T>,
    options: FindOptionsWhere<T>,
  ): Promise<T | null> {
    return await AppDataSource.getRepository<any>(model).findOneBy(options)
  },

  async findOneByOrFail<T>(
    model: EntityTarget<T>,
    options: FindOptionsWhere<T>,
  ): Promise<T> {
    return await AppDataSource.getRepository<any>(model).findOneByOrFail(
      options,
    )
  },

  async find<T>(
    model: EntityTarget<T>,
    options?: FindManyOptions<T>,
  ): Promise<T[]> {
    return await AppDataSource.getRepository<any>(model).find(options)
  },

  async findOne<T>(
    model: EntityTarget<T>,
    options: FindManyOptions<T>,
  ): Promise<T | null> {
    return await AppDataSource.getRepository<any>(model).findOne(options)
  },

  async findOneOrFail<T>(
    model: EntityTarget<T>,
    options: FindManyOptions<T>,
  ): Promise<T> {
    return await AppDataSource.getRepository<any>(model).findOneOrFail(options)
  },

  async findBy<T>(
    model: EntityTarget<T>,
    options: FindOptionsWhere<T> | FindOptionsWhere<T>[],
  ): Promise<T[]> {
    return await AppDataSource.getRepository<any>(model).findBy(options)
  },
}
