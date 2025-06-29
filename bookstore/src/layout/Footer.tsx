import {Container} from "react-bootstrap";

const Footer : React.FC = () => {
    return(
        <footer className="text-white py-1 mt-3" style={{ backgroundColor: '#4169E1' }}>
            <Container className="text-center">
                작성자 : 비르튜<br />
                이메일: <a href="mailto:yuyee@naver.com" className="text-white">yuyee@naver.com</a><br />
                블로그 : <a href="https://blog.naver.com/test000_" className="text-white" target="_blank" rel="noopener noreferrer">https://blog.naver.com/test000_</a><br />
                Copyright ⓒ OOO연구소 Corp. All Rights Reserved. <br />
            </Container>
        </footer>
    )
}
export default Footer;