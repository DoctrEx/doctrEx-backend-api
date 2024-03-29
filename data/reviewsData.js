const now = new Date();

module.exports.reviewsData = [
  {
    id: 1,
    patientId: 101,
    doctorId: 1,
    review: "professional diagnostics",
    createdAt: now,
    updatedAt: now,
    rating: 1,
  },
  {
    id: 2,
    patientId: 102,
    doctorId: 1,
    review: "outstanding intuition",
    createdAt: now,
    updatedAt: now,
    rating: 3,
  },
  {
    id: 3,
    patientId: 103,
    doctorId: 1,
    review: "experienced and accurate",
    createdAt: now,
    updatedAt: now,
    rating: 3,
  },
  {
    id: 4,
    patientId: 104,
    doctorId: 1,
    review: "experienced and accurate",
    createdAt: now,
    updatedAt: now,
    rating: 5,
  },
  {
    id: 5,
    patientId: 105,
    doctorId: 1,
    review: "experienced and accurate",
    createdAt: now,
    updatedAt: now,
    rating: 1,
  },
  {
    id: 6,
    patientId: 101,
    doctorId: 2,
    review: "excellent choice",
    createdAt: now,
    updatedAt: now,
    rating: 1,
  },
  {
    id: 7,
    patientId: 101,
    doctorId: 3,
    review: "professional diagnostics",
    createdAt: now,
    updatedAt: now,
    rating: 5,
  },
  {
    id: 8,
    patientId: 101,
    doctorId: 4,
    review: "excellent choice",
    createdAt: now,
    updatedAt: now,
    rating: 3,
  },
  {
    id: 9,
    patientId: 101,
    doctorId: 5,
    review: "calming and soothing composure",
    createdAt: now,
    updatedAt: now,
    rating: 2,
  },
  {
    id: 10,
    patientId: 101,
    doctorId: 6,
    review: "outstanding intuition",
    createdAt: now,
    updatedAt: now,
    rating: 3,
  },
  // {id:11, patientId:13,doctorId:45, review: 'excellent choice',createdAt: now, updatedAt: now, rating: 3},
  // {id:12, patientId:13,doctorId:40, review: 'definitely recommending to my peers',createdAt: now, updatedAt: now, rating: 3},
  // {id:13, patientId:24,doctorId:86, review: 'excellent choice',createdAt: now, updatedAt: now, rating: 2},
  // {id:14, patientId:08,doctorId:76, review: 'calming and soothing composure',createdAt: now, updatedAt: now, rating: 4},
  // {id:15, patientId:45,doctorId:37, review: 'outstanding intuition',createdAt: now, updatedAt: now, rating: 0},
  // {id:16, patientId:27,doctorId:32, review: 'professional diagnostics',createdAt: now, updatedAt: now, rating: 3},
  // {id:17, patientId:41,doctorId:77, review: 'experienced and accurate',createdAt: now, updatedAt: now, rating: 2},
  // {id:18, patientId:47,doctorId:84, review: 'excellent choice',createdAt: now, updatedAt: now, rating: 3},
  // {id:19, patientId:14,doctorId:57, review: 'excellent choice',createdAt: now, updatedAt: now, rating: 5},
  // {id:20, patientId:13,doctorId:76, review: 'outstanding intuition',createdAt: now, updatedAt: now, rating: 3},
  // {id:21, patientId:18,doctorId:10, review: 'outstanding intuition',createdAt: now, updatedAt: now, rating: 4},
  // {id:22, patientId:11,doctorId:60, review: 'excellent choice',createdAt: now, updatedAt: now, rating: 5},
  // {id:23, patientId:11,doctorId:39, review: 'experienced and accurate',createdAt: now, updatedAt: now, rating: 4},
  // {id:24, patientId:19,doctorId:75, review: 'professional diagnostics',createdAt: now, updatedAt: now, rating: 5},
  // {id:25, patientId:48,doctorId:71, review: 'professional diagnostics',createdAt: now, updatedAt: now, rating: 2},
  // {id:26, patientId:16,doctorId:87, review: 'calming and soothing composure',createdAt: now, updatedAt: now, rating: 4},
  // {id:27, patientId:15,doctorId:97, review: 'definitely recommending to my peers',createdAt: now, updatedAt: now, rating: 2},
  // {id:28, patientId:13,doctorId:67, review: 'definitely recommending to my peers',createdAt: now, updatedAt: now, rating: 4},
  // {id:29, patientId:07,doctorId:86, review: 'excellent choice',createdAt: now, updatedAt: now, rating: 3},
  // {id:30, patientId:46,doctorId:14, review: 'excellent choice',createdAt: now, updatedAt: now, rating: 1},
  // {id:31, patientId:15,doctorId:32, review: 'outstanding intuition',createdAt: now, updatedAt: now, rating: 4},
  // {id:32, patientId:18,doctorId:84, review: 'excellent choice',createdAt: now, updatedAt: now, rating: 3},
  // {id:33, patientId:36,doctorId:68, review: 'experienced and accurate',createdAt: now, updatedAt: now, rating: 0},
  // {id:34, patientId:46,doctorId:38, review: 'definitely recommending to my peers',createdAt: now, updatedAt: now, rating: 1},
  // {id:35, patientId:16,doctorId:57, review: 'definitely recommending to my peers',createdAt: now, updatedAt: now, rating: 1},
  // {id:36, patientId:36,doctorId:21, review: 'professional diagnostics',createdAt: now, updatedAt: now, rating: 4},
  // {id:37, patientId:05,doctorId:70, review: 'definitely recommending to my peers',createdAt: now, updatedAt: now, rating: 2},
  // {id:38, patientId:44,doctorId:52, review: 'excellent choice',createdAt: now, updatedAt: now, rating: 1},
  // {id:39, patientId:20,doctorId:58, review: 'excellent choice',createdAt: now, updatedAt: now, rating: 5},
  // {id:40, patientId:28,doctorId:16, review: 'experienced and accurate',createdAt: now, updatedAt: now, rating: 4},
  // {id:41, patientId:30,doctorId:48, review: 'professional diagnostics',createdAt: now, updatedAt: now, rating: 1},
  // {id:42, patientId:46,doctorId:56, review: 'professional diagnostics',createdAt: now, updatedAt: now, rating: 4},
  // {id:43, patientId:12,doctorId:99, review: 'excellent choice',createdAt: now, updatedAt: now, rating: 4},
  // {id:44, patientId:17,doctorId:98, review: 'outstanding intuition',createdAt: now, updatedAt: now, rating: 2},
  // {id:45, patientId:22,doctorId:41, review: 'outstanding intuition',createdAt: now, updatedAt: now, rating: 4},
  // {id:46, patientId:41,doctorId:13, review: 'excellent choice',createdAt: now, updatedAt: now, rating: 4},
  // {id:47, patientId:13,doctorId:12, review: 'outstanding intuition',createdAt: now, updatedAt: now, rating: 1},
  // {id:48, patientId:14,doctorId:68, review: 'professional diagnostics',createdAt: now, updatedAt: now, rating: 1},
  // {id:49, patientId:42,doctorId:64, review: 'experienced and accurate',createdAt: now, updatedAt: now, rating: 2},
  //     { id: 50, patientId: 25, doctorId: 83, review: 'professional diagnostics', createdAt: now, updatedAt: now, rating: 0 }
];
