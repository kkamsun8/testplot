import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-gray-600 w-full text-white flex items-center justify-between shadow" style={{ height: 40 }}>
            <Link to="/" exact className="inline-block m-3">
                <img className="inline-block" src="SMND_White.svg" alt="" />
                <p className="inline-block text-center m-4">지중 송전 On-Line 부분방전 진단시스템</p>
            </Link>
            <div className="inline-block">
                <div className="text-sm text-white flex">
                    <Link to="/" exact>
                        <p className="hover:text-black m-3">메인단선도</p>
                    </Link>
                    <Link to="/main">
                        <p className="hover:text-black m-3">메인현황</p>
                    </Link>
                    <Link to="/realtime">
                        <p className="hover:text-black m-3">실시간</p>
                    </Link>
                    <Link to="/prpd">
                        <p className="hover:text-black m-3">PRPD</p>
                    </Link>
                    <Link to="/event">
                        <p className="hover:text-black m-3">이벤트</p>
                    </Link>
                    <Link to="/trend">
                        <p className="hover:text-black m-3">트렌드</p>
                    </Link>
                    <Link to="/alarm">
                        <p className="hover:text-black m-3">알람</p>
                    </Link>
                    <Link to="/setting">
                        <p className="hover:text-black m-3">설정</p>
                    </Link>

                </div>
            </div>
            <div className="text-xs flex justify-between mr-3" style={{ width: 200 }}>
                <p className="inline-block">
                    로그인 : SMND
                </p>
                <p className="inline-block">
                    권한타입 : 관리자
                </p>
            </div>
        </div>
    )
}

export default Header
