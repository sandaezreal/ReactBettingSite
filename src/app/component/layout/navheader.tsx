"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function NavHeader() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img src="/ho_lo@3x.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Anthony Sanda Valencia</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="EsportBetting">Esport Beting</Navbar.Link>
        <Navbar.Link href="SportsBetting">Sport Betting</Navbar.Link>
        <Navbar.Link href="#">Casino</Navbar.Link>
        <Navbar.Link href="#">Promo</Navbar.Link>
        <Navbar.Link href="#">Help</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default NavHeader;
