export default function Flower() {
  return (
    <div className="flowers animate-rise">
      {/* Flower 1 */}
      <div className="flower flower--1">
        <div className="flower__leafs flower__leafs--1">
          <div className="flower__leaf flower__leaf--1" />
          <div className="flower__leaf flower__leaf--2" />
          <div className="flower__leaf flower__leaf--3" />
          <div className="flower__leaf flower__leaf--4" />
          <div className="flower__white-circle" />

          {[...Array(8)].map((_, i) => (
            <div key={i} className={`flower__light flower__light--${i + 1}`} />
          ))}
        </div>
        <div className="flower__line">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`} />
          ))}
        </div>
      </div>

      {/* Flower 2 */}
      <div className="flower flower--2">
        <div className="flower__leafs flower__leafs--2">
          <div className="flower__leaf flower__leaf--1" />
          <div className="flower__leaf flower__leaf--2" />
          <div className="flower__leaf flower__leaf--3" />
          <div className="flower__leaf flower__leaf--4" />
          <div className="flower__white-circle" />

          {[...Array(8)].map((_, i) => (
            <div key={i} className={`flower__light flower__light--${i + 1}`} />
          ))}
        </div>
        <div className="flower__line">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`} />
          ))}
        </div>
      </div>

      {/* Flower 3 */}
      <div className="flower flower--3">
        <div className="flower__leafs flower__leafs--3">
          <div className="flower__leaf flower__leaf--1" />
          <div className="flower__leaf flower__leaf--2" />
          <div className="flower__leaf flower__leaf--3" />
          <div className="flower__leaf flower__leaf--4" />
          <div className="flower__white-circle" />

          {[...Array(8)].map((_, i) => (
            <div key={i} className={`flower__light flower__light--${i + 1}`} />
          ))}
        </div>
        <div className="flower__line">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}