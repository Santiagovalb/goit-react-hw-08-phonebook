import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  margin-right: auto;
  margin-left: auto;
  min-height: 20px;
  max-width: 900px;
  width: 100%;
  border-bottom: 1px solid grey;
  padding: 16px;
  margin-bottom: 24px;

  a {
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    padding: 4px 8px;
    font-size: 20px;

    &.active,
    &:hover,
    &:focus {
      color: #e45acd;
     
    }
  }
`;
