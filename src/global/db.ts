import { Knex } from 'knex';

export default class DBService {
  static interface: Map<string, Knex>;
}
