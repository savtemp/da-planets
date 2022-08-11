import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

import { GalaxySchema } from '../models/Galaxy.js';
import { StarSchema } from '../models/Star.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxies = mongoose.model('Galaxy', GalaxySchema)
  Stars = mongoose.model('Star', StarSchema)
}

export const dbContext = new DbContext()
