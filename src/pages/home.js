
const position = [
  { left: 900, top: 20, fontSize: "10px", width: 62, height: 80 },
  { left: 700, top: 80, fontSize: "10px", width: 62, height: 80 },
  { left: 800, top: 120, fontSize: "10px", width: 62, height: 80 },
  { left: 650, top: 200, fontSize: "10px", width: 62, height: 80 },
  { left: 600, top: 300, fontSize: "10px", width: 62, height: 80 },
  { left: 550, top: 400, fontSize: "10px", width: 62, height: 80 },
  { left: 500, top: 500, fontSize: "10px", width: 62, height: 80 }
]

const box = "bg-gray-200  absolute rounded  bg-opacity-50 flex flex-wrap justify-around content-around shadow";

const pd = {
  normal: "bg-green-600 text-white rounded-full p-0 hover:bg-green-700",
  alarm: "bg-red-600 text-white rounded-full p-0 hover:bg-red-700"
}

const device = {
  normal: " bg-green-600 text-white  rounded p-0 block hover:bg-green-700 ",
  alarm: " bg-red-600 text-white  rounded p-0 block hover:bg-red-700 "
}



export default function Home() {
  return (
    <div className="bg-gray-100 rounded-t" >
      <p className="text- font-bold m-2">* 메인 단선도</p>
      <div className="flex justify-center relative">
        <img className="rounded shadow-xl" src="map.png" alt="" width="1320" />

        <div className={box} style={position[0]}>
          <button className={pd.alarm} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL1 EBG</button>
          <button className={device.alarm} style={{ width: 60, height: 15 }}>TL2 EBG</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
        </div>
        <div className={box} style={position[1]}>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL1 JB#1</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL2 JB#1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
        </div>
        <div className={box} style={position[2]}>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL1 JB#2</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL2 JB#2</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
        </div>
        <div className={box} style={position[3]}>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL1 JB#3</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL2 JB#3</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
        </div>
        <div className={box} style={position[4]}>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL1 JB#4</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL2 JB#5</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
        </div>
        <div className={box} style={position[5]}>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL1 JB#5</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL2 JB#5</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
        </div>
        <div className={box} style={position[6]}>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL1 EBA</button>
          <button className={device.normal} style={{ width: 60, height: 15 }}>TL2 EBA</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B1</button>
          <button className={pd.normal} style={{ width: 20, height: 20 }}>B2</button>
        </div>
      </div>
    </div>

  )
}
