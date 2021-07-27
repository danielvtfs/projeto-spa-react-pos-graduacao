import './styles.css';
function Luthier() {
  return (
    <div className="container-lut">
      <h2>SERVIÇOS DE LUTHIERIA</h2>
      <h4>Regulagens (Set up)</h4>
      <h6>
        Básica*: Consiste no ajuste prático dos componentes do instrumento,
        regulando harmonicamente a ação das cordas, tensor, nut, oitavas e
        altura dos captadores. Inclui:
      </h6>
      <ul className="lista1">
        <li>Limpeza geral;</li>
        <li>Hidratação da escala;</li>
        <li>Polimento dos trastes;</li>
        <li>Limpeza da parte elétrica.</li>
      </ul>
      <br />
      <h6>
        *Recomendada: Quando o instrumento já apresenta trastes nivelados e em
        bom estado de conservação, juntamente com uma escala sem muitas
        imperfeições .
      </h6>
      <br />
      <h6>
        Completa**: Consiste no ajuste geral do instrumento, retificando os
        trastes, corrigindo trastejamentos, melhorando o alinhamento na ação das
        cordas , corrigindo possíveis problemas com afinação , timbres com mais
        sustentação e com mais clareza, além de proporcionar uma tocabilidade
        mais confortável. Inclui:
      </h6>
      <ul className="lista2">
        <li>Alinhamento/Retifica dos trastes;</li>
        <li>Limpeza e desoxidação dos hardwares;</li>
        <li>Retoques básicos nas avarias;</li>
        <li>Enceramento geral.</li>
      </ul>
      <br />
      <h6>
        **Recomendada: Quando o instrumento possui trastes desnivelados; porém,
        ainda em boas condições, e escala sem muitas imperfeições.
      </h6>
    </div>
  );
}
export default Luthier;
