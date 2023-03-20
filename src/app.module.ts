import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { StatusModule } from './status/status.module';

@Module({
  imports: [
    // Read environment variables
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),

    // Connect to PostgreSQL database
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      // models: [User, UserAddress, Region, District, CreditCard],
      models: [__dirname + 'dist/**/*.entity{.ts,.js}'],
      autoLoadModels: true,
      logging: false,
    }),

    // Custom modules
    StatusModule,
  ],
})
export class AppModule {}
