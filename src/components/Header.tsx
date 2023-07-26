import { useState } from "react"
import { logoImgSrc } from "../constants/application";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, MenuProps, Modal, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';


const navigation = [
  { name: 'Bus tickets', link: '/bus-tickets' },
  { name: 'Cab rental', link: '/cab-rental' },
  { name: 'Train tickets', link: '/train-tickets' }
]

const logoStyles = {
  height: '3rem',
  cursor: 'pointer'
}

const headerStyles = {
  backgroundColor: '#d84f57',
  color: 'white'
}

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = navigation.map((navItem, index) =>
    <NavLink key={index} to={navItem.link}>{navItem.name}</NavLink>
  );


  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === '1') {
      // open modal
      setIsModalOpen(true);
    }
  };

  const accountMenuItems: MenuProps['items'] = [
    {
      key: '1',
      label: 'Login / Sign up',
    }
  ];

  const menuProps = {
    items: accountMenuItems,
    onClick: handleMenuClick,
  };

  return (
    <header className="sticky py-2 z-10 top-0 w-full box-border" style={headerStyles}>
      <div className="rb-content flex items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <img src={logoImgSrc} alt="redBus" style={logoStyles} />
          <nav className="main-nav flex gap-2">{links}</nav>
        </div>

        <div className="flex gap-2 items-center">
          <button type="button" title="Help">Help</button>

          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Button
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>

          <Modal title="Basic Modal" open={isModalOpen} closable={true} onCancel={() => setIsModalOpen(false)}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>

        </div>
      </div>
    </header >



  )

}

export default Header