using System.Diagnostics;

namespace TheWorld.Services
{
    public class DebugMailService : IMailService
    {
        public bool SendMail(string to, string from, string subject, string message)
        {
            Debug.WriteLine($"Sending mail: To: {to}, Subject: {subject}, Message: {message}");
            return true;
        }
    }
}
