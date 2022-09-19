import { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

const Promotion = () => {
    const MOVIE = useRef();
    const [url, setUrl] = useState('raw3Nu0_mBQ');

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            // autohide: 1,
            // playsinline: 1,
            mute: 1,
            playlist: url,
        },

    };



    return (
        <section className="Promotion csc">
            <h2>홍보영상</h2>
            <p>건물 특성에 맞는 다양한 제품으로 고객의 요구를 충족시켜드립니다.</p>
            <div className="container">
                <div className='movie' ref={MOVIE} id='player' >
                    <YouTube videoId={url} opts={opts} className='u' />
                </div>


                <div className="des">
                    <div className='left' onClick={() => setUrl('raw3Nu0_mBQ')}>
                        <h3>IT Technology</h3>
                        <p>IT 기술이 창조하는 승강기 스마트 시스템</p>
                    </div>
                    <button>
                        <i className='xi-arrow-top'></i>
                    </button>
                    <div className='right' onClick={() => setUrl('beaUbnjlu14')}>
                        <h3>Green Technology</h3>
                        <p> 지구환경을 생각하는 녹색기술</p>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Promotion;