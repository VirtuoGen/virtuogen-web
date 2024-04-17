import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  // Recruiter
  const recruiter = await prisma.recruiter.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      companyName: "Acme Corporation",
    },
  });

  // Candidate 1
  const candidate1 = await prisma.candidate.create({
    data: {
      firstName: "Alice",
      lastName: "Smith",
      email: "alice.smith@example.com",
      phone: "1234567890",
      dateOfBirth: new Date(1990, 0, 1), // January 1, 1990
      isApproved: false, // Approved by recruiter=
    },
  });

  // Candidate 2
  const candidate2 = await prisma.candidate.create({
    data: {
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob.johnson@example.com",
      phone: "9876543210",
      dateOfBirth: new Date(1995, 5, 15), // June 15, 1995
      isApproved: true, // Not yet approved by recruiter
    },
  });

  // Job 1
  const job = await prisma.job.create({
    data: {
      jobTitle: "Software Engineer",
      jobSummary: "Join our team as a Software Engineer!",
      companyName: "Example Company",
      location: "Remote",
      applicationDeadline: new Date(2024, 4, 30),
      openings: 3,
      department: "Engineering",
      experienceLevel: "Mid-level",
      employmentType: "Full-time",
      salaryRange: "$60,000 - $80,000",
      postedBy: {
        connect: { id: recruiter.id },
      },
      qualifications: "btech",
      comapnyLogo: "https://bla.com",
    },
  });

  // Job 2
  const job2 = await prisma.job.create({
    data: {
      jobTitle: "Software developer",
      jobSummary: "Join our team as a developer!",
      companyName: "Example Company 2",
      experienceLevel: "Senior-level",
      location: "Kol",
      applicationDeadline: new Date(2024, 4, 30),
      openings: 3,
      department: "Development",
      employmentType: "Full-time",
      salaryRange: "$60,000 - $80,000",
      postedBy: {
        connect: { id: recruiter.id },
      },
      qualifications: "btech",
      comapnyLogo: "https://bla.com",
    },
  });

  // Shortlisted candidate 1
  const shortlistedCandidate = await prisma.shortlistedCandidate.create({
    data: {
      candidate: { connect: { id: candidate1.id } },
      jobId: job.id,
    },
  });
  // Shortlisted candidate 2
  const shortlistedCandidate2 = await prisma.shortlistedCandidate.create({
    data: {
      candidate: { connect: { id: candidate2.id } },
      jobId: job.id,
    },
  });

  // Interview
  const interview = await prisma.interview.create({
    data: {
      date: new Date(2024, 4, 1), // May 1, 2024
      duration: 60, // 60 minutes
      candidates: {
        connect: [{ id: candidate1.id }],
      },
      jobId: job.id,
      recruiterId: recruiter.id,
      status: "PENDING",
    },
  });

  console.log("Seed data successfully created!");
}

// Call the seed function
seed()
  .catch((error) => {
    console.error("Error seeding database:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
