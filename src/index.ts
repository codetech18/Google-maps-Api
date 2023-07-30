import { User } from "./user";
import { Company } from "./company";
import { CustomMAp } from "./CustomMAp";


const user = new User();
const company = new Company();
const customMAp = new CustomMAp('map');


customMAp.addMarker(user);
customMAp.addMarker(company);