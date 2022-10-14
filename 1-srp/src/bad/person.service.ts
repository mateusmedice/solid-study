import { Person } from './person';

export class PersonService {

    public async save(person: Person): Promise<any> {

        if (person.name == null) {
            throw 'Person name required';
        }

        if (person.document == null) {
            throw 'Person document required';
        }

        const sql = 'insert into person (name, document) values (?1, ?2)';

        return 'Person saved';
    }

}