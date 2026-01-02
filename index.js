// convertTanggal("01-01-2026") // "01/01/2026"
// // buat validasi
// convertTanggal("2026-01-01") // format tanggal tidak valid
// convertTanggal("1") //format tidak falid
// convertTanggal(1) //format tidak falid
// convertTanggal(true) //format tidak falid

// format("DD/MM/YYYY");

const moment = require("moment");

const convertTanggal = (waktu) => {
  if (
    waktu.length !== 10 ||
    !waktu.includes("-") ||
    waktu[2] !== "-" ||
    waktu[5] !== "-"
  ) {
    console.log("format tidak falid");
  }

  let tanggal = moment(waktu, "DD-MM-YYYY", true).format("DD/MM/YYYY");
  console.log(tanggal);
};

convertTanggal("01-01-2026");
