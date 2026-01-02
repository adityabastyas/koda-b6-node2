// convertTanggal("01-01-2026") // "01/01/2026"
// // buat validasi
// convertTanggal("2026-01-01") // format tanggal tidak valid
// convertTanggal("1") //format tidak falid
// convertTanggal(1) //format tidak falid
// convertTanggal(true) //format tidak falid

// format("DD/MM/YYYY");

// import moment from "moment";
const convertTanggal = (waktu) => {
  if (
    waktu.length !== 10 ||
    !waktu.includes("-") ||
    waktu[2] !== "-" ||
    waktu[5] !== "-"
  ) {
    console.log("format tidak falid");
  }

  // let tanggal = moment(waktu, "DD-MM-YYYY", true)
  // if(!tanggal)

  let k = "";
  for (let i = 0; i < waktu.length; i++) {
    if (waktu[i] === "-") {
      k = k + "/";
    } else {
      k = k + waktu[i];
    }
  }
  console.log(k);
};

convertTanggal("01-01-2026");
