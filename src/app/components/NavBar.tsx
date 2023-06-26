import React, { useContext } from 'react';
import styled from 'styled-components';
import { IoIosAddCircle } from 'react-icons/io';
import { BsCardList } from 'react-icons/bs';
import { BiTask } from 'react-icons/bi';
import { NavContext } from '../contexts/NavContext';

export default function NavBar() {
  const { navBar } = useContext(NavContext);
  const Container = styled.section`
    display: ${navBar ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: calc(100% - 50px);
    width: 50px;
    top: 50px;
    background-color: #162035ff;
    color: white;
    font-size: 15px;
    padding-top: 10px;
  `;
  const Icon = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 25px;
    color: white;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
    p {
      font-size: 10px;
      text-align: center;
    }
  `;
  return (
    <Container>
      <Icon onClick={() => (window.location.href = '/pages/purchase')}>
        <IoIosAddCircle />
        <p>New</p>
      </Icon>
      <Icon onClick={() => (window.location.href = '/pages/home')}>
        <BsCardList />
        <p>Reqs</p>
      </Icon>
      <Icon onClick={() => (window.location.href = '/pages/approval')}>
        <BiTask />
        <p>Tasks</p>
      </Icon>
    </Container>
  );
}
