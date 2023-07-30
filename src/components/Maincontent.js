import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import jurusan1 from "./../assets/jrs.jpeg"
import Cardkegiatan from "./Cardkegiatan";
import kegiatan1 from "./../assets/kgt2.jpeg"


const Maincontent = () => {
    return (
        <div>
            <Hero/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                    <div className="col-lg-3 col-12">
                        <Cardjurusan image={jurusan1}/>
                    </div>
                    <div className="col-lg-3 col-12">
                        <Cardjurusan image={jurusan1}/>
                    </div>
                    <div className="col-lg-3 col-12">
                        <Cardjurusan image={jurusan1}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan1}/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan1}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maincontent;