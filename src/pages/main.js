import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Bar } from 'react-chartjs-2';

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + 1;

export default function Main() {
  const [location, setlocation] = useState("안인-강릉 #1T/L J/B#4 2B");
  return (
    <div>
      <div className="bg-gray-100 rounded-t" >
        <p className="text-xl font-bold m-2">* 메인 현황</p>
      </div>
      <div className="ml-4 flex flex-wrap items-center" style={{ height: 790 }}>
        <p className="text-lg">개소 : {location}</p>
        <div className="flex items-center justify-around w-full">
          <div className="" style={{ width: 400, height: 300, backgroundImage: "url(eba.png)", backgroundSize: "cover" }}>
          </div>
          <div className="">
            <p className="text-lg">금일 부분방전 이벤트 현황</p>
            <table className="rounded border-solid border-2 mt-1 shadow-lg" style={{ width: 1000 }}>
              <thead className="bg-gray-200 text-gray-600 uppercase leading-normal">
                <tr>
                  <th>분류</th>
                  <th>보이드</th>
                  <th>계면방전</th>
                  <th>코로나</th>
                  <th>노이즈</th>
                  <th>15분누적</th>
                  <th>발생현황</th>
                  <th>실시간</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>A상</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td><button>15분누적</button></td>
                  <td><button>발생현황</button></td>
                  <td><button>실시간</button></td>
                </tr>
                <tr className="text-center">
                  <td>B상</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td><button>15분누적</button></td>
                  <td><button>발생현황</button></td>
                  <td><button>실시간</button></td>
                </tr>
                <tr className="text-center">
                  <td>C상</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td><button>15분누적</button></td>
                  <td><button>발생현황</button></td>
                  <td><button>실시간</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <input type="radio" name="trand" />
          <span>이벤트 발생횟수</span>
          <input className="ml-3" type="radio" name="trand" />
          <span>최대신호크기</span>
          <input className="ml-3" type="radio" name="trand" />
          <span>신호 발생횟수</span>
        </div>

        <div className="flex justify-around w-full">
          <div style={{ width: 500 }}>
            <Bar
              data={{
                labels: Array.from({ length: 31 }, (v, i) => i + 1),
                datasets: [
                  {
                    label: 'A상',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: (() => {
                      let data = []
                      for (let index = 1; index < 32; index++) {
                        data.push(rand(0, 255))
                      }
                      return data
                    })()
                  }
                ]
              }}
              width={100}
              height={50}
              options={{
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: '시간'
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: '이벤트 발생횟수'
                    }
                  }
                }
              }}
            />
          </div>
          <div style={{ width: 500 }}>
            <Bar
              data={{
                labels: Array.from({ length: 31 }, (v, i) => i + 1),
                datasets: [
                  {
                    label: 'B상',
                    backgroundColor: 'rgb(255, 205, 86)',
                    borderColor: 'rgb(255, 205, 86)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255, 205, 86,0.4)',
                    hoverBorderColor: 'rgba(255, 205, 86,1)',
                    data: (() => {
                      let data = []
                      for (let index = 1; index < 32; index++) {
                        data.push(rand(0, 255))
                      }
                      return data
                    })()
                  }
                ]
              }}
              width={100}
              height={50}
              options={{
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: '시간'
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: '이벤트 발생횟수'
                    }
                  }
                }
              }}
            />
          </div>
          <div style={{ width: 500 }}>
            <Bar
              data={{
                labels: Array.from({ length: 31 }, (v, i) => i + 1),
                datasets: [
                  {
                    label: 'C상',
                    backgroundColor: 'rgb(54, 162, 235)',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(54, 162, 235,0.4)',
                    hoverBorderColor: 'rgba(54, 162, 235,1)',
                    data: (() => {
                      let data = []
                      for (let index = 1; index < 32; index++) {
                        data.push(rand(0, 255))
                      }
                      return data
                    })()
                  }
                ]
              }}
              width={100}
              height={50}
              options={{
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: '시간'
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: '이벤트 발생횟수'
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
