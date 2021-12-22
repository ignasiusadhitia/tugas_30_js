console.log("REGEX\n=================================");

const regex = (value) => {
  let matchData = value.match(/[es]/g);
  console.log(matchData);
};

regex(
  "Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat"
);
