import { Menu } from 'antd';

//icons
import { AttachmentIcon } from '../../assets/icons/AttachmentIcon';
import { ProfileIcon } from '../../assets/icons/ProfileIcon';
import { AdvertisementIcon } from '../../assets/icons/AdvertisementIcon';
import { ScenarioIcon } from '../../assets/icons/ScenarioIcon';
import { ColorIcon } from '../../assets/icons/ColorIcon';
import { AnalistIcon } from '../../assets/icons/AnalistIcon';
import { SettingIcon } from '../../assets/icons/SettingIcon';
import { LogoutIcon } from '../../assets/icons/LogoutIcon';

//logo
import Logo from '../../assets/images/Logo.png';

import clsx from 'clsx';
import styles from './index.module.scss';

interface IProps {
  title: string;
  children: React.ReactNode;
}

export const MenuLayout: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className={clsx(styles.profile__container)}>
      <div className={clsx(styles.profile__menu__container)}>
        <div className={clsx(styles.profile__header)}>
          <div className={clsx(styles.logo)}>
            <img src={Logo} alt='Logo' />
          </div>
          <div className={clsx(styles.title)}>
            <p className={clsx(styles.sub1)}>福夏コサタア</p>
            <p className={clsx(styles.sub2)}>オレンジ色トボット</p>
          </div>
        </div>
        <div className={clsx(styles.profile__main)}>
          <Menu
            style={{ width: 228 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            className={clsx(styles.profile__menu__main)}
          >
            <Menu.Item key='1' icon={<ProfileIcon />}>
              プロファイル
            </Menu.Item>
            <Menu.Item key='2' icon={<AttachmentIcon />}>
              添付
            </Menu.Item>
            <Menu.Item key='3' icon={<ColorIcon />}>
              チャットボットUIの設定
            </Menu.Item>
            <Menu.Item key='4' icon={<AdvertisementIcon />}>
              広告投稿の設定
            </Menu.Item>
            <Menu.Item key='5' icon={<ScenarioIcon />}>
              シナリオの設定
            </Menu.Item>
            <Menu.Item key='6' icon={<AnalistIcon />}>
              分析
            </Menu.Item>
          </Menu>
          <Menu
            style={{ width: 228 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            className={clsx(styles.profile__menu__main)}
          >
            <Menu.Item key='7' icon={<SettingIcon />}>
              設定
            </Menu.Item>
            <Menu.Item key='8' icon={<LogoutIcon />}>
              ログアウト
            </Menu.Item>
          </Menu>
        </div>
      </div>
      <div className={clsx(styles.profile__content)}>
        <div className={clsx(styles.profile__content__header)}>
          <p>{title}</p>
        </div>
        <div className={clsx(styles.profile__content__main)}>{children}</div>
      </div>
    </div>
  );
};
