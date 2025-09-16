import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";

export interface Hospital {
  hospitalId: string;
  name?: string | null;
  doctors?: Doctor[] | null;
  patients?: Patient[] | null;
}