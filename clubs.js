// Centralized Club Registry
const CLUBS_DATA = {
  "Girls Jr. Basketball": {
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
  "Girls Sr. Basketball": {
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
  "Varsity Girls Field Hockey": {
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
  "Varsity Boys Soccer": {
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
  "Boys Jr. Volleyball": {
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
  "Boys Sr. Volleyball": {
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
  "Tennis": {
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
  "Cross Country": {
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
  "Golf": {
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
  "Girls Jr. Volleyball": {
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
  "Girls Sr. Volleyball": {
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
  "Girls Ice Hockey": {
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
  "Boys Jr. Basketball": {
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
  "Boys Sr. Basketball": {
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
  "Badminton": {
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
  "Varsity Girls Soccer": {
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
  "Varsity Girls Field Lacrosse": {
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
  "Varsity Boys Field Lacrosse": {
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
  "Ultimate Frisbee": {
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
  "Track and Field": {
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
  "Squash": {
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
  "E-Sports": {
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
  "Intramurals": {
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
  "Fitness Club": {
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
  "Coffee House (Music)": {
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
  "Eco-team": {
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
  "Year Book Club": {
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
  "Breakfast Club": {
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
  "Cookie Club": {
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
  "Learning Commons Club": {
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
  "D and D/Magic the Gathering Club": {
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
  "GSA": {
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
  "Link Crew": {
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
  "Student Union": {
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
  "Video Games Club": {
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
  "Art Club": {
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
  "Band/Honour Band": {
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
  "Choir": {
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
  "Drama": {
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
  "Chess Club": {
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
  "Robotics Club": {
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
  "DECA (Business)": {
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
  "HOSA": {
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
  "Skills Ontario": {
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
  "Diversity Club": {
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