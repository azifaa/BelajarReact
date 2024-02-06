import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const makanans = [
  {
    nama: "Soto",
    harga: 7000,
  },
  {
    nama: "Bakso",
    harga: 10000,
  },
  {
    nama: "Pecel Lele",
    harga: 9500,
  },
];

const Map = () => {
  // Filter makanan dengan harga di bawah 10000
  const makananHargaDibawah10k = makanans.filter(
    (makanan) => makanan.harga < 10000
  );

  // Menggunakan reduce untuk menghitung total harga semua makanan
  const totalBayar = makanans.reduce(
    (totalHarga, makanan) => totalHarga + makanan.harga,
    0
  );

  return (
    <div className="container mt-5"> {/* Add Bootstrap container class */}
      <h1>Daftar Makanan</h1>

      {/* Tabel Daftar Makanan */}
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th style={{ width: "70px" }}>No</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {makanans.map((makanan, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.harga}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Daftar Makanan Di Bawah 10000</h1>

      {/* Tabel Makanan dengan Harga Di Bawah 10000 */}
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th style={{ width: "70px" }}>No</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {makananHargaDibawah10k.map((makanan, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.harga}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Total Harga Makanan : {totalBayar}</h2>
    </div>
  );
};

export default Map;
