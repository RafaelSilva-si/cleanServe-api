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

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'rafa1234',
    database: 'postgres',
    entities: [User, Client, Service, Budget, BudgetServiceEntity, ServiceOrder],
    synchronize: true
  }), UserModule, AuthModule, ClientsModule, ServicesModule, BudgetModule, ServiceOrderModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule {}
