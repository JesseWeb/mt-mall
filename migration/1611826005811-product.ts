import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class product1611826005811 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'product',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'status',
                    type: 'int',
                    default: 0
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }), true)
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: 'id',
                    isPrimary: true,
                    type: 'int',
                    generationStrategy: "increment",
                    isGenerated: true,
                    isUnique: true,
                },
                {
                    name: 'uuid',
                    type: 'varchar',
                    isUnique: true,
                    generationStrategy: "uuid",
                    isGenerated: true
                },
                {
                    name: 'nick_name',
                    type: 'varchar'
                },
                {
                    name: 'openid',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'unionid',
                    type: 'varchar'
                },
                {
                    name: 'username',
                    type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'status',
                    type: 'int',
                    default: 0
                }
            ]
        }))
        await queryRunner.createTable(new Table({
            name: 'store',
            columns: [
                {
                    name: 'id',
                    isPrimary: true,
                    type: 'int',
                    generationStrategy: "rowid",
                    isGenerated: true,
                    isUnique: true,
                },
                {
                    name: 'name',
                    type:'varchar'
                },
                {
                    name: 'status',
                    type:'int'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product')
        await queryRunner.dropTable('user')
    }


}
