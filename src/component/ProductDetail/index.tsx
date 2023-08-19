import { styled } from 'styled-components';
import productImg from '../../asset/image/productDetail.jpeg';
import { Subtitle1 } from '../Typography/Subtitle';
import { Title4 } from '../Typography/Title';

interface ProductDetailProps {
  name: string;
  productCode: string;
  imgSrc?: string;
}

const ProductDetail = ({ name, productCode, imgSrc }: ProductDetailProps) => {
  return (
    <FlexBox>
      <ImageWrapper>
        <Image src={imgSrc ?? productImg} alt='profile' />
      </ImageWrapper>
      <ColumnBox>
        <Title4 $isBold>{name}</Title4>
        <Subtitle1 $isBold={false}>{productCode}</Subtitle1>
      </ColumnBox>
    </FlexBox>
  );
};

const ImageWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 4px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 32px;
  background-color: white;
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProductDetail;
