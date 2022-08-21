import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import Products, { Product } from 'src/products';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
interface CartItems extends Product {
  quantity: number;
}
interface Cart {
  cartItems: CartItems[];
}
@Controller('cart')
export class CartController {
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<{ userId: number }> {
    return { userId: req.user.userId };
  }
}
