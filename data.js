const PersonalInfo = {
  first_name: "Ronnie",
  middle_name: "Hortizuela",
  last_name: "Legaspi",
  birthday: {
    date: 23,
    month: 9,
    year: 2003,
  },
  address: {
    barangay: "Villegas",
    municipal: "Pozorrubio",
    province: "Pangasinan",
    country: "Philippines",
  },
  education: {
    primary: {
      school: "Villegas Elementary School",
      location: "Villegas, Pozorrubio, Pangasinan",
    },
    junior_high: {
      school: "Eugenio P. Perez National High School",
      location: "Villegas, Pozorrubio, Pangasinan",
    },
    senior_high: {
      school: "Benigno V. Aldana National High School",
      location: "Cablong, Pozorrubio, Pangasinan",
    },
    bmi: {
      height: 189,
      weight: 90,
      bmi: Number((90 / ((189 / 100) ** 2)).toFixed(2)),
    },
  },
};

const birthdayDate = new Date(
  PersonalInfo.birthday.year,
  PersonalInfo.birthday.month - 1,
  PersonalInfo.birthday.date
);

PersonalInfo.age = new Date(Date.now() - birthdayDate.getTime()).getUTCFullYear() - 1970;
module.exports = PersonalInfo;

