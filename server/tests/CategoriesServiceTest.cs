using buki_api.entities;
using buki_api.modules.categories;
using buki_api.tests;

namespace tests
{
    public class CategoriesServiceTest
    {

        private UserContext studentCtx = new UserContext { Email = "test@test.com", Token = "123", Role = UserRole.Student };

        private UserContext teacherCtx = new UserContext { Email = "test@test.com", Token = "123", Role = UserRole.Teacher };

        private CategoriesService categoriesService = null!;
        [SetUp]
        public void Setup()
        {
            var testBase = new TestBase();
            categoriesService = new CategoriesService(testBase.Context);
        }

        [Test]
        public void TestGetAllCategoriesForTeacher()
        {
            Assert.NotNull(categoriesService.GetAll(teacherCtx));
        }


        [Test]
        public void TestGetAllCategoriesForStudent()
        {
            Assert.NotNull(categoriesService.GetAll(studentCtx));
        }
    }
}