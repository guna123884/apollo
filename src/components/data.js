export const clinics = [
  "Apollo DRDO Hospitals",
  "Apollo Gleneagles Hospital",
  "Apollo Specialty Hospital",
  "Apollo Children’s Hospital",
];

function timings(start, end) {
  let timings = [];
  for (let i = start; i < end; i++) {
    for (let j = 0; j < 3; j++) {
      j === 0 && timings.push(`${i}.00 - ${i}.20`);
      j === 1 && timings.push(`${i}.20 - ${i}.40`);
      j === 2 && timings.push(`${i}.40 - ${i + 1}.00`);
    }
  }
  return timings;
}

export const doctors = [
  {
    name: "Sundaram",
    cost: "$20",
    hospital: "Apollo Gleneagles Hospital",
    speciality: ["teeth", "head"],
    timings: timings(9, 17),
  },
  {
    name: "ramesh",
    cost: "$50",
    hospital: "Apollo Gleneagles Hospital",
    speciality: ["teeth", "head"],
    timings: timings(9, 12),
  },
  {
    name: "mahesh",
    cost: "$40",
    hospital: "Apollo DRDO Hospitals",
    speciality: ["teeth", "Lungs", "Stomach"],
    timings: timings(9, 10),
  },
  {
    name: "Rajesh",
    cost: "$150",
    hospital: "Apollo Specialty Hospital",
    speciality: ["kidneys", "Lungs", "Nose"],
    timings: timings(9, 16),
  },
  {
    name: "subash",
    cost: "$20",
    hospital: "Apollo Children’s Hospital",
    speciality: ["teeth", "Eyes"],
    timings: timings(9, 13),
  },
];
