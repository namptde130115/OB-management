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
import { ButtonCustom } from '../../components/button';

const { Panel } = Collapse;

export const ProfilePage = () => {
  const [collapse, setCollapse] = useState<string[]>([]);
  const [collapse2, setCollapse2] = useState<string[]>([]);

  function callbackCollapse(key: any) {
    setCollapse(key);
  }

  function callbackCollapse2(key: any) {
    setCollapse2(key);
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
          onChange={callbackCollapse}
          expandIconPosition='right'
          className={clsx(styles.profile__collapse)}
        >
          <Panel
            showArrow={false}
            header={
              <TitleProfile
                className={clsx({
                  [styles.profile__title]: collapse.includes('1'),
                })}
                title='名前と苗字'
                content={
                  !collapse.includes('1')
                    ? 'グエンホアンサン'
                    : '新のんつ第度でフぐじ果変トでこ再細'
                }
              />
            }
            key='1'
            extra={!collapse.includes('1') ? genExtra() : genSmall()}
          >
            <div>
              <ButtonCustom type='primary' text='primary' icon={<EditIcon />} />
              <ButtonCustom type='ghost' text='ghost' icon={<EditIcon />} />
              <ButtonCustom type='link' text='link' icon={<EditIcon />} />
            </div>
          </Panel>
          <Panel
            showArrow={false}
            header={
              <TitleProfile
                className={clsx({
                  [styles.profile__title]: collapse.includes('2'),
                })}
                title='生年月日'
                content={
                  !collapse.includes('2')
                    ? '1996/01/01'
                    : '新のんつ第度でフぐじ果変トでこ再細'
                }
              />
            }
            key='2'
            extra={!collapse.includes('2') ? genExtra() : genSmall()}
          >
            <div>{text}</div>
          </Panel>
          <Panel
            showArrow={false}
            header={
              <TitleProfile
                className={clsx({
                  [styles.profile__title]: collapse.includes('3'),
                })}
                title='電子メールアドレス'
                content={
                  !collapse.includes('3')
                    ? 'example@gmail.com'
                    : '新のんつ第度でフぐじ果変トでこ再細'
                }
              />
            }
            key='3'
            extra={!collapse.includes('3') ? genExtra() : genSmall()}
          >
            <div>{text}</div>
          </Panel>
        </Collapse>
        <Collapse
          // defaultActiveKey={['1']}
          onChange={callbackCollapse2}
          expandIconPosition='right'
          className={clsx(styles.profile__collapse, styles.marginTop)}
        >
          <Panel
            showArrow={false}
            header={
              <TitleProfile
                className={clsx({
                  [styles.profile__title]: collapse2.includes('4'),
                })}
                title='パスワード'
                content={
                  !collapse2.includes('4')
                    ? '••••••••••'
                    : '何カエクラ況断99並練機博64弾ーッわず企励ソ原観ゅぞ渡極る阪筋イんめ治捕き'
                }
              />
            }
            key='4'
            extra={!collapse2.includes('4') ? genExtra() : genSmall()}
          >
            <div>{text}</div>
          </Panel>
        </Collapse>
      </div>
    </MenuLayout>
  );
};
