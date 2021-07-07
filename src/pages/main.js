import { useState } from 'react';

export default function Main() {
  const [modalOn, setModalOn] = useState(false);

  const onOpenModal = () => {
    setModalOn(!modalOn);
  }

  const Modal = () => {
    return (
      <>
        <h1>테스트</h1>
      </>
    )
  }


  return (
    <div className="bg-gray-100 rounded-t" >
      <p className="text-xm font-bold m-2">* 메인 현황</p>
      <button onClick={onOpenModal}>모달테스트</button>
      {modalOn ? <Modal /> : ''}
    </div>

  )
}
