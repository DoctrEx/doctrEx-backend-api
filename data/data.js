const now = new Date();
const data = [
  {
    id: "1",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Emily Tiffany",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Emily@gmail.com",
    dateOfBirth: "21/1/1996",
    country: "MaldivesSrilanka",
    profilePicture: "dr.1.jpg",
    speciality: '["Allergy and Immunology"]',
    specialityLevel: "3",
    chronicalDiseases: '["Cystic Fibrosis"]',
  },
  {
    id: "2",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Hannah Cassandra",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Hannah@gmail.com",
    dateOfBirth: "13/5/1980",
    country: "Australia",
    profilePicture: "dr.2.jpg",
    speciality: '["Anesthesiology"]',
    specialityLevel: "5",
    chronicalDiseases: '["Cancer"]',
  },
  {
    id: "3",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Madison Cheyenne",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Madison@gmail.com",
    dateOfBirth: "14/9/1980",
    country: "Australia",
    profilePicture: "dr.3.jpg",
    speciality: '["Psychiatry"]',
    specialityLevel: "5",
    chronicalDiseases: '["Cystic Fibrosis"]',
  },
  {
    id: "4",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Ashley Gabriella",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Ashley@gmail.com",
    dateOfBirth: "4/3/1981",
    country: "China",
    profilePicture: "dr.4.jpg",
    speciality: '["General Surgery"]',
    specialityLevel: "4",
    chronicalDiseases: '["Arthritis"]',
  },
  {
    id: "5",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Sarah Katie",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Sarah@gmail.com",
    dateOfBirth: "31/1/1998",
    country: "Turkey",
    profilePicture: "dr.5.jpg",
    speciality: '["Allergy and Immunology"]',
    specialityLevel: "4",
    chronicalDiseases: '["Arthritis"]',
  },
  {
    id: "6",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Alexis Leah",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Alexis@gmail.com",
    dateOfBirth: "2/3/1994",
    country: "MaldivesSrilanka",
    profilePicture: "dr.6.jpg",
    speciality: '["Radiodiagnosis"]',
    specialityLevel: "3",
    chronicalDiseases: '["Arthritis"]',
  },
  {
    id: "7",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Samantha Molly",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Samantha@gmail.com",
    dateOfBirth: "30/11/1980",
    country: "India",
    profilePicture: "dr.7.jpg",
    speciality: '["Dermatology"]',
    specialityLevel: "2",
    chronicalDiseases: '["Obesity"]',
  },
  {
    id: "8",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Jessica Isabel",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Jessica@gmail.com",
    dateOfBirth: "3/2/2012",
    country: "MaldivesSrilanka",
    profilePicture: "dr.8.jpg",
    speciality: '[" Traumatology"]',
    specialityLevel: "3",
    chronicalDiseases: '["Depression"]',
  },
  {
    id: "9",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Elizabeth Mia",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Elizabeth@gmail.com",
    dateOfBirth: "8/6/1982",
    country: "MaldivesSrilanka",
    profilePicture: "dr.9.jpg",
    speciality: '["Radiodiagnosis"]',
    specialityLevel: "2",
    chronicalDiseases: '["Arthritis"]',
  },
  {
    id: "10",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Taylor Sabrina",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Taylor@gmail.com",
    dateOfBirth: "27/6/1990",
    country: "China",
    profilePicture: "dr.10.jpg",
    speciality: '["Pediatrics"]',
    specialityLevel: "1",
    chronicalDiseases: '["Alzheimer"]',
  },
  {
    id: "11",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Lauren Alexandria",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Lauren@gmail.com",
    dateOfBirth: "20/2/1981",
    country: "Turkey",
    profilePicture: "dr.11.jpg",
    speciality: '["General Surgery"]',
    specialityLevel: "4",
    chronicalDiseases: '["Asthma"]',
  },
  {
    id: "12",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Alyssa Leslie",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Alyssa@gmail.com",
    dateOfBirth: "7/6/1993",
    country: "Pakistan",
    profilePicture: "dr.12.jpg",
    speciality: '["Neurology"]',
    specialityLevel: "5",
    chronicalDiseases: '["Obesity"]',
  },
  {
    id: "13",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Kayla Kathryn",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Kayla@gmail.com",
    dateOfBirth: "18/1/2005",
    country: "China",
    profilePicture: "dr.13.jpg",
    speciality: '[" Orthopedics"]',
    specialityLevel: "2",
    chronicalDiseases: '["Diabetes"]',
  },
  {
    id: "14",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Abigail Kelsey",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Abigail@gmail.com",
    dateOfBirth: "14/4/1993",
    country: "Pakistan",
    profilePicture: "dr.14.jpg",
    speciality: '["Neurology"]',
    specialityLevel: "1",
    chronicalDiseases: '["Depression"]',
  },
  {
    id: "15",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Brianna Alexa",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Brianna@gmail.com",
    dateOfBirth: "10/2/2005",
    country: "Turkey",
    profilePicture: "dr.15.jpg",
    speciality: '["Pediatrics"]',
    specialityLevel: "3",
    chronicalDiseases: '["Diabetes"]',
  },
  {
    id: "16",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Olivia Claire",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Olivia@gmail.com",
    dateOfBirth: "1/10/2000",
    country: "Russia",
    profilePicture: "dr.16.jpg",
    speciality: '["Dermatology"]',
    specialityLevel: "1",
    chronicalDiseases: '["Asthma"]',
  },
  {
    id: "17",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Emma Laura",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Emma@gmail.com",
    dateOfBirth: "10/5/1999",
    country: "Russia",
    profilePicture: "dr.17.jpg",
    speciality: '["Psychiatry"]',
    specialityLevel: "2",
    chronicalDiseases: '["Cystic Fibrosis"]',
  },
  {
    id: "18",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Megan Jada",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Megan@gmail.com",
    dateOfBirth: "5/9/1990",
    country: "China",
    profilePicture: "dr.18.jpg",
    speciality: '[" Orthopedics"]',
    specialityLevel: "2",
    chronicalDiseases: '["Diabetes"]',
  },
  {
    id: "19",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Grace Briana",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Grace@gmail.com",
    dateOfBirth: "7/12/1998",
    country: "China",
    profilePicture: "dr.19.jpg",
    speciality: '["Radiodiagnosis"]',
    specialityLevel: "3",
    chronicalDiseases: '["Diabetes"]',
  },
  {
    id: "20",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Victoria Zoe",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Victoria@gmail.com",
    dateOfBirth: "8/2/2004",
    country: "Pakistan",
    profilePicture: "dr.20.jpg",
    speciality: '["Allergy and Immunology"]',
    specialityLevel: "3",
    chronicalDiseases: '["Depression"]',
  },
  {
    id: "21",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Rachel Catherine",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Rachel@gmail.com",
    dateOfBirth: "30/3/2000",
    country: "Pakistan",
    profilePicture: "dr.21.jpg",
    speciality: '["Urology"]',
    specialityLevel: "4",
    chronicalDiseases: '["Cancer"]',
  },
  {
    id: "22",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Anna Angela",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Anna@gmail.com",
    dateOfBirth: "6/3/1983",
    country: "India",
    profilePicture: "dr.22.jpg",
    speciality: '["General Surgery"]',
    specialityLevel: "3",
    chronicalDiseases: '["Arthritis"]',
  },
  {
    id: "23",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Sydney Breanna",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Sydney@gmail.com",
    dateOfBirth: "15/2/1986",
    country: "India",
    profilePicture: "dr.23.jpg",
    speciality: '["Gynaecology"]',
    specialityLevel: "5",
    chronicalDiseases: '["Cystic Fibrosis"]',
  },
  {
    id: "24",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Destiny Marissa",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Destiny@gmail.com",
    dateOfBirth: "22/1/1998",
    country: "Turkey",
    profilePicture: "dr.24.jpg",
    speciality: '["Ophtalmology"]',
    specialityLevel: "2",
    chronicalDiseases: '["Obesity"]',
  },
  {
    id: "25",
    roleId: "2",
    createdAt: now,
    updatedAt: now,
    name: "Morgan Autumn",
    password: "$2a$08$qLb2Wgbbmb3E1OtkCK07LuzRHvoAa3TdESvgX7KUH5QQyEmqaM2Vy",
    address: "xyz",
    email: "Morgan@gmail.com",
    dateOfBirth: "19/4/2006",
    country: "Pakistan",
    profilePicture: "dr.25.jpg",
    speciality: '["Anesthesiology"]',
    specialityLevel: "4",
    chronicalDiseases: '["Alzheimer"]',
  },
];

const output = [];

data.map((item) => {
  const money = [
    100, 120, 342, 431, 123, 221, 122, 156, 198, 312, 543, 123, 652, 143,
  ];
  item["fees"] = money[Math.floor(Math.random() * money.length)];
  output.push(item);
});
console.log(output);