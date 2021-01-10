import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon, Nav, Navbar } from 'rsuite'

const MyLink = React.forwardRef((props: any, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    const { to, ...rest } = props
    console.log(props)
    return <Link to={to} {...rest} />
})

const NavLink = (props: any) => <Nav.Item componentClass={MyLink} {...props} />

export const NavBar = (): JSX.Element => {
    const { pathname } = useLocation()

    console.log(pathname)

    return (
        <Navbar>
            <Navbar.Body>
                <Nav>
                    <NavLink to="/" active={pathname === '/'} icon={<Icon icon="home" />}>
                        home
                    </NavLink>
                    <NavLink to="/maps" active={pathname.includes('/maps')} icon={<Icon icon="map" />}>
                        Maps
                    </NavLink>
                    <NavLink to="/tokens" active={pathname.includes('/tokens')} icon={<Icon icon="peoples-map" />}>
                        Tokens
                    </NavLink>
                </Nav>
                <Nav pullRight>
                    <Nav.Item>Help</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}
