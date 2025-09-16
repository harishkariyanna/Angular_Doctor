import { Component, OnInit } from '@angular/core';
import { DoctorserService } from '../doctorser';
import { Doctor } from '../models/doctor.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctorcom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctorcom.html',
  styleUrl: './doctorcom.css'
})
export class DoctorcomComponent implements OnInit {
  doctors: Doctor[] = [];
  loading = false;
  error = '';

  constructor(private service: DoctorserService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (d) => ((this.doctors = d), (this.loading = false)),
      error: () => ((this.error = 'Could not load doctors'), (this.loading = false))
    });
  }
}
