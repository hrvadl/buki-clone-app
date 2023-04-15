using buki_api.tests;
using buki_api.db;
using buki_api.entities;

namespace tests
{
    public class Tests
    {
        private MyDbContext ctx;
        [SetUp]
        public void Setup()
        {
            var testBase = new TestBase();
            ctx = testBase.Context;
        }

        [Test]
        public void Test1()
        {
            Assert.NotNull(ctx.Users);
        }
    }
}