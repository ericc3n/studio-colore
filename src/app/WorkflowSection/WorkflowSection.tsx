import "./WorkflowSection.scss";

export default function WorkflowSection() {
  return (
    <div className="work-flow section">
      <div className="image-grid">
        <img src="/work-space.jpg" alt="work-space" />
        <img src="/room.jpg" alt="room" />
        <img src="/printer.jpg" alt="printer" />
      </div>
      <div className="text-content">
        <h3 className="semi-title">Passaggi</h3>
        <h2>Flusso di lavoro</h2>
        <ul>
          <li>
            <span className="number">1</span>
            <div className="point">
              <h3>Consultazione</h3>
              <p>Conosciamo le tue sigenze e definiamo il progetto</p>
            </div>
          </li>
          <li>
            <span className="number">2</span>
            <div className="point">
              <h3>Progettazione</h3>
              <p>Creiamo il design perfetto per il tuo materiale stampato</p>
            </div>
          </li>
          <li>
            <span className="number">3</span>
            <div className="point">
              <h3>Produzione</h3>
              <p>Stampiamo con tecnologie all'avanguardia per risultati impeccabili</p>
            </div>
          </li>
          <li>
            <span className="number">4</span>
            <div className="point">
              <h3>Consegna</h3>
              <p>Spediamo e installiamo il tuo materiale in modo rapido ed efficiente</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
