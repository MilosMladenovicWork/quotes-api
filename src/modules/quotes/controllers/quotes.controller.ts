import { Controller, Get } from '@nestjs/common';
import { Quote } from 'src/schemas/quote.schema';
import { QuotesGettingService } from '../services/quotes-getting.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesGettingService: QuotesGettingService) {}

  @Get()
  getAll(): Promise<Quote[]> {
    return this.quotesGettingService.getAll();
  }
}
