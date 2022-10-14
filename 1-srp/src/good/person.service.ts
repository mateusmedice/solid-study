import { Person } from './person';
import { PersonRepository } from './person.repository';
import { PersonValidator } from './person.validator';

export class PersonService {

    constructor(private personRepository: PersonRepository) {}

    public async save(person: Person): Promise<any> {

        if (!PersonValidator.valid(person)) {
            throw 'Person not valid';
        }

        return this.personRepository.save(person);
    }

}