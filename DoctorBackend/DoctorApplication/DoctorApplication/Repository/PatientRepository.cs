using DoctorApplication.Interface;
using DoctorApplication.Models;
using DoctorApplication.Data;
using Microsoft.EntityFrameworkCore;

namespace DoctorApplication.Repository
{
    public class PatientRepository :IHospitalAPI<Patient>
    {
        private readonly HospitalContext _context;

        public PatientRepository(HospitalContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Patient>> GetAllAsync()
        {
            return await _context.Patients.ToListAsync();
        }

        public async Task<Patient?> GetByIdAsync(string id)
        {
            return await _context.Patients.FindAsync(id);
        }

        public async Task<Patient> AddAsync(Patient entity)
        {
            _context.Patients.Add(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<Patient> UpdateAsync(Patient entity)
        {
            _context.Patients.Update(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<bool> DeleteAsync(string id)
        {
            var patient = await _context.Patients.FindAsync(id);
            if (patient == null) return false;
            _context.Patients.Remove(patient);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
