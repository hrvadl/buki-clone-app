using buki_api.entities;
using buki_api.modules.categories;
using buki_api.modules.exception;
using buki_api.modules.review;
using buki_api.tests;

namespace tests
{
    public class ReviewServiceTest
    {

        private UserContext studentCtx = new UserContext { Email = TestBase.student.Email, Token = "123", Role = UserRole.Student };

        private UserContext teacherCtx = new UserContext { Email = TestBase.teacher.Email, Token = "123", Role = UserRole.Teacher };

        private UserContext invalidStudentCtx = new UserContext { Email = "1", Role = UserRole.Student, Token = "1" };


        private UserContext invalidTeacherCtx = new UserContext { Email = "1", Role = UserRole.Teacher, Token = "1" };


        private ReviewService reviewService = null!;
        [SetUp]
        public void Setup()
        {
            var testBase = new TestBase();
            reviewService = new ReviewService(testBase.Context);
        }

        [Test]
        public void GetAllReviewsStudent()
        {
            Assert.IsNotNull(reviewService.GetAll(TestBase.teacher.Id));
        }


        [Test]
        public void GetAllReviewsTeacher()
        {
            Assert.IsNotNull(reviewService.GetAll(TestBase.student.Id));
        }

        [Test]
        public void AddReviewStudentInvalidReviewee()
        {
            Assert.Throws<ValidationException>(() => reviewService.Add(new ReviewDTO { Rate = 1, RevieweeId = 999, Text = "" }, studentCtx));
        }


        [Test]
        public void AddReviewStudentInvalidReviewer()
        {
            Assert.Throws<ValidationException>(() => reviewService.Add(new ReviewDTO { Rate = 1, RevieweeId = 999, Text = "" }, invalidStudentCtx));
        }


        [Test]
        public void AddReviewTeacherInvalidReviewee()
        {
            Assert.Throws<ValidationException>(() => reviewService.Add(new ReviewDTO { Rate = 1, RevieweeId = 999, Text = "" }, teacherCtx));
        }


        [Test]
        public void AddReviewTeacherInvalidReviewer()
        {
            Assert.Throws<ValidationException>(() => reviewService.Add(new ReviewDTO { Rate = 1, RevieweeId = 999, Text = "" }, invalidTeacherCtx));
        }

        [Test]
        public void AddReviewTeacher()
        {
            Assert.IsNotNull(reviewService.Add(new ReviewDTO { Rate = 1, RevieweeId = TestBase.student.Id, Text = "" }, teacherCtx));
        }


        [Test]
        public void AddReviewStudent()
        {
            Assert.IsNotNull(reviewService.Add(new ReviewDTO { Rate = 1, RevieweeId = TestBase.teacher.Id, Text = "" }, studentCtx));
        }

        [Test]
        public void DeleteReviewStudentInvalidReviewee()
        {
            Assert.Throws<ValidationException>(() => reviewService.Delete(invalidStudentCtx, 1));
        }


        [Test]
        public void DeleteReviewStudentInvalidReview()
        {
            Assert.Throws<ValidationException>(() => reviewService.Delete(studentCtx, 999));
        }


        [Test]
        public void DeleteReviewTeacherInvalidReviewee()
        {
            Assert.Throws<ValidationException>(() => reviewService.Delete(invalidTeacherCtx, 1));
        }


        [Test]
        public void DeleteReviewTeacherInvalidReviewer()
        {
            Assert.Throws<ValidationException>(() => reviewService.Delete(teacherCtx, 999));

        }

        [Test]
        public void DeleteReviewTeacher()
        {
            Assert.IsNotNull(reviewService.Delete(teacherCtx, TestBase.teacher.RecievedReviews[0].Id));
        }


        [Test]
        public void DeleteReviewStudent()
        {
            Assert.IsNotNull(reviewService.Delete(studentCtx, TestBase.student.RecievedReviews[0].Id));
        }
    }
}