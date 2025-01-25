const db = require("./models");

async function testQueries() {
  try {
    // 1. Create a Tradesman
    const tradesman = await db.Tradesman.create({
      firstName: "John",
      lastName: "Doe",
      dob: new Date("1985-05-15"),
      nrc: "123456789",
      photo: "http://example.com/photo.jpg",
      email: "john.doe@example.com",
      phone: "555-1234",
      specialization: "Electrician",
      passwordHash: "hashedpassword",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log("Created Tradesman:", tradesman.toJSON());

    // 2. Create a Job
    const job = await db.Job.create({
      title: "Fix Electrical Wiring",
      description: "The wiring in my house needs to be fixed.",
      location: "123 Main Street",
      specialization: "Electrician",
      tradesmanId: tradesman.id,
      userId: "1",
      status: "Pending",
      completedByTradesman: false,
      completedByUser: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      budget: 500.0,
      date: new Date(),
    });
    console.log("Created Job:", job.toJSON());

    // 3. Query Tradesman with Jobs
    const tradesmanWithJobs = await db.Tradesman.findOne({
      where: { id: tradesman.id },
      include: { model: db.Job, as: "jobs" },
    });
    console.log("Tradesman with Jobs:", tradesmanWithJobs.toJSON());
  } catch (error) {
    console.error("Error testing queries:", error);
  } finally {
    await db.sequelize.close(); // Close the connection
  }
}

testQueries();
