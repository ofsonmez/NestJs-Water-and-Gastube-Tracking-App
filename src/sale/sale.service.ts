import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SaleDto } from './dto/sale.dto';
import { SaleEntity } from './entities/sale.entity';
import { CreateSaleDto } from './dto/create-sale.dto';

@Injectable()
export class SaleService {
  async getAllSales(): Promise<SaleDto[]> {
    const sales = await SaleEntity.find();

    if (!sales) {
      throw new HttpException(`Sales not exist`, HttpStatus.BAD_REQUEST);
    }

    return sales;
  }

  async createSale(createSaleDto: CreateSaleDto): Promise<CreateSaleDto> {
    const sale = await SaleEntity.create(createSaleDto);

    if (sale.Product == 'Sırma') {
      sale.Price = 12.5;
    } else if (sale.Product == 'Erikli') {
      sale.Price = 18.0;
    } else {
      sale.Price = 98.75;
    }

    await sale.save();
    return sale;
  }
}
