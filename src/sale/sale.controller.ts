import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @UseGuards(JwtAuthGuard)
  @Post('add')
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.createSale(createSaleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  findAll() {
    return this.saleService.getAllSales();
  }
}
