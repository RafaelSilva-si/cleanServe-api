import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ClientsModule } from './clients/clients.module';
import { Client } from './clients/entities/client.entity';
import { ServicesModule } from './services/services.module';
import { Service } from './services/entities/service.entity';
import { BudgetModule } from './budget/budget.module';
import { Budget } from './budget/entities/budget.entity';
import { BudgetServiceEntity } from './budget/entities/budget-service.entity';
import { ServiceOrderModule } from './service-order/serviceOrder.module';
import { ServiceOrder } from './service-order/entities/service-order.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        User,
        Client,
        Service,
        Budget,
        BudgetServiceEntity,
        ServiceOrder,
      ],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ClientsModule,
    ServicesModule,
    BudgetModule,
    ServiceOrderModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
