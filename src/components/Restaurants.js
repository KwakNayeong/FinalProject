import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import artworks from "./data.json"; // 정확한 경로로 수정


function MainPage() {
  return (
    <Container>
      <h1>작품 리스트</h1>
      <Grid>
        {artworks.map((artwork) => (
          <Card key={artwork.RSTR_ID}>
            <ImageContainer>
              {artwork.IMAGE_URL ? (
                <img src={artwork.IMAGE_URL} alt={`${artwork.RSTR_NM} 이미지`} />
              ) : (
                <p>이미지가 없습니다.</p>
              )}
            </ImageContainer>
            <h2>{artwork.RSTR_NM}</h2>
            <p><strong>주소:</strong> {artwork.RSTR_RDNMADR}</p>
            <p>{artwork.RSTR_INTRCN_CONT.substring(0, 50)}...</p>
            <Link to={`/detail/${artwork.RSTR_ID}`}>자세히 보기</Link>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default MainPage;

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 5px;
  }
`;
