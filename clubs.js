// Centralized Club Registry
const CLUBS_DATA = {
  "sports": {
    id: "sports",
    name: "Girls Jr. Basketball",
    supervisor: "Marchildon, Power, Cargo-Froome, Sami Mikiluk",
    room: "Gym",
    classCode: "sports456",
    description: "Basketball team for grade 9 and 10 girls.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Girls Sr. Basketball",
    supervisor: "Marchildon, Power, Cargo-Froome, Sami Mikiluk",
    room: "Gym",
    classCode: "sports456",
    description: "Basketball team for grade 11 and 12 girls.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Varsity Girls Field Hockey",
    supervisor: "Hamilton",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Field hockey team for girls of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Varsity Boys Soccer",
    supervisor: "Landriault, Garvey, Consultant: Carr",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Soccer team for boys of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Boys Jr. Volleyball",
    supervisor: "MacGregor",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Volleyball team for grade 9 and 10 boys.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Boys Sr. Volleyball",
    supervisor: "Shortt",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Volleyball team for grade 11 and 12 boys.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Tennis",
    supervisor: "Hodge, Kleist",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Tennis team for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Cross Country",
    supervisor: "Norris",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Cross country team for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Golf",
    supervisor: "Chorley",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Golf team for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Girls Jr. Volleyball",
    supervisor: "MacGregor/Pinkney",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Volleyball team for grade 9 and 10 girls.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Girls Sr. Volleyball",
    supervisor: "MacGregor/Pinkney",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Volleyball team for grade 11 and 12 girls.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Girls Ice Hockey",
    supervisor: "McKloskey/Burford",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Ice hockey team for girls of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Boys Jr.Basketball",
    supervisor: "Mikulik",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Basketball team for grade 9 and 10 boys.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Boys Sr. Basketball",
    supervisor: "Hamilton",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Basketball team for grade 11 and 12 boys.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Badminton",
    supervisor: "N/A",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Badminton team for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Varsity Girls Soccer",
    supervisor: "N/A",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Soccer team for girls of all grades.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Varsity Girls Field Lacrosse",
    supervisor: "N/A",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Field lacrosse team for girls of all grades.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Varsity Boys Field Lacrosse",
    supervisor: "N/A",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Field lacrosse team for boys of all grades.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Ultimate Frisbee",
    supervisor: "N/A",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Ultimate frisbee team for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Track and Field",
    supervisor: "N/A",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Track and field team for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Squash",
    supervisor: "Pinkney",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Squash team for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "E-Sports",
    supervisor: "Gunn, Pinizzotto, Mackintosh",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "E-Sports team for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Intramurals",
    supervisor: "Hamilton, Lawler",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Intramurals for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "sports": {
    id: "sports",
    name: "Fitness Club",
    supervisor: "Hodge",
    room: "Gym", // idk yet
    classCode: "sports456",
    description: "Fitness club for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Arts": {
    id: "arts",
    name: "Coffee House (Music)",
    supervisor: "Hodge",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Coffee house for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Arts": {
    id: "arts",
    name: "Coffee House (Music)",
    supervisor: "Hodge",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Coffee house for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Service": {
    id: "service",
    name: "Eco-team",
    supervisor: "N/A",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Eco-team for students of any grade.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Arts": {
    id: "arts",
    name: "Year Book Club",
    supervisor: "N/A",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help create the yearbook by taking pictures.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Service": {
    id: "service",
    name: "Breakfast Club",
    supervisor: "Kleist, Sabatine, Adam",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare and serve breakfast.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Arts": {
    id: "arts",
    name: "Cookie Club",
    supervisor: "Gunn",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Academic": {
    id: "academic",
    name: "Learning Commons Club",
    supervisor: "Llyod",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Hobby": {
    id: "hobby",
    name: "D and D/Magic the Gathering Club",
    supervisor: "Gunn",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Service": {
    id: "service",
    name: "GSA",
    supervisor: "N/A",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Service": {
    id: "service",
    name: "Link Crew",
    supervisor: "Power, Lloyd, Will, Clement",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Service": {
    id: "service",
    name: "Student Union",
    supervisor: "Marchildon, Llyod",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Hobby": {
    id: "hobby",
    name: "Video Games Club",
    supervisor: "Mackintosh, Pinizzotto",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Arts": {
    id: "arts",
    name: "Art Club",
    supervisor: "N/A",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Arts": {
    id: "arts",
    name: "Band/Honour Band",
    supervisor: "Bibby",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Arts": {
    id: "arts",
    name: "Choir",
    supervisor: "Bibby",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Arts": {
    id: "arts",
    name: "Drama",
    supervisor: "Cargo-Froome",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Sports": {
    id: "sports",
    name: "Chess Club",
    supervisor: "Heaslip",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Academic": {
    id: "academic",
    name: "Robotics Club",
    supervisor: "Pinizzotto",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Academic": {
    id: "academic",
    name: "DECA (Business)",
    supervisor: "Starrett",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Academic": {
    id: "academic",
    name: "HOSA",
    supervisor: "Zooey",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Academic": {
    id: "academic",
    name: "Skills Ontario",
    supervisor: "Lucko, Macintosh",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
  "Service": {
    id: "service",
    name: "Diversity Club",
    supervisor: "N/A",
    room: "N/A", // idk yet
    classCode: "sports456",
    description: "Students help prepare cookies.",
    meetingDayOfWeek: 1, // Idk yet
    meetingTime: "11:00 AM", // Idk yet
    durationMinutes: 45 // Idk yet
  },
};