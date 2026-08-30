// Centralized Club Registry
const CLUBS_DATA = {
  "robotics": {
    id: "robotics",
    name: "Robotics & Automation Club",
    supervisor: "Mr. Davis",
    room: "Room 204",
    classCode: "xyz1234",
    description: "Build, program, and compete with VEX robotics teams across the region.",
    // Meeting schedule configuration
    meetingDayOfWeek: 4, // 0 = Sunday, 1 = Monday, ..., 4 = Thursday
    meetingTime: "15:30", // 3:30 PM
    durationMinutes: 60
  },
  "coding": {
    id: "coding",
    name: "Coding Club",
    supervisor: "Ms. Patel",
    room: "Lab 102",
    classCode: "abc5678",
    description: "Learn web development, game design, and competitive algorithm challenges.",
    meetingDayOfWeek: 2, // Tuesday
    meetingTime: "15:15",
    durationMinutes: 45
  },
  "science": {
    id: "science",
    name: "Science Club",
    supervisor: "Dr. Smith",
    room: "Room 305",
    classCode: "sci9912",
    description: "Explore biology, chemistry, and physics through hands-on experiments and science fair projects.",
    meetingDayOfWeek: 3, // 3 = Wednesday
    meetingTime: "15:30", // 3:30 PM
    durationMinutes: 60
  }
};