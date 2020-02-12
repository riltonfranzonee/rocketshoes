import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #3394ff;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#3394ff')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 20px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    display: block;
  }
  button {
    background-color: none;
    border: 0;
    padding: 5px;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solif #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const EmptyCart = styled.div`
  text-align: center;

  h1 {
    margin-top: 20px;
  }
`;
