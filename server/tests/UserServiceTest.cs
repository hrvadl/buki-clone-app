using buki_api.db;
using buki_api.entities;
using buki_api.modules.auth;
using buki_api.modules.exception;
using buki_api.modules.hash;
using buki_api.tests;

namespace tests
{
    public class UserServiceTest
    {
        internal class MockedTokenService : ITokenService
        {
            public string BuildToken(UserDTO user)
            {
                return "abcd";
            }
        }

        private MyDbContext ctx = null!;
        private UserService userService = null!;
        [SetUp]
        public void Setup()
        {
            var testBase = new TestBase();
            ctx = testBase.Context;
            userService = new UserService(ctx, new HashService(), new MockedTokenService());
        }

        [Test]
        public void UsersShouldNotBeNull()
        {
            Assert.NotNull(ctx.Users);
        }

        [Test]
        public void UserShoulNotLoginWithNoPassword()
        {
            var userInvalidDTO = new AuthUserDTO { Email = "test@test.com", Password = null!, Role = UserRole.Student };
            Assert.Throws<ValidationException>(() => userService.LogIn(userInvalidDTO));
        }

        [Test]
        public void UserShoulNotLoginWithNoEmail()
        {
            var userInvalidDTO = new AuthUserDTO { Email = null!, Password = "123", Role = UserRole.Student };
            Assert.Throws<ValidationException>(() => userService.LogIn(userInvalidDTO));
        }

        [Test]
        public void UserShoulSignUpWithData()
        {
            var userValidDTO = new SignUpUserDTO { Email = "test@test.com", Password = "123", Role = UserRole.Student, Number = "242442424", Name = "test" };
            Assert.IsNotNull(userService.SignUp(userValidDTO));
        }

        [Test]
        public void ExistingUserShouldNotSignUp()
        {
            var userValidDTO = new SignUpUserDTO { Email = "test@test.com", Password = "123", Role = UserRole.Student, Number = "242442424", Name = "test" };
            userService.SignUp(userValidDTO);
            Assert.Throws<ValidationException>(() => userService.SignUp(userValidDTO));
        }


        [Test]
        public void ExistingUserShouldLogin()
        {
            var userValidDTO = new SignUpUserDTO { Email = "test@test.com", Password = "123", Role = UserRole.Student, Number = "242442424", Name = "test" };
            userService.SignUp(userValidDTO);
            Assert.IsNotNull(userService.LogIn(userValidDTO));
        }

        [Test]
        public void UserShouldNotSignUpWithNoEmail()
        {
            var userValidDTO = new SignUpUserDTO { Email = null!, Password = "123", Role = UserRole.Student, Number = "242442424", Name = "test" };
            Assert.Throws<ValidationException>(() => userService.SignUp(userValidDTO));
        }

        [Test]
        public void UserShouldNotSignUpWithNoPassword()
        {
            var userValidDTO = new SignUpUserDTO { Email = "test", Password = null!, Role = UserRole.Student, Number = "242442424", Name = "test" };
            Assert.Throws<ValidationException>(() => userService.SignUp(userValidDTO));
        }

        [Test]
        public void UserShouldNotSignUpWithNoNumber()
        {
            var userValidDTO = new SignUpUserDTO { Email = "test", Password = "123", Role = UserRole.Student, Number = null!, Name = "test" };
            Assert.Throws<ValidationException>(() => userService.SignUp(userValidDTO));
        }

        [Test]
        public void UserShouldNotSignUpWithNoName()
        {
            var userValidDTO = new SignUpUserDTO { Email = "test", Password = "123", Role = UserRole.Student, Number = "242442424", Name = null! };
            Assert.Throws<ValidationException>(() => userService.SignUp(userValidDTO));
        }

        [Test]
        public void UserShouldCheckTokenSuccessfully()
        {
            var userValidDTO = new SignUpUserDTO { Email = "test@test.com", Password = "123", Role = UserRole.Student, Number = "242442424", Name = "test" };
            userService.SignUp(userValidDTO);
            Assert.IsNotNull(userService.CheckToken(new UserContext { Email = userValidDTO.Email, Role = userValidDTO.Role, Token = "123" }));
        }

        [Test]
        public void NonExistingUserShouldNotCheckTokenSuccessfully()
        {
            var userValidDTO = new SignUpUserDTO { Email = "test@test.com", Password = "123", Role = UserRole.Student, Number = "242442424", Name = "test" };
            Assert.Throws<System.UnauthorizedAccessException>(() => userService.CheckToken(new UserContext { Email = userValidDTO.Email, Role = userValidDTO.Role, Token = "123" }));
        }
    }
}