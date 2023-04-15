namespace buki_api.modules.hash;

public interface IHashPassword
{
    public string Hash(string password);

    public bool Verify(string password, string hash);
}