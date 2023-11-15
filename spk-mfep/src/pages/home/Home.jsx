import React from "react";
import "./home.css";
import gambar from "../../asset/Premium_Vector___Student_girl_is_thinking_character_illustration_-removebg-preview.png";
import TimelineIcon from "@mui/icons-material/Timeline";
import FunctionsIcon from "@mui/icons-material/Functions";
import BarChartIcon from "@mui/icons-material/BarChart";
import CodeIcon from "@mui/icons-material/Code";
import BiotechIcon from "@mui/icons-material/Biotech";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/calculate");
  };

  const handleClickKonsen = () => {
    navigate("/info");
  };

  return (
    <div className="home">
      <div className="about">
        <div className="about_tulisan">
          <h1>Tentang "CoMath Advisor"</h1>
          <p>
            CoMath Advisor adalah aplikasi pendukung keputusan yang inovatif
            untuk membantu mahasiswa program studi matematika Universitas Negeri
            Malang dalam memilih konsentrasi yang cocok dengan menggunakan
            metode MFEP (Multifactor Evaluation Process). Aplikasi ini dirancang
            untuk memberikan rekomendasi dan membantu mahasiswa menyesuaikan
            konsentrasi studi mereka sesuai dengan nilai, minat, dan tujuan
            karir.
          </p>
          <Button variant="contained" color="secondary" onClick={handleClick}>
            <strong>COBA SEKARANG</strong>
          </Button>
        </div>
        <div>
          <img src={gambar} alt="" className="gambar" />
        </div>
      </div>
      <div className="info">
        <h1>Konsentrasi</h1>
        <p>
          Pemilihan konsentrasi memungkinkan mahasiswa untuk mendalami bidang
          spesifik, menyelidiki topik-topik yang lebih mendalam sesuai dengan
          minat dan tujuan karir mereka. Dengan memilih konsentrasi tertentu,
          mahasiswa memiliki kesempatan untuk memperluas pemahaman mereka
          tentang cabang-cabang matematika tertentu, mengembangkan keahlian
          khusus, dan mempersiapkan diri untuk tantangan di lapangan pekerjaan
          atau penelitian. Pada program studi matematika Universitas Negeri
          Malang terdapat lima konsentrasi yang dapat dipilih oleh mahasiswa,
          yaitu aljabar, analisis, perekayasa perangkat lunak, statistika, dan
          terapan.
        </p>
        <div className="info_konsen">
          <div className="konsen" onClick={handleClickKonsen}>
            <FunctionsIcon className="icon" />
            <h3>Aljabar</h3>
          </div>
          <div className="konsen" onClick={handleClickKonsen}>
            <BiotechIcon className="icon" />
            <h3>Analisis</h3>
          </div>
          <div className="konsen" onClick={handleClickKonsen}>
            <CodeIcon className="icon" />
            <h3>Perekayasa Perangkat Lunak</h3>
          </div>
          <div className="konsen" onClick={handleClickKonsen}>
            <BarChartIcon className="icon" />
            <h3>Statistika</h3>
          </div>
          <div className="konsen" onClick={handleClickKonsen}>
            <TimelineIcon className="icon" />
            <h3>Terapan</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
