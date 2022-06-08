import { Menu, Dropdown } from 'antd';
import { NavLink } from 'react-router-dom';

// 自定义数据
import { noteLinks } from '@/common/local-data';

const menuItems = noteLinks.map((item, index) => ({
    key: `${index + 1}`,
    label: (
        <NavLink to={item.link}>{item.title}</NavLink>
    )
}))

const menu = (
    <Menu items={menuItems} />
);

export default function dropdown(item) {
    return (
        <Dropdown key={item.title}
            overlay={menu}
            placement="bottomLeft">
            <NavLink to={item.link}>{item.title}</NavLink>
        </Dropdown>
    )
}

