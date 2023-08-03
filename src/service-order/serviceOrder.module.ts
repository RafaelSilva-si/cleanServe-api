import { Module } from '@nestjs/common';
import { ServiceOrderService } from './serviceOrder.service';
import { ServiceOrderController } from './serviceOrder.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from 'src/budget/entities/budget.entity';
import { ServiceOrder } from './entities/service-order.entity';

@Module({
  controllers: [ServiceOrderController],
  providers: [ServiceOrderService],
  imports: [TypeOrmModule.forFeature([Budget, ServiceOrder])],
})
export class ServiceOrderModule {}
