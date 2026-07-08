import { DataSource } from 'typeorm';
import { InstrumentoEntity } from './instrumento.entity';

export const instrumentoProviders = [
  {
    provide: 'INSTRUMENTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(InstrumentoEntity),
    inject: ['DATA_SOURCE'],
  },
];
