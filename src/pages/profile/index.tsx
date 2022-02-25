import { MenuLayout } from '../../layout/menu-layout';
import { SettingOutlined } from '@ant-design/icons';

//component
import { TitleProfile } from '../../components/title-profile';
import { Collapse } from 'antd';

//icon
import { EditIcon } from '../../assets/icons/EditIcon';
import { ExitIcon } from '../../assets/icons/ExitIcon';

//styles
import styles from './index.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

const { Panel } = Collapse;

export const ProfilePage = () => {
  const [collapse, setCollapse] = useState<string[]>([]);

  function callback(key: any) {
    setCollapse(key);
    // console.log('collapse', collapse);
  }

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const genExtra = () => (
    <div
      className={clsx(styles.genExtra)}
      onClick={(event: any) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        // event.stopPropagation();
      }}
    >
      <EditIcon />
      <p>編集</p>
    </div>
  );

  const genSmall = () => (
    <div className={clsx(styles.genSmall)}>
      <ExitIcon />
      <p>選ぶ</p>
    </div>
  );
  return (
    <MenuLayout title='プロファイル'>
      <div>
        <Collapse
          // defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition='right'
          className={clsx(styles.profile__collapse)}
        >
          <Panel
            showArrow={false}
            header={
              <TitleProfile title='名前と苗字' content='グエンホアンサン' />
            }
            key='1'
            extra={!collapse.includes('1') ? genExtra() : genSmall()}
          >
            <div>{text}</div>
          </Panel>
          <Panel
            showArrow={false}
            header={<TitleProfile title='生年月日' content='1996/01/01' />}
            key='2'
            extra={genExtra()}
          >
            <div>{text}</div>
          </Panel>
          <Panel
            showArrow={false}
            header={
              <TitleProfile
                title='電子メールアドレス'
                content='example@gmail.com'
              />
            }
            key='3'
            extra={genExtra()}
          >
            <div>{text}</div>
          </Panel>
        </Collapse>
        <Collapse
          // defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition='right'
          className={clsx(styles.profile__collapse, styles.marginTop)}
        >
          <Panel
            showArrow={false}
            header={<TitleProfile title='パスワード' content='••••••••••' />}
            key='1'
            extra={genExtra()}
          >
            <div>{text}</div>
          </Panel>
        </Collapse>
      </div>
    </MenuLayout>
  );
};
