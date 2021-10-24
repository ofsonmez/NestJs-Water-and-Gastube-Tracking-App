import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSaleDto {
  @IsNotEmpty()
  @MaxLength(30)
  Product: string;

  @IsNotEmpty()
  @MaxLength(70)
  FullName: string;

  @IsNotEmpty()
  Count: number;
}
