import { Person } from "./person";

export class PersonRepository {

    public async save(person: Person): Promise<any> {

        return person;
    }

}