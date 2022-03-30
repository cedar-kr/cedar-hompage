import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const MapContainer = styled.div`
  height: 524px;

  ${({theme})=>theme.tablet`
    height: 698px;
    width: 56.15%;
  `};
  ${({theme})=>theme.mobile`
    height: 235px;
  `};
`;

export default function Map() {
  return (
    <Fade>
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.5215064453173!2d127.036959515309!3d37.47201807981576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca132c4ce0d31%3A0x552c6f04ec65d82a!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iOq1rCDqsJXrgqjrjIDroZwxOOq4uCA1IDPsuLU!5e0!3m2!1sko!2skr!4v1639369444913!5m2!1sko!2skr"
        title="(주)시더 위치 정보" 
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen={false}
        loading="lazy" /> 
    </MapContainer>
    </Fade>
  )
};