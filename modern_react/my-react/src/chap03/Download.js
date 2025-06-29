import dl_icon from '../image/dl.png';

export default function Download({ slug }) {

    return (
        <a href={`https://github.com/wikibook/${slug}/`}>
            <img src={dl_icon} title="아이콘 출처:https://www.flaticon.com/kr/free-icons/, 아이콘 제작자: Freepik - Flaticon" width={20}/>
        </a>
    )

}