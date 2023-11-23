import React, { useState } from "react";
import "./info.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Info = () => {
  const [isAljabar, setIsAljabar] = useState(false);
  const [isAnalisis, setIsAnalisis] = useState(false);
  const [isKomputasi, setIsKomputasi] = useState(false);
  const [isStatistik, setIsStatistik] = useState(false);
  const [isTerapan, setIsTerapan] = useState(false);

  const onAljabar = () => {
    setIsAljabar(!isAljabar);
    setIsAnalisis(false);
    setIsKomputasi(false);
    setIsStatistik(false);
    setIsTerapan(false);
  };

  const onAnalisis = () => {
    setIsAljabar(false);
    setIsAnalisis(!isAnalisis);
    setIsKomputasi(false);
    setIsStatistik(false);
    setIsTerapan(false);
  };

  const onKomputasi = () => {
    setIsAljabar(false);
    setIsAnalisis(false);
    setIsKomputasi(!isKomputasi);
    setIsStatistik(false);
    setIsTerapan(false);
  };

  const onStatistik = () => {
    setIsAljabar(false);
    setIsAnalisis(false);
    setIsKomputasi(false);
    setIsStatistik(!isStatistik);
    setIsTerapan(false);
  };

  const onTerapan = () => {
    setIsAljabar(false);
    setIsAnalisis(false);
    setIsKomputasi(false);
    setIsStatistik(false);
    setIsTerapan(!isTerapan);
  };

  return (
    <div className="informasi">
      {/* KONSENTRASI ALJABAR */}
      <div className="inform_konsen" onClick={onAljabar}>
        <h2>Konsentrasi Aljabar</h2>
        {isAljabar ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      <div
        className="konsen_detail"
        style={{ display: isAljabar ? "block" : "none" }}
      >
        <p>
          Konsentrasi aljabar memandu mahasiswa dalam pemahaman struktur
          matematika abstrak, seperti grup, cincin, dan lapangan. Mahasiswa akan
          mempelajari konsep-konsep dasar dalam aljabar dan menerapkan pemikiran
          logis untuk menyelesaikan masalah kompleks.
        </p>
        <strong>Mata Kuliah Konsentrasi Aljabar:</strong>
        <ul>
          <li>Aljabar Linear</li>
          <li>Pengantar Aljabar Komputer</li>
          <li>Pengantar Teori Grup</li>
          <li>Matriks Atas Gelanggang</li>
          <li>Pengantar Katagori dan Fungtor</li>
          <li>Kriptografi</li>
          <li>Pengantar Logika Fuzzy</li>
          <li>Pengantar Teori Gelanggang</li>
          <li>Pengantar Teori Modul</li>
          <li>Teori Operator</li>
        </ul>
        <strong>Prospek Kerja:</strong>
        <ul>
          <li>Matematikawan atau Ahli Aljabar</li>
          <li>Pengembang Algoritma Matematis</li>
          <li>Analis Data dengan Fokus Aljabar</li>
          <li>Analisis Keamanan Informasi</li>
          <li>Konsultan Keuangan Matematis</li>
        </ul>
      </div>

      {/* KONSENTRASI ANALISIS */}
      <div className="inform_konsen" onClick={onAnalisis}>
        <h2>Konsentrasi Analisis</h2>
        {isAnalisis ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      <div
        className="konsen_detail"
        style={{ display: isAnalisis ? "block" : "none" }}
      >
        <p>
          Konsentrasi analisis menekankan studi tentang konsep-konsep seperti
          limit, deret, integral, dan fungsi. Mahasiswa akan mendalami pemahaman
          tentang perubahan dan kontinuitas serta mempelajari teknik-teknik
          kalkulus yang mendalam.
        </p>
        <strong>Mata Kuliah Konsentrasi Analisis:</strong>
        <ul>
          <li>Pengantar Teori Ukuran</li>
          <li>Pengantar Analisis Fungsional</li>
          <li>Pengantar Teori Integral</li>
          <li>Ruang Metrik</li>
          <li>Analisis Harmonik</li>
          <li>Pengantar Topologi</li>
          <li>Analisis Fourier</li>
          <li>Kalkulus Vektor</li>
          <li>Teori Wavelet</li>
        </ul>
        <strong>Prospek Kerja:</strong>
        <ul>
          <li>Analisis Data Scientist</li>
          <li>Spesialis Bisnis</li>
          <li>Analisis Keuangan</li>
          <li>Analisis Kinerja Operasional</li>
          <li>Analisis Keamanan Cyber</li>
          <li>Ahli Riset Pasar</li>
        </ul>
      </div>

      {/* KONSENTRASI KOMPUTASI */}
      <div className="inform_konsen" onClick={onKomputasi}>
        <h2>Konsentrasi Perekayasa Perangkat Lunak</h2>
        {isKomputasi ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      <div
        className="konsen_detail"
        style={{ display: isKomputasi ? "block" : "none" }}
      >
        <p>
          Konsentrasi ini menggabungkan matematika dengan pemrograman dan
          rekayasa perangkat lunak. Mahasiswa belajar mengembangkan perangkat
          lunak yang efisien dan andal dengan dasar matematika yang kuat.
        </p>
        <strong>Mata Kuliah Konsentrasi Perekayasa Perangkat Lunak:</strong>
        <ul>
          <li>Pemrograman Web</li>
          <li>Kecerdasan Buatan</li>
          <li>Basis Data</li>
          <li>Struktur Data</li>
          <li>Pemrograman Berorientasi Objek</li>
          <li>Desain dan Analisis Sistem Informasi</li>
          <li>Pengolahan Citra Digital</li>
          <li>Pemrograman Perangkat Bergerak</li>
          <li>Pemrograman Web Lanjut</li>
        </ul>
        <strong>Prospek Kerja:</strong>
        <ul>
          <li>Pengembang Perangkat Lunak</li>
          <li>Insinyur Machine Learning</li>
          <li>Data Scientist</li>
          <li>Software Engineer</li>
          <li>QA Engineer</li>
          <li>Software Security Analyst</li>
        </ul>
      </div>

      {/* KONSENTRASI STATISTIK */}
      <div className="inform_konsen" onClick={onStatistik}>
        <h2>Konsentrasi Statistika</h2>
        {isStatistik ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      <div
        className="konsen_detail"
        style={{ display: isStatistik ? "block" : "none" }}
      >
        <p>
          Konsentrasi statistika fokus pada pengumpulan, analisis, dan
          interpretasi data. Mahasiswa mempelajari metode statistik untuk
          membuat keputusan informasi dan mengidentifikasi pola dalam data.
        </p>
        <strong>Mata Kuliah Konsentrasi Statistika:</strong>
        <ul>
          <li>Aktuaria</li>
          <li>Analisis Regresi</li>
          <li>Analisis Statistik Multivariat</li>
          <li>Teori Antrian</li>
          <li>Pengantar Ekonometrika</li>
          <li>Rancangan Percobaan</li>
          <li>Pengendalian Kualitas Statistik</li>
          <li>Pengantar Proses Stokastik</li>
          <li>Inferensi Bayes</li>
        </ul>
        <strong>Prospek Kerja:</strong>
        <ul>
          <li>Konsultan Statistik</li>
          <li>Ilmuwan Data Statistik</li>
          <li>Ahli Statistik Terapan</li>
          <li>Analisis Risiko</li>
          <li>Data Analyst</li>
          <li>Ilmuwan Biostatistik</li>
        </ul>
      </div>

      {/* KONSENTRASI TERAPAN */}
      <div className="inform_konsen" onClick={onTerapan}>
        <h2>Konsentrasi Terapan</h2>
        {isTerapan ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      <div
        className="konsen_detail"
        style={{ display: isTerapan ? "block" : "none" }}
      >
        <p>
          Matematika Terapan adalah cabang dari ilmu matematika yang fokus pada
          penerapan konsep matematika dalam pemecahan masalah dunia nyata dan
          industri. Dalam jurusan ini, mahasiswa tidak hanya mempelajari teori
          matematika, tetapi juga memahami cara menerapkannya untuk mengatasi
          tantangan praktis di berbagai bidang.
        </p>
        <strong>Mata Kuliah Konsentrasi Terapan:</strong>
        <ul>
          <li>Penerapan Teori Graph</li>
          <li>Pengantar Kombinatorika</li>
          <li>Persamaan Diferensial Parsial</li>
          <li>Pengantar Teori Pengkodean</li>
          <li>Pemfaktoran Graph</li>
          <li>Pengantar Sistem Dinamik</li>
          <li>Analisis Numerik</li>
          <li>Optimasi</li>
          <li>Persamaan Diferensial Parsial Lanjut</li>
          <li>Metode Numerik untuk Persamaan Diferensial Parsial</li>
        </ul>
        <strong>Prospek Kerja:</strong>
        <ul>
          <li>Spesialis Optimasi</li>
          <li>Ilmuwan Data Terapan</li>
          <li>Spesialis Logistik dan Rantai Pasokan</li>
          <li>Insinyur Produksi</li>
          <li>Analisis Kinerja Jaringan</li>
          <li>Analisis Operasi</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
