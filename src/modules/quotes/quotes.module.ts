import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Quote, QuoteSchema } from 'src/schemas/quote.schema';
import { QuotesController } from './controllers/quotes.controller';
import { QuotesGettingService } from './services/quotes-getting.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Quote.name, schema: QuoteSchema }]),
  ],
  controllers: [QuotesController],
  providers: [QuotesGettingService],
})
export class QuotesModule {}
