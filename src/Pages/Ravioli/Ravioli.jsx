import React from "react";
import Navbar from '../../components/Navbar/Navbar';

function Ravioli() {
  return (
    <>
      <Navbar />
      <div className="instructiuni">
        <h1>Pasta Amatriciana</h1>
        <div className="prezentare">
          <p>
            Raviolii cu sos de roșii și busuioc sunt o rețetă perfectă pentru a
            reuni toată familia la masă.În această rețetă raviolii cu carne,cu
            ricotta și spanac sau cu oricare altă umplutură se combină perfect
            cu acest simplu sos care îi are ca protagoniști busuiocul și sosul
            de roșii,două îngrediente simbol al bucătăriei italiene.Ce mai
            așteptați?Suflecați-vă mânicile și răsfățați-vă familia cu această
            rețetă.
          </p>
        </div>
        <div className="ingrediente">
          <h1>Ingrediente</h1>
          <p>Ravioli:400 gr. </p>
          <p>Sos de roșii:500 gr.</p>
          <p>Usturoi:1 spic </p>
          <p>Busuioc:d.g.</p>
          <p>Ulei:d.g.</p>
        </div>
        <div className="preparare">
          <h1>Preparare</h1>
          <p>
            1.Pentru a prepara raviolii cu sos de roșii și busuioc începeți prin
            a pune o cratiță cu apă pe foc pentru a fierbe pastele.
          </p>
          <p>
            2.În acest timp vă dedicați sosului,luați o tigaie antiaderentă și
            vărsați niște ulei
          </p>
          <p>3.Adăugați spicul de usturoi decojit în tigaie.</p>
          <p>4.Vărsați sosul de roșii</p>
          <p>5.Și adăugați câteva frunze de busuioc.</p>
          <p>6.Puneți un capac deasupra și lăsăm sosul să fiarbă la foc mic.</p>
          <p>7.Vărsați raviolii în apa care ar trebui să fiarbă.</p>
          <p>
            8.După ce pastele au fiert le scurgeți direct în tigaia cu sos care
            ar trebui să fiarbă.
          </p>
          <p>
            9.Amestecați raviolii pentru a amalgama totul și lăsăm 2-3 minute.
          </p>
          <p>10.Eliminați usturoiul din tigaie.</p>
          <p>11.Apoi serviți raviolii într-o farfurie.</p>
        </div>
        <div className="conservare">
          <h1>Conservare</h1>
          <p>Se recomandă de a servi imediat</p>
          <p>
            Raviolii cu sos de roșii și busuioc pot fi conservați într-un
            recipient ermetic în frigider.
          </p>
        </div>
      </div>
    </>
  );
}

export default Ravioli;
