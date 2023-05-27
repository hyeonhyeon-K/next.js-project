'use client'

import Image from 'next/image'
import cukmin from "./../../../public/cukmin.png"

export default function DepositDetail(){
  return(
    <div className="depositdetailbox">
            <div className='depositdetailboxS'>
                <div className='depositdetailboxS1'>
                <Image src={cukmin} alt={'국민은행'} width="60" height="60" className='ddI'/>
                    <div className='ddInfTitle'>최고연</div>
                    <div className='ddbs2'>
                        <div className='ddInfNum'>4.2</div>
                        <div className='ddInfper'>%</div>
                    </div>
                </div>
                <div className='depositdetailcontent'>
                    <div className='ddcontentbuttonB'>
                        <button className='ddcontentTag'>목돈 모으기</button>
                        <button className='ddcontentTag1'>내일 희망형</button>
                        <button className='ddcontentTag1'>보통예금</button>
                    </div>
                    <div>
                        <div className='ddcontentTitle'>희망예금</div>
                        <div className='ddcontentC'>희망찬 내일을 위해 희망찬 미래를 위해 희망의 우리를 위해</div>
                    </div>
                        <div className='ddcontentInfbox'>
                            <div>기본 2.45%</div>
                            <div>(24개월)</div>
                        </div>
                </div>
            </div>
            <div className='depositdetailbuttonbox'>
                <button>장바구니</button>
                <button>가입하기</button>
                <button>은행사이트</button>
            </div>
    </div>

    
  )
}