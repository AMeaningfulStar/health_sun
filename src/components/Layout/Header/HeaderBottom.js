import React, { useState, useEffect } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import MyPage from '../../PageComponent/MyPage/MyPage';

const HeaderBottom = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const sentence = [
    '이걸 기억하겠다고 약속해줘. 넌 네가 믿는 것보다 더 용감하고, 보기보다 강하고, 네 생각보다 더 똑똑하다는 걸',
    '삶이 있는 한 희망은 있다',
    '산다는것 그것은 치열한 전투이다',
    '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다',
    '언제나 현재에 집중할수 있다면 행복할것이다',
    '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해',
    '직업에서 행복을 찾아라 아니면 행복이 무엇인지 절대 모를 것이다',
    '신은 용기있는자를 결코 버리지 않는다',
    '행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다',
    '피할수 없으면 즐겨라',
    '단순하게 살아라 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?',
    '먼저 자신을 비웃어라 다른 사람이 당신을 비웃기 전에',
    '먼저핀꽃은 먼저진다 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다',
    '행복한 삶을 살기위해 필요한 것은 거의 없다',
    '절대 어제를 후회하지 마라  인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다',
    '어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다',
    '너무 소심하고 까다롭게 자신의 행동을 고민하지 말라  모든 인생은 실험이다  더많이 실험할수록 더나아진다',
    '한번의 실패와 영원한 실패를 혼동하지 마라',
    '내일은 내일의 태양이 뜬다',
    '피할수 없으면 즐겨라'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (index === sentence.length - 1) {
        setIndex(0);
      }
      else {
        setIndex(index + 1);
      }
    }, 8000);

    return (() => clearInterval(timer))
  })
  

  return (
    <div>
      <div className='absolute w-auto h-[47px] top-[63px] left-[8px]'>
        <span className='text-[#DB8888] font-semibold text-sm'>오늘의 한 마디</span><br />
        <span className='text-[#8C8C8C] not-italic text-xs'>{sentence[index]}</span>
      </div>
      <button
        className='absolute h-[39px] w-[7.7vw] right-[15px] top-[70px] bg-[#F2F2F2] rounded-md hover:bg-[#E3E3E3]'
        onClick={() => setIsShowModal(!isShowModal)}
      >
        <div className='flex flex-row items-center gap-[0.6vw] absolute w-[7.7vw] h-[15.5px] left-[1vw] top-[13px]'>
          <p className='text-[#DB8888] not-italic text-sm flex items-center order-0 flex-grow-0'>나의 프로필</p>
          <AiOutlineRight className='text-[#5F647E] h-[31px] flex order-1 flex-grow-0 mb-[1px]' />
        </div>
      </button>
      <MyPage isShow={isShowModal} setIsShow={setIsShowModal} />
    </div>
  )
}

export default HeaderBottom