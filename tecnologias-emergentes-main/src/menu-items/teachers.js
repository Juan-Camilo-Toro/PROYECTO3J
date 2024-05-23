// assets
import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  TeamOutlined,
  UserAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const teachers = {
  id: 'teachers',
  title: 'Teachers',
  type: 'group',
  children: [
    {
      id: 'teachers',
      title: 'Teachers', // titulo de como se vera en el menu
      type: 'item',
      url: '/teachers', // hacia donde se dirige el menu
      icon: icons.TeamOutlined, // icono
      breadcrumbs: false
    }
  ]
};

export default teachers;
