import { Hospital } from "./hospital.model";
import { Patient } from "./patient.model";

export interface Doctor {
  doctorId: string;
  name?: string | null;
  specialization?: string | null;
  hospitalId: string;
  hospital?: Hospital | null;
  patients?: Patient[] | null;
}