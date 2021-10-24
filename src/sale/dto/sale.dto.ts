import { IsNotEmpty, IsString } from 'class-validator';

export class SaleDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsString()
  Product: string;

  @IsNotEmpty()
  @IsString()
  FullName: string;

  @IsNotEmpty()
  Count: number;

  @IsNotEmpty()
  Price: number;

  CreatedAt?: Date;
}
