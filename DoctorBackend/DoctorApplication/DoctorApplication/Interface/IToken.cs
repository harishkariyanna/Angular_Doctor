using DoctorApplication.Models;

namespace DoctorApplication.Interface
{
    public interface IToken
    {
        string GenerateToken(User user);
    }
}
