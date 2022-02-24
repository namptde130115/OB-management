import { MenuLayout } from '../../layout/menu-layout';
import { SettingOutlined } from '@ant-design/icons';

import { Collapse } from 'antd';

const { Panel } = Collapse;

export const ProfilePage = () => {
  function callback(key: any) {
    console.log(key);
  }

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const genExtra = () => (
    <SettingOutlined
      onClick={(event: any) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        // event.stopPropagation();
      }}
    />
  );
  return (
    <MenuLayout title='プロファイル'>
      <div>
        {' '}
        <Collapse
          // defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition='right'
        >
          <Panel
            showArrow={false}
            header={<p>klajsdlkajsdlkjas</p>}
            key='1'
            extra={genExtra()}
          >
            <div>{text}</div>
          </Panel>
          <Panel
            showArrow={false}
            header='This is panel header 2'
            key='2'
            extra={genExtra()}
          >
            <div>{text}</div>
          </Panel>
          <Panel
            showArrow={false}
            header='This is panel header 3'
            key='3'
            extra={genExtra()}
          >
            <div>{text}</div>
          </Panel>
        </Collapse>
      </div>
    </MenuLayout>
  );
};
