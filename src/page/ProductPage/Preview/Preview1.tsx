import styled from 'styled-components';

const Preview1 = () => {
  return (
    <FlexBox>
      <LeftWrapper>
        <ProfileWrapper>
          <ProfileImgWrapper>
            <ProfileImg src='' alt='' />
          </ProfileImgWrapper>
          <div>
            <div>ekz***</div>
            <div>2023.08.19</div>
          </div>
        </ProfileWrapper>
        <div>These are a staple in our house. Just try them--you will LOVE them.</div>
      </LeftWrapper>
      <RightWrapper>
        <QRWrapper>QR</QRWrapper>
        <div>All Review</div>
      </RightWrapper>
    </FlexBox>
  );
};

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 12px;
  background: #aa9fff;
`;

const FlexBox = styled.div`
  display: flex;
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileWrapper = styled.div`
  display: flex;
  /* gap: 6px; */
`;

const ProfileImgWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const QRWrapper = styled.div`
  width: 45px;
  height: 45px;
  background-color: black;
`;

export default Preview1;
