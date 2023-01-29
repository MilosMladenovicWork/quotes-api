import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quote, QuoteDocument } from 'src/schemas/quote.schema';

@Injectable()
export class QuotesGettingService {
  constructor(
    @InjectModel(Quote.name) private quoteModel: Model<QuoteDocument>,
  ) {}
  getAll(): Promise<Quote[]> {
    return this.quoteModel.find().exec();
  }
}
