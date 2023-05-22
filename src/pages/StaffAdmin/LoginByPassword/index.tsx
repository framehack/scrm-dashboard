import { Input, Button, Space } from 'antd';
import React, { useState } from 'react';

import styles from './index.less';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
// @ts-ignore
import ScriptTag from 'react-script-tag';
import { StaffAdminPasswordLogin } from '@/services/staffAdmin';

const PasswordLogin: React.FC = () => {

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Title
          level={1}
          className={styles.title}
          style={{ fontWeight: 500, fontSize: '28px', marginBottom: '8px' }}
        >
          用户登录
        </Title>
        <Paragraph className={styles.desc}>安全，强大，易开发的开源企业微信SCRM</Paragraph>
      </div>


      <div id="qrcodeContainer" className={styles.qrcodeContainer}>
        <Space direction="vertical">
          <Input placeholder="userid" />
          <Input.Password placeholder="password" />
          <Button>login</Button>
        </Space>
      </div>
    </div>
  );
};

export default PasswordLogin;
