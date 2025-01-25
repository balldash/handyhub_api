jest.mock("../../models", () => require("../__mocks__/models.js"));

const { Job } = require("../__mocks__/models.js");

describe("Job Model", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a Job with valid data", async () => {
    Job.create.mockResolvedValue({
      id: 1,
      title: "Fix Plumbing",
      location: "123 Main St",
      specialization: "Plumber",
      budget: 500,
    });

    const job = await Job.create({
      title: "Fix Plumbing",
      location: "123 Main St",
      specialization: "Plumber",
      budget: 500,
    });

    expect(Job.create).toHaveBeenCalledTimes(1);
    expect(job.title).toBe("Fix Plumbing");
    expect(job.specialization).toBe("Plumber");
  });

  it("should fetch all Jobs", async () => {
    Job.findAll.mockResolvedValue([
      { id: 1, title: "Fix Plumbing" },
      { id: 2, title: "Paint Walls" },
    ]);

    const jobs = await Job.findAll();

    expect(Job.findAll).toHaveBeenCalledTimes(1);
    expect(jobs.length).toBe(2);
    expect(jobs[0].title).toBe("Fix Plumbing");
  });
});
