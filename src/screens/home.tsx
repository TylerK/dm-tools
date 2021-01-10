import React from 'react'
import styled from 'styled-components'
import { Dropdown, Icon, Nav, Navbar } from 'rsuite'
import { Logo } from '../components/Logo'

export const Home = (): JSX.Element => {
    return (
        <Navbar>
            <Navbar.Header>
                <Logo>
                    <a href="#">DM Tools</a>
                </Logo>
            </Navbar.Header>
            <Navbar.Body>
                <Nav>
                    <Nav.Item>Campaigns</Nav.Item>
                    <Nav.Item>Tokens</Nav.Item>
                    <Nav.Item>Maps</Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item>Help</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}
