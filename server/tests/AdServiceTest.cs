using buki_api.entities;
using buki_api.modules.ad;
using buki_api.modules.categories;
using buki_api.modules.exception;
using buki_api.tests;

namespace tests
{
    public class AdServiceTest
    {

        private TestBase testBase = null!;
        private UserContext studentCtx = new UserContext { Email = TestBase.student.Email, Token = "123", Role = UserRole.Student };

        private UserContext teacherCtx = new UserContext { Email = TestBase.teacher.Email, Token = "123", Role = UserRole.Teacher };

        private UserContext invalidStudentCtx = new UserContext { Email = "1", Role = UserRole.Student, Token = "1" };


        private UserContext invalidTeacherCtx = new UserContext { Email = "1", Role = UserRole.Teacher, Token = "1" };

        private AdService adService = null!;
        [SetUp]
        public void Setup()
        {
            testBase = new TestBase();
            adService = new AdService(testBase.Context);
        }

        [Test]
        public void TestGetAllAdsStudent()
        {
            Assert.IsNotNull(adService.GetAll(studentCtx, null));
        }


        [Test]
        public void TestGetAllAdsTeacher()
        {
            Assert.IsNotNull(adService.GetAll(teacherCtx, null));
        }

        [Test]
        public void TestGetAllAdsStudentWithCategory()
        {
            Assert.IsNotNull(adService.GetAll(studentCtx, Subject.Chemistry));
        }

        [Test]
        public void TestGetAllAdsTeacherWithCategory()
        {
            Assert.IsNotNull(adService.GetAll(studentCtx, Subject.Chemistry));
        }

        [Test]
        public void TestGetTopAdsStudent()
        {
            Assert.IsNotNull(adService.GetTop(studentCtx));
        }

        [Test]
        public void TestGetTopAdsTeacher()
        {
            Assert.IsNotNull(adService.GetTop(teacherCtx));
        }

        [Test]
        public void AddAdInvalidTeacher()
        {
            Assert.Throws<ValidationException>(() => adService.Add(invalidTeacherCtx, new AddAdDTO { Description = "", Subject = Subject.IT }));
        }

        [Test]
        public void AddAdInvalidStudent()
        {
            Assert.Throws<ValidationException>(() => adService.Add(invalidStudentCtx, new AddAdDTO { Description = "", Subject = Subject.IT }));
        }

        [Test]
        public void AddSecondAdStudent()
        {
            var addDto = new AddAdDTO { Description = "1", Subject = Subject.IT };
            adService.Add(studentCtx, addDto);
            Assert.Throws<ValidationException>(() => adService.Add(studentCtx, addDto));
        }

        [Test]
        public void AddSecondAdTeacher()
        {
            var addDto = new AddAdDTO { Description = "1", Subject = Subject.Math };
            adService.Add(teacherCtx, addDto);
            Assert.Throws<ValidationException>(() => adService.Add(teacherCtx, addDto));
        }

        [Test]
        public void AddValidAdStudent()
        {
            var addDto = new AddAdDTO { Description = "1", Subject = Subject.IT };
            Assert.Throws<ValidationException>(() => adService.Add(studentCtx, addDto));
        }

        [Test]
        public void AddValidAdTeacher()
        {
            var addDto = new AddAdDTO { Description = "1", Subject = Subject.IT };
            Assert.Throws<ValidationException>(() => adService.Add(teacherCtx, addDto));
        }

        [Test]
        public void GetByValidId()
        {
            var res = adService.GetById(1);
            Assert.IsTrue(res is not null);
        }

        [Test]
        public void GetByInvalidId()
        {
            Assert.Throws<NotFoundException>(() => adService.GetById(1222));
        }

        [Test]
        public void LikeAdInvalidStudent()
        {
            Assert.Throws<ValidationException>(() => adService.Like(invalidStudentCtx, 1));
        }

        [Test]
        public void LikeAdInvalidTeacher()
        {
            Assert.Throws<ValidationException>(() => adService.Like(invalidTeacherCtx, 1));
        }

        [Test]
        public void LikeInvalidAdTeacher()
        {
            Assert.Throws<ValidationException>(() => adService.Like(teacherCtx, 999));
        }

        [Test]
        public void LikeInvalidAdStudent()
        {
            Assert.Throws<ValidationException>(() => adService.Like(studentCtx, 999));
        }

        [Test]
        public void LikeAdTeacher()
        {
            Assert.IsNotNull(adService.Like(teacherCtx, TestBase.studentAd.Id));
        }

        [Test]
        public void LikeAdStudent()
        {
            Assert.IsNotNull(adService.Like(studentCtx, TestBase.teacherAd.Id));
        }

        [Test]
        public void UnikeAdInvalidStudent()
        {
            Assert.Throws<ValidationException>(() => adService.Unlike(invalidStudentCtx, 1));
        }

        [Test]
        public void UnikeAdInvalidTeacher()
        {
            Assert.Throws<ValidationException>(() => adService.Unlike(invalidTeacherCtx, 1));
        }

        [Test]
        public void UnikeInvalidAdTeacher()
        {
            Assert.Throws<ValidationException>(() => adService.Unlike(teacherCtx, 999));
        }

        [Test]
        public void UnikeInvalidAdStudent()
        {
            Assert.Throws<ValidationException>(() => adService.Unlike(studentCtx, 999));
        }

        [Test]
        public void UnikeAdTeacher()
        {
            Assert.IsNotNull(adService.Unlike(teacherCtx, TestBase.studentAd.Id));
        }

        [Test]
        public void UnikeAdStudent()
        {
            Assert.IsNotNull(adService.Unlike(studentCtx, TestBase.teacherAd.Id));
        }

        [Test]
        public void DeleteInvalidAdStudent()
        {
            Assert.Throws<ValidationException>(() => adService.Delete(studentCtx, 999));
        }

        [Test]
        public void DeleteInvalidAdTeacher()
        {
            Assert.Throws<ValidationException>(() => adService.Delete(teacherCtx, 999));
        }

        [Test]
        public void DeleteValidAdTeacher()
        {
            Assert.Throws<ValidationException>(() => adService.Delete(teacherCtx, 9999));
        }

        [Test]
        public void DeleteValidAdStudent()
        {
            var addDto = new AddAdDTO { Description = "1", Subject = Subject.Physics };
            var ad = adService.Add(studentCtx, addDto);
            Assert.IsNotNull(adService.Delete(studentCtx, ad.Id));
        }
    }
}