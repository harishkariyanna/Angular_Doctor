import { Component, OnInit } from '@angular/core';
import { DoctorserService } from '../doctorser';
import { Doctor } from '../models/doctor.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth';

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

  constructor(private service: DoctorserService, public auth: AuthService, private router: Router) { }

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

  add() {
    this.router.navigate(['/doctors/new']);
  }

  edit(id: string) {
    this.router.navigate(['/doctors/edit', id]);
  }

  delete(id: string) {
    if (!confirm('Delete doctor?')) return;
    this.service.delete(id).subscribe({
      next: () => this.load(),
      error: () => alert('Delete failed')
    });
  }
}
