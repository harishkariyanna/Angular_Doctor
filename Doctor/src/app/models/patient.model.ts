import { Doctor } from "./doctor.model";
import { Hospital } from "./hospital.model";

export interface Patient {
  patientId: string;
  name?: string | null;
  hospitalId: string;
  hospital?: Hospital | null;
  doctors?: Doctor[] | null;
}