import { Address } from "./address";
import { Bank } from "./bank";
import { Family } from "./family";
import { Medium } from "./medium";
import { Other } from "./other";
import { PastSchool } from "./past-school";
import { Reservation } from "./reservation";
import { School } from "./school";
import { Student } from "./student";

export class MasterData {
    address : Address;
    bank: Bank;
    family : Family;
    medium : Medium;
    other : Other;
    pastSchool : PastSchool;
    reservation : Reservation;
    school : School;
    student : Student;

    constructor(){
        this.address = new Address();
        this.bank = new Bank();
        this.family = new Family();
        this.medium = new Medium();
        this.other = new Other();
        this.pastSchool = new PastSchool();
        this.reservation = new Reservation();
        this.school =   new School();
        this.student = new Student();
    }
}
