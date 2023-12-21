import React, { useState } from "react";
import "./calculate.css";
import { Button, MenuItem, TextField } from "@mui/material";
import { toast } from "react-toastify";

const Calculate = () => {
  const [minatAljabar, setMinatAljabar] = useState(3);
  const [minatAnalisis, setMinatAnalisis] = useState(3);
  const [minatKomputasi, setMinatKomputasi] = useState(3);
  const [minatStatistik, setMinatStatistik] = useState(3);
  const [minatTerapan, setMinatTerapan] = useState(3);

  // USESTATE NILAI ALJABAR
  const [nilaiAle, setNilaiAle] = useState(0);
  const [nilaiGrup, setNilaiGrup] = useState(0);
  const [nilaiGelanggang, setNilaiGelanggang] = useState(0);

  // USESTATE NILAI ANALISIS
  const [nilaiPTB, setNilaiPTB] = useState(0);
  const [nilaiKompleks, setNilaiKompleks] = useState(0);
  const [nilaiPTRM, setNilaiPTRM] = useState(0);

  // USESTATE NILAI KOMPUTASI
  const [nilaiDDP, setNilaiDDP] = useState(0);
  const [nilaiPemrog, setNilaiPemrog] = useState(0);

  // USESTATE NILAI STATISTIK
  const [nilaiMetStat, setNilaiMetStat] = useState(0);
  const [nilaiPSM, setNilaiPSM] = useState(0);
  const [nilaiPTP, setNilaiPTP] = useState(0);

  // USESTATE NILAI TERAPAN
  const [nilaiMatDis, setNilaiMatDis] = useState(0);
  const [nilaiGraph, setNilaiGraph] = useState(0);
  const [nilaiPDB, setNilaiPDB] = useState(0);

  const minat = [
    {
      value: 3,
      label: "Sangat Minat",
    },
    {
      value: 2,
      label: "Minat",
    },
    {
      value: 1,
      label: "Tidak Minat",
    },
  ];

  const [hasil, setHasil] = useState([]);

  const onCalculate = () => {
    setHasil([]);
    if (
      nilaiAle === "" ||
      nilaiGrup === "" ||
      nilaiGelanggang === "" ||
      nilaiPTB === "" ||
      nilaiKompleks === "" ||
      nilaiPTRM === "" ||
      nilaiDDP === "" ||
      nilaiPemrog === "" ||
      nilaiMetStat === "" ||
      nilaiPSM === "" ||
      nilaiPTP === "" ||
      nilaiMatDis === "" ||
      nilaiGraph === "" ||
      nilaiPDB === ""
    ) {
      toast.error("Pastikan semua data telah terisi!");
    } else {
      const bobotMinat = 0.7;
      const bobotNilai = 0.3;

      const evalAljabar =
        ((+nilaiAle + +nilaiGrup + +nilaiGelanggang) / 3) * bobotNilai +
        minatAljabar * bobotMinat;
      const evalAnalisis =
        ((+nilaiPTB + +nilaiKompleks + +nilaiPTRM) / 3) * bobotNilai +
        minatAnalisis * bobotMinat;
      const evalKomputasi =
        ((+nilaiDDP + +nilaiPemrog) / 2) * bobotNilai +
        minatKomputasi * bobotMinat;
      const evalStatistik =
        ((+nilaiMetStat + +nilaiPSM + +nilaiPTP) / 3) * bobotNilai +
        minatStatistik * bobotMinat;
      const evalTerapan =
        ((+nilaiMatDis + +nilaiGraph + +nilaiPDB) / 3) * bobotNilai +
        minatTerapan * bobotMinat;

      const arrEval = [
        { eval: evalAljabar, konsen: "ALJABAR" },
        { eval: evalAnalisis, konsen: "ANALISIS" },
        { eval: evalKomputasi, konsen: "PEREKAYASA PERANGKAT LUNAK" },
        { eval: evalStatistik, konsen: "STATISTIKA" },
        { eval: evalTerapan, konsen: "TERAPAN" },
      ];
      const sortedArr = arrEval.sort((a, b) => b.eval - a.eval);
      setHasil(sortedArr);
    }
  };

  const onClear = () => {
    setNilaiAle(0);
    setNilaiGrup(0);
    setNilaiGelanggang(0);
    setNilaiPTB(0);
    setNilaiKompleks(0);
    setNilaiPTRM(0);
    setNilaiDDP(0);
    setNilaiPemrog(0);
    setNilaiMetStat(0);
    setNilaiPSM(0);
    setNilaiPTP(0);
    setNilaiMatDis(0);
    setNilaiGraph(0);
    setNilaiPDB(0);
    setHasil([]);
  };

  return (
    <div className="calculate">
      <div className="formulir">
        <div className="formulir_1">
          <div className="instruksi">
            <h2>Instruksi Pengisian</h2>
            <ol>
              <li>Semua inputan wajib diisi.</li>
              <li>
                Masukkan nilai mata kuliah berupa angka bukan huruf (0.00 -
                4.00).
              </li>
              <li>Pilih tingkat minat Anda pada setiap konsentrasi.</li>
              <li>Klik tombol "Kirim" untuk melihat hasil rekomendasi.</li>
            </ol>
          </div>
          <div className="form_aljabar">
            <h3>Konsentrasi Aljabar</h3>
            <ul>
              <li>MK Aljabar Linear Elementer</li>
              <li>MK Pengantar Grup</li>
              <li>MK Pengantar Gelanggang</li>
            </ul>
            <TextField
              select
              label="Tingkat Minat"
              size="small"
              color="secondary"
              value={minatAljabar}
              onChange={(e) => setMinatAljabar(e.target.value)}
              fullWidth
              required
            >
              {minat.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="form_nilai">
              <TextField
                label="ALE"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiAle}
                onChange={(e) => setNilaiAle(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="P Grup"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                min="0"
                max="20"
                value={nilaiGrup}
                onChange={(e) => setNilaiGrup(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="P Gelanggang"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiGelanggang}
                onChange={(e) => setNilaiGelanggang(e.target.value)}
                required
                fullWidth
              />
            </div>
          </div>
          <div className="form_analisis">
            <h3>Konsentrasi Analisis</h3>
            <ul>
              <li>MK Pengantar Teori Barisan</li>
              <li>MK Fungsi Kompleks</li>
              <li>MK Pengantar Teori Ruang Metrik</li>
            </ul>
            <TextField
              select
              label="Tingkat Minat"
              size="small"
              color="secondary"
              value={minatAnalisis}
              onChange={(e) => setMinatAnalisis(e.target.value)}
              fullWidth
              required
            >
              {minat.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="form_nilai">
              <TextField
                label="PTB"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiPTB}
                onChange={(e) => setNilaiPTB(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="F Kompleks"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiKompleks}
                onChange={(e) => setNilaiKompleks(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="PTRM"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiPTRM}
                onChange={(e) => setNilaiPTRM(e.target.value)}
                required
                fullWidth
              />
            </div>
          </div>
        </div>
        <div className="formulir_2">
          <div className="form_komputasi">
            <h3>Konsentrasi Perekayasa Perangkat Lunak</h3>
            <ul>
              <li>MK Dasar-Dasar Pemrograman</li>
              <li>MK Pemrograman Komputer</li>
            </ul>
            <TextField
              select
              label="Tingkat Minat"
              size="small"
              color="secondary"
              value={minatKomputasi}
              onChange={(e) => setMinatKomputasi(e.target.value)}
              fullWidth
              required
            >
              {minat.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="form_nilai">
              <TextField
                label="Dasar Pemrog"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiDDP}
                onChange={(e) => setNilaiDDP(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="Pemrog Komputer"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiPemrog}
                onChange={(e) => setNilaiPemrog(e.target.value)}
                required
                fullWidth
              />
            </div>
          </div>
          <div className="form_statistik">
            <h3>Konsentrasi Statistika</h3>
            <ul>
              <li>MK Metode Statistis</li>
              <li>MK Pengantar Statistika Matematis</li>
              <li>MK Pengantar Teori Peluang</li>
            </ul>
            <TextField
              select
              label="Tingkat Minat"
              size="small"
              color="secondary"
              value={minatStatistik}
              onChange={(e) => setMinatStatistik(e.target.value)}
              fullWidth
              required
            >
              {minat.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="form_nilai">
              <TextField
                label="Met Statistis"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiMetStat}
                onChange={(e) => setNilaiMetStat(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="PSM"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiPSM}
                onChange={(e) => setNilaiPSM(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="PTP"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiPTP}
                onChange={(e) => setNilaiPTP(e.target.value)}
                required
                fullWidth
              />
            </div>
          </div>
          <div className="form_terapan">
            <h3>Konsentrasi Terapan</h3>
            <ul>
              <li>MK Matematika Diskret</li>
              <li>MK Teori Graph</li>
              <li>MK Persamaan Diferensial Biasa</li>
            </ul>
            <TextField
              select
              label="Tingkat Minat"
              size="small"
              color="secondary"
              value={minatTerapan}
              onChange={(e) => setMinatTerapan(e.target.value)}
              fullWidth
              required
            >
              {minat.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="form_nilai">
              <TextField
                label="Mat Diskret"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiMatDis}
                onChange={(e) => setNilaiMatDis(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="T Graph"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiGraph}
                onChange={(e) => setNilaiGraph(e.target.value)}
                required
                fullWidth
              />
              <TextField
                label="PDB"
                color="secondary"
                size="small"
                type="number"
                step="0.1"
                value={nilaiPDB}
                onChange={(e) => setNilaiPDB(e.target.value)}
                required
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
      <div className="btn" fullWidth>
        <Button
          variant="contained"
          color="secondary"
          onClick={onCalculate}
          fullWidth
        >
          <strong>Kirim</strong>
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={onClear}
          fullWidth
        >
          <strong>Ulang</strong>
        </Button>
      </div>
      <div className="hasil_container">
        <div className="hasil_1">
          <h2>Hasil Rekomendasi 1: </h2>
          <h3>{hasil.length > 0 && hasil[0].konsen}</h3>
        </div>
        <div className="hasil_2">
          <h2>Hasil Rekomendasi 2: </h2>
          <h3>{hasil.length > 0 && hasil[1].konsen}</h3>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
