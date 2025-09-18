using DoctorApplication.Models;
using DoctorApplication.Service;
using DoctorApplication.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace DoctorApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        private readonly DoctorService _doctorService;

        public DoctorsController(DoctorService doctorService)
        {
            _doctorService = doctorService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DoctorDto>>> GetDoctors()
        {
            var doctors = await _doctorService.GetAllAsync();

            var result = doctors.Select(d => new DoctorDto
            {
                DoctorId = d.DoctorId,
                Name = d.Name,
                Specialization = d.Specialization,
                HospitalId = d.HospitalId,
                HospitalName = d.Hospital?.Name ?? string.Empty
            });

            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DoctorDto>> GetDoctor(string id)
        {
            var doctor = await _doctorService.GetByIdAsync(id);
            if (doctor == null) return NotFound();

            var dto = new DoctorDto
            {
                DoctorId = doctor.DoctorId,
                Name = doctor.Name,
                Specialization = doctor.Specialization,
                HospitalId = doctor.HospitalId,
                HospitalName = doctor.Hospital?.Name ?? string.Empty
            };

            return Ok(dto);
        }

        [HttpPost]
        public async Task<ActionResult> CreateDoctor([FromBody] DoctorDto dto)
        {
            var doctor = new Doctor
            {
                Name = dto.Name,
                Specialization = dto.Specialization,
                HospitalId = dto.HospitalId
            };
            var created = await _doctorService.AddAsync(doctor);

            return CreatedAtAction(nameof(GetDoctor), new { id = created.DoctorId }, created);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateDoctor(string id, [FromBody] DoctorDto dto)
        {
            var doctor = await _doctorService.GetByIdAsync(id);
            if (doctor == null) return NotFound();

            doctor.Name = dto.Name;
            doctor.Specialization = dto.Specialization;
            doctor.HospitalId = dto.HospitalId;

            await _doctorService.UpdateAsync(doctor);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteDoctor(string id)
        {
            var doctor = await _doctorService.GetByIdAsync(id);
            if (doctor == null) return NotFound();

            await _doctorService.DeleteAsync(id);
            return NoContent();
        }
    }
}
