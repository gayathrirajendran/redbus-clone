import { useState } from "react"
import { logoImgSrc } from "../constants/application";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, MenuProps, Modal, Space, Typography } from "antd";
import { DownOutlined } from '@ant-design/icons';

type Props = {}

const navigation = [
  { name: 'Bus tickets', link: 'bus-tickets' },
  { name: 'Cab rental', link: '' },
  { name: 'Train tickets', link: '' }
]



const logoStyles = {
  height: '3rem',
  cursor: 'pointer'
}

const Header = (_props: Props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = navigation.map((navItem, index) =>
    <NavLink key={index} to={navItem.link}>{navItem.name}</NavLink>
  );


  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
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
    <header className="sticky top-0 flex items-center justify-between rb-content mx-auto">
      <div className="flex items-center">
        <img src={logoImgSrc} alt="redBus" style={logoStyles} />
        <nav className="main-nav">{links}</nav>
      </div>

      <div className="flex items-center">
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
    </header >



  )

}

export default Header