function Color({ colors, flat }) {
  let background;
  if (colors.length === 1) {
    background = colors[0];
  } else if (flat) {
    const percentDiff = 100 / colors.length;
    const percentColors = colors.map((color, index) => {
      return `${color} ${percentDiff * Math.max(index, 1)}%`;
    })
    background = `linear-gradient(to bottom,
      ${colors[0]} 0%,
      ${percentColors.join(', ')},
      ${colors[colors.length - 1]}
    )`;
  } else {
    background = `linear-gradient(to bottom, ${colors.join(', ')})`;
  }

  return (
    <div className="color" style={{ background: background }}>
      {colors.map((color) => {
        return <p className="description" key={color}>{color}</p>
      })}
    </div>
  );
};

function ColorsWoho() {
  return (
    <main>
      <Color colors={['#0467F0']} />
      <Color colors={['#0478FE', '#5557D6']} />
      <Color colors={['#81FBB8', '#28C76F']} />
      <Color colors={['#FFF6B7', '#F6416C']} />
      <Color colors={['#3D6BDE', '#97B6FD']} />
      <Color colors={['#FDF203', '#D3FF01']} />
      <Color colors={['#25E2EB', '#7F7EFD']} />
      <Color colors={['#F8659C', '#763356']} flat />
      <Color colors={['#3DE589', '#232327']} flat />
      <Color colors={['#d4fc79', '#96e6a1']} />
      <Color colors={['#cfd9df', '#e2ebf0']} />
      <Color colors={['#e0c3fc', '#8ec5fc']} />
      <Color colors={['#f093fb', '#f5576c']} />
      <Color colors={['#00f2fe', '#4facfe']} />
      <Color colors={['#96fbc4', '#f9f586']} />
      <Color colors={['#4481eb', '#04befe']} />
      <Color colors={['#FFFEFF', '#D7FFFE']} />
      <Color colors={['#B7F8DB', '#50A7C2']} />
      <Color colors={['#A445B2', '#D41872', '#FF0066']} />
      <Color colors={['#55E2B3', '#11BFCA']} />
      <Color colors={['#FC1F86', '#131A23']} flat />
      <Color colors={['#00B966', '#283646']} flat />
      <Color colors={['#DA1C3F', '#232323']} flat />
      <Color colors={['#C7E904', '#242227']} flat />
      <Color colors={['#2ECDD5', '#23BDC9']} />
      <Color colors={['#2ECDD5', '#23BDC9']} flat />
      <Color colors={['#FE9100', '#FE6100']} />
      <Color colors={['#5CC35C', '#4AB24D']} />
      <Color colors={['#A9B9C1', '#638190']} />
      <Color colors={['#638190', '#2B3B42']} />
      <Color colors={['#FD8800', '#E40500']} />
    </main>
  );
};

ReactDOM.render(<ColorsWoho />, document.getElementById('root'));
