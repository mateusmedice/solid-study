import { Person } from "./person";

export class PersonValidator {

    public static valid(person: Person): boolean {
    
        return (person && person.name !== null && person.document !== null);
    }
}